# ltsx
Localization module (marked with WeChat's mini-program supported)

# Note

Tested on macOS only. When you execute `npm --prefix ...` command as shown below on other platforms, it **might** has problem, or none at all.

# Install

Install this NPM module with `npm install --save ltsx`.


Import into your source code by

```javascript
var { ltsx, langs } = require('ltsx')
```

`lts` provides main APIs for you to use.  
`langs` provides language constants for you to use as parameter when calling one of those APIs.

# APIs

See [docs](https://abzico.github.io/lts) and look on the right sidebar.

# How to Use with WeChat's mini-program?

Change directory to the root of your WeChat's mini-program project.

Install this module via `npm install --save ltsx`. No worry about existence of `node_modules` directory. Mini-program IDE has built-in ability to ignore it both while developing, and submitting. We can leave such directory as it is if you like.

Execute `npm --prefix node_modules/ltsx run wechat-mp -- $PWD/src/wxs/` in which path argument **can be** any depends on your need.

> Notice that we use `$PWD` to get the root directory of your WeChat's mini-program. This is because current directory of such executing command is still at `node_modules/ltsx`.

Then modify `./src/wxs/ltsx/defs.wxs` for your pre-defined localized text that will be used throughout the application life cycle.  
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

Then inside your .wxml file, you would have something like this.

> Path is relative. So it depends on which source file you try to include `ltsx` to work with your code. Modify it accordingly.

```html
<wxs src="./src/wxs/ltsx/ltsx.wxs" module="ltsx" />
<wxs src="./src/wxs/ltsx/const-lang.wxs" module="langs" />

<view>
	<!-- Get pre-defined localized text -->
	<label>{{ ltsx.get(langs.English, 'index.js', 'button_ok_label_example') }}</label>
</view>

...
```

or define `lang` variable in your .js code and use it dynamically in .wxml file as follows.

```html
<wxs src="./src/wxs/ltsx.wxs" module="ltsx" />

<view>
	<!-- Get pre-defined localized text -->
	<label>{{ ltsx.get(lang, 'index.js', 'button_ok_label') }}</label>
</view>

...
```

# License

[Apache 2.0](https://github.com/abzico/lts/blob/master/README.md), Abzi.co