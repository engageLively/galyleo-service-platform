System.register(['./__rootModule___commonjs-entry-2a340242.js', './inputs-b8bdf948.js'], (function (exports, module) {
  'use strict';
  var Morph, morph, touchInputDevice, ViewModel, Rectangle, LinearGradient, Color, pt, signal, connect, obj, Closure, initializeClass, _toConsumableArray, _slicedToArray, _asyncToGenerator, TilingLayout, ShadowObject, Label, component, rect, Icon, part, arr, Path, string, noUpdate, once, _defineProperty, num, SystemTooltip, HTMLMorph, without, add, easings, stringToEasing, promise, InputLine;
  return {
    setters: [function (module) {
      Morph = module.M;
      morph = module.a1;
      touchInputDevice = module.a0;
      ViewModel = module.V;
      Rectangle = module.R;
      LinearGradient = module.a7;
      Color = module.C;
      pt = module.b;
      signal = module.s;
      connect = module.a;
      obj = module.y;
      Closure = module.aE;
      initializeClass = module.i;
      _toConsumableArray = module.w;
      _slicedToArray = module.t;
      _asyncToGenerator = module._;
      TilingLayout = module.T;
      ShadowObject = module.a5;
      Label = module.L;
      component = module.c;
      rect = module.a8;
      Icon = module.j;
      part = module.p;
      arr = module.q;
      Path = module.aR;
      string = module.u;
      noUpdate = module.aI;
      once = module.ao;
      _defineProperty = module.X;
      num = module.aq;
      SystemTooltip = module.aG;
      HTMLMorph = module.a3;
      without = module.ac;
      add = module.ad;
      easings = module.$;
      stringToEasing = module.a$;
      promise = module.a9;
    }, function (module) {
      InputLine = module.I;
    }],
    execute: (function () {

      var __varRecorder__$7 = lively.FreezerRuntime.recorderFor("lively.components/buttons.js");
      __varRecorder__$7.Morph = Morph;
      __varRecorder__$7.morph = morph;
      __varRecorder__$7.touchInputDevice = touchInputDevice;
      __varRecorder__$7.ViewModel = ViewModel;
      __varRecorder__$7.Rectangle = Rectangle;
      __varRecorder__$7.LinearGradient = LinearGradient;
      __varRecorder__$7.Color = Color;
      __varRecorder__$7.pt = pt;
      __varRecorder__$7.signal = signal;
      __varRecorder__$7.connect = connect;
      __varRecorder__$7.obj = obj;
      __varRecorder__$7.Closure = Closure;
      var ButtonModel = exports('Q', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/buttons.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ButtonModel") && typeof __lively_classholder__.ButtonModel === "function" ? __lively_classholder__.ButtonModel : __lively_classholder__.ButtonModel = function ButtonModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "handlePressStart",
          value: function ButtonModel_handlePressStart_(evt) {
            if (!evt.isAltDown() && !this.deactivated && this.considerPress(evt)) {
              this.pressed = {
                originalFill: this.view.fill
              };
            }
          }
        }, {
          key: "handlePressEnd",
          value: function ButtonModel_handlePressEnd_(evt) {
            if (evt.isClickTarget(this.view) && this.pressed) {
              this.trigger();
              this.pressed = null;
            }
          }
        }, {
          key: "cancelPressOnDrag",
          value: function ButtonModel_cancelPressOnDrag_($onViewDragStart, evt) {
            if (__varRecorder__$7.touchInputDevice) {
              this.draggable = true;
              this.pressed = null;
            } else {
              $onViewDragStart(evt);
            }
          }
        }, {
          key: "preventDrag",
          value: function ButtonModel_preventDrag_($onViewDrag, evt) {}
        }, {
          key: "cancelPress",
          value: function ButtonModel_cancelPress_(evt) {
            if (__varRecorder__$7.touchInputDevice) return;
            if (this.pressed && evt.isClickTarget(this.view)) this.pressed = null;
          }
        }, {
          key: "recoverPressIfNeeded",
          value: function ButtonModel_recoverPressIfNeeded_(evt) {
            if (__varRecorder__$7.touchInputDevice) return;

            if (!this.deactivated && evt.isClickTarget(this.view)) {
              this.pressed = {
                originalFill: this.fill
              };
            }
          }
        }, {
          key: "enable",
          value: function ButtonModel_enable_() {
            this.deactivated = false;
          }
        }, {
          key: "disable",
          value: function ButtonModel_disable_() {
            this.deactivated = true;
          }
        }, {
          key: "onRefresh",
          value: function ButtonModel_onRefresh_() {
            if (!this.ui.label) return;
            Object.assign(this.ui.label, this.label);
            this.view.nativeCursor = this.deactivated ? "not-allowed" : "pointer";
            this.ui.label.opacity = this.deactivated ? 0.3 : 1;
            if (this._realFill) this.view.fill = this._realFill;
          }
        }, {
          key: "trigger",
          value: function ButtonModel_trigger_() {
            try {
              __varRecorder__$7.signal(this.view, "fire");

              __varRecorder__$7.signal(this, "fire");

              typeof this.action === "function" && this.action();
            } catch (err) {
              var w = this.world();
              if (w) w.logError(err);else console.error(err);
            }
          }
        }, {
          key: "considerPress",
          value: function ButtonModel_considerPress_(evt) {
            this.view.updateTransform();
            if (__varRecorder__$7.touchInputDevice) return true;else return this.view.innerBoundsContainsPoint(evt.positionIn(this.view));
          }
        }, {
          key: "menuItems",
          value: function ButtonModel_menuItems_(items) {
            return items;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ButtonModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              deactivated: {
                group: "button",
                defaultValue: false
              },
              pressed: {
                group: "_internal",
                defaultValue: null
              },
              label: {
                group: "button",
                type: "RichText",
                set: function set(labelMorphProperties) {
                  var prevLabel = this.label || {};
                  this.setProperty("label", Object.assign({}, prevLabel, {}, labelMorphProperties));
                }
              },
              fire: {
                group: "button",
                derived: true,
                readOnly: true,
                isSignal: true
              },
              action: {
                serialize: false
              },
              expose: {
                get: function get() {
                  return ["enable", "disable"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "handlePressStart"
                  }, {
                    signal: "onMouseUp",
                    handler: "handlePressEnd"
                  }, {
                    signal: "onHoverOut",
                    handler: "cancelPress"
                  }, {
                    signal: "onHoverIn",
                    handler: "recoverPressIfNeeded"
                  }, {
                    signal: "onDragStart",
                    handler: "cancelPressOnDrag",
                    override: true
                  }, {
                    signal: "onDrag",
                    handler: "preventDrag",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 321,
          end: 4065
        });
      }(__varRecorder__$7.ViewModel));
      __varRecorder__$7.ButtonModel = ButtonModel;
      __varRecorder__$7.ButtonModel = ButtonModel;
      var Button = exports('t', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/buttons.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Button") && typeof __lively_classholder__.Button === "function" ? __lively_classholder__.Button : __lively_classholder__.Button = function Button(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "__additionally_serialize__",
          value: function Button___additionally_serialize___(snapshot, objRef, pool, addFn) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "__additionally_serialize__", this).call(this, snapshot, objRef, pool, addFn);

            addFn("fontSize", this.fontSize);

            if (this.label !== this.labelMorph.value) {
              addFn("label", this.labelMorph.value);
            }
          }
        }, {
          key: "isButton",
          get: function get() {
            return true;
          }
        }, {
          key: "enable",
          value: function Button_enable_() {
            this.deactivated = false;
          }
        }, {
          key: "disable",
          value: function Button_disable_() {
            this.deactivated = true;
          }
        }, {
          key: "onChange",
          value: function Button_onChange_(change) {
            var prop = change.prop;

            if (this.label) {
              switch (prop) {
                case "extent":
                case "fontSize":
                case "fontFamily":
                  this.relayout();
                  break;

                case "padding":
                  this.fit();
              }
            }

            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);
          }
        }, {
          key: "onSubmorphChange",
          value: function Button_onSubmorphChange_(change, submorph) {
            if (submorph === this.labelMorph && change.prop === "extent") this.relayout();
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onSubmorphChange", this).call(this, change, submorph);
          }
        }, {
          key: "relayout",
          value: function Button_relayout_() {
            var label = this.labelMorph;
            if (!label || this._relayouting) return;
            this._relayouting = true;

            try {
              var padding = this.padding;
              var padT = padding.top();
              var padB = padding.bottom();
              var padL = padding.left();
              var padR = padding.right();
              var minHeight = label.height + padT + padB;
              var minWidth = label.width + padL + padR;
              if (minHeight > this.height) this.height = minHeight;
              if (minWidth > this.width) this.width = minWidth;
              var innerPadding = this.innerBounds().insetByRect(padding);
              label.center = innerPadding.center().subPt(this.origin);
            } finally {
              this._relayouting = false;
            }
          }
        }, {
          key: "fit",
          value: function Button_fit_() {
            var padding = this.padding;
            var label = this.labelMorph;
            label.fit();
            this.extent = padding.bottomLeft().addPt(padding.bottomRight()).addPt(label.extent);
            this.relayout();
            return this;
          }
        }, {
          key: "trigger",
          value: function Button_trigger_() {
            try {
              __varRecorder__$7.signal(this, "fire");

              typeof this.action === "function" && this.action();
            } catch (err) {
              var w = this.world();
              if (w) w.logError(err);else console.error(err);
            }
          }
        }, {
          key: "considerPress",
          value: function Button_considerPress_(evt) {
            if (__varRecorder__$7.touchInputDevice) return true;else return this.innerBoundsContainsPoint(evt.positionIn(this));
          }
        }, {
          key: "onMouseDown",
          value: function Button_onMouseDown_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseDown", this).call(this, evt);

            if (!evt.isAltDown() && !this.deactivated && this.considerPress(evt)) {
              this.pressed = {
                originalFill: this.fill
              };
            }
          }
        }, {
          key: "onMouseUp",
          value: function Button_onMouseUp_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseUp", this).call(this, evt);

            if (evt.isClickTarget(this) && this.pressed) {
              this.trigger();
              this.pressed = null;
            }
          }
        }, {
          key: "onDragStart",
          value: function Button_onDragStart_(evt) {
            if (__varRecorder__$7.touchInputDevice) {
              this.draggable = true;
              this.pressed = null;
            } else {
              initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDragStart", this).call(this, evt);
            }
          }
        }, {
          key: "onDrag",
          value: function Button_onDrag_(evt) {}
        }, {
          key: "onHoverOut",
          value: function Button_onHoverOut_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onHoverOut", this).call(this, evt);

            if (__varRecorder__$7.touchInputDevice) return;
            if (this.pressed && evt.isClickTarget(this)) this.pressed = null;
          }
        }, {
          key: "onHoverIn",
          value: function Button_onHoverIn_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onHoverIn", this).call(this, evt);

            if (__varRecorder__$7.touchInputDevice) return;

            if (!this.deactivated && evt.isClickTarget(this)) {
              this.pressed = {
                originalFill: this.fill
              };
            }
          }
        }, {
          key: "menuItems",
          value: function Button_menuItems_() {
            var items = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "menuItems", this).call(this);

            return items;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Button";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              padding: {
                isStyleProp: true,
                defaultValue: __varRecorder__$7.Rectangle.inset(5, 2)
              },
              draggable: {
                defaultValue: false
              },
              deactivated: {
                group: "button",
                defaultValue: false,
                after: ["labelMorph"],
                set: function set(val) {
                  this.setProperty("deactivated", val);
                  this.nativeCursor = val ? "not-allowed" : "pointer";
                  this.labelMorph.opacity = val ? 0.3 : 1;
                }
              },
              pressed: {
                group: "_internal",
                defaultValue: null
              },
              fontSize: {
                group: "button styling",
                derived: true,
                type: "Number",
                min: 4,
                isStyleProp: true,
                after: ["label"],
                set: function set(s) {
                  this.labelMorph.fontSize = s;
                },
                get: function get() {
                  return this.labelMorph.fontSize;
                }
              },
              fontColor: {
                group: "button styling",
                derived: true,
                isStyleProp: true,
                after: ["labelMorph"],
                set: function set(c) {
                  this.labelMorph.fontColor = c;
                },
                get: function get() {
                  return this.labelMorph.fontColor;
                }
              },
              labelMorph: {
                group: "_internal",
                after: ["submorphs"],
                serialize: false,
                initialize: function initialize() {
                  this.labelMorph = this.getSubmorphNamed("label") || this.addMorph({
                    type: "label",
                    name: "label",
                    value: "no label yet"
                  });
                },
                get: function get() {
                  return this.getSubmorphNamed("label");
                },
                set: function set(labelMorph) {
                  var existing = this.labelMorph;
                  if (existing) existing.remove();
                  labelMorph.name = "label";
                  labelMorph.reactsToPointer = false;
                  this.addMorphAt(labelMorph, 0);
                }
              },
              labelWithTextAttributes: {
                group: "_internal",
                after: ["labelMorph"],
                derived: true,
                get: function get() {
                  return this.labelMorph.textAndAttributes;
                },
                set: function set(val) {
                  this.labelMorph.textAndAttributes = val;
                }
              },
              label: {
                group: "button",
                after: ["labelMorph"],
                type: "RichText",
                set: function set(stringOrAttributesOrMorph) {
                  if (stringOrAttributesOrMorph.isMorph) {
                    this.setProperty("label", stringOrAttributesOrMorph.value);
                    this.labelMorph = stringOrAttributesOrMorph;
                  } else {
                    this.setProperty("label", stringOrAttributesOrMorph);
                    this.labelMorph.value = stringOrAttributesOrMorph;

                    if (this.labelMorph._parametrizedProps) {
                      this.labelMorph._parametrizedProps.value = stringOrAttributesOrMorph;
                    }
                  }
                }
              },
              fire: {
                group: "button",
                derived: true,
                readOnly: true,
                isSignal: true
              },
              action: {
                serialize: false
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 4106,
          end: 10755
        });
      }(__varRecorder__$7.Morph));
      __varRecorder__$7.Button = Button;
      __varRecorder__$7.Button = Button;
      var RadioButton = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/buttons.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("RadioButton") && typeof __lively_classholder__.RadioButton === "function" ? __lively_classholder__.RadioButton : __lively_classholder__.RadioButton = function RadioButton(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "getMaster",
          value: function () {
            var _RadioButton_getMaster_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(selected) {
              var _yield$import, ChoiceButtonSelected, ChoiceButtonUnselected;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return module.import('./index-57981d2f.js').then(function (n) { return n.p; });

                    case 2:
                      _yield$import = _context.sent;
                      ChoiceButtonSelected = _yield$import.ChoiceButtonSelected;
                      ChoiceButtonUnselected = _yield$import.ChoiceButtonUnselected;
                      return _context.abrupt("return", selected ? ChoiceButtonSelected : ChoiceButtonUnselected);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function RadioButton_getMaster_(_x) {
              return _RadioButton_getMaster_.apply(this, arguments);
            }

            return RadioButton_getMaster_;
          }()
        }, {
          key: "reset",
          value: function RadioButton_reset_() {
            var indicator = this.indicator;
            indicator.borderWidth = 1;
            indicator.borderColor = __varRecorder__$7.Color.gray;
            this.selected = false;

            __varRecorder__$7.connect(indicator, "onMouseUp", this, "select");
          }
        }, {
          key: "morph",
          get: function get() {
            var indicator = this.indicator;
            return this.submorphs.find(function (m) {
              return m !== indicator;
            });
          }
        }, {
          key: "morph",
          set: function set(morph) {
            var indicator = this.indicator;
            this.submorphs.forEach(function (m) {
              if (m === indicator) return;
              m.remove();
            });
            morph.position = __varRecorder__$7.pt(50, 0);
            this.addMorph(morph);
          }
        }, {
          key: "value",
          get: function get() {
            if (!this.valueFn) {
              var fnCode;

              try {
                fnCode = JSON.parse(this.valueFunctionString);
              } catch (e) {
                fnCode = this.valueFunctionString;
              }

              this.valueFn = __varRecorder__$7.Closure.fromSource(fnCode).recreateFunc();
            }

            return this.morph ? this.valueFn(this.morph) : undefined;
          }
        }, {
          key: "onMouseDown",
          value: function RadioButton_onMouseDown_(evt) {
            this.select();
          }
        }, {
          key: "select",
          value: function RadioButton_select_() {
            this.selected = true;
            this.owner.setSelection(this);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "RadioButton";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              indicator: {
                get: function get() {
                  return this.getSubmorphNamed("indicator");
                }
              },
              selectionColor: {},
              selectionStyle: {},
              selected: {
                after: ["indicator"],
                defaultValue: false,
                set: function set(bool) {
                  var _this = this;

                  this.getMaster(bool).then( /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(auto) {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _this.master = {
                                auto: auto
                              };

                            case 1:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x2) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                  this.setProperty("selected", !!bool);
                }
              },
              valueFunctionString: {
                defaultValue: "\"function (morph) { return morph.value; }\"",
                set: function set(funcOrString) {
                  this.setProperty("valueFunctionString", funcOrString.toString());
                  this.valueFn = undefined;
                }
              },
              submorphs: {
                initialize: function initialize() {
                  this.submorphs = [{
                    type: "ellipse",
                    name: "indicator"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 10763,
          end: 12954
        });
      }(__varRecorder__$7.Morph);
      __varRecorder__$7.RadioButton = RadioButton;
      __varRecorder__$7.RadioButton = RadioButton;
      var RadioButtonGroup = exports('p', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/buttons.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("RadioButtonGroup") && typeof __lively_classholder__.RadioButtonGroup === "function" ? __lively_classholder__.RadioButtonGroup : __lively_classholder__.RadioButtonGroup = function RadioButtonGroup(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "reset",
          value: function RadioButtonGroup_reset_() {
            this.submorphs.forEach(function (m) {
              return m.reset();
            });
            this.layout.layoutableSubmorphs[0].selected = true;
          }
        }, {
          key: "removeAllButtons",
          value: function RadioButtonGroup_removeAllButtons_() {
            this.removeAllMorphs();
            this.height = 10;
          }
        }, {
          key: "addButton",
          value: function RadioButtonGroup_addButton_(morph, optValue) {
            var button = new __varRecorder__$7.RadioButton({
              name: "button " + (this.submorphs.length + 1)
            });
            button.reset();
            button.morph = morph;

            if (optValue !== undefined) {
              button.internalValue = optValue;
              button.valueFunctionString = "function (morph) { return morph.owner.internalValue; }";
            }

            this.addMorph(button);
            return button;
          }
        }, {
          key: "setSelection",
          value: function RadioButtonGroup_setSelection_(activeButton) {
            this.submorphs.forEach(function (m) {
              if (m !== activeButton) {
                m.selected = false;
              }
            });
            activeButton.selected = true;
          }
        }, {
          key: "selectedButton",
          get: function get() {
            return this.submorphs.find(function (m) {
              return m.selected;
            });
          }
        }, {
          key: "value",
          get: function get() {
            var selection = this.selectedButton;
            return selection ? selection.value : null;
          }
        }, {
          key: "value",
          set: function set(value) {
            var buttonToSelect = this.submorphs.find(function (m) {
              try {
                return m.value === value;
              } catch (e) {
                return false;
              }
            });

            if (buttonToSelect) {
              buttonToSelect.select();
            } else {
              this.setSelection(null);
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "RadioButtonGroup";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              choices: {
                derived: true,
                defaultValue: [],
                get: function get() {
                  return this.submorphs.map(function (m) {
                    return m.value;
                  });
                },
                set: function set(labels) {
                  var _this2 = this;

                  this.removeAllButtons();

                  if (__varRecorder__$7.obj.isArray(labels)) {
                    if (labels.length === 0) return;
                    labels.forEach(function (value) {
                      _this2.addButton(__varRecorder__$7.morph({
                        name: "label",
                        type: "label",
                        value: value,
                        reactsToPointer: false
                      }));
                    });
                  } else {
                    labels = _toConsumableArray(labels.entries());
                    if (labels.length === 0) return;
                    labels.forEach(function (_ref2) {
                      var _ref3 = _slicedToArray(_ref2, 2),
                          label = _ref3[0],
                          value = _ref3[1];

                      _this2.addButton(__varRecorder__$7.morph({
                        name: "label",
                        type: "label",
                        value: label,
                        reactsToPointer: false
                      }), value);
                    });
                  }

                  this.setSelection(this.submorphs[0]);
                },
                value: {
                  derived: true,
                  after: ["submorphs"],
                  get: function get() {
                    var selection = this.selectedButton;
                    return selection ? selection.value : null;
                  },
                  set: function set(value) {
                    var buttonToSelect = this.submorphs.find(function (m) {
                      try {
                        return m.value === value;
                      } catch (e) {
                        return false;
                      }
                    });

                    if (buttonToSelect) {
                      buttonToSelect.select();
                    } else {
                      this.setSelection(null);
                    }
                  }
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./buttons.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 12962,
          end: 15963
        });
      }(__varRecorder__$7.Morph));
      __varRecorder__$7.RadioButtonGroup = RadioButtonGroup;
      __varRecorder__$7.RadioButtonGroup = RadioButtonGroup;

      var __captured2__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ButtonModel: ButtonModel,
        Button: Button,
        RadioButton: RadioButton,
        RadioButtonGroup: RadioButtonGroup
      });
      exports('r', __captured2__);

      var __varRecorder__$6 = lively.FreezerRuntime.recorderFor("lively.components/buttons.cp.js");
      __varRecorder__$6.TilingLayout = TilingLayout;
      __varRecorder__$6.ShadowObject = ShadowObject;
      __varRecorder__$6.Label = Label;
      __varRecorder__$6.component = component;
      __varRecorder__$6.Color = Color;
      __varRecorder__$6.LinearGradient = LinearGradient;
      __varRecorder__$6.pt = pt;
      __varRecorder__$6.ButtonModel = ButtonModel;
      __varRecorder__$6.rect = rect;
      __varRecorder__$6.ButtonDefault = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component({
          defaultViewModel: __varRecorder__$6.ButtonModel,
          name: "button/default",
          borderColor: __varRecorder__$6.Color.rgb(112, 123, 124),
          nativeCursor: "pointer",
          borderWidth: 1,
          borderRadius: 5,
          extent: __varRecorder__$6.pt(70, 25),
          fill: new __varRecorder__$6.LinearGradient({
            stops: [{
              offset: 0,
              color: __varRecorder__$6.Color.white
            }, {
              offset: 1,
              color: __varRecorder__$6.Color.rgb(236, 240, 241)
            }],
            vector: 0
          }),
          layout: new __varRecorder__$6.TilingLayout({
            align: "center",
            axisAlign: "center",
            orderByIndex: true
          }),
          submorphs: [{
            type: __varRecorder__$6.Label,
            name: "label",
            extent: __varRecorder__$6.pt(53, 18),
            fontColor: __varRecorder__$6.Color.rgb(60, 60, 60),
            fontSize: 14,
            reactsToPointer: false,
            textAndAttributes: ["a button", null]
          }]
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonDefault",
        range: {
          start: 245,
          end: 1309
        }
      }, __varRecorder__$6.ButtonDefault);
      __varRecorder__$6.ButtonClicked = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component(__varRecorder__$6.ButtonDefault, {
          name: "button/clicked",
          borderWidth: 0,
          dropShadow: new __varRecorder__$6.ShadowObject({
            distance: 0,
            rotation: 0,
            color: __varRecorder__$6.Color.rgba(0, 0, 0, 0.39071265243902487),
            inset: true,
            blur: 4,
            spread: 1
          }),
          fill: new __varRecorder__$6.LinearGradient({
            stops: [{
              offset: 0,
              color: __varRecorder__$6.Color.rgb(199, 199, 199)
            }, {
              offset: 1,
              color: __varRecorder__$6.Color.rgb(152, 152, 152)
            }],
            vector: __varRecorder__$6.rect(0, 0, 0, 1)
          })
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonClicked",
        range: {
          start: 1317,
          end: 1780
        }
      }, __varRecorder__$6.ButtonClicked);
      __varRecorder__$6.SystemButton = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component(__varRecorder__$6.ButtonDefault, {
          name: "system button",
          master: {
            auto: __varRecorder__$6.ButtonDefault,
            click: __varRecorder__$6.ButtonClicked
          }
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "SystemButton",
        range: {
          start: 1788,
          end: 1923
        }
      }, __varRecorder__$6.SystemButton);
      __varRecorder__$6.ButtonDarkDefault = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component(__varRecorder__$6.ButtonDefault, {
          name: "button/dark/default",
          fill: new __varRecorder__$6.LinearGradient({
            stops: [{
              offset: 0,
              color: __varRecorder__$6.Color.rgb(149, 165, 166)
            }, {
              offset: 1,
              color: __varRecorder__$6.Color.rgb(127, 140, 141)
            }],
            vector: __varRecorder__$6.rect(0, 0, 0, 1)
          }),
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__$6.Color.rgb(255, 255, 255),
            fontSize: 14,
            reactsToPointer: false,
            textAndAttributes: ["a button", null]
          }]
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonDarkDefault",
        range: {
          start: 1931,
          end: 2385
        }
      }, __varRecorder__$6.ButtonDarkDefault);
      __varRecorder__$6.ButtonDarkClicked = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component(__varRecorder__$6.ButtonDarkDefault, {
          name: "button/dark/clicked",
          borderWidth: 0,
          dropShadow: new __varRecorder__$6.ShadowObject({
            distance: 0,
            rotation: 0,
            color: __varRecorder__$6.Color.rgba(0, 0, 0, 0.39071265243902487),
            inset: true,
            blur: 4,
            spread: 1
          })
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "ButtonDarkClicked",
        range: {
          start: 2393,
          end: 2664
        }
      }, __varRecorder__$6.ButtonDarkClicked);
      __varRecorder__$6.SystemButtonDark = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component(__varRecorder__$6.ButtonDarkDefault, {
          name: "system button/dark",
          master: {
            auto: __varRecorder__$6.ButtonDarkDefault,
            click: __varRecorder__$6.ButtonDarkClicked
          }
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "SystemButtonDark",
        range: {
          start: 2672,
          end: 2828
        }
      }, __varRecorder__$6.SystemButtonDark);
      __varRecorder__$6.DarkButton = __varRecorder__$6.component["for"](function () {
        return __varRecorder__$6.component(__varRecorder__$6.ButtonDefault, {
          name: "dark button",
          borderWidth: 0,
          fill: __varRecorder__$6.Color.rgba(0, 0, 0, 0.75),
          submorphs: [{
            name: "label",
            fontSize: 9,
            fontColor: __varRecorder__$6.Color.rgb(255, 255, 255)
          }]
        });
      }, {
        module: "lively.components/buttons.cp.js",
        "export": "DarkButton",
        range: {
          start: 2836,
          end: 3051
        }
      }, __varRecorder__$6.DarkButton);
      var ButtonDefault = exports('q', __varRecorder__$6.ButtonDefault);
      var ButtonClicked = __varRecorder__$6.ButtonClicked;
      var SystemButton = exports('b', __varRecorder__$6.SystemButton);
      var ButtonDarkDefault = exports('B', __varRecorder__$6.ButtonDarkDefault);
      var SystemButtonDark = exports('c', __varRecorder__$6.SystemButtonDark);
      var ButtonDarkClicked = __varRecorder__$6.ButtonDarkClicked;
      var DarkButton = exports('D', __varRecorder__$6.DarkButton);
      __varRecorder__$6.ButtonDefault = ButtonDefault;
      __varRecorder__$6.ButtonClicked = ButtonClicked;
      __varRecorder__$6.SystemButton = SystemButton;
      __varRecorder__$6.ButtonDarkDefault = ButtonDarkDefault;
      __varRecorder__$6.SystemButtonDark = SystemButtonDark;
      __varRecorder__$6.ButtonDarkClicked = ButtonDarkClicked;
      __varRecorder__$6.DarkButton = DarkButton;

      var __varRecorder__$5 = lively.FreezerRuntime.recorderFor("lively.components/list.js");

      function asItem(obj) {
        if (obj && obj.isListItem && typeof obj.string === "string") return obj;
        if (!obj || !obj.isListItem) return {
          isListItem: true,
          string: String(obj),
          value: obj
        };
        var label = obj.string || obj.label || "no item.string";
        obj.string = !label || typeof label === "string" ? String(label) : Array.isArray(label) ? label.map(function (text, i) {
          return i % 2 === 0 ? String(text) : "";
        }).join("") : String(label);
        return obj;
      }

      __varRecorder__$5.asItem = asItem;
      __varRecorder__$5.Morph = Morph;
      __varRecorder__$5.Label = Label;
      __varRecorder__$5.Icon = Icon;
      __varRecorder__$5.morph = morph;
      __varRecorder__$5.touchInputDevice = touchInputDevice;
      __varRecorder__$5.part = part;
      __varRecorder__$5.pt = pt;
      __varRecorder__$5.Color = Color;
      __varRecorder__$5.Rectangle = Rectangle;
      __varRecorder__$5.arr = arr;
      __varRecorder__$5.obj = obj;
      __varRecorder__$5.Path = Path;
      __varRecorder__$5.string = string;
      __varRecorder__$5.signal = signal;
      __varRecorder__$5.noUpdate = noUpdate;
      __varRecorder__$5.once = once;
      __varRecorder__$5.connect = connect;
      __varRecorder__$5.Button = Button;
      __varRecorder__$5.ButtonModel = ButtonModel;
      __varRecorder__$5.InputLine = InputLine;
      __varRecorder__$5.asItem = asItem;
      var ListItemMorph = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ListItemMorph") && typeof __lively_classholder__.ListItemMorph === "function" ? __lively_classholder__.ListItemMorph : __lively_classholder__.ListItemMorph = function ListItemMorph(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "alreadyDisplayingItem",
          value: function ListItemMorph_alreadyDisplayingItem_(item, goalWidth) {
            if (this._gloalWidth !== goalWidth) {
              this._goalWidth = goalWidth;
              return false;
            }

            if (item.label) return __varRecorder__$5.obj.equals(item.label, this.textAndAttributes);
            if (item.string) return this.textString === item.string;
            return false;
          }
        }, {
          key: "displayItem",
          value: function ListItemMorph_displayItem_(item, itemIndex, goalWidth, itemHeight, pos) {
            var isSelected = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            var style = arguments.length > 6 ? arguments[6] : undefined;
            if (this.alreadyDisplayingItem(item, goalWidth) && isSelected === this.isSelected && (!item.fontFamily || item.fontFamily === this.fontFamily)) return;
            var itemMorph = item.morph;
            var label = itemMorph ? "" : item.label || item.string || "no item.string";

            if (item.annotation) {
              this.valueAndAnnotation = {
                value: label,
                annotation: item.annotation
              };
            } else if (typeof label === "string") this.textAndAttributes = label;else this.textAndAttributes = label;

            this.tooltip = item.tooltip || this.tooltip || this.textString;
            if (item.tooltip === false) this.tooltip = false;
            this.itemIndex = itemIndex;
            this.position = pos;

            if (style) {
              var fontFamily = style.fontFamily,
                  selectionColor = style.selectionColor,
                  selectionFontColor = style.selectionFontColor,
                  nonSelectionFontColor = style.nonSelectionFontColor,
                  borderRadius = style.borderRadius,
                  fontSize = style.fontSize,
                  padding = style.padding,
                  borderWidth = style.borderWidth,
                  borderStyle = style.borderStyle;

              if (selectionFontColor && this.selectionFontColor !== selectionFontColor) {
                this.selectionFontColor = selectionFontColor;
              }

              if (nonSelectionFontColor && this.nonSelectionFontColor !== nonSelectionFontColor) {
                this.nonSelectionFontColor = nonSelectionFontColor;
              }

              if (selectionColor && this.selectionColor !== selectionColor) {
                this.selectionColor = selectionColor;
              }

              if (borderRadius && borderRadius !== this.borderRadius) {
                this.borderRadius = borderRadius;
              }

              if (borderWidth && borderWidth !== this.borderWidth) {
                this.borderWidth = borderWidth;
              }

              if (!borderWidth && this.borderWidth !== 0) this.borderWidth = 0;

              if (borderStyle && borderStyle !== this.borderStyle) {
                this.borderStyle = borderStyle;
              }

              if (!borderStyle && this.borderStyle !== "none") this.borderStyle = "none";
              this.borderColor = isSelected ? this.selectionFontColor : this.nonSelectionFontColor;
              if (fontSize && this.fontSize !== fontSize) this.fontSize = fontSize;
              if (fontFamily && this.fontFamily !== fontFamily) this.fontFamily = fontFamily;
              if (padding && !this.padding.equals(padding)) this.padding = padding;
            }

            {
              if (item.autoFit) itemMorph.width = goalWidth;
              var width = itemMorph ? Math.max(itemMorph.width, goalWidth) : goalWidth;
              var height = itemHeight + this.borderWidth.bottom + this.borderWidth.top;
              this.extent = __varRecorder__$5.pt(width, height);
            }

            if (itemMorph) {
              var tfm = itemMorph.getTransform().copy();
              this.submorphs = [itemMorph];
              itemMorph.setTransform(tfm);
              itemMorph.position = __varRecorder__$5.pt(0, 0);
            } else if (this.submorphs.length) this.submorphs = [];

            this.isSelected = isSelected;
          }
        }, {
          key: "onDragStart",
          value: function ListItemMorph_onDragStart_(evt) {
            var list = this.list;
            this._dragState = {
              sourceIsSelected: this.isSelected,
              source: this,
              itemsTouched: []
            };

            if (!list.multiSelect || !list.multiSelectViaDrag) {
              list.onItemMorphDragged(evt, this);
            }
          }
        }, {
          key: "onMouseDown",
          value: function ListItemMorph_onMouseDown_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseDown", this).call(this, evt);

            this.list.clickOnItem(evt);
          }
        }, {
          key: "onDrag",
          value: function ListItemMorph_onDrag_(evt) {
            var list = this.list;

            if (list.multiSelect && list.multiSelectViaDrag) {
              var below = evt.hand.morphBeneath(evt.position);
              var selectedIndexes = list.selectedIndexes,
                  itemMorphs = list.itemMorphs;
              if (below === this || !itemMorphs.includes(below)) return;

              if (this._dragState.sourceIsSelected && !below.isSelected) {
                __varRecorder__$5.arr.pushIfNotIncluded(selectedIndexes, below.itemIndex);

                list.selectedIndexes = selectedIndexes;
              } else if (!this._dragState.sourceIsSelected && below.isSelected) {
                __varRecorder__$5.arr.remove(selectedIndexes, below.itemIndex);

                list.selectedIndexes = selectedIndexes;
              }
            }
          }
        }, {
          key: "isListItemMorph",
          get: function get() {
            return true;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ListItemMorph";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              clipMode: {
                defaultValue: "hidden"
              },
              autofit: {
                defaultValue: false
              },
              isSelected: {
                defaultValue: false
              },
              draggable: {
                defaultValue: !__varRecorder__$5.touchInputDevice
              },
              fixedWidth: {
                defaultValue: true
              },
              fixedHeight: {
                defaultValue: true
              },
              nativeCursor: {
                defaultValue: "auto"
              },
              fill: {
                derived: true,
                get: function get() {
                  if (__varRecorder__$5.touchInputDevice && this.pressed) return __varRecorder__$5.Color.gray.withA(0.5);
                  return this.isSelected ? this.selectionColor : __varRecorder__$5.Color.transparent;
                }
              },
              itemIndex: {
                defaultValue: undefined
              },
              selectionFontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.white
              },
              selectionColor: {
                type: "ColorGradient",
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.blue
              },
              nonSelectionFontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.rgbHex("333")
              },
              fontColor: {
                derived: true,
                get: function get() {
                  return this.isSelected ? this.selectionFontColor : this.nonSelectionFontColor;
                }
              },
              list: {
                derived: true,
                get: function get() {
                  return this.owner.owner;
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 921,
          end: 6813
        });
      }(__varRecorder__$5.Label);
      __varRecorder__$5.ListItemMorph = ListItemMorph;
      __varRecorder__$5.ListItemMorph = ListItemMorph;
      var ListScroller = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ListScroller") && typeof __lively_classholder__.ListScroller === "function" ? __lively_classholder__.ListScroller : __lively_classholder__.ListScroller = function ListScroller(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "onScroll",
          value: function ListScroller_onScroll_(evt) {
            return this.owner.update();
          }
        }, {
          key: "onMouseDown",
          value: function ListScroller_onMouseDown_(evt) {
            var _this2 = this;

            var scrollY = this.scroll.y;

            if (__varRecorder__$5.touchInputDevice) {
              var item = this.owner.itemForClick(evt);
              if (!item) return;
              item.pressed = true;
              item.makeDirty();
              setTimeout(function () {
                item.pressed = false;
                if (scrollY - _this2.scroll.y !== 0) return;
                return _this2.owner.clickOnItem(evt);
              }, 300);
              return;
            }

            return this.owner.clickOnItem(evt);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ListScroller";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              name: {
                defaultValue: "scroller"
              },
              fill: {
                defaultValue: __varRecorder__$5.Color.transparent
              },
              clipMode: {
                defaultValue: "auto"
              },
              scrollbar: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return this.submorphs[0];
                }
              },
              submorphs: {
                initialize: function initialize() {
                  this.submorphs = [{
                    name: "scrollbar",
                    fill: __varRecorder__$5.Color.transparent
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 6821,
          end: 7922
        });
      }(__varRecorder__$5.Morph);
      __varRecorder__$5.ListScroller = ListScroller;
      __varRecorder__$5.ListScroller = ListScroller;
      __varRecorder__$5.listCommands = [{
        name: "page up",
        exec: function exec(list) {
          var index = list.selectedIndex;
          var newIndex = Math.max(0, index - Math.round(list.height / list.itemHeight));
          return list.gotoIndex(newIndex);
        }
      }, {
        name: "page down",
        exec: function exec(list) {
          var index = list.selectedIndex;
          var newIndex = Math.min(list.items.length - 1, index + Math.round(list.height / list.itemHeight));
          return list.gotoIndex(newIndex);
        }
      }, {
        name: "goto first item",
        exec: function exec(list) {
          return list.gotoIndex(0);
        }
      }, {
        name: "goto last item",
        exec: function exec(list) {
          return list.gotoIndex(list.items.length - 1);
        }
      }, {
        name: "arrow up",
        exec: function exec(list) {
          return list.gotoIndex(list.indexUp());
        }
      }, {
        name: "arrow down",
        exec: function exec(list) {
          return list.gotoIndex(list.indexDown());
        }
      }, {
        name: "select up",
        exec: function exec(list) {
          var selected = list.selectedIndexes;

          if (!list.multiSelect || !selected.length) {
            return list.execCommand("arrow up");
          }

          var current = selected[0];
          if (typeof current !== "number") list.selectedIndexes = [current];else {
            var up = list.indexUp(current);

            if (selected.includes(current) && selected.includes(up)) {
              list.selectedIndexes = selected.filter(function (ea) {
                return ea !== current;
              });
            } else {
              list.selectedIndexes = [up].concat(selected.filter(function (ea) {
                return ea !== up;
              }));
            }
          }
          return true;
        }
      }, {
        name: "select down",
        exec: function exec(list) {
          var selected = list.selectedIndexes;

          if (!list.multiSelect || !selected.length) {
            return list.execCommand("arrow down");
          }

          var current = selected[0];
          var down = list.indexDown(current);

          if (selected.includes(current) && selected.includes(down)) {
            list.selectedIndexes = selected.filter(function (ea) {
              return ea !== current;
            });
          } else {
            list.selectedIndexes = [down].concat(selected.filter(function (ea) {
              return ea !== down;
            }));
          }

          return true;
        }
      }, {
        name: "select all",
        exec: function exec(list) {
          list.selectedIndexes = __varRecorder__$5.arr.range(list.items.length - 1, 0);
          list.scrollIndexIntoView(list.selectedIndexes[0]);
          return true;
        }
      }, {
        name: "select via filter",
        exec: function () {
          var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(list) {
            var preselect, _yield$list$world$fil, selected;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    preselect = list.selectedIndex || 0;
                    _context.next = 3;
                    return list.world().filterableListPrompt("Select item", list.items, {
                      preselect: preselect,
                      requester: list.getWindow() || list,
                      itemPadding: __varRecorder__$5.Rectangle.inset(0, 2),
                      multiSelect: true
                    });

                  case 3:
                    _yield$list$world$fil = _context.sent;
                    selected = _yield$list$world$fil.selected;

                    if (selected.length) {
                      if (list.multiSelect) list.selections = selected;else list.selection = selected[0];
                      list.scrollSelectionIntoView();
                      list.update();
                    }

                    return _context.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function exec(_x) {
            return _exec.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "realign top-bottom-center",
        exec: function exec(list) {
          if (!list.selection) return;
          var padding = list.padding,
              idx = list.selectedIndex,
              itemHeight = list.itemHeight,
              _list$scroll = list.scroll,
              scrollX = _list$scroll.x,
              scrollY = _list$scroll.y;

          var pos = __varRecorder__$5.pt(0, idx * itemHeight);

          var h = list.height - itemHeight - padding.top() - padding.bottom();

          if (Math.abs(pos.y - scrollY) < 2) {
            scrollY = pos.y - h;
          } else if (Math.abs(pos.y - scrollY - h * 0.5) < 2) {
            scrollY = pos.y;
          } else {
            scrollY = pos.y - h * 0.5;
          }

          list.scroll = __varRecorder__$5.pt(scrollX, scrollY);
          return true;
        }
      }, {
        name: "print contents in text window",
        exec: function exec(list) {
          var title = "items of " + list.name;
          var content = list.items.map(function (item) {
            if (typeof item === "string") return item;
            var string = item.string,
                label = item.label,
                annotation = item.annotation;
            var result = "";

            if (label) {
              if (typeof label === "string") result += label;else result += label.map(function (text, i) {
                return i % 2 === 0 ? text : "";
              }).join("");
            } else if (string) result += string;

            if (annotation) {
              result += " ";
              if (typeof annotation === "string") result += annotation;else result += annotation[0];
            }

            return result;
          }).join("\n");
          return list.world().execCommand("open text window", {
            title: title,
            content: content,
            name: title,
            fontFamily: "Monaco, monospace"
          });
        }
      }];
      var List = exports('o', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("List") && typeof __lively_classholder__.List === "function" ? __lively_classholder__.List : __lively_classholder__.List = function List(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "__additionally_serialize__",
          value: function List___additionally_serialize___(snapshot, ref, pool, addFn) {
            var _this3 = this;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "__additionally_serialize__", this).call(this, snapshot, ref, pool, addFn);

            this.whenEnvReady().then(function () {
              return _this3.update();
            });
          }
        }, {
          key: "onLoad",
          value: function List_onLoad_() {
            this.scroller.visible = __varRecorder__$5.touchInputDevice;
          }
        }, {
          key: "initializeSubmorphs",
          value: function List_initializeSubmorphs_(submorphs) {
            var container, scroller;
            submorphs = submorphs || this.submorphs || [];
            this.submorphs = submorphs;

            for (var i = 0; i < submorphs.length; i++) {
              switch (submorphs[i].name) {
                case "listItemContainer":
                  container = submorphs[i];
                  continue;

                case "scroller":
                  scroller = submorphs[i];
                  continue;
              }
            }

            if (!scroller) {
              scroller = this.addMorph(new __varRecorder__$5.ListScroller({
                draggable: false,
                grabbable: false,
                acceptsDrops: false,
                halosEnabled: false,
                name: "scroller"
              }));
            }

            if (!container) {
              this.addMorph({
                name: "listItemContainer",
                fill: __varRecorder__$5.Color.transparent,
                halosEnabled: false,
                reactsToPointer: false,
                acceptsDrops: false,
                draggable: false
              });
            }

            if (container || scroller) this.update();
          }
        }, {
          key: "isList",
          get: function get() {
            return true;
          }
        }, {
          key: "onChange",
          value: function List_onChange_(change) {
            var prop = change.prop;
            var styleProps = ["fontFamily", "fontColor", "fontSize", "padding", "selectionFontColor", "selectionColor", "nonSelectionFontColor", "itemPadding", "items"];
            if (styleProps.includes(prop)) this.update();
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);
          }
        }, {
          key: "itemForClick",
          value: function List_itemForClick_(evt) {
            var clickedPos = evt.positionIn(this.world()).subPt(this.scroll);
            var items = this.listItemContainer.morphsContainingPoint(clickedPos);
            return items.find(function (m) {
              return m.isListItem;
            }) || items[0];
          }
        }, {
          key: "clickOnItem",
          value: function List_clickOnItem_(evt) {
            var item = this.itemForClick(evt);
            if (!item) return;
            var clickCount = evt.state.clickCount;
            if (evt.positionIn(this).x > this.width - this.scrollbarOffset.x) return;
            var method = clickCount === 2 ? "onItemMorphDoubleClicked" : "onItemMorphClicked";
            this[method](evt, item);
          }
        }, {
          key: "connections",
          get: function get() {
            return {
              selection: {
                signalOnAssignment: false
              }
            };
          }
        }, {
          key: "invalidateCache",
          value: function List_invalidateCache_() {
            if (!this.manualItemHeight) {
              this.setProperty("itemHeight", null);
            }
          }
        }, {
          key: "find",
          value: function List_find_(itemOrValue) {
            return this.items.find(function (item) {
              return item === itemOrValue || item.value === itemOrValue;
            });
          }
        }, {
          key: "findIndex",
          value: function List_findIndex_(itemOrValue) {
            return this.items.findIndex(function (item) {
              return item === itemOrValue || item.value === itemOrValue;
            });
          }
        }, {
          key: "addItem",
          value: function List_addItem_(item) {
            return this.addItemAt(item);
          }
        }, {
          key: "addItemAt",
          value: function List_addItemAt_(item) {
            var _this4 = this;

            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.items.length;
            var items = this.items;
            index = Math.min(items.length, Math.max(0, index));
            items.splice(index, 0, __varRecorder__$5.asItem(item));
            this.addMethodCallChangeDoing({
              target: this,
              selector: "addItemAt",
              args: [item, index],
              undo: {
                target: this,
                selector: "removeItem",
                args: [item]
              }
            }, function () {
              return _this4.update();
            });
          }
        }, {
          key: "removeItem",
          value: function List_removeItem_(itemOrValue) {
            var _this5 = this;

            var item = this.find(itemOrValue);
            var items = this.items;
            var index = items.indexOf(item);
            if (index === -1) return;
            items.splice(index, 1);
            this.addMethodCallChangeDoing({
              target: this,
              selector: "removeItem",
              args: [item],
              undo: {
                target: this,
                selector: "addItemAt",
                args: [item, index]
              }
            }, function () {
              return _this5.update();
            });
          }
        }, {
          key: "selectItemMorph",
          value: function List_selectItemMorph_(itemMorph) {
            this.selectedIndexes = [itemMorph.itemIndex];
          }
        }, {
          key: "gotoIndex",
          value: function List_gotoIndex_(i) {
            if (this.arrowNavigationProhibited) return false;
            this.scrollIndexIntoView(this.selectedIndex = i);
            return true;
          }
        }, {
          key: "indexUp",
          value: function List_indexUp_(from) {
            from = typeof from === "number" ? from : this.selectedIndex;
            return (from || this.items.length) - 1;
          }
        }, {
          key: "indexDown",
          value: function List_indexDown_() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.selectedIndex;
            index = typeof index === "number" ? index : -1;
            return (index + 1) % this.items.length;
          }
        }, {
          key: "update",
          value: function List_update_() {
            var _this6 = this;

            var items = this.items;
            if (!items || !this.scroller) return;
            this.dontRecordChangesWhile(function () {
              var itemHeight = _this6.itemHeight,
                  itemMorphs = _this6.itemMorphs,
                  listItemContainer = _this6.listItemContainer,
                  selectedIndexes = _this6.selectedIndexes,
                  _this6$extent = _this6.extent,
                  width = _this6$extent.x,
                  height = _this6$extent.y,
                  fontSize = _this6.fontSize,
                  fontFamily = _this6.fontFamily,
                  fontColor = _this6.fontColor,
                  _this6$padding = _this6.padding,
                  padding = _this6$padding === void 0 ? Rectangle.inset(0) : _this6$padding,
                  itemPadding = _this6.itemPadding,
                  selectionColor = _this6.selectionColor,
                  selectionFontColor = _this6.selectionFontColor,
                  nonSelectionFontColor = _this6.nonSelectionFontColor,
                  itemBorderRadius = _this6.itemBorderRadius,
                  scrollBar = _this6.scrollBar,
                  scroller = _this6.scroller,
                  scrollable = _this6.scrollable;
              var top = scroller.scroll.y;
              var padTop = padding.top();
              var padLeft = padding.left();
              var padBottom = padding.bottom();
              var padRight = padding.right();
              var firstItemIndex = Math.max(0, Math.floor(top / itemHeight));
              var lastItemIndex = Math.min(items.length, firstItemIndex + height / itemHeight + 2);
              var maxWidth = 0;
              var goalWidth = width - (padLeft + padRight);
              var rest, upper, lower;
              itemMorphs = __varRecorder__$5.arr.sortBy(itemMorphs, function (m) {
                return m.itemIndex;
              });

              var _varRecorder__$arr$p = __varRecorder__$5.arr.partition(itemMorphs, function (m) {
                return m.itemIndex < firstItemIndex;
              });

              var _varRecorder__$arr$p2 = _slicedToArray(_varRecorder__$arr$p, 2);

              upper = _varRecorder__$arr$p2[0];
              rest = _varRecorder__$arr$p2[1];

              var _varRecorder__$arr$p3 = __varRecorder__$5.arr.partition(rest, function (m) {
                return m.itemIndex > lastItemIndex - 1;
              });

              var _varRecorder__$arr$p4 = _slicedToArray(_varRecorder__$arr$p3, 2);

              lower = _varRecorder__$arr$p4[0];
              rest = _varRecorder__$arr$p4[1];
              itemMorphs = [].concat(_toConsumableArray(lower), _toConsumableArray(rest), _toConsumableArray(upper));
              var borderOffsetForHeight = 0;

              var _loop = function _loop(i) {
                var _item$style, _item$style2;

                var itemIndex = firstItemIndex + i;
                var item = items[itemIndex];

                if (!item) {
                  itemMorphs.slice(i).forEach(function (itemMorph) {
                    itemMorph.remove();
                  });
                  return "break";
                }

                var style = {
                  fontSize: fontSize,
                  fontFamily: fontFamily,
                  fontColor: nonSelectionFontColor || fontColor,
                  padding: itemPadding || __varRecorder__$5.Rectangle.inset(0),
                  borderRadius: itemBorderRadius || 0,
                  selectionFontColor: selectionFontColor,
                  nonSelectionFontColor: nonSelectionFontColor,
                  selectionColor: selectionColor
                };
                var itemMorph = itemMorphs[i];

                if (!itemMorph) {
                  _this6.withMetaDo({
                    skipReconciliation: true
                  }, function () {
                    itemMorph = itemMorphs[i] = listItemContainer.addMorph(new __varRecorder__$5.ListItemMorph(style));
                  });
                }

                itemMorph.reactsToPointer = !scrollable;
                itemMorph.displayItem(item, itemIndex, goalWidth, itemHeight, __varRecorder__$5.pt(0, itemHeight * itemIndex + borderOffsetForHeight), selectedIndexes.includes(itemIndex), __varRecorder__$5.obj.merge(style, item.style));
                borderOffsetForHeight += ((_item$style = item.style) === null || _item$style === void 0 ? void 0 : _item$style.borderWidth.bottom) || 0;
                borderOffsetForHeight += ((_item$style2 = item.style) === null || _item$style2 === void 0 ? void 0 : _item$style2.borderWidth.top) || 0;
                maxWidth = Math.max(maxWidth, itemMorph.width);
              };

              for (var i = 0; i < lastItemIndex - firstItemIndex; i++) {
                var _ret = _loop(i);

                if (_ret === "break") break;
              }

              itemMorphs.slice(lastItemIndex - firstItemIndex).forEach(function (ea) {
                return ea.remove();
              });
              var totalItemHeight = Math.max(padTop + padBottom + itemHeight * items.length + borderOffsetForHeight, _this6.height);
              listItemContainer.setBounds(__varRecorder__$5.pt(padLeft, padTop).subXY(0, top).extent(__varRecorder__$5.pt(_this6.width, totalItemHeight)));
              scroller.extent = _this6.extent.subXY(_this6.borderWidthRight, _this6.borderWidthBottom);
              scrollBar.left = maxWidth / 2;
              scroller.position = __varRecorder__$5.pt(0, 0);
              scrollBar.extent = __varRecorder__$5.pt(1, totalItemHeight);
            });
          }
        }, {
          key: "scrollSelectionIntoView",
          value: function List_scrollSelectionIntoView_() {
            if (this.selection) this.scrollIndexIntoView(this.selectedIndex);
          }
        }, {
          key: "scrollIndexIntoView",
          value: function List_scrollIndexIntoView_(idx) {
            var itemHeight = this.itemHeight,
                width = this.width,
                itemScroll = this.itemScroll;
            var itemBounds = new __varRecorder__$5.Rectangle(0, idx * itemHeight, width, itemHeight);
            var visibleBounds = this.innerBounds().insetByRect(this.padding).translatedBy(itemScroll);
            var offsetX = 0;
            var offsetY = 0;

            if (itemBounds.bottom() > visibleBounds.bottom()) {
              offsetY = itemBounds.bottom() - visibleBounds.bottom();
            }

            if (itemBounds.top() < visibleBounds.top()) {
              offsetY = itemBounds.top() - visibleBounds.top();
            }

            this.itemScroll = itemScroll.addXY(offsetX, offsetY);
            this.update();
          }
        }, {
          key: "onItemMorphDoubleClicked",
          value: function List_onItemMorphDoubleClicked_(evt, itemMorph) {}
        }, {
          key: "onItemMorphClicked",
          value: function List_onItemMorphClicked_(evt, itemMorph) {
            if (itemMorph.itemIndex === undefined) return;
            var itemI = itemMorph.itemIndex;
            var selectedIndexes = this.selectedIndexes;
            var isClickOnSelected = selectedIndexes.includes(itemI);
            var indexes = [];

            if (this.multiSelect) {
              if (evt.isShiftDown()) {
                if (isClickOnSelected) {
                  indexes = selectedIndexes.filter(function (ea) {
                    return ea !== itemI;
                  });
                } else {
                  var from = selectedIndexes[0];
                  var added = typeof from === "number" ? __varRecorder__$5.arr.range(itemI, from) : [itemI];
                  indexes = added.concat(selectedIndexes.filter(function (ea) {
                    return !added.includes(ea);
                  }));
                }
              } else if (this.multiSelectWithSimpleClick || evt.isCommandKey()) {
                if (isClickOnSelected) {
                  indexes = selectedIndexes.filter(function (ea) {
                    return ea !== itemI;
                  });
                } else {
                  indexes = [itemI].concat(selectedIndexes.filter(function (ea) {
                    return ea !== itemI;
                  }));
                }
              } else indexes = [itemI];
            } else indexes = [itemI];

            this.selectedIndexes = indexes;
          }
        }, {
          key: "onItemMorphDragged",
          value: function List_onItemMorphDragged_(evt, itemMorph) {}
        }, {
          key: "onHoverIn",
          value: function List_onHoverIn_(evt) {
            if (this.scrollable) {
              this.scroller.visible = true;
            }
          }
        }, {
          key: "onHoverOut",
          value: function List_onHoverOut_(evt) {
            if (!__varRecorder__$5.touchInputDevice) {
              this.scroller.visible = false;
            }
          }
        }, {
          key: "onDragStart",
          value: function List_onDragStart_(evt) {}
        }, {
          key: "onDrag",
          value: function List_onDrag_(evt) {}
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Up|Ctrl-P",
              command: "arrow up"
            }, {
              keys: "Down|Ctrl-N",
              command: "arrow down"
            }, {
              keys: "Shift-Up",
              command: "select up"
            }, {
              keys: "Shift-Down",
              command: "select down"
            }, {
              keys: {
                win: "Ctrl-A",
                mac: "Meta-A"
              },
              command: "select all"
            }, {
              keys: "Alt-V|PageUp",
              command: "page up"
            }, {
              keys: "Ctrl-V|PageDown",
              command: "page down"
            }, {
              keys: "Alt-Shift-,",
              command: "goto first item"
            }, {
              keys: "Alt-Shift-.",
              command: "goto last item"
            }, {
              keys: "Alt-Space",
              command: "select via filter"
            }, {
              keys: "Ctrl-L",
              command: "realign top-bottom-center"
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }, {
          key: "commands",
          get: function get() {
            return __varRecorder__$5.listCommands;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "List";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: __varRecorder__$5.Color.white
              },
              clipMode: {
                defaultValue: "hidden"
              },
              selectionFontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.white
              },
              selectionColor: {
                type: "ColorGradient",
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.rgb(21, 101, 192)
              },
              nonSelectionFontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.rgbHex("333")
              },
              fontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Color.rgbHex("333")
              },
              styleClasses: {
                defaultValue: ["default"]
              },
              itemScroll: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.scroller ? this.scroller.scroll : __varRecorder__$5.pt(0, 0);
                },
                set: function set(s) {
                  if (this.scroller) this.scroller.scroll = s;
                }
              },
              extent: {
                defaultValue: __varRecorder__$5.pt(400, 360),
                set: function set(value) {
                  if (value.eqPt(this.extent)) return;
                  this.setProperty("extent", value);
                  this.update();
                }
              },
              fontFamily: {
                isStyleProp: true,
                defaultValue: "IBM Plex Sans",
                set: function set(value) {
                  this.setProperty("fontFamily", value);
                  this.invalidateCache();
                }
              },
              fontSize: {
                isStyleProp: true,
                defaultValue: 12,
                set: function set(value) {
                  this.setProperty("fontSize", value);
                  this.invalidateCache();
                }
              },
              padding: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Rectangle.inset(3)
              },
              itemBorderRadius: {
                isStyleProp: true,
                defaultValue: 0,
                set: function set(value) {
                  this.setProperty("itemBorderRadius", value);
                  this.invalidateCache();
                }
              },
              itemPadding: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.Rectangle.inset(1),
                set: function set(value) {
                  this.setProperty("itemPadding", value);
                  this.invalidateCache();
                }
              },
              items: {
                group: "list",
                defaultValue: [],
                after: ["submorphs"],
                set: function set(items) {
                  this.setProperty("items", items.map(__varRecorder__$5.asItem));
                  this.itemScroll = __varRecorder__$5.pt(0, 0);
                  this.update();

                  if (this.attributeConnections) {
                    __varRecorder__$5.signal(this, "values", this.values);
                  }
                }
              },
              multiSelect: {
                defaultValue: false
              },
              multiSelectWithSimpleClick: {
                description: "Does a simple click toggle selections without deselecting?",
                defaultValue: false
              },
              multiSelectViaDrag: {
                description: "Does dragging extend selection?",
                defaultValue: true
              },
              values: {
                group: "list",
                after: ["items"],
                readOnly: true,
                get: function get() {
                  return this.items.map(function (ea) {
                    return ea.value;
                  });
                }
              },
              selectedIndex: {
                group: "list",
                defaultValue: [],
                after: ["selectedIndexes"],
                get: function get() {
                  return this.selectedIndexes[0];
                },
                set: function set(i) {
                  return this.selectedIndexes = typeof i === "number" ? [i] : [];
                }
              },
              selectedIndexes: {
                get: function get() {
                  return this.getProperty("selectedIndexes") || [];
                },
                set: function set(indexes) {
                  var maxLength = this.items.length;
                  this.setProperty("selectedIndexes", (indexes || []).filter(function (i) {
                    return i >= 0 && i < maxLength;
                  }));
                  this.update();

                  __varRecorder__$5.signal(this, "selection", this.selection);
                }
              },
              selection: {
                group: "list",
                after: ["selections"],
                get: function get() {
                  return this.selections[0];
                },
                set: function set(itemOrValue) {
                  this.selections = [itemOrValue];
                }
              },
              selections: {
                group: "list",
                after: ["selectedIndexes"],
                get: function get() {
                  var _this7 = this;

                  return this.selectedIndexes.map(function (i) {
                    return _this7.items[i] && _this7.items[i].value;
                  });
                },
                set: function set(sels) {
                  var _this8 = this;

                  this.selectedIndexes = sels.map(function (ea) {
                    return _this8.findIndex(ea);
                  });
                }
              },
              selectedItems: {
                after: ["selectedIndexes"],
                readOnly: true,
                get: function get() {
                  var _this9 = this;

                  return this.selectedIndexes.map(function (i) {
                    return _this9.items[i];
                  });
                }
              },
              submorphs: {
                initialize: function initialize(submorphs) {
                  this.initializeSubmorphs(submorphs);
                }
              },
              listItemContainer: {
                after: ["submorphs"],
                readOnly: true,
                get: function get() {
                  return this.getSubmorphNamed("listItemContainer");
                }
              },
              itemMorphs: {
                after: ["submorphs"],
                readOnly: true,
                get: function get() {
                  return this.listItemContainer.submorphs;
                }
              },
              scrollBar: {
                after: ["submorphs"],
                readOnly: true,
                get: function get() {
                  return this.getSubmorphNamed("scrollbar");
                }
              },
              scroller: {
                after: ["submorphs"],
                readOnly: true,
                get: function get() {
                  return this.getSubmorphNamed("scroller");
                }
              },
              scrollable: {
                derived: true,
                get: function get() {
                  return this.padding.top() + this.items.length * this.itemHeight > this.height;
                }
              },
              manualItemHeight: {
                type: "Boolean"
              },
              itemHeight: {
                isStyleProp: true,
                after: ["fontFamily", "fontSize", "itemPadding"],
                defaultValue: 10,
                set: function set(val) {
                  this.setProperty("itemHeight", val);
                  this.manualItemHeight = typeof val === "number";
                  this.update();
                },
                get: function get() {
                  var height = this.getProperty("itemHeight");
                  if (height) return height;
                  var h = this.env.fontMetric.defaultLineHeight({
                    fontFamily: this.fontFamily,
                    fontSize: this.fontSize
                  });
                  var padding = this.itemPadding;
                  if (padding) h += padding.top() + padding.bottom();
                  this.setProperty("itemHeight", h);
                  return h;
                }
              },
              theme: {
                after: ["styleClasses"],
                defaultValue: "default",
                set: function set(val) {
                  this.removeStyleClass(this.theme);
                  this.addStyleClass(val);
                  this.setProperty("theme", val);
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 12074,
          end: 29690
        });
      }(__varRecorder__$5.Morph));
      __varRecorder__$5.List = List;
      __varRecorder__$5.List = List;
      var FilterableList = exports('F', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("FilterableList") && typeof __lively_classholder__.FilterableList === "function" ? __lively_classholder__.FilterableList : __lively_classholder__.FilterableList = function FilterableList(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function FilterableList_initialize_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            if (!props.bounds && !props.extent) props.extent = __varRecorder__$5.pt(400, 360);
            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);

            __varRecorder__$5.connect(this.inputMorph, "inputChanged", this, "updateFilter");

            __varRecorder__$5.connect(this.listMorph, "selection", this, "selectionChanged");

            __varRecorder__$5.connect(this.listMorph, "onItemMorphDoubleClicked", this, "acceptInput");

            this.updateFilter();

            __varRecorder__$5.connect(this, "extent", this, "relayout");

            return _this;
          }
        }, {
          key: "resetConnections",
          value: function FilterableList_resetConnections_() {
            var _this10 = this;

            var cs = this.attributeConnections;
            if (!cs) return;
            var props = ["accepted", "canceled", "remove"];
            cs.filter(function (c) {
              return props.includes(c.sourceAttrName) && c.targetObj !== _this10;
            }).forEach(function (c) {
              return c.disconnect();
            });
          }
        }, {
          key: "isList",
          get: function get() {
            return true;
          }
        }, {
          key: "relayout",
          value: function FilterableList_relayout_() {
            var _this11 = this;

            var listMorph = this.listMorph,
                inputMorph = this.inputMorph,
                paddingMorph = this.paddingMorph,
                offset = this.borderWidth;
            this.withMetaDo({
              metaInteraction: true
            }, function () {
              inputMorph.topLeft = __varRecorder__$5.pt(offset, offset);
              inputMorph.width = listMorph.width = _this11.width - 2 * offset;

              if (paddingMorph) {
                paddingMorph.topLeft = inputMorph.bottomLeft;
              }

              listMorph.position = paddingMorph ? paddingMorph.bottomLeft : inputMorph.bottomLeft;
              listMorph.height = Math.floor(_this11.height - listMorph.top - offset);
            });
          }
        }, {
          key: "focus",
          value: function FilterableList_focus_() {
            this.get("input").focus();
          }
        }, {
          key: "selectionChanged",
          value: function FilterableList_selectionChanged_(sel) {
            __varRecorder__$5.signal(this, "selection", sel);
          }
        }, {
          key: "scrollSelectionIntoView",
          value: function FilterableList_scrollSelectionIntoView_() {
            return this.listMorph.scrollSelectionIntoView();
          }
        }, {
          key: "parseInput",
          value: function FilterableList_parseInput_() {
            var filterText = this.get("input").textString;
            var parsed = Array.from(filterText).reduce(function (state, _char) {
              if (_char === "\\" && !state.escaped) {
                state.escaped = true;
                return state;
              }

              if (_char === " " && !state.escaped) {
                if (!state.spaceSeen && state.current) {
                  state.tokens.push(state.current);
                  state.current = "";
                }

                state.spaceSeen = true;
              } else {
                state.spaceSeen = false;
                state.current += _char;
              }

              state.escaped = false;
              return state;
            }, {
              tokens: [],
              current: "",
              escaped: false,
              spaceSeen: false
            });
            parsed.current && parsed.tokens.push(parsed.current);
            var lowercasedTokens = parsed.tokens.map(function (ea) {
              return ea.toLowerCase();
            });
            return {
              tokens: parsed.tokens,
              lowercasedTokens: lowercasedTokens,
              input: filterText
            };
          }
        }, {
          key: "updateFilter",
          value: function FilterableList_updateFilter_() {
            var _this12 = this;

            var parsedInput = this.parseInput();
            var filterFunction = this.filterFunction;
            var sortFunction = this.sortFunction;
            var filteredItems = this.items.filter(function (item) {
              return filterFunction.call(_this12, parsedInput, item);
            });

            if (sortFunction) {
              filteredItems = __varRecorder__$5.arr.sortBy(filteredItems, function (ea) {
                return sortFunction.call(_this12, parsedInput, ea);
              });
            }

            var list = this.listMorph;
            var newSelectedIndexes = this.updateSelectionsAfterFilter ? list.selectedIndexes.map(function (i) {
              return filteredItems.indexOf(list.items[i]);
            }).filter(function (i) {
              return i !== -1;
            }) : list.selectedIndexes;
            list.items = filteredItems;
            list.selectedIndexes = newSelectedIndexes.length ? newSelectedIndexes : filteredItems.length ? [0] : [];
            this.scrollSelectionIntoView();

            __varRecorder__$5.signal(this, "filterChanged", {
              parsedInput: parsedInput,
              items: list.items
            });
          }
        }, {
          key: "acceptInput",
          value: function FilterableList_acceptInput_() {
            var list = this.listMorph;
            this.get("input").acceptInput();
            var result = {
              filtered: this.items,
              selected: list.selections,
              action: this.selectedAction,
              status: "accepted"
            };

            __varRecorder__$5.signal(this, "accepted", result);

            return result;
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Up|Ctrl-P",
              command: "arrow up"
            }, {
              keys: "Down|Ctrl-N",
              command: "arrow down"
            }, {
              keys: "Shift-Up",
              command: "select up"
            }, {
              keys: "Shift-Down",
              command: "select down"
            }, {
              keys: "Alt-V|PageUp",
              command: "page up"
            }, {
              keys: "PageDown",
              command: "page down"
            }, {
              keys: "Alt-Shift-,",
              command: "goto first item"
            }, {
              keys: "Alt-Shift-.",
              command: "goto last item"
            }, {
              keys: "Enter",
              command: "accept input"
            }, {
              keys: "Escape|Ctrl-G",
              command: "cancel"
            }, {
              keys: "Tab",
              command: "choose action"
            }].concat(_toConsumableArray(__varRecorder__$5.arr.range(0, 8).map(function (n) {
              return {
                keys: "Alt-" + (n + 1),
                command: {
                  command: "choose action and accept input",
                  args: {
                    actionNo: n
                  }
                }
              };
            }))).concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }, {
          key: "commands",
          get: function get() {
            var _this13 = this;

            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this).concat([{
              name: "accept input",
              exec: function exec(morph) {
                _this13.acceptInput();

                return true;
              }
            }, {
              name: "cancel",
              exec: function exec(morph) {
                __varRecorder__$5.signal(morph, "canceled");

                return true;
              }
            }, {
              name: "choose action and accept input",
              exec: function exec(flist) {
                var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var _args$actionNo = args.actionNo,
                    actionNo = _args$actionNo === void 0 ? 0 : _args$actionNo;
                flist.selectedAction = (flist.actions || [])[actionNo];
                return flist.execCommand("accept input");
              }
            }, {
              name: "choose action",
              exec: function () {
                var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(morph) {
                  var similarStyle, chooser, preselect;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (morph.actions) {
                            _context2.next = 2;
                            break;
                          }

                          return _context2.abrupt("return", true);

                        case 2:
                          similarStyle = Object.assign({}, morph.style, {
                            extent: morph.extent
                          });
                          chooser = new __varRecorder__$5.FilterableList(similarStyle);
                          chooser.openInWorld(morph.globalPosition);
                          chooser.items = morph.actions;
                          preselect = morph.actions.indexOf(morph.selectedAction);
                          if (preselect === -1) preselect = 0;
                          chooser.selectedIndex = preselect;

                          __varRecorder__$5.connect(chooser, "accepted", morph, "selectedAction", {
                            converter: function converter(result) {
                              this.targetObj.focus();
                              this.disconnect();
                              this.sourceObj.remove();
                              return result.selected[0];
                            }
                          });

                          __varRecorder__$5.connect(chooser, "canceled", morph, "selectedAction", {
                            converter: function converter(result) {
                              this.targetObj.focus();
                              this.disconnect();
                              this.sourceObj.remove();
                              return this.targetObj.selectedAction;
                            }
                          });

                          chooser.focus();
                          return _context2.abrupt("return", true);

                        case 13:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function exec(_x2) {
                  return _exec2.apply(this, arguments);
                }

                return exec;
              }()
            }].concat(_toConsumableArray(__varRecorder__$5.listCommands.map(function (cmd) {
              return Object.assign({}, cmd, {
                exec: function exec(morph, opts, count) {
                  return cmd.exec(_this13.listMorph, opts, count);
                }
              });
            }))));
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "FilterableList";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: __varRecorder__$5.Color.transparent
              },
              borderWidth: {
                defaultValue: 1
              },
              updateSelectionsAfterFilter: {
                defaultValue: false
              },
              theme: {
                after: ["styleClasses", "listMorph"],
                defaultValue: "default",
                set: function set(val) {
                  this.removeStyleClass(this.theme);
                  this.listMorph.removeStyleClass(this.theme);
                  this.addStyleClass(val);
                  this.listMorph.addStyleClass(val);
                  this.setProperty("theme", val);
                }
              },
              submorphs: {
                initialize: function initialize() {
                  var input = new __varRecorder__$5.InputLine({
                    name: "input",
                    highlightWhenFocused: false,
                    fixedHeight: false,
                    autofit: false
                  });
                  this.submorphs = [input, new __varRecorder__$5.morph({
                    name: "padding",
                    fill: __varRecorder__$5.Color.transparent
                  }), new __varRecorder__$5.List({
                    name: "list",
                    items: []
                  })];
                }
              },
              paddingMorph: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return this.getSubmorphNamed("padding");
                }
              },
              listMorph: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return this.getSubmorphNamed("list");
                }
              },
              inputMorph: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return this.getSubmorphNamed("input");
                }
              },
              fontFamily: {
                isStyleProp: true,
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.fontFamily;
                },
                set: function set(val) {
                  this.listMorph.fontFamily = val;
                  this.inputMorph.fontFamily = val;
                }
              },
              padding: {
                isStyleProp: true,
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.padding;
                },
                set: function set(val) {
                  this.listMorph.padding = val;
                  this.inputMorph.padding = val;
                }
              },
              fontSize: {
                isStyleProp: true,
                group: "styling",
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.fontSize;
                },
                set: function set(val) {
                  this.listMorph.fontSize = val;
                }
              },
              itemPadding: {
                isStyleProp: true,
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.itemPadding;
                },
                set: function set(val) {
                  this.listMorph.itemPadding = val;
                }
              },
              inputPadding: {
                isStyleProp: true,
                derived: true,
                after: ["submorphs", "padding"],
                get: function get() {
                  return this.inputMorph.padding;
                },
                set: function set(val) {
                  this.inputMorph.padding = val;
                }
              },
              input: {
                derived: true,
                after: ["submorphs"],
                defaultValue: "",
                get: function get() {
                  return this.inputMorph.input;
                },
                set: function set(val) {
                  this.inputMorph.input = val;
                }
              },
              historyId: {
                derived: true,
                after: ["submorphs"],
                defaultValue: null,
                get: function get() {
                  return this.inputMorph.historyId;
                },
                set: function set(val) {
                  this.inputMorph.historyId = val;
                }
              },
              multiSelect: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.multiSelect;
                },
                set: function set(multiSelect) {
                  this.listMorph.multiSelect = multiSelect;
                }
              },
              items: {
                after: ["submorphs", "fuzzy", "fuzzySortFunction", "fuzzyFilterFunction"],
                defaultValue: [],
                set: function set(items) {
                  this.setProperty("items", items.map(__varRecorder__$5.asItem));
                  this.updateFilter();
                }
              },
              visibleItems: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.items;
                }
              },
              selection: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.selection;
                },
                set: function set(x) {
                  this.listMorph.selection = x;
                }
              },
              selectedIndex: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.selectedIndex;
                },
                set: function set(x) {
                  this.listMorph.selectedIndex = x;
                }
              },
              selectedIndexes: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.selectedIndexes;
                },
                set: function set(x) {
                  this.listMorph.selectedIndexes = x;
                }
              },
              selectedItems: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.selectedItems;
                },
                set: function set(x) {
                  this.listMorph.selectedItems = x;
                }
              },
              selections: {
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  return this.listMorph.selections;
                },
                set: function set(x) {
                  this.listMorph.selections = x;
                }
              },
              fuzzy: {
                derived: true,
                after: ["filterFunction", "sortFunction"],
                set: function set(fuzzy) {
                  this.setProperty("fuzzy", fuzzy);

                  if (!fuzzy) {
                    if (this.sortFunction === this.fuzzySortFunction) {
                      this.sortFunction = null;
                    }

                    if (this.filterFunction === this.fuzzyFilterFunction) {
                      this.filterFunction = this.defaultFilterFunction;
                    }
                  } else {
                    if (!this.sortFunction) this.sortFunction = this.fuzzySortFunction;

                    if (this.filterFunction === this.defaultFilterFunction) {
                      this.filterFunction = this.fuzzyFilterFunction;
                    }
                  }
                }
              },
              filterFunction: {
                get: function get() {
                  var filterFunction = this.getProperty("filterFunction");
                  if (!filterFunction) return this.defaultFilterFunction;

                  if (typeof filterFunction === "string") {
                    filterFunction = eval("(".concat(filterFunction, ")"));
                  }

                  return filterFunction;
                }
              },
              sortFunction: {},
              defaultFilterFunction: {
                readOnly: true,
                get: function get() {
                  return this._defaultFilterFunction || (this._defaultFilterFunction = function (parsedInput, item) {
                    return parsedInput.lowercasedTokens.every(function (token) {
                      return item.string.toLowerCase().includes(token);
                    });
                  });
                }
              },
              fuzzySortFunction: {
                get: function get() {
                  var _this14 = this;

                  return this._fuzzySortFunction || (this._fuzzySortFunction = function (parsedInput, item) {
                    var prop = typeof _this14.fuzzy === "string" ? _this14.fuzzy : "string";
                    var fuzzyValue = String(__varRecorder__$5.Path(prop).get(item)).toLowerCase();
                    var base = 0;
                    parsedInput.lowercasedTokens.forEach(function (t) {
                      if (fuzzyValue.startsWith(t)) base -= 10;else if (fuzzyValue.includes(t)) base -= 5;
                    });
                    return __varRecorder__$5.arr.sum(parsedInput.lowercasedTokens.map(function (token) {
                      return __varRecorder__$5.string.levenshtein(fuzzyValue.toLowerCase(), token);
                    })) + base;
                  });
                }
              },
              fuzzyFilterFunction: {
                get: function get() {
                  var _this15 = this;

                  return this._fuzzyFilterFunction || (this._fuzzyFilterFunction = function (parsedInput, item) {
                    var prop = typeof _this15.fuzzy === "string" ? _this15.fuzzy : "string";
                    var tokens = parsedInput.lowercasedTokens;
                    if (tokens.every(function (token) {
                      return item.string.toLowerCase().includes(token);
                    })) return true;
                    var fuzzyValue = String(__varRecorder__$5.Path(prop).get(item)).toLowerCase();
                    return __varRecorder__$5.arr.sum(parsedInput.lowercasedTokens.map(function (token) {
                      return __varRecorder__$5.string.levenshtein(fuzzyValue, token);
                    })) <= 3;
                  });
                }
              },
              selectedAction: {
                get: function get() {
                  return this.getProperty("selectedAction") || "default";
                }
              },
              actions: {}
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 29758,
          end: 44415
        });
      }(__varRecorder__$5.Morph));
      __varRecorder__$5.FilterableList = FilterableList;
      __varRecorder__$5.FilterableList = FilterableList;
      var DropDownList$1 = exports('s', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DropDownList") && typeof __lively_classholder__.DropDownList === "function" ? __lively_classholder__.DropDownList : __lively_classholder__.DropDownList = function DropDownList(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "fitLabelMorph",
          value: function DropDownList_fitLabelMorph_() {}
        }, {
          key: Symbol["for"]("lively-instance-initialize"),
          value: function DropDownList_initialize_(props) {
            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);

            __varRecorder__$5.connect(this, "fire", this, "toggleList");

            return _this;
          }
        }, {
          key: "onLoad",
          value: function DropDownList_onLoad_() {
            if (!this.listMorph.selection) this.listMorph.selection = this.labelMorph.value[0];
          }
        }, {
          key: "isListVisible",
          value: function DropDownList_isListVisible_() {
            return !!this.listMorph.world();
          }
        }, {
          key: "removeWhenFocusLost",
          value: function DropDownList_removeWhenFocusLost_(evt) {
            var _this16 = this;

            setTimeout(function () {
              var list = _this16.listMorph;

              var focused = _this16.world() && _this16.world().focusedMorph;

              if (focused !== list && focused !== _this16 && list.world() && !list.withAllSubmorphsDetect(function (m) {
                return m === focused;
              })) {
                list.fadeOut(200);
              } else if (list.world()) {
                var target = __varRecorder__$5.touchInputDevice ? list.scroller : list;

                __varRecorder__$5.once(target, "onBlur", _this16, "removeWhenFocusLost");

                target.focus();
              }
            }, 100);
          }
        }, {
          key: "adjustLableFor",
          value: function DropDownList_adjustLableFor_(item) {
            var label = item.label || [item.string, null];
            label = [].concat(_toConsumableArray(label), [" ", null], _toConsumableArray(__varRecorder__$5.Icon.textAttribute("angle-" + (this.listAlign === "bottom" ? "down" : "up"))));

            if (label[5]) {
              label[5].paddingRight = "0px";
              label[5].textStyleClasses = ["fa", "annotation"];
            }

            this.label = label;
            this.relayout();
          }
        }, {
          key: "toggleList",
          value: function () {
            var _DropDownList_toggleList_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var list, bounds, totalItemHeight;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      list = this.listMorph;

                      if (this.isListVisible()) {
                        __varRecorder__$5.signal(this, "deactivated");

                        this.selection = list.selection;
                        list.epiMorph = false;
                        list.remove();
                      } else {
                        __varRecorder__$5.signal(this, "activated");

                        if (this.openListInWorld) {
                          list.openInWorld();
                          list.epiMorph = true;
                          list.hasFixedPosition = true;
                          list.setTransform(this.getGlobalTransform());
                          bounds = this.globalBounds();
                        } else {
                          bounds = this.innerBounds();
                          this.addMorph(list);
                        }

                        totalItemHeight = list.items.length * list.itemHeight + list.padding.top() + list.padding.bottom();
                        list.extent = __varRecorder__$5.pt(this.width, Math.min(this.listHeight, totalItemHeight));

                        if (this.listAlign === "top") {
                          list.bottomLeft = bounds.topLeft();
                        } else {
                          list.topLeft = bounds.bottomLeft();
                        }

                        list.moveBy(this.listOffset || __varRecorder__$5.pt(0, 0));

                        __varRecorder__$5.once(list, "onItemMorphClicked", this, "toggleList");

                        __varRecorder__$5.once(__varRecorder__$5.touchInputDevice ? list.scroller : list, "onBlur", this, "removeWhenFocusLost");

                        __varRecorder__$5.touchInputDevice ? list.scroller.focus() : list.focus();
                        list.scrollSelectionIntoView();
                      }

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function DropDownList_toggleList_() {
              return _DropDownList_toggleList_.apply(this, arguments);
            }

            return DropDownList_toggleList_;
          }()
        }, {
          key: "commands",
          get: function get() {
            var _this17 = this;

            return [{
              name: "accept",
              exec: function exec() {
                if (_this17.isListVisible()) _this17.toggleList();
                return true;
              }
            }, {
              name: "cancel",
              exec: function exec() {
                if (_this17.isListVisible()) _this17.listMorph.remove();
                return true;
              }
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this));
          }
        }, {
          key: "keybindings",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this).concat([{
              keys: "Enter",
              command: "accept"
            }, {
              keys: "Escape|Ctrl-G",
              command: "cancel"
            }]);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DropDownList";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              padding: {
                defaultValue: __varRecorder__$5.Rectangle.inset(3, 2)
              },
              listHeight: {
                defaultValue: 100
              },
              listAlign: {
                type: "Enum",
                values: ["bottom", "top"],
                defaultValue: "bottom"
              },
              listOffset: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.pt(0, 0)
              },
              openListInWorld: {
                defaultValue: false
              },
              listMorph: {
                after: ["labelMorph"],
                get: function get() {
                  var list = this.getProperty("listMorph");
                  if (list) return list;
                  list = new __varRecorder__$5.List({
                    name: "dropDownList"
                  });
                  this.setProperty("listMorph", list);
                  return list;
                }
              },
              items: {
                derived: true,
                after: ["listMorph"],
                get: function get() {
                  return this.listMorph.items;
                },
                set: function set(value) {
                  var _this18 = this;

                  var updateSelection = this.items.find(function (item) {
                    return item.value === _this18.selection;
                  });
                  this.listMorph.items = value;

                  if (updateSelection) {
                    __varRecorder__$5.noUpdate(function () {
                      _this18.selection = _this18.items[0].value;
                    });
                  }
                }
              },
              selection: {
                after: ["listMorph", "items"],
                derived: true,
                get: function get() {
                  return this.listMorph.selection;
                },
                set: function set(value) {
                  var listMorph = this.listMorph;

                  if (!value) {
                    listMorph.selection = null;
                    this.label = "";
                  } else {
                    var items = listMorph.items;
                    var item = listMorph.find(value);

                    if (!item && typeof value === "string") {
                      item = items.find(function (ea) {
                        return ea.string === value;
                      });
                    }

                    if (!item) return;
                    this.adjustLableFor(item);
                    listMorph.selectedIndex = items.indexOf(item);
                  }

                  __varRecorder__$5.signal(this, "selection", listMorph.selection);
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 44423,
          end: 49475
        });
      }(__varRecorder__$5.Button));
      __varRecorder__$5.DropDownList = DropDownList$1;
      __varRecorder__$5.DropDownList = DropDownList$1;
      var InteractiveItem = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InteractiveItem") && typeof __lively_classholder__.InteractiveItem === "function" ? __lively_classholder__.InteractiveItem : __lively_classholder__.InteractiveItem = function InteractiveItem(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "fit",
          value: function InteractiveItem_fit_() {}
        }, {
          key: "onHaloGrabover",
          value: function InteractiveItem_onHaloGrabover_(active) {
            this.list.showDropPreviewFor(this, active);
          }
        }, {
          key: "onDrop",
          value: function () {
            var _InteractiveItem_onDrop_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(evt) {
              var wrappedMorph;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.item.isPreview) {
                        wrappedMorph = evt.hand.grabbedMorphs[0];

                        initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDrop", this).call(this, evt);

                        this.list.addItemAt({
                          morph: wrappedMorph,
                          isListItem: true
                        }, this.itemIndex);
                        this.list.clearPreviews();
                      }

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function InteractiveItem_onDrop_(_x3) {
              return _InteractiveItem_onDrop_.apply(this, arguments);
            }

            return InteractiveItem_onDrop_;
          }()
        }, {
          key: "select",
          value: function InteractiveItem_select_() {
            this.list.selectedIndex = this.itemIndex;
            this.item.morph.focus();
          }
        }, {
          key: "onMouseDown",
          value: function InteractiveItem_onMouseDown_(evt) {
            if (!__varRecorder__$5.touchInputDevice) {
              this.select();
            } else {
              this._touchDown = Date.now();
            }
          }
        }, {
          key: "onMouseUp",
          value: function InteractiveItem_onMouseUp_(evt) {
            if (__varRecorder__$5.touchInputDevice && Date.now() - this._touchDown < 500) {
              this.select();
            }
          }
        }, {
          key: "displayItem",
          value: function InteractiveItem_displayItem_(item, itemIndex, goalWidth, itemHeight, pos) {
            var isSelected = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            var style = arguments.length > 6 ? arguments[6] : undefined;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "displayItem", this).call(this, item, itemIndex, goalWidth, itemHeight, pos, isSelected, style);

            if (item.morph) item.morph.selected = isSelected;
          }
        }, {
          key: "onGrab",
          value: function InteractiveItem_onGrab_(evt) {
            var list = this.list;
            var hasHaloAttached = evt.halo && evt.halo.target === this;
            if (hasHaloAttached) evt.halo.detachFromTarget();
            var copy = this.submorphs.length ? this.submorphs[0] : __varRecorder__$5.morph({
              type: "label",
              value: this.value
            });
            evt.hand.grab(copy);
            copy.position = evt.hand.localize(this.globalPosition);
            if (hasHaloAttached) evt.halo.refocus(copy);
            list.removeItem(this.list.items[this.itemIndex]);
            list.itemMorphs.forEach(function (m) {
              return m.remove();
            });
            list.update();
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InteractiveItem";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              draggable: {
                defaultValue: !__varRecorder__$5.touchInputDevice
              },
              item: {
                derived: true,
                get: function get() {
                  return this.list.items[this.itemIndex];
                }
              },
              list: {
                derived: true,
                get: function get() {
                  return this.owner.owner;
                }
              },
              isListItem: {
                get: function get() {
                  return true;
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 49483,
          end: 51708
        });
      }(__varRecorder__$5.ListItemMorph);
      __varRecorder__$5.InteractiveItem = InteractiveItem;
      __varRecorder__$5.InteractiveItem = InteractiveItem;
      var MorphList = exports('M', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphList") && typeof __lively_classholder__.MorphList === "function" ? __lively_classholder__.MorphList : __lively_classholder__.MorphList = function MorphList(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "onLoad",
          value: function MorphList_onLoad_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onLoad", this).call(this);

            this.clipMode = this.touchInput ? "auto" : "hidden";
          }
        }, {
          key: "showDropPreviewFor",
          value: function MorphList_showDropPreviewFor_(itemMorph, active) {
            var idx = itemMorph.itemIndex;
            var hoveredItem = this.items[idx];
            if (hoveredItem.isPreview && active) return;
            this.clearPreviews();
            if (!active) return;
            this.addItemAt({
              isListItem: true,
              isPreview: true,
              morph: __varRecorder__$5.morph({
                reactsToPointer: false,
                acceptsDrops: false,
                width: this.width - 5,
                height: this.itemHeight,
                fill: __varRecorder__$5.Color.orange.withA(0.5)
              })
            }, idx);
          }
        }, {
          key: "clearPreviews",
          value: function MorphList_clearPreviews_() {
            var _this19 = this;

            this.items.filter(function (m) {
              return m.morph && m.morph.owner && !__varRecorder__$5.Path("morph.owner.isListItem").get(m);
            }).map( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(m) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this19.removeItem(m));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x4) {
                return _ref.apply(this, arguments);
              };
            }());
            this.items.filter(function (m) {
              return m.isPreview;
            }).map(function (p) {
              return _this19.removeItem(p);
            });
          }
        }, {
          key: "update",
          value: function MorphList_update_() {
            var _this20 = this;

            var items = this.items;
            if (!items) return;
            if (!this.listItemContainer) return;
            if (this.scroller) this.scroller.visible = false;
            this.dontRecordChangesWhile(function () {
              var itemHeight = _this20.itemHeight,
                  itemMorphs = _this20.itemMorphs,
                  listItemContainer = _this20.listItemContainer,
                  selectedIndexes = _this20.selectedIndexes,
                  _this20$extent = _this20.extent,
                  width = _this20$extent.x,
                  height = _this20$extent.y,
                  fontSize = _this20.fontSize,
                  fontFamily = _this20.fontFamily,
                  fontColor = _this20.fontColor,
                  _this20$padding = _this20.padding,
                  padding = _this20$padding === void 0 ? Rectangle.inset(0) : _this20$padding,
                  itemPadding = _this20.itemPadding,
                  selectionColor = _this20.selectionColor,
                  selectionFontColor = _this20.selectionFontColor,
                  nonSelectionFontColor = _this20.nonSelectionFontColor,
                  itemBorderRadius = _this20.itemBorderRadius,
                  scrollBar = _this20.scrollBar;
              var top = _this20.scroll.y;
              var padTop = padding.top();
              var padLeft = padding.left();
              var padBottom = padding.bottom();
              var padRight = padding.right();
              var firstItemIndex = Math.max(0, Math.floor(top / itemHeight));
              var lastItemIndex = Math.min(items.length, Math.ceil((top + height) / itemHeight));
              var maxWidth = 0;
              var goalWidth = width - (padLeft + padRight);
              var rest, upper, lower;
              itemMorphs = __varRecorder__$5.arr.sortBy(itemMorphs, function (m) {
                return m.itemIndex;
              });

              var _varRecorder__$arr$p5 = __varRecorder__$5.arr.partition(itemMorphs, function (m) {
                return m.itemIndex < firstItemIndex;
              });

              var _varRecorder__$arr$p6 = _slicedToArray(_varRecorder__$arr$p5, 2);

              upper = _varRecorder__$arr$p6[0];
              rest = _varRecorder__$arr$p6[1];

              var _varRecorder__$arr$p7 = __varRecorder__$5.arr.partition(rest, function (m) {
                return m.itemIndex > lastItemIndex;
              });

              var _varRecorder__$arr$p8 = _slicedToArray(_varRecorder__$arr$p7, 2);

              lower = _varRecorder__$arr$p8[0];
              rest = _varRecorder__$arr$p8[1];
              itemMorphs = [].concat(_toConsumableArray(lower), _toConsumableArray(rest), _toConsumableArray(upper));
              var style = {
                fontSize: fontSize,
                fontFamily: fontFamily,
                fontColor: nonSelectionFontColor || fontColor,
                padding: itemPadding || __varRecorder__$5.Rectangle.inset(0),
                borderRadius: itemBorderRadius || 0,
                selectionFontColor: selectionFontColor,
                nonSelectionFontColor: nonSelectionFontColor,
                selectionColor: selectionColor
              };

              if (itemMorphs.length && lastItemIndex - firstItemIndex > itemMorphs.length) {
                if (firstItemIndex !== itemMorphs[0].itemIndex) {
                  __varRecorder__$5.arr.pushAt(itemMorphs, listItemContainer.addMorph(new __varRecorder__$5.InteractiveItem(style)), 0);
                } else if (lastItemIndex === __varRecorder__$5.arr.last(itemMorphs).itemIndex) {
                  itemMorphs.push(listItemContainer.addMorph(new __varRecorder__$5.InteractiveItem(style)));
                }
              }

              for (var i = 0; i < lastItemIndex - firstItemIndex; i++) {
                var itemIndex = firstItemIndex + i;
                var item = items[itemIndex];

                if (!item) {
                  itemMorphs.slice(i).forEach(function (itemMorph) {
                    return itemMorph.remove();
                  });
                  break;
                }

                var itemMorph = itemMorphs[i];

                if (!itemMorph) {
                  itemMorph = itemMorphs[i] = listItemContainer.addMorph(new __varRecorder__$5.InteractiveItem(style));
                  itemMorph.clipMode = "visible";
                }

                itemMorph.displayItem(item, itemIndex, goalWidth, itemHeight, __varRecorder__$5.pt(0, itemHeight * itemIndex), selectedIndexes.includes(itemIndex), style);
                maxWidth = Math.max(maxWidth, itemMorph.width);
              }

              var containerExtent;
              var scrollHeight = Math.max(padTop + padBottom + itemHeight * items.length, _this20.height);
              containerExtent = __varRecorder__$5.pt(_this20.width, scrollHeight).subPt(__varRecorder__$5.pt(padLeft + padRight, 0));
              listItemContainer.setBounds(__varRecorder__$5.pt(padLeft, padTop).extent(containerExtent));
              scrollBar.left = maxWidth - 10;
              scrollBar.fill = null;
              scrollBar.top = 0;
              scrollBar.extent = __varRecorder__$5.pt(1, scrollHeight);
            });
          }
        }, {
          key: "onHoverIn",
          value: function MorphList_onHoverIn_(evt) {
            this.clipMode = "auto";
          }
        }, {
          key: "onHoverOut",
          value: function MorphList_onHoverOut_(evt) {
            if (this.touchInput) return;
            this.clipMode = "hidden";
          }
        }, {
          key: "onScroll",
          value: function MorphList_onScroll_(evt) {
            this.update();
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphList";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              touchInput: {
                get: function get() {
                  return __varRecorder__$5.touchInputDevice;
                }
              },
              items: {
                group: "list",
                defaultValue: [],
                after: ["submorphs"],
                set: function set(items) {
                  this.setProperty("items", items.map(__varRecorder__$5.asItem));
                  this.itemMorphs.forEach(function (m) {
                    return m.remove();
                  });
                  this.update();

                  if (this.attributeConnections) {
                    __varRecorder__$5.signal(this, "values", this.values);
                  }
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 51716,
          end: 57013
        });
      }(__varRecorder__$5.List));
      __varRecorder__$5.MorphList = MorphList;
      __varRecorder__$5.MorphList = MorphList;
      var DropDownListModel = exports('N', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/list.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DropDownListModel") && typeof __lively_classholder__.DropDownListModel === "function" ? __lively_classholder__.DropDownListModel : __lively_classholder__.DropDownListModel = function DropDownListModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "initListMorph",
          value: function DropDownListModel_initListMorph_() {
            this.listMorph = this.listMaster ? __varRecorder__$5.part(this.listMaster, {
              isLayoutable: false,
              name: "dropDownList",
              viewModel: {
                items: this.items
              }
            }) : new __varRecorder__$5.List({
              items: this.items
            });
          }
        }, {
          key: "__additionally_serialize__",
          value: function DropDownListModel___additionally_serialize___(snapshot, ref, pool, addFn) {
            var meta = this.listMaster && this.listMaster[Symbol["for"]("lively-module-meta")];

            if (meta) {
              addFn("listMaster", pool.expressionSerializer.exprStringEncode({
                __expr__: meta["export"],
                bindings: _defineProperty({}, meta.module, meta["export"])
              }));
            }
          }
        }, {
          key: "viewDidLoad",
          value: function DropDownListModel_viewDidLoad_() {
            this.onRefresh("selection");
          }
        }, {
          key: "updateListMorphIfNeeded",
          value: function DropDownListModel_updateListMorphIfNeeded_() {
            var itemsInList = this.listMorph.items,
                items = this.items;
            var itemsChanged = !__varRecorder__$5.obj.equals(itemsInList.map(function (m) {
              return m.value;
            }), items.map(function (m) {
              return m.value;
            }));

            if (itemsChanged) {
              this.listMorph.items = items;
              return true;
            }
          }
        }, {
          key: "onRefresh",
          value: function DropDownListModel_onRefresh_(prop) {
            var listMorph = this.listMorph;
            if (!listMorph) return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onRefresh", this).call(this, prop);

            if (this.updateListMorphIfNeeded() || prop === "selection" || prop === "items") {
              var sel = this.selection;

              if (!sel) {
                listMorph.selection = null;
                this.label = {
                  value: ""
                };
              } else {
                var items = listMorph.items;
                var item = listMorph.find(sel);

                if (!item && typeof sel === "string") {
                  item = items.find(function (ea) {
                    return ea.string === sel;
                  });
                }

                if (!item) return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onRefresh", this).call(this, prop);
                this.adjustLableFor(item);
                listMorph.selectedIndex = items.indexOf(item);
              }
            }

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onRefresh", this).call(this, prop);
          }
        }, {
          key: "attach",
          value: function DropDownListModel_attach_(view) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "attach", this).call(this, view);

            if (!this.selection && this.items.length > 0) {
              this.selection = this.items[0].value;
            }
          }
        }, {
          key: "isListVisible",
          value: function DropDownListModel_isListVisible_() {
            return !!this.listMorph.world();
          }
        }, {
          key: "removeWhenFocusLost",
          value: function DropDownListModel_removeWhenFocusLost_(evt) {
            var _this21 = this;

            setTimeout(function () {
              var list = _this21.listMorph;

              var focused = _this21.world() && _this21.world().focusedMorph;

              if (focused !== list && focused !== _this21.view && list.world() && !list.withAllSubmorphsDetect(function (m) {
                return m === focused;
              })) {
                list.fadeOut(200);
              } else if (list.world()) {
                var target = __varRecorder__$5.touchInputDevice ? list.scroller : list;

                __varRecorder__$5.once(target, "onBlur", _this21, "removeWhenFocusLost");

                target.focus();
              }
            }, 100);
          }
        }, {
          key: "adjustLableFor",
          value: function DropDownListModel_adjustLableFor_(item) {
            var label = item.label || [item.string, null];

            var caret = __varRecorder__$5.Icon.textAttribute("angle-down", {});

            if (this.listAlign !== "selection") {
              caret = __varRecorder__$5.Icon.textAttribute("angle-" + (this.listAlign === "bottom" ? "down" : "up"), {
                paddingTop: this.listAlign === "bottom" ? "0px" : "2px"
              });
            }

            label = [].concat(_toConsumableArray(label), [" ", null], _toConsumableArray(caret));

            if (label[5]) {
              label[5].paddingRight = "0px";
              label[5].textStyleClasses = ["fa", "annotation"];
            }

            this.label = {
              value: label
            };
          }
        }, {
          key: "isMixed",
          get: function get() {
            var _this$label;

            return ((_this$label = this.label) === null || _this$label === void 0 ? void 0 : _this$label.value[0]) === "Mix";
          }
        }, {
          key: "setMixed",
          value: function DropDownListModel_setMixed_() {
            var caret = __varRecorder__$5.Icon.textAttribute("angle-down", {});

            this.label = {
              value: ["Mixed ", null].concat(_toConsumableArray(caret))
            };
          }
        }, {
          key: "toggleList",
          value: function () {
            var _DropDownListModel_toggleList_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var list, bounds, view, totalItemHeight;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      list = this.listMorph;
                      view = this.view;
                      list.isHaloItem = true;

                      if (this.isListVisible()) {
                        __varRecorder__$5.signal(this, "deactivated");

                        this.selection = list.selection;
                        list.epiMorph = false;
                        list.remove();
                      } else {
                        __varRecorder__$5.signal(this, "activated");

                        if (this.openListInWorld) {
                          list.openInWorld();
                          list.epiMorph = true;
                          list.hasFixedPosition = true;
                          list.setTransform(view.getGlobalTransform());
                          list.styleClasses = ["Popups"];
                          bounds = view.globalBounds();
                        } else {
                          bounds = view.innerBounds();
                          view.addMorph(list);
                        }

                        totalItemHeight = list.items.length * list.itemHeight + list.padding.top() + list.padding.bottom();
                        list.extent = __varRecorder__$5.pt(view.width, Math.min(this.listHeight, totalItemHeight));

                        if (this.listAlign === "top") {
                          list.bottomLeft = bounds.topLeft().addPt(this.listOffset || __varRecorder__$5.pt(0, 0));
                        } else if (this.listAlign === "bottom") {
                          list.topLeft = bounds.bottomLeft().addPt(this.listOffset || __varRecorder__$5.pt(0, 0));
                        } else {
                          list.topLeft = bounds.topLeft().subXY(0, list.itemHeight * (list.selectedIndex || 0));
                        }

                        __varRecorder__$5.once(list, "onItemMorphClicked", this, "toggleList");

                        __varRecorder__$5.once(__varRecorder__$5.touchInputDevice ? list.scroller : list, "onBlur", this, "removeWhenFocusLost");

                        __varRecorder__$5.touchInputDevice ? list.scroller.focus() : list.focus();
                        list.scrollSelectionIntoView();
                      }

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function DropDownListModel_toggleList_() {
              return _DropDownListModel_toggleList_.apply(this, arguments);
            }

            return DropDownListModel_toggleList_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DropDownListModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              listHeight: {
                defaultValue: 100
              },
              listMaster: {
                isComponent: true,
                set: function set(c) {
                  this.setProperty("listMaster", c);
                  if (this.listMorph) this.listMorph.remove();
                  this.initListMorph();
                }
              },
              listAlign: {
                type: "Enum",
                values: ["bottom", "top", "selection"],
                defaultValue: "bottom"
              },
              action: {
                get: function get() {
                  var _this22 = this;

                  return function () {
                    _this22.toggleList();
                  };
                }
              },
              listOffset: {
                isStyleProp: true,
                defaultValue: __varRecorder__$5.pt(0, 0)
              },
              openListInWorld: {
                defaultValue: false
              },
              listMorph: {
                after: ["listMaster"],
                serialize: false,
                initialize: function initialize() {
                  this.initListMorph();
                }
              },
              items: {
                initialize: function initialize() {
                  this.items = [];
                },
                set: function set(items) {
                  items = items.map(__varRecorder__$5.asItem);
                  this.setProperty("items", items);
                  if (!this.selection && items.length > 0) this.selection = items[0].value;
                }
              },
              selection: {
                set: function set(sel) {
                  if (this.selection !== sel) this.setProperty("selection", sel);
                }
              },
              expose: {
                get: function get() {
                  return ["keybindings", "commands", "items", "selection", "setMixed", "isMixed", "enable", "disable"];
                }
              },
              commands: {
                get: function get() {
                  var _this23 = this;

                  return [{
                    name: "accept",
                    exec: function exec() {
                      if (_this23.isListVisible()) _this23.toggleList();
                      return true;
                    }
                  }, {
                    name: "cancel",
                    exec: function exec() {
                      if (_this23.isListVisible()) _this23.listMorph.remove();
                      return true;
                    }
                  }];
                }
              },
              keybindings: {
                get: function get() {
                  return [{
                    keys: "Enter",
                    command: "accept"
                  }, {
                    keys: "Escape|Ctrl-G",
                    command: "cancel"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./list.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 57037,
          end: 64092
        });
      }(__varRecorder__$5.ButtonModel));
      __varRecorder__$5.DropDownListModel = DropDownListModel;
      __varRecorder__$5.DropDownListModel = DropDownListModel;

      var __captured1__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        asItem: asItem,
        ListItemMorph: ListItemMorph,
        ListScroller: ListScroller,
        List: List,
        FilterableList: FilterableList,
        DropDownList: DropDownList$1,
        InteractiveItem: InteractiveItem,
        MorphList: MorphList,
        DropDownListModel: DropDownListModel
      });
      exports('_', __captured1__);

      var __varRecorder__$4 = lively.FreezerRuntime.recorderFor("lively.components/list.cp.js");
      __varRecorder__$4.pt = pt;
      __varRecorder__$4.rect = rect;
      __varRecorder__$4.Color = Color;
      __varRecorder__$4.List = List;
      __varRecorder__$4.DropDownListModel = DropDownListModel;
      __varRecorder__$4.MorphList = MorphList;
      __varRecorder__$4.ShadowObject = ShadowObject;
      __varRecorder__$4.component = component;
      __varRecorder__$4.SystemButtonDark = SystemButtonDark;
      __varRecorder__$4.SystemButton = SystemButton;
      __varRecorder__$4.DefaultList = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component({
          type: __varRecorder__$4.List,
          name: "default list",
          borderColor: __varRecorder__$4.Color.rgb(149, 165, 166),
          extent: __varRecorder__$4.pt(226.5, 93.5),
          itemHeight: 20,
          itemPadding: __varRecorder__$4.rect(3, 2, -2, -1),
          manualItemHeight: true
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DefaultList",
        range: {
          start: 245,
          end: 701
        }
      }, __varRecorder__$4.DefaultList);
      __varRecorder__$4.DarkList = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.DefaultList, {
          name: "dark list",
          borderColor: __varRecorder__$4.Color.rgb(149, 165, 166),
          borderRadius: 4,
          dropShadow: new __varRecorder__$4.ShadowObject({
            distance: 3,
            rotation: 75,
            color: __varRecorder__$4.Color.rgba(0, 0, 0, 0.2)
          }),
          extent: __varRecorder__$4.pt(194, 91.9),
          fill: __varRecorder__$4.Color.rgba(66, 73, 73, 0.85),
          fontFamily: "IBM Plex Mono",
          nonSelectionFontColor: __varRecorder__$4.Color.rgb(204, 204, 204),
          selectionColor: __varRecorder__$4.Color.rgb(230, 230, 230),
          selectionFontColor: __varRecorder__$4.Color.rgb(0, 0, 0)
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DarkList",
        range: {
          start: 709,
          end: 1168
        }
      }, __varRecorder__$4.DarkList);
      __varRecorder__$4.DropDownList = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.SystemButton, {
          defaultViewModel: __varRecorder__$4.DropDownListModel,
          name: "drop down list"
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DropDownList",
        range: {
          start: 1176,
          end: 1283
        }
      }, __varRecorder__$4.DropDownList);
      __varRecorder__$4.DarkDropDownList = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.SystemButtonDark, {
          name: "dark drop down list",
          defaultViewModel: __varRecorder__$4.DropDownListModel
        });
      }, {
        module: "lively.components/list.cp.js",
        "export": "DarkDropDownList",
        range: {
          start: 1291,
          end: 1411
        }
      }, __varRecorder__$4.DarkDropDownList);
      var DefaultList = exports('v', __varRecorder__$4.DefaultList);
      var DarkList = exports('O', __varRecorder__$4.DarkList);
      var DropDownList = exports('k', __varRecorder__$4.DropDownList);
      var DarkDropDownList = exports('l', __varRecorder__$4.DarkDropDownList);
      __varRecorder__$4.DefaultList = DefaultList;
      __varRecorder__$4.DarkList = DarkList;
      __varRecorder__$4.DropDownList = DropDownList;
      __varRecorder__$4.DarkDropDownList = DarkDropDownList;
      __varRecorder__$4.MorphList = MorphList;

      var __varRecorder__$3 = lively.FreezerRuntime.recorderFor("lively.ide/value-widgets.cp.js");
      __varRecorder__$3.Color = Color;
      __varRecorder__$3.rect = rect;
      __varRecorder__$3.pt = pt;
      __varRecorder__$3.TilingLayout = TilingLayout;
      __varRecorder__$3.ViewModel = ViewModel;
      __varRecorder__$3.ShadowObject = ShadowObject;
      __varRecorder__$3.Icon = Icon;
      __varRecorder__$3.Label = Label;
      __varRecorder__$3.component = component;
      __varRecorder__$3.part = part;
      __varRecorder__$3.obj = obj;
      __varRecorder__$3.num = num;
      __varRecorder__$3.SystemTooltip = SystemTooltip;
      __varRecorder__$3.signal = signal;
      __varRecorder__$3.CaretButton = __varRecorder__$3.component["for"](function () {
        return __varRecorder__$3.component({
          name: "caret button",
          borderColor: __varRecorder__$3.Color.rgb(23, 160, 251),
          clipMode: "hidden",
          extent: __varRecorder__$3.pt(20, 12),
          fill: __varRecorder__$3.Color.rgba(0, 0, 0, 0),
          nativeCursor: "pointer",
          submorphs: [{
            type: __varRecorder__$3.Label,
            name: "icon",
            borderColor: __varRecorder__$3.Color.rgba(0, 0, 0, 0),
            borderWidth: 1,
            fontColor: __varRecorder__$3.Color.rgb(127, 140, 141),
            nativeCursor: "pointer",
            padding: __varRecorder__$3.rect(5, 0, -1, -1),
            reactsToPointer: false,
            textAndAttributes: __varRecorder__$3.Icon.textAttribute("sort-up")
          }]
        });
      }, {
        module: "lively.ide/value-widgets.cp.js",
        "export": "CaretButton",
        range: {
          start: 304,
          end: 800
        }
      }, __varRecorder__$3.CaretButton);
      var NumberWidgetModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/value-widgets.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("NumberWidgetModel") && typeof __lively_classholder__.NumberWidgetModel === "function" ? __lively_classholder__.NumberWidgetModel : __lively_classholder__.NumberWidgetModel = function NumberWidgetModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "increment",
          value: function NumberWidgetModel_increment_() {
            if (this.max !== undefined && this.number >= this.max) return;
            this.number += 1 / this.scaleFactor;
          }
        }, {
          key: "decrement",
          value: function NumberWidgetModel_decrement_() {
            if (this.min !== undefined && this.number <= this.min) return;
            this.number -= 1 / this.scaleFactor;
          }
        }, {
          key: "setMixed",
          value: function NumberWidgetModel_setMixed_() {
            this.ui.value.textString = "Mix";
          }
        }, {
          key: "isMixed",
          get: function get() {
            return this.ui.value.textString === "Mix";
          }
        }, {
          key: "getCurrentValue",
          value: function NumberWidgetModel_getCurrentValue_(delta, s) {
            var v = this.scrubbedValue + (this.floatingPoint ? delta * s : Math.round(delta * s));
            v /= this.scaleFactor;
            return Math.max(this.min, Math.min(this.max, v));
          }
        }, {
          key: "getScaleAndOffset",
          value: function NumberWidgetModel_getScaleAndOffset_(evt) {
            var _evt$position$subPt = evt.position.subPt(this.initPos),
                x = _evt$position$subPt.x,
                y = _evt$position$subPt.y;

            var scale = __varRecorder__$3.num.roundTo(Math.exp(-y / $world.height * 4), 0.01) * this.baseFactor;
            return {
              offset: x,
              scale: scale
            };
          }
        }, {
          key: "interactivelyEdit",
          value: function NumberWidgetModel_interactivelyEdit_() {
            this.ui.value.readOnly = false;
            this.ui.value.focus();
          }
        }, {
          key: "onInput",
          value: function NumberWidgetModel_onInput_(evt) {
            if (evt.keyCombo === "Enter") {
              var _this$ui$value$textSt = this.ui.value.textString.replace("\n", "").split(" "),
                  _this$ui$value$textSt2 = _slicedToArray(_this$ui$value$textSt, 1),
                  v = _this$ui$value$textSt2[0];

              if (typeof v === "string") {
                this.number = parseFloat(v) / this.scaleFactor;
              }

              this.ui.value.readOnly = true;
              evt.stop();
            }
          }
        }, {
          key: "onScrubStart",
          value: function NumberWidgetModel_onScrubStart_(evt) {
            this.view.execCommand("toggle active mark");
            this.initPos = evt.position;
            this.scrubbedValue = this.floatingPoint ? this.number * this.scaleFactor : __varRecorder__$3.num.roundTo(this.number * this.scaleFactor, 1);
            this.factorLabel = __varRecorder__$3.part(__varRecorder__$3.SystemTooltip, {
              description: "1x"
            }).openInWorld(evt.hand.position.addXY(10, 10));
            evt.hand.extent = __varRecorder__$3.pt(30, 30);
            evt.hand.nativeCursor = "ew-resize";
            evt.hand.fill = __varRecorder__$3.Color.transparent;
            evt.hand.reactsToPointer = true;
          }
        }, {
          key: "onScrub",
          value: function NumberWidgetModel_onScrub_(evt) {
            var _this$getScaleAndOffs = this.getScaleAndOffset(evt),
                scale = _this$getScaleAndOffs.scale,
                offset = _this$getScaleAndOffs.offset;

            this.number = this.getCurrentValue(offset, scale);
            this.factorLabel.description = scale.toFixed(this.precision) + "x";
            this.factorLabel.position = evt.hand.position.addXY(10, 10);
            evt.hand.moveBy(__varRecorder__$3.pt(-5, -5));
          }
        }, {
          key: "onScrubEnd",
          value: function NumberWidgetModel_onScrubEnd_(evt) {
            var _this$getScaleAndOffs2 = this.getScaleAndOffset(evt),
                offset = _this$getScaleAndOffs2.offset,
                scale = _this$getScaleAndOffs2.scale;

            this.scrubbedValue = this.getCurrentValue(offset, scale) * this.scaleFactor;
            this.factorLabel.softRemove();
            evt.hand.extent = __varRecorder__$3.pt(1, 1);
            evt.hand.reactsToPointer = false;
          }
        }, {
          key: "updateDisplayedValue",
          value: function NumberWidgetModel_updateDisplayedValue_(v) {
            v = Math.max(this.min, Math.min(this.max, v));

            if (!this.isBeingDragged) {
              this.scrubbedValue = v;
            }

            this.renderValue(v);
          }
        }, {
          key: "renderValue",
          value: function NumberWidgetModel_renderValue_(v) {
            v *= this.scaleFactor;
            var valueString = this.floatingPoint ? v.toFixed(this.precision) : v.toFixed(0);
            if (this.unit) valueString += " " + this.unit;
            var value = this.ui.value;
            value.textString = valueString;

            if (this.autofit && valueString.length > 0) {
              if (!this._digitWidth) {
                this._digitWidth = value.textBounds().width / value.textString.length;
              }

              var p = Math.min(this.spaceToDisplay / (valueString.length * this._digitWidth), 1);
              value.scale = p;
            } else {
              if (value.scale < 1) value.scale = 1;
            }
          }
        }, {
          key: "onRefresh",
          value: function NumberWidgetModel_onRefresh_(prop) {
            if (prop == "number") this.renderValue(this.number);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "NumberWidgetModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              unit: {
                type: "Enum",
                values: ["px", "%", "pt", ""]
              },
              autofit: {
                defaultValue: false
              },
              number: {
                defaultValue: 0,
                after: ["unit", "autofit"],
                set: function set(v) {
                  this.setProperty("number", v);

                  __varRecorder__$3.signal(this.view, "number", v);

                  __varRecorder__$3.signal(this.view, "numberChanged", v);
                }
              },
              precision: {
                defaultValue: 0
              },
              min: {
                defaultValue: -Infinity,
                set: function set(v) {
                  if (isNaN(v)) {
                    return;
                  }

                  this.setProperty("min", v);
                }
              },
              max: {
                defaultValue: Infinity,
                set: function set(v) {
                  if (isNaN(v)) {
                    return;
                  }

                  this.setProperty("max", v);
                }
              },
              floatingPoint: {
                after: ["number"],
                defaultValue: false,
                get: function get() {
                  if (typeof this.getProperty("floatingPoint") !== "undefined") {
                    return this.getProperty("floatingPoint");
                  }

                  var m = /[+-]?([0-9]*[.])?[0-9]+/.exec(this.number);
                  return this.scaleFactor === 1 && m && !!m[1];
                }
              },
              scaleFactor: {
                defaultValue: 1
              },
              baseFactor: {
                defaultValue: 1
              },
              isSelected: {
                set: function set(selected) {
                  if (this.getProperty("isSelected") !== selected) {
                    var view = this.view;

                    if (selected) {
                      view.addStyleClass("selected");
                      view.removeStyleClass("unselected");
                    } else {
                      view.removeStyleClass("selected");
                      view.addStyleClass("unselected");
                    }

                    this.setProperty("isSelected", selected);
                  }
                }
              },
              spaceToDisplay: {
                get: function get() {
                  if (this.ui.up) return this.ui.up.left;
                  return this.view.width;
                }
              },
              showStepControls: {
                derived: true,
                get: function get() {
                  var _this$ui = this.ui,
                      up = _this$ui.up,
                      down = _this$ui.down;
                  return up && up.visible && down && down.visible;
                },
                set: function set(active) {
                  this.ui.up.visible = this.ui.down.visible = active;
                  this.clipMode = active ? "visible" : "hidden";
                }
              },
              expose: {
                get: function get() {
                  return ["number", "increment", "decrement", "isMixed", "setMixed"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    target: "value",
                    signal: "onDragStart",
                    handler: "onScrubStart"
                  }, {
                    target: "value",
                    signal: "onDrag",
                    handler: "onScrub"
                  }, {
                    target: "value",
                    signal: "onDragEnd",
                    handler: "onScrubEnd"
                  }, {
                    target: "value",
                    signal: "onKeyDown",
                    handler: "onInput"
                  }, {
                    target: "value",
                    signal: "onMouseUp",
                    handler: "interactivelyEdit"
                  }, {
                    target: "up",
                    signal: "onMouseDown",
                    handler: "increment"
                  }, {
                    target: "down",
                    signal: "onMouseDown",
                    handler: "decrement"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./value-widgets.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.ide",
              version: "0.1.0"
            };
          }
        }, {
          start: 809,
          end: 8414
        });
      }(__varRecorder__$3.ViewModel);
      __varRecorder__$3.NumberWidgetModel = NumberWidgetModel;
      __varRecorder__$3.NumberWidgetModel = NumberWidgetModel;
      __varRecorder__$3.DefaultNumberWidget = __varRecorder__$3.component["for"](function () {
        return __varRecorder__$3.component({
          defaultViewModel: __varRecorder__$3.NumberWidgetModel,
          name: "default number widget",
          borderColor: __varRecorder__$3.Color.rgb(149, 165, 166),
          borderRadius: 4,
          dropShadow: new __varRecorder__$3.ShadowObject({
            color: __varRecorder__$3.Color.rgba(0, 0, 0, 0.26)
          }),
          extent: __varRecorder__$3.pt(72.5, 25.7),
          fill: __varRecorder__$3.Color.rgb(253, 254, 254),
          fontColor: __varRecorder__$3.Color.rgb(178, 235, 242),
          fontFamily: "IBM Plex Sans",
          fontSize: 16,
          clipMode: "hidden",
          layout: new __varRecorder__$3.TilingLayout({
            axisAlign: "center",
            orderByIndex: true,
            resizePolicies: [["value", {
              height: "fixed",
              width: "fill"
            }]]
          }),
          padding: __varRecorder__$3.rect(6, 2, -6, -2),
          submorphs: [{
            type: "text",
            name: "value",
            fill: __varRecorder__$3.Color.transparent,
            extent: __varRecorder__$3.pt(53.6, 24),
            fixedWidth: true,
            selectable: true,
            readOnly: true,
            fontColor: __varRecorder__$3.Color.rgb(40, 116, 166),
            fontFamily: "IBM Plex Sans",
            fontSize: 16,
            padding: __varRecorder__$3.rect(6, 2, -6, -2),
            scaleToBounds: true,
            draggable: true,
            textAndAttributes: ["0", null]
          }, {
            name: "button holder",
            fill: __varRecorder__$3.Color.transparent,
            layout: new __varRecorder__$3.TilingLayout({
              axis: "column"
            }),
            submorphs: [__varRecorder__$3.part(__varRecorder__$3.CaretButton, {
              name: "up",
              submorphs: [{
                name: "icon",
                padding: __varRecorder__$3.rect(6, 0, -2, -1),
                textAndAttributes: __varRecorder__$3.Icon.textAttribute("sort-up")
              }]
            }), __varRecorder__$3.part(__varRecorder__$3.CaretButton, {
              name: "down",
              rotation: Math.PI
            })]
          }]
        });
      }, {
        module: "lively.ide/value-widgets.cp.js",
        "export": "DefaultNumberWidget",
        range: {
          start: 8421,
          end: 9816
        }
      }, __varRecorder__$3.DefaultNumberWidget);
      __varRecorder__$3.DarkNumberWidget = __varRecorder__$3.component["for"](function () {
        return __varRecorder__$3.component(__varRecorder__$3.DefaultNumberWidget, {
          name: "dark number widget",
          fill: __varRecorder__$3.Color.rgb(66, 73, 73),
          submorphs: [{
            name: "value",
            fontColor: __varRecorder__$3.Color.rgb(178, 235, 242),
            cursorColor: __varRecorder__$3.Color.rgba(178, 235, 242, 0.5)
          }]
        });
      }, {
        module: "lively.ide/value-widgets.cp.js",
        "export": "DarkNumberWidget",
        range: {
          start: 9824,
          end: 10068
        }
      }, __varRecorder__$3.DarkNumberWidget);
      var DefaultNumberWidget = exports('u', __varRecorder__$3.DefaultNumberWidget);
      var DarkNumberWidget = exports('I', __varRecorder__$3.DarkNumberWidget);
      __varRecorder__$3.DefaultNumberWidget = DefaultNumberWidget;
      __varRecorder__$3.DarkNumberWidget = DarkNumberWidget;

      var __varRecorder__$2 = lively.FreezerRuntime.recorderFor("lively.ide/styling/shared.cp.js");
      __varRecorder__$2.HTMLMorph = HTMLMorph;
      __varRecorder__$2.TilingLayout = TilingLayout;
      __varRecorder__$2.Label = Label;
      __varRecorder__$2.ShadowObject = ShadowObject;
      __varRecorder__$2.component = component;
      __varRecorder__$2.part = part;
      __varRecorder__$2.Color = Color;
      __varRecorder__$2.LinearGradient = LinearGradient;
      __varRecorder__$2.pt = pt;
      __varRecorder__$2.rect = rect;
      __varRecorder__$2.DefaultList = DefaultList;
      __varRecorder__$2.CloseButtonDefault = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component({
          type: __varRecorder__$2.Label,
          name: "close button default",
          borderRadius: 3,
          fill: __varRecorder__$2.Color.rgba(229, 231, 233, 0),
          fontColor: __varRecorder__$2.Color.rgb(66, 73, 73),
          fontFamily: "Material Icons",
          fontSize: 25,
          nativeCursor: "pointer",
          padding: __varRecorder__$2.rect(4, 4, 0, 0),
          tooltip: "Close Window",
          lineHeight: 1,
          textAndAttributes: ["\uE5CD", {}]
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "CloseButtonDefault",
        range: {
          start: 229,
          end: 583
        }
      }, __varRecorder__$2.CloseButtonDefault);
      __varRecorder__$2.CloseButtonHovered = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.CloseButtonDefault, {
          name: "close button hovered",
          fill: __varRecorder__$2.Color.gray
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "CloseButtonHovered",
        range: {
          start: 591,
          end: 697
        }
      }, __varRecorder__$2.CloseButtonHovered);
      __varRecorder__$2.CloseButton = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.CloseButtonDefault, {
          name: "close button",
          master: {
            hover: __varRecorder__$2.CloseButtonHovered
          }
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "CloseButton",
        range: {
          start: 705,
          end: 823
        }
      }, __varRecorder__$2.CloseButton);
      __varRecorder__$2.DarkCloseButtonHovered = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.CloseButtonDefault, {
          name: "close button hovered",
          fill: __varRecorder__$2.Color.rgb(66, 73, 73)
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "DarkCloseButtonHovered",
        range: {
          start: 831,
          end: 952
        }
      }, __varRecorder__$2.DarkCloseButtonHovered);
      __varRecorder__$2.DarkCloseButton = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.CloseButtonDefault, {
          name: "close button",
          master: {
            hover: __varRecorder__$2.DarkCloseButtonHovered
          }
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "DarkCloseButton",
        range: {
          start: 960,
          end: 1086
        }
      }, __varRecorder__$2.DarkCloseButton);
      __varRecorder__$2.CheckerPattern = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component({
          type: __varRecorder__$2.HTMLMorph,
          name: "checker pattern",
          borderColor: __varRecorder__$2.Color.rgb(203, 203, 203),
          clipMode: "hidden",
          cssDeclaration: ".checkerboard {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(45deg, #bdc3c7 25%, transparent 25%), linear-gradient(-45deg, #bdc3c7 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #bdc3c7 75%), linear-gradient(-45deg, transparent 75%, #bdc3c7 75%);\n  background-size: 6px 6px;\n  background-position: 0 0, 0 3px, 3px -3px, -3px 0px;\n}",
          fill: __varRecorder__$2.Color.rgba(0, 0, 0, 0),
          html: "<div class=\"checkerboard\"></div>",
          reactsToPointer: false
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "CheckerPattern",
        range: {
          start: 1094,
          end: 1744
        }
      }, __varRecorder__$2.CheckerPattern);
      __varRecorder__$2.PopupWindow = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component({
          name: "popup window",
          borderColor: __varRecorder__$2.Color.rgb(149, 165, 166),
          borderRadius: 3,
          borderWidth: 1,
          clipMode: "hidden",
          draggable: true,
          dropShadow: new __varRecorder__$2.ShadowObject({
            rotation: 34,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.16),
            blur: 12
          }),
          extent: __varRecorder__$2.pt(241, 547),
          fill: __varRecorder__$2.Color.white,
          hasFixedPosition: true,
          layout: new __varRecorder__$2.TilingLayout({
            axis: "column",
            axisAlign: "center",
            orderByIndex: true,
            hugContentsVertically: true,
            hugContentsHorizontally: true
          }),
          nativeCursor: "grab",
          styleClasses: ["Popups"],
          submorphs: [{
            name: "header menu",
            borderWidth: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 1
            },
            borderColor: __varRecorder__$2.Color.rgb(215, 219, 221),
            extent: __varRecorder__$2.pt(241, 40.5),
            fill: __varRecorder__$2.Color.rgba(0, 0, 0, 0),
            layout: new __varRecorder__$2.TilingLayout({
              axisAlign: "center",
              align: "right",
              orderByIndex: true,
              padding: __varRecorder__$2.rect(5, 0, 0, 0),
              justifySubmorphs: "spaced"
            }),
            reactsToPointer: false,
            submorphs: [{
              type: __varRecorder__$2.Label,
              name: "title",
              padding: __varRecorder__$2.rect(10, 0, -10, 0),
              fontWeight: "bold",
              textString: "Window title"
            }, __varRecorder__$2.part(__varRecorder__$2.CloseButton, {
              name: "close button"
            })]
          }]
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "PopupWindow",
        range: {
          start: 1752,
          end: 2985
        }
      }, __varRecorder__$2.PopupWindow);
      __varRecorder__$2.SystemList = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.DefaultList, {
          name: "system list",
          borderColor: __varRecorder__$2.Color.rgb(149, 165, 166),
          borderRadius: 3,
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 1,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.26)
          }),
          fill: __varRecorder__$2.Color.rgba(255, 255, 255, 0.9),
          itemHeight: 20,
          itemPadding: __varRecorder__$2.rect(3, 2, -2, -1),
          manualItemHeight: true,
          padding: __varRecorder__$2.rect(2, 2, 0, 0),
          position: __varRecorder__$2.pt(1811.5, 370.6),
          itemBorderRadius: 2,
          selectionColor: new __varRecorder__$2.LinearGradient({
            stops: [{
              offset: 0,
              color: __varRecorder__$2.Color.rgb(66, 165, 245)
            }, {
              offset: 1,
              color: __varRecorder__$2.Color.rgb(41, 121, 255)
            }],
            vector: __varRecorder__$2.rect(0, 0, 0, 1)
          })
        });
      }, {
        module: "lively.ide/styling/shared.cp.js",
        "export": "SystemList",
        range: {
          start: 2993,
          end: 3623
        }
      }, __varRecorder__$2.SystemList);
      var CheckerPattern = exports('C', __varRecorder__$2.CheckerPattern);
      var SystemList = exports('a', __varRecorder__$2.SystemList);
      var PopupWindow = exports('m', __varRecorder__$2.PopupWindow);
      var CloseButton = __varRecorder__$2.CloseButton;
      var DarkCloseButton$1 = __varRecorder__$2.DarkCloseButton;
      var CloseButtonDefault = __varRecorder__$2.CloseButtonDefault;
      var CloseButtonHovered = __varRecorder__$2.CloseButtonHovered;
      __varRecorder__$2.CheckerPattern = CheckerPattern;
      __varRecorder__$2.SystemList = SystemList;
      __varRecorder__$2.PopupWindow = PopupWindow;
      __varRecorder__$2.CloseButton = CloseButton;
      __varRecorder__$2.DarkCloseButton = DarkCloseButton$1;
      __varRecorder__$2.CloseButtonDefault = CloseButtonDefault;
      __varRecorder__$2.CloseButtonHovered = CloseButtonHovered;

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.ide/studio/shared.cp.js");
      __varRecorder__$1.Label = Label;
      __varRecorder__$1.ViewModel = ViewModel;
      __varRecorder__$1.HTMLMorph = HTMLMorph;
      __varRecorder__$1.Morph = Morph;
      __varRecorder__$1.TilingLayout = TilingLayout;
      __varRecorder__$1.component = component;
      __varRecorder__$1.without = without;
      __varRecorder__$1.part = part;
      __varRecorder__$1.add = add;
      __varRecorder__$1.DarkDropDownList = DarkDropDownList;
      __varRecorder__$1.DarkList = DarkList;
      __varRecorder__$1.signal = signal;
      __varRecorder__$1.Color = Color;
      __varRecorder__$1.Rectangle = Rectangle;
      __varRecorder__$1.pt = pt;
      __varRecorder__$1.rect = rect;
      __varRecorder__$1.DarkNumberWidget = DarkNumberWidget;
      __varRecorder__$1.NumberWidgetModel = NumberWidgetModel;
      __varRecorder__$1.CloseButton = CloseButton;
      __varRecorder__$1.PopupWindow = PopupWindow;
      __varRecorder__$1.CloseButtonHovered = CloseButtonHovered;
      __varRecorder__$1.InputLine = InputLine;
      __varRecorder__$1.DarkThemeList = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.DarkList, {
          name: "sidebar list",
          selectionColor: __varRecorder__$1.Color.rgb(178, 235, 242),
          fill: __varRecorder__$1.Color.black.withA(0.8),
          submorphs: [{
            name: "scroller",
            submorphs: [{
              name: "scrollbar",
              opacity: 0
            }]
          }]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "DarkThemeList",
        range: {
          start: 522,
          end: 772
        }
      }, __varRecorder__$1.DarkThemeList);
      __varRecorder__$1.PropertyLabel = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          type: __varRecorder__$1.Label,
          name: "property label",
          borderRadius: 3,
          fill: __varRecorder__$1.Color.rgba(229, 231, 233, 0),
          fontColor: __varRecorder__$1.Color.rgb(255, 255, 255),
          fontFamily: "Material Icons",
          nativeCursor: "pointer",
          padding: {
            value: __varRecorder__$1.rect(6, 6, 0, 0),
            onlyAtInstantiation: true
          },
          textAndAttributes: ["\uE430", {
            fontSize: 18,
            fontFamily: "Material Icons"
          }]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabel",
        range: {
          start: 780,
          end: 1168
        }
      }, __varRecorder__$1.PropertyLabel);
      var PropertyLabelDisabled = exports('n', __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PropertyLabel, {
          nativeCursor: "not-allowed",
          opacity: 0.5
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabelDisabled",
        range: {
          start: 1183,
          end: 1282
        }
      }, __varRecorder__$1.PropertyLabelDisabled));
      __varRecorder__$1.PropertyLabelDisabled = PropertyLabelDisabled;
      __varRecorder__$1.PropertyLabelDisabled = PropertyLabelDisabled;
      __varRecorder__$1.PropertyLabelLight = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PropertyLabel, {
          fontColor: __varRecorder__$1.Color.darkGray
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabelLight",
        range: {
          start: 1290,
          end: 1368
        }
      }, __varRecorder__$1.PropertyLabelLight);
      __varRecorder__$1.PropertyLabelHovered = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PropertyLabel, {
          name: "property label hovered",
          fill: __varRecorder__$1.Color.rgb(66, 73, 73)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabelHovered",
        range: {
          start: 1376,
          end: 1492
        }
      }, __varRecorder__$1.PropertyLabelHovered);
      __varRecorder__$1.PropertyLabelHoveredLight = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PropertyLabel, {
          name: "property label hovered",
          fill: __varRecorder__$1.Color.rgba(192, 192, 192, 0.7829)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabelHoveredLight",
        range: {
          start: 1500,
          end: 1633
        }
      }, __varRecorder__$1.PropertyLabelHoveredLight);
      __varRecorder__$1.PropertyLabelActive = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PropertyLabel, {
          name: "property label active",
          fill: __varRecorder__$1.Color.rgb(178, 235, 242),
          fontColor: __varRecorder__$1.Color.rgb(65, 65, 65)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabelActive",
        range: {
          start: 1641,
          end: 1794
        }
      }, __varRecorder__$1.PropertyLabelActive);
      __varRecorder__$1.PropertyLabelActiveLight = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PropertyLabel, {
          fontColor: __varRecorder__$1.Color.white,
          fill: __varRecorder__$1.Color.rgb(3, 169, 244)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropertyLabelActiveLight",
        range: {
          start: 1802,
          end: 1915
        }
      }, __varRecorder__$1.PropertyLabelActiveLight);
      __varRecorder__$1.AddButtonAuto = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          type: __varRecorder__$1.Label,
          name: "add button",
          borderRadius: 3,
          fill: __varRecorder__$1.Color.rgba(229, 231, 233, 0),
          fontColor: __varRecorder__$1.Color.rgb(255, 255, 255),
          fontFamily: "Material Icons",
          nativeCursor: "pointer",
          padding: __varRecorder__$1.rect(6, 6, 0, 0),
          lineHeight: 1,
          textAndAttributes: ["\uE145", {
            fontSize: 18,
            fontFamily: "Material Icons"
          }]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "AddButtonAuto",
        range: {
          start: 1923,
          end: 2276
        }
      }, __varRecorder__$1.AddButtonAuto);
      __varRecorder__$1.AddButtonHovered = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.AddButtonAuto, {
          fill: __varRecorder__$1.Color.rgba(229, 231, 233, 0.35)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "AddButtonHovered",
        range: {
          start: 2284,
          end: 2372
        }
      }, __varRecorder__$1.AddButtonHovered);
      __varRecorder__$1.AddButton = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.AddButtonAuto, {
          master: {
            hover: __varRecorder__$1.AddButtonHovered
          }
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "AddButton",
        range: {
          start: 2380,
          end: 2465
        }
      }, __varRecorder__$1.AddButton);
      __varRecorder__$1.RemoveButton = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.AddButton, {
          name: "remove button",
          textAndAttributes: ["\uE15B", {
            fontSize: 18,
            fontFamily: "Material Icons"
          }]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "RemoveButton",
        range: {
          start: 2473,
          end: 2628
        }
      }, __varRecorder__$1.RemoveButton);
      __varRecorder__$1.EnumSelectorDefault = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.DarkDropDownList, {
          name: "enum selector/default",
          layout: new __varRecorder__$1.TilingLayout({
            align: "center",
            axisAlign: "center",
            orderByIndex: true,
            justifySubmorphs: "spaced",
            padding: __varRecorder__$1.Rectangle.inset(5, 0, 10)
          }),
          fill: __varRecorder__$1.Color.rgb(66, 73, 73),
          borderWidth: 0,
          borderRadius: 2,
          extent: __varRecorder__$1.pt(145.7, 23.3),
          nativeCursor: "pointer"
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "EnumSelectorDefault",
        range: {
          start: 2636,
          end: 3020
        }
      }, __varRecorder__$1.EnumSelectorDefault);
      __varRecorder__$1.EnumSelectorClicked = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.EnumSelectorDefault, {
          name: "enum selector/clicked",
          fill: __varRecorder__$1.Color.rgba(54, 61, 61, 1)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "EnumSelectorClicked",
        range: {
          start: 3028,
          end: 3152
        }
      }, __varRecorder__$1.EnumSelectorClicked);
      __varRecorder__$1.EnumSelector = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.EnumSelectorDefault, {
          name: "enum selector",
          master: {
            click: __varRecorder__$1.EnumSelectorClicked
          }
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "EnumSelector",
        range: {
          start: 3160,
          end: 3282
        }
      }, __varRecorder__$1.EnumSelector);
      __varRecorder__$1.HeadlineLabel = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          type: __varRecorder__$1.Label,
          name: "headline label",
          padding: __varRecorder__$1.rect(10, 0, -10, 0),
          fontColor: __varRecorder__$1.Color.rgb(255, 255, 255),
          fontWeight: "bold",
          textAndAttributes: ["A Headling Label", null]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "HeadlineLabel",
        range: {
          start: 3290,
          end: 3502
        }
      }, __varRecorder__$1.HeadlineLabel);
      __varRecorder__$1.PropLabel = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.HeadlineLabel, {
          name: "prop label",
          textAndAttributes: ["Property", null],
          fontWeight: "normal"
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "PropLabel",
        range: {
          start: 3510,
          end: 3637
        }
      }, __varRecorder__$1.PropLabel);

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/studio/shared.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DarkNumberIconWidgetModel") && typeof __lively_classholder__.DarkNumberIconWidgetModel === "function" ? __lively_classholder__.DarkNumberIconWidgetModel : __lively_classholder__.DarkNumberIconWidgetModel = function DarkNumberIconWidgetModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "expose",
          get: function get() {
            return ["enable", "disable"].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "expose", this));
          }
        }, {
          key: "disable",
          value: function DarkNumberIconWidgetModel_disable_() {
            this.view.nativeCursor = "not-allowed";
            this.ui.value.reactsToPointer = false;
            this.ui.interactiveLabel.reactsToPointer = false;
            this.ui.value.opacity = 0.3;
          }
        }, {
          key: "enable",
          value: function DarkNumberIconWidgetModel_enable_() {
            this.view.nativeCursor = "auto";
            this.ui.value.reactsToPointer = true;
            this.ui.interactiveLabel.reactsToPointer = true;
            this.ui.value.opacity = 1;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DarkNumberIconWidgetModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              spaceToDisplay: {
                get: function get() {
                  var _this$ui$interactiveL;

                  return this.view.width - (((_this$ui$interactiveL = this.ui.interactiveLabel) === null || _this$ui$interactiveL === void 0 ? void 0 : _this$ui$interactiveL.right) || 0);
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/shared.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.ide",
              version: "0.1.0"
            };
          }
        }, {
          start: 3640,
          end: 4339
        });
      })(__varRecorder__$1.NumberWidgetModel);

      __varRecorder__$1.DarkNumberIconWidget = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.DarkNumberWidget, {
          name: "number input",
          defaultViewModel: __varRecorder__$1.DarkNumberIconWidgetModel,
          borderRadius: 2,
          dropShadow: false,
          extent: __varRecorder__$1.pt(72, 22),
          floatingPoint: false,
          submorphs: [__varRecorder__$1.add({
            type: __varRecorder__$1.Label,
            name: "interactive label",
            padding: __varRecorder__$1.rect(6, 0, -6, 0),
            borderRadius: 3,
            fill: __varRecorder__$1.Color.rgba(229, 231, 233, 0),
            fontColor: __varRecorder__$1.Color.rgba(178, 235, 242, 0.4965358231707328),
            fontFamily: "Material Icons",
            nativeCursor: "ew-resize",
            textAndAttributes: ["\uEAAB", {
              fontFamily: "Material Icons",
              fontSize: 16
            }]
          }, "value"), __varRecorder__$1.without("button holder")]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "DarkNumberIconWidget",
        range: {
          start: 4347,
          end: 4986
        }
      }, __varRecorder__$1.DarkNumberIconWidget);
      __varRecorder__$1.TextInput = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          name: "text input",
          type: __varRecorder__$1.InputLine,
          borderRadius: 2,
          fill: __varRecorder__$1.Color.rgb(66, 73, 73),
          fontColor: __varRecorder__$1.Color.rgb(178, 235, 242),
          fontFamily: "IBM Plex Sans"
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "TextInput",
        range: {
          start: 4994,
          end: 5180
        }
      }, __varRecorder__$1.TextInput);
      __varRecorder__$1.DarkCloseButton = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.CloseButton, {
          name: "dark close button",
          fontColor: __varRecorder__$1.Color.rgb(255, 255, 255)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "DarkCloseButton",
        range: {
          start: 5188,
          end: 5300
        }
      }, __varRecorder__$1.DarkCloseButton);
      __varRecorder__$1.DarkCloseButtonHovered = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.CloseButtonHovered, {
          name: "dark close button hovered",
          fontColor: __varRecorder__$1.Color.rgb(255, 255, 255),
          fill: __varRecorder__$1.Color.gray.withA(0.2)
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "DarkCloseButtonHovered",
        range: {
          start: 5308,
          end: 5473
        }
      }, __varRecorder__$1.DarkCloseButtonHovered);
      __varRecorder__$1.BoundsContainerInactive = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          fill: __varRecorder__$1.Color.transparent,
          borderColor: __varRecorder__$1.Color.transparent,
          borderWidth: 1
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "BoundsContainerInactive",
        range: {
          start: 5481,
          end: 5599
        }
      }, __varRecorder__$1.BoundsContainerInactive);
      __varRecorder__$1.BoundsContainerHovered = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          fill: __varRecorder__$1.Color.transparent,
          borderColor: __varRecorder__$1.Color.rgb(66, 73, 73),
          borderWidth: 1,
          borderRadius: 2,
          clipMode: "hidden"
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "BoundsContainerHovered",
        range: {
          start: 5607,
          end: 5769
        }
      }, __varRecorder__$1.BoundsContainerHovered);
      __varRecorder__$1.DarkPopupWindow = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.PopupWindow, {
          name: "dark popup window",
          borderColor: __varRecorder__$1.Color.rgba(112, 123, 124, 1),
          fill: __varRecorder__$1.Color.rgb(32, 32, 32),
          hasFixedPosition: true,
          submorphs: [{
            name: "header menu",
            borderColor: __varRecorder__$1.Color.rgbHex("616A6B"),
            reactsToPointer: false,
            submorphs: [{
              name: "title",
              fontColor: __varRecorder__$1.Color.rgb(255, 255, 255)
            }, {
              name: "close button",
              master: {
                auto: __varRecorder__$1.DarkCloseButton,
                hover: __varRecorder__$1.DarkCloseButtonHovered
              }
            }]
          }]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "DarkPopupWindow",
        range: {
          start: 5777,
          end: 6286
        }
      }, __varRecorder__$1.DarkPopupWindow);
      __varRecorder__$1.DarkFlap = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component(__varRecorder__$1.DarkPopupWindow, {
          name: "dark flap",
          submorphs: [__varRecorder__$1.without("header menu")]
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "DarkFlap",
        range: {
          start: 6294,
          end: 6395
        }
      }, __varRecorder__$1.DarkFlap);

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/studio/shared.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SpinnerModel") && typeof __lively_classholder__.SpinnerModel === "function" ? __lively_classholder__.SpinnerModel : __lively_classholder__.SpinnerModel = function SpinnerModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function SpinnerModel_viewDidLoad_() {
            var node = this.view.domNode.querySelector(".spinner");
            if (this.color === "black") node.classList.add("black-spinner");
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SpinnerModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              color: {
                defaultValue: "white",
                type: "Enum",
                values: ["white", "black"]
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/shared.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.ide",
              version: "0.1.0"
            };
          }
        }, {
          start: 6398,
          end: 6756
        });
      })(__varRecorder__$1.ViewModel);

      __varRecorder__$1.Spinner = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          type: __varRecorder__$1.HTMLMorph,
          defaultViewModel: __varRecorder__$1.SpinnerModel,
          name: "spinner",
          extent: __varRecorder__$1.pt(86.2, 70.2),
          fill: __varRecorder__$1.Color.rgba(255, 255, 255, 0),
          html: "<div class=\"spinner\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>",
          scale: 0.3244543390629232
        });
      }, {
        module: "lively.ide/studio/shared.cp.js",
        "export": "Spinner",
        range: {
          start: 6829,
          end: 7188
        }
      }, __varRecorder__$1.Spinner);
      var AddButton = exports('A', __varRecorder__$1.AddButton);
      var RemoveButton = exports('R', __varRecorder__$1.RemoveButton);
      var HeadlineLabel = exports('H', __varRecorder__$1.HeadlineLabel);
      var PropLabel = exports('h', __varRecorder__$1.PropLabel);
      var DarkNumberIconWidget = exports('d', __varRecorder__$1.DarkNumberIconWidget);
      var TextInput = exports('T', __varRecorder__$1.TextInput);
      var EnumSelector = exports('E', __varRecorder__$1.EnumSelector);
      var PropertyLabel = exports('P', __varRecorder__$1.PropertyLabel);
      var PropertyLabelLight = exports('y', __varRecorder__$1.PropertyLabelLight);
      var PropertyLabelHovered = exports('g', __varRecorder__$1.PropertyLabelHovered);
      var PropertyLabelHoveredLight = exports('G', __varRecorder__$1.PropertyLabelHoveredLight);
      var PropertyLabelActive = exports('e', __varRecorder__$1.PropertyLabelActive);
      var PropertyLabelActiveLight = exports('z', __varRecorder__$1.PropertyLabelActiveLight);
      var DarkThemeList = exports('f', __varRecorder__$1.DarkThemeList);
      var DarkFlap = exports('i', __varRecorder__$1.DarkFlap);
      var DarkPopupWindow = exports('j', __varRecorder__$1.DarkPopupWindow);
      var DarkCloseButton = exports('w', __varRecorder__$1.DarkCloseButton);
      var DarkCloseButtonHovered = exports('x', __varRecorder__$1.DarkCloseButtonHovered);
      var BoundsContainerInactive = exports('K', __varRecorder__$1.BoundsContainerInactive);
      var BoundsContainerHovered = exports('J', __varRecorder__$1.BoundsContainerHovered);
      var Spinner = exports('S', __varRecorder__$1.Spinner);
      __varRecorder__$1.AddButton = AddButton;
      __varRecorder__$1.RemoveButton = RemoveButton;
      __varRecorder__$1.HeadlineLabel = HeadlineLabel;
      __varRecorder__$1.PropLabel = PropLabel;
      __varRecorder__$1.DarkNumberIconWidget = DarkNumberIconWidget;
      __varRecorder__$1.TextInput = TextInput;
      __varRecorder__$1.EnumSelector = EnumSelector;
      __varRecorder__$1.PropertyLabel = PropertyLabel;
      __varRecorder__$1.PropertyLabelLight = PropertyLabelLight;
      __varRecorder__$1.PropertyLabelHovered = PropertyLabelHovered;
      __varRecorder__$1.PropertyLabelHoveredLight = PropertyLabelHoveredLight;
      __varRecorder__$1.PropertyLabelActive = PropertyLabelActive;
      __varRecorder__$1.PropertyLabelActiveLight = PropertyLabelActiveLight;
      __varRecorder__$1.DarkThemeList = DarkThemeList;
      __varRecorder__$1.DarkFlap = DarkFlap;
      __varRecorder__$1.DarkPopupWindow = DarkPopupWindow;
      __varRecorder__$1.DarkCloseButton = DarkCloseButton;
      __varRecorder__$1.DarkCloseButtonHovered = DarkCloseButtonHovered;
      __varRecorder__$1.BoundsContainerInactive = BoundsContainerInactive;
      __varRecorder__$1.BoundsContainerHovered = BoundsContainerHovered;
      __varRecorder__$1.Spinner = Spinner;

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.components/loading-indicator.cp.js");

      function open() {
        var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Loading...";
        var props = arguments.length > 1 ? arguments[1] : undefined;
        var pos;
        var status = props === null || props === void 0 ? void 0 : props.status;

        if (props === null || props === void 0 ? void 0 : props.target) {
          pos = props.target.globalBounds().center();
        }

        var li = __varRecorder__.part(__varRecorder__.LoadingIndicator, Object.assign({
          viewModel: {
            label: label,
            status: status
          }
        }, props));

        if (props && props.animated) {
          __varRecorder__.promise.delay(props.delay || 0).then(function () {
            var hoverOffset = 25;
            li.openInWorld();
            if (pos) li.center = pos;
            li.opacity = 0;
            li.top += hoverOffset;
            li.animate({
              top: li.top - hoverOffset,
              easing: __varRecorder__.easings.outExpo
            });
            li.animate({
              opacity: 1,
              easing: __varRecorder__.easings.outExpo
            });
          });

          return li;
        }

        li.openInWorld();
        if (pos) li.center = pos;
        return li;
      }

      __varRecorder__.open = open;

      function runFn(_x, _x2, _x3) {
        return _runFn.apply(this, arguments);
      }

      function _runFn() {
        _runFn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(fn, label, props) {
          var i;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  i = __varRecorder__.open(label, props);
                  i.env.forceUpdate();
                  _context4.prev = 2;
                  _context4.next = 5;
                  return fn(i);

                case 5:
                  return _context4.abrupt("return", _context4.sent);

                case 6:
                  _context4.prev = 6;
                  i.remove();
                  return _context4.finish(6);

                case 9:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[2,, 6, 9]]);
        }));
        return _runFn.apply(this, arguments);
      }

      __varRecorder__.runFn = runFn;

      function forPromise(p, label, props) {
        var i = __varRecorder__.open(label, props);

        __varRecorder__.promise["finally"](Promise.resolve(p), function () {
          return i.remove();
        });

        return i;
      }

      __varRecorder__.forPromise = forPromise;
      __varRecorder__.ShadowObject = ShadowObject;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.easings = easings;
      __varRecorder__.stringToEasing = stringToEasing;
      __varRecorder__.Morph = Morph;
      __varRecorder__.Icon = Icon;
      __varRecorder__.Label = Label;
      __varRecorder__.component = component;
      __varRecorder__.ViewModel = ViewModel;
      __varRecorder__.part = part;
      __varRecorder__.Color = Color;
      __varRecorder__.Rectangle = Rectangle;
      __varRecorder__.rect = rect;
      __varRecorder__.pt = pt;
      __varRecorder__.promise = promise;
      __varRecorder__.num = num;
      __varRecorder__.ButtonDefault = ButtonDefault;
      __varRecorder__.Spinner = Spinner;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/loading-indicator.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ProgressBar") && typeof __lively_classholder__.ProgressBar === "function" ? __lively_classholder__.ProgressBar : __lively_classholder__.ProgressBar = function ProgressBar(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "test",
          value: function () {
            var _ProgressBar_test_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.progress = 0;

                    case 1:
                      if (!(this.progress < 1)) {
                        _context.next = 7;
                        break;
                      }

                      this.progress += 0.1;
                      _context.next = 5;
                      return __varRecorder__.promise.delay(1000);

                    case 5:
                      _context.next = 1;
                      break;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function ProgressBar_test_() {
              return _ProgressBar_test_.apply(this, arguments);
            }

            return ProgressBar_test_;
          }()
        }, {
          key: "update",
          value: function ProgressBar_update_() {
            var _this = this;

            setTimeout(function () {
              if (!_this.world()) _this.stopStepping();
            }, 1000);
            if (!this._lastWidth) return;
            var pb = this.get("progress path");

            var p = __varRecorder__.stringToEasing(__varRecorder__.easings.inOutExpo)(__varRecorder__.num.clamp(Date.now() - this._timeStamp, 0, 1000) / 1000);

            var targetWidth = this._targetWidth;
            pb.topLeft = __varRecorder__.pt(0, 0);
            pb.height = this.height;

            if (this._lastWidth > targetWidth) {
              pb.width = targetWidth;
            } else {
              pb.width = __varRecorder__.num.interpolate(p, this._lastWidth, targetWidth);
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ProgressBar";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              progress: {
                after: ["submorphs"],
                initialize: function initialize() {
                  this.progress = 0;
                  this.startStepping("update");
                },
                set: function set(p) {
                  var pb = this.get("progress path");
                  this._lastWidth = Math.max(pb.width, this._targetWidth, 1);
                  this._targetWidth = this.width * p;
                  this._timeStamp = Date.now();
                  this.setProperty("progress", p);
                }
              },
              fill: {
                defaultValue: __varRecorder__.Color.darkGray
              },
              borderRadius: {
                defaultValue: 5
              },
              clipMode: {
                defaultValue: "hidden"
              },
              submorphs: {
                initialize: function initialize() {
                  this.submorphs = [{
                    name: "progress path",
                    fill: __varRecorder__.Color.orange,
                    width: 1
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./loading-indicator.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 348,
          end: 1924
        });
      })(__varRecorder__.Morph);

      var LoadingIndicatorModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/loading-indicator.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("LoadingIndicatorModel") && typeof __lively_classholder__.LoadingIndicatorModel === "function" ? __lively_classholder__.LoadingIndicatorModel : __lively_classholder__.LoadingIndicatorModel = function LoadingIndicatorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isLoadingIndicator",
          get: function get() {
            return true;
          }
        }, {
          key: "onHoverIn",
          value: function LoadingIndicatorModel_onHoverIn_() {
            this.ui.closeButton.opacity = 1;
          }
        }, {
          key: "onHoverOut",
          value: function LoadingIndicatorModel_onHoverOut_() {
            this.ui.closeButton.opacity = 0;
          }
        }, {
          key: "close",
          value: function LoadingIndicatorModel_close_() {
            this.view.remove();
          }
        }, {
          key: "onRefresh",
          value: function LoadingIndicatorModel_onRefresh_(prop) {
            var status = this.ui.status;

            if (this.status) {
              status.visible = true;
              status.value = this.status;
            } else {
              status.visible = false;
              status.value = "";
            }
          }
        }, {
          key: "viewDidLoad",
          value: function LoadingIndicatorModel_viewDidLoad_() {
            var _this$ui = this.ui,
                label = _this$ui.label,
                progressBar = _this$ui.progressBar;

            if (progressBar) {
              progressBar.visible = false;
            }

            label.value = this.label;
          }
        }, {
          key: "animateProgress",
          value: function () {
            var _LoadingIndicatorModel_animateProgress_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(p) {
              var progressBar;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      progressBar = this.ui.progressBar;

                      if (p === false) {
                        progressBar.visible = false;
                      } else {
                        progressBar.visible = true;
                      }

                      progressBar.progress = p;

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function LoadingIndicatorModel_animateProgress_(_x4) {
              return _LoadingIndicatorModel_animateProgress_.apply(this, arguments);
            }

            return LoadingIndicatorModel_animateProgress_;
          }()
        }, {
          key: "hideSpinner",
          value: function () {
            var _LoadingIndicatorModel_hideSpinner_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var spinner;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      spinner = this.ui.spinner;

                      if (spinner) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 3:
                      spinner.visible = false;
                      spinner.width = 50;
                      spinner.remove();

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function LoadingIndicatorModel_hideSpinner_() {
              return _LoadingIndicatorModel_hideSpinner_.apply(this, arguments);
            }

            return LoadingIndicatorModel_hideSpinner_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "LoadingIndicatorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              progress: {
                derived: true,
                set: function set(p) {
                  this.animateProgress(__varRecorder__.num.clamp(p, 0, 1));
                }
              },
              label: {
                defaultValue: "status message",
                set: function set(val) {
                  this.setProperty("label", val);
                  if (!this.view) return;
                  this.ui.label.value = val;
                }
              },
              status: {
                defaultValue: false
              },
              expose: {
                get: function get() {
                  return ["status", "label", "progress", "isLoadingIndicator"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onHoverIn",
                    handler: "onHoverIn"
                  }, {
                    signal: "onHoverOut",
                    handler: "onHoverOut"
                  }, {
                    signal: "openInWorld",
                    handler: "openInWorld"
                  }, {
                    model: "close button",
                    signal: "fire",
                    handler: "close"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./loading-indicator.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.components",
              version: "0.1.0"
            };
          }
        }, {
          start: 1926,
          end: 4021
        });
      }(__varRecorder__.ViewModel);
      __varRecorder__.LoadingIndicator = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          defaultViewModel: __varRecorder__.LoadingIndicatorModel,
          epiMorph: true,
          hasFixedPosition: true,
          fill: __varRecorder__.Color.transparent,
          name: "loading indicator",
          layout: new __varRecorder__.TilingLayout({
            align: "center",
            axisAlign: "center"
          }),
          extent: __varRecorder__.pt(225, 50),
          submorphs: [{
            name: "background",
            borderRadius: 10,
            clipMode: "hidden",
            dropShadow: new __varRecorder__.ShadowObject({
              color: __varRecorder__.Color.rgba(0, 0, 0, 0.62),
              blur: 28
            }),
            extent: __varRecorder__.pt(225, 65),
            fill: __varRecorder__.Color.rgba(0, 0, 0, 0.65),
            layout: new __varRecorder__.TilingLayout({
              axis: "column",
              padding: 10,
              hugContentsVertically: true,
              hugContentsHorizontally: true,
              resizePolicies: [["progress bar", {
                width: "fill",
                height: "fixed"
              }]]
            }),
            submorphs: [{
              name: "top float",
              fill: __varRecorder__.Color.transparent,
              layout: new __varRecorder__.TilingLayout({
                hugContentsVertically: true,
                hugContentsHorizontally: true,
                align: "center",
                axis: "row",
                axisAlign: "top",
                padding: __varRecorder__.rect(22, 0, -22, 0)
              }),
              submorphs: [{
                name: "spinner wrapper",
                fill: __varRecorder__.Color.transparent,
                height: 45,
                width: 40,
                layout: new __varRecorder__.TilingLayout({
                  axis: "row",
                  axisAlign: "center",
                  reactToSubmorphAnimations: false
                }),
                submorphs: [__varRecorder__.part(__varRecorder__.Spinner, {
                  name: "spinner",
                  extent: __varRecorder__.pt(65, 70),
                  fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                  scale: 0.5
                })]
              }, {
                name: "wrapper",
                extent: __varRecorder__.pt(195, 35),
                fill: __varRecorder__.Color.rgba(46, 75, 223, 0),
                layout: new __varRecorder__.TilingLayout({
                  axis: "column",
                  align: "center",
                  direction: "leftToRight",
                  orderByIndex: true,
                  reactToSubmorphAnimations: false,
                  renderViaCSS: true,
                  hugContentsHorizontally: true,
                  hugContentsVertically: true
                }),
                submorphs: [{
                  type: __varRecorder__.Label,
                  name: "label",
                  fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                  fontColor: __varRecorder__.Color.rgb(253, 254, 254),
                  fontSize: 16,
                  padding: __varRecorder__.rect(0, 0, 10, 0),
                  fontWeight: "bold",
                  nativeCursor: "pointer",
                  textAndAttributes: ["test test test test ", null]
                }, {
                  type: __varRecorder__.Label,
                  name: "status",
                  fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                  padding: __varRecorder__.Rectangle.inset(0, 0, 0, 7.5),
                  fontColor: __varRecorder__.Color.rgb(253, 254, 254),
                  fontWeight: "bold",
                  nativeCursor: "pointer",
                  opacity: 0.65,
                  visible: false
                }]
              }, __varRecorder__.part(__varRecorder__.ButtonDefault, {
                name: "close button",
                borderWidth: 0,
                opacity: 0,
                extent: __varRecorder__.pt(23, 22),
                fill: __varRecorder__.Color.transparent,
                submorphs: [{
                  name: "label",
                  fontColor: __varRecorder__.Color.rgb(253, 254, 254),
                  fontSize: 18,
                  fontWeight: "bolder",
                  textAndAttributes: __varRecorder__.Icon.textAttribute("times")
                }]
              })]
            }, {
              type: __varRecorder__.ProgressBar,
              name: "progress bar",
              extent: __varRecorder__.pt(195, 5),
              visible: false,
              progress: 0,
              submorphs: [{
                name: "progress path",
                extent: __varRecorder__.pt(1, 10),
                fill: __varRecorder__.Color.rgb(255, 153, 0)
              }]
            }]
          }]
        });
      }, {
        module: "lively.components/loading-indicator.cp.js",
        "export": "LoadingIndicator",
        range: {
          start: 5141,
          end: 8426
        }
      }, __varRecorder__.LoadingIndicator);
      var LoadingIndicator = __varRecorder__.LoadingIndicator;
      __varRecorder__.LoadingIndicator = LoadingIndicator;
      __varRecorder__.open = open;
      __varRecorder__.forPromise = forPromise;
      __varRecorder__.runFn = runFn;
      __varRecorder__.LoadingIndicatorModel = LoadingIndicatorModel;

      var LoadingIndicator$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        LoadingIndicator: LoadingIndicator,
        open: open,
        forPromise: forPromise,
        runFn: runFn,
        LoadingIndicatorModel: LoadingIndicatorModel
      });
      exports('L', LoadingIndicator$1);

    })
  };
}));
