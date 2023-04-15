/**
 * Text Tools Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';
import removeAccents from '../../../../assets/lib/remove-accents.js';
import morse from '../../../../assets/lib/morse.js';

@Injectable({
  providedIn: 'root'
})
export class TextToolsService {

  constructor() { }

  textLowercase(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
      result += text[i].toLowerCase();
    }
    return result;
  }

  textUppercase(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
      result += text[i].toUpperCase();
    }
    return result;
  }

  convertTitleCase(str) {
    var smallWords = /^(a|an|and|as|at|but|by|en|for|from|if|in|nor|of|on|or|per|the|to|vs?\.?|via|with|without|within)$/i;

    if (!str)
      return str
    return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
      if (index > 0 && index + match.length !== title.length &&
        match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' &&
        (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
        title.charAt(index - 1).search(/[^\s-]/) < 0) {
        return match.toLowerCase();
      }

      if (match.substr(1).search(/[A-Z]|\../) > -1) {
        return match;
      }

      return match.charAt(0).toUpperCase() + match.substr(1);
    });
  }

  textTitleCase(text) {
    text = text.toLowerCase();
    return this.convertTitleCase(text);
  }

  invertTextCase(text) {
    var ret = '';
    for (var i = 0; i < text.length; i++) {
      var isLower = text[i].toLowerCase() == text[i];
      if (isLower) {
        ret += text[i].toUpperCase();
      }
      else {
        ret += text[i].toLowerCase();
      }
    }
    return ret;
  }

  textCapitalize(text) {
    var ret = '';
    text = text.replace(/\r\n/, '\n');
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var words = line.split(' ');
      for (var j = 0; j < words.length; j++) {
        words[j] = words[j].charAt(0).toUpperCase() + words[j].substring(1);
      }
      lines[i] = words.join(' ');
    }
    return lines.join('\n');
  }

  textReverse(text) {
    return text.split('').reverse().join('');
  }

  characterCount(text) {
    return text.length;
  }

  wordsCount(text) {
    return text.match(/\S+/g).length;
  }

  lineCount(text) {
    return text.split('\n').length;
  }


  paragraphsCount(text) {
    var paragraphs = text.split(/\n\n+/g);
    var paragraphCount = 0;
    for (var i = 0; i < paragraphs.length; i++) {
      if (paragraphs[i].length != 0) {
        paragraphCount++;
      }
    }
    return paragraphCount;
  }

  spacesToTabs(text) {
    var spaceCount = 1;
    var rx = new RegExp(" {" + spaceCount + "}", "g");
    return text.replace(rx, "\t");
  }

  tabsToSpaces(text) {
    var spaceCount = 1;
    var spaceStr = '';
    for (var i = 1; i <= spaceCount; i++) {
      spaceStr += ' ';
    }
    return text.replace(/\t/g, spaceStr);
  }

  spacesToNewlines(text) {
    return text.replace(/\s+/g, "\n");
  }

  newlinesToSpaces(text) {
    text = text.replace(/\r\n/g, '\n');
    var lines = text.split('\n');
    var retLines = [];
    for (var i = 0; i < lines.length; i++) {
      if (/\w/.test(lines[i])) {
        retLines.push(lines[i]);
      }
    }
    return retLines.join(' ');
  }

  removeLetterAccents(text) {
    text = removeAccents(text);
    return text;
  }

  removeWhitespace(text) {
    text = text.replace(/ +/g, ' ');
    text = text.replace(/\t+/g, ' ');
    text = text.replace(/^\s+/g, '');
    text = text.replace(/\s+$/g, '');
    return text;
  }

  removeAllWhitespace(text) {
    text = text.replace(/\s+/g, '');
    return text;
  }

  extractEmails(text) {
    var matches = text.match(/[a-z0-9._%+-]+@[a-z0-9-]+\.([a-z0-9]+)/gi);
    var ret = '';
    if (matches) {
      for (var i = 0; i < matches.length; i++) {
        ret += matches[i];
        ret += "\n";
      }
    }
    return ret;
  }

  extractURLs(text) {
    var urlRegex = new RegExp(
      // protocol identifier
      "(?:(?:https?|ftp)://)" +
      // user:pass authentication
      "(?:\\S+(?::\\S*)?@)?" +
      "(?:" +
      // IP address exclusion
      // private & local networks
      "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
      "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
      "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
      "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
      "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
      "|" +
      // host name
      "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
      // domain name
      "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
      // TLD identifier
      "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
      // TLD may end with dot
      "\\.?" +
      ")" +
      // port number
      "(?::\\d{2,5})?" +
      // resource path
      "(?:[/?#]\\S*)?",
      "gi"
    );
    var matches = text.match(urlRegex);
    var ret = '';
    if (matches) {
      for (var i = 0; i < matches.length; i++) {
        ret += matches[i];
        ret += "\n";
      }
    }
    return ret;
  }

  extractNumbers(text) {
    var matches = text.match(/-?([0-9](\.[0-9]+)?)+/gi);
    var ret = '';
    if (matches) {
      for (var i = 0; i < matches.length; i++) {
        ret += matches[i];
        ret += "\n";
      }
    }
    return ret;
  }

  textToMorse(text) {
    return morse.textToMorse(text);
  }

  morseToText(text) {
    return morse.morseToText(text);
  }

  countCharacterFrequency(text) {
    var charStats = {};
    var chars = text.split('');
    for (var i = 0; i < chars.length; i++) {
      var char = chars[i];
      if (charStats[char] === undefined) {
        charStats[char] = 1;
      }
      else {
        charStats[char]++;
      }
    }
    var sortedCharStatsKeys = Object.keys(charStats).sort(function (a, b) {
      return charStats[b] - charStats[a];
    });
    var retText = '';
    for (var i = 0; i < sortedCharStatsKeys.length; i++) {
      var key = sortedCharStatsKeys[i];
      var strKey = key;
      if (key.charCodeAt(0) == 10) {
        strKey = String.fromCharCode(10);
      }
      else if (key.charCodeAt(0) == 32) {
        strKey = String.fromCharCode(32);
      }

      retText += strKey + ": " + charStats[key] + "\n";
    }
    return retText;
  }

  countWordFrequency(text) {
    var wordStats = {};
    var words = text.split(/\s+/g);
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      word = word.replace(/[,.?!]+/, '');
      if (!word.length) {
        continue;
      }
      if (wordStats[word] === undefined) {
        wordStats[word] = 1;
      }
      else {
        wordStats[word]++;
      }
    }
    var sortedWordStatsKeys = Object.keys(wordStats).sort(function (a, b) {
      return wordStats[b] - wordStats[a];
    });
    var retText = '';
    for (var i = 0; i < sortedWordStatsKeys.length; i++) {
      var key = sortedWordStatsKeys[i];
      retText += key + ": " + wordStats[key] + "\n";
    }
    return retText;
  }

  textSplit(text, symbol) {
    var symbol = symbol ? symbol : " ";
    var parts = text.split(symbol);
    return parts.join("\n");
  }

  deleteDuplicateLines(text) {
    text = text.replace(/\r\n/g, '\n');
    var lines = text.split('\n');
    var seen = {};
    var ret = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (seen[line]) {
        continue;
      }
      seen[line] = 1;
      ret += line + '\n';
    }
    return ret;
  }

  textReplace(text, replaceFrom, replaceTo) {
    if (replaceTo == "\\n") {
      replaceTo = "\n";
    }
    else if (replaceTo == "\\t") {
      replaceTo = "\t";
    }
    return text.split(replaceFrom).join(replaceTo);
  }

  RemoveEmptyLines(text) {
    text = text.replace(/\r\n/g, '\n');
    var lines = text.split('\n');
    var ret = '';

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (/^[\s\t]*$/.test(line)) {
        continue;
      }
      ret += line + '\n';
    }
    return ret;
  }

}
