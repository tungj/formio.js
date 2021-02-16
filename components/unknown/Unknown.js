"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.get-prototype-of");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Base = _interopRequireDefault(require("../base/Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UnknownComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(UnknownComponent, _BaseComponent);

  var _super = _createSuper(UnknownComponent);

  function UnknownComponent() {
    _classCallCheck(this, UnknownComponent);

    return _super.apply(this, arguments);
  }

  _createClass(UnknownComponent, [{
    key: "build",
    value: function build() {
      this.createElement();

      if (this.options.builder) {
        var builderElement = this.ce('div', {
          class: 'panel panel-default'
        }, [this.ce('div', {
          class: 'panel-body text-muted text-center'
        }, [document.createTextNode("".concat(this.t('Custom Component'), " (").concat(this.t(this.component.type), ")"))])]);
        this.append(builderElement);
      } else {
        this.element.appendChild(this.text("Unknown component: ".concat(this.component.type)));
      }

      return this.element;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return UnknownComponent.schema();
    }
  }], [{
    key: "schema",
    value: function schema() {
      return {
        type: 'custom',
        key: 'custom',
        protected: false,
        persistent: true
      };
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Custom',
        icon: 'fa fa-cubes',
        group: 'advanced',
        documentation: 'https://help.form.io/userguide/form-components/#custom',
        weight: 120,
        schema: UnknownComponent.schema()
      };
    }
  }]);

  return UnknownComponent;
}(_Base.default);

exports.default = UnknownComponent;