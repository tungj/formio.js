"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _Formio = _interopRequireDefault(require("../../Formio"));

var _TextArea = _interopRequireDefault(require("../textarea/TextArea"));

var _utils = require("../../utils/utils.js");

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var EDIT = Symbol('edit');
var VIEW = Symbol('view');
var CKEDITOR = 'https://cdn.ckeditor.com/ckeditor5/11.2.0/inline/ckeditor.js';

var ModalEditComponent = /*#__PURE__*/function (_TextAreaComponent) {
  _inherits(ModalEditComponent, _TextAreaComponent);

  var _super = _createSuper(ModalEditComponent);

  _createClass(ModalEditComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _TextArea.default.schema.apply(_TextArea.default, [{
        type: 'modaledit',
        label: 'Modal Edit',
        key: 'modalEdit'
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Modal Edit',
        group: 'advanced',
        icon: 'fa fa-font',
        weight: 50,
        schema: ModalEditComponent.schema()
      };
    }
  }]);

  function ModalEditComponent() {
    var _this;

    _classCallCheck(this, ModalEditComponent);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    var _withSwitch = (0, _utils.withSwitch)(VIEW, EDIT),
        _withSwitch2 = _slicedToArray(_withSwitch, 2),
        get = _withSwitch2[0],
        toggle = _withSwitch2[1];

    _this.getMode = get;

    _this.toggleMode = function () {
      toggle();

      _this.emit('modechange');
    };

    return _this;
  }

  _createClass(ModalEditComponent, [{
    key: "build",
    value: function build() {
      var _this2 = this;

      this.createElement();
      var labelAtTheBottom = this.component.labelPosition === 'bottom';

      if (!labelAtTheBottom) {
        this.createLabel(this.element);
      }

      this.editElement = this.buildEditMode({
        onCloseRequest: function onCloseRequest() {
          _this2.removeChildFrom(_this2.editElement, document.body);

          _this2.toggleMode();
        }
      });
      this.preview = this.ce('div', {
        class: 'edittable-preview'
      });
      this.element.appendChild(this.preview);
      this.updateView(this.preview);

      if (labelAtTheBottom) {
        this.createLabel(this.element);
      }

      this.restoreValue();
      this.on('modechange', this.updateView.bind(this, this.preview));
    }
  }, {
    key: "buildViewMode",
    value: function buildViewMode(_ref) {
      var _ref$content = _ref.content,
          content = _ref$content === void 0 ? '' : _ref$content,
          onClick = _ref.onEdit;
      var icon = this.ce('i', {
        class: this.iconClass('edit')
      });
      var button = this.ce('button', {
        type: 'button',
        role: 'button',
        onClick: onClick,
        class: 'btn btn-xxs btn-warning formio-modaledit-edit'
      }, icon);
      var child = this.ce('div', {
        class: 'modaledit-view-inner reset-margins'
      });
      child.innerHTML = this.interpolate(content);
      return this.ce('div', {
        class: 'formio-modaledit-view-container',
        onDblClick: onClick
      }, [button, child]);
    }
  }, {
    key: "buildEditMode",
    value: function buildEditMode(_ref2) {
      var _this3 = this;

      var onCloseRequest = _ref2.onCloseRequest,
          onCloseClick = _ref2.onCloseClick,
          onOverlayClick = _ref2.onOverlayClick;
      var overlay = this.ce('div', {
        class: 'formio-dialog-overlay'
      });
      var inner = this.ce('div', {
        class: 'reset-margins'
      });
      var close = this.ce('button', {
        type: 'button',
        class: 'btn btn-primary btn-xs formio-modaledit-close'
      }, 'Close');
      var container = this.ce('div', {
        class: 'formio-modaledit-content'
      }, [close, inner]);
      var dialog = this.ce('div', {
        class: 'formio-dialog formio-dialog-theme-default formio-modaledit-dialog'
      }, [overlay, container]);

      var _this$defaultEditorSi = _slicedToArray(this.defaultEditorSize, 2),
          dw = _this$defaultEditorSi[0],
          dh = _this$defaultEditorSi[1];

      var layout = _lodash.default.get(this.component, 'editorLayout', this.defaultLayout);

      var widthPath = _lodash.default.get(this.layoutOptions, [layout, 'width']);

      var heightPath = _lodash.default.get(this.layoutOptions, [layout, 'height']);

      var width = _lodash.default.get(this.component, widthPath, dw);

      var height = _lodash.default.get(this.component, heightPath, dh);

      this.createInput(inner);

      if (this.isPlain) {
        var textarea = container.querySelector('textarea');
        textarea.style.minHeight = "".concat(height, "px");
        textarea.style.borderRadius = 0;
        textarea.style.resize = 'vertical';
      }

      container.style.position = 'absolute';
      container.style.backgroundColor = '#fff';
      container.style.width = "".concat(width, "px");
      container.style.minHeight = "".concat(height, "px");
      this.addEventListener(overlay, 'click', function (event) {
        event.preventDefault();

        if (_lodash.default.isFunction(onOverlayClick)) {
          onOverlayClick();
        }

        if (_lodash.default.isFunction(onCloseRequest)) {
          onCloseRequest();
        }
      });
      this.addEventListener(close, 'click', function (event) {
        event.preventDefault();

        if (_lodash.default.isFunction(onCloseClick)) {
          onCloseClick();
        }

        if (_lodash.default.isFunction(onCloseRequest)) {
          onCloseRequest();
        }
      });

      dialog.updateLayout = function () {
        var rect = _this3.preview.getBoundingClientRect();

        container.style.top = "".concat(rect.top, "px");
        container.style.left = "".concat(rect.left, "px");
        container.style.width = "".concat(Math.max(width, rect.width), "px");
      };

      return dialog;
    }
  }, {
    key: "updateView",
    value: function updateView(container) {
      var mode = this.getMode();

      if (this.options.builder || mode === VIEW) {
        var view = this.buildViewMode({
          onEdit: this.toggleMode,
          content: _lodash.default.isString(this.dataValue) ? this.dataValue : ''
        });

        if (container.firstChild) {
          container.replaceChild(view, container.firstChild);
        } else {
          container.appendChild(view);
        }
      }

      if (mode === EDIT) {
        this.editElement.updateLayout();
        document.body.appendChild(this.editElement);
      }
    } // get defaultValue() {
    //   const value = super.defaultValue;
    //   return '';
    // }

  }, {
    key: "addCKE",
    value: function addCKE(element, settings, onChange) {
      settings = _lodash.default.isEmpty(settings) ? null : settings;
      return _Formio.default.requireLibrary('ckeditor', 'InlineEditor', CKEDITOR, true).then(function () {
        if (!element.parentNode) {
          return _nativePromiseOnly.default.reject();
        }

        return InlineEditor.create(element, settings).then(function (editor) {
          editor.model.document.on('change', function () {
            return onChange(editor.data.get());
          });
          return editor;
        });
      });
    }
  }, {
    key: "defaultEditorSize",
    get: function get() {
      return [300, 200];
    }
  }, {
    key: "defaultLayout",
    get: function get() {
      return 'grow';
    }
  }, {
    key: "layoutOptions",
    get: function get() {
      return {
        grow: {
          width: 'minEditorWidth',
          height: 'minEditorHeight'
        },
        fixed: {
          width: 'width',
          height: 'height'
        }
      };
    }
  }]);

  return ModalEditComponent;
}(_TextArea.default);

exports.default = ModalEditComponent;