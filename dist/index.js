"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var tabPrices = [{
  price1: "3,00",
  price2: "5,76",
  price3: "7,20"
}, {
  price1: "3,00",
  price2: "6,32",
  price3: "7,90"
}, {
  price1: "13,00",
  price2: "14,90",
  price3: "14,90"
}];

/**
 *
 *
 * @class controlSelect
 */
var _items = /*#__PURE__*/new WeakMap();
var _lesOptions = /*#__PURE__*/new WeakMap();
var _initAttribut = /*#__PURE__*/new WeakSet();
var _initPrice = /*#__PURE__*/new WeakSet();
var _updateTarifs = /*#__PURE__*/new WeakSet();
var _ifselectOption = /*#__PURE__*/new WeakSet();
var controlSelect = /*#__PURE__*/function () {
  /**
   * 
   * @param {Array<HTMLSelectElement>} lesSelects 
   */
  function controlSelect(lesSelects) {
    _classCallCheck(this, controlSelect);
    _classPrivateMethodInitSpec(this, _ifselectOption);
    _classPrivateMethodInitSpec(this, _updateTarifs);
    /**
     * 
     * @param {HTMLELEMENT} item 
     */
    _classPrivateMethodInitSpec(this, _initPrice);
    /**
     * 
     * @param {Array<HTMLOptionElement>} lesElts 
     */
    _classPrivateMethodInitSpec(this, _initAttribut);
    /**
    * @type {Object<HTMLSelectElement>}
    */
    _classPrivateFieldInitSpec(this, _items, {
      writable: true,
      value: void 0
    });
    /**
    * @type {Array<HTMLElement>}
    */
    _classPrivateFieldInitSpec(this, _lesOptions, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _items, lesSelects);
  }
  _createClass(controlSelect, [{
    key: "selectChange",
    value: function selectChange() {
      var _this = this;
      _classPrivateFieldGet(this, _items).forEach(function (item, i) {
        if (i === 0) {
          item.dataset.offres = "cb-visa-evolution";
        } else if (i === 1) {
          item.dataset.offres = "cb-visa-classic";
        } else {
          item.dataset.offres = "cb-visa-premier";
        }
        item.addEventListener('change', function (e) {
          return _classPrivateMethodGet(_this, _initPrice, _initPrice2).call(_this, item);
        });

        /**
         * @type {Array<HTMLElement>}
         */
        _classPrivateFieldSet(_this, _lesOptions, Array.from(item.querySelectorAll('option')));
        _classPrivateMethodGet(_this, _initAttribut, _initAttribut2).call(_this, _classPrivateFieldGet(_this, _lesOptions));
      });

      /** @type {object} selectOption */
      var selectOption = localStorage.getItem('selectOption', selectOption);
      if (selectOption) {
        _classPrivateMethodGet(this, _ifselectOption, _ifselectOption2).call(this, selectOption);
      } else {
        _classPrivateMethodGet(this, _ifselectOption, _ifselectOption2).call(this, undefined);
      }
    } // #foundEltPrice(elt) {
    //   var priceSelectDefault = elt.options[elt.selectedIndex].dataset.price;
    //   var eltPrice = elt.parentElement.nextElementSibling;
    //   var price = eltPrice.firstElementChild;
    //   price.innerHTML = priceSelectDefault
    // }
  }]);
  return controlSelect;
}();
function _initAttribut2(lesElts) {
  if (lesElts) {
    lesElts.forEach(function (elt, i) {
      if (i === 0) {
        elt.dataset.price = tabPrices[i]["price1"];
        elt.dataset.age = "18-24";
      } else if (i === 1) {
        elt.dataset.price = tabPrices[i]["price2"];
        elt.dataset.age = "25-29";
      } else {
        elt.dataset.price = tabPrices[i]["price3"];
        elt.dataset.age = "30-et-plus";
      }
    });
  }
}
function _initPrice2(item) {
  /**
  * @type {string} selectValue
  */
  var selectValue = item.options[item.selectedIndex].value;
  /**
   * @type {HTMLELEMENT} target
   */
  var target = item;
  localStorage.setItem('selectOption', selectValue);
  if (selectValue === 'option1') {
    _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['2,00', '3,00', '13,00']);
  } else if (selectValue === 'option2') {
    _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['5,76', '6,32', '14,90']);
  } else {
    _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['7,20', '7,90', '14,90']);
  }
  var others = _classPrivateFieldGet(this, _items).filter(function (item) {
    return item !== target;
  });
  for (var key in others) {
    others[key].value = target.value;
  }
}
function _updateTarifs2(tabTarifs) {
  for (var index = 0; index < _classPrivateFieldGet(this, _items).length; index++) {
    /** @type {HTMLELEMENT} element */
    var element = _classPrivateFieldGet(this, _items)[index];
    var eltPrice = element.parentElement.nextElementSibling;
    var price = eltPrice.firstElementChild;
    price.textContent = tabTarifs[index] + ' €';
  }
}
function _ifselectOption2(value) {
  for (var key in _classPrivateFieldGet(this, _items)) {
    if (value) {
      _classPrivateFieldGet(this, _items)[key].value = value;
      if (value === 'option1') {
        _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['3,00', '3,00', '13,00']);
      } else if (value === 'option2') {
        _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['5,76', '6,32', '14,90']);
      } else {
        _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['7,20', '7,90', '14,90']);
      }
    } else {
      _classPrivateFieldGet(this, _items)[key].value = 'option1';
      _classPrivateMethodGet(this, _updateTarifs, _updateTarifs2).call(this, ['3,00', '3,00', '13,00']);
    }
  }
}
addEventListener('load', function () {
  /** @type {Array<HTMLSelectElement>} items */
  var items = Array.from(document.querySelectorAll('select[data-select]'));
  new controlSelect(items).selectChange();
});
