# nofwl-i18n

> The internationalization (i18n) library for JavaScript. Support for i18n of text, images, placeholders, styles.

```bash
yarn

yarn dev

# http://127.0.0.1:8080/example
# http://127.0.0.1:8080/example/test.html
yarn serve
```

## Usage

```bash
npm i @nofwl/i18n
# or
yarn add @nofwl/i18n
```

```js
/* js file */

// require('@nofwl/i18n')
import '@nofwl/i18n'
```

## Project Structure

```bash
# path: **/i18n/**/*.json
# common file: **/i18n/pub/*.json

[project]
|- [**/i18n]
|     |- [{lang}] # language
|     |      `- *.json # page
|     `- [pub]
|         |- common.{lang}.json
|         `- keywords.{lang}.json
` ..

# OR

[project]
|- [**/i18n]
|    |- [**] # page
|    |   `- *.{lang}.json
|    `- [pub]
|         |- common.{lang}.json
|         `- keywords.{lang}.json
` ...
```

---

## HTML Tags Attributes

|type|arrtibute|describe|use|
|---|---|---|---|
|common|i18n-c|common|i18n-c='key_name'|
|keywords|i18n-k|keywords|i18n-k='key_name'|
|page|i18n-p|page|i18n-p='key_name'|
|class|i18n-s|currect element class(style)|i18n-s|
|image|i18n-(c\|k\|p)-i|(common \| keywords \| page) image path |i18n-(c\|k\|p)-i='key_name'|
|pleceholder|i18n-(c\|k\|p)-ph|(common \| keywords \| page) placeholder |i18n-(c\|k\|p)-ph='key_name' |
|off|i18n-o|close translate(off)|i18n-o|

* key_name: `i18n key name`
* (c\|k\|p): One of `c`, `k`,`p`

---

## Config

> i18n matches the corresponding page in two ways

```html
<!-- **/i18n/{lang}/**/*.json -->
<meta i18n='/your_path/i18n/{lang}/path_file_name'>

OR

<!-- **/i18n/**/*.{lang}.json -->
<meta i18n='/your_path/i18n/path_file_name.{lang}'>

<!-- i18n-lang-btn: language button -->
<!-- i18n-def: default language -->
<!-- class='i18n-active': current language -->
<div>
  <button i18n-lang-btn='en' i18n-def>EN</button>
  <button i18n-lang-btn='cn'>CN</button>
  <!-- <button i18n-lang-btn='**'>**</button> -->
  <!-- ... -->
</div>
```