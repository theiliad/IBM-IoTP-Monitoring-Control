webpackJsonp([1,4],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IBMIoTPService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IBMIoTPService = (function () {
    function IBMIoTPService(http) {
        this.http = http;
        // https://docs.internetofthings.ibmcloud.com/swagger/v0002.html
        this.deviceType = "iot-conveyor-belt";
        // Endpoint URLs
        this.baseURL = "/api";
        this.devicesURL = "/device/types/" + this.deviceType + "/devices";
        this.statusURL = "/service-status";
        this.lastCachedEventURL = "/device/types/" + this.deviceType + "/devices/{deviceId}/events/sensorData";
    }
    IBMIoTPService.prototype.getDevices = function () {
        var url = this.baseURL.concat(this.devicesURL);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    IBMIoTPService.prototype.getStatus = function () {
        var url = this.baseURL.concat(this.statusURL);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    IBMIoTPService.prototype.getLastCachedEvent = function (deviceID) {
        var url = this.baseURL.concat(this.lastCachedEventURL.replace("{deviceId}", deviceID));
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    IBMIoTPService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return IBMIoTPService;
}());
IBMIoTPService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], IBMIoTPService);

var _a;
//# sourceMappingURL=ibmIoTP.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_iotp_ibmIoTP_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_livedata_liveData_service__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicesComponent = (function () {
    function DevicesComponent(ibmIoTP, liveDataService) {
        this.ibmIoTP = ibmIoTP;
        this.liveDataService = liveDataService;
        this.liveData = {};
        this.messages = [];
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.liveDataService.getMessages().subscribe(function (message) {
            _this.messages.push(message);
            if (message["type"] === "new_sensorData") {
                console.log("TEXT", message["text"]);
                var payload = JSON.parse(message["text"])["d"];
                var deviceId = payload["id"];
                for (var _i = 0, _a = _this.devices; _i < _a.length; _i++) {
                    var device = _a[_i];
                    if (device.deviceId === deviceId) {
                        device["data"] = payload;
                    }
                }
            }
        });
        this.ibmIoTP.getDevices().then(function (devices) {
            console.log("Devices:", devices);
            _this.devices = devices["results"];
            var index = 0;
            var _loop_1 = function (device) {
                _this.ibmIoTP.getLastCachedEvent(device.deviceId).then(function (eventData) {
                    console.log("Event:", atob(eventData["payload"]));
                    device["data"] = JSON.parse(atob(eventData["payload"]))["d"];
                }, function (error) { return _this.errorMessage = error; });
                if (index < 5) {
                    _this.setLiveData(index, true);
                    index += 1;
                }
            };
            for (var _i = 0, _a = _this.devices; _i < _a.length; _i++) {
                var device = _a[_i];
                _loop_1(device);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    DevicesComponent.prototype.sendMessage = function () {
        this.liveDataService.sendMessage('new-data', this.message);
    };
    DevicesComponent.prototype.setLiveData = function (index, turnOn) {
        if (turnOn) {
            console.log("Turn ON Live Data for", this.devices[index].deviceId);
            this.liveData[index] = true;
        }
        else {
            console.log("Turn OFF Live Data for", this.devices[index].deviceId);
            this.liveData[index] = false;
        }
        var socketData = {
            deviceId: this.devices[index].deviceId,
            turnOn: this.liveData[index]
        };
        this.liveDataService.sendMessage('mqtt_set', JSON.stringify(socketData));
    };
    DevicesComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        template: __webpack_require__(556),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_iotp_ibmIoTP_service__["a" /* IBMIoTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_iotp_ibmIoTP_service__["a" /* IBMIoTPService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_livedata_liveData_service__["a" /* LiveDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_livedata_liveData_service__["a" /* LiveDataService */]) === "function" && _b || Object])
], DevicesComponent);

;
var _a, _b;
//# sourceMappingURL=devices.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RulesComponent = (function () {
    function RulesComponent() {
    }
    return RulesComponent;
}());
RulesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        template: "\n    <h2>Rules</h2>\n    <p>List of rules</p>"
    })
], RulesComponent);

;
//# sourceMappingURL=rules.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_iotp_ibmIoTP_service__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusComponent = (function () {
    function StatusComponent(ibmIoTP) {
        this.ibmIoTP = ibmIoTP;
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ibmIoTP.getStatus().then(function (iotpStatus) {
            console.log("Status:", iotpStatus);
            var keys = Object.keys(iotpStatus);
            if (keys.length > 0) {
                _this.iotpStatus = iotpStatus[keys[0]];
                _this.iotpStatusKeys = Object.keys(_this.iotpStatus);
            }
            else {
                _this.iotpStatus = [];
                _this.iotpStatusKeys = [];
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    StatusComponent.prototype.cleanCamelCase = function (text) {
        return text.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) { return str.toUpperCase(); });
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        template: __webpack_require__(557),
        styles: ["\n    .list {\n        line-height: 30px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_iotp_ibmIoTP_service__["a" /* IBMIoTPService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_iotp_ibmIoTP_service__["a" /* IBMIoTPService */]) === "function" && _a || Object])
], StatusComponent);

;
var _a;
//# sourceMappingURL=status.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveDataService; });


var LiveDataService = (function () {
    function LiveDataService() {
        this.url = 'http://localhost:5000';
    }
    LiveDataService.prototype.sendMessage = function (topic, message) {
        this.socket.emit(topic, message);
    };
    LiveDataService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return LiveDataService;
}());

//# sourceMappingURL=liveData.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 356;


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(480);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(555),
        styles: [__webpack_require__(548)]
    })
], AppComponent);

;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_devices_devices_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_rules_rules_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_status_status_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_iotp_ibmIoTP_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_livedata_liveData_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(477);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components






// Services


// Routing

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_rules_rules_component__["a" /* RulesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_status_status_component__["a" /* StatusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_iotp_ibmIoTP_service__["a" /* IBMIoTPService */],
            __WEBPACK_IMPORTED_MODULE_11__services_livedata_liveData_service__["a" /* LiveDataService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_devices_devices_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_rules_rules_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_status_status_component__ = __webpack_require__(313);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', redirectTo: '/devices', pathMatch: 'full' },
    { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_1__components_devices_devices_component__["a" /* DevicesComponent */] },
    { path: 'rules', component: __WEBPACK_IMPORTED_MODULE_2__components_rules_rules_component__["a" /* RulesComponent */] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_3__components_status_status_component__["a" /* StatusComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'header-component',
        template: "\n    <header>\n        <div class=\"container noTopPadding\">\n            <div class=\"floatLeft productTitle productTitleWide\">\n                <a [routerLink]=\"['/']\">\n                <img src=\"assets/img/iotp.png\" class=\"floatLeft\" style=\"width: 55px; margin-right: 15px; margin-top: -2px;\">\n                IBM <strong>Watson IoT</strong> Platform\n                </a>\n            </div>\n            \n            <div class=\"floatRight\">\n                <div class=\"userImg medium-hide\">\n                    <img src=\"assets/img/user.jpg\" class=\"circularImg\">\n                </div>\n                \n                <p class=\"floatRight medium-hide\">\n                    Archie\n                </p>\n                \n                <p class=\"floatRight medium-show large-hide\">\n                    <a href=\"#\" class=\"btn btn-demo em-Modal-Call\" rel=\"loginModal\">\n                        <i class=\"icon-menu\"></i>\n                    </a>\n                </p>\n            </div>\n        </div>\n    </header>"
    })
], HeaderComponent);

;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.routes = [
            { title: 'Devices', link: '/devices' },
            { title: 'Rules', link: '/rules' },
            { title: 'Status', link: '/status' }
        ];
    }
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'sidebar-component',
        template: "\n    <aside class=\"sidebar\">\n        <ul class=\"sidebarItems\">\n            <li [routerLinkActive]=\"['active']\" *ngFor=\"let item of routes;\">\n                <a [routerLink]=\"[item.link]\">\n                    <i class=\"icon-location\"></i>{{item.title}}\n                </a>\n            </li>\n        </ul>\n    </aside>"
    })
], SidebarComponent);

;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(137)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n\n<div class=\"content\">\n    <sidebar-component></sidebar-component>\n    \n    <div class=\"mainContent\">        \n        <!-- Router Outlet -->\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-50 noTopPadding container-30-right ng-scope\">\n    <div class=\"floatLeft\">\n        <h4>Devices Registered</h4>\n    </div>\n</div>\n\n<div class=\"clearfix ng-scope\"></div>\n\n<div class=\"statusBar marginTop-15 ng-scope\">\n    <div class=\"container-50 row noOffsetRow\">\n        <div class=\"column-6-lg column-6-med column-6-sm\">\n            <strong>Total Devices Registered</strong>\n\n            <strong class=\"vehicleStats orange\">\n                <i class=\"icon-car iconMarginRight white\"></i> {{devices !== undefined ? devices.length : \"--\"}}\n            </strong>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"this.devices !== undefined && this.devices.length > 0\" class=\"container-50 paddingTop\">\n      <div class=\"floatRight\">\n        <a href=\"/admin/ui/device\">Manage Devices</a>\n      </div>\n      \n      <div class=\"dashItem ng-scope\" ng-if=\"$ctrl.regions\">\n        <div class=\"dashTitleBar\">\n            <h3>Device Availability</h3>\n        </div>\n\n        <div class=\"primary\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th>#</th>\n                        <th>Device ID</th>\n                        <th>RPM</th>\n                        <th>Running</th>\n                        <th>Last Updated</th>\n                        <th>Live Data</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr *ngFor=\"let device of devices; let i = index;\">\n                        <td>{{i + 1}}</td>\n                        <td>{{device.deviceId}}</td>\n                        <td class=\"align-right\">{{device.data !== undefined ? device.data.rpm : \"--\"}}</td>\n                        <td class=\"align-right\">{{device.data !== undefined ? device.data.running : \"--\"}}</td>\n                        <td class=\"align-right\">{{device.data !== undefined ? (device.data.ts | date:'medium') : \"--\"}}</td>\n                        <td class=\"align-right\"><input type=\"checkbox\" [(ngModel)]=\"liveData[i]\" (change)=\"setLiveData(i, $event.target.checked === true ? true : false);\"></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-50 paddingTop\">\n    <strong *ngIf=\"this.devices !== undefined && this.devices.length === 0\">\n        No Devices Found\n    </strong>\n\n    <strong *ngIf=\"this.devices === undefined && errorMessage === undefined\">\n        Loading Devices...\n    </strong>\n\n    <strong *ngIf=\"this.devices === undefined && errorMessage !== undefined\">\n        Something went wrong!\n    </strong>\n\n    <h2>Socket Test</h2>\n    <div *ngFor=\"let message of messages\">\n        {{message.text}}\n    </div>\n    <input [(ngModel)]=\"message\" />\n    <button (click)=\"sendMessage()\">Send</button>\n</div>"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-50 noTopPadding container-30-right\">\n    <div class=\"floatLeft\">\n        <h4>Service Status</h4>\n    </div>\n</div>\n\n<div class=\"clearfix\"></div>\n\n<div *ngIf=\"iotpStatusKeys !== undefined && iotpStatusKeys.length > 0\" class=\"container-50 paddingTop\">\n    <ul class=\"list\">\n      <li *ngFor=\"let key of iotpStatusKeys\">\n        <strong> {{cleanCamelCase(key)}}:</strong> {{iotpStatus[key] === 'green' ? '✅' : '❌'}}\n      </li>\n    </ul>\n</div>\n\n<div class=\"container-50 paddingTop\">\n    <strong *ngIf=\"iotpStatus === undefined && errorMessage === undefined\">\n        Loading...\n    </strong>\n\n    <strong *ngIf=\"iotpStatus === undefined && errorMessage !== undefined\">\n        Something went wrong!\n    </strong>\n</div>"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(357);


/***/ })

},[582]);
//# sourceMappingURL=main.bundle.js.map