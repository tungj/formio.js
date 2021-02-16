"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _TextField = _interopRequireDefault(require("../textfield/TextField"));

var _Formio = _interopRequireDefault(require("../../Formio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var AddressComponent = /*#__PURE__*/function (_TextFieldComponent) {
  _inherits(AddressComponent, _TextFieldComponent);

  var _super = _createSuper(AddressComponent);

  _createClass(AddressComponent, null, [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _TextField.default.schema.apply(_TextField.default, [{
        type: 'address',
        label: 'Address',
        key: 'address',
        map: {
          region: '',
          key: ''
        }
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Address Field',
        group: 'advanced',
        icon: 'fa fa-home',
        documentation: 'http://help.form.io/userguide/#address',
        weight: 30,
        schema: AddressComponent.schema()
      };
    }
  }]);

  function AddressComponent(component, options, data) {
    var _this;

    _classCallCheck(this, AddressComponent);

    _this = _super.call(this, component, options, data);
    var src = 'https://maps.googleapis.com/maps/api/js?v=3&libraries=places&callback=googleMapsCallback';

    if (component.map && component.map.key) {
      src += "&key=".concat(component.map.key);
    }

    if (component.map && component.map.region) {
      src += "&region=".concat(component.map.region);
    }

    _Formio.default.requireLibrary('googleMaps', 'google.maps.places', src); // Keep track of the full addresses.


    _this.addresses = [];
    return _this;
  }

  _createClass(AddressComponent, [{
    key: "setValueAt",
    value: function setValueAt(index, value, flags) {
      flags = flags || {};

      if (!flags.noDefault && (value === null || value === undefined)) {
        value = this.defaultValue;
      }

      this.addresses[index] = value;

      if (value && value.formatted_address) {
        this.inputs[index].value = value.formatted_address;
      }
    }
  }, {
    key: "getValueAt",
    value: function getValueAt(index) {
      return this.addresses[index];
    }
    /**
     * Start the autocomplete and the input listeners
     *
     * @param input
     *   The input field
     * @param autoCompleteOptions
     *   The default option for the autocompletion
     */

  }, {
    key: "autoCompleteInit",
    value: function autoCompleteInit(input, autoCompleteOptions) {
      var _this2 = this;

      // Set attribute autoComplete to off
      input.setAttribute('autocomplete', 'off'); // Init suggestions list

      this.autoCompleteSuggestions = []; // Start Google AutocompleteService

      var autoComplete = new google.maps.places.AutocompleteService(); // Create suggestions container

      var suggestionContainer = document.createElement('div');
      suggestionContainer.classList.add('pac-container', 'pac-logo');
      input.parentNode.appendChild(suggestionContainer); // Add listener on input field for input event

      this.addEventListener(input, 'input', function () {
        if (input.value) {
          var options = {
            input: input.value
          };
          autoComplete.getPlacePredictions(_lodash.default.defaultsDeep(options, autoCompleteOptions), function (suggestions, status) {
            _this2.autoCompleteDisplaySuggestions(suggestions, status, suggestionContainer, input);
          });
        } else {
          _this2.autoCompleteCleanSuggestions(suggestionContainer);

          suggestionContainer.style.display = 'none';
        }
      }); // Add listener on input field for blur event

      this.addEventListener(input, 'blur', function () {
        // Delay to allow click on suggestion list
        _lodash.default.delay(function () {
          suggestionContainer.style.display = 'none';
        }, 100);
      }); // Add listener on input field for focus event

      this.addEventListener(input, 'focus', function () {
        if (suggestionContainer.childElementCount) {
          suggestionContainer.style.display = 'block';
        }
      }); // Add listener on input field for focus event

      this.addEventListener(window, 'resize', function () {
        // Set the same width as input field
        suggestionContainer.style.width = "".concat(input.offsetWidth, "px");
      }); // Add listiner on input field for key event

      this.autoCompleteKeyboardListener(suggestionContainer, input);
    }
    /**
     * Add listiner on input field for key event
     *
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteKeyboardListener",
    value: function autoCompleteKeyboardListener(suggestionContainer, input) {
      var _this3 = this;

      this.autoCompleteKeyCodeListener = function (event) {
        if (input.value) {
          switch (event.keyCode) {
            case 38:
              // UP
              _this3.autoCompleteKeyUpInteraction(suggestionContainer, input);

              break;

            case 40:
              // DOWN
              _this3.autoCompleteKeyDownInteraction(suggestionContainer, input);

              break;

            case 9:
              // TAB
              _this3.autoCompleteKeyValidationInteraction(suggestionContainer, input);

              break;

            case 13:
              // ENTER
              _this3.autoCompleteKeyValidationInteraction(suggestionContainer, input);

              break;
          }
        }
      };

      this.addEventListener(input, 'keydown', this.autoCompleteKeyCodeListener);
    }
    /**
     * Action when key up is trigger
     *
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteKeyUpInteraction",
    value: function autoCompleteKeyUpInteraction(suggestionContainer, input) {
      var elementSelected = document.querySelector('.pac-item-selected');

      if (!elementSelected) {
        // Returns the bottom of the list.
        return this.autoCompleteListDecorator(suggestionContainer.lastChild, input);
      } else {
        // Transverse the list in reverse order.
        var previousSibling = elementSelected.previousSibling;

        if (previousSibling) {
          this.autoCompleteListDecorator(previousSibling, input);
        } else {
          // Return to input value
          elementSelected.classList.remove('pac-item-selected');
          input.value = this.autoCompleteInputValue;
        }
      }
    }
    /**
     * Action when key down is trigger
     *
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteKeyDownInteraction",
    value: function autoCompleteKeyDownInteraction(suggestionContainer, input) {
      var elementSelected = document.querySelector('.pac-item-selected');

      if (!elementSelected) {
        // Start at the top of the list.
        if (suggestionContainer.firstChild) {
          return this.autoCompleteListDecorator(suggestionContainer.firstChild, input);
        }
      } else {
        // Transverse the list from top down.
        var nextSibling = elementSelected.nextSibling;

        if (nextSibling) {
          this.autoCompleteListDecorator(nextSibling, input);
        } else {
          // Return to input value
          elementSelected.classList.remove('pac-item-selected');
          input.value = this.autoCompleteInputValue;
        }
      }
    }
    /**
     * Action when validation is trigger
     *
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteKeyValidationInteraction",
    value: function autoCompleteKeyValidationInteraction(suggestionContainer, input) {
      var elementSelected = document.querySelector('.pac-item-selected');

      if (elementSelected) {
        var _iterator = _createForOfIteratorHelper(this.autoCompleteSuggestions),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var suggestion = _step.value;
            var content = elementSelected.textContent || elementSelected.innerText;

            if (content === suggestion.description) {
              this.autoCompleteServiceListener(suggestion, suggestionContainer, input);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        elementSelected.classList.remove('pac-item-selected');
      }
    }
    /**
     * Highlight suggestion selected
     *
     * @param item
     *   Item selected in suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteListDecorator",
    value: function autoCompleteListDecorator(item, input) {
      var elementSelected = document.querySelector('.pac-item-selected');

      if (elementSelected) {
        elementSelected.classList.remove('pac-item-selected');
      }

      input.value = item.textContent;
      item.classList.add('pac-item-selected');
    }
    /**
     * Filter method to return if the suggestion should be displayed
     *
     * @param data
     *   Data to check
     * @returns {Boolean}
     */

  }, {
    key: "autoCompleteFilterSuggestion",
    value: function autoCompleteFilterSuggestion(data) {
      var result = this.evaluate(this.component.map.autoCompleteFilter, {
        show: true,
        data: data
      }, 'show');

      if (result === null) {
        return true;
      }

      return result.toString() === 'true';
    }
    /**
     * Clean suggestions list
     *
     * @param suggestionContainer
     *   Container tag
     */

  }, {
    key: "autoCompleteCleanSuggestions",
    value: function autoCompleteCleanSuggestions(suggestionContainer) {
      // Clean click listener
      var _iterator2 = _createForOfIteratorHelper(this.autoCompleteSuggestions),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var suggestion = _step2.value;
          suggestion.item.removeEventListener('click', suggestion.clickListener);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.autoCompleteSuggestions = []; // Delete current suggestion list

      while (suggestionContainer.firstChild) {
        suggestionContainer.removeChild(suggestionContainer.firstChild);
      }
    }
    /**
     * Display suggestions when API returns value
     *
     * @param suggestions
     *   Suggestions returned
     * @param status
     *   State returned
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteDisplaySuggestions",
    value: function autoCompleteDisplaySuggestions(suggestions, status, suggestionContainer, input) {
      // Set the same width as input field
      suggestionContainer.style.width = "".concat(input.offsetWidth, "px"); // Set the default input value

      this.autoCompleteInputValue = input.value;
      this.autoCompleteCleanSuggestions(suggestionContainer);

      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        suggestionContainer.style.display = 'none';
        return;
      }

      var _iterator3 = _createForOfIteratorHelper(suggestions),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var suggestion = _step3.value;

          if (this.autoCompleteFilterSuggestion(suggestion)) {
            this.autoCompleteSuggestions.push(suggestion);
            this.autoCompleteSuggestionBuilder(suggestion, suggestionContainer, input);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (!suggestionContainer.childElementCount) {
        this.autoCompleteCleanSuggestions(suggestionContainer);
        suggestionContainer.style.display = 'none';
      } else {
        suggestionContainer.style.display = 'block';
      }
    }
    /**
     * Draw a suggestion in the list
     *
     * @param suggestion
     *   Suggestion to draw
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

    /* eslint-disable max-depth, max-statements */

  }, {
    key: "autoCompleteSuggestionBuilder",
    value: function autoCompleteSuggestionBuilder(suggestion, suggestionContainer, input) {
      var _this4 = this;

      var item = document.createElement('div');
      item.classList.add('pac-item');
      var itemLogo = document.createElement('span');
      itemLogo.classList.add('pac-icon', 'pac-icon-marker');
      item.appendChild(itemLogo); // Draw Main part

      var itemMain = document.createElement('span');
      itemMain.classList.add('pac-item-query');

      if (suggestion.structured_formatting.main_text_matched_substrings) {
        var matches = suggestion.structured_formatting.main_text_matched_substrings;

        for (var k in matches) {
          var part = matches[k];

          if (k === 0 && part.offset > 0) {
            itemMain.appendChild(document.createTextNode(suggestion.structured_formatting.main_text.substring(0, part.offset)));
          }

          var itemBold = document.createElement('span');
          itemBold.classList.add('pac-matched');
          itemBold.appendChild(document.createTextNode(suggestion.structured_formatting.main_text.substring(part.offset, part.offset + part.length)));
          itemMain.appendChild(itemBold);

          if (k === matches.length - 1) {
            var content = suggestion.structured_formatting.main_text.substring(part.offset + part.length);

            if (content.length > 0) {
              itemMain.appendChild(document.createTextNode(content));
            }
          }
        }
      } else {
        itemMain.appendChild(document.createTextNode(suggestion.structured_formatting.main_text));
      }

      item.appendChild(itemMain); // Draw secondary part

      if (suggestion.structured_formatting.secondary_text) {
        var itemSecondary = document.createElement('span');

        if (suggestion.structured_formatting.secondary_text_matched_substrings) {
          var _matches = suggestion.structured_formatting.secondary_text_matched_substrings;

          for (var _k in _matches) {
            var _part = _matches[_k];

            if (_k === 0 && _part.offset > 0) {
              itemSecondary.appendChild(document.createTextNode(suggestion.structured_formatting.secondary_text.substring(0, _part.offset)));
            }

            var _itemBold = document.createElement('span');

            _itemBold.classList.add('pac-matched');

            _itemBold.appendChild(document.createTextNode(suggestion.structured_formatting.secondary_text.substring(_part.offset, _part.offset + _part.length)));

            itemSecondary.appendChild(_itemBold);

            if (_k === _matches.length - 1) {
              var _content = suggestion.structured_formatting.secondary_text.substring(_part.offset + _part.length);

              if (_content.length > 0) {
                itemSecondary.appendChild(document.createTextNode(_content));
              }
            }
          }
        } else {
          itemSecondary.appendChild(document.createTextNode(suggestion.structured_formatting.secondary_text));
        }

        item.appendChild(itemSecondary);
      }

      suggestionContainer.appendChild(item);

      var clickListener = function clickListener() {
        input.value = suggestion.description;
        _this4.autoCompleteInputValue = suggestion.description;

        _this4.autoCompleteServiceListener(suggestion, suggestionContainer, input);
      };

      suggestion.clickListener = clickListener;
      suggestion.item = item;

      if ('addEventListener' in item) {
        item.addEventListener('click', clickListener, false);
      } else if ('attachEvent' in item) {
        item.attachEvent('onclick', clickListener);
      }
    }
    /* eslint-enable max-depth, max-statements */

    /**
     * Get detailed information and set it as value
     *
     * @param suggestion
     *   Suggestion to draw
     * @param suggestionContainer
     *   Suggestions container
     * @param input
     *   Input field to listen
     */

  }, {
    key: "autoCompleteServiceListener",
    value: function autoCompleteServiceListener(suggestion, suggestionContainer, input) {
      var _this5 = this;

      var service = new google.maps.places.PlacesService(input);
      service.getDetails({
        placeId: suggestion.place_id
      }, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          _this5.setValue(place);
        }
      });
    }
  }, {
    key: "addInput",
    value: function addInput(input, container) {
      var _this6 = this;

      _get(_getPrototypeOf(AddressComponent.prototype), "addInput", this).call(this, input, container);

      _Formio.default.libraryReady('googleMaps').then(function () {
        var autoCompleteOptions = {};

        if (_this6.component.map) {
          autoCompleteOptions = _this6.component.map.autoCompleteOptions || {};

          if (autoCompleteOptions.location) {
            var _autoCompleteOptions$ = autoCompleteOptions.location,
                lat = _autoCompleteOptions$.lat,
                lng = _autoCompleteOptions$.lng;
            autoCompleteOptions.location = new google.maps.LatLng(lat, lng);
          }
        }

        if (_this6.component.map && _this6.component.map.autoCompleteFilter) {
          // Call custom autoComplete to filter suggestions
          _this6.autoCompleteInit(input, autoCompleteOptions);
        } else {
          var autocomplete = new google.maps.places.Autocomplete(input);
          autocomplete.addListener('place_changed', function () {
            return _this6.setValue(autocomplete.getPlace());
          });
        }
      });
    }
  }, {
    key: "elementInfo",
    value: function elementInfo() {
      var info = _get(_getPrototypeOf(AddressComponent.prototype), "elementInfo", this).call(this);

      info.attr.class += ' address-search';
      return info;
    }
  }, {
    key: "getView",
    value: function getView(value) {
      return _lodash.default.get(value, 'formatted_address', '');
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return AddressComponent.schema();
    }
  }]);

  return AddressComponent;
}(_TextField.default);

exports.default = AddressComponent;