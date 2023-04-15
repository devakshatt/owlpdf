/**
 * Encryption Tools Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';
import Base64Thing from '../../../../assets/lib/base64.js';
import md2 from '../../../../assets/lib/md2.js';
import md4 from '../../../../assets/lib/md4.js';
import CryptoJS from '../../../../assets/lib/md5.js';
import CryptoJSSHA1 from '../../../../assets/lib/sha1.js';
import CryptoJSSHA256 from '../../../../assets/lib/sha256.js';
import CryptoJSSHA512 from '../../../../assets/lib/sha512.js';
import utf8 from '../../../../assets/lib/utf8.js';


@Injectable({
  providedIn: 'root'
})
export class EncryptionToolsService {

  constructor() { }

  base64Encode(text) {
    var bytes = [];
    for (var i = 0; i < text.length; i++) {
      var realBytes = unescape(encodeURIComponent(text[i]));
      for (var j = 0; j < realBytes.length; j++) {
        bytes.push(realBytes[j].charCodeAt(0));
      }
    }
    var B64 = new Base64Thing;
    var encoded = B64.uint8ToBase64(bytes);
    return encoded;
  }

  base64Decode(text) {
    var B64 = new Base64Thing;
    var bytes = B64.b64ToByteArray(text);
    var encodedString = String.fromCharCode.apply(null, bytes);
    var decoded = decodeURIComponent(escape(encodedString));
    return decoded;
  }

  urlEncode(text) {
    return encodeURIComponent(text);
  }

  urlDecode(text) {
    return decodeURIComponent(text);
  }

  md2hashGenerator(text) {
    return md2(text);
  }

  md4hashGenerator(text) {
    return md4(text);
  }

  md5hashGenerator(text) {
    var hash = CryptoJS.MD5(text);
    return hash;
  }

  sha1hashGenerator(text) {
    var hash = CryptoJSSHA1.SHA1(text);
    return hash;
  }

  sha256hashGenerator(text) {
    var hash = CryptoJSSHA256.SHA256(text);
    return hash;
  }

  sha512hashGenerator(text) {
    var hash = CryptoJSSHA512.SHA512(text);
    return hash;
  }

  utf8Encode(text) {
    var encoded = utf8.encode(text);
    var ret = '';
    for (var i = 0; i < encoded.length; i++) {
      var hex = encoded[i].charCodeAt(0).toString(16);
      if (hex.length == 1) {
        hex = "0" + hex;
      }
      ret += "\\x" + hex;
    }
    return ret;
  }

  utf8Decode(text) {
    text = text.replace(/^\s+/, '');
    text = text.replace(/\s+$/, '');
    var bytes = [];
    if (/^(\\x[0-9a-f]{1,2})/i.test(text)) {
      bytes = text.match(/(\\x[0-9a-f]{1,2})/gi);
    }
    else if (/^0x[0-9a-f]{1,2}/i.test(text)) {
      bytes = text.match(/(0x[0-9a-f]{1,2})/gi);
      if (bytes.length == 1) {
        if (text.length == 3 || text.length == 4) {
          // A single 0xa or 0xaa value
          // Do nothing as it's in "bytes" array already
          //
        }
        else {
          // If we are here, that means we had a 0xaabbccdd etc value
          // Extract all "aa", "bb", "cc", "dd" pairs
          //
          text = text.replace("0x", "");
          bytes = text.match(/([0-9a-f]{2})/gi);
        }
      }
    }
    else if (/^[0-9a-f]{1,2}$/i.test(text)) {
      // one byte
      bytes.push(text);
    }
    else if (/^[0-9a-f]{1,2} /i.test(text)) {
      bytes = text.split(' ');
    }
    else {
      var chars = text.split('');
      for (var i = 0; i < chars.length; i++) {
        bytes.push(chars[i].charCodeAt(0).toString(16));
      }
    }

    for (var i = 0; i < bytes.length; i++) {
      bytes[i] = bytes[i].replace("\\x", '');
      bytes[i] = bytes[i].replace("\\X", '');
    }

    var utf8Text = '';
    for (var i = 0; i < bytes.length; i++) {
      utf8Text += String.fromCharCode(parseInt(bytes[i], 16));
    }

    return utf8.decode(utf8Text);
  }
}
