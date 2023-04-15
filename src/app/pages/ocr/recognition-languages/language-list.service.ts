/**
 * List of Languages Service
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {

  constructor() { }

  languageList() {
    return [{
      "langcode": "afr",
      "language": "Afrikaans",
      "traineddata": "afr.traineddata"
    },
    {
      "langcode": "amh",
      "language": "Amharic",
      "traineddata": "amh.traineddata"
    },
    {
      "langcode": "ara",
      "language": "Arabic",
      "traineddata": "ara.traineddata"
    },
    {
      "langcode": "asm",
      "language": "Assamese",
      "traineddata": "asm.traineddata"
    },
    {
      "langcode": "aze",
      "language": "Azerbaijani",
      "traineddata": "aze.traineddata"
    },
    {
      "langcode": "aze_cyrl",
      "language": "Azerbaijani - Cyrillic",
      "traineddata": "aze_cyrl.traineddata"
    },
    {
      "langcode": "bel",
      "language": "Belarusian",
      "traineddata": "bel.traineddata"
    },
    {
      "langcode": "ben",
      "language": "Bengali",
      "traineddata": "ben.traineddata"
    },
    {
      "langcode": "bod",
      "language": "Tibetan",
      "traineddata": "bod.traineddata"
    },
    {
      "langcode": "bos",
      "language": "Bosnian",
      "traineddata": "bos.traineddata"
    },
    {
      "langcode": "bul",
      "language": "Bulgarian",
      "traineddata": "bul.traineddata"
    },
    {
      "langcode": "cat",
      "language": "Catalan; Valencian",
      "traineddata": "cat.traineddata"
    },
    {
      "langcode": "ceb",
      "language": "Cebuano",
      "traineddata": "ceb.traineddata"
    },
    {
      "langcode": "ces",
      "language": "Czech",
      "traineddata": "ces.traineddata"
    },
    {
      "langcode": "chi_sim",
      "language": "Chinese - Simplified",
      "traineddata": "chi_sim.traineddata"
    },
    {
      "langcode": "chi_tra",
      "language": "Chinese - Traditional",
      "traineddata": "chi_tra.traineddata"
    },
    {
      "langcode": "chr",
      "language": "Cherokee",
      "traineddata": "chr.traineddata"
    },
    {
      "langcode": "cym",
      "language": "Welsh",
      "traineddata": "cym.traineddata"
    },
    {
      "langcode": "dan",
      "language": "Danish",
      "traineddata": "dan.traineddata"
    },
    {
      "langcode": "deu",
      "language": "German",
      "traineddata": "deu.traineddata"
    },
    {
      "langcode": "dzo",
      "language": "Dzongkha",
      "traineddata": "dzo.traineddata"
    },
    {
      "langcode": "ell",
      "language": "Greek",
      "traineddata": " Modern (1453-)"
    },
    {
      "langcode": "eng",
      "language": "English",
      "traineddata": "eng.traineddata"
    },
    {
      "langcode": "enm",
      "language": "English",
      "traineddata": " Middle (1100-1500)"
    },
    {
      "langcode": "epo",
      "language": "Esperanto",
      "traineddata": "epo.traineddata"
    },
    {
      "langcode": "est",
      "language": "Estonian",
      "traineddata": "est.traineddata"
    },
    {
      "langcode": "eus",
      "language": "Basque",
      "traineddata": "eus.traineddata"
    },
    {
      "langcode": "fas",
      "language": "Persian",
      "traineddata": "fas.traineddata"
    },
    {
      "langcode": "fin",
      "language": "Finnish",
      "traineddata": "fin.traineddata"
    },
    {
      "langcode": "fra",
      "language": "French",
      "traineddata": "fra.traineddata"
    },
    {
      "langcode": "frk",
      "language": "German Fraktur",
      "traineddata": "frk.traineddata"
    },
    {
      "langcode": "frm",
      "language": "French",
      "traineddata": " Middle (ca. 1400-1600)"
    },
    {
      "langcode": "gle",
      "language": "Irish",
      "traineddata": "gle.traineddata"
    },
    {
      "langcode": "glg",
      "language": "Galician",
      "traineddata": "glg.traineddata"
    },
    {
      "langcode": "grc",
      "language": "Greek",
      "traineddata": " Ancient (-1453)"
    },
    {
      "langcode": "guj",
      "language": "Gujarati",
      "traineddata": "guj.traineddata"
    },
    {
      "langcode": "hat",
      "language": "Haitian; Haitian Creole",
      "traineddata": "hat.traineddata"
    },
    {
      "langcode": "heb",
      "language": "Hebrew",
      "traineddata": "heb.traineddata"
    },
    {
      "langcode": "hin",
      "language": "Hindi",
      "traineddata": "hin.traineddata"
    },
    {
      "langcode": "hrv",
      "language": "Croatian",
      "traineddata": "hrv.traineddata"
    },
    {
      "langcode": "hun",
      "language": "Hungarian",
      "traineddata": "hun.traineddata"
    },
    {
      "langcode": "iku",
      "language": "Inuktitut",
      "traineddata": "iku.traineddata"
    },
    {
      "langcode": "ind",
      "language": "Indonesian",
      "traineddata": "ind.traineddata"
    },
    {
      "langcode": "isl",
      "language": "Icelandic",
      "traineddata": "isl.traineddata"
    },
    {
      "langcode": "ita",
      "language": "Italian",
      "traineddata": "ita.traineddata"
    },
    {
      "langcode": "ita_old",
      "language": "Italian - Old",
      "traineddata": "ita_old.traineddata"
    },
    {
      "langcode": "jav",
      "language": "Javanese",
      "traineddata": "jav.traineddata"
    },
    {
      "langcode": "jpn",
      "language": "Japanese",
      "traineddata": "jpn.traineddata"
    },
    {
      "langcode": "kan",
      "language": "Kannada",
      "traineddata": "kan.traineddata"
    },
    {
      "langcode": "kat",
      "language": "Georgian",
      "traineddata": "kat.traineddata"
    },
    {
      "langcode": "kat_old",
      "language": "Georgian - Old",
      "traineddata": "kat_old.traineddata"
    },
    {
      "langcode": "kaz",
      "language": "Kazakh",
      "traineddata": "kaz.traineddata"
    },
    {
      "langcode": "khm",
      "language": "Central Khmer",
      "traineddata": "khm.traineddata"
    },
    {
      "langcode": "kir",
      "language": "Kirghiz; Kyrgyz",
      "traineddata": "kir.traineddata"
    },
    {
      "langcode": "kor",
      "language": "Korean",
      "traineddata": "kor.traineddata"
    },
    {
      "langcode": "kur",
      "language": "Kurdish",
      "traineddata": "kur.traineddata"
    },
    {
      "langcode": "lao",
      "language": "Lao",
      "traineddata": "lao.traineddata"
    },
    {
      "langcode": "lat",
      "language": "Latin",
      "traineddata": "lat.traineddata"
    },
    {
      "langcode": "lav",
      "language": "Latvian",
      "traineddata": "lav.traineddata"
    },
    {
      "langcode": "lit",
      "language": "Lithuanian",
      "traineddata": "lit.traineddata"
    },
    {
      "langcode": "mal",
      "language": "Malayalam",
      "traineddata": "mal.traineddata"
    },
    {
      "langcode": "mar",
      "language": "Marathi",
      "traineddata": "mar.traineddata"
    },
    {
      "langcode": "mkd",
      "language": "Macedonian",
      "traineddata": "mkd.traineddata"
    },
    {
      "langcode": "mlt",
      "language": "Maltese",
      "traineddata": "mlt.traineddata"
    },
    {
      "langcode": "msa",
      "language": "Malay",
      "traineddata": "msa.traineddata"
    },
    {
      "langcode": "mya",
      "language": "Burmese",
      "traineddata": "mya.traineddata"
    },
    {
      "langcode": "nep",
      "language": "Nepali",
      "traineddata": "nep.traineddata"
    },
    {
      "langcode": "nld",
      "language": "Dutch; Flemish",
      "traineddata": "nld.traineddata"
    },
    {
      "langcode": "nor",
      "language": "Norwegian",
      "traineddata": "nor.traineddata"
    },
    {
      "langcode": "ori",
      "language": "Oriya",
      "traineddata": "ori.traineddata"
    },
    {
      "langcode": "pan",
      "language": "Panjabi; Punjabi",
      "traineddata": "pan.traineddata"
    },
    {
      "langcode": "pol",
      "language": "Polish",
      "traineddata": "pol.traineddata"
    },
    {
      "langcode": "por",
      "language": "Portuguese",
      "traineddata": "por.traineddata"
    },
    {
      "langcode": "pus",
      "language": "Pushto; Pashto",
      "traineddata": "pus.traineddata"
    },
    {
      "langcode": "ron",
      "language": "Romanian; Moldavian; Moldovan",
      "traineddata": "ron.traineddata"
    },
    {
      "langcode": "rus",
      "language": "Russian",
      "traineddata": "rus.traineddata"
    },
    {
      "langcode": "san",
      "language": "Sanskrit",
      "traineddata": "san.traineddata"
    },
    {
      "langcode": "sin",
      "language": "Sinhala; Sinhalese",
      "traineddata": "sin.traineddata"
    },
    {
      "langcode": "slk",
      "language": "Slovak",
      "traineddata": "slk.traineddata"
    },
    {
      "langcode": "slv",
      "language": "Slovenian",
      "traineddata": "slv.traineddata"
    },
    {
      "langcode": "spa",
      "language": "Spanish; Castilian",
      "traineddata": "spa.traineddata"
    },
    {
      "langcode": "spa_old",
      "language": "Spanish; Castilian - Old",
      "traineddata": "spa_old.traineddata"
    },
    {
      "langcode": "sqi",
      "language": "Albanian",
      "traineddata": "sqi.traineddata"
    },
    {
      "langcode": "srp",
      "language": "Serbian",
      "traineddata": "srp.traineddata"
    },
    {
      "langcode": "srp_latn",
      "language": "Serbian - Latin",
      "traineddata": "srp_latn.traineddata"
    },
    {
      "langcode": "swa",
      "language": "Swahili",
      "traineddata": "swa.traineddata"
    },
    {
      "langcode": "swe",
      "language": "Swedish",
      "traineddata": "swe.traineddata"
    },
    {
      "langcode": "syr",
      "language": "Syriac",
      "traineddata": "syr.traineddata"
    },
    {
      "langcode": "tam",
      "language": "Tamil",
      "traineddata": "tam.traineddata"
    },
    {
      "langcode": "tel",
      "language": "Telugu",
      "traineddata": "tel.traineddata"
    },
    {
      "langcode": "tgk",
      "language": "Tajik",
      "traineddata": "tgk.traineddata"
    },
    {
      "langcode": "tgl",
      "language": "Tagalog",
      "traineddata": "tgl.traineddata"
    },
    {
      "langcode": "tha",
      "language": "Thai",
      "traineddata": "tha.traineddata"
    },
    {
      "langcode": "tir",
      "language": "Tigrinya",
      "traineddata": "tir.traineddata"
    },
    {
      "langcode": "tur",
      "language": "Turkish",
      "traineddata": "tur.traineddata"
    },
    {
      "langcode": "uig",
      "language": "Uighur; Uyghur",
      "traineddata": "uig.traineddata"
    },
    {
      "langcode": "ukr",
      "language": "Ukrainian",
      "traineddata": "ukr.traineddata"
    },
    {
      "langcode": "urd",
      "language": "Urdu",
      "traineddata": "urd.traineddata"
    },
    {
      "langcode": "uzb",
      "language": "Uzbek",
      "traineddata": "uzb.traineddata"
    },
    {
      "langcode": "uzb_cyrl",
      "language": "Uzbek - Cyrillic",
      "traineddata": "uzb_cyrl.traineddata"
    },
    {
      "langcode": "vie",
      "language": "Vietnamese",
      "traineddata": "vie.traineddata"
    },
    {
      "langcode": "yid",
      "language": "Yiddish",
      "traineddata": "yid.traineddata"
    }
    ];
  }
}
