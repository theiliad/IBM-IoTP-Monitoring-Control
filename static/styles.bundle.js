webpackJsonp([2,4],{

/***/ 1:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(180);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(233)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--10-2!../../node_modules/postcss-loader/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--10-4!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--10-2!../../node_modules/postcss-loader/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--10-4!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports
exports.i(__webpack_require__(181), "");

// module
exports.push([module.i, "/**\n * Copyright 2016 IBM Corp. All Rights Reserved.\n *\n * Licensed under the IBM License, a copy of which may be obtained at:\n *\n * http://www14.software.ibm.com/cgi-bin/weblap/lap.pl?li_formnum=L-DDIN-AEGGZJ&popup=y&title=IBM%20IoT%20for%20Automotive%20Sample%20Starter%20Apps%20%28Android-Mobile%20and%20Server-all%29\n *\n * You may not use this file except in compliance with the license.\n */\n/*\nAuthor: IBM Watson IoT\nAuthor URI: http://www.ibm.com/internet-of-things/\n\n=== Table of Contents ===\n\n1. General + Commonly Used Styles\n2. Header\n3. Content\n4. Sidebar\n5. Main Content\n6. Main Content - Modules\n7. Main Content - Map\n8. Main Content - Vehicle\n9. Angular Styles\n10. Grid System\n\n*/\n.bx--form-item.bx--checkbox-wrapper {\n  margin-bottom: 1rem; }\n  .bx--form-item.bx--checkbox-wrapper:first-of-type {\n    margin-top: 0.375rem; }\n  .bx--form-item.bx--checkbox-wrapper:last-of-type {\n    margin-bottom: 0; }\n\n.bx--checkbox {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  visibility: visible;\n  white-space: nowrap; }\n\n.bx--checkbox-label {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-size: 0.875rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n  .bx--checkbox-label > *,\n  .bx--checkbox-label > *:before,\n  .bx--checkbox-label > *:after {\n    box-sizing: inherit; }\n\n.bx--checkbox-appearance {\n  display: inline-block;\n  height: 1.125rem;\n  width: 1.125rem;\n  margin-right: .5rem;\n  background-color: #fff;\n  border-radius: 2px;\n  border: 2px solid #8c9ba5; }\n\n.bx--checkbox:checked + .bx--checkbox-appearance,\n.bx--checkbox:checked + .bx--checkbox-label .bx--checkbox-appearance {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  background-color: #3d70b2;\n  border-color: #3d70b2; }\n\n.bx--checkbox:disabled + .bx--checkbox-label,\n.bx--checkbox:disabled + .bx--checkbox-appearance,\n.bx--checkbox:disabled ~ .bx--checkbox-label-text {\n  opacity: .5;\n  cursor: not-allowed; }\n\n.bx--checkbox:focus + .bx--checkbox-label .bx--checkbox-appearance,\n.bx--checkbox:focus + .bx--checkbox-appearance {\n  outline: 1px dotted;\n  outline: auto 5px -webkit-focus-ring-color; }\n\n.bx--checkbox-checkmark {\n  display: none;\n  fill: #fff;\n  width: 0.9375rem;\n  height: 0.9375rem; }\n\n.bx--checkbox:checked + .bx--checkbox-appearance .bx--checkbox-checkmark,\n.bx--checkbox:checked + .bx--checkbox-label .bx--checkbox-appearance .bx--checkbox-checkmark {\n  display: block; }\n\n.bx--overflow-menu {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  position: relative;\n  padding: .5rem;\n  cursor: pointer; }\n  .bx--overflow-menu > *,\n  .bx--overflow-menu > *:before,\n  .bx--overflow-menu > *:after {\n    box-sizing: inherit; }\n  .bx--overflow-menu:focus {\n    outline: 2px solid #5aaafa; }\n\n.bx--overflow-menu__icon {\n  width: 0.25rem;\n  height: 1.25rem;\n  fill: #8c9ba5; }\n  .bx--overflow-menu__icon:hover {\n    fill: #3d70b2; }\n\n.bx--overflow-menu-options {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  position: absolute;\n  z-index: 1;\n  background-color: #fff;\n  border: 1px solid #dfe3e6;\n  width: 11.25rem;\n  list-style: none;\n  margin-top: .25rem;\n  padding: .285rem 0 .5rem;\n  left: -20px; }\n  .bx--overflow-menu-options > *,\n  .bx--overflow-menu-options > *:before,\n  .bx--overflow-menu-options > *:after {\n    box-sizing: inherit; }\n\n.bx--overflow-menu-options--open {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.bx--overflow-menu-options:before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 0.5rem;\n  height: 0.5rem;\n  z-index: -1;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  background-color: #fff;\n  border-top: 1px solid #dfe3e6;\n  border-left: 1px solid #dfe3e6;\n  top: -5px;\n  left: 24px; }\n\n.bx--overflow-menu-options__option {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: transparent;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  padding: .5625rem 0; }\n  .bx--overflow-menu-options__option > *,\n  .bx--overflow-menu-options__option > *:before,\n  .bx--overflow-menu-options__option > *:after {\n    box-sizing: inherit; }\n\n.bx--overflow-menu--divider {\n  border-top: 1px solid #dfe3e6; }\n\n.bx--overflow-menu-options__btn {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-size: 0.875rem;\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  font-weight: 400;\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: inline-block;\n  background-color: transparent;\n  text-align: left;\n  padding: 0 1rem;\n  cursor: pointer; }\n  .bx--overflow-menu-options__btn > *,\n  .bx--overflow-menu-options__btn > *:before,\n  .bx--overflow-menu-options__btn > *:after {\n    box-sizing: inherit; }\n\n.bx--overflow-menu-options__option:hover {\n  background-color: #3d70b2; }\n\n.bx--overflow-menu-options__option:hover .bx--overflow-menu-options__btn {\n  color: #fff; }\n\n.bx--overflow-menu-options__option--danger {\n  border-top: 1px solid #dfe3e6; }\n\n.bx--overflow-menu-options__option--danger:hover {\n  background-color: #e71d32; }\n\n.bx--overflow-menu--flip {\n  left: -140px; }\n  .bx--overflow-menu--flip:before {\n    left: 145px; }\n\n.bx--responsive-table-container {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: 99.9%; }\n  .bx--responsive-table-container > *,\n  .bx--responsive-table-container > *:before,\n  .bx--responsive-table-container > *:after {\n    box-sizing: inherit; }\n\n.bx--responsive-table {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  background-color: #fff;\n  width: 100%;\n  min-width: 500px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 2px solid #dfe3e6; }\n  .bx--responsive-table > *,\n  .bx--responsive-table > *:before,\n  .bx--responsive-table > *:after {\n    box-sizing: inherit; }\n  .bx--responsive-table td {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    vertical-align: baseline;\n    font-size: 0.875rem;\n    padding: 0 0.375rem;\n    vertical-align: middle; }\n    .bx--responsive-table td > *,\n    .bx--responsive-table td > *:before,\n    .bx--responsive-table td > *:after {\n      box-sizing: inherit; }\n  .bx--responsive-table td p {\n    font-size: 0.875rem; }\n  .bx--responsive-table th {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    vertical-align: baseline;\n    font-size: 0.75rem;\n    padding: 0.5625rem 0.375rem;\n    vertical-align: middle;\n    font-weight: 700; }\n    .bx--responsive-table th > *,\n    .bx--responsive-table th > *:before,\n    .bx--responsive-table th > *:after {\n      box-sizing: inherit; }\n  .bx--responsive-table table {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    vertical-align: baseline; }\n    .bx--responsive-table table > *,\n    .bx--responsive-table table > *:before,\n    .bx--responsive-table table > *:after {\n      box-sizing: inherit; }\n  .bx--responsive-table--tall td, .bx--responsive-table--tall th {\n    padding-top: 0.9375rem;\n    padding-bottom: 0.9375rem; }\n  .bx--responsive-table--static-size {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font-family: inherit;\n    vertical-align: baseline;\n    border-collapse: collapse;\n    width: auto;\n    border: 2px solid #dfe3e6; }\n    .bx--responsive-table--static-size > *,\n    .bx--responsive-table--static-size > *:before,\n    .bx--responsive-table--static-size > *:after {\n      box-sizing: inherit; }\n    .bx--responsive-table--static-size tr td:first-child,\n    .bx--responsive-table--static-size tr th:first-child {\n      padding-left: 1.5rem; }\n\n.bx--responsive-table--tall td, .bx--responsive-table--tall th {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem; }\n\n.bx--table-row {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  height: 2rem;\n  padding-left: 1rem; }\n  .bx--table-row > *,\n  .bx--table-row > *:before,\n  .bx--table-row > *:after {\n    box-sizing: inherit; }\n\n.bx--table-head .bx--table-row {\n  border-bottom: 1px solid #3d70b2; }\n\n.bx--table-header {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-weight: 700;\n  font-size: 0.75rem;\n  letter-spacing: 1px;\n  text-align: left;\n  text-transform: uppercase;\n  height: 2.5rem; }\n  .bx--table-header > *,\n  .bx--table-header > *:before,\n  .bx--table-header > *:after {\n    box-sizing: inherit; }\n\n.bx--table-body > .bx--parent-row,\n.bx--table-body > .bx--parent-row + .bx--expandable-row {\n  background-color: #fff; }\n  .bx--table-body > .bx--parent-row--even,\n  .bx--table-body > .bx--parent-row + .bx--expandable-row--even {\n    background-color: #f0f3f6; }\n\n.bx--table-body .bx--table-row {\n  border: 1px solid transparent; }\n  .bx--table-body .bx--table-row:first-child:hover {\n    border-left: 2px solid #5596e6;\n    outline: 1px solid #5596e6; }\n  .bx--table-body .bx--table-row:not(:first-child):hover {\n    border-left: 2px solid #5596e6;\n    outline: 1px solid #5596e6; }\n\n.bx--expandable-row > td {\n  border-left: 4px solid #3d70b2;\n  padding: 2rem; }\n\n.bx--expandable-row--hidden {\n  visibility: hidden; }\n\n.bx--table-expand {\n  padding-left: 0.5rem;\n  padding-right: 0.75rem;\n  text-align: center;\n  width: 1.25rem;\n  cursor: pointer; }\n\n.bx--table-expand__svg {\n  fill: #8c9ba5;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  width: 12px;\n  height: 12px;\n  margin-left: 0.4375rem;\n  margin-right: 0.125rem; }\n  @media all and (min--moz-device-pixel-ratio: 0) and (min-resolution: 3e1dpcm) {\n    .bx--table-expand__svg {\n      margin-top: 2px; } }\n\n.bx--table-expand[data-previous-value='collapsed'] .bx--table-expand__svg {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  transition: -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1); }\n\n[data-event='sort'] {\n  cursor: pointer; }\n\n.bx--table-sort__svg {\n  fill: #8c9ba5;\n  width: 8px;\n  height: 8px;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1); }\n\n.bx--table-sort--ascending .bx--table-sort__svg {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  transition: -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1);\n  transition: transform 200ms cubic-bezier(0.5, 0, 0.1, 1), -webkit-transform 200ms cubic-bezier(0.5, 0, 0.1, 1); }\n\n.bx--table-select {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  width: 1.875rem;\n  text-align: center;\n  padding-left: 0;\n  padding-right: 0; }\n  .bx--table-select > *,\n  .bx--table-select > *:before,\n  .bx--table-select > *:after {\n    box-sizing: inherit; }\n  .bx--table-select .bx--checkbox-label {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin: 0; }\n    @media all and (min--moz-device-pixel-ratio: 0) and (min-resolution: 3e1dpcm) {\n      .bx--table-select .bx--checkbox-label {\n        margin-top: 2px; } }\n  .bx--table-select .bx--checkbox-appearance {\n    margin: 0; }\n\n.bx--table-overflow {\n  width: 2.5rem;\n  text-align: center; }\n  .bx--table-overflow .bx--overflow-menu {\n    padding: 0; }\n\n.bx--visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  visibility: visible;\n  white-space: nowrap; }\n\n.bx--fieldset {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  margin-bottom: 2rem; }\n  .bx--fieldset > *,\n  .bx--fieldset > *:before,\n  .bx--fieldset > *:after {\n    box-sizing: inherit; }\n\n.bx--form-item {\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 1rem;\n  margin-bottom: 1.5rem; }\n  .bx--form-item:last-of-type {\n    margin-right: 0;\n    margin-bottom: 0; }\n\n.bx--label {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  font-size: 0.875rem;\n  font-weight: 700;\n  display: inline-block;\n  vertical-align: baseline;\n  margin-bottom: 0.625rem; }\n  .bx--label > *,\n  .bx--label > *:before,\n  .bx--label > *:after {\n    box-sizing: inherit; }\n\n.bx--label--disabled {\n  opacity: .5; }\n\ninput[data-invalid],\ntextarea[data-invalid] {\n  box-shadow: 0 2px 0px 0px #e71d32; }\n  input[data-invalid] ~ .bx--form-requirement,\n  textarea[data-invalid] ~ .bx--form-requirement {\n    max-height: 12.5rem; }\n\n.bx--form-requirement {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-size: 0.6875rem;\n  margin: .75rem 0 0;\n  max-height: 0;\n  overflow: hidden;\n  font-weight: 700;\n  line-height: 1.5; }\n  .bx--form-requirement > *,\n  .bx--form-requirement > *:before,\n  .bx--form-requirement > *:after {\n    box-sizing: inherit; }\n  .bx--form-requirement::before {\n    content: '*';\n    display: inline-block;\n    color: #e71d32; }\n\n.bx--select {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  position: relative;\n  display: block; }\n  .bx--select > *,\n  .bx--select > *:before,\n  .bx--select > *:after {\n    box-sizing: inherit; }\n\n.bx--select-input {\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  font-size: 0.875rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: block;\n  width: 100%;\n  padding: .75rem 2.75rem .75rem 1rem;\n  height: 2.5rem;\n  color: #152935;\n  background-color: rgba(61, 112, 178, 0.1);\n  border: none;\n  border-radius: 0;\n  cursor: pointer; }\n  .bx--select-input::-ms-expand {\n    display: none; }\n  .bx--select-input:focus {\n    outline: 1px dotted;\n    outline: auto 5px -webkit-focus-ring-color;\n    outline: auto 2px -webkit-focus-ring-color; }\n  .bx--select-input:disabled {\n    opacity: .5;\n    cursor: not-allowed; }\n\n.bx--select__arrow {\n  fill: #3d70b2;\n  position: absolute;\n  right: 1rem;\n  top: 1.175rem;\n  width: 0.625rem;\n  height: 0.3125rem;\n  pointer-events: none; }\n\n.bx--select-optgroup,\n.bx--select-option {\n  color: #152935; }\n\n@-moz-document url-prefix() {\n  .bx--select-option {\n    background-color: #fff;\n    color: #152935; }\n  .bx--select-optgroup {\n    color: #152935; } }\n\n.bx--text-input {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  font-size: 0.875rem;\n  display: block;\n  width: 100%;\n  height: 2.5rem;\n  min-width: 10rem;\n  padding: 0 1rem;\n  color: #152935;\n  background-color: rgba(61, 112, 178, 0.1);\n  border: 1px solid transparent; }\n  .bx--text-input > *,\n  .bx--text-input > *:before,\n  .bx--text-input > *:after {\n    box-sizing: inherit; }\n  .bx--text-input::-webkit-input-placeholder {\n    color: #5a6872; }\n  .bx--text-input:focus {\n    outline: 1px dotted;\n    outline: auto 5px -webkit-focus-ring-color;\n    outline: auto 2px -webkit-focus-ring-color; }\n  .bx--text-input:disabled {\n    opacity: .5;\n    cursor: not-allowed; }\n  .bx--text-input:disabled:hover {\n    border: 1px solid transparent; }\n\n.bx--pagination {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  font-family: 'IBM Helvetica', Helvetica Neue, HelveticaNeue, Helvetica, sans-serif;\n  width: 100%;\n  background-color: #fff;\n  padding: .5rem 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid #dfe3e6; }\n  .bx--pagination > *,\n  .bx--pagination > *:before,\n  .bx--pagination > *:after {\n    box-sizing: inherit; }\n\n.bx--pagination__left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.bx--pagination__right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: auto; }\n\n.bx--pagination__text {\n  font-size: 0.75rem;\n  color: #5a6872;\n  display: none; }\n  @media (min-width: 530px) {\n    .bx--pagination__text {\n      display: initial; } }\n\n.bx--pagination__button-icon {\n  height: 0.75rem;\n  width: 0.75rem;\n  fill: #5a6872;\n  pointer-events: none;\n  transition: 250ms; }\n\n.bx--pagination__button {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: inherit;\n  vertical-align: baseline;\n  border: none;\n  background: none;\n  cursor: pointer; }\n  .bx--pagination__button > *,\n  .bx--pagination__button > *:before,\n  .bx--pagination__button > *:after {\n    box-sizing: inherit; }\n  .bx--pagination__button:hover .bx--pagination__button-icon {\n    fill: #3d70b2; }\n\n.bx--pagination__button--backward {\n  margin-left: 1.25rem;\n  margin-right: 1.75rem; }\n\n.bx--pagination__button--forward {\n  margin-left: 1.75rem; }\n\n.bx--pagination .bx--select {\n  margin-right: 0.625rem; }\n\n.bx--pagination .bx--select-input {\n  height: 1.5rem;\n  width: 3.375rem;\n  padding: 0 0.5rem;\n  margin: 0;\n  font-weight: 700; }\n\n.bx--pagination .bx--select__arrow {\n  right: .5rem;\n  top: .625rem; }\n\n.bx--pagination .bx--text-input {\n  height: 1.5rem;\n  min-width: 1.5rem;\n  width: 1.5rem;\n  padding: 0;\n  margin: 0;\n  font-weight: 700;\n  text-align: center; }\n\n/* === 1. General + Commonly Used Styles === */\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: 'Helvetica Neue for IBM', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;\n  font-weight: 300;\n  color: #3a3a3a; }\n\n.clearfix {\n  clear: both; }\n\na {\n  text-decoration: none;\n  color: #1995ce; }\n\nstrong {\n  font-weight: 500; }\n\n.container,\n.container-50 {\n  padding: 20px 30px;\n  margin: 0 auto;\n  text-align: left; }\n\n.container-50 {\n  padding-left: 50px !important;\n  padding-right: 50px !important; }\n\n.container-30-right {\n  padding-right: 30px !important; }\n\n@media (max-width: 992px) {\n  .container-50 {\n    padding-right: 30px !important;\n    padding-left: 30px !important; } }\n\n.marginTop-10 {\n  margin-top: 10px !important; }\n\n.marginTop-15 {\n  margin-top: 15px !important; }\n\n.marginTop {\n  margin-top: 30px !important; }\n\n.marginTop-50 {\n  margin-top: 50px !important;\n  margin-bottom: 50px !important; }\n\n.paddingTop {\n  padding-top: 30px !important;\n  padding-bottom: 30px !important; }\n\n.paddingTop-50 {\n  padding-top: 50px !important;\n  padding-bottom: 50px !important; }\n\n.noTopPadding {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.floatRight {\n  float: right; }\n\n.floatLeft {\n  float: left; }\n\n.alignRight {\n  text-align: right; }\n\n.alignLeft {\n  text-align: left; }\n\n.alignCenter {\n  text-align: center; }\n\nimg.circularImg {\n  border-radius: 500px; }\n\ni.iconMarginRight {\n  margin-right: 15px; }\n\ni.iconMarginLeft {\n  margin-left: 15px; }\n\ni.iconBlock {\n  display: block; }\n\n.white {\n  color: #fff; }\n\n.primary {\n  color: #315d80; }\n\n.green {\n  color: #58a946; }\n\n.red {\n  color: #f05153; }\n\n.orange {\n  color: #f67734; }\n\n.blue {\n  color: #3774ba; }\n\n.lightBlue {\n  color: #1995ce; }\n\n.cyan {\n  color: #01b39e; }\n\n.divider-white {\n  display: block;\n  height: 3px;\n  width: 100%;\n  margin: 15px 0;\n  background: #fff; }\n\n.blur {\n  -webkit-animation: blur .5s forwards;\n  animation: blur .5s forwards; }\n\n@-webkit-keyframes blur {\n  0% {\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px);\n    filter: blur(0px); }\n  100% {\n    -webkit-filter: blur(4px);\n    -moz-filter: blur(4px);\n    -o-filter: blur(4px);\n    -ms-filter: blur(4px);\n    filter: blur(4px); } }\n\n/* === 2. Header Styles === */\nheader {\n  width: 100%;\n  height: 50px;\n  background: #1995ce;\n  color: #fff;\n  z-index: 1000;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 48px;\n  overflow: hidden; }\n\nheader .productTitle a {\n  color: #fff; }\n\n/* TODO - Will have to be centered in a dynamic way */\nheader .userImg {\n  float: left;\n  margin-right: 15px;\n  margin-top: 7px; }\n\nheader .userImg img {\n  width: 25px;\n  height: 25px; }\n\n/* === 3. Content === */\n.content {\n  /*padding-left: 200px;*/\n  transition: all .2s ease-in; }\n\n@media (max-width: 992px) {\n  .content {\n    padding-left: 0;\n    transition: all .2s ease-in; } }\n\naside.sidebar,\n.content .mainContent {\n  padding-top: 30px; }\n\n/* === 4. Sidebar === */\naside.sidebar {\n  position: fixed;\n  z-index: 999;\n  width: 200px;\n  left: 200px;\n  margin-left: -200px;\n  height: 100%;\n  overflow-y: auto;\n  background: #1f3e54;\n  color: #fff;\n  transition: all .2s ease-in; }\n\n@media (max-width: 992px) {\n  aside.sidebar {\n    left: 0;\n    transition: all .2s ease-in; } }\n\naside.sidebar ul.sidebarItems li a,\naside.sidebar ul.sidebarItems li a:hover {\n  cursor: pointer;\n  transition: all .1s ease-in; }\n\naside.sidebar ul.sidebarItems li a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  padding: 20px 0 20px 30px; }\n\naside.sidebar ul.sidebarItems li a:hover {\n  background: #173144;\n  padding-left: 40px; }\n\naside.sidebar ul.sidebarItems li.active a {\n  background: #284c65;\n  font-weight: 400;\n  border-left: 4px solid #00b4a0;\n  padding-left: 26px; }\n\naside.sidebar ul.sidebarItems li a i {\n  font-size: 20px;\n  vertical-align: text-bottom;\n  margin-right: 10px; }\n\n/* === 5. Main Content === */\n.content .mainContent {\n  position: relative; }\n\n.content .mainContent h4 {\n  font-weight: 500;\n  color: #2a506d;\n  text-transform: uppercase; }\n\n/* START => Overview Navbar Tabs */\nul.overviewNavTabs li a,\nul.overviewNavTabs li a:hover {\n  transition: all .1s ease-in; }\n\nul.overviewNavTabs,\nul.citiesNavTabBar {\n  display: table;\n  padding-top: 30px; }\n\nul.overviewNavTabs li,\nul.citiesNavTabs li {\n  float: left;\n  margin-right: 20px; }\n\nul.overviewNavTabs li a {\n  opacity: 0.6;\n  color: #5a8cc1;\n  padding-bottom: 10px;\n  display: table; }\n\nul.overviewNavTabs li a:hover {\n  opacity: 1;\n  color: #49729d; }\n\nul.overviewNavTabs li.active a {\n  opacity: 1;\n  color: #4c7190;\n  font-weight: 500;\n  border-bottom: 4px solid #f37636; }\n\n/* END => Overview Navbar Tabs */\ndiv.statusBar {\n  background: #325d80;\n  color: #fff; }\n\ndiv.statusBar ul li {\n  margin-bottom: 15px; }\n\ndiv.statusBar ul li:last-child {\n  margin-bottom: 0; }\n\nul.statusBarItems div.statusBarItems-Titles {\n  font-weight: 500;\n  margin-right: 50px; }\n\nul.statusBarItems div.statusBarItems-Titles i {\n  margin-right: 10px; }\n\ndiv.statusBar small.timeRange {\n  display: block;\n  font-size: 12px;\n  opacity: 0.7;\n  margin-bottom: 5px; }\n\n/* START => Cities Navbar Tabs */\ndiv.citiesNavTabBar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-bottom: 1px solid #f1f2f3; }\n\nul.citiesNavTabs li a {\n  opacity: 0.6;\n  display: table;\n  padding: 15px;\n  color: #496f8e; }\n\nul.citiesNavTabs li a:hover {\n  opacity: 1;\n  color: #fff;\n  background: #448adc; }\n\nul.citiesNavTabs li a,\nul.citiesNavTabs li a:hover {\n  transition: all .1s ease-in; }\n\nul.citiesNavTabs li.active a {\n  opacity: 1;\n  color: #fff;\n  background: #1995ce; }\n\n@media (max-width: 767px) {\n  div.citiesNavTabBar {\n    display: table;\n    padding-right: 30px;\n    padding-left: 30px; } }\n\n/* END => Cities Navbar Tabs */\n.dashTitleBar {\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n  font-weight: 400;\n  color: #1995ce;\n  border-bottom: 3px solid #1995ce; }\n\n/* === 6. Main Content - Modules === */\ndiv.dashItem {\n  margin-bottom: 50px; }\n\ndiv.dash-gray {\n  background: #f6f7f8; }\n\ndiv.recommendations-Percentage {\n  color: #5a8dc7;\n  text-align: right;\n  line-height: 25px;\n  font-weight: 400; }\n\ndiv.recommendations-Percentage span {\n  font-size: 27px; }\n\np.recommendations-Text {\n  color: #3a6284;\n  line-height: 25px; }\n\n/* === 7. Main Content - Map === */\ndiv.map-NumberOfCars div.map-Number {\n  font-size: 50px;\n  font-weight: 500; }\n\ndiv.map-NumberOfCars div.map-Number i {\n  font-size: 40px; }\n\ndiv.map-NumberOfCars div.map-Number-Side {\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 6px; }\n\ndiv.map-NumberOfCars div.carStatsColumn i {\n  font-size: 30px;\n  margin-bottom: 10px; }\n\ndiv.map-NumberOfCars div.carStatsColumn strong {\n  font-size: 25px; }\n\ndiv.map-NumberOfCars div.carStatsColumn p {\n  margin-top: 5px; }\n\nstrong.totalCarsNumber {\n  margin-right: 20px;\n  font-weight: 700; }\n\n/* === 8. Main Content - Vehicle === */\nstrong.vehicleStats {\n  display: block;\n  font-size: 45px;\n  margin: 20px 0 10px -5px; }\n\nstrong.vehicleStats i {\n  font-size: 35px; }\n\n/* === 9. Angular Styles === */\n[ui-view].ng-enter, [ui-view].ng-leave {\n  transition: all .15s ease-in-out; }\n\n[ui-view].ng-enter {\n  opacity: 0;\n  -webkit-transform: scale3d(0.75, 0.75, 0.75);\n  transform: scale3d(0.75, 0.75, 0.75); }\n\n[ui-view].ng-enter-active {\n  opacity: 1;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1); }\n\n[ui-view].ng-leave {\n  opacity: 1;\n  -webkit-transform: scale3d(0.75, 0.75, 0.75);\n  transform: scale3d(0.75, 0.75, 0.75); }\n\n[ui-view].ng-leave-active {\n  opacity: 0;\n  -webkit-transform: scale3d(0.75, 0.75, 0.75);\n  transform: scale3d(0.75, 0.75, 0.75); }\n\n/* === 10. Grid System === */\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n.column-2-med, .column-3-med, .column-4-med, .column-5-med, .column-6-med, .column-7-med, .column-9-med, .column-10-med {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 auto auto;\n  padding: 15px; }\n\n.noOffsetRow .column-2-med:first-child, .noOffsetRow .column-3-med:first-child, .noOffsetRow .column-4-med:first-child,\n.noOffsetRow .column-5-med:first-child, .noOffsetRow .column-6-med:first-child, .noOffsetRow .column-7-med:first-child,\n.noOffsetRow .column-9-med:first-child, .noOffsetRow .column-10-med:first-child {\n  padding-left: 0; }\n\n.noOffsetRow .column-2-med:last-child, .noOffsetRow .column-3-med:last-child, .noOffsetRow .column-4-med:last-child,\n.noOffsetRow .column-5-med:last-child, .noOffsetRow .column-6-med:last-child, .noOffsetRow .column-7-med:last-child,\n.noOffsetRow .column-9-med:last-child, .noOffsetRow .column-10-med:last-child {\n  padding-right: 0; }\n\n.noBottomPadding .column-2-med, .noBottomPadding .column-3-med, .noBottomPadding .column-4-med, .noBottomPadding .column-5-med,\n.noBottomPadding .column-6-med, .noBottomPadding .column-7-med, .noBottomPadding .column-9-med, .noBottomPadding .column-10-med {\n  padding-bottom: 0; }\n\n.noOffsetRow-6 .column-6-med:nth-child(odd) {\n  padding-left: 0; }\n\n.noOffsetRow-6 .column-6-med:last-child {\n  padding-right: 15px; }\n\n.column-2-med {\n  max-width: 16.6666666667%;\n  -ms-flex-preferred-size: 16.6666666667%;\n  flex-basis: 16.6666666667%; }\n\n.column-3-med {\n  max-width: 25%;\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%; }\n\n.column-4-med {\n  max-width: 33.3333333%;\n  -ms-flex-preferred-size: 33.3333333%;\n  flex-basis: 33.3333333%; }\n\n.column-5-med {\n  max-width: 41.6666667%;\n  -ms-flex-preferred-size: 41.6666667%;\n  flex-basis: 41.6666667%; }\n\n.column-6-med {\n  max-width: 50%;\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%; }\n\n.column-7-med {\n  max-width: 58.333333333%;\n  -ms-flex-preferred-size: 58.333333333%;\n  flex-basis: 58.333333333%; }\n\n.column-9-med {\n  max-width: 75%;\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%; }\n\n.column-10-med {\n  max-width: 83.3333333%;\n  -ms-flex-preferred-size: 83.3333333%;\n  flex-basis: 83.3333333%; }\n\n.row img {\n  max-width: 100%; }\n\n@media (max-width: 767px) {\n  .column-2-med, .column-3-med, .column-4-med, .column-5-med, .column-6-med, .column-7-med, .column-9-med, .column-10-med {\n    max-width: 100%;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%; }\n  .noOffsetRow .column-2-med, .noOffsetRow .column-3-med, .noOffsetRow .column-4-med, .noOffsetRow .column-5-med,\n  .noOffsetRow .column-6-med, .noOffsetRow .column-7-med, .noOffsetRow .column-9-med, .noOffsetRow .column-10-med {\n    padding-right: 0;\n    padding-left: 0; }\n  .column-2-xs {\n    max-width: 16.6666666667%;\n    -ms-flex-preferred-size: 16.6666666667%;\n    flex-basis: 16.6666666667%; }\n  .column-3-xs {\n    max-width: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%; }\n  .column-4-xs {\n    max-width: 33.3333333%;\n    -ms-flex-preferred-size: 33.3333333%;\n    flex-basis: 33.3333333%; }\n  .column-5-xs {\n    max-width: 41.6666667%;\n    -ms-flex-preferred-size: 41.6666667%;\n    flex-basis: 41.6666667%; }\n  .column-6-xs {\n    max-width: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%; }\n  .column-7-xs {\n    max-width: 58.333333333%;\n    -ms-flex-preferred-size: 58.333333333%;\n    flex-basis: 58.333333333%; }\n  .column-9-xs {\n    max-width: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%; }\n  .column-10-xs {\n    max-width: 83.3333333%;\n    -ms-flex-preferred-size: 83.3333333%;\n    flex-basis: 83.3333333%; } }\n\n/* small */\n/* med */\n/* large */\n@media (min-width: 1200px) {\n  .column-2-lg {\n    max-width: 16.6666666667%;\n    -ms-flex-preferred-size: 16.6666666667%;\n    flex-basis: 16.6666666667%; }\n  .column-3-lg {\n    max-width: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%; }\n  .column-4-lg {\n    max-width: 33.3333333%;\n    -ms-flex-preferred-size: 33.3333333%;\n    flex-basis: 33.3333333%; }\n  .column-5-lg {\n    max-width: 41.6666667%;\n    -ms-flex-preferred-size: 41.6666667%;\n    flex-basis: 41.6666667%; }\n  .column-6-lg {\n    max-width: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%; }\n  .column-7-lg {\n    max-width: 58.333333333%;\n    -ms-flex-preferred-size: 58.333333333%;\n    flex-basis: 58.333333333%; }\n  .column-9-lg {\n    max-width: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%; }\n  .column-10-lg {\n    max-width: 83.3333333%;\n    -ms-flex-preferred-size: 83.3333333%;\n    flex-basis: 83.3333333%; } }\n\n.gridDemo .row div {\n  border-right: 1px solid rgba(0, 0, 0, 0.2); }\n\n/* === 11. VIBE Modal Styles === */\na.em-Modal-Call {\n  display: table; }\n\na.em-Modal-Call i {\n  color: #fff;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  margin-right: 15px; }\n\ndiv.em-Modal {\n  position: fixed;\n  background: rgba(62, 120, 188, 0.75);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0 30px;\n  overflow: hidden;\n  color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 9999;\n  transition: all .15s ease-in;\n  transition-delay: .3s; }\n\ndiv.em-Modal-show {\n  opacity: 1;\n  visibility: visible;\n  transition: all .15s ease-in; }\n\ndiv.em-Modal div.em-Modal-Content {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translateY(300px) scale(0) rotateX(75deg);\n  transform: translateY(300px) scale(0) rotateX(75deg);\n  padding: 50px 0;\n  position: relative;\n  height: 100%;\n  transition: all .2s ease-in;\n  transition-delay: .1s; }\n\ndiv.em-Modal div.em-Modal-Content-show {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translateY(0) scale(1) rotateX(0);\n  transform: translateY(0) scale(1) rotateX(0);\n  transition: all .2s ease-in;\n  transition-delay: .15s; }\n\ndiv.em-Modal div.em-Modal-Close {\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  right: 10px;\n  top: 30px;\n  font-size: 50px;\n  line-height: 0;\n  transition: all .2s ease-in; }\n\ndiv.em-Modal div.em-Modal-Close-show {\n  opacity: 1;\n  visibility: visible;\n  transition: all .2s ease-in;\n  transition-delay: .1s; }\n\ndiv.em-Modal div.em-Modal-Close a {\n  color: #fff; }\n\ndiv.em-Modal div.em-Modal-Content form,\ndiv.em-Modal div.em-Modal-Content p {\n  margin: 30px 0; }\n\ndiv.em-Modal div.em-Modal-Content input {\n  display: block;\n  font-family: lato;\n  font-weight: 300;\n  width: 40%;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-bottom: 1px solid #bebebe;\n  background: #fff;\n  margin: 30px auto; }\n\n@media (max-width: 1024px) {\n  div.em-Modal div.em-Modal-Content input {\n    width: 70%; } }\n\ndiv.em-Modal div.em-Modal-Content .formButtons {\n  display: table;\n  margin: 0 auto; }\n\ndiv.em-Modal div.em-Modal-Content button.btn {\n  display: block;\n  float: left;\n  font-family: lato;\n  font-weight: 300;\n  padding: 10px 16px;\n  font-size: 15px;\n  border-radius: 50px;\n  border: 1px solid #d3d3d4;\n  color: #8b8b8c;\n  background: transparent;\n  margin: 30px auto;\n  margin-right: 15px;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal div.em-Modal-Content button.btn:hover {\n  border: 1px solid #aeaeaf;\n  color: #636364;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal div.em-Modal-Content button.btn-submit,\ndiv.em-Modal div.em-Modal-Content button.btn-submit:hover {\n  border: 1px solid #0faf73;\n  color: #0faf73; }\n\ndiv.em-Modal ul.modalMenu {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\ndiv.em-Modal ul.modalMenu li {\n  font-size: 30px;\n  font-weight: 300;\n  text-align: center;\n  margin-bottom: 75px; }\n\ndiv.em-Modal ul.modalMenu li:last-child {\n  margin-bottom: 0; }\n\ndiv.em-Modal ul.modalMenu li a {\n  color: #fff;\n  opacity: 0.75;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li a:hover {\n  opacity: 1;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li i {\n  padding-bottom: 10px;\n  opacity: 0.75;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li:hover i {\n  opacity: 1;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li.active a {\n  font-weight: 600;\n  border-bottom: 4px solid #f37636;\n  padding-bottom: 5px;\n  opacity: 1; }\n\ndiv.em-Modal ul.modalMenu li.active i {\n  opacity: 1; }\n\n/* === 12. General Media Queries === */\n@media (max-width: 767px) {\n  .medium-show {\n    display: table; }\n  .medium-hide {\n    display: none; } }\n\n@media (min-width: 768px) {\n  .large-hide {\n    display: none; } }\n\n/* === 13. Twitter Bootstrap Styles === */\n/*!\n * Bootstrap v3.3.5 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*!\n * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=c66531b64b35cefc404bb8205571ef59)\n * Config saved to config.json and https://gist.github.com/c66531b64b35cefc404bb8205571ef59\n */\n/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  padding-left: 0;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #dddddd; }\n\n.table > thead > tr > th {\n  font-weight: 500;\n  vertical-align: bottom;\n  border-bottom: 2px solid #dddddd; }\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\n.table > tbody + tbody {\n  border-top: 2px solid #dddddd; }\n\n.table .table {\n  background-color: #ffffff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #dddddd; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #dddddd; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #dddddd; }\n  .table-responsive > .table {\n    margin-bottom: 0; }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0; } }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  /*  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;*/\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  /*  line-height: 1.42857143;*/\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n\n.popover.top {\n  margin-top: -10px; }\n\n.popover.right {\n  margin-left: 10px; }\n\n.popover.bottom {\n  margin-top: 10px; }\n\n.popover.left {\n  margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #ffffff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #ffffff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #ffffff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #ffffff;\n  bottom: -10px; }\n\n.popover .btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.popover .btn:focus,\n.popover .btn:active:focus,\n.popover .btn.active:focus,\n.popover .btn.focus,\n.popover .btn:active.focus,\n.popover .btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\n.popover .btn:hover,\n.popover .btn:focus,\n.popover .btn.focus {\n  color: #333333;\n  text-decoration: none; }\n\n.popover .btn:active,\n.popover .btn.active {\n  outline: 0;\n  background-image: none;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n\n.popover .btn.disabled,\n.popover .btn[disabled],\n.popover fieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  box-shadow: none; }\n\n.popover a.btn.disabled,\n.popover fieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.popover .btn-default {\n  color: #333333;\n  background-color: #ffffff;\n  border-color: #cccccc; }\n\n.popover .btn-default:focus,\n.popover .btn-default.focus {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c; }\n\n.popover .btn-default:hover {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #adadad; }\n\n.popover .btn-default:active,\n.popover .btn-default.active,\n.popover .open > .dropdown-toggle.btn-default {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #adadad; }\n\n.popover .btn-default:active:hover,\n.popover .btn-default.active:hover,\n.popover .open > .dropdown-toggle.btn-default:hover,\n.popover .btn-default:active:focus,\n.popover .btn-default.active:focus,\n.popover .open > .dropdown-toggle.btn-default:focus,\n.popover .btn-default:active.focus,\n.popover .btn-default.active.focus,\n.popover .open > .dropdown-toggle.btn-default.focus {\n  color: #333333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c; }\n\n.popover .btn-default:active,\n.popover .btn-default.active,\n.popover .open > .dropdown-toggle.btn-default {\n  background-image: none; }\n\n.popover .btn-default.disabled:hover,\n.popover .btn-default[disabled]:hover,\n.popover fieldset[disabled] .btn-default:hover,\n.popover .btn-default.disabled:focus,\n.popover .btn-default[disabled]:focus,\n.popover fieldset[disabled] .btn-default:focus,\n.popover .btn-default.disabled.focus,\n.popover .btn-default[disabled].focus,\n.popover fieldset[disabled] .btn-default.focus {\n  background-color: #ffffff;\n  border-color: #cccccc; }\n\n.popover .btn-default .badge {\n  color: #ffffff;\n  background-color: #333333; }\n\n/* === 14. Real-Time Map Styles === */\n.carMonitorMap {\n  position: relative;\n  height: 500px;\n  width: 100%; }\n\n@media screen and (max-width: 767px) {\n  .carMonitorMap {\n    height: 300px; } }\n\n.carMonitorMap .mapLocationBar {\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  z-index: 10;\n  padding: 10px 20px;\n  background: #fff;\n  font-weight: 500;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); }\n\n#canvas .olControlAttribution {\n  font-size: 13px;\n  bottom: 3px; }\n\n.carMonitorMap .ol-zoom {\n  left: auto;\n  top: auto;\n  right: 30px;\n  bottom: 70px; }\n\n.carMonitorMap .ol-attribution {\n  right: 30px;\n  bottom: 30px; }\n\n.carMonitorMap .ol-attribution.ol-uncollapsible {\n  height: 1.5em; }\n\n.carMonitorMap .popover {\n  max-width: 414px; }\n\n.carMonitorMap .popover .popover-title {\n  white-space: nowrap;\n  display: table;\n  width: 100%; }\n\n.carMonitorMap .popover .popover-title div:first-child {\n  display: table-cell;\n  text-aligh: left;\n  width: 100%; }\n\n.carMonitorMap .popover .popover-title div:last-child {\n  display: table-cell;\n  text-aligh: right;\n  vertical-align: text-top; }\n\n.carMonitorMap .popover .popover-title .close {\n  display: inline-block;\n  margin-top: -3px;\n  margin-bottom: 0;\n  margin-left: 4px;\n  margin-right: -10px;\n  padding: 0px 4px;\n  line-height: 1.2;\n  font-size: 12px;\n  border-radius: 3px; }\n\n.carMonitorMap .popover .popover-content {\n  font-weight: lighter; }\n\n/* === 15. C3 Styles === */\n.c3 svg {\n  font: 10px sans-serif; }\n\n.c3 line, .c3 path {\n  fill: none;\n  stroke: #000; }\n\n.c3 text {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.c3-bars path, .c3-event-rect, .c3-legend-item-tile, .c3-xgrid-focus, .c3-ygrid {\n  shape-rendering: crispEdges; }\n\n.c3-chart-arc path {\n  stroke: #fff; }\n\n.c3-chart-arc text {\n  fill: #fff;\n  font-size: 13px; }\n\n.c3-grid line {\n  stroke: #aaa; }\n\n.c3-grid text {\n  fill: #aaa; }\n\n.c3-xgrid, .c3-ygrid {\n  stroke-dasharray: 3 3; }\n\n.c3-text.c3-empty {\n  fill: gray;\n  font-size: 2em; }\n\n.c3-line {\n  stroke-width: 1px; }\n\n.c3-circle._expanded_ {\n  stroke-width: 1px;\n  stroke: #fff; }\n\n.c3-selected-circle {\n  fill: #fff;\n  stroke-width: 2px; }\n\n.c3-bar {\n  stroke-width: 0; }\n\n.c3-bar._expanded_ {\n  fill-opacity: .75; }\n\n.c3-chart-arcs-title {\n  dominant-baseline: middle;\n  font-size: 1.3em; }\n\n.c3-target.c3-focused {\n  opacity: 1; }\n\n.c3-target.c3-focused path.c3-line, .c3-target.c3-focused path.c3-step {\n  stroke-width: 2px; }\n\n.c3-target.c3-defocused {\n  opacity: 0.3 !important; }\n\n.c3-region {\n  fill: #4682b4;\n  fill-opacity: .1; }\n\n.c3-brush .extent {\n  fill-opacity: .1; }\n\n.c3-legend-item {\n  font-size: 12px; }\n\n.c3-legend-item-hidden {\n  opacity: .15; }\n\n.c3-legend-background {\n  opacity: .75;\n  fill: #fff;\n  stroke: #d3d3d3;\n  stroke-width: 1; }\n\n.c3-tooltip-container {\n  z-index: 10; }\n\n.c3-tooltip {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background-color: #fff;\n  empty-cells: show;\n  width: auto;\n  box-shadow: 7px 7px 12px -9px #777;\n  opacity: .9; }\n\n.c3-tooltip tr {\n  border: 1px solid #CCC; }\n\n.c3-tooltip th {\n  background-color: #aaa;\n  font-size: 14px;\n  padding: 2px 5px;\n  text-align: left;\n  color: #FFF; }\n\n.c3-tooltip td {\n  font-size: 13px;\n  padding: 3px 6px;\n  background-color: #fff;\n  border-left: 1px dotted #999;\n  color: #000; }\n\n.c3-tooltip td > span {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 6px; }\n\n.c3-tooltip td.value {\n  text-align: right; }\n\n.c3-area {\n  stroke-width: 0;\n  opacity: .2; }\n\n.c3-chart-arcs .c3-chart-arcs-background {\n  fill: #e0e0e0;\n  stroke: none; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-unit {\n  fill: #000;\n  font-size: 16px; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-max, .c3-chart-arcs .c3-chart-arcs-gauge-min {\n  fill: #777; }\n\n.c3-chart-arc .c3-gauge-value {\n  fill: #000; }\n\n/* === 16. OpenLayers Styles === */\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute; }\n\n.ol-scale-line {\n  background: #95b9e6;\n  background: rgba(0, 60, 136, 0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute; }\n\n.ol-scale-line-inner {\n  border: 1px solid #eeeeee;\n  border-top: none;\n  color: #eeeeee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width; }\n\n.ol-overlay-container {\n  will-change: left,right,top,bottom; }\n\n.ol-unsupported {\n  display: none; }\n\n.ol-viewport .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.ol-control {\n  position: absolute;\n  background-color: #eee;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 4px;\n  padding: 2px; }\n\n.ol-control:hover {\n  background-color: rgba(255, 255, 255, 0.6); }\n\n.ol-zoom {\n  top: .5em;\n  left: .5em; }\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear; }\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s; }\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em; }\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em; }\n\n@media print {\n  .ol-control {\n    display: none; } }\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: #7b98bc;\n  background-color: rgba(0, 60, 136, 0.5);\n  border: none;\n  border-radius: 2px; }\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0; }\n\n.ol-zoom-extent button {\n  line-height: 1.4em; }\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform; }\n\n.ol-touch .ol-control button {\n  font-size: 1.5em; }\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em; }\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: #4c6079;\n  background-color: rgba(0, 60, 136, 0.7); }\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0; }\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px; }\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em); }\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  font-size: .7rem;\n  line-height: 1.375em;\n  color: #000;\n  text-shadow: 0 0 2px #fff; }\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n  line-height: inherit; }\n\n.ol-attribution li:not(:last-child):after {\n  content: \" \"; }\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit; }\n\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block; }\n\n.ol-attribution.ol-collapsed ul {\n  display: none; }\n\n.ol-attribution.ol-logo-only ul {\n  display: block; }\n\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8); }\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n  height: 1.1em;\n  line-height: 1em; }\n\n.ol-attribution.ol-logo-only {\n  background: transparent;\n  bottom: .4em;\n  height: 1.1em;\n  line-height: 1em; }\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em; }\n\n.ol-attribution.ol-logo-only button,\n.ol-attribution.ol-uncollapsible button {\n  display: none; }\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  width: 24px;\n  height: 200px; }\n\n.ol-zoomslider-thumb {\n  position: absolute;\n  background: #7b98bc;\n  background: rgba(0, 60, 136, 0.5);\n  border-radius: 2px;\n  cursor: pointer;\n  height: 10px;\n  width: 22px;\n  margin: 3px; }\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n  width: 2.052em; }\n\n.ol-touch .ol-zoomslider-thumb {\n  width: 1.8em; }\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em; }\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0; }\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block; }\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px; }\n\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 1px;\n  left: 2px;\n  position: absolute; }\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none; }\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8); }\n\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0, 60, 136, 0.7); }\n", ""]);

// exports


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "/*\n * reset the default user-agent styles\n */\nhtml, body, div, h1, h2, h3, h4, p,\nspan, strong, a, img, b, u, i, canvas\ndl, dt, dd, ol, ul, li,\ntable, thead, tbody, tr, th, td,\nartile, aside, details, figcaption, figure,\nfooter, header, main, mark, nav, section, summary, time {\n\tmargin: 0px;\n\tborder: 0px;\n\tpadding: 0px;\n\tfont: inherit;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\nbody {\n\tline-height: 1;\n}\nform select {\n\tfont: inherit;\n\tfont-size: 90%;\n}\nul {\n\tlist-style: none;\n}\ntable {\n\tborder-spacing: 0;\n\tborder-collapse: collapse;\n}\naside, header {\n\tdisplay: block;\n}", ""]);

// exports


/***/ }),

/***/ 233:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(112);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40).Buffer))

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(39)
var ieee754 = __webpack_require__(59)
var isArray = __webpack_require__(25)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ })

},[242]);
//# sourceMappingURL=styles.bundle.js.map