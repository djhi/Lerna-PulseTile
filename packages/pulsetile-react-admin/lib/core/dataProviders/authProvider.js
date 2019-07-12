"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var react_admin_1 = require("react-admin");
var token_1 = require("../token");
var OLD_PATIENT_DELAY = 1000;
var NEW_PATIENT_DELAY = 5000;
var url = token_1.domainName + '/api/initialise';
var options = {};
if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
}
options.headers = {
    'X-Requested-With': "XMLHttpRequest",
};
var FetchLogin = function (resolve, reject) {
    fetch(url, options)
        .then(function (res) { return res.json(); })
        .then(function (response) {
        if (get_1.default(response, 'status', null) !== 'loading_data') {
            var decodeToken = jsonwebtoken_1.default.decode(token_1.token);
            var userName = get_1.default(decodeToken, 'openid.firstName', null) + ' ' + get_1.default(decodeToken, 'openid.lastName', null);
            var role = ('phrUser' === get_1.default(decodeToken, 'openid.role', null)) ? 'PHR' : 'IDCR';
            var nhsNumber = decodeToken.nhsNumber;
            localStorage.setItem('userId', nhsNumber);
            localStorage.setItem('username', userName);
            localStorage.setItem('role', role);
            if (role === 'PHR') {
                localStorage.setItem('patientId', nhsNumber);
            }
            return resolve(true);
        }
        var isNewPatient = get_1.default(response, 'new_patient', false);
        var delay = isNewPatient ? NEW_PATIENT_DELAY : OLD_PATIENT_DELAY;
        setTimeout(function () { return FetchLogin(resolve, reject); }, delay);
    });
};
exports.default = (function (type, params) { return __awaiter(_this, void 0, void 0, function () {
    var urlLogout;
    return __generator(this, function (_a) {
        if (type === react_admin_1.AUTH_LOGOUT) {
            if (localStorage.getItem('userId') && token_1.token) {
                urlLogout = token_1.domainName + '/api/logout';
                fetch(urlLogout, options)
                    .then(function (res) { return res.json(); })
                    .then(function (response) {
                    document.cookie = 'JSESSIONID=;';
                    localStorage.removeItem('userId');
                    localStorage.removeItem('patientId');
                    localStorage.removeItem('username');
                    localStorage.removeItem('role');
                    window.location = get_1.default(response, 'redirectURL', '');
                });
            }
            return [2 /*return*/, Promise.resolve()];
        }
        if (type === react_admin_1.AUTH_ERROR) {
            return [2 /*return*/, Promise.resolve()];
        }
        if (type === react_admin_1.AUTH_CHECK) {
            if (localStorage.getItem('userId') && token_1.token) {
                return [2 /*return*/, Promise.resolve()];
            }
            else if (token_1.token) {
                new Promise(FetchLogin).then(function (res) {
                    window.location.href = '/';
                });
            }
            return [2 /*return*/, Promise.reject()];
        }
        return [2 /*return*/, Promise.reject("Wrong login or password")];
    });
}); });
