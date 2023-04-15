/**
 * Conversion Tools Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';
import X2JS from '../../../assets/vendor/xml2json.js';
import * as vkbeautify from '../../../assets/vendor/vkbeautify.js';
import json2xml from '../../../assets/vendor/json2xml.js';
import json2csv from '../../../assets/vendor/json2csv.js';
import * as csvtojson from '../../../assets/vendor/csvtojson.js';
import jsonToText from '../../../assets/vendor/jsonToText.js';
import jsonToTsv from '../../../assets/vendor/json-to-tsv.js';

@Injectable({
  providedIn: 'root'
})
export class ConversionToolsService {

  constructor() { }

  xml2jsonConverter(xml) {
    var x2js = new X2JS();
    var converted = JSON.stringify(x2js.xml_str2json(xml), null, 2);
    return converted;
  }

  json2xmlConverter(json) {
    try {
      var parsed = JSON.parse(json);
    }
    catch (err) {
      throw new Error("Invalid JSON"); // rethrow for exceptionFn
    }
    var converted = vkbeautify.xml(json2xml(parsed));
    return converted;
  }

  json2csvConverter(json) {
    try {
      var parsed = JSON.parse(json);
      var converted = json2csv({
        data: parsed
      });
    }
    catch (err) {
      throw new Error("Invalid JSON"); // rethrow for exceptionFn
    }
    return converted;
  }

  csv2jsonConverter(csv) {
    return csvtojson({
      output: "json"
    })
      .fromString(csv)
      .then((jsonData) => {
        return JSON.stringify(jsonData, null, 2);
      })
  }

  json2textConverter(text) {
    try {
      var parsed = JSON.parse(text);
    }
    catch (err) {
      throw new Error("Invalid JSON"); // rethrow for exceptionFn
    }

    return jsonToText(parsed);
  }

  json2TsvConverter(text) {
    // var parsed = JSON.parse(text);
    let csv = this.json2csvConverter(text);
    return this.getCSVTOTSV(csv);
    // return jsonToTsv(csv);
  }

  getCSVTOTSV(e) {
    return e.split(",").join("\t")
  }

  tsv2jsonConverter(text) {
    text = text.replace("\r\n", "\n");
    var lines = text.split("\n");
    var data = [];
    var fields = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var cols = line.split("\t");
      if (i == 0) {
        fields = cols;
      }
      else {
        var jsonObj = {};
        for (var j = 0; j < fields.length; j++) {
          jsonObj[fields[j]] = cols[j];
        }
        data.push(jsonObj);
      }
    }

    var prettified = JSON.stringify(data, null, 2);
    return prettified;
  }
}