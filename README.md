# lts
Localization module (marked with WeChat's mini-program supported)

# Install

Install this NPM module with `npm install --save lts`.

Import into your source code by

```javascript
var { lts, langs } = require('lts')
```

`lts` provides main APIs for you to use.  
`langs` provides language constants for you to use as parameter when calling one of those APIs.

# APIs

See [docs](https://abzico.github.io/lts).

# Make It Works with WeChat's Mini-program

After install this module. Execute `npm run wechat-mp -- ./src/wsx/` in which path argument can be any depends on your need.

Then modify `./src/wsx/defs.wxs` for your pre-defined localized text that will be used throughout the application life cycle.  
Example of its content is as follows.

```javascript
// pre-defined definition file

module.exports = {
	"index.js": {
		"button_ok_label_example": {
			"en_US": "OK",
			"zh_Hans": "好"
		}
	}
};
```

> As .wxs script file was meant to be used in non-dynamic way thus s

Then inside your .wxml file, you do it like this.

```html
<wxs src="./src/wsx/ltsx.wxs" module="ltsx" />
<wxs src="./src/wsx/const-lang.wxs" module="langs" />

<view>
	<!-- Get pre-defined localized text -->
	<label>{{ ltsx.get(langs.English, 'index.js', 'button_ok_label') }}</label>
</view>

...
```

or define `lang` variable in your .js code and use it dynamically in .wxml file as follows.

```html
<wxs src="./src/wsx/ltsx.wxs" module="ltsx" />

<view>
	<!-- Get pre-defined localized text -->
	<label>{{ ltsx.get(lang, 'index.js', 'button_ok_label') }}</label>
</view>

...
```

# License

[Apache 2.0](https://github.com/abzico/lts/blob/master/README.md), Abzi.co