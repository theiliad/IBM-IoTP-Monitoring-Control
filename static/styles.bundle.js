webpackJsonp([2,4],{

/***/ 137:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(537);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(575)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports
exports.i(__webpack_require__(538), "");

// module
exports.push([module.i, "/**\n * Copyright 2016 IBM Corp. All Rights Reserved.\n *\n * Licensed under the IBM License, a copy of which may be obtained at:\n *\n * http://www14.software.ibm.com/cgi-bin/weblap/lap.pl?li_formnum=L-DDIN-AEGGZJ&popup=y&title=IBM%20IoT%20for%20Automotive%20Sample%20Starter%20Apps%20%28Android-Mobile%20and%20Server-all%29\n *\n * You may not use this file except in compliance with the license.\n */\n/*\nAuthor: IBM Watson IoT\nAuthor URI: http://www.ibm.com/internet-of-things/\n\n=== Table of Contents ===\n\n1. General + Commonly Used Styles\n2. Header\n3. Content\n4. Sidebar\n5. Main Content\n6. Main Content - Modules\n7. Main Content - Map\n8. Main Content - Vehicle\n9. Angular Styles\n10. Grid System\n\n*/\n/* === 1. General + Commonly Used Styles === */\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: 'Helvetica Neue for IBM', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', sans-serif;\n  font-weight: 300;\n  color: #3a3a3a; }\n\n.clearfix {\n  clear: both; }\n\na {\n  text-decoration: none;\n  color: #1995ce; }\n\nstrong {\n  font-weight: 500; }\n\n.container,\n.container-50 {\n  padding: 20px 30px;\n  margin: 0 auto;\n  text-align: left; }\n\n.container-50 {\n  padding-left: 50px !important;\n  padding-right: 50px !important; }\n\n.container-30-right {\n  padding-right: 30px !important; }\n\n@media (max-width: 992px) {\n  .container-50 {\n    padding-right: 30px !important;\n    padding-left: 30px !important; } }\n\n.marginTop-10 {\n  margin-top: 10px !important; }\n\n.marginTop-15 {\n  margin-top: 15px !important; }\n\n.marginTop {\n  margin-top: 30px !important; }\n\n.marginTop-50 {\n  margin-top: 50px !important;\n  margin-bottom: 50px !important; }\n\n.paddingTop {\n  padding-top: 30px !important;\n  padding-bottom: 30px !important; }\n\n.paddingTop-50 {\n  padding-top: 50px !important;\n  padding-bottom: 50px !important; }\n\n.noTopPadding {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.floatRight {\n  float: right; }\n\n.floatLeft {\n  float: left; }\n\n.alignRight {\n  text-align: right; }\n\n.alignLeft {\n  text-align: left; }\n\n.alignCenter {\n  text-align: center; }\n\nimg.circularImg {\n  border-radius: 500px; }\n\ni.iconMarginRight {\n  margin-right: 15px; }\n\ni.iconMarginLeft {\n  margin-left: 15px; }\n\ni.iconBlock {\n  display: block; }\n\n.white {\n  color: #fff; }\n\n.primary {\n  color: #315d80; }\n\n.green {\n  color: #58a946; }\n\n.red {\n  color: #f05153; }\n\n.orange {\n  color: #f67734; }\n\n.blue {\n  color: #3774ba; }\n\n.lightBlue {\n  color: #1995ce; }\n\n.cyan {\n  color: #01b39e; }\n\n.divider-white {\n  display: block;\n  height: 3px;\n  width: 100%;\n  margin: 15px 0;\n  background: #fff; }\n\n.blur {\n  -webkit-animation: blur .5s forwards;\n  animation: blur .5s forwards; }\n\n@-webkit-keyframes blur {\n  0% {\n    -webkit-filter: blur(0px);\n    -moz-filter: blur(0px);\n    -o-filter: blur(0px);\n    -ms-filter: blur(0px);\n    filter: blur(0px); }\n  100% {\n    -webkit-filter: blur(4px);\n    -moz-filter: blur(4px);\n    -o-filter: blur(4px);\n    -ms-filter: blur(4px);\n    filter: blur(4px); } }\n\n/* === 2. Header Styles === */\nheader {\n  width: 100%;\n  height: 50px;\n  background: #1995ce;\n  color: #fff;\n  z-index: 1000;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 48px;\n  overflow: hidden; }\n\nheader .productTitle a {\n  color: #fff; }\n\n/* TODO - Will have to be centered in a dynamic way */\nheader .userImg {\n  float: left;\n  margin-right: 15px;\n  margin-top: 7px; }\n\nheader .userImg img {\n  width: 25px;\n  height: 25px; }\n\n/* === 3. Content === */\n.content {\n  /*padding-left: 200px;*/\n  transition: all .2s ease-in; }\n\n@media (max-width: 992px) {\n  .content {\n    padding-left: 0;\n    transition: all .2s ease-in; } }\n\naside.sidebar,\n.content .mainContent {\n  padding-top: 30px; }\n\n/* === 4. Sidebar === */\naside.sidebar {\n  position: fixed;\n  z-index: 999;\n  width: 200px;\n  left: 200px;\n  margin-left: -200px;\n  height: 100%;\n  overflow-y: auto;\n  background: #1f3e54;\n  color: #fff;\n  transition: all .2s ease-in; }\n\n@media (max-width: 992px) {\n  aside.sidebar {\n    left: 0;\n    transition: all .2s ease-in; } }\n\naside.sidebar ul.sidebarItems li a,\naside.sidebar ul.sidebarItems li a:hover {\n  cursor: pointer;\n  transition: all .1s ease-in; }\n\naside.sidebar ul.sidebarItems li a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  padding: 20px 0 20px 30px; }\n\naside.sidebar ul.sidebarItems li a:hover {\n  background: #173144;\n  padding-left: 40px; }\n\naside.sidebar ul.sidebarItems li.active a {\n  background: #284c65;\n  font-weight: 400;\n  border-left: 4px solid #00b4a0;\n  padding-left: 26px; }\n\naside.sidebar ul.sidebarItems li a i {\n  font-size: 20px;\n  vertical-align: text-bottom;\n  margin-right: 10px; }\n\n/* === 5. Main Content === */\n.content .mainContent {\n  position: relative; }\n\n.content .mainContent h4 {\n  font-weight: 500;\n  color: #2a506d;\n  text-transform: uppercase; }\n\n/* START => Overview Navbar Tabs */\nul.overviewNavTabs li a,\nul.overviewNavTabs li a:hover {\n  transition: all .1s ease-in; }\n\nul.overviewNavTabs,\nul.citiesNavTabBar {\n  display: table;\n  padding-top: 30px; }\n\nul.overviewNavTabs li,\nul.citiesNavTabs li {\n  float: left;\n  margin-right: 20px; }\n\nul.overviewNavTabs li a {\n  opacity: 0.6;\n  color: #5a8cc1;\n  padding-bottom: 10px;\n  display: table; }\n\nul.overviewNavTabs li a:hover {\n  opacity: 1;\n  color: #49729d; }\n\nul.overviewNavTabs li.active a {\n  opacity: 1;\n  color: #4c7190;\n  font-weight: 500;\n  border-bottom: 4px solid #f37636; }\n\n/* END => Overview Navbar Tabs */\ndiv.statusBar {\n  background: #325d80;\n  color: #fff; }\n\ndiv.statusBar ul li {\n  margin-bottom: 15px; }\n\ndiv.statusBar ul li:last-child {\n  margin-bottom: 0; }\n\nul.statusBarItems div.statusBarItems-Titles {\n  font-weight: 500;\n  margin-right: 50px; }\n\nul.statusBarItems div.statusBarItems-Titles i {\n  margin-right: 10px; }\n\ndiv.statusBar small.timeRange {\n  display: block;\n  font-size: 12px;\n  opacity: 0.7;\n  margin-bottom: 5px; }\n\n/* START => Cities Navbar Tabs */\ndiv.citiesNavTabBar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-bottom: 1px solid #f1f2f3; }\n\nul.citiesNavTabs li a {\n  opacity: 0.6;\n  display: table;\n  padding: 15px;\n  color: #496f8e; }\n\nul.citiesNavTabs li a:hover {\n  opacity: 1;\n  color: #fff;\n  background: #448adc; }\n\nul.citiesNavTabs li a,\nul.citiesNavTabs li a:hover {\n  transition: all .1s ease-in; }\n\nul.citiesNavTabs li.active a {\n  opacity: 1;\n  color: #fff;\n  background: #1995ce; }\n\n@media (max-width: 767px) {\n  div.citiesNavTabBar {\n    display: table;\n    padding-right: 30px;\n    padding-left: 30px; } }\n\n/* END => Cities Navbar Tabs */\n.dashTitleBar {\n  padding-bottom: 10px;\n  margin-bottom: 15px;\n  font-weight: 400;\n  color: #1995ce;\n  border-bottom: 3px solid #1995ce; }\n\n/* === 6. Main Content - Modules === */\ndiv.dashItem {\n  margin-bottom: 50px; }\n\ndiv.dash-gray {\n  background: #f6f7f8; }\n\ndiv.recommendations-Percentage {\n  color: #5a8dc7;\n  text-align: right;\n  line-height: 25px;\n  font-weight: 400; }\n\ndiv.recommendations-Percentage span {\n  font-size: 27px; }\n\np.recommendations-Text {\n  color: #3a6284;\n  line-height: 25px; }\n\n/* === 7. Main Content - Map === */\ndiv.map-NumberOfCars div.map-Number {\n  font-size: 50px;\n  font-weight: 500; }\n\ndiv.map-NumberOfCars div.map-Number i {\n  font-size: 40px; }\n\ndiv.map-NumberOfCars div.map-Number-Side {\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 6px; }\n\ndiv.map-NumberOfCars div.carStatsColumn i {\n  font-size: 30px;\n  margin-bottom: 10px; }\n\ndiv.map-NumberOfCars div.carStatsColumn strong {\n  font-size: 25px; }\n\ndiv.map-NumberOfCars div.carStatsColumn p {\n  margin-top: 5px; }\n\nstrong.totalCarsNumber {\n  margin-right: 20px;\n  font-weight: 700; }\n\n/* === 8. Main Content - Vehicle === */\nstrong.vehicleStats {\n  display: block;\n  font-size: 45px;\n  margin: 20px 0 10px -5px; }\n\nstrong.vehicleStats i {\n  font-size: 35px; }\n\n/* === 9. Angular Styles === */\n[ui-view].ng-enter, [ui-view].ng-leave {\n  transition: all .15s ease-in-out; }\n\n[ui-view].ng-enter {\n  opacity: 0;\n  -webkit-transform: scale3d(0.75, 0.75, 0.75);\n  transform: scale3d(0.75, 0.75, 0.75); }\n\n[ui-view].ng-enter-active {\n  opacity: 1;\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1); }\n\n[ui-view].ng-leave {\n  opacity: 1;\n  -webkit-transform: scale3d(0.75, 0.75, 0.75);\n  transform: scale3d(0.75, 0.75, 0.75); }\n\n[ui-view].ng-leave-active {\n  opacity: 0;\n  -webkit-transform: scale3d(0.75, 0.75, 0.75);\n  transform: scale3d(0.75, 0.75, 0.75); }\n\n/* === 10. Grid System === */\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-direction: row;\n  flex-direction: row; }\n\n.column-2-med, .column-3-med, .column-4-med, .column-5-med, .column-6-med, .column-7-med, .column-9-med, .column-10-med {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 auto auto;\n  padding: 15px; }\n\n.noOffsetRow .column-2-med:first-child, .noOffsetRow .column-3-med:first-child, .noOffsetRow .column-4-med:first-child,\n.noOffsetRow .column-5-med:first-child, .noOffsetRow .column-6-med:first-child, .noOffsetRow .column-7-med:first-child,\n.noOffsetRow .column-9-med:first-child, .noOffsetRow .column-10-med:first-child {\n  padding-left: 0; }\n\n.noOffsetRow .column-2-med:last-child, .noOffsetRow .column-3-med:last-child, .noOffsetRow .column-4-med:last-child,\n.noOffsetRow .column-5-med:last-child, .noOffsetRow .column-6-med:last-child, .noOffsetRow .column-7-med:last-child,\n.noOffsetRow .column-9-med:last-child, .noOffsetRow .column-10-med:last-child {\n  padding-right: 0; }\n\n.noBottomPadding .column-2-med, .noBottomPadding .column-3-med, .noBottomPadding .column-4-med, .noBottomPadding .column-5-med,\n.noBottomPadding .column-6-med, .noBottomPadding .column-7-med, .noBottomPadding .column-9-med, .noBottomPadding .column-10-med {\n  padding-bottom: 0; }\n\n.noOffsetRow-6 .column-6-med:nth-child(odd) {\n  padding-left: 0; }\n\n.noOffsetRow-6 .column-6-med:last-child {\n  padding-right: 15px; }\n\n.column-2-med {\n  max-width: 16.6666666667%;\n  -ms-flex-preferred-size: 16.6666666667%;\n  flex-basis: 16.6666666667%; }\n\n.column-3-med {\n  max-width: 25%;\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%; }\n\n.column-4-med {\n  max-width: 33.3333333%;\n  -ms-flex-preferred-size: 33.3333333%;\n  flex-basis: 33.3333333%; }\n\n.column-5-med {\n  max-width: 41.6666667%;\n  -ms-flex-preferred-size: 41.6666667%;\n  flex-basis: 41.6666667%; }\n\n.column-6-med {\n  max-width: 50%;\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%; }\n\n.column-7-med {\n  max-width: 58.333333333%;\n  -ms-flex-preferred-size: 58.333333333%;\n  flex-basis: 58.333333333%; }\n\n.column-9-med {\n  max-width: 75%;\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%; }\n\n.column-10-med {\n  max-width: 83.3333333%;\n  -ms-flex-preferred-size: 83.3333333%;\n  flex-basis: 83.3333333%; }\n\n.row img {\n  max-width: 100%; }\n\n@media (max-width: 767px) {\n  .column-2-med, .column-3-med, .column-4-med, .column-5-med, .column-6-med, .column-7-med, .column-9-med, .column-10-med {\n    max-width: 100%;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%; }\n  .noOffsetRow .column-2-med, .noOffsetRow .column-3-med, .noOffsetRow .column-4-med, .noOffsetRow .column-5-med,\n  .noOffsetRow .column-6-med, .noOffsetRow .column-7-med, .noOffsetRow .column-9-med, .noOffsetRow .column-10-med {\n    padding-right: 0;\n    padding-left: 0; }\n  .column-2-xs {\n    max-width: 16.6666666667%;\n    -ms-flex-preferred-size: 16.6666666667%;\n    flex-basis: 16.6666666667%; }\n  .column-3-xs {\n    max-width: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%; }\n  .column-4-xs {\n    max-width: 33.3333333%;\n    -ms-flex-preferred-size: 33.3333333%;\n    flex-basis: 33.3333333%; }\n  .column-5-xs {\n    max-width: 41.6666667%;\n    -ms-flex-preferred-size: 41.6666667%;\n    flex-basis: 41.6666667%; }\n  .column-6-xs {\n    max-width: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%; }\n  .column-7-xs {\n    max-width: 58.333333333%;\n    -ms-flex-preferred-size: 58.333333333%;\n    flex-basis: 58.333333333%; }\n  .column-9-xs {\n    max-width: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%; }\n  .column-10-xs {\n    max-width: 83.3333333%;\n    -ms-flex-preferred-size: 83.3333333%;\n    flex-basis: 83.3333333%; } }\n\n/* small */\n/* med */\n/* large */\n@media (min-width: 1200px) {\n  .column-2-lg {\n    max-width: 16.6666666667%;\n    -ms-flex-preferred-size: 16.6666666667%;\n    flex-basis: 16.6666666667%; }\n  .column-3-lg {\n    max-width: 25%;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%; }\n  .column-4-lg {\n    max-width: 33.3333333%;\n    -ms-flex-preferred-size: 33.3333333%;\n    flex-basis: 33.3333333%; }\n  .column-5-lg {\n    max-width: 41.6666667%;\n    -ms-flex-preferred-size: 41.6666667%;\n    flex-basis: 41.6666667%; }\n  .column-6-lg {\n    max-width: 50%;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%; }\n  .column-7-lg {\n    max-width: 58.333333333%;\n    -ms-flex-preferred-size: 58.333333333%;\n    flex-basis: 58.333333333%; }\n  .column-9-lg {\n    max-width: 75%;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%; }\n  .column-10-lg {\n    max-width: 83.3333333%;\n    -ms-flex-preferred-size: 83.3333333%;\n    flex-basis: 83.3333333%; } }\n\n.gridDemo .row div {\n  border-right: 1px solid rgba(0, 0, 0, 0.2); }\n\n/* === 11. VIBE Modal Styles === */\na.em-Modal-Call {\n  display: table; }\n\na.em-Modal-Call i {\n  color: #fff;\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  margin-right: 15px; }\n\ndiv.em-Modal {\n  position: fixed;\n  background: rgba(62, 120, 188, 0.75);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0 30px;\n  overflow: hidden;\n  color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 9999;\n  transition: all .15s ease-in;\n  transition-delay: .3s; }\n\ndiv.em-Modal-show {\n  opacity: 1;\n  visibility: visible;\n  transition: all .15s ease-in; }\n\ndiv.em-Modal div.em-Modal-Content {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translateY(300px) scale(0) rotateX(75deg);\n  transform: translateY(300px) scale(0) rotateX(75deg);\n  padding: 50px 0;\n  position: relative;\n  height: 100%;\n  transition: all .2s ease-in;\n  transition-delay: .1s; }\n\ndiv.em-Modal div.em-Modal-Content-show {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translateY(0) scale(1) rotateX(0);\n  transform: translateY(0) scale(1) rotateX(0);\n  transition: all .2s ease-in;\n  transition-delay: .15s; }\n\ndiv.em-Modal div.em-Modal-Close {\n  opacity: 0;\n  visibility: hidden;\n  position: fixed;\n  right: 10px;\n  top: 30px;\n  font-size: 50px;\n  line-height: 0;\n  transition: all .2s ease-in; }\n\ndiv.em-Modal div.em-Modal-Close-show {\n  opacity: 1;\n  visibility: visible;\n  transition: all .2s ease-in;\n  transition-delay: .1s; }\n\ndiv.em-Modal div.em-Modal-Close a {\n  color: #fff; }\n\ndiv.em-Modal div.em-Modal-Content form,\ndiv.em-Modal div.em-Modal-Content p {\n  margin: 30px 0; }\n\ndiv.em-Modal div.em-Modal-Content input {\n  display: block;\n  font-family: lato;\n  font-weight: 300;\n  width: 40%;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-bottom: 1px solid #bebebe;\n  background: #fff;\n  margin: 30px auto; }\n\n@media (max-width: 1024px) {\n  div.em-Modal div.em-Modal-Content input {\n    width: 70%; } }\n\ndiv.em-Modal div.em-Modal-Content .formButtons {\n  display: table;\n  margin: 0 auto; }\n\ndiv.em-Modal div.em-Modal-Content button.btn {\n  display: block;\n  float: left;\n  font-family: lato;\n  font-weight: 300;\n  padding: 10px 16px;\n  font-size: 15px;\n  border-radius: 50px;\n  border: 1px solid #d3d3d4;\n  color: #8b8b8c;\n  background: transparent;\n  margin: 30px auto;\n  margin-right: 15px;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal div.em-Modal-Content button.btn:hover {\n  border: 1px solid #aeaeaf;\n  color: #636364;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal div.em-Modal-Content button.btn-submit,\ndiv.em-Modal div.em-Modal-Content button.btn-submit:hover {\n  border: 1px solid #0faf73;\n  color: #0faf73; }\n\ndiv.em-Modal ul.modalMenu {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\ndiv.em-Modal ul.modalMenu li {\n  font-size: 30px;\n  font-weight: 300;\n  text-align: center;\n  margin-bottom: 75px; }\n\ndiv.em-Modal ul.modalMenu li:last-child {\n  margin-bottom: 0; }\n\ndiv.em-Modal ul.modalMenu li a {\n  color: #fff;\n  opacity: 0.75;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li a:hover {\n  opacity: 1;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li i {\n  padding-bottom: 10px;\n  opacity: 0.75;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li:hover i {\n  opacity: 1;\n  transition: all .1s ease-in; }\n\ndiv.em-Modal ul.modalMenu li.active a {\n  font-weight: 600;\n  border-bottom: 4px solid #f37636;\n  padding-bottom: 5px;\n  opacity: 1; }\n\ndiv.em-Modal ul.modalMenu li.active i {\n  opacity: 1; }\n\n/* === 12. General Media Queries === */\n@media (max-width: 767px) {\n  .medium-show {\n    display: table; }\n  .medium-hide {\n    display: none; } }\n\n@media (min-width: 768px) {\n  .large-hide {\n    display: none; } }\n\n/* === 13. Twitter Bootstrap Styles === */\n/*!\n * Bootstrap v3.3.5 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*!\n * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=c66531b64b35cefc404bb8205571ef59)\n * Config saved to config.json and https://gist.github.com/c66531b64b35cefc404bb8205571ef59\n */\n/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  padding-left: 0;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #dddddd; }\n\n.table > thead > tr > th {\n  font-weight: 500;\n  vertical-align: bottom;\n  border-bottom: 2px solid #dddddd; }\n\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0; }\n\n.table > tbody + tbody {\n  border-top: 2px solid #dddddd; }\n\n.table .table {\n  background-color: #ffffff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #dddddd; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #dddddd; }\n\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #dddddd; }\n  .table-responsive > .table {\n    margin-bottom: 0; }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0; } }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  /*  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;*/\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  /*  line-height: 1.42857143;*/\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n\n.popover.top {\n  margin-top: -10px; }\n\n.popover.right {\n  margin-left: 10px; }\n\n.popover.bottom {\n  margin-top: 10px; }\n\n.popover.left {\n  margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n\n.popover.top > .arrow:after {\n  content: \" \";\n  bottom: 1px;\n  margin-left: -10px;\n  border-bottom-width: 0;\n  border-top-color: #ffffff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n\n.popover.right > .arrow:after {\n  content: \" \";\n  left: 1px;\n  bottom: -10px;\n  border-left-width: 0;\n  border-right-color: #ffffff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n\n.popover.bottom > .arrow:after {\n  content: \" \";\n  top: 1px;\n  margin-left: -10px;\n  border-top-width: 0;\n  border-bottom-color: #ffffff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n\n.popover.left > .arrow:after {\n  content: \" \";\n  right: 1px;\n  border-right-width: 0;\n  border-left-color: #ffffff;\n  bottom: -10px; }\n\n.popover .btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.popover .btn:focus,\n.popover .btn:active:focus,\n.popover .btn.active:focus,\n.popover .btn.focus,\n.popover .btn:active.focus,\n.popover .btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\n.popover .btn:hover,\n.popover .btn:focus,\n.popover .btn.focus {\n  color: #333333;\n  text-decoration: none; }\n\n.popover .btn:active,\n.popover .btn.active {\n  outline: 0;\n  background-image: none;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n\n.popover .btn.disabled,\n.popover .btn[disabled],\n.popover fieldset[disabled] .btn {\n  cursor: not-allowed;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  box-shadow: none; }\n\n.popover a.btn.disabled,\n.popover fieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.popover .btn-default {\n  color: #333333;\n  background-color: #ffffff;\n  border-color: #cccccc; }\n\n.popover .btn-default:focus,\n.popover .btn-default.focus {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c; }\n\n.popover .btn-default:hover {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #adadad; }\n\n.popover .btn-default:active,\n.popover .btn-default.active,\n.popover .open > .dropdown-toggle.btn-default {\n  color: #333333;\n  background-color: #e6e6e6;\n  border-color: #adadad; }\n\n.popover .btn-default:active:hover,\n.popover .btn-default.active:hover,\n.popover .open > .dropdown-toggle.btn-default:hover,\n.popover .btn-default:active:focus,\n.popover .btn-default.active:focus,\n.popover .open > .dropdown-toggle.btn-default:focus,\n.popover .btn-default:active.focus,\n.popover .btn-default.active.focus,\n.popover .open > .dropdown-toggle.btn-default.focus {\n  color: #333333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c; }\n\n.popover .btn-default:active,\n.popover .btn-default.active,\n.popover .open > .dropdown-toggle.btn-default {\n  background-image: none; }\n\n.popover .btn-default.disabled:hover,\n.popover .btn-default[disabled]:hover,\n.popover fieldset[disabled] .btn-default:hover,\n.popover .btn-default.disabled:focus,\n.popover .btn-default[disabled]:focus,\n.popover fieldset[disabled] .btn-default:focus,\n.popover .btn-default.disabled.focus,\n.popover .btn-default[disabled].focus,\n.popover fieldset[disabled] .btn-default.focus {\n  background-color: #ffffff;\n  border-color: #cccccc; }\n\n.popover .btn-default .badge {\n  color: #ffffff;\n  background-color: #333333; }\n\n/* === 14. Real-Time Map Styles === */\n.carMonitorMap {\n  position: relative;\n  height: 500px;\n  width: 100%; }\n\n@media screen and (max-width: 767px) {\n  .carMonitorMap {\n    height: 300px; } }\n\n.carMonitorMap .mapLocationBar {\n  position: absolute;\n  top: 30px;\n  left: 30px;\n  z-index: 10;\n  padding: 10px 20px;\n  background: #fff;\n  font-weight: 500;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); }\n\n#canvas .olControlAttribution {\n  font-size: 13px;\n  bottom: 3px; }\n\n.carMonitorMap .ol-zoom {\n  left: auto;\n  top: auto;\n  right: 30px;\n  bottom: 70px; }\n\n.carMonitorMap .ol-attribution {\n  right: 30px;\n  bottom: 30px; }\n\n.carMonitorMap .ol-attribution.ol-uncollapsible {\n  height: 1.5em; }\n\n.carMonitorMap .popover {\n  max-width: 414px; }\n\n.carMonitorMap .popover .popover-title {\n  white-space: nowrap;\n  display: table;\n  width: 100%; }\n\n.carMonitorMap .popover .popover-title div:first-child {\n  display: table-cell;\n  text-aligh: left;\n  width: 100%; }\n\n.carMonitorMap .popover .popover-title div:last-child {\n  display: table-cell;\n  text-aligh: right;\n  vertical-align: text-top; }\n\n.carMonitorMap .popover .popover-title .close {\n  display: inline-block;\n  margin-top: -3px;\n  margin-bottom: 0;\n  margin-left: 4px;\n  margin-right: -10px;\n  padding: 0px 4px;\n  line-height: 1.2;\n  font-size: 12px;\n  border-radius: 3px; }\n\n.carMonitorMap .popover .popover-content {\n  font-weight: lighter; }\n\n/* === 15. C3 Styles === */\n.c3 svg {\n  font: 10px sans-serif; }\n\n.c3 line, .c3 path {\n  fill: none;\n  stroke: #000; }\n\n.c3 text {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.c3-bars path, .c3-event-rect, .c3-legend-item-tile, .c3-xgrid-focus, .c3-ygrid {\n  shape-rendering: crispEdges; }\n\n.c3-chart-arc path {\n  stroke: #fff; }\n\n.c3-chart-arc text {\n  fill: #fff;\n  font-size: 13px; }\n\n.c3-grid line {\n  stroke: #aaa; }\n\n.c3-grid text {\n  fill: #aaa; }\n\n.c3-xgrid, .c3-ygrid {\n  stroke-dasharray: 3 3; }\n\n.c3-text.c3-empty {\n  fill: gray;\n  font-size: 2em; }\n\n.c3-line {\n  stroke-width: 1px; }\n\n.c3-circle._expanded_ {\n  stroke-width: 1px;\n  stroke: #fff; }\n\n.c3-selected-circle {\n  fill: #fff;\n  stroke-width: 2px; }\n\n.c3-bar {\n  stroke-width: 0; }\n\n.c3-bar._expanded_ {\n  fill-opacity: .75; }\n\n.c3-chart-arcs-title {\n  dominant-baseline: middle;\n  font-size: 1.3em; }\n\n.c3-target.c3-focused {\n  opacity: 1; }\n\n.c3-target.c3-focused path.c3-line, .c3-target.c3-focused path.c3-step {\n  stroke-width: 2px; }\n\n.c3-target.c3-defocused {\n  opacity: 0.3 !important; }\n\n.c3-region {\n  fill: #4682b4;\n  fill-opacity: .1; }\n\n.c3-brush .extent {\n  fill-opacity: .1; }\n\n.c3-legend-item {\n  font-size: 12px; }\n\n.c3-legend-item-hidden {\n  opacity: .15; }\n\n.c3-legend-background {\n  opacity: .75;\n  fill: #fff;\n  stroke: #d3d3d3;\n  stroke-width: 1; }\n\n.c3-tooltip-container {\n  z-index: 10; }\n\n.c3-tooltip {\n  border-collapse: collapse;\n  border-spacing: 0;\n  background-color: #fff;\n  empty-cells: show;\n  width: auto;\n  box-shadow: 7px 7px 12px -9px #777;\n  opacity: .9; }\n\n.c3-tooltip tr {\n  border: 1px solid #CCC; }\n\n.c3-tooltip th {\n  background-color: #aaa;\n  font-size: 14px;\n  padding: 2px 5px;\n  text-align: left;\n  color: #FFF; }\n\n.c3-tooltip td {\n  font-size: 13px;\n  padding: 3px 6px;\n  background-color: #fff;\n  border-left: 1px dotted #999;\n  color: #000; }\n\n.c3-tooltip td > span {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 6px; }\n\n.c3-tooltip td.value {\n  text-align: right; }\n\n.c3-area {\n  stroke-width: 0;\n  opacity: .2; }\n\n.c3-chart-arcs .c3-chart-arcs-background {\n  fill: #e0e0e0;\n  stroke: none; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-unit {\n  fill: #000;\n  font-size: 16px; }\n\n.c3-chart-arcs .c3-chart-arcs-gauge-max, .c3-chart-arcs .c3-chart-arcs-gauge-min {\n  fill: #777; }\n\n.c3-chart-arc .c3-gauge-value {\n  fill: #000; }\n\n/* === 16. OpenLayers Styles === */\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute; }\n\n.ol-scale-line {\n  background: #95b9e6;\n  background: rgba(0, 60, 136, 0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute; }\n\n.ol-scale-line-inner {\n  border: 1px solid #eeeeee;\n  border-top: none;\n  color: #eeeeee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width; }\n\n.ol-overlay-container {\n  will-change: left,right,top,bottom; }\n\n.ol-unsupported {\n  display: none; }\n\n.ol-viewport .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.ol-control {\n  position: absolute;\n  background-color: #eee;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 4px;\n  padding: 2px; }\n\n.ol-control:hover {\n  background-color: rgba(255, 255, 255, 0.6); }\n\n.ol-zoom {\n  top: .5em;\n  left: .5em; }\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear; }\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s; }\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em; }\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em; }\n\n@media print {\n  .ol-control {\n    display: none; } }\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: #7b98bc;\n  background-color: rgba(0, 60, 136, 0.5);\n  border: none;\n  border-radius: 2px; }\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0; }\n\n.ol-zoom-extent button {\n  line-height: 1.4em; }\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform; }\n\n.ol-touch .ol-control button {\n  font-size: 1.5em; }\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em; }\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: #4c6079;\n  background-color: rgba(0, 60, 136, 0.7); }\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0; }\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px; }\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em); }\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  font-size: .7rem;\n  line-height: 1.375em;\n  color: #000;\n  text-shadow: 0 0 2px #fff; }\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n  line-height: inherit; }\n\n.ol-attribution li:not(:last-child):after {\n  content: \" \"; }\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit; }\n\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block; }\n\n.ol-attribution.ol-collapsed ul {\n  display: none; }\n\n.ol-attribution.ol-logo-only ul {\n  display: block; }\n\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8); }\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n  height: 1.1em;\n  line-height: 1em; }\n\n.ol-attribution.ol-logo-only {\n  background: transparent;\n  bottom: .4em;\n  height: 1.1em;\n  line-height: 1em; }\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em; }\n\n.ol-attribution.ol-logo-only button,\n.ol-attribution.ol-uncollapsible button {\n  display: none; }\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  width: 24px;\n  height: 200px; }\n\n.ol-zoomslider-thumb {\n  position: absolute;\n  background: #7b98bc;\n  background: rgba(0, 60, 136, 0.5);\n  border-radius: 2px;\n  cursor: pointer;\n  height: 10px;\n  width: 22px;\n  margin: 3px; }\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n  width: 2.052em; }\n\n.ol-touch .ol-zoomslider-thumb {\n  width: 1.8em; }\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em; }\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0; }\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block; }\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px; }\n\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 1px;\n  left: 2px;\n  position: absolute; }\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none; }\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255, 255, 255, 0.8); }\n\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0, 60, 136, 0.7); }\n", ""]);

// exports


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, "/*\n * reset the default user-agent styles\n */\nhtml, body, div, h1, h2, h3, h4, p,\nspan, strong, a, img, b, u, i, canvas\ndl, dt, dd, ol, ul, li,\ntable, thead, tbody, tr, th, td,\nartile, aside, details, figcaption, figure,\nfooter, header, main, mark, nav, section, summary, time {\n\tmargin: 0px;\n\tborder: 0px;\n\tpadding: 0px;\n\tfont: inherit;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n}\nbody {\n\tline-height: 1;\n}\nform select {\n\tfont: inherit;\n\tfont-size: 90%;\n}\nul {\n\tlist-style: none;\n}\ntable {\n\tborder-spacing: 0;\n\tborder-collapse: collapse;\n}\naside, header {\n\tdisplay: block;\n}", ""]);

// exports


/***/ }),

/***/ 575:
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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);


/***/ })

},[583]);
//# sourceMappingURL=styles.bundle.js.map