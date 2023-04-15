/**
 * Text Tools Module
 * @author    AppsPlaces <appsplaces@gmail.com>
 * @copyright Copyright (c) 2021
 * @license   AppsPlaces
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextToolsComponent } from './text-tools.component';

// Routes
const routes: Routes = [
  { path: 'text-tools', component: TextToolsComponent, data: { title: "Text Tools", subTitle: "Your online tools for converting and generating text, number and many more" } },
  { path: 'text-lowercase', component: TextToolsComponent, data: { title: "Convert Text to Lowercase", subTitle: "A free online tool to converts all characters in lowercase letter and strings to lower case characters" } },
  { path: 'text-uppercase', component: TextToolsComponent, data: { title: "Convert Text to Uppercase", subTitle: "A free online tool to converts all characters in uppercase letter and strings to upper case characters" } },
  { path: 'text-titlecase', component: TextToolsComponent, data: { title: "Convert Text to Titlecase", subTitle: "A free online tool to converts all characters in titlecase letter and strings to title case characters" } },
  { path: 'text-invert-case', component: TextToolsComponent, data: { title: "Convert Text to Invertcase", subTitle: "A free online tool to converts all characters in invertcase letter and strings to Invert case characters" } },
  { path: 'text-capitalize', component: TextToolsComponent, data: { title: "Capitalize Words in Text", subTitle: "A free online tool to convert text capitalizer uppercases first letter of every word in text and strings" } },
  { path: 'text-reverse', component: TextToolsComponent, data: { title: "Reverse Text", subTitle: "A free online tool to reverse or mirror text and strings " } },
  { path: 'spaces-to-tabs', component: TextToolsComponent, data: { title: "Convert Spaces To Tabs", subTitle: "Spaces to tabs converter convert or replaces spaces to tabs in text and strings" } },
  { path: 'tabs-to-spaces', component: TextToolsComponent, data: { title: "Convert Tabs To Spaces", subTitle: "Tabs to spaces converter convert or replaces tabs to spaces in text and strings" } },
  { path: 'spaces-to-newlines', component: TextToolsComponent, data: { title: "Convert Spaces To Newlines", subTitle: "Spaces to newlines converter convert or replaces spaces with line breaks in text and strings" } },
  { path: 'newlines-to-spaces', component: TextToolsComponent, data: { title: "Convert Newlines To Spaces", subTitle: "Newlines to spaces converter convert or replaces newlines with spaces in text and strings" } },
  { path: 'remove-letter-accents', component: TextToolsComponent, data: { title: "Remove Letter Accents", subTitle: "Letter accent remover removes all diacritical marks in text and strings" } },
  { path: 'remove-whitespace', component: TextToolsComponent, data: { title: "Remove Whitespace", subTitle: "A free online tool to remove extra whitespace and tabs from text and string" } },
  { path: 'remove-all-whitespace', component: TextToolsComponent, data: { title: "Remove All Whitespace", subTitle: "A free online tool to remove all whitespace and tabs from text and string" } },
  { path: 'extract-emails', component: TextToolsComponent, data: { title: "Extract Emails From Text", subTitle: "A free online tool to extract email addresses from the text content and string" } },
  { path: 'extract-urls', component: TextToolsComponent, data: { title: "Extract URLs From Text", subTitle: "A free online tool to extract URLs from the text content and string" } },
  { path: 'extract-numbers', component: TextToolsComponent, data: { title: "Extract Numbers From Text", subTitle: "A free online tool to extract numbers from the text content and string" } },
  { path: 'text-to-morse', component: TextToolsComponent, data: { title: "Convert Text To Morse", subTitle: "A free online tool to convert text To morse code" } },
  { path: 'morse-to-text', component: TextToolsComponent, data: { title: "Convert Morse To Text", subTitle: "A free online tool to convert morse To text code" } },
  { path: 'count-character-frequency', component: TextToolsComponent, data: { title: "Count Character Frequency in Text", subTitle: "Character frequency counter count how many times each character appears in a string or text" } },
  { path: 'count-word-frequency', component: TextToolsComponent, data: { title: "Count Word Frequency in Text", subTitle: "Word frequency counter count how many times each word appears in a string or text" } },
  { path: 'split-text', component: TextToolsComponent, data: { title: "Split Text", subTitle: "A free online tool to split a text string at a certain character like (comma, space, pipe, etc)" } },
  { path: 'delete-duplicate-lines', component: TextToolsComponent, data: { title: "Delete Duplicate Lines from Text", subTitle: "A free online tool to delete or remove duplicate lines from text or string" } },
  { path: 'text-replace', component: TextToolsComponent, data: { title: "Replace Text", subTitle: "A free online tool to find text and replace with which you wish to replace" } },
  { path: 'remove-empty-lines', component: TextToolsComponent, data: { title: "Remove Empty Lines", subTitle: "A free online tool to removes all empty lines which contain spaces, tabs, newline in a text and string" } }
];


@NgModule({
  declarations: [TextToolsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TextToolsModule { }
