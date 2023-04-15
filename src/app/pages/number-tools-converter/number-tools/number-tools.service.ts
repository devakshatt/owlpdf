/**
 * Number Tools Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';
import numberToWords from '../../../../assets/lib/numberToWords.min.js';
import text2num from '../../../../assets/lib/words2number.js';
import roman from '../../../../assets/lib/roman.js';
import BigNumber from '../../../../assets/lib/bignumber.js';

@Injectable({
  providedIn: 'root'
})
export class NumberToolsService {

  constructor() { }

  numbersToWords(num) {
    var lines = num.split("\n");
    var ret = '';
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length) {
        ret += numberToWords.toWords(lines[i]) + "\n";
      }
      else {
        ret += "\n";
      }
    }
    return ret;
  }

  wordsToNumber(text) {
    text = text.replace(/,/g, ' ');
    var lines = text.split("\n");
    var ret = '';
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length) {
        ret += text2num(lines[i]) + "\n";
      }
      else {
        ret += "\n";
      }
    }
    return ret;
  }

  decimalToRoman(text) {
    text = text.replace(/\r\n/g, '\n');
    var lines = text.split('\n');
    var ret = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/[0-9]+/i.test(line)) {
        ret += roman.toRoman(line);
      }
      else {
        ret += line;
      }
      ret += '\n';
    }

    return ret;
  }

  RomanToDecimal(text) {
    text = text.replace(/\r\n/g, '\n');
    var lines = text.split('\n');
    var ret = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/[ivxlcdm]+/i.test(line)) {
        ret += roman.fromRoman(line);
      }
      else {
        ret += line;
      }
      ret += '\n';
    }

    return ret;
  }

  binary2Text(input) {
    input = input.replace(/\s+/g, ' ');
    let bytes = input.split(' ');
    for (var i = 0; i < bytes.length; i++) {
      if (bytes[i].length < 8) {
        for (var j = bytes[i].length; j != 8; j++) {
          bytes[i] = "0" + bytes[i];
        }
      }
    }
    input = bytes.join('');
    if (input.length % 8 != 0) {
      alert('Input binary doesnt split into groups of 8 bits evenly.');
      throw new Error('Input binary doesnt split into groups of 8 bits evenly.');
    }
    var res = '';
    for (var i = 0; i < input.length; i += 8) {
      res += String.fromCharCode(parseInt(input.substr(i, 8), 2));
    }

    return res;
  }

  text2Binary(input) {
    var bytes = [];
    for (var i = 0; i < input.length; i++) {
      var realBytes = unescape(encodeURIComponent(input[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = '';
    var textToBinFormat = '%0b ';
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i];
      var binByte = byte.toString(2);
      var binBytePadded = binByte;

      while (binBytePadded.length < 8) {
        binBytePadded = '0' + binBytePadded.toString();
      }

      var char = textToBinFormat;

      char = char.replace(/%0b/g, binBytePadded);
      char = char.replace(/%b/g, binByte);
      converted += char;
    }

    return converted;
  }

  binary2decimal(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 2);
        result += num.toString(10);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  binary2octal(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 2);
        result += num.toString(8);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  binary2hex(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 2);
        result += "0x" + num.toString(16);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  decimal2hex(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 10);
        result += "0x" + num.toString(16);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  decimal2binary(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 10);
        var numBin = num.toString(2);
        while (numBin.length < 8) {
          numBin = "0" + numBin;
        }
        result += numBin;
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  decimal2octal(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 10);
        result += num.toString(8);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  hex2binary(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 16);
        var numBin = num.toString(2);
        while (numBin.length < 8) {
          numBin = "0" + numBin;
        }
        result += numBin;
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  hex2decimal(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 16);
        result += num.toString(10);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  hex2octal(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 16);
        result += num.toString(8);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  octal2decimal(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 8);
        result += num.toString(10);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  octal2binary(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 8);
        var numBin = num.toString(2);
        while (numBin.length < 8) {
          numBin = "0" + numBin;
        }
        result += numBin;
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  octal2hex(input) {
    input = input.replace(/\r\n/g, '\n');
    var lines = input.split('\n');
    var result = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/(\w+)/.test(line)) {
        var num = new BigNumber(line, 8);
        result += "0x" + num.toString(16);
      }
      else {
        result += line;
      }
      result += '\n';
    }

    return result;
  }

  ascii2text(input) {
    input = input.replace(/\s+/g, ' ');
    let bytes = input.split(' ');
    var result = '';
    for (var i = 0; i < bytes.length; i++) {
      result += String.fromCharCode(bytes[i]);
    }
    return result;
  }

  text2ascii(input) {
    var bytes = [];
    for (var i = 0; i < input.length; i++) {
      var realBytes = unescape(encodeURIComponent(input[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = '';
    var textToDecFormat = "%d ";
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i];
      var decByte = byte.toString(10);
      var char = textToDecFormat;

      char = char.replace(/%d/g, decByte);
      converted += char;
    }

    return converted;
  }

  text2octal(input) {
    var bytes = [];
    for (var i = 0; i < input.length; i++) {
      var realBytes = unescape(encodeURIComponent(input[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = '';
    var textToOctFormat = '%o ';
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i];
      var octByte = byte.toString(8);
      var char = textToOctFormat;

      char = char.replace(/%o/g, octByte);
      converted += char;
    }

    return converted;
  }

  octal2text(input) {
    input = input.replace(/\s+/g, ' ');
    let bytes = input.split(' ');
    for (var i = 0; i < bytes.length; i++) {
      if (bytes[i].length < 3) {
        for (var j = bytes[i].length; j != 3; j++) {
          bytes[i] = "0" + bytes[i];
        }
      }
    }
    input = bytes.join('');
    if (input.length % 3 != 0) {
      alert('Input octal doesnt split into groups of 3 digits evenly.');
      throw new Error('Input octal doesnt split into groups of 3 digits evenly.');
    }
    var ret = '';
    for (var i = 0; i < input.length; i += 3) {
      ret += String.fromCharCode(parseInt(input.substr(i, 3), 8));
    }
    return ret;
  }

  text2hex(input) {
    var bytes = [];
    for (var i = 0; i < input.length; i++) {
      var realBytes = unescape(encodeURIComponent(input[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = '';
    var textToHexFormat = '%x ';
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i];
      var hexByte = byte.toString(16);
      if (hexByte.length == 1) {
        hexByte = '0' + hexByte;
      }
      var char = textToHexFormat;
      char = char.replace(/%x/g, hexByte);
      converted += char;
    }

    return converted;
  }

  hex2text(input) {
    input = input.replace(/0x/g, '');
    input = input.replace(/\s+/g, ' ');
    let bytes = input.split(' ');
    for (var i = 0; i < bytes.length; i++) {
      if (bytes[i].length == 1) {
        bytes[i] = "0" + bytes[i];
      }
    }
    input = bytes.join('');
    if (input.length % 2 != 0) {
      alert('Uneven number of hex characters.')
      throw new Error('Uneven number of hex characters.');
    }
    var result = '';
    for (var i = 0; i < input.length; i += 2) {
      result += String.fromCharCode(parseInt(input.substr(i, 2), 16));
    }
    return result;
  }

  text2decimal(input) {
    var bytes = [];
    for (var i = 0; i < input.length; i++) {
      var realBytes = unescape(encodeURIComponent(input[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }

    var converted = '';
    var textToDecFormat = '%d ';
    for (var i = 0; i < bytes.length; i++) {
      var byte = bytes[i];
      var decByte = byte.toString(10);
      var char = textToDecFormat;

      char = char.replace(/%d/g, decByte);
      converted += char;
    }

    return converted;
  }

  decimal2text(input) {
    input = input.replace(/\s+/g, ' ');
    let bytes = input.split(' ');
    var result = '';
    for (var i = 0; i < bytes.length; i++) {
      result += String.fromCharCode(bytes[i]);
    }
    return result;
  }
}
