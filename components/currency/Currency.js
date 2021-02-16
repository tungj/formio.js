"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vanillaTextMask = _interopRequireDefault(require("vanilla-text-mask"));

var _textMaskAddons = require("text-mask-addons");

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../../utils/utils");

var _Number = _interopRequireDefault(require("../number/Number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CurrencyComponent = /*#__PURE__*/function (_NumberComponent) {
  _inherits(CurrencyComponent, _NumberComponent);

  var _super = _createSuper(CurrencyComponent);

  _createClass(CurrencyComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Number.default.schema.apply(_Number.default, [{
        type: 'currency',
        label: 'Currency',
        key: 'currency'
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Currency',
        group: 'advanced',
        icon: 'fa fa-usd',
        documentation: 'http://help.form.io/userguide/#currency',
        weight: 70,
        schema: CurrencyComponent.schema()
      };
    }
  }]);

  function CurrencyComponent(component, options, data) {
    var _this;

    _classCallCheck(this, CurrencyComponent);

    // Currency should default to have a delimiter unless otherwise specified.
    if (component && !component.hasOwnProperty('delimiter')) {
      component.delimiter = true;
    }

    _this = _super.call(this, component, options, data);
    _this.decimalLimit = _lodash.default.get(_this.component, 'decimalLimit', 2);
    var affixes = (0, _utils.getCurrencyAffixes)({
      currency: _this.component.currency,
      decimalLimit: _this.decimalLimit,
      decimalSeparator: _this.decimalSeparator,
      lang: _this.options.language
    });
    _this.prefix = _this.options.prefix || affixes.prefix;
    _this.suffix = _this.options.suffix || affixes.suffix;
    return _this;
  }

  _createClass(CurrencyComponent, [{
    key: "parseNumber",
    value: function parseNumber(value) {
      // Strip out the prefix and suffix before parsing.
      if (this.prefix) {
        value = value.replace(this.prefix, '');
      }

      if (this.suffix) {
        value = value.replace(this.suffix, '');
      }

      return _get(_getPrototypeOf(CurrencyComponent.prototype), "parseNumber", this).call(this, value);
    }
  }, {
    key: "setInputMask",
    value: function setInputMask(input) {
      input.mask = (0, _vanillaTextMask.default)({
        inputElement: input,
        mask: (0, _textMaskAddons.createNumberMask)({
          prefix: this.prefix,
          suffix: this.suffix,
          thousandsSeparatorSymbol: _lodash.default.get(this.component, 'thousandsSeparator', this.delimiter),
          decimalSymbol: _lodash.default.get(this.component, 'decimalSymbol', this.decimalSeparator),
          decimalLimit: this.decimalLimit,
          allowNegative: _lodash.default.get(this.component, 'allowNegative', true),
          allowDecimal: _lodash.default.get(this.component, 'allowDecimal', true)
        })
      });
    }
  }, {
    key: "clearInput",
    value: function clearInput(input) {
      try {
        if (this.prefix) {
          input = input.replace(this.prefix, '');
        }

        if (this.suffix) {
          input = input.replace(this.suffix, '');
        }
      } catch (err) {// If value doesn't have a replace method, continue on as before.
      }

      return _get(_getPrototypeOf(CurrencyComponent.prototype), "clearInput", this).call(this, input);
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return CurrencyComponent.schema();
    }
  }]);

  return CurrencyComponent;
}(_Number.default);

exports.default = CurrencyComponent;