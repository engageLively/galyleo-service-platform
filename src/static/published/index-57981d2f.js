System.register(['./__rootModule___commonjs-entry-2a340242.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js'], (function (exports) {
  'use strict';
  var Text, ViewModel, TilingLayout, Icon, ShadowObject, Label, component, pt, Rectangle, rect, Color, arr, string, Path, signal, initializeClass, config, Morph, obj, promise, fun, _slicedToArray, _typeof, _asyncToGenerator, _createForOfIteratorHelper, tree, touchInputDevice, HTMLMorph, part, LinearGradient, morph, connect, once, easings, _toConsumableArray, Ellipse, add, _defineProperty, num, properties, disconnect, _missingExportShim, Path$1, SystemTooltip, addClassMappings, List, FilterableList, RadioButtonGroup, ButtonDefault, __captured1__, __captured2__, LoadingIndicator, DropDownList, Button, InputLine, PasswordInputLine;
  return {
    setters: [function (module) {
      Text = module.h;
      ViewModel = module.V;
      TilingLayout = module.T;
      Icon = module.j;
      ShadowObject = module.a5;
      Label = module.L;
      component = module.c;
      pt = module.b;
      Rectangle = module.R;
      rect = module.a8;
      Color = module.C;
      arr = module.q;
      string = module.u;
      Path = module.aR;
      signal = module.s;
      initializeClass = module.i;
      config = module.z;
      Morph = module.M;
      obj = module.y;
      promise = module.a9;
      fun = module.x;
      _slicedToArray = module.t;
      _typeof = module.aA;
      _asyncToGenerator = module._;
      _createForOfIteratorHelper = module.U;
      tree = module.au;
      touchInputDevice = module.a0;
      HTMLMorph = module.a3;
      part = module.p;
      LinearGradient = module.a7;
      morph = module.a1;
      connect = module.a;
      once = module.ao;
      easings = module.$;
      _toConsumableArray = module.w;
      Ellipse = module.af;
      add = module.ad;
      _defineProperty = module.X;
      num = module.aq;
      properties = module.aY;
      disconnect = module.l;
      _missingExportShim = module.aZ;
      Path$1 = module.ae;
      SystemTooltip = module.aG;
      addClassMappings = module.a_;
    }, function (module) {
      List = module.o;
      FilterableList = module.F;
      RadioButtonGroup = module.p;
      ButtonDefault = module.q;
      __captured1__ = module._;
      __captured2__ = module.r;
      LoadingIndicator = module.L;
      DropDownList = module.s;
      Button = module.t;
    }, function (module) {
      InputLine = module.I;
      PasswordInputLine = module.P;
    }],
    execute: (function () {

      var __varRecorder__$a = lively.FreezerRuntime.recorderFor("lively.components/inputs.cp.js");
      __varRecorder__$a.Text = Text;
      __varRecorder__$a.ViewModel = ViewModel;
      __varRecorder__$a.TilingLayout = TilingLayout;
      __varRecorder__$a.Icon = Icon;
      __varRecorder__$a.ShadowObject = ShadowObject;
      __varRecorder__$a.Label = Label;
      __varRecorder__$a.component = component;
      __varRecorder__$a.pt = pt;
      __varRecorder__$a.Rectangle = Rectangle;
      __varRecorder__$a.rect = rect;
      __varRecorder__$a.Color = Color;
      __varRecorder__$a.InputLine = InputLine;
      __varRecorder__$a.arr = arr;
      __varRecorder__$a.string = string;
      __varRecorder__$a.PropertyPath = Path;
      __varRecorder__$a.signal = signal;
      __varRecorder__$a.InputLineDefault = __varRecorder__$a.component["for"](function () {
        return __varRecorder__$a.component({
          type: __varRecorder__$a.InputLine,
          name: "input line light",
          highlightWhenFocused: true,
          borderColor: __varRecorder__$a.Color.rgb(204, 204, 204),
          borderRadius: 4,
          dropShadow: new __varRecorder__$a.ShadowObject({
            distance: 3,
            rotation: 75,
            color: __varRecorder__$a.Color.rgba(0, 0, 0, 0.2)
          }),
          haloShadow: new __varRecorder__$a.ShadowObject({
            distance: 4,
            color: __varRecorder__$a.Color.rgba(0, 0, 0, 0.26),
            blur: 10
          }),
          extent: __varRecorder__$a.pt(318.1, 34.3),
          fontFamily: "IBM Plex Sans",
          fontSize: 20,
          padding: __varRecorder__$a.rect(10, 3, 0, 0),
          placeholder: "Name",
          fill: __varRecorder__$a.Color.white,
          nativeCursor: "text",
          submorphs: [{
            type: __varRecorder__$a.Label,
            name: "placeholder",
            fontColor: __varRecorder__$a.Color.rgb(204, 204, 204),
            fontFamily: "IBM Plex Sans",
            fontSize: 20,
            padding: __varRecorder__$a.rect(10, 3, 0, 0),
            reactsToPointer: false,
            textAndAttributes: ["Name", null]
          }]
        });
      }, {
        module: "lively.components/inputs.cp.js",
        "export": "InputLineDefault",
        range: {
          start: 360,
          end: 1172
        }
      }, __varRecorder__$a.InputLineDefault);
      __varRecorder__$a.InputLineDark = __varRecorder__$a.component["for"](function () {
        return __varRecorder__$a.component(__varRecorder__$a.InputLineDefault, {
          name: "input line dark",
          fill: __varRecorder__$a.Color.rgb(229, 231, 233)
        });
      }, {
        module: "lively.components/inputs.cp.js",
        "export": "InputLineDark",
        range: {
          start: 1180,
          end: 1288
        }
      }, __varRecorder__$a.InputLineDark);
      var SearchFieldModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/inputs.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SearchFieldModel") && typeof __lively_classholder__.SearchFieldModel === "function" ? __lively_classholder__.SearchFieldModel : __lively_classholder__.SearchFieldModel = function SearchFieldModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "parseInput",
          value: function SearchFieldModel_parseInput_() {
            var filterText = this.input;
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
              lowercasedTokens: lowercasedTokens
            };
          }
        }, {
          key: "clearInput",
          value: function SearchFieldModel_clearInput_() {
            this.input = "";

            __varRecorder__$a.signal(this.view, "searchInput", this.parseInput());

            this.onInputBlur();
          }
        }, {
          key: "matches",
          value: function SearchFieldModel_matches_(string) {
            if (!this.input) return true;
            return this.filterFunction.call(this, this.parseInput(), {
              string: string
            });
          }
        }, {
          key: "onInputChange",
          value: function SearchFieldModel_onInputChange_(change) {
            var inputChange = change.selector === "replace";

            if (this.ui.placeholderIcon) {
              this.ui.placeholderIcon.visible = !!this.input;
            }

            if (this.input.includes("\n")) {
              this.input = this.input.replace("\n", "");
            }

            this.active && inputChange && __varRecorder__$a.signal(this.view, "searchInput", this.parseInput());
          }
        }, {
          key: "onInputBlur",
          value: function SearchFieldModel_onInputBlur_(evt) {
            this.active = false;
            this.ui.placeholder.visible = !this.input;
            this.view.master = this._originalMaster || __varRecorder__$a.SearchField;
            this.view.master.applyAnimated({
              duration: 300
            });
          }
        }, {
          key: "onInputFocus",
          value: function SearchFieldModel_onInputFocus_(evt) {
            this.active = true;
            this.ui.placeholder.visible = false;
            this._originalMaster = this.view.master.parent;
            this.view.master = __varRecorder__$a.SearchFieldFocused;
            this.view.master.applyAnimated({
              duration: 300
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SearchFieldModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              input: {
                derived: true,
                set: function set(val) {
                  this.ui.searchInput.textString = val;
                },
                get: function get() {
                  return this.ui.searchInput.textString || "";
                }
              },
              fuzzy: {
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
                readOnly: true,
                get: function get() {
                  var _this = this;

                  return this._fuzzySortFunction || (this._fuzzySortFunction = function (parsedInput, item) {
                    var prop = typeof _this.fuzzy === "string" ? _this.fuzzy : "string";
                    var fuzzyValue = String(__varRecorder__$a.PropertyPath(prop).get(item)).toLowerCase();
                    var base = 0;
                    parsedInput.lowercasedTokens.forEach(function (t) {
                      if (fuzzyValue.startsWith(t)) base -= 10;else if (fuzzyValue.includes(t)) base -= 5;
                    });
                    return __varRecorder__$a.arr.sum(parsedInput.lowercasedTokens.map(function (token) {
                      return __varRecorder__$a.string.levenshtein(fuzzyValue.toLowerCase(), token);
                    })) + base;
                  });
                }
              },
              fuzzyFilterFunction: {
                get: function get() {
                  var _this2 = this;

                  return this._fuzzyFilterFunction || (this._fuzzyFilterFunction = function (parsedInput, item) {
                    var prop = typeof _this2.fuzzy === "string" ? _this2.fuzzy : "string";
                    var tokens = parsedInput.lowercasedTokens;
                    if (tokens.every(function (token) {
                      return item.string.toLowerCase().includes(token);
                    })) return true;
                    var fuzzyValue = String(__varRecorder__$a.PropertyPath(prop).get(item)).toLowerCase();
                    return __varRecorder__$a.arr.sum(parsedInput.lowercasedTokens.map(function (token) {
                      return __varRecorder__$a.string.levenshtein(fuzzyValue, token);
                    })) <= 3;
                  });
                }
              },
              placeHolder: {
                defaultValue: "Search"
              },
              expose: {
                get: function get() {
                  return ["matches"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    target: "placeholder icon",
                    signal: "onMouseDown",
                    handler: "clearInput"
                  }, {
                    target: "search input",
                    signal: "onChange",
                    handler: "onInputChange"
                  }, {
                    target: "search input",
                    signal: "onBlur",
                    handler: "onInputBlur"
                  }, {
                    target: "search input",
                    signal: "onFocus",
                    handler: "onInputFocus"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./inputs.cp.js";
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
          start: 1297,
          end: 7266
        });
      }(__varRecorder__$a.ViewModel);
      __varRecorder__$a.SearchFieldModel = SearchFieldModel;
      __varRecorder__$a.SearchFieldModel = SearchFieldModel;
      __varRecorder__$a.SearchField = __varRecorder__$a.component["for"](function () {
        return __varRecorder__$a.component({
          defaultViewModel: __varRecorder__$a.SearchFieldModel,
          extent: __varRecorder__$a.pt(188, 21),
          fixedHeight: true,
          fontColor: __varRecorder__$a.Color.rgb(204, 204, 204),
          fill: __varRecorder__$a.Color.white,
          borderRadius: 15,
          borderWidth: 1,
          reactsToPointer: false,
          layout: new __varRecorder__$a.TilingLayout({
            axisAlign: "center",
            orderByIndex: true,
            padding: __varRecorder__$a.Rectangle.inset(0, 0, 3, 0),
            resizePolicies: [["search input", {
              height: "fill",
              width: "fill"
            }], ["placeholder icon", {
              height: "fixed",
              width: "fixed"
            }]]
          }),
          submorphs: [{
            type: __varRecorder__$a.Text,
            readOnly: false,
            fill: __varRecorder__$a.Color.transparent,
            name: "search input",
            fontFamily: "IBM Plex Sans",
            styleClasses: ["idle"],
            clipMode: "hidden",
            fixedHeight: true,
            fontColor: __varRecorder__$a.Color.black,
            padding: __varRecorder__$a.rect(6, 3, 0, 0),
            submorphs: [{
              type: __varRecorder__$a.Label,
              name: "placeholder",
              visible: true,
              opacity: 0.3,
              padding: __varRecorder__$a.rect(6, 4, 0, 0),
              reactsToPointer: false,
              textAndAttributes: ["Search", null]
            }]
          }, {
            type: __varRecorder__$a.Label,
            name: "placeholder icon",
            autofit: false,
            padding: __varRecorder__$a.Rectangle.inset(2, 0, 2, 0),
            position: __varRecorder__$a.pt(165, 0),
            fontColor: __varRecorder__$a.Color.rgb(204, 204, 204),
            fontSize: 14,
            nativeCursor: "pointer",
            textAndAttributes: __varRecorder__$a.Icon.textAttribute("times-circle"),
            visible: false
          }]
        });
      }, {
        module: "lively.components/inputs.cp.js",
        "export": "SearchField",
        range: {
          start: 7273,
          end: 8603
        }
      }, __varRecorder__$a.SearchField);
      __varRecorder__$a.SearchFieldFocused = __varRecorder__$a.component["for"](function () {
        return __varRecorder__$a.component({
          name: "search field focused",
          dropShadow: new __varRecorder__$a.ShadowObject({
            distance: 0,
            color: __varRecorder__$a.Color.rgb(52, 152, 219),
            blur: 5
          }),
          submorphs: [{
            name: "placeholder icon",
            visible: true
          }]
        });
      }, {
        module: "lively.components/inputs.cp.js",
        "export": "SearchFieldFocused",
        range: {
          start: 8611,
          end: 8851
        }
      }, __varRecorder__$a.SearchFieldFocused);
      var SearchField = exports('S', __varRecorder__$a.SearchField);
      var InputLineDefault = exports('a', __varRecorder__$a.InputLineDefault);
      var InputLineDark = exports('I', __varRecorder__$a.InputLineDark);
      __varRecorder__$a.SearchField = SearchField;
      __varRecorder__$a.InputLineDefault = InputLineDefault;
      __varRecorder__$a.InputLineDark = InputLineDark;

      var __varRecorder__$9 = lively.FreezerRuntime.recorderFor("lively.components/menus.js");
      __varRecorder__$9.Label = Label;
      __varRecorder__$9.config = config;
      __varRecorder__$9.Morph = Morph;
      __varRecorder__$9.obj = obj;
      __varRecorder__$9.promise = promise;
      __varRecorder__$9.fun = fun;
      __varRecorder__$9.pt = pt;
      __varRecorder__$9.Color = Color;
      __varRecorder__$9.Rectangle = Rectangle;
      __varRecorder__$9.Icon = Icon;
      var MenuDivider = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/menus.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MenuDivider") && typeof __lively_classholder__.MenuDivider === "function" ? __lively_classholder__.MenuDivider : __lively_classholder__.MenuDivider = function MenuDivider(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, undefined, [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MenuDivider";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              isMenuDevider: {
                defaultValue: true
              },
              fill: {
                defaultValue: __varRecorder__$9.Color.gray.lighter()
              },
              extent: {
                defaultValue: __varRecorder__$9.pt(100, 5)
              },
              reactsToPointer: {
                defaultValue: false
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./menus.js";
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
          start: 220,
          end: 552
        });
      }(__varRecorder__$9.Morph);
      __varRecorder__$9.MenuDivider = MenuDivider;
      __varRecorder__$9.MenuDivider = MenuDivider;
      var MenuItem = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/menus.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MenuItem") && typeof __lively_classholder__.MenuItem === "function" ? __lively_classholder__.MenuItem : __lively_classholder__.MenuItem = function MenuItem(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "onHoverIn",
          value: function MenuItem_onHoverIn_(evt) {
            var _this = this;

            this.owner.itemMorphs.forEach(function (ea) {
              return ea !== _this && (ea.selected = false);
            });
            this.selected = true;

            if (this.submenu) {
              this.owner.openSubMenuDelayed(evt, this, this.submenu);
            }
          }
        }, {
          key: "onHoverOut",
          value: function MenuItem_onHoverOut_(evt) {
            var _this2 = this;

            var hand = evt.hand;
            setTimeout(function () {
              var submenus = _this2.owner ? _this2.owner.submenus : [];

              if (!submenus.some(function (ea) {
                return ea.fullContainsWorldPoint(hand.globalPosition);
              })) {
                _this2.selected = false;
              }
            }, 20);
            this.owner.maybeRemoveSubmenu();
          }
        }, {
          key: "onMouseDown",
          value: function () {
            var _MenuItem_onMouseDown_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(evt) {
              var w;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.submenu) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      _context.prev = 2;
                      this.owner.startFinish();

                      if (!(typeof this.action !== "function")) {
                        _context.next = 6;
                        break;
                      }

                      throw new Error("Menu item ".concat(this.textString, " has no executable action!"));

                    case 6:
                      _context.next = 8;
                      return this.action();

                    case 8:
                      this.owner.completeFinish();
                      _context.next = 15;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](2);
                      w = this.world();
                      if (w) w.logError(_context.t0);else console.error(_context.t0);

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 11]]);
            }));

            function MenuItem_onMouseDown_(_x) {
              return _MenuItem_onMouseDown_.apply(this, arguments);
            }

            return MenuItem_onMouseDown_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MenuItem";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              acceptsDrops: {
                defaultValue: false
              },
              fixedWidth: {
                defaultValue: false
              },
              fixedHeight: {
                defaultValue: false
              },
              fill: {
                defaultValue: __varRecorder__$9.Color.transparent
              },
              fontSize: {
                defaultValue: 14
              },
              draggable: {
                defaultValue: false
              },
              readOnly: {
                defaultValue: true
              },
              nativeCursor: {
                defaultValue: "pointer"
              },
              lineHeight: {
                defaultValue: 1.4
              },
              selected: {
                defaultValue: false,
                set: function set(value) {
                  if (this.selected === value) return;
                  this.addValueChange("selected", value);

                  if (value) {
                    this.fontColor = __varRecorder__$9.Color.white;
                    this.fill = __varRecorder__$9.Color.rgb(21, 101, 192);
                  } else {
                    this.fill = __varRecorder__$9.Color.transparent;
                    this.fontColor = __varRecorder__$9.Color.black;
                  }
                }
              },
              isMenuItem: {
                derived: true,
                readOnly: true,
                get: function get() {
                  return true;
                }
              },
              label: {
                derived: true,
                after: ["borderWidth"],
                get: function get() {
                  var value = this.valueAndAnnotation.value;
                  var label = value.map(function (string, i) {
                    return i % 2 === 0 ? string : "";
                  }).join("\n");
                  return label;
                },
                set: function set(value) {
                  this.valueAndAnnotation = {
                    value: value,
                    annotation: this.annotation
                  };
                }
              },
              annotation: {
                derived: true,
                after: ["borderWidth"],
                get: function get() {
                  return this.valueAndAnnotation.annotation;
                },
                set: function set(annotation) {
                  this.valueAndAnnotation = {
                    value: this.value,
                    annotation: annotation
                  };
                }
              },
              action: {},
              submenu: {}
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./menus.js";
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
          start: 560,
          end: 3496
        });
      }(__varRecorder__$9.Label);
      __varRecorder__$9.MenuItem = MenuItem;
      __varRecorder__$9.MenuItem = MenuItem;
      __varRecorder__$9.invalidItem = {
        string: "invalid item",
        action: function action() {
          return $world.setStatusMessage("invalid item");
        }
      };
      var Menu = exports('M', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/menus.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Menu") && typeof __lively_classholder__.Menu === "function" ? __lively_classholder__.Menu : __lively_classholder__.Menu = function Menu(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isMenu",
          get: function get() {
            return true;
          }
        }, {
          key: "startFinish",
          value: function Menu_startFinish_() {
            if (this.ownerMenu) this.ownerMenu.startFinish();
            this._waitingForFinish = true;
          }
        }, {
          key: "completeFinish",
          value: function Menu_completeFinish_() {
            if (this.ownerMenu) this.ownerMenu.completeFinish();
            this.finishedPromise.resolve(true);
          }
        }, {
          key: "whenFinished",
          value: function Menu_whenFinished_() {
            return this.finishedPromise.promise;
          }
        }, {
          key: "onChange",
          value: function Menu_onChange_(change) {
            var prop = change.prop;
                change.selector;

            switch (prop) {
              case "itemPadding":
              case "fontSize":
              case "fontFamily":
                this.updateMorphs();
                break;
            }

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);
          }
        }, {
          key: "close",
          value: function Menu_close_() {
            this.remove();
          }
        }, {
          key: "remove",
          value: function () {
            var _Menu_remove_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.animate({
                        opacity: 0,
                        duration: 300
                      });

                    case 2:
                      if (!this._waitingForFinish) this.completeFinish();

                      initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "remove", this).call(this);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function Menu_remove_() {
              return _Menu_remove_.apply(this, arguments);
            }

            return Menu_remove_;
          }()
        }, {
          key: "ensureItem",
          value: function Menu_ensureItem_(item) {
            if (!item) return __varRecorder__$9.invalidItem;

            if (item.title) {
              this.title = item.title;
              return null;
            }

            if (item.isDivider) return item;

            if (item.hasOwnProperty("string") && item.hasOwnProperty("action")) {
              return __varRecorder__$9.obj.select(item, ["string", "action", "annotation"]);
            }

            if (Array.isArray(item)) {
              var _item = _slicedToArray(item, 2),
                  name = _item[0],
                  actionOrList = _item[1];

              if (typeof name !== "string" && !Array.isArray(name)) return __varRecorder__$9.invalidItem;

              if (!actionOrList || typeof actionOrList === "function") {
                return {
                  label: name,
                  action: actionOrList || function () {
                    return $world.setStatusMessage(name);
                  }
                };
              }

              if (_typeof(actionOrList) === "object" && actionOrList.getItems) {
                return {
                  label: name,
                  submenu: actionOrList.getItems,
                  annotation: __varRecorder__$9.Icon.textAttribute("caret-right")
                };
              }

              if (Array.isArray(actionOrList)) {
                return {
                  label: name,
                  submenu: actionOrList,
                  annotation: __varRecorder__$9.Icon.textAttribute("caret-right")
                };
              }

              return __varRecorder__$9.invalidItem;
            }

            if (item.command) {
              var command = item.command,
                  showKeyShortcuts = item.showKeyShortcuts,
                  target = item.target,
                  alias = item.alias,
                  args = item.args,
                  tooltip = item.tooltip;
              if (!command || !target) return __varRecorder__$9.invalidItem;
              if (showKeyShortcuts === undefined) showKeyShortcuts = true;
              var keys = !showKeyShortcuts ? null : typeof showKeyShortcuts === "string" ? showKeyShortcuts : target.keysForCommand(command);
              var label = alias || command;
              var annotation = keys ? ["\t".concat(keys), {
                fontSize: "70%"
              }] : ["", {}];
              return {
                tooltip: tooltip,
                string: label,
                annotation: annotation,
                action: function action() {
                  return target.execCommand(command, args);
                }
              };
            }

            return __varRecorder__$9.invalidItem;
          }
        }, {
          key: "updateMorphs",
          value: function () {
            var _Menu_updateMorphs_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return __varRecorder__$9.fun.guardNamed("updateMorphs" + this.id, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var pLeft, pRight, pTop, pBottom, maxWidth, pos, defaultStyle, title, _iterator, _step, _step$value, label, string, annotation, action, submenu, isDivider, tooltip, itemMorph;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _this3.submorphs = [];
                                pLeft = _this3.padding.left();
                                pRight = _this3.padding.right();
                                pTop = _this3.padding.top();
                                pBottom = _this3.padding.bottom();
                                maxWidth = 0;
                                pos = __varRecorder__$9.pt(pLeft, pTop);
                                defaultStyle = {};
                                if (_this3.fontFamily) defaultStyle.fontFamily = _this3.fontFamily;
                                if (_this3.fontSize) defaultStyle.fontSize = _this3.fontSize;
                                if (_this3.itemPadding) defaultStyle.padding = _this3.itemPadding;

                                if (!_this3.title) {
                                  _context3.next = 18;
                                  break;
                                }

                                title = _this3.addMorph(Object.assign({
                                  type: "label",
                                  value: _this3.title,
                                  name: "title",
                                  position: pos,
                                  fontWeight: "bold"
                                }, defaultStyle));
                                _context3.next = 15;
                                return title.whenFontLoaded();

                              case 15:
                                if (title.fit) title.fit();
                                pos = title.bottomLeft;
                                maxWidth = Math.max(title.width, maxWidth);

                              case 18:
                                _iterator = _createForOfIteratorHelper(_this3.items);
                                _context3.prev = 19;

                                _iterator.s();

                              case 21:
                                if ((_step = _iterator.n()).done) {
                                  _context3.next = 32;
                                  break;
                                }

                                _step$value = _step.value, label = _step$value.label, string = _step$value.string, annotation = _step$value.annotation, action = _step$value.action, submenu = _step$value.submenu, isDivider = _step$value.isDivider, tooltip = _step$value.tooltip;
                                itemMorph = _this3.addMorph(isDivider ? new __varRecorder__$9.MenuDivider({
                                  position: pos
                                }) : new __varRecorder__$9.MenuItem(Object.assign({
                                  label: label || string,
                                  annotation: annotation,
                                  action: action,
                                  submenu: submenu,
                                  tooltip: tooltip,
                                  position: pos
                                }, defaultStyle)));

                                if (!itemMorph.fit) {
                                  _context3.next = 28;
                                  break;
                                }

                                _context3.next = 27;
                                return itemMorph.whenFontLoaded();

                              case 27:
                                itemMorph.fit();

                              case 28:
                                pos = itemMorph.bottomLeft;
                                maxWidth = Math.max(itemMorph.width, maxWidth);

                              case 30:
                                _context3.next = 21;
                                break;

                              case 32:
                                _context3.next = 37;
                                break;

                              case 34:
                                _context3.prev = 34;
                                _context3.t0 = _context3["catch"](19);

                                _iterator.e(_context3.t0);

                              case 37:
                                _context3.prev = 37;

                                _iterator.f();

                                return _context3.finish(37);

                              case 40:
                                _this3.submorphs.forEach(function (ea) {
                                  ea.fixedWidth = true;
                                  ea.width = maxWidth;
                                  if (ea.fit) ea.fit();
                                });

                                _this3.extent = __varRecorder__$9.pt(maxWidth + pRight + pLeft, pos.y + pBottom);

                              case 42:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, null, [[19, 34, 37, 40]]);
                      })))();

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function Menu_updateMorphs_() {
              return _Menu_updateMorphs_.apply(this, arguments);
            }

            return Menu_updateMorphs_;
          }()
        }, {
          key: "openSubMenuDelayed",
          value: function Menu_openSubMenuDelayed_(evt, itemMorph, items) {
            var _this4 = this;

            this.openingSubMenuProcess && clearTimeout(this.openingSubMenuProcess);
            this.openingSubMenuProcess = setTimeout(function () {
              try {
                _this4.openSubMenu(evt, itemMorph, items);
              } catch (err) {
                var w = _this4.world();

                w ? w.logError(err) : console.error(err);
              }
            }, 200);
          }
        }, {
          key: "openSubMenu",
          value: function Menu_openSubMenu_(evt, itemMorph, items) {
            if (!itemMorph.selected) return;
            var existingSubMenu = this.submenu;

            if (existingSubMenu) {
              if (existingSubMenu.ownerItemMorph === itemMorph) return;
              if (this.morphsContainingPoint(evt.position).includes(existingSubMenu)) return;
              this.removeSubMenu();
            }

            if (typeof items === "function") items = items();
            var m = this.submenu = this.addMorph(new __varRecorder__$9.Menu({
              items: items,
              ownerItemMorph: itemMorph,
              ownerMenu: this
            }));
            m.updateMorphs();
            m.offsetForOwnerMenu();
          }
        }, {
          key: "maybeRemoveSubmenu",
          value: function Menu_maybeRemoveSubmenu_() {
            var _this5 = this;

            __varRecorder__$9.fun.debounceNamed(this.id + "-maybeRemoveSubmenu", 300, function () {
              var w = _this5.world();

              if (!w) return;
              var submenu = _this5.submenu,
                  selectedItemMorph = _this5.selectedItemMorph;
              var handOverSubmenu = w && submenu && submenu.fullContainsWorldPoint(w.firstHand.position);

              if (submenu && submenu.ownerItemMorph !== selectedItemMorph && !submenu.ownerItemMorph.selected) {
                if (handOverSubmenu) {
                  selectedItemMorph && (selectedItemMorph.selected = false);
                  submenu.ownerItemMorph.selected = true;
                } else _this5.removeSubMenu();
              }
            })();

            return this.removeOnMouseOut;
          }
        }, {
          key: "removeSubMenu",
          value: function Menu_removeSubMenu_() {
            if (!this.submenu) return;
            var m = this.submenu;
            m.ownerMenu = null;
            this.submenu = null;
            m.remove();
          }
        }, {
          key: "moveBoundsForVisibility",
          value: function Menu_moveBoundsForVisibility_(menuBounds, visibleBounds) {
            var offsetX = 0;
            var offsetY = 0;

            if (menuBounds.right() > visibleBounds.right()) {
              offsetX = -1 * (menuBounds.right() - visibleBounds.right());
            }

            var overlapLeft = menuBounds.left() + offsetX;
            if (overlapLeft < 0) offsetX += -overlapLeft;

            if (menuBounds.bottom() > visibleBounds.bottom()) {
              offsetY = -1 * (menuBounds.bottom() - visibleBounds.bottom());
              offsetX += 1;
            }

            var overlapTop = menuBounds.top() + offsetY;
            if (overlapTop < 0) offsetY += -overlapTop;
            return menuBounds.translatedBy(__varRecorder__$9.pt(offsetX, offsetY));
          }
        }, {
          key: "moveSubMenuBoundsForVisibility",
          value: function Menu_moveSubMenuBoundsForVisibility_(subMenuBnds, mainMenuItemBnds, visibleBounds, direction) {
            if (!direction) {
              direction = mainMenuItemBnds.right() + subMenuBnds.width > visibleBounds.right() ? "left" : "right";
            }

            var extent = subMenuBnds.extent();

            if (direction === "left") {
              subMenuBnds = mainMenuItemBnds.topLeft().addXY(-extent.x, 0).extent(extent);
            } else {
              subMenuBnds = mainMenuItemBnds.topRight().extent(extent);
            }

            if (subMenuBnds.bottom() > visibleBounds.bottom()) {
              var deltaY = -1 * (subMenuBnds.bottom() - visibleBounds.bottom());
              subMenuBnds = subMenuBnds.translatedBy(__varRecorder__$9.pt(0, deltaY));
            }

            if (subMenuBnds.top() < visibleBounds.top()) {
              var _deltaY = visibleBounds.top() - subMenuBnds.top();

              subMenuBnds = subMenuBnds.translatedBy(__varRecorder__$9.pt(0, _deltaY));
            }

            return subMenuBnds;
          }
        }, {
          key: "offsetForOwnerMenu",
          value: function Menu_offsetForOwnerMenu_() {
            var owner = this.ownerMenu;
            var visibleBounds = this.world().visibleBounds();
            var localVisibleBounds = owner.getGlobalTransform().inverse().transformRectToRect(visibleBounds);
            var newBounds = this.clipForVisibility(this.moveSubMenuBoundsForVisibility(this.innerBounds(), owner.selectedItemMorph ? owner.selectedItemMorph.bounds() : owner.innerBounds(), localVisibleBounds), visibleBounds);
            this.setBounds(newBounds);
          }
        }, {
          key: "clipForVisibility",
          value: function Menu_clipForVisibility_() {
            var bounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.bounds();
            var worldBounds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.world().visibleBounds();
            var globalBounds = this.transformRectToMorph(this.world(), bounds.withX(0).withY(0));
            var overlapping = !worldBounds.containsRect(globalBounds.insetBy(10));
            var scrollbarWidth = 0;

            if (overlapping) {
              bounds = bounds.withExtent(__varRecorder__$9.pt(scrollbarWidth + 5 + bounds.width, Math.min(globalBounds.height, worldBounds.height)));
            }

            return bounds;
          }
        }, {
          key: "offsetForWorld",
          value: function Menu_offsetForWorld_(pos) {
            var bounds = this.innerBounds().translatedBy(pos);

            if (this.owner.visibleBounds) {
              var worldBounds = this.owner.visibleBounds();
              bounds = this.clipForVisibility(this.moveBoundsForVisibility(bounds, worldBounds), worldBounds);
            }

            this.setBounds(bounds);
          }
        }, {
          key: "onHoverOut",
          value: function Menu_onHoverOut_() {
            if (this.removeOnMouseOut) this.remove();
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Menu";
          }
        }, {
          key: "forItems",
          value: function Menu_forItems_(items) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              title: ""
            };
            return new this(Object.assign({}, opts, {
              items: items
            }));
          }
        }, {
          key: "openAt",
          value: function Menu_openAt_(pos, items) {
            var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
              title: ""
            };
            var menu = this.forItems(items, opts).openInWorldNear(pos);
            menu.offsetForWorld(pos);
            return menu;
          }
        }, {
          key: "openAtHand",
          value: function Menu_openAtHand_(items) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              title: ""
            };
            var hand = opts.hand;
            var menu = this.forItems(items, __varRecorder__$9.obj.dissoc(opts, ["hand"]));
            var pos = hand ? hand.position : __varRecorder__$9.pt(0, 0);
            if (menu.titleMorph) pos = pos.addXY(0, -menu.titleMorph.height);
            menu.openInWorld(pos);
            menu.offsetForWorld(pos);
            return menu;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              dropShadow: {
                initialize: function initialize() {
                  if (__varRecorder__$9.config.fastShadows || !this.ownerMenu) {
                    this.dropShadow = true;
                    this.dropShadow.fast = false;
                  }
                }
              },
              submorphs: {
                initialize: function initialize() {
                  this.updateMorphs();
                }
              },
              epiMorph: {
                defaultValue: true
              },
              acceptsDrops: {
                defaultValue: false
              },
              hasFixedPosition: {
                defaultValue: true
              },
              padding: {
                defaultValue: __varRecorder__$9.Rectangle.inset(0, 2)
              },
              itemPadding: {
                defaultValue: __varRecorder__$9.Rectangle.inset(8, 4)
              },
              borderWidth: {
                defaultValue: 1
              },
              fill: {
                defaultValue: __varRecorder__$9.Color.white
              },
              borderColor: {
                defaultValue: __varRecorder__$9.Color.gray.lighter()
              },
              borderRadius: {
                defaultValue: 4
              },
              opacity: {
                defaultValue: 0.95
              },
              fontSize: {
                defaultValue: 16
              },
              title: {
                get: function get() {
                  return this.getProperty("title");
                },
                set: function set(value) {
                  this.addValueChange("title", value);
                }
              },
              finishedPromise: {
                initialize: function initialize() {
                  this.finishedPromise = __varRecorder__$9.promise.deferred();
                }
              },
              ownerMenu: {},
              submenu: {},
              styleClasses: {
                defaultValue: ["Halo"]
              },
              submenus: {
                readOnly: true,
                get: function get() {
                  return this.submenu ? [this.submenu].concat(this.submenu.submenus) : [];
                }
              },
              ownerItemMorph: {},
              removeOnMouseOut: {},
              items: {
                set: function set(items) {
                  items = items.map(this.ensureItem.bind(this)).filter(Boolean);
                  this.setProperty("items", items);
                }
              },
              selectedItemMorph: {
                derived: true,
                readOnly: true,
                get: function get() {
                  return this.itemMorphs.find(function (ea) {
                    return ea.selected;
                  });
                }
              },
              titleMorph: {
                derived: true,
                readOnly: true,
                get: function get() {
                  return this.getSubmorphNamed("title");
                }
              },
              itemMorphs: {
                derived: true,
                readOnly: true,
                get: function get() {
                  return this.submorphs.filter(function (ea) {
                    return ea.isMenuItem;
                  });
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./menus.js";
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
          start: 3611,
          end: 17139
        });
      }(__varRecorder__$9.Morph));
      __varRecorder__$9.Menu = Menu;
      __varRecorder__$9.Menu = Menu;

      var __captured3__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MenuDivider: MenuDivider,
        MenuItem: MenuItem,
        Menu: Menu
      });

      var __varRecorder__$8 = lively.FreezerRuntime.recorderFor("lively.components/resizers.js");
      __varRecorder__$8.arr = arr;
      __varRecorder__$8.obj = obj;
      __varRecorder__$8.pt = pt;
      __varRecorder__$8.Color = Color;
      __varRecorder__$8.Morph = Morph;
      var VerticalResizer = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/resizers.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("VerticalResizer") && typeof __lively_classholder__.VerticalResizer === "function" ? __lively_classholder__.VerticalResizer : __lively_classholder__.VerticalResizer = function VerticalResizer(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "onDrag",
          value: function VerticalResizer_onDrag_(evt) {
            var p1 = evt.state.lastDragPosition;
            var p2 = evt.position;
            var deltaX = p2.x - p1.x;
            this.movedHorizontallyBy(deltaX);
          }
        }, {
          key: "divideRelativeToParent",
          value: function VerticalResizer_divideRelativeToParent_(ratio) {
            if (!this.owner || typeof ratio !== "number" || ratio < 0 || ratio > 1) return;
            var ownerWidth = this.owner.extent.x - this.extent.x;
            if (ownerWidth < 0) return;
            var currentRatio = this.getRelativeDivide();
            var deltaRation = ratio - currentRatio;
            var deltaX = ownerWidth * deltaRation;
            this.movedHorizontallyBy(deltaX);
          }
        }, {
          key: "getRelativeDivide",
          value: function VerticalResizer_getRelativeDivide_(ratio) {
            var bounds = this.bounds();
            var myLeft = bounds.left();
            var myWidth = bounds.width;
            var ownerWidth = this.owner.extent.x - myWidth;
            return ownerWidth < 0 ? NaN : myLeft / ownerWidth;
          }
        }, {
          key: "movedHorizontallyBy",
          value: function VerticalResizer_movedHorizontallyBy_(deltaX) {
            if (!this.resizeIsSave(deltaX)) return;
            var morphsForPosChange = this.fixed.concat(this.scalingRight);
            morphsForPosChange.forEach(function (m) {
              var pos = m.position;
              m.position = __varRecorder__$8.pt(pos.x + deltaX, pos.y);
            });
            this.scalingLeft.forEach(function (m) {
              var ext = m.extent;
              m.extent = __varRecorder__$8.pt(ext.x + deltaX, ext.y);
            });
            this.scalingRight.forEach(function (m) {
              var ext = m.extent;
              m.extent = __varRecorder__$8.pt(ext.x - deltaX, ext.y);
            });
            this.position = this.position.addPt(__varRecorder__$8.pt(deltaX, 0));
          }
        }, {
          key: "resizeIsSave",
          value: function VerticalResizer_resizeIsSave_(deltaX) {
            var _this = this;

            return this.scalingLeft.every(function (m) {
              return m.extent.x + deltaX >= _this.minWidth;
            }) && this.scalingRight.every(function (m) {
              return m.extent.x - deltaX >= _this.minWidth;
            });
          }
        }, {
          key: "addFixed",
          value: function VerticalResizer_addFixed_(m) {
            __varRecorder__$8.arr.pushIfNotIncluded(this.fixed, m);
          }
        }, {
          key: "addScalingLeft",
          value: function VerticalResizer_addScalingLeft_(m) {
            __varRecorder__$8.arr.pushIfNotIncluded(this.scalingLeft, m);
          }
        }, {
          key: "addScalingRight",
          value: function VerticalResizer_addScalingRight_(m) {
            __varRecorder__$8.arr.pushIfNotIncluded(this.scalingRight, m);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "VerticalResizer";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: __varRecorder__$8.Color.gray.lighter()
              },
              nativeCursor: {
                defaultValue: "ew-resize"
              },
              fixed: {
                defaultValue: []
              },
              scalingLeft: {
                defaultValue: []
              },
              scalingRight: {
                defualtValue: []
              },
              minWidth: {
                defaultValue: 20
              },
              draggable: {
                defaultValue: true
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./resizers.js";
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
          start: 132,
          end: 2821
        });
      }(__varRecorder__$8.Morph);
      __varRecorder__$8.VerticalResizer = VerticalResizer;
      __varRecorder__$8.VerticalResizer = VerticalResizer;
      var HorizontalResizer = exports('H', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/resizers.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("HorizontalResizer") && typeof __lively_classholder__.HorizontalResizer === "function" ? __lively_classholder__.HorizontalResizer : __lively_classholder__.HorizontalResizer = function HorizontalResizer(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "getRefs",
          value: function HorizontalResizer_getRefs_(refs) {
            var _this2 = this;

            return __varRecorder__$8.arr.uniq(refs.map(function (m) {
              return __varRecorder__$8.obj.isString(m) ? _this2.get(m) : m;
            }));
          }
        }, {
          key: "onDrag",
          value: function HorizontalResizer_onDrag_(evt) {
            var p1 = evt.state.lastDragPosition;
            var p2 = evt.position;
            var deltaY = p2.y - p1.y;
            this.movedVerticallyBy(deltaY);
          }
        }, {
          key: "divideRelativeToParent",
          value: function HorizontalResizer_divideRelativeToParent_(ratio) {
            if (!this.owner || typeof ratio !== "number" || ratio < 0 || ratio > 1) return;
            var ownerHeight = this.owner.extent.y - this.extent.y;
            if (ownerHeight < 0) return;
            var currentRatio = this.getRelativeDivide();
            var deltaRation = ratio - currentRatio;
            var deltaY = ownerHeight * deltaRation;
            this.movedVerticallyBy(deltaY);
          }
        }, {
          key: "getRelativeDivide",
          value: function HorizontalResizer_getRelativeDivide_(ratio) {
            var bounds = this.bounds();
            var myTop = bounds.top();
            var myHeight = bounds.height;
            var ownerHeight = this.owner.extent.y - myHeight;
            return ownerHeight < 0 ? NaN : myTop / ownerHeight;
          }
        }, {
          key: "movedVerticallyBy",
          value: function HorizontalResizer_movedVerticallyBy_(deltaY) {
            if (!this.resizeIsSave(deltaY)) return;
            var morphsForPosChange = this.getRefs(this.fixed.concat(this.scalingBelow));
            morphsForPosChange.forEach(function (m) {
              var pos = m.position;
              m.position = __varRecorder__$8.pt(pos.x, pos.y + deltaY);
            });
            this.getRefs(this.scalingAbove).forEach(function (m) {
              var ext = m.extent;
              m.extent = __varRecorder__$8.pt(ext.x, ext.y + deltaY);
            });
            this.getRefs(this.scalingBelow).forEach(function (m) {
              var ext = m.extent;
              m.extent = __varRecorder__$8.pt(ext.x, ext.y - deltaY);
            });
            this.position = this.position.addPt(__varRecorder__$8.pt(0, deltaY));
          }
        }, {
          key: "resizeIsSave",
          value: function HorizontalResizer_resizeIsSave_(deltaY) {
            var _this3 = this;

            return this.getRefs(this.scalingAbove).every(function (m) {
              return m.extent.y + deltaY >= _this3.minHeight;
            }) && this.getRefs(this.scalingBelow).every(function (m) {
              return m.extent.y - deltaY >= _this3.minHeight;
            });
          }
        }, {
          key: "addFixed",
          value: function HorizontalResizer_addFixed_(m) {
            __varRecorder__$8.arr.pushIfNotIncluded(this.fixed, m);
          }
        }, {
          key: "addScalingAbove",
          value: function HorizontalResizer_addScalingAbove_(m) {
            __varRecorder__$8.arr.pushIfNotIncluded(this.scalingAbove, m);
          }
        }, {
          key: "addScalingBelow",
          value: function HorizontalResizer_addScalingBelow_(m) {
            __varRecorder__$8.arr.pushIfNotIncluded(this.scalingBelow, m);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "HorizontalResizer";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: __varRecorder__$8.Color.gray.lighter()
              },
              nativeCursor: {
                defaultValue: "ns-resize"
              },
              fixed: {
                defaultValue: []
              },
              scalingBelow: {
                defaultValue: []
              },
              scalingAbove: {
                defaultValue: []
              },
              minHeight: {
                defaultValue: 20
              },
              draggable: {
                defaultValue: true
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./resizers.js";
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
          start: 2829,
          end: 5736
        });
      }(__varRecorder__$8.Morph));
      __varRecorder__$8.HorizontalResizer = HorizontalResizer;
      __varRecorder__$8.HorizontalResizer = HorizontalResizer;

      var __captured4__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        VerticalResizer: VerticalResizer,
        HorizontalResizer: HorizontalResizer
      });

      var __varRecorder__$7 = lively.FreezerRuntime.recorderFor("lively.components/tree.js");
      __varRecorder__$7.arr = arr;
      __varRecorder__$7.obj = obj;
      __varRecorder__$7.tree = tree;
      __varRecorder__$7.string = string;
      __varRecorder__$7.promise = promise;
      __varRecorder__$7.pt = pt;
      __varRecorder__$7.Rectangle = Rectangle;
      __varRecorder__$7.Color = Color;
      __varRecorder__$7.Text = Text;
      __varRecorder__$7.config = config;
      __varRecorder__$7.touchInputDevice = touchInputDevice;
      __varRecorder__$7.signal = signal;
      var Tree = exports('e', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/tree.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Tree") && typeof __lively_classholder__.Tree === "function" ? __lively_classholder__.Tree : __lively_classholder__.Tree = function Tree(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function Tree_initialize_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            if (!props.treeData) {
              throw new Error("Cannot create tree without TreeData!");
            }

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            this.needsDocument = true;
            this.resetCache();
            this.update();
            return _this;
          }
        }, {
          key: "onChange",
          value: function Tree_onChange_(change) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);

            if (["fontSize", "fontColor", "selectionColor", "disableIndent", "nonSelectionFontColor", "selectionFontColor"].includes(change.prop)) {
              this.update(true);
            }
          }
        }, {
          key: "resetCache",
          value: function Tree_resetCache_() {
            this._lineHeightCache = null;
          }
        }, {
          key: "isTree",
          get: function get() {
            return true;
          }
        }, {
          key: "nodeStyle",
          get: function get() {
            return {
              fontFamily: this.fontFamily,
              fontSize: this.fontSize,
              fontWeight: this.fontWeight,
              autofit: !this.resizeNodes
            };
          }
        }, {
          key: "lineBounds",
          value: function Tree_lineBounds_(idx) {
            var charBounds = this.textLayout.charBoundsOfRow(this, idx);

            var tl = __varRecorder__$7.Rectangle.fromLiteral(__varRecorder__$7.arr.first(charBounds)).topLeft();

            var br = __varRecorder__$7.Rectangle.fromLiteral(__varRecorder__$7.arr.last(charBounds)).bottomRight();

            return __varRecorder__$7.Rectangle.fromAny(tl, br);
          }
        }, {
          key: "recoverOriginalLine",
          value: function Tree_recoverOriginalLine_(row) {
            var attrs = this.document.getTextAndAttributesOfLine(row);

            for (var i = 0; i < attrs.length; i++) {
              var fontColor = this._originalColor[i];
              if (!fontColor || __varRecorder__$7.obj.isString(attrs[i])) continue;

              if (attrs[i]) {
                attrs[i].fontColor = fontColor;
              } else {
                attrs[i] = {
                  fontColor: fontColor
                };
              }
            }

            this.document.setTextAndAttributesOfLine(row, attrs);
          }
        }, {
          key: "renderSelectedLine",
          value: function Tree_renderSelectedLine_(row) {
            var attrs = this.document.getTextAndAttributesOfLine(row);
            this._originalColor = new Array(attrs.length);

            for (var i = 0; i < attrs.length; i++) {
              if (i % 2 === 0) {
                if (attrs[i] && attrs[i].isMorph) {
                  this._originalColor[i] = attrs[i] ? attrs[i].fontColor || this.nonSelectionFontColor : null;
                  attrs[i].fontColor = this.selectionFontColor;
                  attrs[i].isSelected = true;
                  continue;
                } else {
                  continue;
                }
              }

              this._originalColor[i] = (attrs[i] ? attrs[i].fontColor : null) || this.nonSelectionFontColor;

              if (attrs[i]) {
                attrs[i].fontColor = this.selectionFontColor;
              } else {
                attrs[i] = {
                  fontColor: this.selectionFontColor
                };
              }
            }

            this.document.setTextAndAttributesOfLine(row, attrs);
            this.renderingState.renderedTextAndAttributes = null;
            this.selectLine(row, true);
            this._lastSelectedIndex = row + 1;
          }
        }, {
          key: "computeTreeAttributes",
          value: function Tree_computeTreeAttributes_(nodes) {
            if (!nodes.length) return [];

            var containerTextAndAttributes = __varRecorder__$7.arr.genN(8 * (nodes.length - 1), function () {
              return undefined;
            });

            var i = 1;
            var j;
            var isSelected;
            var toggleWidth = this.disableIndent ? 0 : this.fontSize * 1.3;
            var offset = 0;
            var selectedIndex = this.selectedIndex;

            for (; i < nodes.length; i++) {
              j = 8 * (i - 1) + offset;
              isSelected = selectedIndex == i;
              nodes[i].node.isSelected = isSelected;
              containerTextAndAttributes[j] = " ";
              containerTextAndAttributes[j + 1] = {
                fontSize: toggleWidth,
                fontColor: __varRecorder__$7.Color.transparent,
                paddingRight: toggleWidth * (nodes[i].depth - 1) + "px"
              };
              containerTextAndAttributes[j + 3] = {
                fontColor: __varRecorder__$7.Color.transparent,
                paddingTop: this.fontSize / 10 + "px",
                paddingRight: this.fontSize / 8 + "px",
                fontFamily: "Font Awesome"
              };

              if (!this.treeData.isLeaf(nodes[i].node)) {
                containerTextAndAttributes[j + 2] = this.treeData.isCollapsed(nodes[i].node) ? " \uF0DA " : " \uF0D7 ";
                Object.assign(containerTextAndAttributes[j + 3], {
                  paddingRight: this.treeData.isCollapsed(nodes[i].node) ? "".concat(this.fontSize / 8, "px") : "0px",
                  paddingTop: "0px",
                  nativeCursor: "pointer",
                  fontColor: this.fontColor
                });
              } else {
                containerTextAndAttributes[j + 2] = this.disableIndent ? "" : "    ";
              }

              var displayedNode = this.treeData.safeDisplay(nodes[i].node);

              if (displayedNode.isMorph) {
                if (displayedNode._capturedProps) {
                  Object.assign(displayedNode, displayedNode._capturedProps);
                }

                if (isSelected) {
                  displayedNode._capturedProps = __varRecorder__$7.obj.select(displayedNode, ["fontColor"]);
                }

                displayedNode.fontColor = this.nonSelectionFontColor;
              }

              if (Array.isArray(displayedNode)) {
                displayedNode = displayedNode.flat();

                __varRecorder__$7.arr.pushAllAt(containerTextAndAttributes, displayedNode, j + 4);

                var increment = Math.max(0, displayedNode.length - 2);
                j += increment;
                offset += increment;
              } else {
                containerTextAndAttributes[j + 4] = displayedNode;
                containerTextAndAttributes[j + 5] = {
                  fontColor: this.fontColor
                };
              }

              containerTextAndAttributes[j + 6] = "\n";
              containerTextAndAttributes[j + 7] = {};
            }

            containerTextAndAttributes.push(" ", {
              fontSize: this.fontSize * 1.3,
              textStyleClasses: ["far"]
            });
            containerTextAndAttributes = containerTextAndAttributes.filter(function (v) {
              return typeof v !== "undefined";
            });
            return nodes.length > 1 ? containerTextAndAttributes : [];
          }
        }, {
          key: "update",
          value: function Tree_update_(force) {
            var _this2 = this;

            if (this._updating || !this.treeData || !this.nodeItemContainer) return;
            this._updating = true;

            try {
              this.withMetaDo({
                isLayoutAction: true
              }, function () {
                var treeData = _this2.treeData,
                    padding = _this2.padding,
                    extent = _this2.extent,
                    resizeNodes = _this2.resizeNodes,
                    nodeMorphs = _this2.nodeMorphs,
                    selectedNode = _this2.selectedNode;
                if (!treeData.isTreeData) return;
                var nodes = treeData.asListWithIndexAndDepth();
                var treeDataRestructured = _this2.treeData !== _this2.lastTreeData || _this2.lastNumberOfNodes !== nodes.length;
                var row, attrs;

                if (treeDataRestructured || force) {
                  _this2.replace({
                    start: {
                      row: 0,
                      column: 0
                    },
                    end: _this2.documentEndPosition
                  }, _this2.computeTreeAttributes(nodes), false, false);

                  _this2.invalidateTextLayout(true, false);
                } else if (_this2._lastSelectedIndex) {
                  _this2.recoverOriginalLine(_this2._lastSelectedIndex - 1);
                }

                _this2.lastTreeData = _this2.treeData;
                _this2.lastNumberOfNodes = nodes.length;
                _this2.cursorPosition = {
                  row: 0,
                  column: 0
                };

                if (_this2.selectedIndex > 0) {
                  _this2.renderSelectedLine(_this2.selectedIndex - 1);
                } else {
                  var selection = _this2.getProperty("selection");

                  if (selection && !selection.isEmpty()) {
                    selection.collapse(selection.lead);
                  }
                }
              });
            } finally {
              this._updating = false;
            }
          }
        }, {
          key: "buildViewState",
          value: function Tree_buildViewState_(nodeIdFn) {
            var _this3 = this;

            if (typeof nodeIdFn !== "function") {
              nodeIdFn = function nodeIdFn(node) {
                return node;
              };
            }

            var selId = this.selectedNode ? nodeIdFn(this.selectedNode) : null;
            var collapsedMap = new Map();

            __varRecorder__$7.tree.prewalk(this.treeData.root, function (node) {
              return collapsedMap.set(nodeIdFn(node), _this3.treeData.isCollapsed(node));
            }, function (node) {
              return _this3.treeData.getChildrenIfUncollapsed(node);
            });

            return {
              selectionId: selId,
              collapsedMap: collapsedMap,
              scroll: this.scroll
            };
          }
        }, {
          key: "applyViewState",
          value: function () {
            var _Tree_applyViewState_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(viewState, nodeIdFn) {
              var selectionId, collapsedMap, scroll, i, newSelIndex, nodes, id;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (typeof nodeIdFn !== "function") {
                        nodeIdFn = function nodeIdFn(node) {
                          return node;
                        };
                      }

                      selectionId = viewState.selectionId, collapsedMap = viewState.collapsedMap, scroll = viewState.scroll;
                      i = 0;
                      newSelIndex = -1;

                    case 4:

                      nodes = this.nodes;

                      if (!(i >= nodes.length)) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("break", 16);

                    case 8:
                      id = nodeIdFn(nodes[i]);
                      if (selectionId === id) newSelIndex = i;

                      if (!(collapsedMap.has(id) && !collapsedMap.get(id))) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 13;
                      return this.treeData.collapse(nodes[i], false);

                    case 13:
                      i++;
                      _context.next = 4;
                      break;

                    case 16:
                      this.selectedIndex = newSelIndex;
                      this.update();
                      this.scroll = scroll;
                      this.scrollSelectionIntoView();
                      _context.next = 22;
                      return __varRecorder__$7.promise.delay(0);

                    case 22:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function Tree_applyViewState_(_x, _x2) {
              return _Tree_applyViewState_.apply(this, arguments);
            }

            return Tree_applyViewState_;
          }()
        }, {
          key: "maintainViewStateWhile",
          value: function () {
            var _Tree_maintainViewStateWhile_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(whileFn, nodeIdFn) {
              var viewState;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      viewState = this.buildViewState(nodeIdFn);
                      _context2.next = 3;
                      return whileFn();

                    case 3:
                      _context2.next = 5;
                      return this.applyViewState(viewState, nodeIdFn);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function Tree_maintainViewStateWhile_(_x3, _x4) {
              return _Tree_maintainViewStateWhile_.apply(this, arguments);
            }

            return Tree_maintainViewStateWhile_;
          }()
        }, {
          key: "onNodeCollapseChanged",
          value: function () {
            var _Tree_onNodeCollapseChanged_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref) {
              var node, isCollapsed;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      node = _ref.node, isCollapsed = _ref.isCollapsed;
                      this.resetCache();
                      _context3.prev = 2;
                      _context3.next = 5;
                      return this.treeData.collapse(node, isCollapsed);

                    case 5:
                      __varRecorder__$7.signal(this, "nodeCollapseChanged", {
                        node: node,
                        isCollapsed: isCollapsed
                      });

                      this.update();
                      _context3.next = 12;
                      break;

                    case 9:
                      _context3.prev = 9;
                      _context3.t0 = _context3["catch"](2);
                      this.showError(_context3.t0);

                    case 12:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[2, 9]]);
            }));

            function Tree_onNodeCollapseChanged_(_x5) {
              return _Tree_onNodeCollapseChanged_.apply(this, arguments);
            }

            return Tree_onNodeCollapseChanged_;
          }()
        }, {
          key: "uncollapse",
          value: function () {
            var _Tree_uncollapse_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var node,
                  _args4 = arguments;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      node = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : this.selectedNode;

                      if (!(!node || !this.treeData.isCollapsed(node))) {
                        _context4.next = 3;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 3:
                      _context4.next = 5;
                      return this.onNodeCollapseChanged({
                        node: node,
                        isCollapsed: false
                      });

                    case 5:
                      return _context4.abrupt("return", node);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function Tree_uncollapse_() {
              return _Tree_uncollapse_.apply(this, arguments);
            }

            return Tree_uncollapse_;
          }()
        }, {
          key: "collapse",
          value: function () {
            var _Tree_collapse_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var node,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      node = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : this.selectedNode;

                      if (!(!node || this.treeData.isCollapsed(node))) {
                        _context5.next = 3;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 3:
                      _context5.next = 5;
                      return this.onNodeCollapseChanged({
                        node: node,
                        isCollapsed: true
                      });

                    case 5:
                      return _context5.abrupt("return", node);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function Tree_collapse_() {
              return _Tree_collapse_.apply(this, arguments);
            }

            return Tree_collapse_;
          }()
        }, {
          key: "selectedPath",
          value: function Tree_selectedPath_() {
            return this.treeData.pathOf(this.selectedNode);
          }
        }, {
          key: "selectPath",
          value: function () {
            var _Tree_selectPath_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path) {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.treeData.followPath(path);

                    case 2:
                      return _context6.abrupt("return", this.selectedNode = _context6.sent);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function Tree_selectPath_(_x6) {
              return _Tree_selectPath_.apply(this, arguments);
            }

            return Tree_selectPath_;
          }()
        }, {
          key: "gotoIndex",
          value: function Tree_gotoIndex_(i) {
            this.selectedNode = this.nodes[i];
            this.scrollIndexIntoView(i);
          }
        }, {
          key: "scrollSelectionIntoView",
          value: function Tree_scrollSelectionIntoView_() {
            this.selectedNode && this.scrollIndexIntoView(this.selectedIndex);
          }
        }, {
          key: "scrollIndexIntoView",
          value: function Tree_scrollIndexIntoView_(idx) {
            this.scrollToIndex(idx, "into view");
          }
        }, {
          key: "centerSelection",
          value: function Tree_centerSelection_() {
            this.selectedNode && this.scrollToIndex(this.selectedIndex, "center");
          }
        }, {
          key: "scrollToIndex",
          value: function Tree_scrollToIndex_(idx) {
            this.scrollPositionIntoView({
              row: idx - 1,
              column: 0
            });
          }
        }, {
          key: "contextMenuForNode",
          value: function Tree_contextMenuForNode_(node, evt) {
            __varRecorder__$7.signal(this, "contextMenuRequested", {
              node: node,
              evt: evt
            });
          }
        }, {
          key: "onKeyDown",
          value: function Tree_onKeyDown_(evt) {
            var w = this.world();
            var f = w.focusedMorph;
            if (f.isText && !f.readOnly) return;
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onKeyDown", this).call(this, evt);
          }
        }, {
          key: "onDragStart",
          value: function Tree_onDragStart_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDragStart", this).call(this, evt);

            var _ref2 = this.textAttributeAtPoint(evt.positionIn(this)) || {},
                onDragStart = _ref2.onDragStart,
                onDrag = _ref2.onDrag,
                onDragEnd = _ref2.onDragEnd;

            if (onDrag) this._onDragHandler = onDrag;
            if (onDragEnd) this._onDragEndHandler = onDragEnd;
            if (onDragStart) onDragStart(evt);
          }
        }, {
          key: "onDrag",
          value: function Tree_onDrag_(evt) {
            if (this._onDragHandler) this._onDragHandler(evt);else initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDrag", this).call(this, evt);
          }
        }, {
          key: "onDragEnd",
          value: function Tree_onDragEnd_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDragEnd", this).call(this, evt);

            delete this._onDragHandler;
            if (this._onDragEndHandler) this._onDragEndHandler(evt);
            delete this._onDragEndHandler;
          }
        }, {
          key: "onMouseDown",
          value: function () {
            var _Tree_onMouseDown_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(evt) {
              var _this$textPositionFro, row, column, clickedNode, _ref3, onMouseDown;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseDown", this).call(this, evt);

                      _this$textPositionFro = this.textPositionFromPoint(evt.positionIn(this)), row = _this$textPositionFro.row, column = _this$textPositionFro.column;
                      clickedNode = this.nodes[row + 1];

                      if (clickedNode) {
                        _context7.next = 5;
                        break;
                      }

                      return _context7.abrupt("return");

                    case 5:
                      if (!(!this.treeData.isLeaf(clickedNode) && column < 4)) {
                        _context7.next = 15;
                        break;
                      }

                      _context7.next = 8;
                      return clickedNode.isCollapsed;

                    case 8:
                      if (!_context7.sent) {
                        _context7.next = 12;
                        break;
                      }

                      this.uncollapse(clickedNode);
                      _context7.next = 13;
                      break;

                    case 12:
                      this.collapse(clickedNode);

                    case 13:
                      _context7.next = 16;
                      break;

                    case 15:
                      if (this.selectedIndex != row + 1) {
                        this.selectedIndex = row + 1;
                      } else __varRecorder__$7.signal(this, "reselectedCurrentSelection", this.selectedNode);

                    case 16:
                      _ref3 = this.textAttributeAt({
                        row: row,
                        column: column
                      }) || {}, onMouseDown = _ref3.onMouseDown;
                      if (onMouseDown) onMouseDown(evt);

                    case 18:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function Tree_onMouseDown_(_x7) {
              return _Tree_onMouseDown_.apply(this, arguments);
            }

            return Tree_onMouseDown_;
          }()
        }, {
          key: "onMouseUp",
          value: function Tree_onMouseUp_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseUp", this).call(this, evt);

            var _ref4 = this.textAttributeAtPoint(evt.positionIn(this)) || {},
                onMouseUp = _ref4.onMouseUp;

            if (onMouseUp) onMouseUp(evt);
          }
        }, {
          key: "onHoverIn",
          value: function Tree_onHoverIn_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onHoverIn", this).call(this, evt);

            if (this.activateOnHover) {
              this.clipMode = "auto";
            }
          }
        }, {
          key: "onHoverOut",
          value: function Tree_onHoverOut_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onHoverOut", this).call(this, evt);

            if (__varRecorder__$7.touchInputDevice) return;

            if (this.activateOnHover) {
              this.clipMode = "hidden";
            }
          }
        }, {
          key: "onContextMenu",
          value: function Tree_onContextMenu_(evt) {
            if (evt.targetMorph !== this) return;
            evt.stop();

            var _this$textPositionFro2 = this.textPositionFromPoint(evt.positionIn(this)),
                row = _this$textPositionFro2.row;
                _this$textPositionFro2.column;

            var clickedNode = this.nodes[row + 1];
            if (!clickedNode) return;
            this.contextMenuForNode(clickedNode, evt);
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Up|Ctrl-P",
              command: "select node above"
            }, {
              keys: "Down|Ctrl-N",
              command: "select node below"
            }, {
              keys: "Left",
              command: "collapse selected node"
            }, {
              keys: "Right",
              command: "uncollapse selected node"
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
            }, {
              keys: {
                mac: "Meta-[",
                win: "Ctrl-["
              },
              command: {
                command: "collapse or uncollapse all siblings",
                args: {
                  what: "collapse"
                }
              }
            }, {
              keys: {
                mac: "Meta-]",
                win: "Ctrl-]"
              },
              command: {
                command: "collapse or uncollapse all siblings",
                args: {
                  what: "uncollapse"
                }
              }
            }, {
              keys: "Alt-N",
              command: "goto next sibling"
            }, {
              keys: "Alt-P",
              command: "goto prev sibling"
            }, {
              keys: "Alt-U",
              command: "goto parent"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            return __varRecorder__$7.treeCommands;
          }
        }, {
          key: "highlightChangedNodes",
          value: function Tree_highlightChangedNodes_(treeData) {
            var changedNodes = this.treeData.diff(treeData);
            changedNodes.forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  n = _ref6[0];
                  _ref6[1];

              return n.renderedNode && n.renderedNode.highlight();
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Tree";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              selectionColor: {
                type: "ColorGradient",
                defaultValue: __varRecorder__$7.Color.rgb(21, 101, 192)
              },
              fontFamily: {
                defaultValue: __varRecorder__$7.config.codeEditor.defaultStyle.fontFamily
              },
              nativeCursor: {
                defaultValue: "auto"
              },
              selectable: {
                defaultValue: false
              },
              acceptsDrops: {
                defaultValue: false
              },
              fixedWidth: {
                defaultValue: true
              },
              fixedHeight: {
                defaultValue: true
              },
              disableIndent: {
                defaultValue: false
              },
              activateOnHover: {
                defaultValue: true
              },
              readOnly: {
                defaultValue: true
              },
              needsDocument: {
                defaultValue: true
              },
              lineHeight: {
                defaultValue: 1.3
              },
              clipMode: {
                defaultValue: "auto"
              },
              padding: {
                defaultValue: __varRecorder__$7.Rectangle.inset(3)
              },
              resizeNodes: {
                defaultValue: false,
                set: function set(val) {
                  this.setProperty("resizeNodes", val);
                  this.resetCache();
                  this.update();
                }
              },
              treeData: {
                after: ["selection"],
                set: function set(val) {
                  this.setProperty("treeData", val);
                  this.resetCache();
                  this.update();
                }
              },
              selectedIndex: {
                derived: true,
                after: ["selectedNode", "nodes"],
                get: function get() {
                  return this.selectedNode ? this.nodes.indexOf(this.selectedNode) : -1;
                },
                set: function set(i) {
                  this.selectedNode = this.nodes[i];
                }
              },
              nodes: {
                derived: true,
                after: ["treeData"],
                get: function get() {
                  return this.treeData.asList();
                }
              },
              selectedNode: {
                set: function set(sel) {
                  this.setProperty("selectedNode", sel);
                  this.update();
                }
              },
              selectedNodeAndSiblings: {
                readOnly: true,
                derived: true,
                after: ["selectedNode", "treeData"],
                get: function get() {
                  return this.selectedNode ? this.treeData.nodeWithSiblings(this.selectedNode) : [];
                }
              },
              selectionFontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$7.Color.white,
                set: function set(c) {
                  this.setProperty("selectionFontColor", c);
                }
              },
              nonSelectionFontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$7.Color.rgbHex("333"),
                set: function set(c) {
                  this.setProperty("nonSelectionFontColor", c);
                }
              },
              nodeItemContainer: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return this;
                }
              },
              nodeMorphs: {
                derived: true,
                readOnly: true,
                after: ["submorphs"],
                get: function get() {
                  return this.nodeItemContainer.submorphs.slice();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./tree.js";
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
          start: 1414,
          end: 19119
        });
      }(__varRecorder__$7.Text));
      __varRecorder__$7.Tree = Tree;
      __varRecorder__$7.Tree = Tree;
      var TreeData = exports('T', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/tree.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("TreeData") && typeof __lively_classholder__.TreeData === "function" ? __lively_classholder__.TreeData : __lively_classholder__.TreeData = function TreeData(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function TreeData_initialize_(root) {
            this.root = root;
            this.parentMap = new WeakMap();
          }
        }, {
          key: "isTreeData",
          get: function get() {
            return true;
          }
        }, {
          key: "__dont_serialize__",
          get: function get() {
            return ["parentMap"];
          }
        }, {
          key: "__deserialize__",
          value: function TreeData___deserialize___() {
            this.parentMap = new WeakMap();
          }
        }, {
          key: "display",
          value: function TreeData_display_(node) {
            throw new Error("Not yet implemented");
          }
        }, {
          key: "isCollapsed",
          value: function TreeData_isCollapsed_(node) {
            throw new Error("Not yet implemented");
          }
        }, {
          key: "collapse",
          value: function TreeData_collapse_(node, bool) {
            throw new Error("Not yet implemented");
          }
        }, {
          key: "getChildren",
          value: function TreeData_getChildren_(node) {
            throw new Error("Not yet implemented");
          }
        }, {
          key: "isLeaf",
          value: function TreeData_isLeaf_(node) {
            throw new Error("Not yet implemented");
          }
        }, {
          key: "getChildrenIfUncollapsed",
          value: function TreeData_getChildrenIfUncollapsed_(node) {
            if (this.isCollapsed(node)) return [];
            return this.getChildren(node);
          }
        }, {
          key: "safeDisplay",
          value: function TreeData_safeDisplay_(node) {
            try {
              return this.display(node);
            } catch (e) {
              return "[TreeData] Error when trying to display node: ".concat(e);
            }
          }
        }, {
          key: "nodeToString",
          value: function TreeData_nodeToString_(node) {
            var value = this.safeDisplay(node);
            if (typeof value === "string") return value;
            if (!value || !Array.isArray(value)) return String(value);
            return value.map(function (text, i) {
              return i % 2 === 0 ? text : "";
            }).join("");
          }
        }, {
          key: "parentNode",
          value: function TreeData_parentNode_(childNode) {
            var _this4 = this;

            return this.parentMap.get(childNode) || __varRecorder__$7.tree.detect(this.root, function (node) {
              return !_this4.isLeaf(node) && _this4.getChildrenIfUncollapsed(node).includes(childNode);
            }, function (node) {
              return _this4.getChildrenIfUncollapsed(node);
            });
          }
        }, {
          key: "nodeWithSiblings",
          value: function TreeData_nodeWithSiblings_(node) {
            var parent = this.parentNode(node);
            return parent ? this.getChildrenIfUncollapsed(parent) : [];
          }
        }, {
          key: "asList",
          value: function TreeData_asList_() {
            return this.asListWithIndexAndDepth().map(function (ea) {
              return ea.node;
            });
          }
        }, {
          key: "asListWithIndexAndDepth",
          value: function TreeData_asListWithIndexAndDepth_() {
            var _this5 = this;

            var filterFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var nodesWithIndex = [];

            __varRecorder__$7.tree.prewalk(this.root, function (node, i, depth) {
              return nodesWithIndex.push({
                node: node,
                depth: depth,
                i: i
              });
            }, function (node) {
              return _this5.getChildrenIfUncollapsed(node);
            });

            return filterFn ? nodesWithIndex.filter(filterFn) : nodesWithIndex;
          }
        }, {
          key: "pathOf",
          value: function TreeData_pathOf_(node) {
            var path = [];

            while (node) {
              path.unshift(node);
              node = this.parentNode(node);
            }

            return path;
          }
        }, {
          key: "followPath",
          value: function () {
            var _TreeData_followPath_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(path, eqFn) {
              var startNode,
                  startIndex,
                  currentNode,
                  nextPathPart,
                  nextNode,
                  _args8 = arguments;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      startNode = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : this.root;
                      if (!eqFn) eqFn = function eqFn(pathPart, node) {
                        return pathPart === node;
                      };
                      startIndex = path.findIndex(function (ea) {
                        return eqFn(ea, startNode);
                      });
                      path = path.slice(startIndex + 1);

                      if (path.length) {
                        _context8.next = 6;
                        break;
                      }

                      return _context8.abrupt("return", null);

                    case 6:
                      currentNode = startNode;

                    case 7:

                      if (path.length) {
                        _context8.next = 10;
                        break;
                      }

                      return _context8.abrupt("break", 20);

                    case 10:
                      if (!this.isCollapsed(currentNode)) {
                        _context8.next = 13;
                        break;
                      }

                      _context8.next = 13;
                      return this.collapse(currentNode, false);

                    case 13:
                      nextPathPart = path.shift();
                      nextNode = this.getChildrenIfUncollapsed(currentNode).find(function (ea) {
                        return eqFn(nextPathPart, ea);
                      });

                      if (nextNode) {
                        _context8.next = 17;
                        break;
                      }

                      throw new Error("Cannot descend into tree, next node of ".concat(path.join("."), " not found at ").concat(this.safeDisplay(currentNode)));

                    case 17:
                      currentNode = nextNode;
                      _context8.next = 7;
                      break;

                    case 20:
                      return _context8.abrupt("return", currentNode);

                    case 21:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function TreeData_followPath_(_x8, _x9) {
              return _TreeData_followPath_.apply(this, arguments);
            }

            return TreeData_followPath_;
          }()
        }, {
          key: "diff",
          value: function TreeData_diff_(treeData) {
            var changedNodes = [];
            var aList = this.asListWithIndexAndDepth();
            var bList = treeData.asListWithIndexAndDepth();
            if (aList.length != bList.length) return [];

            var _iterator = _createForOfIteratorHelper(__varRecorder__$7.arr.zip(aList, bList)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = _slicedToArray(_step.value, 2),
                    a = _step$value[0],
                    b = _step$value[1];

                if (!__varRecorder__$7.obj.equals(a.node.value, b && b.node.value)) changedNodes.push([a.node, b.node]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return changedNodes;
          }
        }, {
          key: "patch",
          value: function TreeData_patch_(treeData) {
            var changedNodes = this.diff(treeData);

            if (changedNodes.length > 0) {
              var _iterator2 = _createForOfIteratorHelper(changedNodes),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _step2$value = _slicedToArray(_step2.value, 2),
                      a = _step2$value[0],
                      b = _step2$value[1];

                  a.value = b.value;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              return this;
            } else {
              return treeData;
            }
          }
        }, {
          key: "uncollapseAll",
          value: function () {
            var _TreeData_uncollapseAll_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(iterator) {
              var depth,
                  node,
                  children,
                  i,
                  _args9 = arguments;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      depth = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 0;
                      node = _args9.length > 2 ? _args9[2] : undefined;

                      if (node) {
                        _context9.next = 6;
                        break;
                      }

                      _context9.next = 5;
                      return this.uncollapseAll(iterator, depth, this.root);

                    case 5:
                      return _context9.abrupt("return", _context9.sent);

                    case 6:
                      if (!iterator(node, depth)) {
                        _context9.next = 19;
                        break;
                      }

                      _context9.t0 = node.isCollapsed;

                      if (!_context9.t0) {
                        _context9.next = 11;
                        break;
                      }

                      _context9.next = 11;
                      return this.collapse(node, false);

                    case 11:
                      children = this.getChildren(node);
                      _context9.t1 = regeneratorRuntime.keys(children);

                    case 13:
                      if ((_context9.t2 = _context9.t1()).done) {
                        _context9.next = 19;
                        break;
                      }

                      i = _context9.t2.value;
                      _context9.next = 17;
                      return this.uncollapseAll(iterator, depth + 1, children[i]);

                    case 17:
                      _context9.next = 13;
                      break;

                    case 19:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function TreeData_uncollapseAll_(_x10) {
              return _TreeData_uncollapseAll_.apply(this, arguments);
            }

            return TreeData_uncollapseAll_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "TreeData";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./tree.js";
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
          start: 19127,
          end: 24318
        });
      }(undefined));
      __varRecorder__$7.TreeData = TreeData;
      __varRecorder__$7.TreeData = TreeData;
      __varRecorder__$7.treeCommands = [{
        name: "select via filter",
        exec: function () {
          var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(tree) {
            var td, lines, items, _yield$tree$world$fil, _yield$tree$world$fil2, node;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    td = tree.treeData;
                    td.asListWithIndexAndDepth();
                    td.asListWithIndexAndDepth().map(function (ea) {
                      return Object.assign(ea, {
                        string: td.nodeToString(ea.node)
                      });
                    });
                    lines = __varRecorder__$7.string.lines(__varRecorder__$7.string.printTree(td.root, td.nodeToString.bind(td), td.getChildrenIfUncollapsed.bind(td)));
                    items = td.asList().map(function (ea, i) {
                      return {
                        isListItem: true,
                        string: lines[i],
                        value: ea
                      };
                    });
                    _context10.next = 7;
                    return tree.world().filterableListPrompt("Select item", items);

                  case 7:
                    _yield$tree$world$fil = _context10.sent;
                    _yield$tree$world$fil2 = _slicedToArray(_yield$tree$world$fil.selected, 1);
                    node = _yield$tree$world$fil2[0];

                    if (node) {
                      tree.selectedNode = node;
                      tree.scrollSelectionIntoView();
                    }

                    return _context10.abrupt("return", true);

                  case 12:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          function exec(_x11) {
            return _exec.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "page up",
        exec: function exec(tree) {
          tree.scrollPageUp(1);
          var scroll = tree.scroll;
          var y = tree.padding.top();
          var targetY = scroll.y;
          var newIndex = tree.lineHeightCache.findIndex(function (h) {
            return targetY <= (y += h);
          });
          newIndex--;
          tree.gotoIndex(Math.max(1, newIndex));
          return true;
        }
      }, {
        name: "page down",
        exec: function exec(tree) {
          tree.scrollPageDown(1);
          var scroll = tree.scroll;
          var y = tree.padding.top();
          var targetY = scroll.y + tree.height;
          var newIndex = tree.lineHeightCache.findIndex(function (h) {
            return targetY <= (y += h);
          });
          newIndex--;
          tree.gotoIndex(Math.min(newIndex, tree.nodes.length - 1));
          return true;
        }
      }, {
        name: "goto first item",
        exec: function exec(tree) {
          tree.gotoIndex(1);
          return true;
        }
      }, {
        name: "goto last item",
        exec: function exec(tree) {
          tree.gotoIndex(tree.nodes.length - 1);
          return true;
        }
      }, {
        name: "goto next sibling",
        exec: function exec(tree) {
          var withSiblings = tree.selectedNodeAndSiblings;
          var next = withSiblings[withSiblings.indexOf(tree.selectedNode) + 1];

          if (next) {
            tree.selectedNode = next;
            tree.scrollSelectionIntoView();
          }

          return true;
        }
      }, {
        name: "goto prev sibling",
        exec: function exec(tree) {
          var withSiblings = tree.selectedNodeAndSiblings;
          var next = withSiblings[withSiblings.indexOf(tree.selectedNode) - 1];

          if (next) {
            tree.selectedNode = next;
            tree.scrollSelectionIntoView();
          }

          return true;
        }
      }, {
        name: "goto parent",
        exec: function exec(tree) {
          if (tree.selectedNode) {
            tree.selectedNode = tree.treeData.parentNode(tree.selectedNode);
            tree.scrollSelectionIntoView();
          }

          return true;
        }
      }, {
        name: "collapse selected node",
        exec: function () {
          var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(tree) {
            var sel;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    sel = tree.selectedNode;

                    if (sel) {
                      _context11.next = 3;
                      break;
                    }

                    return _context11.abrupt("return", true);

                  case 3:
                    if (tree.treeData.isCollapsed(sel)) {
                      _context11.next = 8;
                      break;
                    }

                    _context11.next = 6;
                    return tree.onNodeCollapseChanged({
                      node: tree.selectedNode,
                      isCollapsed: true
                    });

                  case 6:
                    _context11.next = 10;
                    break;

                  case 8:
                    tree.selectedNode = tree.treeData.parentNode(sel);
                    tree.scrollSelectionIntoView();

                  case 10:
                    return _context11.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          function exec(_x12) {
            return _exec2.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "uncollapse selected node",
        exec: function () {
          var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(tree) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (!tree.selectedNode) {
                      _context12.next = 3;
                      break;
                    }

                    _context12.next = 3;
                    return tree.onNodeCollapseChanged({
                      node: tree.selectedNode,
                      isCollapsed: false
                    });

                  case 3:
                    return _context12.abrupt("return", true);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          function exec(_x13) {
            return _exec3.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "collapse or uncollapse all siblings",
        exec: function () {
          var _exec4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(treeMorph) {
            var opts,
                doCollapse,
                td,
                nodesToChange,
                startNode,
                maxDepth,
                parents,
                needCollapseChange,
                allNonLeafChildren,
                collapseOrUncollapse,
                _args13 = arguments;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    collapseOrUncollapse = function _collapseOrUncollapse(nodes, doCollapse) {
                      return Promise.all(nodes.map(function (node) {
                        return treeMorph.onNodeCollapseChanged({
                          node: node,
                          isCollapsed: doCollapse
                        });
                      }));
                    };

                    allNonLeafChildren = function _allNonLeafChildren(parent) {
                      return td.getChildrenIfUncollapsed(parent).filter(function (n) {
                        return !td.isLeaf(n);
                      });
                    };

                    opts = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {
                      what: "collapse"
                    };
                    doCollapse = opts.what === "collapse";
                    td = treeMorph.treeData;

                    if (!doCollapse) {
                      _context13.next = 13;
                      break;
                    }

                    if (!td.isCollapsed(treeMorph.selectedNode)) {
                      _context13.next = 8;
                      break;
                    }

                    return _context13.abrupt("return", true);

                  case 8:
                    startNode = td.parentNode(treeMorph.selectedNode);
                    maxDepth = -1;

                    __varRecorder__$7.tree.prewalk(startNode, function (node, i, depth) {
                      if (depth < maxDepth) return;

                      if (depth > maxDepth) {
                        maxDepth = depth;
                        nodesToChange = [];
                      }

                      if (depth === maxDepth) {
                        __varRecorder__$7.arr.pushIfNotIncluded(nodesToChange, td.parentNode(node));
                      }
                    }, td.getChildrenIfUncollapsed.bind(td));

                    _context13.next = 24;
                    break;

                  case 13:
                    parents = __varRecorder__$7.arr.compact([td.parentNode(treeMorph.selectedNode)]);

                  case 14:

                    if (parents.length) {
                      _context13.next = 17;
                      break;
                    }

                    return _context13.abrupt("break", 24);

                  case 17:
                    nodesToChange = parents.flatMap(function (n) {
                      return allNonLeafChildren(n);
                    });
                    needCollapseChange = nodesToChange.every(function (n) {
                      return td.isCollapsed(n) === doCollapse;
                    });

                    if (needCollapseChange) {
                      _context13.next = 21;
                      break;
                    }

                    return _context13.abrupt("break", 24);

                  case 21:
                    parents = nodesToChange;
                    _context13.next = 14;
                    break;

                  case 24:
                    _context13.next = 26;
                    return collapseOrUncollapse(nodesToChange, doCollapse);

                  case 26:
                    treeMorph.scrollSelectionIntoView();
                    return _context13.abrupt("return", true);

                  case 28:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13);
          }));

          function exec(_x14) {
            return _exec4.apply(this, arguments);
          }

          return exec;
        }()
      }, {
        name: "select node above",
        exec: function exec(treeMorph) {
          var nodes = treeMorph.nodes;
          var index = treeMorph.selectedIndex;
          if (index <= 1) index = nodes.length;
          treeMorph.selectedNode = nodes[index - 1];
          treeMorph.scrollSelectionIntoView();
          return true;
        }
      }, {
        name: "select node below",
        exec: function exec(tree) {
          var nodes = tree.nodes;
          var index = tree.selectedIndex;
          if (index <= -1 || index >= nodes.length - 1) index = 0;
          tree.selectedNode = nodes[index + 1];
          tree.scrollSelectionIntoView();
          return true;
        }
      }, {
        name: "realign top-bottom-center",
        exec: function exec(tree) {
          if (!tree.selectedNode) return;
          tree.padding;
              var idx = tree.selectedIndex,
              _tree$scroll = tree.scroll,
              scrollX = _tree$scroll.x,
              scrollY = _tree$scroll.y;
          var lineBounds = tree.lineBounds(idx);
          var pos = lineBounds.topLeft();
          var h = tree.height - lineBounds.height;

          if (Math.abs(pos.y - scrollY) < 2) {
            scrollY = pos.y - h;
          } else if (Math.abs(pos.y - scrollY - h * 0.5) < 2) {
            scrollY = pos.y;
          } else {
            scrollY = pos.y - h * 0.5;
          }

          tree.scroll = __varRecorder__$7.pt(scrollX, scrollY);
          return true;
        }
      }, {
        name: "print contents in text window",
        exec: function exec(treeMorph) {
          var td = treeMorph.treeData;

          var content = __varRecorder__$7.string.printTree(td.root, td.nodeToString.bind(td), td.getChildrenIfUncollapsed.bind(td));

          var title = treeMorph.getWindow() ? "printed " + treeMorph.getWindow().title : treeMorph.name;
          return treeMorph.world().execCommand("open text window", {
            title: title,
            content: content,
            name: title,
            fontFamily: __varRecorder__$7.config.codeEditor.defaultStyle.fontFamily
          });
        }
      }];

      var __captured5__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Tree: Tree,
        TreeData: TreeData
      });

      var __varRecorder__$6 = lively.FreezerRuntime.recorderFor("lively.components/iframe.js");
      __varRecorder__$6.promise = promise;
      __varRecorder__$6.HTMLMorph = HTMLMorph;
      var IFrameMorph = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/iframe.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("IFrameMorph") && typeof __lively_classholder__.IFrameMorph === "function" ? __lively_classholder__.IFrameMorph : __lively_classholder__.IFrameMorph = function IFrameMorph(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function IFrameMorph_initialize_(props) {
            var _this;

            if (!props.src && !props.srcdoc) props.srcdoc = "<p>Empty iframe</p>";
            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            return _this;
          }
        }, {
          key: "changeSrc",
          value: function IFrameMorph_changeSrc_(src, srcDoc) {
            var _this2 = this;

            var iframe = this.iframe,
                p = this._loadPromise;
            if (p && !p.loaded) p.reject();
            this._loadPromise = __varRecorder__$6.promise.deferred();
            this._loadPromise.loaded = false;

            iframe.onload = function (evt) {
              _this2._loadPromise.loaded = true;

              _this2._loadPromise.resolve(evt);
            };

            var val = src || srcDoc;
            var set = src ? "src" : "srcdoc";
            var remove = src ? "srcdoc" : "src";
            this.addValueChange(remove, null);
            this.addValueChange(set, val);
            iframe.removeAttribute(remove);
            iframe.setAttribute(set, val);
            this._loadPromise[set] = val;
          }
        }, {
          key: "whenLoaded",
          value: function IFrameMorph_whenLoaded_() {
            return this._loadPromise.promise;
          }
        }, {
          key: "reload",
          value: function IFrameMorph_reload_() {
            return this.iframe.src = this.src;
          }
        }, {
          key: "run",
          value: function IFrameMorph_run_(func) {
            return this.innerWindow.eval("(" + func + ")();");
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "IFrameMorph";
          }
        }, {
          key: "printTextMorph",
          value: function () {
            var _IFrameMorph_printTextMorph_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(textMorph) {
              var el, im, doc, textLayer, lines;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      textMorph.env.forceUpdate();
                      el = textMorph.env.renderer.getNodeForMorph(textMorph);
                      im = __varRecorder__$6.IFrameMorph.open({
                        srcdoc: el.outerHTML
                      });
                      _context.next = 5;
                      return im.whenLoaded();

                    case 5:
                      doc = im.innerWindow.document;
                      doc.body.style.whiteSpace = "normal";
                      doc.body.style.margin = "0.5cm";
                      doc.querySelector(".Text").style.width = "100%";
                      doc.querySelector(".Text").style.overflow = "visible";
                      doc.querySelectorAll(".marker-layer-part").forEach(function (ea) {
                        return ea.parentNode.removeChild(ea);
                      });
                      textLayer = doc.querySelector(".text-layer");
                      textLayer.style.whiteSpace = "pre-wrap";
                      lines = Array.from(textLayer.querySelectorAll("div"));
                      lines.forEach(function (line) {
                        if (!line.childNodes[0]) return;
                        Array.from(line.childNodes).forEach(function (ea) {
                          return textLayer.insertBefore(ea, line);
                        });
                        textLayer.insertBefore(doc.createElement("br"), line);
                        textLayer.removeChild(line);
                      });
                      im.innerWindow.print();
                      im.getWindow().remove();

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function IFrameMorph_printTextMorph_(_x) {
              return _IFrameMorph_printTextMorph_.apply(this, arguments);
            }

            return IFrameMorph_printTextMorph_;
          }()
        }, {
          key: "open",
          value: function IFrameMorph_open_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new this(props).openInWindow({
              title: props.title || "iframe"
            }).targetMorph;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              iframe: {
                after: ["domNode"],
                readOnly: true,
                get: function get() {
                  return this.domNode;
                }
              },
              innerWindow: {
                after: ["iframe"],
                readOnly: true,
                get: function get() {
                  return this.iframe.contentWindow;
                }
              },
              innerWorld: {
                after: ["innerWindow"],
                readOnly: true,
                get: function get() {
                  return this.innerWindow.$world;
                }
              },
              src: {
                after: ["domNode"],
                set: function set(src) {
                  this.changeSrc(src, null);
                }
              },
              srcdoc: {
                after: ["domNode"],
                set: function set(srcdoc) {
                  this.changeSrc(null, srcdoc);
                }
              },
              domNode: {
                get: function get() {
                  if (!this._domNode) {
                    this._domNode = this.document.createElement("iframe");

                    this._domNode.setAttribute("style", "position: absolute; width: 100%; height: 100%;");

                    this._domNode.setAttribute("allowfullscreen", true);
                  }

                  return this._domNode;
                },
                set: function set(node) {
                  return this._domNode = node;
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./iframe.js";
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
          start: 619,
          end: 6301
        });
      }(__varRecorder__$6.HTMLMorph);
      __varRecorder__$6.IFrameMorph = IFrameMorph;
      __varRecorder__$6.IFrameMorph = IFrameMorph;

      var __captured6__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IFrameMorph: IFrameMorph
      });

      var __varRecorder__$5 = lively.FreezerRuntime.recorderFor("lively.components/checkbox.cp.js");
      __varRecorder__$5.ViewModel = ViewModel;
      __varRecorder__$5.part = part;
      __varRecorder__$5.TilingLayout = TilingLayout;
      __varRecorder__$5.Label = Label;
      __varRecorder__$5.component = component;
      __varRecorder__$5.Color = Color;
      __varRecorder__$5.rect = rect;
      __varRecorder__$5.signal = signal;
      __varRecorder__$5.pt = pt;
      var CheckboxChecked = __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component({
          name: "checkbox/checked",
          type: __varRecorder__$5.Label,
          extent: __varRecorder__$5.pt(15, 15),
          fixedWidth: true,
          fixedHeight: true,
          lineHeight: 1,
          draggable: false,
          borderWidth: 1,
          borderColor: __varRecorder__$5.Color.transparent,
          fill: __varRecorder__$5.Color.rgb(178, 235, 242),
          fontColor: __varRecorder__$5.Color.rgb(65, 65, 65),
          borderRadius: 2,
          padding: __varRecorder__$5.rect(0, -3, 0, 3),
          nativeCursor: "pointer",
          textAndAttributes: ["\uE876", {
            fontSize: 13,
            fontFamily: "Material Icons"
          }]
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "CheckboxChecked",
        range: {
          start: 237,
          end: 695
        }
      }, __varRecorder__$5.CheckboxChecked);
      __varRecorder__$5.CheckboxChecked = CheckboxChecked;
      __varRecorder__$5.CheckboxChecked = CheckboxChecked;
      var CheckboxUnchecked = __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component(__varRecorder__$5.CheckboxChecked, {
          name: "checkbox/unchecked",
          borderWidth: 1,
          borderColor: __varRecorder__$5.Color.white,
          fill: __varRecorder__$5.Color.transparent,
          fontColor: __varRecorder__$5.Color.transparent
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "CheckboxUnchecked",
        range: {
          start: 710,
          end: 895
        }
      }, __varRecorder__$5.CheckboxUnchecked);
      __varRecorder__$5.CheckboxUnchecked = CheckboxUnchecked;
      __varRecorder__$5.CheckboxUnchecked = CheckboxUnchecked;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/checkbox.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("CheckboxModel") && typeof __lively_classholder__.CheckboxModel === "function" ? __lively_classholder__.CheckboxModel : __lively_classholder__.CheckboxModel = function CheckboxModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isCheckbox",
          get: function get() {
            return true;
          }
        }, {
          key: "disable",
          value: function CheckboxModel_disable_() {
            this.active = false;
            this.view.opacity = 0.3;
          }
        }, {
          key: "enable",
          value: function CheckboxModel_enable_() {
            this.active = true;
            this.view.opacity = 1;
          }
        }, {
          key: "trigger",
          value: function CheckboxModel_trigger_() {
            if (!this.active) return;
            this.checked = !this.checked;

            __varRecorder__$5.signal(this.view, "checked", this.checked);
          }
        }, {
          key: "viewDidLoad",
          value: function CheckboxModel_viewDidLoad_() {
            this.view.master = this.checked ? this.checkedCheckboxComponent : this.uncheckedCheckboxComponent;
          }
        }, {
          key: "onRefresh",
          value: function CheckboxModel_onRefresh_() {
            this.view.master = this.checked ? this.checkedCheckboxComponent : this.uncheckedCheckboxComponent;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "CheckboxModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              active: {
                defaultValue: true
              },
              checked: {
                defaultValue: false
              },
              uncheckedCheckboxComponent: {
                defaultValue: __varRecorder__$5.CheckboxUnchecked
              },
              checkedCheckboxComponent: {
                defaultValue: __varRecorder__$5.CheckboxChecked
              },
              expose: {
                get: function get() {
                  return ["isCheckbox", "enable", "disable", "trigger", "checked"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "trigger"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./checkbox.cp.js";
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
          start: 898,
          end: 2199
        });
      })(__varRecorder__$5.ViewModel);

      var Checkbox = exports('b', __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component(__varRecorder__$5.CheckboxUnchecked, {
          name: "checkbox",
          defaultViewModel: __varRecorder__$5.CheckboxModel
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "Checkbox",
        range: {
          start: 2214,
          end: 2312
        }
      }, __varRecorder__$5.Checkbox));
      __varRecorder__$5.Checkbox = Checkbox;
      __varRecorder__$5.Checkbox = Checkbox;
      __varRecorder__$5.CheckboxCheckedLight = __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component(__varRecorder__$5.CheckboxChecked, {
          fill: __varRecorder__$5.Color.rgb(66, 165, 245),
          fontColor: __varRecorder__$5.Color.rgb(255, 255, 255),
          borderColor: __varRecorder__$5.Color.rgb(112, 123, 124)
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "CheckboxCheckedLight",
        range: {
          start: 2320,
          end: 2486
        }
      }, __varRecorder__$5.CheckboxCheckedLight);
      __varRecorder__$5.CheckboxUncheckedLight = __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component(__varRecorder__$5.CheckboxUnchecked, {
          fontColor: __varRecorder__$5.Color.rgb(255, 255, 255),
          fill: __varRecorder__$5.Color.rgb(255, 255, 255),
          borderColor: __varRecorder__$5.Color.rgb(112, 123, 124)
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "CheckboxUncheckedLight",
        range: {
          start: 2494,
          end: 2665
        }
      }, __varRecorder__$5.CheckboxUncheckedLight);
      var CheckboxLight = __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component(__varRecorder__$5.CheckboxUncheckedLight, {
          name: "checkbox",
          viewModelClass: __varRecorder__$5.CheckboxModel,
          viewModel: {
            uncheckedCheckboxComponent: __varRecorder__$5.CheckboxUncheckedLight,
            checkedCheckboxComponent: __varRecorder__$5.CheckboxCheckedLight
          }
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "CheckboxLight",
        range: {
          start: 2680,
          end: 2913
        }
      }, __varRecorder__$5.CheckboxLight);
      __varRecorder__$5.CheckboxLight = CheckboxLight;
      __varRecorder__$5.CheckboxLight = CheckboxLight;
      var LabeledCheckboxModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/checkbox.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("LabeledCheckboxModel") && typeof __lively_classholder__.LabeledCheckboxModel === "function" ? __lively_classholder__.LabeledCheckboxModel : __lively_classholder__.LabeledCheckboxModel = function LabeledCheckboxModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isCheckbox",
          get: function get() {
            return true;
          }
        }, {
          key: "onRefresh",
          value: function LabeledCheckboxModel_onRefresh_() {
            this.view.layout = this.view.layout.copy();
            this.view.layout.align = this.align;
            this.labelMorph.textString = this.label;
            this.checkbox.checked = this.checked;
          }
        }, {
          key: "viewDidLoad",
          value: function LabeledCheckboxModel_viewDidLoad_() {
            this.active ? this.enable() : this.disable();
          }
        }, {
          key: "trigger",
          value: function LabeledCheckboxModel_trigger_() {
            if (!this.active) return;
            this.checked = !this.checked;

            __varRecorder__$5.signal(this.view, "checked", this.checked);
          }
        }, {
          key: "disable",
          value: function LabeledCheckboxModel_disable_() {
            this.active = false;
            if (this.checkbox) this.checkbox.active = false;
            this.view.opacity = 0.3;
          }
        }, {
          key: "enable",
          value: function LabeledCheckboxModel_enable_() {
            this.active = true;
            if (this.checkbox) this.checkbox.active = true;
            this.view.opacity = 1;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "LabeledCheckboxModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              active: {
                defaultValue: true
              },
              align: {
                defaultValue: "left"
              },
              checked: {
                defaultValue: false
              },
              label: {
                defaultValue: "a label"
              },
              labelMorph: {
                derived: true,
                readOnly: true,
                get: function get() {
                  return this.ui.label;
                }
              },
              checkbox: {
                derived: true,
                readOnly: true,
                get: function get() {
                  return this.ui.checkbox;
                }
              },
              expose: {
                get: function get() {
                  return ["isCheckbox", "checked", "active", "label", "enable", "disable"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "trigger"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./checkbox.cp.js";
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
          start: 2922,
          end: 4491
        });
      }(__varRecorder__$5.ViewModel);
      __varRecorder__$5.LabeledCheckboxModel = LabeledCheckboxModel;
      __varRecorder__$5.LabeledCheckboxModel = LabeledCheckboxModel;
      var LabeledCheckbox = exports('d', __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component({
          defaultViewModel: __varRecorder__$5.LabeledCheckboxModel,
          name: "labeled checkbox",
          fill: __varRecorder__$5.Color.rgba(0, 0, 0, 0),
          borderWidth: 0,
          layout: new __varRecorder__$5.TilingLayout({
            axisAlign: "center",
            hugContentsHorizontally: true,
            orderByIndex: true,
            spacing: 5
          }),
          nativeCursor: "pointer",
          submorphs: [__varRecorder__$5.part(__varRecorder__$5.Checkbox, {
            name: "checkbox",
            reactsToPointer: false
          }), {
            type: __varRecorder__$5.Label,
            name: "label",
            textAndAttributes: ["Some label...", null]
          }]
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "LabeledCheckbox",
        range: {
          start: 4505,
          end: 4994
        }
      }, __varRecorder__$5.LabeledCheckbox));
      __varRecorder__$5.LabeledCheckbox = LabeledCheckbox;
      __varRecorder__$5.LabeledCheckbox = LabeledCheckbox;
      var LabeledCheckboxLight = exports('c', __varRecorder__$5.component["for"](function () {
        return __varRecorder__$5.component({
          defaultViewModel: __varRecorder__$5.LabeledCheckboxModel,
          name: "labeled checkbox",
          fill: __varRecorder__$5.Color.rgba(0, 0, 0, 0),
          borderWidth: 0,
          layout: new __varRecorder__$5.TilingLayout({
            axisAlign: "center",
            hugContentsHorizontally: true,
            orderByIndex: true,
            spacing: 5
          }),
          nativeCursor: "pointer",
          submorphs: [__varRecorder__$5.part(__varRecorder__$5.CheckboxLight, {
            name: "checkbox",
            reactsToPointer: false
          }), {
            type: __varRecorder__$5.Label,
            name: "label",
            textAndAttributes: ["Some label...", null],
            borderWidth: 0
          }]
        });
      }, {
        module: "lively.components/checkbox.cp.js",
        "export": "LabeledCheckboxLight",
        range: {
          start: 5009,
          end: 5528
        }
      }, __varRecorder__$5.LabeledCheckboxLight));
      __varRecorder__$5.LabeledCheckboxLight = LabeledCheckboxLight;
      __varRecorder__$5.LabeledCheckboxLight = LabeledCheckboxLight;

      var __captured7__ = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CheckboxChecked: CheckboxChecked,
        CheckboxUnchecked: CheckboxUnchecked,
        Checkbox: Checkbox,
        CheckboxLight: CheckboxLight,
        LabeledCheckboxModel: LabeledCheckboxModel,
        LabeledCheckbox: LabeledCheckbox,
        LabeledCheckboxLight: LabeledCheckboxLight
      });

      var __varRecorder__$4 = lively.FreezerRuntime.recorderFor("lively.components/window.cp.js");
      __varRecorder__$4.Color = Color;
      __varRecorder__$4.rect = rect;
      __varRecorder__$4.LinearGradient = LinearGradient;
      __varRecorder__$4.pt = pt;
      __varRecorder__$4.ShadowObject = ShadowObject;
      __varRecorder__$4.TilingLayout = TilingLayout;
      __varRecorder__$4.Icon = Icon;
      __varRecorder__$4.Label = Label;
      __varRecorder__$4.component = component;
      __varRecorder__$4.part = part;
      __varRecorder__$4.WindowButtonClose = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component({
          name: "window button close",
          borderRadius: 14,
          extent: __varRecorder__$4.pt(15, 13),
          fill: __varRecorder__$4.Color.rgba(0, 0, 0, 0),
          position: __varRecorder__$4.pt(6, 6),
          nativeCursor: "pointer",
          submorphs: [{
            type: __varRecorder__$4.Label,
            name: "label",
            fontColor: __varRecorder__$4.Color.rgb(255, 96, 82),
            fontSize: 14,
            position: __varRecorder__$4.pt(2, 1),
            reactsToPointer: false,
            lineHeight: 1,
            textAndAttributes: __varRecorder__$4.Icon.textAttribute("times")
          }],
          tooltip: "Close window"
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonClose",
        range: {
          start: 164,
          end: 615
        }
      }, __varRecorder__$4.WindowButtonClose);
      __varRecorder__$4.WindowButtonCloseHovered = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.WindowButtonClose, {
          name: "window button close hovered",
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__$4.Color.rgb(176, 58, 46)
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonCloseHovered",
        range: {
          start: 623,
          end: 800
        }
      }, __varRecorder__$4.WindowButtonCloseHovered);
      __varRecorder__$4.WindowButtonInactive = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.WindowButtonClose, {
          name: "window button inactive",
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__$4.Color.rgbHex("7F8C8D")
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonInactive",
        range: {
          start: 808,
          end: 976
        }
      }, __varRecorder__$4.WindowButtonInactive);
      __varRecorder__$4.WindowButtonInactiveDark = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.WindowButtonClose, {
          name: "window button inactive",
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__$4.Color.rgbHex("ECF0F1")
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonInactiveDark",
        range: {
          start: 984,
          end: 1156
        }
      }, __varRecorder__$4.WindowButtonInactiveDark);
      __varRecorder__$4.WindowButtonMenu = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component({
          name: "window button menu",
          borderRadius: 14,
          extent: __varRecorder__$4.pt(15, 13),
          fill: __varRecorder__$4.Color.rgba(0, 0, 0, 0),
          nativeCursor: "pointer",
          position: __varRecorder__$4.pt(48, 6),
          submorphs: [{
            type: __varRecorder__$4.Label,
            name: "label",
            fontColor: __varRecorder__$4.Color.rgb(52, 152, 219),
            fontSize: 14,
            position: __varRecorder__$4.pt(2, 1),
            reactsToPointer: false,
            lineHeight: 1,
            textAndAttributes: __varRecorder__$4.Icon.textAttribute("angle-down")
          }],
          tooltip: "Open Window Menu"
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonMenu",
        range: {
          start: 1164,
          end: 1624
        }
      }, __varRecorder__$4.WindowButtonMenu);
      __varRecorder__$4.WindowButtonMenuHovered = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.WindowButtonMenu, {
          name: "window button menu hovered",
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__$4.Color.rgb(40, 116, 166)
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonMenuHovered",
        range: {
          start: 1632,
          end: 1807
        }
      }, __varRecorder__$4.WindowButtonMenuHovered);
      __varRecorder__$4.WindowButtonMinimize = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component({
          name: "window button minimize",
          borderRadius: 14,
          extent: __varRecorder__$4.pt(15, 13),
          fill: __varRecorder__$4.Color.rgba(0, 0, 0, 0),
          nativeCursor: "pointer",
          position: __varRecorder__$4.pt(27, 6),
          submorphs: [{
            type: __varRecorder__$4.Label,
            name: "label",
            fontColor: __varRecorder__$4.Color.rgb(243, 156, 18),
            fontSize: 14,
            position: __varRecorder__$4.pt(2, 1),
            lineHeight: 1,
            reactsToPointer: false,
            textAndAttributes: __varRecorder__$4.Icon.textAttribute("minus")
          }],
          tooltip: "collapse window"
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonMinimize",
        range: {
          start: 1815,
          end: 2277
        }
      }, __varRecorder__$4.WindowButtonMinimize);
      __varRecorder__$4.WindowButtonMinimizeHovered = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.WindowButtonMinimize, {
          name: "window button minimize hovered",
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__$4.Color.rgb(175, 96, 26)
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "WindowButtonMinimizeHovered",
        range: {
          start: 2285,
          end: 2471
        }
      }, __varRecorder__$4.WindowButtonMinimizeHovered);
      __varRecorder__$4.DefaultWindow = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component({
          name: "default window",
          draggable: true,
          fill: __varRecorder__$4.Color.transparent,
          dropShadow: new __varRecorder__$4.ShadowObject({
            distance: 8,
            rotation: 90,
            color: __varRecorder__$4.Color.rgba(0, 0, 0, 0.3),
            blur: 35,
            spread: 5
          }),
          extent: __varRecorder__$4.pt(345.1, 152.1),
          borderRadius: 6,
          submorphs: [{
            name: "contents wrapper",
            extent: __varRecorder__$4.pt(345.1, 152.1),
            fill: __varRecorder__$4.Color.rgb(179, 182, 183),
            borderRadius: 6,
            reactsToPointer: false,
            clipMode: "hidden",
            submorphs: [{
              name: "header",
              borderColor: __varRecorder__$4.Color.rgba(0, 0, 0, 0),
              extent: __varRecorder__$4.pt(345.3, 72),
              fill: new __varRecorder__$4.LinearGradient({
                stops: [{
                  offset: 0,
                  color: __varRecorder__$4.Color.rgb(208, 211, 212)
                }, {
                  offset: 1,
                  color: __varRecorder__$4.Color.rgb(179, 182, 183)
                }],
                vector: __varRecorder__$4.rect(0, 0, 0, 1)
              }),
              position: __varRecorder__$4.pt(-0.2, -0.4),
              reactsToPointer: false,
              isLayoutable: false,
              submorphs: [{
                name: "window controls",
                extent: __varRecorder__$4.pt(69, 27),
                fill: __varRecorder__$4.Color.rgba(0, 0, 0, 0),
                layout: new __varRecorder__$4.TilingLayout({
                  autoResize: true,
                  orderByIndex: true,
                  padding: {
                    height: 0,
                    width: 0,
                    x: 6,
                    y: 6
                  },
                  spacing: 6
                }),
                position: __varRecorder__$4.pt(-0.6, -0.3),
                submorphs: [__varRecorder__$4.part(__varRecorder__$4.WindowButtonClose, {
                  name: "close",
                  master: {
                    auto: __varRecorder__$4.WindowButtonClose,
                    hover: __varRecorder__$4.WindowButtonCloseHovered
                  }
                }), __varRecorder__$4.part(__varRecorder__$4.WindowButtonMinimize, {
                  name: "minimize",
                  master: {
                    auto: __varRecorder__$4.WindowButtonMinimize,
                    hover: __varRecorder__$4.WindowButtonMinimizeHovered
                  }
                }), __varRecorder__$4.part(__varRecorder__$4.WindowButtonMenu, {
                  name: "menu",
                  master: {
                    auto: __varRecorder__$4.WindowButtonMenu,
                    hover: __varRecorder__$4.WindowButtonMenuHovered
                  }
                })]
              }, {
                type: __varRecorder__$4.Label,
                name: "window title",
                fontColor: __varRecorder__$4.Color.rgb(102, 102, 102),
                fontWeight: "bold",
                isLayoutable: false,
                nativeCursor: "pointer",
                padding: __varRecorder__$4.rect(0, 2, 0, -2),
                position: __varRecorder__$4.pt(135.2, 6),
                textAndAttributes: ["Window Title", null]
              }]
            }]
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "DefaultWindow",
        range: {
          start: 2479,
          end: 4683
        }
      }, __varRecorder__$4.DefaultWindow);
      __varRecorder__$4.DefaultWindowInactive = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.DefaultWindow, {
          name: "default window inactive",
          dropShadow: new __varRecorder__$4.ShadowObject({
            distance: 8,
            rotation: 90,
            color: __varRecorder__$4.Color.rgba(0, 0, 0, 0.1),
            blur: 10
          }),
          submorphs: [{
            name: "contents wrapper",
            fill: __varRecorder__$4.Color.rgb(208, 211, 212),
            submorphs: [{
              name: "header",
              fill: new __varRecorder__$4.LinearGradient({
                stops: [{
                  offset: 0,
                  color: __varRecorder__$4.Color.rgb(244, 246, 247)
                }, {
                  offset: 1,
                  color: __varRecorder__$4.Color.rgb(208, 211, 212)
                }],
                vector: __varRecorder__$4.rect(0, 0, 0, 1)
              }),
              submorphs: [{
                name: "window controls",
                submorphs: [{
                  name: "close",
                  master: __varRecorder__$4.WindowButtonInactive
                }, {
                  name: "minimize",
                  master: __varRecorder__$4.WindowButtonInactive
                }, {
                  name: "menu",
                  master: __varRecorder__$4.WindowButtonInactive
                }]
              }, {
                name: "window title",
                fontWeight: 400
              }]
            }]
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "DefaultWindowInactive",
        range: {
          start: 4691,
          end: 5662
        }
      }, __varRecorder__$4.DefaultWindowInactive);
      __varRecorder__$4.DarkWindow = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.DefaultWindow, {
          name: "dark window",
          dropShadow: new __varRecorder__$4.ShadowObject({
            distance: 8,
            rotation: 90,
            color: __varRecorder__$4.Color.rgba(0, 0, 0, 0.1),
            blur: 10
          }),
          submorphs: [{
            name: "contents wrapper",
            fill: __varRecorder__$4.Color.rgb(38, 50, 56),
            submorphs: [{
              name: "header",
              fill: new __varRecorder__$4.LinearGradient({
                stops: [{
                  offset: 0,
                  color: __varRecorder__$4.Color.rgb(55, 71, 79)
                }, {
                  offset: 1,
                  color: __varRecorder__$4.Color.rgb(38, 50, 56)
                }],
                vector: __varRecorder__$4.rect(0, 0, 0, 1)
              }),
              submorphs: [{
                name: "window title",
                fontColor: __varRecorder__$4.Color.rgb(144, 148, 151)
              }]
            }]
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "DarkWindow",
        range: {
          start: 5670,
          end: 6332
        }
      }, __varRecorder__$4.DarkWindow);
      __varRecorder__$4.DarkWindowInactive = __varRecorder__$4.component["for"](function () {
        return __varRecorder__$4.component(__varRecorder__$4.DefaultWindowInactive, {
          name: "dark window inactive",
          dropShadow: new __varRecorder__$4.ShadowObject({
            distance: 8,
            rotation: 90,
            color: __varRecorder__$4.Color.rgba(0, 0, 0, 0.1),
            blur: 10
          }),
          submorphs: [{
            name: "contents wrapper",
            fill: __varRecorder__$4.Color.rgb(128, 139, 150),
            submorphs: [{
              name: "header",
              fill: new __varRecorder__$4.LinearGradient({
                stops: [{
                  offset: 0,
                  color: __varRecorder__$4.Color.rgb(171, 178, 185)
                }, {
                  offset: 1,
                  color: __varRecorder__$4.Color.rgb(128, 139, 150)
                }],
                vector: __varRecorder__$4.rect(0, 0, 0, 1)
              }),
              submorphs: [{
                name: "window controls",
                submorphs: [{
                  name: "close",
                  master: __varRecorder__$4.WindowButtonInactiveDark
                }, {
                  name: "minimize",
                  master: __varRecorder__$4.WindowButtonInactiveDark
                }, {
                  name: "menu",
                  master: __varRecorder__$4.WindowButtonInactiveDark
                }]
              }, {
                name: "window title",
                fontColor: __varRecorder__$4.Color.rgb(102, 102, 102)
              }]
            }]
          }]
        });
      }, {
        module: "lively.components/window.cp.js",
        "export": "DarkWindowInactive",
        range: {
          start: 6340,
          end: 7345
        }
      }, __varRecorder__$4.DarkWindowInactive);
      var DefaultWindow = __varRecorder__$4.DefaultWindow;
      var DarkWindow = __varRecorder__$4.DarkWindow;
      var DefaultWindowInactive = __varRecorder__$4.DefaultWindowInactive;
      var DarkWindowInactive = __varRecorder__$4.DarkWindowInactive;
      __varRecorder__$4.DefaultWindow = DefaultWindow;
      __varRecorder__$4.DarkWindow = DarkWindow;
      __varRecorder__$4.DefaultWindowInactive = DefaultWindowInactive;
      __varRecorder__$4.DarkWindowInactive = DarkWindowInactive;

      var __varRecorder__$3 = lively.FreezerRuntime.recorderFor("lively.components/window.js");
      __varRecorder__$3.arr = arr;
      __varRecorder__$3.obj = obj;
      __varRecorder__$3.promise = promise;
      __varRecorder__$3.pt = pt;
      __varRecorder__$3.rect = rect;
      __varRecorder__$3.Color = Color;
      __varRecorder__$3.Rectangle = Rectangle;
      __varRecorder__$3.Label = Label;
      __varRecorder__$3.morph = morph;
      __varRecorder__$3.Morph = Morph;
      __varRecorder__$3.connect = connect;
      __varRecorder__$3.once = once;
      __varRecorder__$3.signal = signal;
      __varRecorder__$3.easings = easings;
      __varRecorder__$3.DefaultWindow = DefaultWindow;
      __varRecorder__$3.DefaultWindowInactive = DefaultWindowInactive;

      var Window = exports('W', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/window.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Window") && typeof __lively_classholder__.Window === "function" ? __lively_classholder__.Window : __lively_classholder__.Window = function Window(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "updateNonMinimizedBounds",
          value: function Window_updateNonMinimizedBounds_() {
            if (this.minimized) return;

            if (!this.extent.roundTo(1).equals(__varRecorder__$3.Window.maximumBounds().extent()) && (!this.minimizedBounds || !this.extent.roundTo(1).equals(this.minimizedBounds.extent().roundTo(1)))) {
              this.nonMinimizedBounds = this.position.extent(this.extent).roundTo(1);
            }
          }
        }, {
          key: "build",
          value: function Window_build_() {
            this.submorphs = [{
              name: "contents wrapper",
              submorphs: [this.buildHeader()]
            }, this.buildResizer()];
          }
        }, {
          key: "toggleMinimizeButton",
          value: function Window_toggleMinimizeButton_() {
            this.master.applyIfNeeded(true);
            this.getSubmorphNamed("minimize").visible = !!this.minimizable;
          }
        }, {
          key: "openWindowMenu",
          value: function () {
            var _Window_openWindowMenu_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var w;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      w = this.world() || this.env.world;
                      _context2.t0 = this.targetMorph.world();
                      _context2.t1 = [["Change Window Title", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        var newTitle;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return w.prompt("Enter New Name", {
                                  input: _this.title
                                });

                              case 2:
                                newTitle = _context.sent;
                                if (newTitle) _this.title = newTitle;

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }))], ["Align and resize", [{
                        alias: "full",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "full"
                        }
                      }, {
                        alias: "left",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "left"
                        }
                      }, {
                        alias: "center",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "center"
                        }
                      }, {
                        alias: "right",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "right"
                        }
                      }, {
                        alias: "top",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "top"
                        }
                      }, {
                        alias: "bottom",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "bottom"
                        }
                      }, {
                        alias: "reset",
                        target: w,
                        command: "resize active window",
                        args: {
                          window: this,
                          how: "reset"
                        }
                      }]], ["Window Management", [{
                        alias: "open window switcher",
                        target: $world,
                        command: "window switcher"
                      }, {
                        isDivider: true
                      }, {
                        alias: "minimize all except this",
                        target: w,
                        command: "toggle minimize all except active window"
                      }, {
                        alias: "close all except this",
                        target: w,
                        command: "close all except active window"
                      }, {
                        alias: "close all like this",
                        target: w,
                        command: "close all like this window"
                      }, {
                        isDivider: true
                      }, {
                        alias: "minimize all",
                        target: w,
                        command: "toggle minimize all windows"
                      }, {
                        alias: "close all",
                        target: w,
                        command: "close all windows"
                      }]], {
                        isDivider: true
                      }];
                      _context2.t2 = _toConsumableArray;
                      _context2.next = 6;
                      return this.targetMorph.menuItems();

                    case 6:
                      _context2.t3 = _context2.sent;
                      _context2.t4 = (0, _context2.t2)(_context2.t3);
                      _context2.t5 = _context2.t1.concat.call(_context2.t1, _context2.t4);
                      return _context2.abrupt("return", _context2.t0.openMenu.call(_context2.t0, _context2.t5));

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function Window_openWindowMenu_() {
              return _Window_openWindowMenu_.apply(this, arguments);
            }

            return Window_openWindowMenu_;
          }()
        }, {
          key: "isFaderActive",
          value: function Window_isFaderActive_() {
            return !!this.getSubmorphNamed("fader");
          }
        }, {
          key: "toggleFader",
          value: function () {
            var _Window_toggleFader_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(active) {
              var fader, bounds, shiftedBounds;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      fader = this.getSubmorphNamed("fader") || this.ui.contentsWrapper.addMorph({
                        position: __varRecorder__$3.pt(0, 0),
                        name: "fader",
                        fill: __varRecorder__$3.Color.black.withA(0.5),
                        opacity: 0,
                        extent: this.extent
                      });
                      bounds = this.position.extent(this.extent);

                      if (!active) {
                        _context3.next = 13;
                        break;
                      }

                      shiftedBounds = this.world().visibleBoundsExcludingTopBar().translateForInclusion(bounds);
                      this._originalBounds = bounds;
                      this.animate({
                        bounds: shiftedBounds,
                        duration: 300
                      });
                      this.borderColor = __varRecorder__$3.Color.gray.darker();
                      this._faderTriggered = true;
                      fader.opacity = 1;
                      _context3.next = 11;
                      return __varRecorder__$3.promise.delay(300);

                    case 11:
                      _context3.next = 23;
                      break;

                    case 13:
                      if (this._originalBounds) {
                        this.animate({
                          bounds: this._originalBounds,
                          duration: 300
                        });
                        this._originalBounds = null;
                      }

                      this._faderTriggered = false;
                      _context3.next = 17;
                      return __varRecorder__$3.promise.delay(100);

                    case 17:
                      this.borderColor = __varRecorder__$3.Color.gray;

                      if (!this._faderTriggered) {
                        _context3.next = 20;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 20:
                      _context3.next = 22;
                      return fader.animate({
                        opacity: 0,
                        duration: 300
                      });

                    case 22:
                      fader.remove();

                    case 23:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function Window_toggleFader_(_x) {
              return _Window_toggleFader_.apply(this, arguments);
            }

            return Window_toggleFader_;
          }()
        }, {
          key: "isWindow",
          get: function get() {
            return true;
          }
        }, {
          key: "targetMorphBounds",
          value: function Window_targetMorphBounds_() {
            return new __varRecorder__$3.Rectangle(0, 25, this.width, this.height - 25);
          }
        }, {
          key: "relayoutWindowControls",
          value: function Window_relayoutWindowControls_() {
            var _this2 = this;

            if (!this.env.renderer) {
              this.whenEnvReady().then(function () {
                return _this2.relayoutWindowControls();
              });
              return;
            }

            var innerB = this.innerBounds();
            var title = this.ui.windowTitle;
            var resizer = this.ui.resizer;
            var labelBounds = innerB.withHeight(25);
            var header = this.ui.header;
            var wrapper = this.ui.contentsWrapper;
            var lastButtonOrWrapper = this.ui.windowControls;
            var buttonOffset = lastButtonOrWrapper.bounds().right() + 3;
            var minLabelBounds = labelBounds.withLeftCenter(__varRecorder__$3.pt(buttonOffset, labelBounds.height / 2));
            resizer.position = __varRecorder__$3.pt(0, 0);
            title.textBounds().width < labelBounds.width - 2 * buttonOffset ? title.center = labelBounds.center() : title.leftCenter = minLabelBounds.leftCenter();

            if (!this.minimized && this.targetMorph && this.targetMorph.isLayoutable) {
              this.targetMorph.setBounds(this.targetMorphBounds());
            }

            header.width = this.width;
            wrapper.extent = this.extent;
          }
        }, {
          key: "ensureNotBeyondBottom",
          value: function Window_ensureNotBeyondBottom_() {
            var world = this.world();
            if (!world) return;
            var bounds = this.globalBounds();

            if (bounds.bottom() > world.visibleBounds().bottom()) {
              this.resizeBy(__varRecorder__$3.pt(0, bounds.bottom() - world.visibleBounds().bottom()).negated());
            }
          }
        }, {
          key: "ensureNotOverTheTop",
          value: function Window_ensureNotOverTheTop_() {
            var _this3 = this;

            var world = this.world();
            if (!world) return;
            var bounds = this.globalBounds();
            world.withTopBarDo(function (tb) {
              if (bounds.top() < tb.view.height) {
                _this3.moveBy(__varRecorder__$3.pt(0, tb.view.height - bounds.top()));
              }
            });
          }
        }, {
          key: "buildHeader",
          value: function Window_buildHeader_() {
            return __varRecorder__$3.morph({
              name: "header",
              extent: __varRecorder__$3.pt(this.width, 50),
              submorphs: [__varRecorder__$3.morph({
                name: "window controls",
                styleClasses: ["buttonGroup"],
                submorphs: this.buildButtons()
              }), this.buildTitleLabel()]
            });
          }
        }, {
          key: "buildButtons",
          value: function Window_buildButtons_() {
            var closeButton = this.getSubmorphNamed("close") || __varRecorder__$3.morph({
              name: "close",
              styleClasses: ["windowButton", "closeButton"],
              tooltip: "close window",
              submorphs: [__varRecorder__$3.Label.icon("times", {
                name: "label",
                styleClasses: ["defaultLabelStyle", "default"]
              })]
            });

            __varRecorder__$3.connect(closeButton, "onMouseDown", this, "close");

            var minimizeButton = this.getSubmorphNamed("minimize") || __varRecorder__$3.morph({
              name: "minimize",
              styleClasses: ["windowButton", "minimizeButton"],
              tooltip: "collapse window",
              submorphs: [__varRecorder__$3.Label.icon("minus", {
                name: "label",
                styleClasses: ["defaultLabelStyle", "default"]
              })]
            });

            __varRecorder__$3.connect(minimizeButton, "onMouseDown", this, "minimized", {
              updater: function updater($upd) {
                $upd(!this.targetObj.minimized);
              }
            });

            var windowMenuButton;

            if (this.resizable) {
              windowMenuButton = this.getSubmorphNamed("menu") || __varRecorder__$3.morph({
                name: "menu",
                styleClasses: ["windowButton", "windowMenuButton"],
                tooltip: "Open Window Menu",
                submorphs: [__varRecorder__$3.Label.icon("chevron-down", {
                  name: "label",
                  styleClasses: ["defaultLabelStyle", "default"]
                })]
              });

              __varRecorder__$3.connect(windowMenuButton, "onMouseDown", this, "openWindowMenu");
            }

            return __varRecorder__$3.arr.compact([closeButton, minimizeButton, windowMenuButton]);
          }
        }, {
          key: "buildTitleLabel",
          value: function Window_buildTitleLabel_() {
            var title = __varRecorder__$3.morph({
              padding: __varRecorder__$3.Rectangle.inset(0, 2, 0, 0),
              styleClasses: ["windowTitleLabel"],
              type: "label",
              name: "window title",
              tooltip: "double click to maximize/reset",
              reactsToPointer: true,
              value: ""
            });

            __varRecorder__$3.connect(this, "onDoubleMouseDown", this, "toggleMaximize", {
              updater: "($upd, evt) => {\n        if (source.fullContainsWorldPoint(evt.position)) {\n          $upd();\n        }\n      }"
            });

            return this.addMorph(title);
          }
        }, {
          key: "resizeBy",
          value: function Window_resizeBy_(dist) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resizeBy", this).call(this, dist);

            this.relayoutWindowControls();
          }
        }, {
          key: "resizeAt",
          value: function Window_resizeAt_(_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                corner = _ref3[0],
                currPos = _ref3[1];

            var dist = this.startPos.subPt(currPos);
            var delta = this.resizingTfm.transformDirection(dist);
            var proportionalMask = {
              topLeft: __varRecorder__$3.rect(-1, -1, 1, 1),
              top: __varRecorder__$3.rect(0, -1, 0, 1),
              topRight: __varRecorder__$3.rect(0, -1, 1, 1),
              right: __varRecorder__$3.rect(0, 0, 1, 0),
              bottomRight: __varRecorder__$3.rect(0, 0, 1, 1),
              bottom: __varRecorder__$3.rect(0, 0, 0, 1),
              bottomLeft: __varRecorder__$3.rect(-1, 0, 1, 1),
              left: __varRecorder__$3.rect(-1, 0, 1, 0)
            };
            var _proportionalMask$cor = proportionalMask[corner],
                x = _proportionalMask$cor.x,
                y = _proportionalMask$cor.y,
                width = _proportionalMask$cor.width,
                height = _proportionalMask$cor.height;

            var offsetRect = __varRecorder__$3.rect(delta.x * x, delta.y * y, delta.x * width, delta.y * height);

            this.setBounds(this.startBounds.insetByRect(offsetRect));
            this.relayoutResizer();
          }
        }, {
          key: "relayoutResizer",
          value: function Window_relayoutResizer_() {
            try {
              var resizer = this.getSubmorphNamed("resizer");
              var resizerInset = this.resizerInset,
                  resizerOutset = this.resizerOutset;

              var _resizer$submorphs = _slicedToArray(resizer.submorphs, 8),
                  rightResizer = _resizer$submorphs[0],
                  leftResizer = _resizer$submorphs[1],
                  bottomResizer = _resizer$submorphs[2],
                  topResizer = _resizer$submorphs[3],
                  bottomLeftResizer = _resizer$submorphs[4],
                  bottomRightResizer = _resizer$submorphs[5],
                  topLeftResizer = _resizer$submorphs[6],
                  topRightResizer = _resizer$submorphs[7];

              rightResizer.height = this.height + resizerOutset;
              rightResizer.bottomRight = this.extent.subXY(resizerOutset, resizerInset + resizerOutset);
              bottomRightResizer.bottomRight = this.extent.subXY(resizerOutset, resizerOutset);
              leftResizer.height = this.height + resizerOutset;
              leftResizer.bottomLeft = __varRecorder__$3.pt(resizerOutset, this.height - (resizerInset + resizerOutset));
              bottomLeftResizer.bottomLeft = __varRecorder__$3.pt(resizerOutset, this.height - resizerOutset);
              bottomResizer.width = this.width + resizerOutset;
              bottomResizer.bottomLeft = __varRecorder__$3.pt(resizerInset + resizerOutset, this.height - resizerOutset);
              topResizer.width = this.width + resizerOutset;
              topResizer.height = resizerInset;
              topResizer.bottomLeft = __varRecorder__$3.pt(resizerInset + resizerOutset, resizerInset + resizerOutset);
              topLeftResizer.topLeft = __varRecorder__$3.pt(resizerOutset, resizerOutset);
              topRightResizer.topRight = __varRecorder__$3.pt(this.width - resizerOutset, resizerOutset);
              resizer.position = __varRecorder__$3.pt(0, 0);
            } catch (err) {}
          }
        }, {
          key: "buildResizer",
          value: function Window_buildResizer_() {
            var win = this;
            var rightResizer, bottomRightResizer, leftResizer, bottomLeftResizer, bottomResizer, topResizer, topLeftResizer, topRightResizer;
            var fill = __varRecorder__$3.Color.transparent;
            var resizerInset = this.resizerInset;

            var resizer = __varRecorder__$3.morph({
              name: "resizer",
              fill: fill,
              position: __varRecorder__$3.pt(0, 0),
              submorphs: [rightResizer = __varRecorder__$3.morph({
                name: "right resizer",
                fill: fill,
                width: resizerInset,
                draggable: true,
                nativeCursor: "ew-resize"
              }), leftResizer = __varRecorder__$3.morph({
                name: "left resizer",
                fill: fill,
                width: resizerInset,
                draggable: true,
                nativeCursor: "ew-resize"
              }), bottomResizer = __varRecorder__$3.morph({
                name: "bottom resizer",
                draggable: true,
                fill: fill,
                height: resizerInset,
                nativeCursor: "ns-resize"
              }), topResizer = __varRecorder__$3.morph({
                name: "top resizer",
                draggable: true,
                fill: fill,
                height: resizerInset / 4,
                nativeCursor: "ns-resize"
              }), bottomLeftResizer = __varRecorder__$3.morph({
                name: "bottom left resizer",
                draggable: true,
                fill: fill,
                extent: __varRecorder__$3.pt(resizerInset, resizerInset),
                nativeCursor: "nesw-resize"
              }), bottomRightResizer = __varRecorder__$3.morph({
                name: "bottom right resizer",
                fill: fill,
                extent: __varRecorder__$3.pt(resizerInset, resizerInset),
                draggable: true,
                nativeCursor: "nwse-resize"
              }), topLeftResizer = __varRecorder__$3.morph({
                name: "top left resizer",
                draggable: true,
                fill: fill,
                extent: __varRecorder__$3.pt(resizerInset, resizerInset),
                nativeCursor: "nwse-resize"
              }), topRightResizer = __varRecorder__$3.morph({
                name: "top rigth resizer",
                draggable: true,
                fill: fill,
                extent: __varRecorder__$3.pt(resizerInset, resizerInset),
                nativeCursor: "nesw-resize"
              })]
            });

            __varRecorder__$3.connect(topResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(topResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["top", evt.position];
              }
            });

            __varRecorder__$3.connect(topRightResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(topRightResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["topRight", evt.position];
              }
            });

            __varRecorder__$3.connect(topLeftResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(topLeftResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["topLeft", evt.position];
              }
            });

            __varRecorder__$3.connect(bottomRightResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(bottomRightResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["bottomRight", evt.position];
              }
            });

            __varRecorder__$3.connect(rightResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(rightResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["right", evt.position];
              }
            });

            __varRecorder__$3.connect(bottomResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(bottomResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["bottom", evt.position];
              }
            });

            __varRecorder__$3.connect(leftResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(leftResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["left", evt.position];
              }
            });

            __varRecorder__$3.connect(bottomLeftResizer, "onDragStart", this, "beginResizing");

            __varRecorder__$3.connect(bottomLeftResizer, "onDrag", win, "resizeAt", {
              converter: function converter(evt) {
                return ["bottomLeft", evt.position];
              }
            });

            this.addMorph(resizer);
            this.relayoutResizer();
            return resizer;
          }
        }, {
          key: "beginResizing",
          value: function Window_beginResizing_(evt) {
            this.startPos = evt.position;
            this.startBounds = this.position.extent(this.extent);
            this.resizingTfm = this.getGlobalTransform().inverse();
          }
        }, {
          key: "toggleMaximize",
          value: function Window_toggleMaximize_() {
            if (!this.minimized) this.applyMaximize();
          }
        }, {
          key: "applyMaximize",
          value: function Window_applyMaximize_() {
            var maximized = __varRecorder__$3.obj.equals(this.position.extent(this.extent.roundTo(1)), __varRecorder__$3.Window.maximumBounds());

            if (!maximized) {
              $world.execCommand("resize active window", {
                window: this,
                how: "full"
              });
            } else {
              this.nonMinimizedBounds = this.world().visibleBoundsExcludingStudioInterface().translateForInclusion(this.nonMinimizedBounds);
              this.animate({
                bounds: this.nonMinimizedBounds,
                duration: 100,
                easing: __varRecorder__$3.easings.outQuadeasing
              });
            }

            this.relayoutResizer();
            this.relayoutWindowControls();
            this.ui.resizer.visible = true;
          }
        }, {
          key: "toggleMinimize",
          value: function () {
            var _Window_toggleMinimize_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.minimized = !this.minimized;

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function Window_toggleMinimize_() {
              return _Window_toggleMinimize_.apply(this, arguments);
            }

            return Window_toggleMinimize_;
          }()
        }, {
          key: "applyMinimize",
          value: function () {
            var _Window_applyMinimize_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var minimized, width, _this$ui, windowTitle, resizer, bounds, duration, collapseButton, easing, goalBounds, minimizedBounds, labelBounds, buttonOffset;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (this.targetMorph) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      minimized = this.minimized, width = this.width;
                      _this$ui = this.ui, windowTitle = _this$ui.windowTitle, resizer = _this$ui.resizer;
                      bounds = this.position.extent(this.extent);
                      duration = 100;
                      collapseButton = this.getSubmorphNamed("minimize");
                      easing = __varRecorder__$3.easings.outQuad;

                      if (!minimized) {
                        this.minimizedBounds = bounds;
                        this.withMetaDo({
                          metaInteraction: true
                        }, function () {
                          _this4.targetMorph && (_this4.targetMorph.visible = true);
                        });
                        goalBounds = this.world().visibleBoundsExcludingStudioInterface().translateForInclusion(this.nonMinimizedBounds);

                        if (this.wasFullscreen) {
                          goalBounds = __varRecorder__$3.Window.maximumBounds();
                          delete this.wasFullscreen;
                        }

                        this.animate({
                          bounds: goalBounds,
                          styleClasses: ["neutral", "active"].concat(_toConsumableArray(__varRecorder__$3.arr.without(this.styleClasses, "minimzed"))),
                          duration: duration,
                          easing: easing
                        }).then(function () {
                          return _this4.clipMode = "visible";
                        });
                        collapseButton.tooltip = "collapse window";
                      } else {
                        this._previewHTML = this.generatePreviewHTML();
                        if (__varRecorder__$3.obj.equals(this.position.extent(this.extent).roundTo(1), __varRecorder__$3.Window.maximumBounds())) this.wasFullscreen = true;
                        this.clipMode = "hidden";
                        minimizedBounds = (this.minimizedBounds || bounds).withExtent(__varRecorder__$3.pt(width, 28));
                        labelBounds = windowTitle.textBounds();
                        buttonOffset = this.get("window controls").bounds().right() + 3;

                        if (labelBounds.width + 2 * buttonOffset < minimizedBounds.width) {
                          minimizedBounds = minimizedBounds.withWidth(labelBounds.width + buttonOffset + 5);
                        }

                        this.minimizedBounds = minimizedBounds;
                        collapseButton.tooltip = "uncollapse window";
                        this.animate({
                          styleClasses: ["minimized", "active"].concat(_toConsumableArray(__varRecorder__$3.arr.without(this.styleClasses, "neutral"))),
                          bounds: this.minimizedBounds,
                          duration: duration,
                          easing: easing
                        }).then(function () {
                          if (_this4.targetMorph) {
                            if (!_this4.targetMorph.isComponent) _this4.targetMorph.visible = false;else _this4.targetMorph.top = _this4.height;
                          }
                        });
                      }

                      windowTitle.reactsToPointer = !this.minimized;
                      resizer.visible = !this.minimized;
                      this.withAnimationDo(function () {
                        _this4.relayoutWindowControls();

                        _this4.relayoutResizer();
                      }, {
                        duration: duration,
                        easing: easing
                      });

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function Window_applyMinimize_() {
              return _Window_applyMinimize_.apply(this, arguments);
            }

            return Window_applyMinimize_;
          }()
        }, {
          key: "setBounds",
          value: function Window_setBounds_(bounds) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "setBounds", this).call(this, bounds);

            this.relayoutResizer();
            this.relayoutWindowControls();
            this.updateNonMinimizedBounds();
          }
        }, {
          key: "close",
          value: function () {
            var _Window_close_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var activateNextWindow,
                  proceed,
                  world,
                  next,
                  _args6 = arguments;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      activateNextWindow = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : true;

                      if (!(this.targetMorph && typeof this.targetMorph.onWindowClose === "function")) {
                        _context6.next = 5;
                        break;
                      }

                      _context6.next = 4;
                      return this.targetMorph.onWindowClose();

                    case 4:
                      proceed = _context6.sent;

                    case 5:
                      if (!(proceed === false)) {
                        _context6.next = 7;
                        break;
                      }

                      return _context6.abrupt("return");

                    case 7:
                      world = this.world();
                      this.deactivate();
                      this.remove();

                      if (activateNextWindow) {
                        next = world.activeWindow() || __varRecorder__$3.arr.last(world.getWindows());
                        next && next.activate();
                      }

                      __varRecorder__$3.signal(this, "windowClosed", this);

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function Window_close_() {
              return _Window_close_.apply(this, arguments);
            }

            return Window_close_;
          }()
        }, {
          key: "onMouseUp",
          value: function Window_onMouseUp_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseUp", this).call(this, evt);

            if (!this.minimized) {
              this.ui.resizer.visible = true;
            }
          }
        }, {
          key: "onMouseDown",
          value: function Window_onMouseDown_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseDown", this).call(this, evt);

            this.activate(evt);

            if (!this.minimized && !this.ui.resizer.submorphs.includes(evt.targetMorph)) {
              this.ui.resizer.visible = false;
            }
          }
        }, {
          key: "onDragStart",
          value: function Window_onDragStart_(evt) {
            var _this5 = this;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDragStart", this).call(this, evt);

            if (this.targetMorph) {
              evt.state.origReactsToPointer = this.targetMorph.reactsToPointer;
              this.withMetaDo({
                metaInteraction: true
              }, function () {
                _this5.targetMorph.reactsToPointer = false;
              });
            }
          }
        }, {
          key: "onDragEnd",
          value: function Window_onDragEnd_(evt) {
            var _this6 = this;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDragEnd", this).call(this, evt);

            if (this.targetMorph) {
              this.withMetaDo({
                metaInteraction: true
              }, function () {
                _this6.targetMorph.reactsToPointer = evt.state.origReactsToPointer;
              });
            }

            if (!this.minimized) {
              this.ui.resizer.visible = true;
            }
          }
        }, {
          key: "onDrag",
          value: function Window_onDrag_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onDrag", this).call(this, evt);

            this.ensureNotOverTheTop();
          }
        }, {
          key: "focus",
          value: function Window_focus_() {
            var w = this.world();
            var t = this.targetMorph;
            if (!w || !t) return;
            if (w.focusedMorph && (w.focusedMorph === t || t.isAncestorOf(w.focusedMorph))) return;
            t.focus();
          }
        }, {
          key: "isActive",
          value: function Window_isActive_() {
            var w = this.world();
            if (!w) return false;
            if (this.ui.windowTitle.fontWeight !== "bold") return false;
            return __varRecorder__$3.arr.last(w.getWindows()) === this;
          }
        }, {
          key: "activate",
          value: function Window_activate_(evt) {
            var _this7 = this;

            var fromWindowSwitcher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (this.isFaderActive()) return;

            if (fromWindowSwitcher && this.minimized) {
              this.toggleMinimize();
            }

            this.targetMorph.onWindowActivated();
            this.master.whenApplied().then(function () {
              _this7.master = {
                auto: __varRecorder__$3.DefaultWindow
              };

              _this7.master.applyIfNeeded(true);

              _this7.relayoutWindowControls();
            });
            if (!this.world()) this.openInWorldNearHand();else this.bringToFront();
            var w = this.world() || this.env.world;

            __varRecorder__$3.arr.without(w.getWindows(), this).forEach(function (ea) {
              return ea.deactivate();
            });

            this.focus();

            __varRecorder__$3.signal(this, "windowActivated", this);

            Promise.resolve(this.master.applyIfNeeded(true)).then(function () {
              return _this7.relayoutWindowControls();
            });
            return this;
          }
        }, {
          key: "deactivate",
          value: function Window_deactivate_() {
            var _this8 = this;

            this.targetMorph.onWindowDeactivated();
            if (this.master && this.master.auto === __varRecorder__$3.DefaultWindowInactive) return;
            this.master.whenApplied().then(function () {
              _this8.master = {
                auto: __varRecorder__$3.DefaultWindowInactive
              };
            });
            this.relayoutWindowControls();
            this.renderOnGPU = false;
          }
        }, {
          key: "generatePreviewHTML",
          value: function Window_generatePreviewHTML_() {
            return $world.env.renderer.renderPreview(this, {
              ignorePosition: true,
              enforceGoalBounds: true
            });
          }
        }, {
          key: "keybindings",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this).concat([{
              keys: {
                mac: "Meta-Shift-L R E N",
                win: "Ctrl-Shift-L R E N"
              },
              command: "[window] change title"
            }]);
          }
        }, {
          key: "commands",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this).concat([{
              name: "[window] change title",
              exec: function () {
                var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(win) {
                  var args,
                      title,
                      _args7 = arguments;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          args = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
                          _context7.t0 = args.title;

                          if (_context7.t0) {
                            _context7.next = 6;
                            break;
                          }

                          _context7.next = 5;
                          return win.world().prompt("Enter new title", {
                            input: win.title,
                            historyId: "lively.morphic-window-title-hist"
                          });

                        case 5:
                          _context7.t0 = _context7.sent;

                        case 6:
                          title = _context7.t0;
                          if (title) win.title = title;
                          return _context7.abrupt("return", true);

                        case 9:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                function exec(_x2) {
                  return _exec.apply(this, arguments);
                }

                return exec;
              }()
            }]);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Window";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              submorphs: {
                initialize: function initialize() {
                  this.build();
                }
              },
              position: {
                set: function set(p) {
                  this.setProperty("position", p.roundTo(1));
                  this.updateNonMinimizedBounds();
                }
              },
              ui: {
                derived: true,
                get: function get() {
                  return {
                    header: this.get("header"),
                    resizer: this.get("resizer"),
                    windowControls: this.get("window controls"),
                    windowTitle: this.get("window title"),
                    contentsWrapper: this.get("contents wrapper")
                  };
                }
              },
              master: {
                before: ["extent"],
                initialize: function initialize() {
                  this.master = {
                    auto: __varRecorder__$3.DefaultWindow
                  };
                }
              },
              styleClasses: {
                defaultValue: ["active"]
              },
              clipMode: {
                defaultValue: "visible"
              },
              resizable: {
                defaultValue: true
              },
              resizerInset: {
                readOnly: true,
                get: function get() {
                  return 10;
                }
              },
              resizerOutset: {
                readOnly: true,
                get: function get() {
                  return -this.resizerInset * 0.75;
                }
              },
              title: {
                after: ["submorphs"],
                derived: true,
                get: function get() {
                  return this.ui.windowTitle.textString;
                },
                set: function set(title) {
                  var _this9 = this;

                  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                    var textAndAttrs, maxLength, length, truncated, i, string, attr, delta;
                    return regeneratorRuntime.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            textAndAttrs = typeof title === "string" ? [title, {}] : title;
                            maxLength = 100;
                            length = 0;
                            truncated = [];
                            i = 0;

                          case 5:
                            if (!(i < textAndAttrs.length)) {
                              _context8.next = 17;
                              break;
                            }

                            string = textAndAttrs[i];
                            attr = textAndAttrs[i + 1];
                            string = string.replace(/\n/g, "");
                            delta = string.length + length - maxLength;
                            if (delta > 0) string = string.slice(0, -delta);
                            truncated.push(string, attr || {});

                            if (!(length >= maxLength)) {
                              _context8.next = 14;
                              break;
                            }

                            return _context8.abrupt("break", 17);

                          case 14:
                            i = i + 2;
                            _context8.next = 5;
                            break;

                          case 17:
                            _this9.ui.windowTitle.value = truncated;
                            _this9.ui.windowTitle.reactsToPointer = false;

                            _this9.relayoutWindowControls();

                          case 20:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }))();
                }
              },
              targetMorph: {
                after: ["submorphs"],
                derived: true,
                get: function get() {
                  return __varRecorder__$3.arr.withoutAll(this.ui.contentsWrapper.submorphs, [this.get("header")])[0];
                },
                set: function set(morph) {
                  var contentsWrapper = this.ui.contentsWrapper;
                  var ctrls = [this.get("header")];

                  __varRecorder__$3.arr.withoutAll(contentsWrapper.submorphs, ctrls).forEach(function (ea) {
                    return ea.remove();
                  });

                  if (morph) contentsWrapper.addMorph(morph);
                  this.relayoutWindowControls();
                }
              },
              minimizedBounds: {
                serialize: false
              },
              nonMinimizedBounds: {},
              minimizable: {
                defaultValue: true,
                after: ["submorphs", "master"],
                set: function set(bool) {
                  this.setProperty("minimizable", bool);
                  this.toggleMinimizeButton();
                }
              },
              minimized: {
                defaultValue: false,
                set: function set(isMinimized) {
                  var changed = !!isMinimized !== !!this.minimized;
                  this.setProperty("minimized", isMinimized);
                  if (changed) this.applyMinimize();
                }
              }
            };
          }
        }, {
          key: "maximumBounds",
          value: function Window_maximumBounds_() {
            return $world.visibleBoundsExcludingStudioInterface().insetBy(40).roundTo(1);
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./window.js";
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
          start: 374,
          end: 25051
        });
      }(__varRecorder__$3.Morph));
      __varRecorder__$3["default"] = Window;

      var __varRecorder__$2 = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");
      __varRecorder__$2.List = List;
      __varRecorder__$2.FilterableList = FilterableList;
      __varRecorder__$2.RadioButtonGroup = RadioButtonGroup;
      __varRecorder__$2.ShadowObject = ShadowObject;
      __varRecorder__$2.TilingLayout = TilingLayout;
      __varRecorder__$2.Ellipse = Ellipse;
      __varRecorder__$2.Text = Text;
      __varRecorder__$2.Icon = Icon;
      __varRecorder__$2.Label = Label;
      __varRecorder__$2.component = component;
      __varRecorder__$2.ViewModel = ViewModel;
      __varRecorder__$2.add = add;
      __varRecorder__$2.part = part;
      __varRecorder__$2.Color = Color;
      __varRecorder__$2.rect = rect;
      __varRecorder__$2.pt = pt;
      __varRecorder__$2.ButtonDefault = ButtonDefault;
      __varRecorder__$2.InputLineDefault = InputLineDefault;
      __varRecorder__$2.arr = arr;
      __varRecorder__$2.promise = promise;
      __varRecorder__$2.InputLine = InputLine;
      __varRecorder__$2.PasswordInputLine = PasswordInputLine;
      var AbstractPromptModel = exports('A', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("AbstractPromptModel") && typeof __lively_classholder__.AbstractPromptModel === "function" ? __lively_classholder__.AbstractPromptModel : __lively_classholder__.AbstractPromptModel = function AbstractPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function AbstractPromptModel_viewDidLoad_() {
            this.view.hasFixedPosition = true;
          }
        }, {
          key: "focus",
          value: function AbstractPromptModel_focus_() {
            this.view.focus();
          }
        }, {
          key: "resolve",
          value: function AbstractPromptModel_resolve_(arg) {
            return this.answer.resolve(arg);
          }
        }, {
          key: "reject",
          value: function AbstractPromptModel_reject_() {
            var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            return this.answer.resolve(reason);
          }
        }, {
          key: "activate",
          value: function () {
            var _AbstractPromptModel_activate_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.focus();
                      this.answer = __varRecorder__$2.promise.deferred();
                      this._isActive = true;

                      __varRecorder__$2.promise["finally"](this.answer.promise, function () {
                        return _this._isActive = false;
                      });

                      if (this.autoRemove) {
                        __varRecorder__$2.promise["finally"](this.answer.promise, function () {
                          return _this.view.fadeOut(200);
                        });
                      }

                      return _context.abrupt("return", this.answer.promise);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function AbstractPromptModel_activate_() {
              return _AbstractPromptModel_activate_.apply(this, arguments);
            }

            return AbstractPromptModel_activate_;
          }()
        }, {
          key: "disableButtons",
          value: function AbstractPromptModel_disableButtons_() {
            var _this$ui = this.ui,
                okButton = _this$ui.okButton,
                cancelButton = _this$ui.cancelButton;
            okButton.disable();
            cancelButton.disable();
          }
        }, {
          key: "enableButtons",
          value: function AbstractPromptModel_enableButtons_() {
            var _this$ui2 = this.ui,
                okButton = _this$ui2.okButton,
                cancelButton = _this$ui2.cancelButton;
            okButton.enable();
            cancelButton.enable();
          }
        }, {
          key: "isActive",
          value: function AbstractPromptModel_isActive_() {
            return !!this.world() && this._isActive;
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Enter",
              command: "resolve"
            }, {
              keys: "Escape",
              command: "reject"
            }, {
              keys: {
                mac: "Meta-."
              },
              command: "reject"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this2 = this;

            return [{
              name: "resolve",
              exec: function exec(_, arg) {
                _this2.resolve(arg);

                return true;
              }
            }, {
              name: "reject",
              exec: function exec(_, arg) {
                _this2.reject(arg);

                return true;
              }
            }];
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "AbstractPromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              _isActive: {
                defaultValue: false
              },
              autoRemove: {
                defaultValue: true
              },
              answer: {
                defaultValue: null,
                derived: true
              },
              label: {
                defaultValue: "A prompt title",
                set: function set(label) {
                  this.setProperty("label", label);

                  if (this.view) {
                    this.ui.promptTitle.value = label;
                  }
                }
              },
              isPrompt: {
                get: function get() {
                  return true;
                }
              },
              isEpiMorph: {
                get: function get() {
                  return true;
                }
              },
              expose: {
                get: function get() {
                  return ["keybindings", "commands", "activate", "isActive", "isPrompt", "isEpiMorph"];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 460,
          end: 2674
        });
      }(__varRecorder__$2.ViewModel));
      __varRecorder__$2.AbstractPromptModel = AbstractPromptModel;
      __varRecorder__$2.AbstractPromptModel = AbstractPromptModel;
      var InformPromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InformPromptModel") && typeof __lively_classholder__.InformPromptModel === "function" ? __lively_classholder__.InformPromptModel : __lively_classholder__.InformPromptModel = function InformPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function InformPromptModel_viewDidLoad_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "viewDidLoad", this).call(this);

            var _this$ui3 = this.ui,
                promptTitle = _this$ui3.promptTitle,
                additionalText = _this$ui3.additionalText;
            promptTitle.lineWrapping = this.lineWrapping;
            promptTitle.fixedWidth = !!this.lineWrapping;
            promptTitle.value = this.label;

            if (this.additionalText) {
              additionalText.value = this.additionalText;
              additionalText.visible = true;
            }
          }
        }, {
          key: "keybindings",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this).concat([{
              keys: "Escape",
              command: "resolve"
            }]);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InformPromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              lineWrapping: {
                defaultValue: true
              },
              additionalText: {},
              bindings: {
                get: function get() {
                  return [{
                    model: "ok button",
                    signal: "fire",
                    handler: "resolve"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 2682,
          end: 3573
        });
      }(__varRecorder__$2.AbstractPromptModel);
      __varRecorder__$2.InformPromptModel = InformPromptModel;
      __varRecorder__$2.InformPromptModel = InformPromptModel;
      var ConfirmPromptModel = exports('g', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ConfirmPromptModel") && typeof __lively_classholder__.ConfirmPromptModel === "function" ? __lively_classholder__.ConfirmPromptModel : __lively_classholder__.ConfirmPromptModel = function ConfirmPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "expose",
          get: function get() {
            return ["label"].concat(_toConsumableArray(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "expose", this)));
          }
        }, {
          key: "viewDidLoad",
          value: function ConfirmPromptModel_viewDidLoad_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "viewDidLoad", this).call(this);

            var _this$ui4 = this.ui,
                title = _this$ui4.promptTitle,
                okButton = _this$ui4.okButton,
                cancelButton = _this$ui4.cancelButton;
            okButton.label = this.confirmLabel;
            cancelButton.label = this.rejectLabel;
            if (this.forceConfirm) cancelButton.disable();
            title.lineWrapping = this.lineWrapping;
            title.fixedWidth = !!this.lineWrapping;
            title.value = this.label;
          }
        }, {
          key: "resolve",
          value: function ConfirmPromptModel_resolve_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, true);
          }
        }, {
          key: "reject",
          value: function ConfirmPromptModel_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, false);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ConfirmPromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              label: {
                defaultValue: ["Confirm\n", {
                  fontWeight: "bold"
                }, "An appropriate message for the user that helps them to understand the situation!", {
                  fontSize: 17,
                  fontWeight: "normal"
                }]
              },
              forceConfirm: {
                defaultValue: false
              },
              lineWrapping: {
                defaultValue: true
              },
              confirmLabel: {
                defaultValue: "OK"
              },
              rejectLabel: {
                defaultValue: "CANCEL"
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "ok button",
                    signal: "fire",
                    handler: "resolve"
                  }, {
                    model: "cancel button",
                    signal: "fire",
                    handler: "reject"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 3581,
          end: 5031
        });
      }(__varRecorder__$2.AbstractPromptModel));
      __varRecorder__$2.ConfirmPromptModel = ConfirmPromptModel;
      __varRecorder__$2.ConfirmPromptModel = ConfirmPromptModel;
      var MultipleChoicePromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MultipleChoicePromptModel") && typeof __lively_classholder__.MultipleChoicePromptModel === "function" ? __lively_classholder__.MultipleChoicePromptModel : __lively_classholder__.MultipleChoicePromptModel = function MultipleChoicePromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "resolve",
          value: function MultipleChoicePromptModel_resolve_(value) {
            return this.answer.resolve(value || this.ui.choices.value);
          }
        }, {
          key: "viewDidLoad",
          value: function MultipleChoicePromptModel_viewDidLoad_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "viewDidLoad", this).call(this);

            this.ui.choices.choices = this.choices;
          }
        }, {
          key: "onKeyDown",
          value: function MultipleChoicePromptModel_onKeyDown_($onKeyDown, evt) {
            if (/^[0-9]$/.test(evt.keyCombo)) {
              var n = Number(evt.keyCombo);
              var btn = this.view.getSubmorphNamed("button " + n);

              if (btn) {
                btn.select();
                return evt.stop();
              }
            }

            return $onKeyDown(evt);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MultipleChoicePromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              choices: {
                defaultValue: [],
                set: function set(choices) {
                  this.setProperty("choices", choices);
                  var choiceContainer = this.ui.choices;

                  if (choiceContainer) {
                    choiceContainer.choices = choices;
                  }
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "ok button",
                    signal: "fire",
                    handler: "resolve"
                  }, {
                    model: "cancel button",
                    signal: "fire",
                    handler: "reject"
                  }, {
                    signal: "onKeyDown",
                    handler: "onKeyDown",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 5039,
          end: 6321
        });
      }(__varRecorder__$2.ConfirmPromptModel);
      __varRecorder__$2.MultipleChoicePromptModel = MultipleChoicePromptModel;
      __varRecorder__$2.MultipleChoicePromptModel = MultipleChoicePromptModel;
      var TextPromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("TextPromptModel") && typeof __lively_classholder__.TextPromptModel === "function" ? __lively_classholder__.TextPromptModel : __lively_classholder__.TextPromptModel = function TextPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "focus",
          value: function TextPromptModel_focus_() {
            this.ui.input.focus();
          }
        }, {
          key: "resolve",
          value: function TextPromptModel_resolve_() {
            var inputLine = this.ui.input;

            if (this.validate(inputLine.input)) {
              return this.answer.resolve(inputLine.acceptInput());
            } else inputLine.indicateError(this.errorMessage);
          }
        }, {
          key: "viewDidLoad",
          value: function TextPromptModel_viewDidLoad_() {
            var _this$ui5 = this.ui,
                title = _this$ui5.promptTitle,
                inputLine = _this$ui5.input,
                label = this.label,
                historyId = this.historyId,
                input = this.input,
                useLastInput = this.useLastInput,
                selectInput = this.selectInput;
            title.value = label;

            if (inputLine) {
              inputLine.textString = input || "";

              if (historyId && useLastInput) {
                var lastInput = __varRecorder__$2.arr.last(inputLine.inputHistory.items);

                if (lastInput) inputLine.textString = lastInput;
              }
            }

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "viewDidLoad", this).call(this);

            if (!inputLine.isPasswordInput) {
              inputLine.gotoDocumentEnd();
              inputLine.scrollCursorIntoView();
            }

            if (selectInput) {
              inputLine.selectAll();
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "TextPromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              lineWrapping: {
                defaultValue: true
              },
              errorMessage: {
                defaultValue: "Invalid Input"
              },
              confirmLabel: {
                defaultValue: "OK"
              },
              rejectLabel: {
                defaultValue: "CANCEL"
              },
              historyId: {
                defaultValue: "text prompt"
              },
              input: {
                defaultValue: ""
              },
              selectInput: {
                defaultValue: false
              },
              useLastInput: {
                defaultValue: false
              },
              maxWidth: {
                initialize: function initialize() {
                  this.maxWidth = $world.width - 20;
                }
              },
              validate: {
                serialize: false,
                initialize: function initialize() {
                  this.validate = function () {
                    return true;
                  };
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "ok button",
                    signal: "fire",
                    handler: "resolve"
                  }, {
                    model: "cancel button",
                    signal: "fire",
                    handler: "reject"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 6329,
          end: 8361
        });
      }(__varRecorder__$2.ConfirmPromptModel);
      __varRecorder__$2.TextPromptModel = TextPromptModel;
      __varRecorder__$2.TextPromptModel = TextPromptModel;
      var EditPromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("EditPromptModel") && typeof __lively_classholder__.EditPromptModel === "function" ? __lively_classholder__.EditPromptModel : __lively_classholder__.EditPromptModel = function EditPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "keybindings",
          get: function get() {
            return [{
              keys: {
                mac: "Meta-Enter|Meta-S",
                win: "Ctrl-Enter|Ctrl-S"
              },
              command: "resolve"
            }, {
              keys: "Escape",
              command: "reject"
            }, {
              keys: "Alt-P|Alt-Up",
              command: "history back"
            }, {
              keys: "Alt-N|Alt-Down",
              command: "history forward"
            }, {
              keys: "Alt-H",
              command: "browse history"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this3 = this;

            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this).concat([{
              name: "history back",
              exec: function exec(_, arg) {
                if (_this3.historyId) {
                  var editor = _this3.ui.editor;

                  var hist = __varRecorder__$2.InputLine.getHistory(_this3.historyId);

                  var items = hist.items,
                      index = hist.index;
                  hist.index = --index;
                  if (index < 0) hist.index = index = items.length - 1;
                  editor.undoManager.group();
                  editor.textString = items[index];
                  editor.undoManager.group();
                }

                return true;
              }
            }, {
              name: "browse history",
              exec: function () {
                var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, arg) {
                  var hist, _yield$_this3$world$e, status, list, _yield$_this3$world$e2, choice;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!_this3.historyId) {
                            _context2.next = 10;
                            break;
                          }

                          hist = __varRecorder__$2.InputLine.getHistory(_this3.historyId);
                          _context2.next = 4;
                          return _this3.world().editListPrompt("input history " + _this3.historyId, hist.items, {
                            requester: _this3.view
                          });

                        case 4:
                          _yield$_this3$world$e = _context2.sent;
                          status = _yield$_this3$world$e.status;
                          list = _yield$_this3$world$e.list;
                          _yield$_this3$world$e2 = _slicedToArray(_yield$_this3$world$e.selections, 1);
                          choice = _yield$_this3$world$e2[0];

                          if (status !== "canceled") {
                            hist.items = list;

                            __varRecorder__$2.InputLine.setHistory(_this3.historyId, hist);

                            if (choice) {
                              hist.index = hist.items.indexOf(choice);
                              _this3.ui.editor.textString = choice;
                            }
                          }

                        case 10:
                          return _context2.abrupt("return", true);

                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function exec(_x, _x2) {
                  return _exec.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "history forward",
              exec: function exec(_, arg) {
                if (_this3.historyId) {
                  var editor = _this3.ui.editor;

                  var hist = __varRecorder__$2.InputLine.getHistory(_this3.historyId);

                  var items = hist.items,
                      index = hist.index;
                  hist.index = ++index;
                  if (index >= items.length) hist.index = index = 0;
                  editor.undoManager.group();
                  editor.textString = items[index];
                  editor.undoManager.group();
                }

                return true;
              }
            }]);
          }
        }, {
          key: "focus",
          value: function EditPromptModel_focus_() {
            this.ui.editor.focus();
          }
        }, {
          key: "viewDidLoad",
          value: function EditPromptModel_viewDidLoad_() {
            var textStyle = this.textStyle,
                input = this.input,
                mode = this.mode,
                evalEnvironment = this.evalEnvironment,
                maxWidth = this.maxWidth,
                view = this.view,
                editor = this.ui.editor;
            view.hasFixedPosition = true;
            if (mode && !textStyle.fontFamily) textStyle.fontFamily = "IBM Plex Mono";
            editor.value = input || "";
            Object.assign(editor, textStyle);
            editor.changeEditorMode(mode).then(function () {
              if (evalEnvironment && editor.editorPlugin) {
                Object.assign(editor.editorPlugin.evalEnvironment, evalEnvironment);
              }
            });
            var inputWidth = editor.textBounds().width + 50;

            if (inputWidth > view.width - 25) {
              view.width = Math.min(maxWidth, inputWidth + 125);
            }

            editor.gotoDocumentEnd();
            editor.scrollCursorIntoView();
          }
        }, {
          key: "resolve",
          value: function EditPromptModel_resolve_(arg) {
            if (this.resolveTextAttributes) {
              return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, this.ui.editor.textAndAttributes);
            }

            var content = this.ui.editor.textString.trim();

            if (this.historyId) {
              var hist = __varRecorder__$2.InputLine.getHistory(this.historyId);

              hist.items = hist.items.filter(function (ea) {
                return ea !== content;
              });
              hist.items.push(content);

              while (hist.items.length > hist.items.max) {
                hist.items.shift();
              }

              hist.index = hist.items.length;

              __varRecorder__$2.InputLine.setHistory(this.historyId, hist);
            }

            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, content);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "EditPromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              textStyle: {
                defaultValue: {}
              },
              historyId: {
                defaultValue: "edit prompt"
              },
              mode: {
                defaultValue: "text"
              },
              maxWidth: {
                initialize: function initialize() {
                  this.maxWidth = $world.visibleBounds().width - 20;
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "ok button",
                    signal: "fire",
                    handler: "resolve"
                  }, {
                    model: "cancel button",
                    signal: "fire",
                    handler: "reject"
                  }, {
                    signal: "focus",
                    handler: "focus",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 8369,
          end: 12888
        });
      }(__varRecorder__$2.TextPromptModel);
      __varRecorder__$2.EditPromptModel = EditPromptModel;
      __varRecorder__$2.EditPromptModel = EditPromptModel;
      var PasswordPromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("PasswordPromptModel") && typeof __lively_classholder__.PasswordPromptModel === "function" ? __lively_classholder__.PasswordPromptModel : __lively_classholder__.PasswordPromptModel = function PasswordPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "resolve",
          value: function PasswordPromptModel_resolve_() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, this.ui.input.acceptInput());
          }
        }, {
          key: "focus",
          value: function () {
            var _PasswordPromptModel_focus_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      setTimeout(function () {
                        _this4.ui.input.focus();
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function PasswordPromptModel_focus_() {
              return _PasswordPromptModel_focus_.apply(this, arguments);
            }

            return PasswordPromptModel_focus_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "PasswordPromptModel";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 12896,
          end: 13166
        });
      }(__varRecorder__$2.TextPromptModel);
      __varRecorder__$2.PasswordPromptModel = PasswordPromptModel;
      __varRecorder__$2.PasswordPromptModel = PasswordPromptModel;
      var ListPromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ListPromptModel") && typeof __lively_classholder__.ListPromptModel === "function" ? __lively_classholder__.ListPromptModel : __lively_classholder__.ListPromptModel = function ListPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "bindings",
          get: function get() {
            return [].concat(_toConsumableArray(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "bindings", this)), [{
              target: "prompt list",
              signal: "selection",
              handler: "onSelection"
            }, {
              target: "prompt list",
              signal: "accepted",
              handler: "resolve"
            }, {
              target: "prompt list",
              signal: "reject",
              handler: "reject"
            }, {
              target: "prompt list",
              signal: "updateFilter",
              handler: "onFilter"
            }]);
          }
        }, {
          key: "focus",
          value: function ListPromptModel_focus_() {
            this.ui.promptList.focus();
          }
        }, {
          key: "reset",
          value: function ListPromptModel_reset_() {
            this.items = [];
          }
        }, {
          key: "viewDidLoad",
          value: function ListPromptModel_viewDidLoad_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "viewDidLoad", this).call(this);

            var label = this.label,
                multiSelect = this.multiSelect,
                historyId = this.historyId,
                useLastInput = this.useLastInput,
                filterable = this.filterable,
                items = this.items,
                fuzzy = this.fuzzy,
                filterFunction = this.filterFunction,
                sortFunction = this.sortFunction,
                actions = this.actions,
                selectedAction = this.selectedAction,
                _this$ui6 = this.ui,
                title = _this$ui6.promptTitle,
                list = _this$ui6.promptList,
                input = _this$ui6.input;
            title.value = label;
            Object.assign(list, {
              multiSelect: multiSelect,
              historyId: historyId,
              useLastInput: useLastInput
            });
            list.items = items;
            input.visible = !!filterable;
            if (filterable && fuzzy) list.fuzzy = fuzzy;

            if (filterable && typeof filterFunction === "function") {
              list.filterFunction = filterFunction;
            }

            if (filterable && typeof sortFunction === "function") {
              list.sortFunction = sortFunction;
            }

            if (filterable && actions) {
              list.actions = actions;
            }

            if (filterable && selectedAction) {
              list.selectedAction = selectedAction;
            }
          }
        }, {
          key: "onRefresh",
          value: function ListPromptModel_onRefresh_(prop) {
            if (prop === "items") {
              this.ui.promptList.items = this.items;
            }
          }
        }, {
          key: "resolve",
          value: function ListPromptModel_resolve_(arg) {
            var list = this.ui.promptList;
            var answer = arg || list instanceof __varRecorder__$2.FilterableList ? list.acceptInput() : {
              selected: list.selections,
              status: "accepted",
              actions: "default"
            };
            return this.answer.resolve(answer);
          }
        }, {
          key: "reject",
          value: function ListPromptModel_reject_() {
            return this.answer.resolve({
              prompt: this,
              selected: [],
              filtered: [],
              status: "canceled"
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ListPromptModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              items: {
                defaultValue: []
              },
              multiSelect: {
                defaultValue: false
              },
              filterable: {
                defaultValue: false
              },
              padding: {
                defaultValue: __varRecorder__$2.rect(0, 0, 0, 0)
              },
              preselect: {
                defaultValue: 0
              },
              onSelection: {
                defaultValue: function defaultValue() {}
              },
              actions: {
                defaultValue: []
              },
              selectedAction: {},
              fuzzy: {
                defaultValue: false
              },
              filterFunction: {},
              sortFunction: {},
              onFilter: {
                defaultValue: function defaultValue() {}
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 13174,
          end: 15872
        });
      }(__varRecorder__$2.TextPromptModel);
      __varRecorder__$2.ListPromptModel = ListPromptModel;
      __varRecorder__$2.ListPromptModel = ListPromptModel;
      var EditListPromptModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/prompts.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("EditListPromptModel") && typeof __lively_classholder__.EditListPromptModel === "function" ? __lively_classholder__.EditListPromptModel : __lively_classholder__.EditListPromptModel = function EditListPromptModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "resolve",
          value: function EditListPromptModel_resolve_() {
            var _this$ui$promptList = this.ui.promptList,
                list = _this$ui$promptList.items,
                selections = _this$ui$promptList.selections;
            return this.answer.resolve({
              list: list.map(function (item) {
                return item.value;
              }),
              selections: selections
            });
          }
        }, {
          key: "reject",
          value: function EditListPromptModel_reject_() {
            return this.answer.resolve({
              list: [],
              selections: [],
              status: "canceled"
            });
          }
        }, {
          key: "bindings",
          get: function get() {
            return [].concat(_toConsumableArray(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "bindings", this)), [{
              model: "add item button",
              signal: "fire",
              handler: "addItemToList"
            }, {
              model: "remove item button",
              signal: "fire",
              handler: "removeSelectedItemsFromList"
            }]);
          }
        }, {
          key: "keybindings",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this).concat([{
              keys: {
                mac: "Meta-Enter",
                win: "Ctrl-Enter"
              },
              command: "resolve"
            }, {
              keys: "Ctrl-G",
              command: "deselect"
            }, {
              keys: "Shift-=|+",
              command: "add item to list"
            }, {
              keys: "Delete|-|Backspace",
              command: "remove item from list"
            }]);
          }
        }, {
          key: "commands",
          get: function get() {
            var _this5 = this;

            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this).concat([{
              name: "deselect",
              exec: function exec() {
                _this5.ui.list.selection = null;
                return true;
              }
            }, {
              name: "add item to list",
              exec: function exec() {
                _this5.addItemToList();

                return true;
              }
            }, {
              name: "remove item from list",
              exec: function exec() {
                _this5.removeSelectedItemsFromList();

                return true;
              }
            }]);
          }
        }, {
          key: "removeSelectedItemsFromList",
          value: function () {
            var _EditListPromptModel_removeSelectedItemsFromList_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var list, selectAfterwards;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      list = this.ui.promptList;
                      selectAfterwards = list.selectedItems.length !== 1 ? -1 : list.selectedIndex === 0 ? 0 : list.selectedIndex - 1;
                      list.items = __varRecorder__$2.arr.withoutAll(list.items, list.selectedItems);
                      if (selectAfterwards < 0) list.selection = null;else list.selectedIndex = selectAfterwards;
                      list.focus();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function EditListPromptModel_removeSelectedItemsFromList_() {
              return _EditListPromptModel_removeSelectedItemsFromList_.apply(this, arguments);
            }

            return EditListPromptModel_removeSelectedItemsFromList_;
          }()
        }, {
          key: "addItemToList",
          value: function () {
            var _EditListPromptModel_addItemToList_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var list, input, toAdd, insertAt;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      list = this.ui.promptList;
                      input = list.selection ? list.items[list.selectedIndex].string : "";
                      _context5.next = 4;
                      return this.world().prompt("Input to add to the list", {
                        historyId: this.historyId || "EditListPrompt-input-history",
                        requester: this.view,
                        input: input
                      });

                    case 4:
                      toAdd = _context5.sent;

                      if (toAdd) {
                        _context5.next = 7;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 7:
                      list = this.ui.list;
                      insertAt = list.selection ? list.selectedIndex + 1 : list.items.length;
                      list.addItemAt(toAdd, insertAt);
                      list.focus();
                      list.selectedIndex = insertAt;

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function EditListPromptModel_addItemToList_() {
              return _EditListPromptModel_addItemToList_.apply(this, arguments);
            }

            return EditListPromptModel_addItemToList_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "EditListPromptModel";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./prompts.cp.js";
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
          start: 15880,
          end: 18308
        });
      }(__varRecorder__$2.ListPromptModel);
      __varRecorder__$2.EditListPromptModel = EditListPromptModel;
      __varRecorder__$2.EditListPromptModel = EditListPromptModel;
      __varRecorder__$2.RedButton = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ButtonDefault, {
          name: "red button",
          borderWidth: 0,
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 3,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.26),
            blur: 10
          }),
          extent: __varRecorder__$2.pt(94, 38),
          fill: __varRecorder__$2.Color.rgb(231, 76, 60),
          submorphs: [{
            type: __varRecorder__$2.Label,
            name: "label",
            fontColor: __varRecorder__$2.Color.rgb(253, 254, 254),
            fontFamily: "IBM Plex Sans",
            fontSize: 14,
            fontWeight: "bold",
            position: __varRecorder__$2.pt(20, 10),
            reactsToPointer: false,
            textAndAttributes: ["CANCEL", null]
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "RedButton",
        range: {
          start: 18315,
          end: 18824
        }
      }, __varRecorder__$2.RedButton);
      __varRecorder__$2.RedButtonClicked = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.RedButton, {
          name: "red button clicked",
          fill: __varRecorder__$2.Color.rgb(177, 57, 44)
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "RedButtonClicked",
        range: {
          start: 18832,
          end: 18937
        }
      }, __varRecorder__$2.RedButtonClicked);
      __varRecorder__$2.GreenButton = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ButtonDefault, {
          name: "green button",
          borderWidth: 0,
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 3,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.26),
            blur: 10
          }),
          extent: __varRecorder__$2.pt(90, 38),
          fill: __varRecorder__$2.Color.rgb(62, 207, 142),
          submorphs: [{
            type: __varRecorder__$2.Label,
            name: "label",
            fontColor: __varRecorder__$2.Color.rgb(253, 254, 254),
            fontFamily: "IBM Plex Sans",
            fontSize: 14,
            fontWeight: "bold",
            position: __varRecorder__$2.pt(35, 10),
            reactsToPointer: false,
            textAndAttributes: ["OK", null]
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "GreenButton",
        range: {
          start: 18945,
          end: 19455
        }
      }, __varRecorder__$2.GreenButton);
      __varRecorder__$2.GreenButtonClicked = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.GreenButton, {
          name: "green button clicked",
          fill: __varRecorder__$2.Color.rgb(40, 155, 104)
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "GreenButtonClicked",
        range: {
          start: 19463,
          end: 19575
        }
      }, __varRecorder__$2.GreenButtonClicked);
      __varRecorder__$2.PlainButton = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ButtonDefault, {
          name: "plain button",
          borderWidth: 0,
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 1,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.26)
          }),
          extent: __varRecorder__$2.pt(40, 37),
          fill: __varRecorder__$2.Color.rgb(202, 207, 210),
          submorphs: [{
            type: __varRecorder__$2.Label,
            name: "label",
            fontColor: __varRecorder__$2.Color.rgb(253, 254, 254),
            fontFamily: "IBM Plex Sans",
            fontSize: 14,
            fontWeight: "bold",
            position: __varRecorder__$2.pt(13.5, 11.5),
            reactsToPointer: false,
            textAndAttributes: __varRecorder__$2.Icon.textAttribute("plus")
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "PlainButton",
        range: {
          start: 19583,
          end: 20098
        }
      }, __varRecorder__$2.PlainButton);
      __varRecorder__$2.PlainButtonClicked = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.PlainButton, {
          name: "plain button clicked",
          fill: __varRecorder__$2.Color.rgb(127, 140, 141)
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "PlainButtonClicked",
        range: {
          start: 20106,
          end: 20219
        }
      }, __varRecorder__$2.PlainButtonClicked);
      __varRecorder__$2.ChoiceButtonSelected = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component({
          name: "choice button Selected",
          acceptsDrops: false,
          borderColor: __varRecorder__$2.Color.rgb(204, 204, 204),
          borderRadius: 4,
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 3,
            rotation: 75,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.2)
          }),
          extent: __varRecorder__$2.pt(371.5, 47),
          layout: new __varRecorder__$2.TilingLayout({
            axisAlign: "center",
            orderByIndex: true,
            padding: {
              height: 0,
              width: 0,
              x: 12,
              y: 12
            },
            reactToSubmorphAnimations: false,
            renderViaCSS: true,
            spacing: 12
          }),
          nativeCursor: "pointer",
          selected: true,
          selectionColor: __varRecorder__$2.Color.rgb(52, 152, 219),
          submorphs: [{
            type: __varRecorder__$2.Ellipse,
            name: "indicator",
            borderColor: __varRecorder__$2.Color.rgb(204, 204, 204),
            borderWidth: 1,
            dropShadow: new __varRecorder__$2.ShadowObject({
              distance: 3,
              rotation: 75,
              color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.2)
            }),
            extent: __varRecorder__$2.pt(12, 12),
            fill: __varRecorder__$2.Color.rgb(52, 152, 219),
            isEllipse: true,
            nativeCursor: "pointer",
            origin: __varRecorder__$2.pt(6, 6)
          }, {
            type: __varRecorder__$2.Label,
            name: "label",
            fontSize: 15,
            reactsToPointer: false,
            textAndAttributes: [].concat(_toConsumableArray(__varRecorder__$2.Icon.textAttribute("external-link-alt")), ["  Import existing package"])
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "ChoiceButtonSelected",
        range: {
          start: 20227,
          end: 21432
        }
      }, __varRecorder__$2.ChoiceButtonSelected);
      __varRecorder__$2.ChoiceButtonUnselected = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ChoiceButtonSelected, {
          name: "choice button unselected",
          opacity: 0.5,
          submorphs: [{
            name: "indicator",
            fill: __varRecorder__$2.Color.rgb(255, 255, 255)
          }, {
            name: "label",
            textAndAttributes: [].concat(_toConsumableArray(__varRecorder__$2.Icon.textAttribute("cube")), ["  Add Package"])
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "ChoiceButtonUnselected",
        range: {
          start: 21440,
          end: 21730
        }
      }, __varRecorder__$2.ChoiceButtonUnselected);
      __varRecorder__$2.LightPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component({
          name: "light prompt",
          borderRadius: 8,
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 5,
            rotation: 75,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.37),
            blur: 60,
            fast: false
          }),
          extent: __varRecorder__$2.pt(387, 60),
          fill: __varRecorder__$2.Color.rgb(251, 252, 252),
          layout: new __varRecorder__$2.TilingLayout({
            align: "center",
            axisAlign: "center",
            axis: "column",
            orderByIndex: true,
            hugContentsVertically: true,
            hugContentsHorizontally: true,
            spacing: 16,
            padding: 15
          }),
          submorphs: [{
            type: __varRecorder__$2.Text,
            name: "prompt title",
            extent: __varRecorder__$2.pt(355, 28),
            fill: __varRecorder__$2.Color.rgba(255, 255, 255, 0),
            fixedWidth: true,
            fontColor: __varRecorder__$2.Color.rgb(102, 102, 102),
            fontFamily: "\"IBM Plex Sans\"",
            fontSize: 20,
            fontWeight: "bold",
            nativeCursor: "default",
            padding: __varRecorder__$2.rect(20, 0, 0, 0),
            readOnly: true,
            textAlign: "center",
            textString: "Hello World!"
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "LightPrompt",
        range: {
          start: 21738,
          end: 22639
        }
      }, __varRecorder__$2.LightPrompt);
      __varRecorder__$2.DarkPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.LightPrompt, {
          name: "dark prompt",
          dropShadow: new __varRecorder__$2.ShadowObject({
            distance: 5,
            rotation: 75.00000000000001,
            color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.5),
            blur: 60,
            fast: false
          }),
          fill: __varRecorder__$2.Color.rgba(0, 0, 0, 0.65),
          submorphs: [{
            name: "prompt title",
            fontColor: __varRecorder__$2.Color.rgb(253, 254, 254)
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "DarkPrompt",
        range: {
          start: 22647,
          end: 22988
        }
      }, __varRecorder__$2.DarkPrompt);
      __varRecorder__$2.InformPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.LightPrompt, {
          defaultViewModel: __varRecorder__$2.InformPromptModel,
          name: "inform prompt",
          extent: __varRecorder__$2.pt(249.3, 114),
          submorphs: [{
            name: "prompt title",
            lineWrapping: "by-words",
            textAndAttributes: ["Inform message", null]
          }, __varRecorder__$2.add({
            type: __varRecorder__$2.Text,
            name: "additional text",
            fontFamily: "\"IBM Plex Sans\"",
            fontSize: 16,
            visible: false
          }), __varRecorder__$2.add(__varRecorder__$2.part(__varRecorder__$2.GreenButton, {
            name: "ok button",
            extent: __varRecorder__$2.pt(90, 38),
            submorphs: [{
              name: "label",
              textString: "OK"
            }]
          }))]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "InformPrompt",
        range: {
          start: 22996,
          end: 23529
        }
      }, __varRecorder__$2.InformPrompt);
      var OKCancelButtonWrapper = exports('O', __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component({
          name: "button wrapper",
          extent: __varRecorder__$2.pt(331, 48.9),
          fill: __varRecorder__$2.Color.rgba(0, 0, 0, 0),
          layout: new __varRecorder__$2.TilingLayout({
            align: "center",
            orderByIndex: true,
            reactToSubmorphAnimations: false,
            renderViaCSS: true,
            spacing: 20
          }),
          submorphs: [__varRecorder__$2.part(__varRecorder__$2.GreenButton, {
            name: "ok button",
            submorphs: [{
              name: "label",
              textString: "OK"
            }]
          }), __varRecorder__$2.part(__varRecorder__$2.RedButton, {
            name: "cancel button",
            submorphs: [{
              name: "label",
              textString: "CANCEL"
            }]
          })]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "OKCancelButtonWrapper",
        range: {
          start: 23544,
          end: 24079
        }
      }, __varRecorder__$2.OKCancelButtonWrapper));
      __varRecorder__$2.OKCancelButtonWrapper = OKCancelButtonWrapper;
      __varRecorder__$2.OKCancelButtonWrapper = OKCancelButtonWrapper;
      __varRecorder__$2.ConfirmPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.LightPrompt, {
          defaultViewModel: __varRecorder__$2.ConfirmPromptModel,
          name: "confirm prompt",
          layout: new __varRecorder__$2.TilingLayout({
            align: "center",
            axis: "column",
            axisAlign: "center",
            hugContentsHorizontally: true,
            hugContentsVertically: true,
            orderByIndex: true,
            padding: __varRecorder__$2.rect(15, 15, 0, 0),
            spacing: 9
          }),
          submorphs: [{
            name: "prompt title",
            lineWrapping: "by-words",
            textAndAttributes: ["Confirm\n", {
              fontWeight: "bold"
            }, "An appropriate message for the user that helps them to understand the situation!", {
              fontSize: 17,
              fontWeight: "normal"
            }]
          }, __varRecorder__$2.add(__varRecorder__$2.part(__varRecorder__$2.OKCancelButtonWrapper))]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "ConfirmPrompt",
        range: {
          start: 24087,
          end: 24761
        }
      }, __varRecorder__$2.ConfirmPrompt);
      __varRecorder__$2.MultipleChoicePrompt = __varRecorder__$2.component["for"](function () {
        var _varRecorder__$Tilin;

        return __varRecorder__$2.component(__varRecorder__$2.ConfirmPrompt, {
          defaultViewModel: __varRecorder__$2.MultipleChoicePromptModel,
          name: "multiple choice prompt",
          submorphs: [__varRecorder__$2.add({
            type: __varRecorder__$2.RadioButtonGroup,
            layout: new __varRecorder__$2.TilingLayout((_varRecorder__$Tilin = {
              axis: "column",
              hugContentsVertically: true,
              hugContentsHorizontally: true,
              align: "center",
              axisAlign: "center"
            }, _defineProperty(_varRecorder__$Tilin, "hugContentsHorizontally", true), _defineProperty(_varRecorder__$Tilin, "hugContentsVertically", true), _defineProperty(_varRecorder__$Tilin, "orderByIndex", true), _defineProperty(_varRecorder__$Tilin, "spacing", 9), _varRecorder__$Tilin)),
            name: "choices",
            extent: __varRecorder__$2.pt(387, 118),
            fill: __varRecorder__$2.Color.rgba(0, 0, 0, 0),
            submorphs: [__varRecorder__$2.part(__varRecorder__$2.ChoiceButtonUnselected), __varRecorder__$2.part(__varRecorder__$2.ChoiceButtonSelected)]
          }, "button wrapper"), {
            name: "prompt title",
            extent: __varRecorder__$2.pt(355, 91.7),
            textAndAttributes: ["Confirm\n", {
              fontWeight: "bold"
            }, "An appropriate message for the user that helps them to understand the situation!", {
              fontSize: 17,
              fontWeight: "normal"
            }]
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "MultipleChoicePrompt",
        range: {
          start: 24769,
          end: 25700
        }
      }, __varRecorder__$2.MultipleChoicePrompt);
      __varRecorder__$2.TextPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ConfirmPrompt, {
          defaultViewModel: __varRecorder__$2.TextPromptModel,
          name: "text prompt",
          submorphs: [__varRecorder__$2.add(__varRecorder__$2.part(__varRecorder__$2.InputLineDefault, {
            name: "input"
          }), "button wrapper")]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "TextPrompt",
        range: {
          start: 25708,
          end: 25896
        }
      }, __varRecorder__$2.TextPrompt);
      __varRecorder__$2.EditPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ConfirmPrompt, {
          defaultViewModel: __varRecorder__$2.EditPromptModel,
          name: "edit prompt",
          submorphs: [__varRecorder__$2.add({
            name: "editor",
            type: __varRecorder__$2.Text,
            fontSize: 12,
            master: __varRecorder__$2.InputLineDefault,
            height: 300
          }, "button wrapper")]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "EditPrompt",
        range: {
          start: 25904,
          end: 26150
        }
      }, __varRecorder__$2.EditPrompt);
      __varRecorder__$2.PasswordPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ConfirmPrompt, {
          defaultViewModel: __varRecorder__$2.PasswordPromptModel,
          name: "password prompt",
          master: __varRecorder__$2.DarkPrompt,
          submorphs: [{
            name: "prompt title",
            lineWrapping: "by-words"
          }, __varRecorder__$2.add({
            name: "input",
            type: __varRecorder__$2.PasswordInputLine,
            placeholder: "Password",
            dropShadow: new __varRecorder__$2.ShadowObject({
              distance: 4,
              color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.26),
              blur: 10
            }),
            master: __varRecorder__$2.InputLineDefault
          }, "button wrapper")]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "PasswordPrompt",
        range: {
          start: 26158,
          end: 26623
        }
      }, __varRecorder__$2.PasswordPrompt);
      __varRecorder__$2.ListPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ConfirmPrompt, {
          defaultViewModel: __varRecorder__$2.ListPromptModel,
          name: "list prompt",
          extent: __varRecorder__$2.pt(441.8, 537.2),
          master: __varRecorder__$2.DarkPrompt,
          submorphs: [{
            name: "promptTitle",
            lineWrapping: "by-words"
          }, __varRecorder__$2.add({
            type: __varRecorder__$2.FilterableList,
            name: "prompt list",
            layout: new __varRecorder__$2.TilingLayout({
              axis: "column",
              orderByIndex: true,
              resizePolicies: [["input", {
                height: "fixed",
                width: "fill"
              }], ["list", {
                height: "fill",
                width: "fill"
              }]],
              spacing: 5
            }),
            borderColor: __varRecorder__$2.Color.rgb(204, 204, 204),
            borderWidth: 0,
            extent: __varRecorder__$2.pt(442, 385),
            selectedAction: "default",
            submorphs: [{
              type: __varRecorder__$2.InputLine,
              name: "input",
              borderRadius: 5,
              dropShadow: new __varRecorder__$2.ShadowObject({
                distance: 3,
                rotation: 75,
                color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.2)
              }),
              extent: __varRecorder__$2.pt(355, 26),
              fill: __varRecorder__$2.Color.rgba(204, 204, 204, 0.8),
              fixedHeight: false,
              fontColor: __varRecorder__$2.Color.rgb(102, 102, 102),
              fontFamily: "\"IBM Plex Sans\"",
              fontSize: 16,
              padding: __varRecorder__$2.rect(10, 2, 0, 0)
            }, {
              type: __varRecorder__$2.List,
              name: "list",
              borderColor: __varRecorder__$2.Color.rgb(149, 165, 166),
              borderRadius: 4,
              styleClasses: ["clipped"],
              dropShadow: new __varRecorder__$2.ShadowObject({
                distance: 3,
                rotation: 75,
                color: __varRecorder__$2.Color.rgba(0, 0, 0, 0.2)
              }),
              extent: __varRecorder__$2.pt(410, 354),
              fill: __varRecorder__$2.Color.rgba(66, 73, 73, 0.85),
              fontFamily: "IBM Plex Mono",
              itemHeight: 16,
              itemPadding: undefined,
              manualItemHeight: true,
              master: false,
              multiSelect: true,
              nonSelectionFontColor: __varRecorder__$2.Color.rgb(204, 204, 204),
              padding: __varRecorder__$2.rect(7, 6, -4, -3),
              position: __varRecorder__$2.pt(0, 31),
              scroll: __varRecorder__$2.pt(2, 0),
              selectedIndex: undefined,
              selectedIndexes: [],
              selectionColor: __varRecorder__$2.Color.rgb(230, 230, 230),
              selectionFontColor: __varRecorder__$2.Color.rgb(0, 0, 0),
              selections: []
            }],
            theme: "dark"
          }, "button wrapper")]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "ListPrompt",
        range: {
          start: 26631,
          end: 28620
        }
      }, __varRecorder__$2.ListPrompt);
      __varRecorder__$2.EditListPrompt = __varRecorder__$2.component["for"](function () {
        return __varRecorder__$2.component(__varRecorder__$2.ListPrompt, {
          defaultViewModel: __varRecorder__$2.EditListPromptModel,
          name: "edit list prompt",
          submorphs: [{
            name: "button wrapper",
            submorphs: [__varRecorder__$2.add(__varRecorder__$2.part(__varRecorder__$2.PlainButton, {
              name: "add item button"
            })), __varRecorder__$2.add(__varRecorder__$2.part(__varRecorder__$2.PlainButton, {
              name: "remove item button",
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__$2.Icon.textAttribute("minus")
              }]
            }))]
          }]
        });
      }, {
        module: "lively.components/prompts.cp.js",
        "export": "EditListPrompt",
        range: {
          start: 28628,
          end: 29042
        }
      }, __varRecorder__$2.EditListPrompt);
      var GreenButton = exports('G', __varRecorder__$2.GreenButton);
      var RedButton = exports('R', __varRecorder__$2.RedButton);
      var GreenButtonClicked = __varRecorder__$2.GreenButtonClicked;
      var RedButtonClicked = __varRecorder__$2.RedButtonClicked;
      var PlainButton = exports('P', __varRecorder__$2.PlainButton);
      var PlainButtonClicked = __varRecorder__$2.PlainButtonClicked;
      var LightPrompt = exports('L', __varRecorder__$2.LightPrompt);
      var DarkPrompt = exports('D', __varRecorder__$2.DarkPrompt);
      var InformPrompt = __varRecorder__$2.InformPrompt;
      var ConfirmPrompt = exports('C', __varRecorder__$2.ConfirmPrompt);
      var ChoiceButtonSelected = __varRecorder__$2.ChoiceButtonSelected;
      var ChoiceButtonUnselected = __varRecorder__$2.ChoiceButtonUnselected;
      var MultipleChoicePrompt = __varRecorder__$2.MultipleChoicePrompt;
      var TextPrompt = __varRecorder__$2.TextPrompt;
      var EditPrompt = __varRecorder__$2.EditPrompt;
      var PasswordPrompt = __varRecorder__$2.PasswordPrompt;
      var ListPrompt = __varRecorder__$2.ListPrompt;
      var EditListPrompt = __varRecorder__$2.EditListPrompt;
      __varRecorder__$2.GreenButton = GreenButton;
      __varRecorder__$2.RedButton = RedButton;
      __varRecorder__$2.GreenButtonClicked = GreenButtonClicked;
      __varRecorder__$2.RedButtonClicked = RedButtonClicked;
      __varRecorder__$2.PlainButton = PlainButton;
      __varRecorder__$2.PlainButtonClicked = PlainButtonClicked;
      __varRecorder__$2.LightPrompt = LightPrompt;
      __varRecorder__$2.DarkPrompt = DarkPrompt;
      __varRecorder__$2.InformPrompt = InformPrompt;
      __varRecorder__$2.ConfirmPrompt = ConfirmPrompt;
      __varRecorder__$2.ChoiceButtonSelected = ChoiceButtonSelected;
      __varRecorder__$2.ChoiceButtonUnselected = ChoiceButtonUnselected;
      __varRecorder__$2.MultipleChoicePrompt = MultipleChoicePrompt;
      __varRecorder__$2.TextPrompt = TextPrompt;
      __varRecorder__$2.EditPrompt = EditPrompt;
      __varRecorder__$2.PasswordPrompt = PasswordPrompt;
      __varRecorder__$2.ListPrompt = ListPrompt;
      __varRecorder__$2.EditListPrompt = EditListPrompt;

      var prompts = /*#__PURE__*/Object.freeze({
        __proto__: null,
        AbstractPromptModel: AbstractPromptModel,
        InformPromptModel: InformPromptModel,
        ConfirmPromptModel: ConfirmPromptModel,
        MultipleChoicePromptModel: MultipleChoicePromptModel,
        TextPromptModel: TextPromptModel,
        EditPromptModel: EditPromptModel,
        PasswordPromptModel: PasswordPromptModel,
        ListPromptModel: ListPromptModel,
        EditListPromptModel: EditListPromptModel,
        OKCancelButtonWrapper: OKCancelButtonWrapper,
        GreenButton: GreenButton,
        RedButton: RedButton,
        GreenButtonClicked: GreenButtonClicked,
        RedButtonClicked: RedButtonClicked,
        PlainButton: PlainButton,
        PlainButtonClicked: PlainButtonClicked,
        LightPrompt: LightPrompt,
        DarkPrompt: DarkPrompt,
        InformPrompt: InformPrompt,
        ConfirmPrompt: ConfirmPrompt,
        ChoiceButtonSelected: ChoiceButtonSelected,
        ChoiceButtonUnselected: ChoiceButtonUnselected,
        MultipleChoicePrompt: MultipleChoicePrompt,
        TextPrompt: TextPrompt,
        EditPrompt: EditPrompt,
        PasswordPrompt: PasswordPrompt,
        ListPrompt: ListPrompt,
        EditListPrompt: EditListPrompt
      });
      exports('p', prompts);

      var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

      var exports$1 = {};

      (function (global, factory) {
        factory(exports$1);
      })(exports$1, function (exports) {

        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
              return typeof obj;
            };
          } else {
            _typeof = function (obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
          }

          return _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }

        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }

        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
        }

        function _iterableToArrayLimit(arr, i) {
          if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;

          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

          return arr2;
        }

        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        function _createForOfIteratorHelper(o) {
          if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
              var i = 0;

              var F = function () {};

              return {
                s: F,
                n: function () {
                  if (i >= o.length) return {
                    done: true
                  };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function (e) {
                  throw e;
                },
                f: F
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var it,
              normalCompletion = true,
              didErr = false,
              err;
          return {
            s: function () {
              it = o[Symbol.iterator]();
            },
            n: function () {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function (e) {
              didErr = true;
              err = e;
            },
            f: function () {
              try {
                if (!normalCompletion && it.return != null) it.return();
              } finally {
                if (didErr) throw err;
              }
            }
          };
        }
        /**
         *  Point2D.js
         *  @module Point2D
         *  @copyright 2001-2019 Kevin Lindsey
         */

        /**
         *  Point2D
         *
         *  @memberof module:kld-affine
         */


        var Point2D = /*#__PURE__*/function () {
          /**
           *  Point2D
           *
           *  @param {number} x
           *  @param {number} y
           *  @returns {module:kld-affine.Point2D}
           */
          function Point2D() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this || _global, Point2D);

            (this || _global).x = x;
            (this || _global).y = y;
          }
          /**
           *  clone
           *
           *  @returns {module:kld-affine.Point2D}
           */


          _createClass(Point2D, [{
            key: "clone",
            value: function clone() {
              return new (this || _global).constructor((this || _global).x, (this || _global).y);
            }
            /**
             *  add
             *
             *  @param {module:kld-affine.Point2D} that
             *  @returns {module:kld-affine.Point2D}
             */

          }, {
            key: "add",
            value: function add(that) {
              return new (this || _global).constructor((this || _global).x + that.x, (this || _global).y + that.y);
            }
            /**
             *  subtract
             *
             *  @param {module:kld-affine.Point2D} that
             *  @returns {module:kld-affine.Point2D}
             */

          }, {
            key: "subtract",
            value: function subtract(that) {
              return new (this || _global).constructor((this || _global).x - that.x, (this || _global).y - that.y);
            }
            /**
             *  multiply
             *
             *  @param {number} scalar
             *  @returns {module:kld-affine.Point2D}
             */

          }, {
            key: "multiply",
            value: function multiply(scalar) {
              return new (this || _global).constructor((this || _global).x * scalar, (this || _global).y * scalar);
            }
            /**
             *  divide
             *
             *  @param {number} scalar
             *  @returns {module:kld-affine.Point2D}
             */

          }, {
            key: "divide",
            value: function divide(scalar) {
              return new (this || _global).constructor((this || _global).x / scalar, (this || _global).y / scalar);
            }
            /**
             *  equals
             *
             *  @param {module:kld-affine.Point2D} that
             *  @returns {boolean}
             */

          }, {
            key: "equals",
            value: function equals(that) {
              return (this || _global).x === that.x && (this || _global).y === that.y;
            }
            /**
             *  precisionEquals
             *
             *  @param {module:kld-affine.Point2D} that
             *  @param {number} precision
             *  @returns {boolean}
             */

          }, {
            key: "precisionEquals",
            value: function precisionEquals(that, precision) {
              return Math.abs((this || _global).x - that.x) < precision && Math.abs((this || _global).y - that.y) < precision;
            } // utility methods

            /**
             *  lerp
             *
             *  @param {module:kld-affine.Point2D} that
             *  @param {number} t
             *  @returns {module:kld-affine.Point2D}
             */

          }, {
            key: "lerp",
            value: function lerp(that, t) {
              var omt = 1 - t;
              return new (this || _global).constructor((this || _global).x * omt + that.x * t, (this || _global).y * omt + that.y * t);
            }
            /**
             *  distanceFrom
             *
             *  @param {module:kld-affine.Point2D} that
             *  @returns {number}
             */

          }, {
            key: "distanceFrom",
            value: function distanceFrom(that) {
              var dx = (this || _global).x - that.x;
              var dy = (this || _global).y - that.y;
              return Math.sqrt(dx * dx + dy * dy);
            }
            /**
             *  min
             *
             *  @param {module:kld-affine.Point2D} that
             *  @returns {number}
             */

          }, {
            key: "min",
            value: function min(that) {
              return new (this || _global).constructor(Math.min((this || _global).x, that.x), Math.min((this || _global).y, that.y));
            }
            /**
             *  max
             *
             *  @param {module:kld-affine.Point2D} that
             *  @returns {number}
             */

          }, {
            key: "max",
            value: function max(that) {
              return new (this || _global).constructor(Math.max((this || _global).x, that.x), Math.max((this || _global).y, that.y));
            }
            /**
             *  transform
             *
             *  @param {module:kld-affine.Matrix2D} matrix
             *  @returns {module:kld-affine.Point2D}
             */

          }, {
            key: "transform",
            value: function transform(matrix) {
              return new (this || _global).constructor(matrix.a * (this || _global).x + matrix.c * (this || _global).y + matrix.e, matrix.b * (this || _global).x + matrix.d * (this || _global).y + matrix.f);
            }
            /**
             *  toString
             *
             *  @returns {string}
             */

          }, {
            key: "toString",
            value: function toString() {
              return "point(".concat((this || _global).x, ",").concat((this || _global).y, ")");
            }
          }]);

          return Point2D;
        }();
        /**
         *  Vector2D.js
         *  @module Vector2D
         *  @copyright 2001-2019 Kevin Lindsey
         */

        /**
         *  Vector2D
         *
         *  @memberof module:kld-affine
         */


        var Vector2D = /*#__PURE__*/function () {
          /**
           *  Vector2D
           *
           *  @param {number} x
           *  @param {number} y
           *  @returns {module:kld-affine.Vector2D}
           */
          function Vector2D() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this || _global, Vector2D);

            (this || _global).x = x;
            (this || _global).y = y;
          }
          /**
           *  fromPoints
           *
           *  @param {module:kld-affine.Point2D} p1
           *  @param {module:kld-affine.Point2D} p2
           *  @returns {module:kld-affine.Vector2D}
           */


          _createClass(Vector2D, [{
            key: "length",

            /**
             *  length
             *
             *  @returns {number}
             */
            value: function length() {
              return Math.sqrt((this || _global).x * (this || _global).x + (this || _global).y * (this || _global).y);
            }
            /**
             *  magnitude
             *
             *  @returns {number}
             */

          }, {
            key: "magnitude",
            value: function magnitude() {
              return (this || _global).x * (this || _global).x + (this || _global).y * (this || _global).y;
            }
            /**
             *  dot
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {number}
             */

          }, {
            key: "dot",
            value: function dot(that) {
              return (this || _global).x * that.x + (this || _global).y * that.y;
            }
            /**
             *  cross
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {number}
             */

          }, {
            key: "cross",
            value: function cross(that) {
              return (this || _global).x * that.y - (this || _global).y * that.x;
            }
            /**
             *  determinant
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {number}
             */

          }, {
            key: "determinant",
            value: function determinant(that) {
              return (this || _global).x * that.y - (this || _global).y * that.x;
            }
            /**
             *  unit
             *
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "unit",
            value: function unit() {
              return this.divide(this.length());
            }
            /**
             *  add
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "add",
            value: function add(that) {
              return new (this || _global).constructor((this || _global).x + that.x, (this || _global).y + that.y);
            }
            /**
             *  subtract
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "subtract",
            value: function subtract(that) {
              return new (this || _global).constructor((this || _global).x - that.x, (this || _global).y - that.y);
            }
            /**
             *  multiply
             *
             *  @param {number} scalar
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "multiply",
            value: function multiply(scalar) {
              return new (this || _global).constructor((this || _global).x * scalar, (this || _global).y * scalar);
            }
            /**
             *  divide
             *
             *  @param {number} scalar
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "divide",
            value: function divide(scalar) {
              return new (this || _global).constructor((this || _global).x / scalar, (this || _global).y / scalar);
            }
            /**
             *  angleBetween
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {number}
             */

          }, {
            key: "angleBetween",
            value: function angleBetween(that) {
              var cos = this.dot(that) / (this.length() * that.length());
              cos = Math.max(-1, Math.min(cos, 1));
              var radians = Math.acos(cos);
              return this.cross(that) < 0 ? -radians : radians;
            }
            /**
             *  Find a vector is that is perpendicular to this vector
             *
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "perp",
            value: function perp() {
              return new (this || _global).constructor(-(this || _global).y, (this || _global).x);
            }
            /**
             *  Find the component of the specified vector that is perpendicular to
             *  this vector
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "perpendicular",
            value: function perpendicular(that) {
              return this.subtract(this.project(that));
            }
            /**
             *  project
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "project",
            value: function project(that) {
              var percent = this.dot(that) / that.dot(that);
              return that.multiply(percent);
            }
            /**
             *  transform
             *
             *  @param {module:kld-affine.Matrix2D} matrix
             *  @returns {module:kld-affine.Vector2D}
             */

          }, {
            key: "transform",
            value: function transform(matrix) {
              return new (this || _global).constructor(matrix.a * (this || _global).x + matrix.c * (this || _global).y, matrix.b * (this || _global).x + matrix.d * (this || _global).y);
            }
            /**
             *  equals
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @returns {boolean}
             */

          }, {
            key: "equals",
            value: function equals(that) {
              return (this || _global).x === that.x && (this || _global).y === that.y;
            }
            /**
             *  precisionEquals
             *
             *  @param {module:kld-affine.Vector2D} that
             *  @param {number} precision
             *  @returns {boolean}
             */

          }, {
            key: "precisionEquals",
            value: function precisionEquals(that, precision) {
              return Math.abs((this || _global).x - that.x) < precision && Math.abs((this || _global).y - that.y) < precision;
            }
            /**
             *  toString
             *
             *  @returns {string}
             */

          }, {
            key: "toString",
            value: function toString() {
              return "vector(".concat((this || _global).x, ",").concat((this || _global).y, ")");
            }
          }], [{
            key: "fromPoints",
            value: function fromPoints(p1, p2) {
              return new Vector2D(p2.x - p1.x, p2.y - p1.y);
            }
          }]);

          return Vector2D;
        }();
        /**
         *  Matrix2D.js
         *  @module Matrix2D
         *  @copyright 2001-2019 Kevin Lindsey
         */

        /**
         *  Matrix2D
         *
         *  @memberof module:kld-affine
         */


        var Matrix2D = /*#__PURE__*/function () {
          /**
           *  A 2D Matrix of the form:<br>
           *  [a c e]<br>
           *  [b d f]<br>
           *  [0 0 1]<br>
           *
           *  @param {number} a
           *  @param {number} b
           *  @param {number} c
           *  @param {number} d
           *  @param {number} e
           *  @param {number} f
           *  @returns {module:kld-affine.Matrix2D}
           */
          function Matrix2D() {
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

            _classCallCheck(this || _global, Matrix2D);

            (this || _global).a = a;
            (this || _global).b = b;
            (this || _global).c = c;
            (this || _global).d = d;
            (this || _global).e = e;
            (this || _global).f = f;
          }
          /**
           *  translation
           *
           *  @param {number} tx
           *  @param {number} ty
           *  @returns {module:kld-affine.Matrix2D}
           */


          _createClass(Matrix2D, [{
            key: "multiply",

            /**
             *  multiply
             *
             *  @param {module:kld-affine.Matrix2D} that
             *  @returns {module:kld-affine.Matrix2D}
             */
            value: function multiply(that) {
              if (this.isIdentity()) {
                return that;
              }

              if (that.isIdentity()) {
                return this || _global;
              }

              return new (this || _global).constructor((this || _global).a * that.a + (this || _global).c * that.b, (this || _global).b * that.a + (this || _global).d * that.b, (this || _global).a * that.c + (this || _global).c * that.d, (this || _global).b * that.c + (this || _global).d * that.d, (this || _global).a * that.e + (this || _global).c * that.f + (this || _global).e, (this || _global).b * that.e + (this || _global).d * that.f + (this || _global).f);
            }
            /**
             *  inverse
             *
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "inverse",
            value: function inverse() {
              if (this.isIdentity()) {
                return this || _global;
              }

              var det1 = (this || _global).a * (this || _global).d - (this || _global).b * (this || _global).c;

              if (det1 === 0) {
                throw new Error("Matrix is not invertible");
              }

              var idet = 1 / det1;
              var det2 = (this || _global).f * (this || _global).c - (this || _global).e * (this || _global).d;
              var det3 = (this || _global).e * (this || _global).b - (this || _global).f * (this || _global).a;
              return new (this || _global).constructor((this || _global).d * idet, -(this || _global).b * idet, -(this || _global).c * idet, (this || _global).a * idet, det2 * idet, det3 * idet);
            }
            /**
             *  translate
             *
             *  @param {number} tx
             *  @param {number} ty
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "translate",
            value: function translate(tx, ty) {
              return new (this || _global).constructor((this || _global).a, (this || _global).b, (this || _global).c, (this || _global).d, (this || _global).a * tx + (this || _global).c * ty + (this || _global).e, (this || _global).b * tx + (this || _global).d * ty + (this || _global).f);
            }
            /**
             *  scale
             *
             *  @param {number} scale
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "scale",
            value: function scale(_scale) {
              return new (this || _global).constructor((this || _global).a * _scale, (this || _global).b * _scale, (this || _global).c * _scale, (this || _global).d * _scale, (this || _global).e, (this || _global).f);
            }
            /**
             *  scaleAt
             *
             *  @param {number} scale
             *  @param {module:kld-affine.Point2D} center
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "scaleAt",
            value: function scaleAt(scale, center) {
              var dx = center.x - scale * center.x;
              var dy = center.y - scale * center.y;
              return new (this || _global).constructor((this || _global).a * scale, (this || _global).b * scale, (this || _global).c * scale, (this || _global).d * scale, (this || _global).a * dx + (this || _global).c * dy + (this || _global).e, (this || _global).b * dx + (this || _global).d * dy + (this || _global).f);
            }
            /**
             *  scaleNonUniform
             *
             *  @param {number} scaleX
             *  @param {number} scaleY
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "scaleNonUniform",
            value: function scaleNonUniform(scaleX, scaleY) {
              return new (this || _global).constructor((this || _global).a * scaleX, (this || _global).b * scaleX, (this || _global).c * scaleY, (this || _global).d * scaleY, (this || _global).e, (this || _global).f);
            }
            /**
             *  scaleNonUniformAt
             *
             *  @param {number} scaleX
             *  @param {number} scaleY
             *  @param {module:kld-affine.Point2D} center
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "scaleNonUniformAt",
            value: function scaleNonUniformAt(scaleX, scaleY, center) {
              var dx = center.x - scaleX * center.x;
              var dy = center.y - scaleY * center.y;
              return new (this || _global).constructor((this || _global).a * scaleX, (this || _global).b * scaleX, (this || _global).c * scaleY, (this || _global).d * scaleY, (this || _global).a * dx + (this || _global).c * dy + (this || _global).e, (this || _global).b * dx + (this || _global).d * dy + (this || _global).f);
            }
            /**
             *  rotate
             *
             *  @param {number} radians
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "rotate",
            value: function rotate(radians) {
              var c = Math.cos(radians);
              var s = Math.sin(radians);
              return new (this || _global).constructor((this || _global).a * c + (this || _global).c * s, (this || _global).b * c + (this || _global).d * s, (this || _global).a * -s + (this || _global).c * c, (this || _global).b * -s + (this || _global).d * c, (this || _global).e, (this || _global).f);
            }
            /**
             *  rotateAt
             *
             *  @param {number} radians
             *  @param {module:kld-affine.Point2D} center
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "rotateAt",
            value: function rotateAt(radians, center) {
              var cos = Math.cos(radians);
              var sin = Math.sin(radians);
              var cx = center.x;
              var cy = center.y;
              var a = (this || _global).a * cos + (this || _global).c * sin;
              var b = (this || _global).b * cos + (this || _global).d * sin;
              var c = (this || _global).c * cos - (this || _global).a * sin;
              var d = (this || _global).d * cos - (this || _global).b * sin;
              return new (this || _global).constructor(a, b, c, d, ((this || _global).a - a) * cx + ((this || _global).c - c) * cy + (this || _global).e, ((this || _global).b - b) * cx + ((this || _global).d - d) * cy + (this || _global).f);
            }
            /**
             *  rotateFromVector
             *
             *  @param {module:kld-affine.Vector2D} vector
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "rotateFromVector",
            value: function rotateFromVector(vector) {
              var unit = vector.unit();
              var c = unit.x; // cos

              var s = unit.y; // sin

              return new (this || _global).constructor((this || _global).a * c + (this || _global).c * s, (this || _global).b * c + (this || _global).d * s, (this || _global).a * -s + (this || _global).c * c, (this || _global).b * -s + (this || _global).d * c, (this || _global).e, (this || _global).f);
            }
            /**
             *  flipX
             *
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "flipX",
            value: function flipX() {
              return new (this || _global).constructor(-(this || _global).a, -(this || _global).b, (this || _global).c, (this || _global).d, (this || _global).e, (this || _global).f);
            }
            /**
             *  flipY
             *
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "flipY",
            value: function flipY() {
              return new (this || _global).constructor((this || _global).a, (this || _global).b, -(this || _global).c, -(this || _global).d, (this || _global).e, (this || _global).f);
            }
            /**
             *  skewX
             *
             *  @param {number} radians
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "skewX",
            value: function skewX(radians) {
              var t = Math.tan(radians);
              return new (this || _global).constructor((this || _global).a, (this || _global).b, (this || _global).c + (this || _global).a * t, (this || _global).d + (this || _global).b * t, (this || _global).e, (this || _global).f);
            } // TODO: skewXAt

            /**
             *  skewY
             *
             *  @param {number} radians
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "skewY",
            value: function skewY(radians) {
              var t = Math.tan(radians);
              return new (this || _global).constructor((this || _global).a + (this || _global).c * t, (this || _global).b + (this || _global).d * t, (this || _global).c, (this || _global).d, (this || _global).e, (this || _global).f);
            } // TODO: skewYAt

            /**
             *  isIdentity
             *
             *  @returns {boolean}
             */

          }, {
            key: "isIdentity",
            value: function isIdentity() {
              return (this || _global).a === 1 && (this || _global).b === 0 && (this || _global).c === 0 && (this || _global).d === 1 && (this || _global).e === 0 && (this || _global).f === 0;
            }
            /**
             *  isInvertible
             *
             *  @returns {boolean}
             */

          }, {
            key: "isInvertible",
            value: function isInvertible() {
              return (this || _global).a * (this || _global).d - (this || _global).b * (this || _global).c !== 0;
            }
            /**
             *  getScale
             *
             *  @returns {{ scaleX: number, scaleY: number }}
             */

          }, {
            key: "getScale",
            value: function getScale() {
              return {
                scaleX: Math.sqrt((this || _global).a * (this || _global).a + (this || _global).c * (this || _global).c),
                scaleY: Math.sqrt((this || _global).b * (this || _global).b + (this || _global).d * (this || _global).d)
              };
            }
            /**
             *  Calculates matrix Singular Value Decomposition
             *
             *  The resulting matrices — translation, rotation, scale, and rotation0 — return
             *  this matrix when they are multiplied together in the listed order
             *
             *  @see Jim Blinn's article {@link http://dx.doi.org/10.1109/38.486688}
             *  @see {@link http://math.stackexchange.com/questions/861674/decompose-a-2d-arbitrary-transform-into-only-scaling-and-rotation}
             *
             *  @returns {{
             *    translation: module:kld-affine.Matrix2D,
             *    rotation: module:kld-affine.Matrix2D,
             *    scale: module:kld-affine.Matrix2D,
             *    rotation0: module:kld-affine.Matrix2D
             *  }}
             */

          }, {
            key: "getDecomposition",
            value: function getDecomposition() {
              var E = ((this || _global).a + (this || _global).d) * 0.5;
              var F = ((this || _global).a - (this || _global).d) * 0.5;
              var G = ((this || _global).b + (this || _global).c) * 0.5;
              var H = ((this || _global).b - (this || _global).c) * 0.5;
              var Q = Math.sqrt(E * E + H * H);
              var R = Math.sqrt(F * F + G * G);
              var scaleX = Q + R;
              var scaleY = Q - R;
              var a1 = Math.atan2(G, F);
              var a2 = Math.atan2(H, E);
              var theta = (a2 - a1) * 0.5;
              var phi = (a2 + a1) * 0.5;
              return {
                translation: (this || _global).constructor.translation((this || _global).e, (this || _global).f),
                rotation: (this || _global).constructor.rotation(phi),
                scale: (this || _global).constructor.nonUniformScaling(scaleX, scaleY),
                rotation0: (this || _global).constructor.rotation(theta)
              };
            }
            /**
             *  equals
             *
             *  @param {module:kld-affine.Matrix2D} that
             *  @returns {boolean}
             */

          }, {
            key: "equals",
            value: function equals(that) {
              return (this || _global).a === that.a && (this || _global).b === that.b && (this || _global).c === that.c && (this || _global).d === that.d && (this || _global).e === that.e && (this || _global).f === that.f;
            }
            /**
             *  precisionEquals
             *
             *  @param {module:kld-affine.Matrix2D} that
             *  @param {number} precision
             *  @returns {boolean}
             */

          }, {
            key: "precisionEquals",
            value: function precisionEquals(that, precision) {
              return Math.abs((this || _global).a - that.a) < precision && Math.abs((this || _global).b - that.b) < precision && Math.abs((this || _global).c - that.c) < precision && Math.abs((this || _global).d - that.d) < precision && Math.abs((this || _global).e - that.e) < precision && Math.abs((this || _global).f - that.f) < precision;
            }
            /**
             *  toString
             *
             *  @returns {string}
             */

          }, {
            key: "toString",
            value: function toString() {
              return "matrix(".concat((this || _global).a, ",").concat((this || _global).b, ",").concat((this || _global).c, ",").concat((this || _global).d, ",").concat((this || _global).e, ",").concat((this || _global).f, ")");
            }
          }], [{
            key: "translation",
            value: function translation(tx, ty) {
              return new Matrix2D(1, 0, 0, 1, tx, ty);
            }
            /**
             *  scaling
             *
             *  @param {number} scale
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "scaling",
            value: function scaling(scale) {
              return new Matrix2D(scale, 0, 0, scale, 0, 0);
            }
            /**
             *  scalingAt
             *
             *  @param {number} scale
             *  @param {module:kld-affine.Point2D} center
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "scalingAt",
            value: function scalingAt(scale, center) {
              return new Matrix2D(scale, 0, 0, scale, center.x - center.x * scale, center.y - center.y * scale);
            }
            /**
             *  nonUniformScaling
             *
             *  @param {number} scaleX
             *  @param {number} scaleY
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "nonUniformScaling",
            value: function nonUniformScaling(scaleX, scaleY) {
              return new Matrix2D(scaleX, 0, 0, scaleY, 0, 0);
            }
            /**
             *  nonUniformScalingAt
             *
             *  @param {number} scaleX
             *  @param {number} scaleY
             *  @param {module:kld-affine.Point2D} center
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "nonUniformScalingAt",
            value: function nonUniformScalingAt(scaleX, scaleY, center) {
              return new Matrix2D(scaleX, 0, 0, scaleY, center.x - center.x * scaleX, center.y - center.y * scaleY);
            }
            /**
             *  rotation
             *
             *  @param {number} radians
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "rotation",
            value: function rotation(radians) {
              var c = Math.cos(radians);
              var s = Math.sin(radians);
              return new Matrix2D(c, s, -s, c, 0, 0);
            }
            /**
             *  rotationAt
             *
             *  @param {number} radians
             *  @param {module:kld-affine.Point2D} center
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "rotationAt",
            value: function rotationAt(radians, center) {
              var c = Math.cos(radians);
              var s = Math.sin(radians);
              return new Matrix2D(c, s, -s, c, center.x - center.x * c + center.y * s, center.y - center.y * c - center.x * s);
            }
            /**
             *  rotationFromVector
             *
             *  @param {module:kld-affine.Vector2D} vector
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "rotationFromVector",
            value: function rotationFromVector(vector) {
              var unit = vector.unit();
              var c = unit.x; // cos

              var s = unit.y; // sin

              return new Matrix2D(c, s, -s, c, 0, 0);
            }
            /**
             *  xFlip
             *
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "xFlip",
            value: function xFlip() {
              return new Matrix2D(-1, 0, 0, 1, 0, 0);
            }
            /**
             *  yFlip
             *
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "yFlip",
            value: function yFlip() {
              return new Matrix2D(1, 0, 0, -1, 0, 0);
            }
            /**
             *  xSkew
             *
             *  @param {number} radians
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "xSkew",
            value: function xSkew(radians) {
              var t = Math.tan(radians);
              return new Matrix2D(1, 0, t, 1, 0, 0);
            }
            /**
             *  ySkew
             *
             *  @param {number} radians
             *  @returns {module:kld-affine.Matrix2D}
             */

          }, {
            key: "ySkew",
            value: function ySkew(radians) {
              var t = Math.tan(radians);
              return new Matrix2D(1, t, 0, 1, 0, 0);
            }
          }]);

          return Matrix2D;
        }();
        /**
         *  Identity matrix
         *
         *  @returns {module:kld-affine.Matrix2D}
         */


        Matrix2D.IDENTITY = new Matrix2D();

        Matrix2D.IDENTITY.isIdentity = function () {
          return true;
        };
        /* eslint-disable camelcase */

        /**
         *  Polynomial.js
         *
         *  @module Polynomial
         *  @copyright 2002-2019 Kevin Lindsey<br>
         *  -<br>
         *  Contribution {@link http://github.com/Quazistax/kld-polynomial}<br>
         *  copyright 2015 Robert Benko (Quazistax) <quazistax@gmail.com><br>
         *  MIT license
         */

        /**
         *  Sign of a number (+1, -1, +0, -0).
         *
         *  @param {number} x
         *  @returns {number}
         */


        function sign(x) {
          // eslint-disable-next-line no-self-compare
          return typeof x === "number" ? x ? x < 0 ? -1 : 1 : x === x ? x : NaN : NaN;
        }
        /**
         *  Polynomial
         *
         *  @memberof module:kld-polynomial
         */


        var Polynomial = /*#__PURE__*/function () {
          /**
           *  Polynomial
           *
           *  @param {Array<number>} coefs
           *  @returns {module:kld-polynomial.Polynomial}
           */
          function Polynomial() {
            _classCallCheck(this || _global, Polynomial);

            (this || _global).coefs = [];

            for (var i = arguments.length - 1; i >= 0; i--) {
              (this || _global).coefs.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
            }

            (this || _global)._variable = "t";
            (this || _global)._s = 0;
          }
          /**
           *  Based on polint in "Numerical Recipes in C, 2nd Edition", pages 109-110
           *
           *  @param {Array<number>} xs
           *  @param {Array<number>} ys
           *  @param {number} n
           *  @param {number} offset
           *  @param {number} x
           *
           *  @returns {{y: number, dy: number}}
           */


          _createClass(Polynomial, [{
            key: "clone",

            /**
             *  Clones this polynomial and return the clone.
             *
             *  @returns {module:kld-polynomial.Polynomial}
             */
            value: function clone() {
              var poly = new Polynomial();
              poly.coefs = (this || _global).coefs.slice();
              return poly;
            }
            /**
             *  eval
             *
             *  @param {number} x
             */

          }, {
            key: "eval",
            value: function _eval(x) {
              if (isNaN(x)) {
                throw new TypeError("Parameter must be a number. Found '".concat(x, "'"));
              }

              var result = 0;

              for (var i = (this || _global).coefs.length - 1; i >= 0; i--) {
                result = result * x + (this || _global).coefs[i];
              }

              return result;
            }
            /**
             *  add
             *
             *  @param {module:kld-polynomial.Polynomial} that
             *  @returns {module:kld-polynomial.Polynomial}
             */

          }, {
            key: "add",
            value: function add(that) {
              var result = new Polynomial();
              var d1 = this.getDegree();
              var d2 = that.getDegree();
              var dmax = Math.max(d1, d2);

              for (var i = 0; i <= dmax; i++) {
                var v1 = i <= d1 ? (this || _global).coefs[i] : 0;
                var v2 = i <= d2 ? that.coefs[i] : 0;
                result.coefs[i] = v1 + v2;
              }

              return result;
            }
            /**
             *  multiply
             *
             *  @param {module:kld-polynomial.Polynomial} that
             *  @returns {module:kld-polynomial.Polynomial}
             */

          }, {
            key: "multiply",
            value: function multiply(that) {
              var result = new Polynomial();

              for (var i = 0; i <= this.getDegree() + that.getDegree(); i++) {
                result.coefs.push(0);
              }

              for (var _i = 0; _i <= this.getDegree(); _i++) {
                for (var j = 0; j <= that.getDegree(); j++) {
                  result.coefs[_i + j] += (this || _global).coefs[_i] * that.coefs[j];
                }
              }

              return result;
            }
            /**
             *  divideEqualsScalar
             *
             *  @deprecated To be replaced by divideScalar
             *  @param {number} scalar
             */

          }, {
            key: "divideEqualsScalar",
            value: function divideEqualsScalar(scalar) {
              for (var i = 0; i < (this || _global).coefs.length; i++) {
                (this || _global).coefs[i] /= scalar;
              }
            }
            /**
             *  simplifyEquals
             *
             *  @deprecated To be replaced by simplify
             *  @param {number} TOLERANCE
             */

          }, {
            key: "simplifyEquals",
            value: function simplifyEquals() {
              var TOLERANCE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e-12;

              for (var i = this.getDegree(); i >= 0; i--) {
                if (Math.abs((this || _global).coefs[i]) <= TOLERANCE) {
                  (this || _global).coefs.pop();
                } else {
                  break;
                }
              }
            }
            /**
             *  Sets small coefficients to zero.
             *
             *  @deprecated To be replaced by removeZeros
             *  @param {number} TOLERANCE
             *  @returns {module:kld-polynomial.Polynomial}
             */

          }, {
            key: "removeZerosEquals",
            value: function removeZerosEquals() {
              var TOLERANCE = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1e-15;
              var c = (this || _global).coefs;
              var err = 10 * TOLERANCE * Math.abs(c.reduce(function (pv, cv) {
                return Math.abs(cv) > Math.abs(pv) ? cv : pv;
              }));

              for (var i = 0; i < c.length - 1; i++) {
                if (Math.abs(c[i]) < err) {
                  c[i] = 0;
                }
              }

              return this || _global;
            }
            /**
             *  Scales polynomial so that leading coefficient becomes 1.
             *
             *  @deprecated To be replaced by getMonic
             *  @returns {module:kld-polynomial.Polynomial}
             */

          }, {
            key: "monicEquals",
            value: function monicEquals() {
              var c = (this || _global).coefs;

              if (c[c.length - 1] !== 1) {
                this.divideEqualsScalar(c[c.length - 1]);
              }

              return this || _global;
            }
            /**
             *  toString
             *
             *  @returns {string}
             */

          }, {
            key: "toString",
            value: function toString() {
              var coefs = [];
              var signs = [];

              for (var i = (this || _global).coefs.length - 1; i >= 0; i--) {
                var value = Math.round((this || _global).coefs[i] * 1000) / 1000;

                if (value !== 0) {
                  var signString = value < 0 ? " - " : " + ";
                  value = Math.abs(value);

                  if (i > 0) {
                    if (value === 1) {
                      value = (this || _global)._variable;
                    } else {
                      value += (this || _global)._variable;
                    }
                  }

                  if (i > 1) {
                    value += "^" + i;
                  }

                  signs.push(signString);
                  coefs.push(value);
                }
              }

              signs[0] = signs[0] === " + " ? "" : "-";
              var result = "";

              for (var _i2 = 0; _i2 < coefs.length; _i2++) {
                result += signs[_i2] + coefs[_i2];
              }

              return result;
            }
            /**
             *  bisection
             *
             *  @param {number} min
             *  @param {number} max
             *  @param {number} [TOLERANCE]
             *  @param {number} [ACCURACY]
             *  @returns {number}
             */

          }, {
            key: "bisection",
            value: function bisection(min, max) {
              var TOLERANCE = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.000001;
              var ACCURACY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 15;
              var minValue = this.eval(min);
              var maxValue = this.eval(max);
              var result;

              if (Math.abs(minValue) <= TOLERANCE) {
                result = min;
              } else if (Math.abs(maxValue) <= TOLERANCE) {
                result = max;
              } else if (minValue * maxValue <= 0) {
                var tmp1 = Math.log(max - min);
                var tmp2 = Math.LN10 * ACCURACY;
                var maxIterations = Math.ceil((tmp1 + tmp2) / Math.LN2);

                for (var i = 0; i < maxIterations; i++) {
                  result = 0.5 * (min + max);
                  var value = this.eval(result);

                  if (Math.abs(value) <= TOLERANCE) {
                    break;
                  }

                  if (value * minValue < 0) {
                    max = result;
                    maxValue = value;
                  } else {
                    min = result;
                    minValue = value;
                  }
                }
              }

              return result;
            }
            /**
             *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 137
             *
             *  @param {number} min
             *  @param {number} max
             *  @param {number} n
             *  @returns {number}
             */

          }, {
            key: "trapezoid",
            value: function trapezoid(min, max, n) {
              if (isNaN(min) || isNaN(max) || isNaN(n)) {
                throw new TypeError("Parameters must be numbers");
              }

              var range = max - min;

              if (n === 1) {
                var minValue = this.eval(min);
                var maxValue = this.eval(max);
                (this || _global)._s = 0.5 * range * (minValue + maxValue);
              } else {
                var iter = 1 << n - 2;
                var delta = range / iter;
                var x = min + 0.5 * delta;
                var sum = 0;

                for (var i = 0; i < iter; i++) {
                  sum += this.eval(x);
                  x += delta;
                }

                (this || _global)._s = 0.5 * ((this || _global)._s + range * sum / iter);
              }

              if (isNaN((this || _global)._s)) {
                throw new TypeError("this._s is NaN");
              }

              return (this || _global)._s;
            }
            /**
             *  Based on trapzd in "Numerical Recipes in C, 2nd Edition", page 139
             *
             *  @param {number} min
             *  @param {number} max
             *  @returns {number}
             */

          }, {
            key: "simpson",
            value: function simpson(min, max) {
              if (isNaN(min) || isNaN(max)) {
                throw new TypeError("Parameters must be numbers");
              }

              var range = max - min;
              var st = 0.5 * range * (this.eval(min) + this.eval(max));
              var t = st;
              var s = 4 * st / 3;
              var os = s;
              var ost = st;
              var TOLERANCE = 1e-7;
              var iter = 1;

              for (var n = 2; n <= 20; n++) {
                var delta = range / iter;
                var x = min + 0.5 * delta;
                var sum = 0;

                for (var i = 1; i <= iter; i++) {
                  sum += this.eval(x);
                  x += delta;
                }

                t = 0.5 * (t + range * sum / iter);
                st = t;
                s = (4 * st - ost) / 3;

                if (Math.abs(s - os) < TOLERANCE * Math.abs(os)) {
                  break;
                }

                os = s;
                ost = st;
                iter <<= 1;
              }

              return s;
            }
            /**
             *  romberg
             *
             *  @param {number} min
             *  @param {number} max
             *  @returns {number}
             */

          }, {
            key: "romberg",
            value: function romberg(min, max) {
              if (isNaN(min) || isNaN(max)) {
                throw new TypeError("Parameters must be numbers");
              }

              var MAX = 20;
              var K = 3;
              var TOLERANCE = 0.000001;
              var s = new Array(MAX + 1);
              var h = new Array(MAX + 1);
              var result = {
                y: 0,
                dy: 0
              };
              h[0] = 1;

              for (var j = 1; j <= MAX; j++) {
                s[j - 1] = this.trapezoid(min, max, j);

                if (j >= K) {
                  result = Polynomial.interpolate(h, s, K, j - K, 0);

                  if (Math.abs(result.dy) <= TOLERANCE * result.y) {
                    break;
                  }
                }

                s[j] = s[j - 1];
                h[j] = 0.25 * h[j - 1];
              }

              return result.y;
            }
            /**
             *  Estimate what is the maximum polynomial evaluation error value under which polynomial evaluation could be in fact 0.
             *
             *  @param {number} maxAbsX
             *  @returns {number}
             */

          }, {
            key: "zeroErrorEstimate",
            value: function zeroErrorEstimate(maxAbsX) {
              var poly = this || _global;
              var ERRF = 1e-15;

              if (typeof maxAbsX === "undefined") {
                var rb = poly.bounds();
                maxAbsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
              }

              if (maxAbsX < 0.001) {
                return 2 * Math.abs(poly.eval(ERRF));
              }

              var n = poly.coefs.length - 1;
              var an = poly.coefs[n];
              return 10 * ERRF * poly.coefs.reduce(function (m, v, i) {
                var nm = v / an * Math.pow(maxAbsX, i);
                return nm > m ? nm : m;
              }, 0);
            }
            /**
             *  Calculates upper Real roots bounds. <br/>
             *  Real roots are in interval [negX, posX]. Determined by Fujiwara method.
             *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
             *
             *  @returns {{ negX: number, posX: number }}
             */

          }, {
            key: "boundsUpperRealFujiwara",
            value: function boundsUpperRealFujiwara() {
              var a = (this || _global).coefs;
              var n = a.length - 1;
              var an = a[n];

              if (an !== 1) {
                a = (this || _global).coefs.map(function (v) {
                  return v / an;
                });
              }

              var b = a.map(function (v, i) {
                return i < n ? Math.pow(Math.abs(i === 0 ? v / 2 : v), 1 / (n - i)) : v;
              });
              var coefSelectionFunc;

              var find2Max = function find2Max(acc, bi, i) {
                if (coefSelectionFunc(i)) {
                  if (acc.max < bi) {
                    acc.nearmax = acc.max;
                    acc.max = bi;
                  } else if (acc.nearmax < bi) {
                    acc.nearmax = bi;
                  }
                }

                return acc;
              };

              coefSelectionFunc = function coefSelectionFunc(i) {
                return i < n && a[i] < 0;
              }; // eslint-disable-next-line unicorn/no-fn-reference-in-iterator


              var max_nearmax_pos = b.reduce(find2Max, {
                max: 0,
                nearmax: 0
              });

              coefSelectionFunc = function coefSelectionFunc(i) {
                return i < n && (n % 2 === i % 2 ? a[i] < 0 : a[i] > 0);
              }; // eslint-disable-next-line unicorn/no-fn-reference-in-iterator


              var max_nearmax_neg = b.reduce(find2Max, {
                max: 0,
                nearmax: 0
              });
              return {
                negX: -2 * max_nearmax_neg.max,
                posX: 2 * max_nearmax_pos.max
              };
            }
            /**
             *  Calculates lower Real roots bounds. <br/>
             *  There are no Real roots in interval <negX, posX>. Determined by Fujiwara method.
             *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
             *
             *  @returns {{ negX: number, posX: number }}
             */

          }, {
            key: "boundsLowerRealFujiwara",
            value: function boundsLowerRealFujiwara() {
              var poly = new Polynomial();
              poly.coefs = (this || _global).coefs.slice().reverse();
              var res = poly.boundsUpperRealFujiwara();
              res.negX = 1 / res.negX;
              res.posX = 1 / res.posX;
              return res;
            }
            /**
             *  Calculates left and right Real roots bounds. <br/>
             *  Real roots are in interval [minX, maxX]. Combines Fujiwara lower and upper bounds to get minimal interval.
             *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
             *
             *  @returns {{ minX: number, maxX: number }}
            */

          }, {
            key: "bounds",
            value: function bounds() {
              var urb = this.boundsUpperRealFujiwara();
              var rb = {
                minX: urb.negX,
                maxX: urb.posX
              };

              if (urb.negX === 0 && urb.posX === 0) {
                return rb;
              }

              if (urb.negX === 0) {
                rb.minX = this.boundsLowerRealFujiwara().posX;
              } else if (urb.posX === 0) {
                rb.maxX = this.boundsLowerRealFujiwara().negX;
              }

              if (rb.minX > rb.maxX) {
                rb.minX = rb.maxX = 0;
              }

              return rb; // TODO: if sure that there are no complex roots
              // (maybe by using Sturm's theorem) use:
              // return this.boundsRealLaguerre();
            }
            /**
             *  Calculates absolute upper roots bound. <br/>
             *  All (Complex and Real) roots magnitudes are &lt;= result. Determined by Rouche method.
             *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
             *
             *  @returns {number}
             */

          }, {
            key: "boundUpperAbsRouche",
            value: function boundUpperAbsRouche() {
              var a = (this || _global).coefs;
              var n = a.length - 1;
              var max = a.reduce(function (prev, curr, i) {
                if (i !== n) {
                  curr = Math.abs(curr);
                  return prev < curr ? curr : prev;
                }

                return prev;
              }, 0);
              return 1 + max / Math.abs(a[n]);
            }
            /**
             *  Calculates absolute lower roots bound. <br/>
             *  All (Complex and Real) roots magnitudes are &gt;= result. Determined by Rouche method.
             *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
             *
             *  @returns {number}
             */

          }, {
            key: "boundLowerAbsRouche",
            value: function boundLowerAbsRouche() {
              var a = (this || _global).coefs;
              var max = a.reduce(function (prev, curr, i) {
                if (i !== 0) {
                  curr = Math.abs(curr);
                  return prev < curr ? curr : prev;
                }

                return prev;
              }, 0);
              return Math.abs(a[0]) / (Math.abs(a[0]) + max);
            }
            /**
             *  Calculates left and right Real roots bounds.<br/>
             *  WORKS ONLY if all polynomial roots are Real.
             *  Real roots are in interval [minX, maxX]. Determined by Laguerre method.
             *  @see {@link http://en.wikipedia.org/wiki/Properties_of_polynomial_roots}
             *
             *  @returns {{ minX: number, maxX: number }}
             */

          }, {
            key: "boundsRealLaguerre",
            value: function boundsRealLaguerre() {
              var a = (this || _global).coefs;
              var n = a.length - 1;
              var p1 = -a[n - 1] / (n * a[n]);
              var undersqrt = a[n - 1] * a[n - 1] - 2 * n / (n - 1) * a[n] * a[n - 2];
              var p2 = (n - 1) / (n * a[n]) * Math.sqrt(undersqrt);

              if (p2 < 0) {
                p2 = -p2;
              }

              return {
                minX: p1 - p2,
                maxX: p1 + p2
              };
            }
            /**
             *  Root count by Descartes rule of signs. <br/>
             *  Returns maximum number of positive and negative real roots and minimum number of complex roots.
             *  @see {@link http://en.wikipedia.org/wiki/Descartes%27_rule_of_signs}
             *
             *  @returns {{maxRealPos: number, maxRealNeg: number, minComplex: number}}
             */

          }, {
            key: "countRootsDescartes",
            value: function countRootsDescartes() {
              var a = (this || _global).coefs;
              var n = a.length - 1;
              var accum = a.reduce(function (acc, ai, i) {
                if (acc.prev_a !== 0 && ai !== 0) {
                  if (acc.prev_a < 0 === ai > 0) {
                    acc.pos++;
                  }

                  if (i % 2 === 0 !== acc.prev_a < 0 === (i % 2 === 1 !== ai > 0)) {
                    acc.neg++;
                  }
                }

                acc.prev_a = ai;
                return acc;
              }, {
                pos: 0,
                neg: 0,
                prev_a: 0
              });
              return {
                maxRealPos: accum.pos,
                maxRealNeg: accum.neg,
                minComplex: n - (accum.pos + accum.neg)
              };
            } // getters and setters

            /**
             *  get degree
             *
             *  @returns {number}
             */

          }, {
            key: "getDegree",
            value: function getDegree() {
              return (this || _global).coefs.length - 1;
            }
            /**
             *  getDerivative
             *
             *  @returns {module:kld-polynomial.Polynomial}
             */

          }, {
            key: "getDerivative",
            value: function getDerivative() {
              var derivative = new Polynomial();

              for (var i = 1; i < (this || _global).coefs.length; i++) {
                derivative.coefs.push(i * (this || _global).coefs[i]);
              }

              return derivative;
            }
            /**
             *  getRoots
             *
             *  @returns {Array<number>}
             */

          }, {
            key: "getRoots",
            value: function getRoots() {
              var result;
              this.simplifyEquals();

              switch (this.getDegree()) {
                case 0:
                  result = [];
                  break;

                case 1:
                  result = this.getLinearRoot();
                  break;

                case 2:
                  result = this.getQuadraticRoots();
                  break;

                case 3:
                  result = this.getCubicRoots();
                  break;

                case 4:
                  result = this.getQuarticRoots();
                  break;

                default:
                  result = [];
              }

              return result;
            }
            /**
             *  getRootsInInterval
             *
             *  @param {number} min
             *  @param {number} max
             *  @returns {Array<number>}
             */

          }, {
            key: "getRootsInInterval",
            value: function getRootsInInterval(min, max) {
              var roots = [];
              /**
               *  @param {number} value
               */

              function push(value) {
                if (typeof value === "number") {
                  roots.push(value);
                }
              }

              if (this.getDegree() === 0) {
                throw new RangeError("Unexpected empty polynomial");
              } else if (this.getDegree() === 1) {
                push(this.bisection(min, max));
              } else {
                // get roots of derivative
                var deriv = this.getDerivative();
                var droots = deriv.getRootsInInterval(min, max);

                if (droots.length > 0) {
                  // find root on [min, droots[0]]
                  push(this.bisection(min, droots[0])); // find root on [droots[i],droots[i+1]] for 0 <= i <= count-2

                  for (var i = 0; i <= droots.length - 2; i++) {
                    push(this.bisection(droots[i], droots[i + 1]));
                  } // find root on [droots[count-1],xmax]


                  push(this.bisection(droots[droots.length - 1], max));
                } else {
                  // polynomial is monotone on [min,max], has at most one root
                  push(this.bisection(min, max));
                }
              }

              return roots;
            }
            /**
             *  getLinearRoot
             *
             *  @returns {number}
             */

          }, {
            key: "getLinearRoot",
            value: function getLinearRoot() {
              var result = [];
              var a = (this || _global).coefs[1];

              if (a !== 0) {
                result.push(-(this || _global).coefs[0] / a);
              }

              return result;
            }
            /**
             *  getQuadraticRoots
             *
             *  @returns {Array<number>}
             */

          }, {
            key: "getQuadraticRoots",
            value: function getQuadraticRoots() {
              var results = [];

              if (this.getDegree() === 2) {
                var a = (this || _global).coefs[2];
                var b = (this || _global).coefs[1] / a;
                var c = (this || _global).coefs[0] / a;
                var d = b * b - 4 * c;

                if (d > 0) {
                  var e = Math.sqrt(d);
                  results.push(0.5 * (-b + e));
                  results.push(0.5 * (-b - e));
                } else if (d === 0) {
                  // really two roots with same value, but we only return one
                  results.push(0.5 * -b);
                } // else imaginary results

              }

              return results;
            }
            /**
             *  getCubicRoots
             *
             *  This code is based on MgcPolynomial.cpp written by David Eberly.  His
             *  code along with many other excellent examples are avaiable at his site:
             *  http://www.geometrictools.com
             *
             *  @returns {Array<number>}
             */

          }, {
            key: "getCubicRoots",
            value: function getCubicRoots() {
              var results = [];

              if (this.getDegree() === 3) {
                var c3 = (this || _global).coefs[3];
                var c2 = (this || _global).coefs[2] / c3;
                var c1 = (this || _global).coefs[1] / c3;
                var c0 = (this || _global).coefs[0] / c3;
                var a = (3 * c1 - c2 * c2) / 3;
                var b = (2 * c2 * c2 * c2 - 9 * c1 * c2 + 27 * c0) / 27;
                var offset = c2 / 3;
                var discrim = b * b / 4 + a * a * a / 27;
                var halfB = b / 2;
                var ZEROepsilon = this.zeroErrorEstimate();

                if (Math.abs(discrim) <= ZEROepsilon) {
                  discrim = 0;
                }

                if (discrim > 0) {
                  var e = Math.sqrt(discrim);
                  var root; // eslint-disable-line no-shadow

                  var tmp = -halfB + e;

                  if (tmp >= 0) {
                    root = Math.pow(tmp, 1 / 3);
                  } else {
                    root = -Math.pow(-tmp, 1 / 3);
                  }

                  tmp = -halfB - e;

                  if (tmp >= 0) {
                    root += Math.pow(tmp, 1 / 3);
                  } else {
                    root -= Math.pow(-tmp, 1 / 3);
                  }

                  results.push(root - offset);
                } else if (discrim < 0) {
                  var distance = Math.sqrt(-a / 3);
                  var angle = Math.atan2(Math.sqrt(-discrim), -halfB) / 3;
                  var cos = Math.cos(angle);
                  var sin = Math.sin(angle);
                  var sqrt3 = Math.sqrt(3);
                  results.push(2 * distance * cos - offset);
                  results.push(-distance * (cos + sqrt3 * sin) - offset);
                  results.push(-distance * (cos - sqrt3 * sin) - offset);
                } else {
                  var _tmp;

                  if (halfB >= 0) {
                    _tmp = -Math.pow(halfB, 1 / 3);
                  } else {
                    _tmp = Math.pow(-halfB, 1 / 3);
                  }

                  results.push(2 * _tmp - offset); // really should return next root twice, but we return only one

                  results.push(-_tmp - offset);
                }
              }

              return results;
            }
            /**
             *  Calculates roots of quartic polynomial. <br/>
             *  First, derivative roots are found, then used to split quartic polynomial
             *  into segments, each containing one root of quartic polynomial.
             *  Segments are then passed to newton's method to find roots.
             *
             *  @returns {Array<number>} roots
             */

          }, {
            key: "getQuarticRoots",
            value: function getQuarticRoots() {
              var results = [];
              var n = this.getDegree();

              if (n === 4) {
                var poly = new Polynomial();
                poly.coefs = (this || _global).coefs.slice();
                poly.divideEqualsScalar(poly.coefs[n]);
                var ERRF = 1e-15;

                if (Math.abs(poly.coefs[0]) < 10 * ERRF * Math.abs(poly.coefs[3])) {
                  poly.coefs[0] = 0;
                }

                var poly_d = poly.getDerivative();
                var derrt = poly_d.getRoots().sort(function (a, b) {
                  return a - b;
                });
                var dery = [];
                var nr = derrt.length - 1;
                var rb = this.bounds();
                var maxabsX = Math.max(Math.abs(rb.minX), Math.abs(rb.maxX));
                var ZEROepsilon = this.zeroErrorEstimate(maxabsX);

                for (var _i3 = 0; _i3 <= nr; _i3++) {
                  dery.push(poly.eval(derrt[_i3]));
                }

                for (var _i4 = 0; _i4 <= nr; _i4++) {
                  if (Math.abs(dery[_i4]) < ZEROepsilon) {
                    dery[_i4] = 0;
                  }
                }

                var i = 0;
                var dx = Math.max(0.1 * (rb.maxX - rb.minX) / n, ERRF);
                var guesses = [];
                var minmax = [];

                if (nr > -1) {
                  if (dery[0] !== 0) {
                    if (sign(dery[0]) !== sign(poly.eval(derrt[0] - dx) - dery[0])) {
                      guesses.push(derrt[0] - dx);
                      minmax.push([rb.minX, derrt[0]]);
                    }
                  } else {
                    results.push(derrt[0], derrt[0]);
                    i++;
                  }

                  for (; i < nr; i++) {
                    if (dery[i + 1] === 0) {
                      results.push(derrt[i + 1], derrt[i + 1]);
                      i++;
                    } else if (sign(dery[i]) !== sign(dery[i + 1])) {
                      guesses.push((derrt[i] + derrt[i + 1]) / 2);
                      minmax.push([derrt[i], derrt[i + 1]]);
                    }
                  }

                  if (dery[nr] !== 0 && sign(dery[nr]) !== sign(poly.eval(derrt[nr] + dx) - dery[nr])) {
                    guesses.push(derrt[nr] + dx);
                    minmax.push([derrt[nr], rb.maxX]);
                  }
                }
                /**
                 *  @param {number} x
                 *  @returns {number}
                 */


                var f = function f(x) {
                  return poly.eval(x);
                };
                /**
                 *  @param {number} x
                 *  @returns {number}
                 */


                var df = function df(x) {
                  return poly_d.eval(x);
                };

                if (guesses.length > 0) {
                  for (i = 0; i < guesses.length; i++) {
                    guesses[i] = Polynomial.newtonSecantBisection(guesses[i], f, df, 32, minmax[i][0], minmax[i][1]);
                  }
                }

                results = results.concat(guesses);
              }

              return results;
            }
          }], [{
            key: "interpolate",
            value: function interpolate(xs, ys, n, offset, x) {
              if (xs.constructor !== Array || ys.constructor !== Array) {
                throw new TypeError("xs and ys must be arrays");
              }

              if (isNaN(n) || isNaN(offset) || isNaN(x)) {
                throw new TypeError("n, offset, and x must be numbers");
              }

              var i, y;
              var dy = 0;
              var c = new Array(n);
              var d = new Array(n);
              var ns = 0;
              var diff = Math.abs(x - xs[offset]);

              for (i = 0; i < n; i++) {
                var dift = Math.abs(x - xs[offset + i]);

                if (dift < diff) {
                  ns = i;
                  diff = dift;
                }

                c[i] = d[i] = ys[offset + i];
              }

              y = ys[offset + ns];
              ns--;

              for (var m = 1; m < n; m++) {
                for (i = 0; i < n - m; i++) {
                  var ho = xs[offset + i] - x;
                  var hp = xs[offset + i + m] - x;
                  var w = c[i + 1] - d[i];
                  var den = ho - hp;

                  if (den === 0) {
                    throw new RangeError("Unable to interpolate polynomial. Two numbers in n were identical (to within roundoff)");
                  }

                  den = w / den;
                  d[i] = hp * den;
                  c[i] = ho * den;
                }

                dy = 2 * (ns + 1) < n - m ? c[ns + 1] : d[ns--];
                y += dy;
              }

              return {
                y: y,
                dy: dy
              };
            }
            /**
             *  Newton's (Newton-Raphson) method for finding Real roots on univariate function. <br/>
             *  When using bounds, algorithm falls back to secant if newton goes out of range.
             *  Bisection is fallback for secant when determined secant is not efficient enough.
             *  @see {@link http://en.wikipedia.org/wiki/Newton%27s_method}
             *  @see {@link http://en.wikipedia.org/wiki/Secant_method}
             *  @see {@link http://en.wikipedia.org/wiki/Bisection_method}
             *
             *  @param {number} x0 - Initial root guess
             *  @param {Function} f - Function which root we are trying to find
             *  @param {Function} df - Derivative of function f
             *  @param {number} max_iterations - Maximum number of algorithm iterations
             *  @param {number} [min] - Left bound value
             *  @param {number} [max] - Right bound value
             *  @returns {number} root
             */

          }, {
            key: "newtonSecantBisection",
            value: function newtonSecantBisection(x0, f, df, max_iterations, min, max) {
              var x,
                  prev_dfx = 0,
                  dfx,
                  prev_x_ef_correction = 0,
                  x_correction,
                  x_new;
              var y, y_atmin, y_atmax;
              x = x0;
              var ACCURACY = 14;
              var min_correction_factor = Math.pow(10, -ACCURACY);
              var isBounded = typeof min === "number" && typeof max === "number";

              if (isBounded) {
                if (min > max) {
                  throw new RangeError("Min must be greater than max");
                }

                y_atmin = f(min);
                y_atmax = f(max);

                if (sign(y_atmin) === sign(y_atmax)) {
                  throw new RangeError("Y values of bounds must be of opposite sign");
                }
              }

              var isEnoughCorrection = function isEnoughCorrection() {
                // stop if correction is too small or if correction is in simple loop
                return Math.abs(x_correction) <= min_correction_factor * Math.abs(x) || prev_x_ef_correction === x - x_correction - x;
              };

              for (var i = 0; i < max_iterations; i++) {
                dfx = df(x);

                if (dfx === 0) {
                  if (prev_dfx === 0) {
                    // error
                    throw new RangeError("df(x) is zero");
                  } else {
                    // use previous derivation value
                    dfx = prev_dfx;
                  } // or move x a little?
                  // dfx = df(x != 0 ? x + x * 1e-15 : 1e-15);

                }

                prev_dfx = dfx;
                y = f(x);
                x_correction = y / dfx;
                x_new = x - x_correction;

                if (isEnoughCorrection()) {
                  break;
                }

                if (isBounded) {
                  if (sign(y) === sign(y_atmax)) {
                    max = x;
                    y_atmax = y;
                  } else if (sign(y) === sign(y_atmin)) {
                    min = x;
                    y_atmin = y;
                  } else {
                    x = x_new;
                    break;
                  }

                  if (x_new < min || x_new > max) {
                    if (sign(y_atmin) === sign(y_atmax)) {
                      break;
                    }

                    var RATIO_LIMIT = 50;
                    var AIMED_BISECT_OFFSET = 0.25; // [0, 0.5)

                    var dy = y_atmax - y_atmin;
                    var dx = max - min;

                    if (dy === 0) {
                      x_correction = x - (min + dx * 0.5);
                    } else if (Math.abs(dy / Math.min(y_atmin, y_atmax)) > RATIO_LIMIT) {
                      x_correction = x - (min + dx * (0.5 + (Math.abs(y_atmin) < Math.abs(y_atmax) ? -AIMED_BISECT_OFFSET : AIMED_BISECT_OFFSET)));
                    } else {
                      x_correction = x - (min - y_atmin / dy * dx);
                    }

                    x_new = x - x_correction;

                    if (isEnoughCorrection()) {
                      break;
                    }
                  }
                }

                prev_x_ef_correction = x - x_new;
                x = x_new;
              }

              return x;
            }
          }]);

          return Polynomial;
        }();
        /**
         *  PathLexeme.js
         *
         *  @copyright 2002, 2013 Kevin Lindsey
         *  @module PathLexeme
         */

        /**
         *  PathLexeme
         */


        var PathLexeme = /*#__PURE__*/function () {
          /**
           *  PathLexeme
           *
           *  @param {number} type
           *  @param {string} text
           */
          function PathLexeme(type, text) {
            _classCallCheck(this || _global, PathLexeme);

            (this || _global).type = type;
            (this || _global).text = text;
          }
          /**
           *  Determine if this lexeme is of the given type
           *
           *  @param {number} type
           *  @returns {boolean}
           */


          _createClass(PathLexeme, [{
            key: "typeis",
            value: function typeis(type) {
              return (this || _global).type === type;
            }
          }]);

          return PathLexeme;
        }();
        /*
         * token type enumerations
         */


        PathLexeme.UNDEFINED = 0;
        PathLexeme.COMMAND = 1;
        PathLexeme.NUMBER = 2;
        PathLexeme.EOD = 3;
        /**
         *  Create a new instance of PathLexer
         */

        var PathLexer = /*#__PURE__*/function () {
          /**
           *  @param {string} [pathData]
           */
          function PathLexer(pathData) {
            _classCallCheck(this || _global, PathLexer);

            if (pathData === null || pathData === undefined) {
              pathData = "";
            }

            this.setPathData(pathData);
          }
          /**
           *  setPathData
           *
           *  @param {string} pathData
           */


          _createClass(PathLexer, [{
            key: "setPathData",
            value: function setPathData(pathData) {
              if (typeof pathData !== "string") {
                throw new TypeError("The first parameter must be a string");
              }

              (this || _global)._pathData = pathData;
            }
            /**
             *  getNextToken
             *
             *  @returns {PathLexeme}
             */

          }, {
            key: "getNextToken",
            value: function getNextToken() {
              var result = null;
              var d = (this || _global)._pathData;

              while (result === null) {
                if (d === null || d === "") {
                  result = new PathLexeme(PathLexeme.EOD, "");
                } else if (d.match(/^([ \t\r\n,]+)/)) {
                  d = d.substr(RegExp.$1.length);
                } else if (d.match(/^([AaCcHhLlMmQqSsTtVvZz])/)) {
                  result = new PathLexeme(PathLexeme.COMMAND, RegExp.$1);
                  d = d.substr(RegExp.$1.length);
                }
                /* eslint-disable-next-line unicorn/no-unsafe-regex */
                else if (d.match(/^(([-+]?\d+(\.\d*)?|[-+]?\.\d+)([eE][-+]?\d+)?)/)) {
                    result = new PathLexeme(PathLexeme.NUMBER, RegExp.$1);
                    d = d.substr(RegExp.$1.length);
                  } else {
                    throw new SyntaxError("Unrecognized path data: ".concat(d));
                  }
              }

              (this || _global)._pathData = d;
              return result;
            }
          }]);

          return PathLexer;
        }();

        var BOP = "BOP";
        /**
         *  PathParser
         */

        var PathParser = /*#__PURE__*/function () {
          /**
           * constructor
           */
          function PathParser() {
            _classCallCheck(this || _global, PathParser);

            (this || _global)._lexer = new PathLexer();
            (this || _global)._handler = null;
          }
          /**
           *  parseData
           *
           *  @param {string} pathData
           *  @throws {Error}
           */


          _createClass(PathParser, [{
            key: "parseData",
            value: function parseData(pathData) {
              if (typeof pathData !== "string") {
                throw new TypeError("The first parameter must be a string: ".concat(pathData));
              } // begin parse


              if ((this || _global)._handler !== null && typeof (this || _global)._handler.beginParse === "function") {
                (this || _global)._handler.beginParse();
              } // pass the pathData to the lexer


              var lexer = (this || _global)._lexer;
              lexer.setPathData(pathData); // set mode to signify new path - Beginning Of Path

              var mode = BOP; // Process all tokens

              var lastToken = null;
              var token = lexer.getNextToken();

              while (token.typeis(PathLexeme.EOD) === false) {
                var parameterCount = void 0;
                var params = []; // process current token

                switch (token.type) {
                  case PathLexeme.COMMAND:
                    if (mode === BOP && token.text !== "M" && token.text !== "m") {
                      throw new SyntaxError("New paths must begin with a moveto command. Found '".concat(token.text, "'"));
                    } // Set new parsing mode


                    mode = token.text; // Get count of numbers that must follow this command

                    parameterCount = PathParser.PARAMCOUNT[token.text.toUpperCase()]; // Advance past command token

                    token = lexer.getNextToken();
                    break;

                  case PathLexeme.NUMBER:
                    // Most commands allow you to keep repeating parameters
                    // without specifying the command again.  We just assume
                    // that is the case and do nothing since the mode remains
                    // the same
                    if (mode === BOP) {
                      throw new SyntaxError("New paths must begin with a moveto command. Found '".concat(token.text, "'"));
                    } else {
                      parameterCount = PathParser.PARAMCOUNT[mode.toUpperCase()];
                    }

                    break;

                  default:
                    throw new SyntaxError("Unrecognized command type: ".concat(token.type));
                } // Get parameters


                for (var i = 0; i < parameterCount; i++) {
                  switch (token.type) {
                    case PathLexeme.COMMAND:
                      throw new SyntaxError("Parameter must be a number. Found '".concat(token.text, "'"));

                    case PathLexeme.NUMBER:
                      // convert current parameter to a float and add to
                      // parameter list
                      params[i] = parseFloat(token.text);
                      break;

                    case PathLexeme.EOD:
                      throw new SyntaxError("Unexpected end of string");

                    default:
                      throw new SyntaxError("Unrecognized parameter type. Found type '".concat(token.type, "'"));
                  }

                  token = lexer.getNextToken();
                } // fire handler


                if ((this || _global)._handler !== null) {
                  var handler = (this || _global)._handler;
                  var methodName = PathParser.METHODNAME[mode]; // convert types for arcs

                  if (mode === "a" || mode === "A") {
                    params[3] = params[3] !== 0;
                    params[4] = params[4] !== 0;
                  }

                  if (handler !== null && typeof handler[methodName] === "function") {
                    handler[methodName].apply(handler, params);
                  }
                } // Lineto's follow moveto when no command follows moveto params.  Go
                // ahead and set the mode just in case no command follows the moveto
                // command


                switch (mode) {
                  case "M":
                    mode = "L";
                    break;

                  case "m":
                    mode = "l";
                    break;

                  case "Z":
                  case "z":
                    mode = "BOP";
                    break;
                }

                if (token === lastToken) {
                  throw new SyntaxError("Parser stalled on '".concat(token.text, "'"));
                } else {
                  lastToken = token;
                }
              } // end parse


              if ((this || _global)._handler !== null && typeof (this || _global)._handler.endParse === "function") {
                (this || _global)._handler.endParse();
              }
            }
            /**
             *  setHandler
             *
             *  @param {Object} handler
             */

          }, {
            key: "setHandler",
            value: function setHandler(handler) {
              (this || _global)._handler = handler;
            }
          }]);

          return PathParser;
        }();
        /*
         * class constants
         */


        PathParser.PARAMCOUNT = {
          A: 7,
          C: 6,
          H: 1,
          L: 2,
          M: 2,
          Q: 4,
          S: 4,
          T: 2,
          V: 1,
          Z: 0
        };
        PathParser.METHODNAME = {
          A: "arcAbs",
          a: "arcRel",
          C: "curvetoCubicAbs",
          c: "curvetoCubicRel",
          H: "linetoHorizontalAbs",
          h: "linetoHorizontalRel",
          L: "linetoAbs",
          l: "linetoRel",
          M: "movetoAbs",
          m: "movetoRel",
          Q: "curvetoQuadraticAbs",
          q: "curvetoQuadraticRel",
          S: "curvetoCubicSmoothAbs",
          s: "curvetoCubicSmoothRel",
          T: "curvetoQuadraticSmoothAbs",
          t: "curvetoQuadraticSmoothRel",
          V: "linetoVerticalAbs",
          v: "linetoVerticalRel",
          Z: "closePath",
          z: "closePath"
        };
        var TWO_PI = 2 * Math.PI;
        /**
         * Based on the SVG 1.1 specification, Appendix F: Implementation Requirements,
         * Section F.6 "Elliptical arc implementation notes"
         * {@see https://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes}
         *
         * @param {module:kld-affine.Point2D} startPoint
         * @param {module:kld-affine.Point2D} endPoint
         * @param {number} rx
         * @param {number} ry
         * @param {number} angle
         * @param {boolean} arcFlag
         * @param {boolean} sweepFlag
         * @returns {Array}
         */

        function getArcParameters(startPoint, endPoint, rx, ry, angle, arcFlag, sweepFlag) {
          angle = angle * Math.PI / 180;
          var c = Math.cos(angle);
          var s = Math.sin(angle);
          var TOLERANCE = 0.000001; // Section (F.6.5.1)

          var halfDiff = startPoint.subtract(endPoint).multiply(0.5);
          var x1p = halfDiff.x * c + halfDiff.y * s;
          var y1p = halfDiff.x * -s + halfDiff.y * c; // Section (F.6.6.1)

          rx = Math.abs(rx);
          ry = Math.abs(ry); // Section (F.6.6.2)

          var x1px1p = x1p * x1p;
          var y1py1p = y1p * y1p;
          var lambda = x1px1p / (rx * rx) + y1py1p / (ry * ry); // Section (F.6.6.3)

          if (lambda > 1) {
            var _factor = Math.sqrt(lambda);

            rx *= _factor;
            ry *= _factor;
          } // Section (F.6.5.2)


          var rxrx = rx * rx;
          var ryry = ry * ry;
          var rxy1 = rxrx * y1py1p;
          var ryx1 = ryry * x1px1p;
          var factor = (rxrx * ryry - rxy1 - ryx1) / (rxy1 + ryx1);

          if (Math.abs(factor) < TOLERANCE) {
            factor = 0;
          }

          var sq = Math.sqrt(factor);

          if (arcFlag === sweepFlag) {
            sq = -sq;
          } // Section (F.6.5.3)


          var mid = startPoint.add(endPoint).multiply(0.5);
          var cxp = sq * rx * y1p / ry;
          var cyp = sq * -ry * x1p / rx; // Section (F.6.5.5 - F.6.5.6)

          var xcr1 = (x1p - cxp) / rx;
          var xcr2 = (x1p + cxp) / rx;
          var ycr1 = (y1p - cyp) / ry;
          var ycr2 = (y1p + cyp) / ry;
          var theta1 = new Vector2D(1, 0).angleBetween(new Vector2D(xcr1, ycr1)); // let deltaTheta = normalizeAngle(new Vector2D(xcr1, ycr1).angleBetween(new Vector2D(-xcr2, -ycr2)));

          var deltaTheta = new Vector2D(xcr1, ycr1).angleBetween(new Vector2D(-xcr2, -ycr2));

          if (sweepFlag === false) {
            deltaTheta -= TWO_PI;
          }

          return [cxp * c - cyp * s + mid.x, cxp * s + cyp * c + mid.y, rx, ry, theta1, theta1 + deltaTheta];
        }
        /**
         *  PathHandler
         */


        var PathHandler = /*#__PURE__*/function () {
          /**
           * PathHandler
           *
           * @param {ShapeInfo} shapeCreator
           */
          function PathHandler(shapeCreator) {
            _classCallCheck(this || _global, PathHandler);

            (this || _global).shapeCreator = shapeCreator;
            (this || _global).shapes = [];
            (this || _global).firstX = null;
            (this || _global).firstY = null;
            (this || _global).lastX = null;
            (this || _global).lastY = null;
            (this || _global).lastCommand = null;
          }
          /**
           * beginParse
           */


          _createClass(PathHandler, [{
            key: "beginParse",
            value: function beginParse() {
              // zero out the sub-path array
              (this || _global).shapes = []; // clear firstX, firstY, lastX, and lastY

              (this || _global).firstX = null;
              (this || _global).firstY = null;
              (this || _global).lastX = null;
              (this || _global).lastY = null; // need to remember last command type to determine how to handle the
              // relative Bezier commands

              (this || _global).lastCommand = null;
            }
            /**
             *  addShape
             *
             *  @param {ShapeInfo} shape
             */

          }, {
            key: "addShape",
            value: function addShape(shape) {
              (this || _global).shapes.push(shape);
            }
            /**
             *  arcAbs - A
             *
             *  @param {number} rx
             *  @param {number} ry
             *  @param {number} xAxisRotation
             *  @param {boolean} arcFlag
             *  @param {boolean} sweepFlag
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "arcAbs",
            value: function arcAbs(rx, ry, xAxisRotation, arcFlag, sweepFlag, x, y) {
              if (rx === 0 || ry === 0) {
                this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, x, y));
              } else {
                var _this$shapeCreator;

                var arcParameters = getArcParameters(new Point2D((this || _global).lastX, (this || _global).lastY), new Point2D(x, y), rx, ry, xAxisRotation, arcFlag, sweepFlag);
                this.addShape((_this$shapeCreator = (this || _global).shapeCreator).arc.apply(_this$shapeCreator, _toConsumableArray(arcParameters)));
              }

              (this || _global).lastCommand = "A";
              (this || _global).lastX = x;
              (this || _global).lastY = y;
            }
            /**
             *  arcRel - a
             *
             *  @param {number} rx
             *  @param {number} ry
             *  @param {number} xAxisRotation
             *  @param {boolean} arcFlag
             *  @param {boolean} sweepFlag
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "arcRel",
            value: function arcRel(rx, ry, xAxisRotation, arcFlag, sweepFlag, x, y) {
              if (rx === 0 || ry === 0) {
                this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, (this || _global).lastX + x, (this || _global).lastY + y));
              } else {
                var _this$shapeCreator2;

                var arcParameters = getArcParameters(new Point2D((this || _global).lastX, (this || _global).lastY), new Point2D((this || _global).lastX + x, (this || _global).lastY + y), rx, ry, xAxisRotation, arcFlag, sweepFlag);
                this.addShape((_this$shapeCreator2 = (this || _global).shapeCreator).arc.apply(_this$shapeCreator2, _toConsumableArray(arcParameters)));
              }

              (this || _global).lastCommand = "a";
              (this || _global).lastX += x;
              (this || _global).lastY += y;
            }
            /**
             *  curvetoCubicAbs - C
             *
             *  @param {number} x1
             *  @param {number} y1
             *  @param {number} x2
             *  @param {number} y2
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoCubicAbs",
            value: function curvetoCubicAbs(x1, y1, x2, y2, x, y) {
              this.addShape((this || _global).shapeCreator.cubicBezier((this || _global).lastX, (this || _global).lastY, x1, y1, x2, y2, x, y));
              (this || _global).lastX = x;
              (this || _global).lastY = y;
              (this || _global).lastCommand = "C";
            }
            /**
             *  curvetoCubicRel - c
             *
             *  @param {number} x1
             *  @param {number} y1
             *  @param {number} x2
             *  @param {number} y2
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoCubicRel",
            value: function curvetoCubicRel(x1, y1, x2, y2, x, y) {
              this.addShape((this || _global).shapeCreator.cubicBezier((this || _global).lastX, (this || _global).lastY, (this || _global).lastX + x1, (this || _global).lastY + y1, (this || _global).lastX + x2, (this || _global).lastY + y2, (this || _global).lastX + x, (this || _global).lastY + y));
              (this || _global).lastX += x;
              (this || _global).lastY += y;
              (this || _global).lastCommand = "c";
            }
            /**
             *  linetoHorizontalAbs - H
             *
             *  @param {number} x
             */

          }, {
            key: "linetoHorizontalAbs",
            value: function linetoHorizontalAbs(x) {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, x, (this || _global).lastY));
              (this || _global).lastX = x;
              (this || _global).lastCommand = "H";
            }
            /**
             *  linetoHorizontalRel - h
             *
             *  @param {number} x
             */

          }, {
            key: "linetoHorizontalRel",
            value: function linetoHorizontalRel(x) {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, (this || _global).lastX + x, (this || _global).lastY));
              (this || _global).lastX += x;
              (this || _global).lastCommand = "h";
            }
            /**
             *  linetoAbs - L
             *
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "linetoAbs",
            value: function linetoAbs(x, y) {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, x, y));
              (this || _global).lastX = x;
              (this || _global).lastY = y;
              (this || _global).lastCommand = "L";
            }
            /**
             *  linetoRel - l
             *
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "linetoRel",
            value: function linetoRel(x, y) {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, (this || _global).lastX + x, (this || _global).lastY + y));
              (this || _global).lastX += x;
              (this || _global).lastY += y;
              (this || _global).lastCommand = "l";
            }
            /**
             *  movetoAbs - M
             *
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "movetoAbs",
            value: function movetoAbs(x, y) {
              (this || _global).firstX = x;
              (this || _global).firstY = y;
              (this || _global).lastX = x;
              (this || _global).lastY = y;
              (this || _global).lastCommand = "M";
            }
            /**
             *  movetoRel - m
             *
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "movetoRel",
            value: function movetoRel(x, y) {
              (this || _global).firstX += x;
              (this || _global).firstY += y;
              (this || _global).lastX += x;
              (this || _global).lastY += y;
              (this || _global).lastCommand = "m";
            }
            /**
             *  curvetoQuadraticAbs - Q
             *
             *  @param {number} x1
             *  @param {number} y1
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoQuadraticAbs",
            value: function curvetoQuadraticAbs(x1, y1, x, y) {
              this.addShape((this || _global).shapeCreator.quadraticBezier((this || _global).lastX, (this || _global).lastY, x1, y1, x, y));
              (this || _global).lastX = x;
              (this || _global).lastY = y;
              (this || _global).lastCommand = "Q";
            }
            /**
             *  curvetoQuadraticRel - q
             *
             *  @param {number} x1
             *  @param {number} y1
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoQuadraticRel",
            value: function curvetoQuadraticRel(x1, y1, x, y) {
              this.addShape((this || _global).shapeCreator.quadraticBezier((this || _global).lastX, (this || _global).lastY, (this || _global).lastX + x1, (this || _global).lastY + y1, (this || _global).lastX + x, (this || _global).lastY + y));
              (this || _global).lastX += x;
              (this || _global).lastY += y;
              (this || _global).lastCommand = "q";
            }
            /**
             *  curvetoCubicSmoothAbs - S
             *
             *  @param {number} x2
             *  @param {number} y2
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoCubicSmoothAbs",
            value: function curvetoCubicSmoothAbs(x2, y2, x, y) {
              var controlX, controlY;

              if ((this || _global).lastCommand.match(/^[SsCc]$/)) {
                var secondToLast = (this || _global).shapes[(this || _global).shapes.length - 1].args[2];
                controlX = 2 * (this || _global).lastX - secondToLast.x;
                controlY = 2 * (this || _global).lastY - secondToLast.y;
              } else {
                controlX = (this || _global).lastX;
                controlY = (this || _global).lastY;
              }

              this.addShape((this || _global).shapeCreator.cubicBezier((this || _global).lastX, (this || _global).lastY, controlX, controlY, x2, y2, x, y));
              (this || _global).lastX = x;
              (this || _global).lastY = y;
              (this || _global).lastCommand = "S";
            }
            /**
             *  curvetoCubicSmoothRel - s
             *
             *  @param {number} x2
             *  @param {number} y2
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoCubicSmoothRel",
            value: function curvetoCubicSmoothRel(x2, y2, x, y) {
              var controlX, controlY;

              if ((this || _global).lastCommand.match(/^[SsCc]$/)) {
                var secondToLast = (this || _global).shapes[(this || _global).shapes.length - 1].args[2];
                controlX = 2 * (this || _global).lastX - secondToLast.x;
                controlY = 2 * (this || _global).lastY - secondToLast.y;
              } else {
                controlX = (this || _global).lastX;
                controlY = (this || _global).lastY;
              }

              this.addShape((this || _global).shapeCreator.cubicBezier((this || _global).lastX, (this || _global).lastY, controlX, controlY, (this || _global).lastX + x2, (this || _global).lastY + y2, (this || _global).lastX + x, (this || _global).lastY + y));
              (this || _global).lastX += x;
              (this || _global).lastY += y;
              (this || _global).lastCommand = "s";
            }
            /**
             *  curvetoQuadraticSmoothAbs - T
             *
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoQuadraticSmoothAbs",
            value: function curvetoQuadraticSmoothAbs(x, y) {
              var controlX, controlY;

              if ((this || _global).lastCommand.match(/^[QqTt]$/)) {
                var secondToLast = (this || _global).shapes[(this || _global).shapes.length - 1].args[1];
                controlX = 2 * (this || _global).lastX - secondToLast.x;
                controlY = 2 * (this || _global).lastY - secondToLast.y;
              } else {
                controlX = (this || _global).lastX;
                controlY = (this || _global).lastY;
              }

              this.addShape((this || _global).shapeCreator.quadraticBezier((this || _global).lastX, (this || _global).lastY, controlX, controlY, x, y));
              (this || _global).lastX = x;
              (this || _global).lastY = y;
              (this || _global).lastCommand = "T";
            }
            /**
             *  curvetoQuadraticSmoothRel - t
             *
             *  @param {number} x
             *  @param {number} y
             */

          }, {
            key: "curvetoQuadraticSmoothRel",
            value: function curvetoQuadraticSmoothRel(x, y) {
              var controlX, controlY;

              if ((this || _global).lastCommand.match(/^[QqTt]$/)) {
                var secondToLast = (this || _global).shapes[(this || _global).shapes.length - 1].args[1];
                controlX = 2 * (this || _global).lastX - secondToLast.x;
                controlY = 2 * (this || _global).lastY - secondToLast.y;
              } else {
                controlX = (this || _global).lastX;
                controlY = (this || _global).lastY;
              }

              this.addShape((this || _global).shapeCreator.quadraticBezier((this || _global).lastX, (this || _global).lastY, controlX, controlY, (this || _global).lastX + x, (this || _global).lastY + y));
              (this || _global).lastX += x;
              (this || _global).lastY += y;
              (this || _global).lastCommand = "t";
            }
            /**
             *  linetoVerticalAbs - V
             *
             *  @param {number} y
             */

          }, {
            key: "linetoVerticalAbs",
            value: function linetoVerticalAbs(y) {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, (this || _global).lastX, y));
              (this || _global).lastY = y;
              (this || _global).lastCommand = "V";
            }
            /**
             *  linetoVerticalRel - v
             *
             *  @param {number} y
             */

          }, {
            key: "linetoVerticalRel",
            value: function linetoVerticalRel(y) {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, (this || _global).lastX, (this || _global).lastY + y));
              (this || _global).lastY += y;
              (this || _global).lastCommand = "v";
            }
            /**
             *  closePath - z or Z
             */

          }, {
            key: "closePath",
            value: function closePath() {
              this.addShape((this || _global).shapeCreator.line((this || _global).lastX, (this || _global).lastY, (this || _global).firstX, (this || _global).firstY));
              (this || _global).lastX = (this || _global).firstX;
              (this || _global).lastY = (this || _global).firstY;
              (this || _global).lastCommand = "z";
            }
          }]);

          return PathHandler;
        }();

        var degree90 = Math.PI * 0.5;
        var parser = new PathParser();
        /**
         * getValues
         *
         * @param {Array} types
         * @param {Array} args
         * @returns {Array}
         */

        function getValues(types, args) {
          var result = [];

          var _iterator = _createForOfIteratorHelper(types),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  names = _step$value[0],
                  type = _step$value[1];

              var value = null;

              if (type === "Point2D") {
                value = parsePoint(names, args);
              } else if (type === "Number") {
                value = parseNumber(names, args);
              } else if (type === "Array<Point2D>" || type === "Point2D[]") {
                var values = [];

                while (args.length > 0) {
                  values.push(parsePoint(names, args));
                }

                if (values.length > 0) {
                  value = values;
                }
              } else if (type === "Optional<Number>" || type === "Number?") {
                value = parseNumber(names, args);

                if (value === null) {
                  value = undefined;
                }
              } else {
                throw new TypeError("Unrecognized value type: ".concat(type));
              }

              if (value !== null) {
                result.push(value);
              } else {
                throw new TypeError("Unable to extract value for ".concat(names));
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        }
        /**
         * parseNumber
         *
         * @param {Array} names
         * @param {Array} args
         * @returns {number}
         */


        function parseNumber(names, args) {
          var result = null;

          if (args.length > 0) {
            var item = args[0];

            var itemType = _typeof(item);

            if (itemType === "number") {
              return args.shift();
            } else if (itemType === "object") {
              var _iterator2 = _createForOfIteratorHelper(names),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var prop = _step2.value;

                  if (prop in item && typeof item[prop] === "number") {
                    result = item[prop];
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }

          return result;
        }
        /**
         * parsePoint
         *
         * @param {Array} names
         * @param {Array} args
         * @returns {Array}
         */


        function parsePoint(names, args) {
          var result = null;

          if (args.length > 0) {
            (function () {
              var item = args[0];

              var itemType = _typeof(item);

              if (itemType === "number") {
                if (args.length > 1) {
                  var x = args.shift();
                  var y = args.shift();
                  result = new Point2D(x, y);
                }
              } else if (Array.isArray(item) && item.length > 1) {
                if (item.length === 2) {
                  var _args$shift = args.shift(),
                      _args$shift2 = _slicedToArray(_args$shift, 2),
                      _x = _args$shift2[0],
                      _y = _args$shift2[1];

                  result = new Point2D(_x, _y);
                } else {
                  throw new TypeError("Unhandled array of length ".concat(item.length));
                }
              } else if (itemType === "object") {
                if ("x" in item && "y" in item) {
                  result = new Point2D(item.x, item.y);
                  args.shift();
                } else {
                  var _iterator3 = _createForOfIteratorHelper(names),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var props = _step3.value;

                      if (Array.isArray(props)) {
                        if (props.every(function (p) {
                          return p in item;
                        })) {
                          result = new Point2D(item[props[0]], item[props[1]]);
                          break;
                        }
                      } else if (props in item) {
                        result = parsePoint([], [item[props]]);
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              }
            })();
          }

          return result;
        }
        /**
         *  ShapeInfo
         *  @memberof module:kld-intersections
         */


        var ShapeInfo = /*#__PURE__*/function () {
          /**
           *  @param {string} name
           *  @param {Array} args
           *  @returns {module:kld-intersections.ShapeInfo}
           */
          function ShapeInfo(name, args) {
            _classCallCheck(this || _global, ShapeInfo);

            (this || _global).name = name;
            (this || _global).args = args;
          }

          _createClass(ShapeInfo, null, [{
            key: "arc",
            value: function arc() {
              var types = [[["center", ["centerX", "centerY"], ["cx", "cy"]], "Point2D"], [["radiusX", "rx"], "Number"], [["radiusY", "ry"], "Number"], [["startRadians"], "Number"], [["endRadians"], "Number"]];

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var values = getValues(types, args);
              return new ShapeInfo(ShapeInfo.ARC, values);
            }
          }, {
            key: "quadraticBezier",
            value: function quadraticBezier() {
              var types = [[["p1", ["p1x", "p1y"]], "Point2D"], [["p2", ["p2x", "p2y"]], "Point2D"], [["p3", ["p3x", "p3y"]], "Point2D"]];

              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var values = getValues(types, args);
              return new ShapeInfo(ShapeInfo.QUADRATIC_BEZIER, values);
            }
          }, {
            key: "cubicBezier",
            value: function cubicBezier() {
              var types = [[["p1", ["p1x", "p1y"]], "Point2D"], [["p2", ["p2x", "p2y"]], "Point2D"], [["p3", ["p3x", "p3y"]], "Point2D"], [["p4", ["p4x", "p4y"]], "Point2D"]];

              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              var values = getValues(types, args);
              return new ShapeInfo(ShapeInfo.CUBIC_BEZIER, values);
            }
          }, {
            key: "circle",
            value: function circle() {
              var types = [[["center", ["centerX", "centerY"], ["cx", "cy"]], "Point2D"], [["radius", "r"], "Number"]];

              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }

              var values = getValues(types, args);
              return new ShapeInfo(ShapeInfo.CIRCLE, values);
            }
          }, {
            key: "ellipse",
            value: function ellipse() {
              var types = [[["center", ["centerX", "centerY"], ["cx", "cy"]], "Point2D"], [["radiusX", "rx"], "Number"], [["radiusY", "ry"], "Number"]];

              for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
              }

              var values = getValues(types, args);
              return new ShapeInfo(ShapeInfo.ELLIPSE, values);
            }
          }, {
            key: "line",
            value: function line() {
              var types = [[["p1", ["p1x", "p1y"], ["x1", "y1"]], "Point2D"], [["p2", ["p2x", "p2y"], ["x2", "y2"]], "Point2D"]];

              for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
              }

              var values = getValues(types, args);
              return new ShapeInfo(ShapeInfo.LINE, values);
            }
          }, {
            key: "path",
            value: function path() {
              parser.parseData(arguments.length <= 0 ? undefined : arguments[0]);
              return new ShapeInfo(ShapeInfo.PATH, handler.shapes);
            }
          }, {
            key: "polygon",
            value: function polygon() {
              var types = [[[], "Array<Point2D>"]];

              for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
              }

              var values = getValues(types, args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
              return new ShapeInfo(ShapeInfo.POLYGON, values);
            }
          }, {
            key: "polyline",
            value: function polyline() {
              var types = [[[], "Array<Point2D>"]];

              for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                args[_key8] = arguments[_key8];
              }

              var values = getValues(types, args.length === 1 && Array.isArray(args[0]) ? args[0] : args);
              return new ShapeInfo(ShapeInfo.POLYLINE, values);
            }
          }, {
            key: "rectangle",
            value: function rectangle() {
              var types = [[["topLeft", ["x", "y"], ["left", "top"]], "Point2D"], [["size", ["width", "height"], ["w", "h"]], "Point2D"], [["radiusX", "rx"], "Optional<Number>"], [["radiusY", "ry"], "Optional<Number>"]];

              for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                args[_key9] = arguments[_key9];
              }

              var values = getValues(types, args); // fix up bottom-right point

              var p1 = values[0];
              var p2 = values[1];
              values[1] = new Point2D(p1.x + p2.x, p1.y + p2.y); // create shape info

              var result = new ShapeInfo(ShapeInfo.RECTANGLE, values); // handle possible rounded rectangle values

              var ry = result.args.pop();
              var rx = result.args.pop();
              rx = rx === undefined ? 0 : rx;
              ry = ry === undefined ? 0 : ry;

              if (rx === 0 && ry === 0) {
                return result;
              }

              var _result$args$ = result.args[0],
                  p1x = _result$args$.x,
                  p1y = _result$args$.y;
              var _result$args$2 = result.args[1],
                  p2x = _result$args$2.x,
                  p2y = _result$args$2.y;
              var width = p2x - p1x;
              var height = p2y - p1y;

              if (rx === 0) {
                rx = ry;
              }

              if (ry === 0) {
                ry = rx;
              }

              if (rx > width * 0.5) {
                rx = width * 0.5;
              }

              if (ry > height * 0.5) {
                ry = height * 0.5;
              }

              var x0 = p1x;
              var y0 = p1y;
              var x1 = p1x + rx;
              var y1 = p1y + ry;
              var x2 = p2x - rx;
              var y2 = p2y - ry;
              var x3 = p2x;
              var y3 = p2y;
              var segments = [ShapeInfo.arc(x1, y1, rx, ry, 2 * degree90, 3 * degree90), ShapeInfo.line(x1, y0, x2, y0), ShapeInfo.arc(x2, y1, rx, ry, 3 * degree90, 4 * degree90), ShapeInfo.line(x3, y1, x3, y2), ShapeInfo.arc(x2, y2, rx, ry, 0, degree90), ShapeInfo.line(x2, y3, x1, y3), ShapeInfo.arc(x1, y2, rx, ry, degree90, 2 * degree90), ShapeInfo.line(x0, y2, x0, y1)];
              return new ShapeInfo(ShapeInfo.PATH, segments);
            }
          }]);

          return ShapeInfo;
        }(); // define shape name constants


        ShapeInfo.ARC = "Arc";
        ShapeInfo.QUADRATIC_BEZIER = "Bezier2";
        ShapeInfo.CUBIC_BEZIER = "Bezier3";
        ShapeInfo.CIRCLE = "Circle";
        ShapeInfo.ELLIPSE = "Ellipse";
        ShapeInfo.LINE = "Line";
        ShapeInfo.PATH = "Path";
        ShapeInfo.POLYGON = "Polygon";
        ShapeInfo.POLYLINE = "Polyline";
        ShapeInfo.RECTANGLE = "Rectangle"; // setup path parser handler after ShapeInfo has been defined

        var handler = new PathHandler(ShapeInfo);
        parser.setHandler(handler);
        var TWO_PI$1 = 2 * Math.PI;
        var UNIT_X = new Vector2D(1, 0);
        /**
         * @memberof module:kld-intersections.Intersection
         * @param {*} o
         * @returns {boolean}
         */

        function isNullish(o) {
          return o === null || o === undefined;
        }
        /**
         *  bezout
         *
         *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
         *  code along with many other excellent examples are avaiable at his site:
         *  http://www.magic-software.com
         *
         *  @param {Array<module:kld-intersections.Point2D>} e1
         *  @param {Array<module:kld-intersections.Point2D>} e2
         *  @returns {external:Polynomial}
         */


        function bezout(e1, e2) {
          var AB = e1[0] * e2[1] - e2[0] * e1[1];
          var AC = e1[0] * e2[2] - e2[0] * e1[2];
          var AD = e1[0] * e2[3] - e2[0] * e1[3];
          var AE = e1[0] * e2[4] - e2[0] * e1[4];
          var AF = e1[0] * e2[5] - e2[0] * e1[5];
          var BC = e1[1] * e2[2] - e2[1] * e1[2];
          var BE = e1[1] * e2[4] - e2[1] * e1[4];
          var BF = e1[1] * e2[5] - e2[1] * e1[5];
          var CD = e1[2] * e2[3] - e2[2] * e1[3];
          var DE = e1[3] * e2[4] - e2[3] * e1[4];
          var DF = e1[3] * e2[5] - e2[3] * e1[5];
          var BFpDE = BF + DE;
          var BEmCD = BE - CD;
          return new Polynomial(AB * BC - AC * AC, AB * BEmCD + AD * BC - 2 * AC * AE, AB * BFpDE + AD * BEmCD - AE * AE - 2 * AC * AF, AB * DF + AD * BFpDE - 2 * AE * AF, AD * DF - AF * AF);
        }
        /**
         * normalizeAngle
         *
         * @param {number} radians
         * @returns {number}
         */


        function normalizeAngle(radians) {
          var normal = radians % TWO_PI$1;
          return normal < 0 ? normal + TWO_PI$1 : normal;
        }
        /**
         * restrictPointsToArc
         *
         * @param {module:kld-intersections.Intersection} intersections
         * @param {module:kld-intersections.Point2D} center
         * @param {number} radiusX
         * @param {number} radiusY
         * @param {number} startRadians
         * @param {number} endRadians
         * @returns {module:kld-intersections.Intersection}
         */


        function restrictPointsToArc(intersections, center, radiusX, radiusY, startRadians, endRadians) {
          if (intersections.points.length === 0) {
            return intersections;
          }

          var result = new Intersection("No Intersection"); // swap if end is lower, so start is always the lower one

          if (endRadians < startRadians) {
            var _ref = [endRadians, startRadians];
            startRadians = _ref[0];
            endRadians = _ref[1];
          } // move everything to the positive domain, simultaneously


          if (startRadians < 0 || endRadians < 0) {
            startRadians += TWO_PI$1;
            endRadians += TWO_PI$1;
          }

          var _iterator = _createForOfIteratorHelper(intersections.points),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;
              var a = normalizeAngle(UNIT_X.angleBetween(Vector2D.fromPoints(center, p))); // a angle smaller than start, it may still be between
              // this happens if end > TWO_PI

              if (a < startRadians) {
                a += TWO_PI$1;
              }

              if (startRadians <= a && a <= endRadians) {
                result.appendPoint(p);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (result.points.length > 0) {
            result.status = "Intersection";
          }

          return result;
        }
        /**
         *  closePolygon
         *  @memberof module:kld-intersections.Intersection
         *  @param {Array<module:kld-intersections.Point2D>} points
         *  @returns {Array<module:kld-intersections.Point2D>}
         */


        function closePolygon(points) {
          var copy = points.slice();
          copy.push(points[0]);
          return copy;
        }
        /**
         * Intersection
         * @memberof module:kld-intersections
         */


        var Intersection = /*#__PURE__*/function () {
          /**
           *  @param {string} status
           *  @returns {module:kld-intersections.Intersection}
           */
          function Intersection(status) {
            _classCallCheck(this || _global, Intersection);

            this.init(status);
          }
          /**
           *  init
           *
           *  @param {string} status
           *  @returns {module:kld-intersections.Intersection}
           */


          _createClass(Intersection, [{
            key: "init",
            value: function init(status) {
              (this || _global).status = status;
              (this || _global).points = [];
            }
            /**
             *  intersect
             *
             *  @param {module:kld-intersections.ShapeInfo} shape1
             *  @param {module:kld-intersections.ShapeInfo} shape2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "appendPoint",

            /**
             *  appendPoint
             *
             *  @param {module:kld-intersections.Point2D} point
             */
            value: function appendPoint(point) {
              (this || _global).points.push(point);
            }
            /**
             *  appendPoints
             *
             *  @param {Array<module:kld-intersections.Point2D>} points
             */

          }, {
            key: "appendPoints",
            value: function appendPoints(points) {
              (this || _global).points = (this || _global).points.concat(points);
            }
          }], [{
            key: "intersect",
            value: function intersect(shape1, shape2) {
              var result;

              if (!isNullish(shape1) && !isNullish(shape2)) {
                if (shape1.name === "Path") {
                  result = Intersection.intersectPathShape(shape1, shape2);
                } else if (shape2.name === "Path") {
                  result = Intersection.intersectPathShape(shape2, shape1);
                } else if (shape1.name === "Arc") {
                  result = Intersection.intersectArcShape(shape1, shape2);
                } else if (shape2.name === "Arc") {
                  result = Intersection.intersectArcShape(shape2, shape1);
                } else {
                  var method;
                  var args;

                  if (shape1.name < shape2.name) {
                    method = "intersect" + shape1.name + shape2.name;
                    args = shape1.args.concat(shape2.args);
                  } else {
                    method = "intersect" + shape2.name + shape1.name;
                    args = shape2.args.concat(shape1.args);
                  }

                  if (!(method in Intersection)) {
                    throw new TypeError("Intersection not available: " + method);
                  }

                  result = Intersection[method].apply(null, args);
                }
              } else {
                result = new Intersection("No Intersection");
              }

              return result;
            }
            /**
             *  intersectPathShape
             *
             *  @param {module:kld-intersections.ShapeInfo} path
             *  @param {module:kld-intersections.ShapeInfo} shape
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectPathShape",
            value: function intersectPathShape(path, shape) {
              var result = new Intersection("No Intersection");

              var _iterator2 = _createForOfIteratorHelper(path.args),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var segment = _step2.value;
                  var inter = Intersection.intersect(segment, shape);
                  result.appendPoints(inter.points);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             * intersectArcShape
             *
             * @param {module:kld-intersections.ShapeInfo} arc
             * @param {module:kld-intersections.ShapeInfo} shape
             * @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectArcShape",
            value: function intersectArcShape(arc, shape) {
              var _arc$args = _slicedToArray(arc.args, 5),
                  center = _arc$args[0],
                  radiusX = _arc$args[1],
                  radiusY = _arc$args[2],
                  startRadians = _arc$args[3],
                  endRadians = _arc$args[4];

              var ellipse = new ShapeInfo(ShapeInfo.ELLIPSE, [center, radiusX, radiusY]);
              var ellipse_result = Intersection.intersect(ellipse, shape); // return ellipse_result;

              return restrictPointsToArc(ellipse_result, center, radiusX, radiusY, startRadians, endRadians);
            }
            /**
             *  intersectBezier2Bezier2
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} a3
             *  @param {module:kld-intersections.Point2D} b1
             *  @param {module:kld-intersections.Point2D} b2
             *  @param {module:kld-intersections.Point2D} b3
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Bezier2",
            value: function intersectBezier2Bezier2(a1, a2, a3, b1, b2, b3) {
              var a, b;
              var result = new Intersection("No Intersection");
              a = a2.multiply(-2);
              var c12 = a1.add(a.add(a3));
              a = a1.multiply(-2);
              b = a2.multiply(2);
              var c11 = a.add(b);
              var c10 = new Point2D(a1.x, a1.y);
              a = b2.multiply(-2);
              var c22 = b1.add(a.add(b3));
              a = b1.multiply(-2);
              b = b2.multiply(2);
              var c21 = a.add(b);
              var c20 = new Point2D(b1.x, b1.y); // bezout

              a = c12.x * c11.y - c11.x * c12.y;
              b = c22.x * c11.y - c11.x * c22.y;
              var c = c21.x * c11.y - c11.x * c21.y;
              var d = c11.x * (c10.y - c20.y) + c11.y * (-c10.x + c20.x);
              var e = c22.x * c12.y - c12.x * c22.y;
              var f = c21.x * c12.y - c12.x * c21.y;
              var g = c12.x * (c10.y - c20.y) + c12.y * (-c10.x + c20.x); // determinant

              var poly = new Polynomial(-e * e, -2 * e * f, a * b - f * f - 2 * e * g, a * c - 2 * f * g, a * d - g * g);
              var roots = poly.getRoots();

              var _iterator3 = _createForOfIteratorHelper(roots),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var s = _step3.value;

                  if (0 <= s && s <= 1) {
                    var xp = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x);
                    xp.simplifyEquals();
                    var xRoots = xp.getRoots();
                    var yp = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y);
                    yp.simplifyEquals();
                    var yRoots = yp.getRoots();

                    if (xRoots.length > 0 && yRoots.length > 0) {
                      var TOLERANCE = 0.0001;

                      var _iterator4 = _createForOfIteratorHelper(xRoots),
                          _step4;

                      try {
                        checkRoots: for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          var xRoot = _step4.value;

                          if (0 <= xRoot && xRoot <= 1) {
                            for (var k = 0; k < yRoots.length; k++) {
                              if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                                result.points.push(c22.multiply(s * s).add(c21.multiply(s).add(c20)));
                                break checkRoots;
                              }
                            }
                          }
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                    }
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier2Bezier3
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} a3
             *  @param {module:kld-intersections.Point2D} b1
             *  @param {module:kld-intersections.Point2D} b2
             *  @param {module:kld-intersections.Point2D} b3
             *  @param {module:kld-intersections.Point2D} b4
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Bezier3",
            value: function intersectBezier2Bezier3(a1, a2, a3, b1, b2, b3, b4) {
              var a, b, c, d;
              var result = new Intersection("No Intersection");
              a = a2.multiply(-2);
              var c12 = a1.add(a.add(a3));
              a = a1.multiply(-2);
              b = a2.multiply(2);
              var c11 = a.add(b);
              var c10 = new Point2D(a1.x, a1.y);
              a = b1.multiply(-1);
              b = b2.multiply(3);
              c = b3.multiply(-3);
              d = a.add(b.add(c.add(b4)));
              var c23 = new Point2D(d.x, d.y);
              a = b1.multiply(3);
              b = b2.multiply(-6);
              c = b3.multiply(3);
              d = a.add(b.add(c));
              var c22 = new Point2D(d.x, d.y);
              a = b1.multiply(-3);
              b = b2.multiply(3);
              c = a.add(b);
              var c21 = new Point2D(c.x, c.y);
              var c20 = new Point2D(b1.x, b1.y);
              var c10x2 = c10.x * c10.x;
              var c10y2 = c10.y * c10.y;
              var c11x2 = c11.x * c11.x;
              var c11y2 = c11.y * c11.y;
              var c12x2 = c12.x * c12.x;
              var c12y2 = c12.y * c12.y;
              var c20x2 = c20.x * c20.x;
              var c20y2 = c20.y * c20.y;
              var c21x2 = c21.x * c21.x;
              var c21y2 = c21.y * c21.y;
              var c22x2 = c22.x * c22.x;
              var c22y2 = c22.y * c22.y;
              var c23x2 = c23.x * c23.x;
              var c23y2 = c23.y * c23.y;
              var poly = new Polynomial(-2 * c12.x * c12.y * c23.x * c23.y + c12x2 * c23y2 + c12y2 * c23x2, -2 * c12.x * c12.y * c22.x * c23.y - 2 * c12.x * c12.y * c22.y * c23.x + 2 * c12y2 * c22.x * c23.x + 2 * c12x2 * c22.y * c23.y, -2 * c12.x * c21.x * c12.y * c23.y - 2 * c12.x * c12.y * c21.y * c23.x - 2 * c12.x * c12.y * c22.x * c22.y + 2 * c21.x * c12y2 * c23.x + c12y2 * c22x2 + c12x2 * (2 * c21.y * c23.y + c22y2), 2 * c10.x * c12.x * c12.y * c23.y + 2 * c10.y * c12.x * c12.y * c23.x + c11.x * c11.y * c12.x * c23.y + c11.x * c11.y * c12.y * c23.x - 2 * c20.x * c12.x * c12.y * c23.y - 2 * c12.x * c20.y * c12.y * c23.x - 2 * c12.x * c21.x * c12.y * c22.y - 2 * c12.x * c12.y * c21.y * c22.x - 2 * c10.x * c12y2 * c23.x - 2 * c10.y * c12x2 * c23.y + 2 * c20.x * c12y2 * c23.x + 2 * c21.x * c12y2 * c22.x - c11y2 * c12.x * c23.x - c11x2 * c12.y * c23.y + c12x2 * (2 * c20.y * c23.y + 2 * c21.y * c22.y), 2 * c10.x * c12.x * c12.y * c22.y + 2 * c10.y * c12.x * c12.y * c22.x + c11.x * c11.y * c12.x * c22.y + c11.x * c11.y * c12.y * c22.x - 2 * c20.x * c12.x * c12.y * c22.y - 2 * c12.x * c20.y * c12.y * c22.x - 2 * c12.x * c21.x * c12.y * c21.y - 2 * c10.x * c12y2 * c22.x - 2 * c10.y * c12x2 * c22.y + 2 * c20.x * c12y2 * c22.x - c11y2 * c12.x * c22.x - c11x2 * c12.y * c22.y + c21x2 * c12y2 + c12x2 * (2 * c20.y * c22.y + c21y2), 2 * c10.x * c12.x * c12.y * c21.y + 2 * c10.y * c12.x * c21.x * c12.y + c11.x * c11.y * c12.x * c21.y + c11.x * c11.y * c21.x * c12.y - 2 * c20.x * c12.x * c12.y * c21.y - 2 * c12.x * c20.y * c21.x * c12.y - 2 * c10.x * c21.x * c12y2 - 2 * c10.y * c12x2 * c21.y + 2 * c20.x * c21.x * c12y2 - c11y2 * c12.x * c21.x - c11x2 * c12.y * c21.y + 2 * c12x2 * c20.y * c21.y, -2 * c10.x * c10.y * c12.x * c12.y - c10.x * c11.x * c11.y * c12.y - c10.y * c11.x * c11.y * c12.x + 2 * c10.x * c12.x * c20.y * c12.y + 2 * c10.y * c20.x * c12.x * c12.y + c11.x * c20.x * c11.y * c12.y + c11.x * c11.y * c12.x * c20.y - 2 * c20.x * c12.x * c20.y * c12.y - 2 * c10.x * c20.x * c12y2 + c10.x * c11y2 * c12.x + c10.y * c11x2 * c12.y - 2 * c10.y * c12x2 * c20.y - c20.x * c11y2 * c12.x - c11x2 * c20.y * c12.y + c10x2 * c12y2 + c10y2 * c12x2 + c20x2 * c12y2 + c12x2 * c20y2);
              var roots = poly.getRootsInInterval(0, 1);

              var _iterator5 = _createForOfIteratorHelper(roots),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var s = _step5.value;
                  var xRoots = new Polynomial(c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x).getRoots();
                  var yRoots = new Polynomial(c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y).getRoots();

                  if (xRoots.length > 0 && yRoots.length > 0) {
                    var TOLERANCE = 0.0001;

                    var _iterator6 = _createForOfIteratorHelper(xRoots),
                        _step6;

                    try {
                      checkRoots: for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var xRoot = _step6.value;

                        if (0 <= xRoot && xRoot <= 1) {
                          for (var k = 0; k < yRoots.length; k++) {
                            if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                              result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                              break checkRoots;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier2Circle
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} r
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Circle",
            value: function intersectBezier2Circle(p1, p2, p3, c, r) {
              return Intersection.intersectBezier2Ellipse(p1, p2, p3, c, r, r);
            }
            /**
             *  intersectBezier2Ellipse
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} ec
             *  @param {number} rx
             *  @param {number} ry
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Ellipse",
            value: function intersectBezier2Ellipse(p1, p2, p3, ec, rx, ry) {
              var a; // temporary variables
              // c2, c1, c0; // coefficients of quadratic

              var result = new Intersection("No Intersection");
              a = p2.multiply(-2);
              var c2 = p1.add(a.add(p3));
              a = p1.multiply(-2);
              var b = p2.multiply(2);
              var c1 = a.add(b);
              var c0 = new Point2D(p1.x, p1.y);
              var rxrx = rx * rx;
              var ryry = ry * ry;
              var roots = new Polynomial(ryry * c2.x * c2.x + rxrx * c2.y * c2.y, 2 * (ryry * c2.x * c1.x + rxrx * c2.y * c1.y), ryry * (2 * c2.x * c0.x + c1.x * c1.x) + rxrx * (2 * c2.y * c0.y + c1.y * c1.y) - 2 * (ryry * ec.x * c2.x + rxrx * ec.y * c2.y), 2 * (ryry * c1.x * (c0.x - ec.x) + rxrx * c1.y * (c0.y - ec.y)), ryry * (c0.x * c0.x + ec.x * ec.x) + rxrx * (c0.y * c0.y + ec.y * ec.y) - 2 * (ryry * ec.x * c0.x + rxrx * ec.y * c0.y) - rxrx * ryry).getRoots();

              var _iterator7 = _createForOfIteratorHelper(roots),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var t = _step7.value;

                  if (0 <= t && t <= 1) {
                    result.points.push(c2.multiply(t * t).add(c1.multiply(t).add(c0)));
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier2Line
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Line",
            value: function intersectBezier2Line(p1, p2, p3, a1, a2) {
              var a; // temporary variables
              // let c2, c1, c0; // coefficients of quadratic
              // cl; // c coefficient for normal form of line
              // n; // normal for normal form of line

              var min = a1.min(a2); // used to determine if point is on line segment

              var max = a1.max(a2); // used to determine if point is on line segment

              var result = new Intersection("No Intersection");
              a = p2.multiply(-2);
              var c2 = p1.add(a.add(p3));
              a = p1.multiply(-2);
              var b = p2.multiply(2);
              var c1 = a.add(b);
              var c0 = new Point2D(p1.x, p1.y); // Convert line to normal form: ax + by + c = 0
              // Find normal to line: negative inverse of original line's slope

              var n = new Vector2D(a1.y - a2.y, a2.x - a1.x); // Determine new c coefficient

              var cl = a1.x * a2.y - a2.x * a1.y; // Transform cubic coefficients to line's coordinate system and find roots
              // of cubic

              var roots = new Polynomial(n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots(); // Any roots in closed interval [0,1] are intersections on Bezier, but
              // might not be on the line segment.
              // Find intersections and calculate point coordinates

              var _iterator8 = _createForOfIteratorHelper(roots),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var t = _step8.value;

                  if (0 <= t && t <= 1) {
                    // We're within the Bezier curve
                    // Find point on Bezier
                    var p4 = p1.lerp(p2, t);
                    var p5 = p2.lerp(p3, t);
                    var p6 = p4.lerp(p5, t); // See if point is on line segment
                    // Had to make special cases for vertical and horizontal lines due
                    // to slight errors in calculation of p6

                    if (a1.x === a2.x) {
                      if (min.y <= p6.y && p6.y <= max.y) {
                        result.status = "Intersection";
                        result.appendPoint(p6);
                      }
                    } else if (a1.y === a2.y) {
                      if (min.x <= p6.x && p6.x <= max.x) {
                        result.status = "Intersection";
                        result.appendPoint(p6);
                      }
                    } else if (min.x <= p6.x && p6.x <= max.x && min.y <= p6.y && p6.y <= max.y) {
                      result.status = "Intersection";
                      result.appendPoint(p6);
                    }
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              return result;
            }
            /**
             *  intersectBezier2Polygon
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Polygon",
            value: function intersectBezier2Polygon(p1, p2, p3, points) {
              return Intersection.intersectBezier2Polyline(p1, p2, p3, closePolygon(points));
            }
            /**
             *  intersectBezier2Polyline
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Polyline",
            value: function intersectBezier2Polyline(p1, p2, p3, points) {
              var result = new Intersection("No Intersection");
              var len = points.length;

              for (var i = 0; i < len - 1; i++) {
                var a1 = points[i];
                var a2 = points[i + 1];
                var inter = Intersection.intersectBezier2Line(p1, p2, p3, a1, a2);
                result.appendPoints(inter.points);
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier2Rectangle
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier2Rectangle",
            value: function intersectBezier2Rectangle(p1, p2, p3, r1, r2) {
              var min = r1.min(r2);
              var max = r1.max(r2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectBezier2Line(p1, p2, p3, min, topRight);
              var inter2 = Intersection.intersectBezier2Line(p1, p2, p3, topRight, max);
              var inter3 = Intersection.intersectBezier2Line(p1, p2, p3, max, bottomLeft);
              var inter4 = Intersection.intersectBezier2Line(p1, p2, p3, bottomLeft, min);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier3Bezier3
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} a3
             *  @param {module:kld-intersections.Point2D} a4
             *  @param {module:kld-intersections.Point2D} b1
             *  @param {module:kld-intersections.Point2D} b2
             *  @param {module:kld-intersections.Point2D} b3
             *  @param {module:kld-intersections.Point2D} b4
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Bezier3",
            value: function intersectBezier3Bezier3(a1, a2, a3, a4, b1, b2, b3, b4) {
              var a, b, c, d; // temporary variables
              // c13, c12, c11, c10; // coefficients of cubic
              // c23, c22, c21, c20; // coefficients of cubic

              var result = new Intersection("No Intersection"); // Calculate the coefficients of cubic polynomial

              a = a1.multiply(-1);
              b = a2.multiply(3);
              c = a3.multiply(-3);
              d = a.add(b.add(c.add(a4)));
              var c13 = new Point2D(d.x, d.y);
              a = a1.multiply(3);
              b = a2.multiply(-6);
              c = a3.multiply(3);
              d = a.add(b.add(c));
              var c12 = new Point2D(d.x, d.y);
              a = a1.multiply(-3);
              b = a2.multiply(3);
              c = a.add(b);
              var c11 = new Point2D(c.x, c.y);
              var c10 = new Point2D(a1.x, a1.y);
              a = b1.multiply(-1);
              b = b2.multiply(3);
              c = b3.multiply(-3);
              d = a.add(b.add(c.add(b4)));
              var c23 = new Point2D(d.x, d.y);
              a = b1.multiply(3);
              b = b2.multiply(-6);
              c = b3.multiply(3);
              d = a.add(b.add(c));
              var c22 = new Point2D(d.x, d.y);
              a = b1.multiply(-3);
              b = b2.multiply(3);
              c = a.add(b);
              var c21 = new Point2D(c.x, c.y);
              var c20 = new Point2D(b1.x, b1.y); // bezout

              a = c13.x * c12.y - c12.x * c13.y;
              b = c13.x * c11.y - c11.x * c13.y;
              var c0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
              var c1 = c21.x * c13.y - c13.x * c21.y;
              var c2 = c22.x * c13.y - c13.x * c22.y;
              var c3 = c23.x * c13.y - c13.x * c23.y;
              d = c13.x * c11.y - c11.x * c13.y;
              var e0 = c13.x * c10.y + c12.x * c11.y - c11.x * c12.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
              var e1 = c21.x * c13.y - c13.x * c21.y;
              var e2 = c22.x * c13.y - c13.x * c22.y;
              var e3 = c23.x * c13.y - c13.x * c23.y;
              var f0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
              var f1 = c21.x * c12.y - c12.x * c21.y;
              var f2 = c22.x * c12.y - c12.x * c22.y;
              var f3 = c23.x * c12.y - c12.x * c23.y;
              var g0 = c13.x * c10.y - c10.x * c13.y + c20.x * c13.y - c13.x * c20.y;
              var g1 = c21.x * c13.y - c13.x * c21.y;
              var g2 = c22.x * c13.y - c13.x * c22.y;
              var g3 = c23.x * c13.y - c13.x * c23.y;
              var h0 = c12.x * c10.y - c10.x * c12.y + c20.x * c12.y - c12.x * c20.y;
              var h1 = c21.x * c12.y - c12.x * c21.y;
              var h2 = c22.x * c12.y - c12.x * c22.y;
              var h3 = c23.x * c12.y - c12.x * c23.y;
              var i0 = c11.x * c10.y - c10.x * c11.y + c20.x * c11.y - c11.x * c20.y;
              var i1 = c21.x * c11.y - c11.x * c21.y;
              var i2 = c22.x * c11.y - c11.x * c22.y;
              var i3 = c23.x * c11.y - c11.x * c23.y; // determinant

              var poly = new Polynomial(-c3 * e3 * g3, -c3 * e3 * g2 - c3 * e2 * g3 - c2 * e3 * g3, -c3 * e3 * g1 - c3 * e2 * g2 - c2 * e3 * g2 - c3 * e1 * g3 - c2 * e2 * g3 - c1 * e3 * g3, -c3 * e3 * g0 - c3 * e2 * g1 - c2 * e3 * g1 - c3 * e1 * g2 - c2 * e2 * g2 - c1 * e3 * g2 - c3 * e0 * g3 - c2 * e1 * g3 - c1 * e2 * g3 - c0 * e3 * g3 + b * f3 * g3 + c3 * d * h3 - a * f3 * h3 + a * e3 * i3, -c3 * e2 * g0 - c2 * e3 * g0 - c3 * e1 * g1 - c2 * e2 * g1 - c1 * e3 * g1 - c3 * e0 * g2 - c2 * e1 * g2 - c1 * e2 * g2 - c0 * e3 * g2 + b * f3 * g2 - c2 * e0 * g3 - c1 * e1 * g3 - c0 * e2 * g3 + b * f2 * g3 + c3 * d * h2 - a * f3 * h2 + c2 * d * h3 - a * f2 * h3 + a * e3 * i2 + a * e2 * i3, -c3 * e1 * g0 - c2 * e2 * g0 - c1 * e3 * g0 - c3 * e0 * g1 - c2 * e1 * g1 - c1 * e2 * g1 - c0 * e3 * g1 + b * f3 * g1 - c2 * e0 * g2 - c1 * e1 * g2 - c0 * e2 * g2 + b * f2 * g2 - c1 * e0 * g3 - c0 * e1 * g3 + b * f1 * g3 + c3 * d * h1 - a * f3 * h1 + c2 * d * h2 - a * f2 * h2 + c1 * d * h3 - a * f1 * h3 + a * e3 * i1 + a * e2 * i2 + a * e1 * i3, -c3 * e0 * g0 - c2 * e1 * g0 - c1 * e2 * g0 - c0 * e3 * g0 + b * f3 * g0 - c2 * e0 * g1 - c1 * e1 * g1 - c0 * e2 * g1 + b * f2 * g1 - c1 * e0 * g2 - c0 * e1 * g2 + b * f1 * g2 - c0 * e0 * g3 + b * f0 * g3 + c3 * d * h0 - a * f3 * h0 + c2 * d * h1 - a * f2 * h1 + c1 * d * h2 - a * f1 * h2 + c0 * d * h3 - a * f0 * h3 + a * e3 * i0 + a * e2 * i1 + a * e1 * i2 - b * d * i3 + a * e0 * i3, -c2 * e0 * g0 - c1 * e1 * g0 - c0 * e2 * g0 + b * f2 * g0 - c1 * e0 * g1 - c0 * e1 * g1 + b * f1 * g1 - c0 * e0 * g2 + b * f0 * g2 + c2 * d * h0 - a * f2 * h0 + c1 * d * h1 - a * f1 * h1 + c0 * d * h2 - a * f0 * h2 + a * e2 * i0 + a * e1 * i1 - b * d * i2 + a * e0 * i2, -c1 * e0 * g0 - c0 * e1 * g0 + b * f1 * g0 - c0 * e0 * g1 + b * f0 * g1 + c1 * d * h0 - a * f1 * h0 + c0 * d * h1 - a * f0 * h1 + a * e1 * i0 - b * d * i1 + a * e0 * i1, -c0 * e0 * g0 + b * f0 * g0 + c0 * d * h0 - a * f0 * h0 - b * d * i0 + a * e0 * i0);
              poly.simplifyEquals();
              var roots = poly.getRootsInInterval(0, 1);

              var _iterator9 = _createForOfIteratorHelper(roots),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var s = _step9.value;
                  var xp = new Polynomial(c13.x, c12.x, c11.x, c10.x - c20.x - s * c21.x - s * s * c22.x - s * s * s * c23.x);
                  xp.simplifyEquals();
                  var xRoots = xp.getRoots();
                  var yp = new Polynomial(c13.y, c12.y, c11.y, c10.y - c20.y - s * c21.y - s * s * c22.y - s * s * s * c23.y);
                  yp.simplifyEquals();
                  var yRoots = yp.getRoots();

                  if (xRoots.length > 0 && yRoots.length > 0) {
                    var TOLERANCE = 0.0001;

                    var _iterator10 = _createForOfIteratorHelper(xRoots),
                        _step10;

                    try {
                      checkRoots: for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                        var xRoot = _step10.value;

                        if (0 <= xRoot && xRoot <= 1) {
                          for (var k = 0; k < yRoots.length; k++) {
                            if (Math.abs(xRoot - yRoots[k]) < TOLERANCE) {
                              result.points.push(c23.multiply(s * s * s).add(c22.multiply(s * s).add(c21.multiply(s).add(c20))));
                              break checkRoots;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      _iterator10.e(err);
                    } finally {
                      _iterator10.f();
                    }
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier3Circle
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} r
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Circle",
            value: function intersectBezier3Circle(p1, p2, p3, p4, c, r) {
              return Intersection.intersectBezier3Ellipse(p1, p2, p3, p4, c, r, r);
            }
            /**
             *  intersectBezier3Ellipse
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @param {module:kld-intersections.Point2D} ec
             *  @param {number} rx
             *  @param {number} ry
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Ellipse",
            value: function intersectBezier3Ellipse(p1, p2, p3, p4, ec, rx, ry) {
              var a, b, c, d; // temporary variables
              // c3, c2, c1, c0; // coefficients of cubic

              var result = new Intersection("No Intersection"); // Calculate the coefficients of cubic polynomial

              a = p1.multiply(-1);
              b = p2.multiply(3);
              c = p3.multiply(-3);
              d = a.add(b.add(c.add(p4)));
              var c3 = new Point2D(d.x, d.y);
              a = p1.multiply(3);
              b = p2.multiply(-6);
              c = p3.multiply(3);
              d = a.add(b.add(c));
              var c2 = new Point2D(d.x, d.y);
              a = p1.multiply(-3);
              b = p2.multiply(3);
              c = a.add(b);
              var c1 = new Point2D(c.x, c.y);
              var c0 = new Point2D(p1.x, p1.y);
              var rxrx = rx * rx;
              var ryry = ry * ry;
              var poly = new Polynomial(c3.x * c3.x * ryry + c3.y * c3.y * rxrx, 2 * (c3.x * c2.x * ryry + c3.y * c2.y * rxrx), 2 * (c3.x * c1.x * ryry + c3.y * c1.y * rxrx) + c2.x * c2.x * ryry + c2.y * c2.y * rxrx, 2 * c3.x * ryry * (c0.x - ec.x) + 2 * c3.y * rxrx * (c0.y - ec.y) + 2 * (c2.x * c1.x * ryry + c2.y * c1.y * rxrx), 2 * c2.x * ryry * (c0.x - ec.x) + 2 * c2.y * rxrx * (c0.y - ec.y) + c1.x * c1.x * ryry + c1.y * c1.y * rxrx, 2 * c1.x * ryry * (c0.x - ec.x) + 2 * c1.y * rxrx * (c0.y - ec.y), c0.x * c0.x * ryry - 2 * c0.y * ec.y * rxrx - 2 * c0.x * ec.x * ryry + c0.y * c0.y * rxrx + ec.x * ec.x * ryry + ec.y * ec.y * rxrx - rxrx * ryry);
              var roots = poly.getRootsInInterval(0, 1);

              var _iterator11 = _createForOfIteratorHelper(roots),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var t = _step11.value;
                  result.points.push(c3.multiply(t * t * t).add(c2.multiply(t * t).add(c1.multiply(t).add(c0))));
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier3Line
             *
             *  Many thanks to Dan Sunday at SoftSurfer.com.  He gave me a very thorough
             *  sketch of the algorithm used here.  Without his help, I'm not sure when I
             *  would have figured out this intersection problem.
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Line",
            value: function intersectBezier3Line(p1, p2, p3, p4, a1, a2) {
              var a, b, c, d; // temporary variables
              // c3, c2, c1, c0; // coefficients of cubic
              // cl; // c coefficient for normal form of line
              // n; // normal for normal form of line

              var min = a1.min(a2); // used to determine if point is on line segment

              var max = a1.max(a2); // used to determine if point is on line segment

              var result = new Intersection("No Intersection"); // Start with Bezier using Bernstein polynomials for weighting functions:
              //     (1-t^3)P1 + 3t(1-t)^2P2 + 3t^2(1-t)P3 + t^3P4
              //
              // Expand and collect terms to form linear combinations of original Bezier
              // controls.  This ends up with a vector cubic in t:
              //     (-P1+3P2-3P3+P4)t^3 + (3P1-6P2+3P3)t^2 + (-3P1+3P2)t + P1
              //             /\                  /\                /\       /\
              //             ||                  ||                ||       ||
              //             c3                  c2                c1       c0
              // Calculate the coefficients

              a = p1.multiply(-1);
              b = p2.multiply(3);
              c = p3.multiply(-3);
              d = a.add(b.add(c.add(p4)));
              var c3 = new Vector2D(d.x, d.y);
              a = p1.multiply(3);
              b = p2.multiply(-6);
              c = p3.multiply(3);
              d = a.add(b.add(c));
              var c2 = new Vector2D(d.x, d.y);
              a = p1.multiply(-3);
              b = p2.multiply(3);
              c = a.add(b);
              var c1 = new Vector2D(c.x, c.y);
              var c0 = new Vector2D(p1.x, p1.y); // Convert line to normal form: ax + by + c = 0
              // Find normal to line: negative inverse of original line's slope

              var n = new Vector2D(a1.y - a2.y, a2.x - a1.x); // Determine new c coefficient

              var cl = a1.x * a2.y - a2.x * a1.y; // ?Rotate each cubic coefficient using line for new coordinate system?
              // Find roots of rotated cubic

              var roots = new Polynomial(n.dot(c3), n.dot(c2), n.dot(c1), n.dot(c0) + cl).getRoots(); // Any roots in closed interval [0,1] are intersections on Bezier, but
              // might not be on the line segment.
              // Find intersections and calculate point coordinates

              var _iterator12 = _createForOfIteratorHelper(roots),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var t = _step12.value;

                  if (0 <= t && t <= 1) {
                    // We're within the Bezier curve
                    // Find point on Bezier
                    var p5 = p1.lerp(p2, t);
                    var p6 = p2.lerp(p3, t);
                    var p7 = p3.lerp(p4, t);
                    var p8 = p5.lerp(p6, t);
                    var p9 = p6.lerp(p7, t);
                    var p10 = p8.lerp(p9, t); // See if point is on line segment
                    // Had to make special cases for vertical and horizontal lines due
                    // to slight errors in calculation of p10

                    if (a1.x === a2.x) {
                      if (min.y <= p10.y && p10.y <= max.y) {
                        result.status = "Intersection";
                        result.appendPoint(p10);
                      }
                    } else if (a1.y === a2.y) {
                      if (min.x <= p10.x && p10.x <= max.x) {
                        result.status = "Intersection";
                        result.appendPoint(p10);
                      }
                    } else if (min.x <= p10.x && p10.x <= max.x && min.y <= p10.y && p10.y <= max.y) {
                      result.status = "Intersection";
                      result.appendPoint(p10);
                    }
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              return result;
            }
            /**
             *  intersectBezier3Polygon
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Polygon",
            value: function intersectBezier3Polygon(p1, p2, p3, p4, points) {
              return Intersection.intersectBezier3Polyline(p1, p2, p3, p4, closePolygon(points));
            }
            /**
             *  intersectBezier3Polyline
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Polyline",
            value: function intersectBezier3Polyline(p1, p2, p3, p4, points) {
              var result = new Intersection("No Intersection");
              var len = points.length;

              for (var i = 0; i < len - 1; i++) {
                var a1 = points[i];
                var a2 = points[i + 1];
                var inter = Intersection.intersectBezier3Line(p1, p2, p3, p4, a1, a2);
                result.appendPoints(inter.points);
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectBezier3Rectangle
             *
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectBezier3Rectangle",
            value: function intersectBezier3Rectangle(p1, p2, p3, p4, r1, r2) {
              var min = r1.min(r2);
              var max = r1.max(r2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectBezier3Line(p1, p2, p3, p4, min, topRight);
              var inter2 = Intersection.intersectBezier3Line(p1, p2, p3, p4, topRight, max);
              var inter3 = Intersection.intersectBezier3Line(p1, p2, p3, p4, max, bottomLeft);
              var inter4 = Intersection.intersectBezier3Line(p1, p2, p3, p4, bottomLeft, min);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectCircleCircle
             *
             *  @param {module:kld-intersections.Point2D} c1
             *  @param {number} r1
             *  @param {module:kld-intersections.Point2D} c2
             *  @param {number} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectCircleCircle",
            value: function intersectCircleCircle(c1, r1, c2, r2) {
              var result; // Determine minimum and maximum radii where circles can intersect

              var r_max = r1 + r2;
              var r_min = Math.abs(r1 - r2); // Determine actual distance between circle circles

              var c_dist = c1.distanceFrom(c2);

              if (c_dist > r_max) {
                result = new Intersection("Outside");
              } else if (c_dist < r_min) {
                result = new Intersection("Inside");
              } else {
                result = new Intersection("Intersection");
                var a = (r1 * r1 - r2 * r2 + c_dist * c_dist) / (2 * c_dist);
                var h = Math.sqrt(r1 * r1 - a * a);
                var p = c1.lerp(c2, a / c_dist);
                var b = h / c_dist;
                result.points.push(new Point2D(p.x - b * (c2.y - c1.y), p.y + b * (c2.x - c1.x)));
                result.points.push(new Point2D(p.x + b * (c2.y - c1.y), p.y - b * (c2.x - c1.x)));
              }

              return result;
            }
            /**
             *  intersectCircleEllipse
             *
             *  @param {module:kld-intersections.Point2D} cc
             *  @param {number} r
             *  @param {module:kld-intersections.Point2D} ec
             *  @param {number} rx
             *  @param {number} ry
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectCircleEllipse",
            value: function intersectCircleEllipse(cc, r, ec, rx, ry) {
              return Intersection.intersectEllipseEllipse(cc, r, r, ec, rx, ry);
            }
            /**
             *  intersectCircleLine
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} r
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectCircleLine",
            value: function intersectCircleLine(c, r, a1, a2) {
              var result;
              var a = (a2.x - a1.x) * (a2.x - a1.x) + (a2.y - a1.y) * (a2.y - a1.y);
              var b = 2 * ((a2.x - a1.x) * (a1.x - c.x) + (a2.y - a1.y) * (a1.y - c.y));
              var cc = c.x * c.x + c.y * c.y + a1.x * a1.x + a1.y * a1.y - 2 * (c.x * a1.x + c.y * a1.y) - r * r;
              var deter = b * b - 4 * a * cc;

              if (deter < 0) {
                result = new Intersection("Outside");
              } else if (deter === 0) {
                result = new Intersection("Tangent"); // NOTE: should calculate this point
              } else {
                var e = Math.sqrt(deter);
                var u1 = (-b + e) / (2 * a);
                var u2 = (-b - e) / (2 * a);

                if ((u1 < 0 || u1 > 1) && (u2 < 0 || u2 > 1)) {
                  if (u1 < 0 && u2 < 0 || u1 > 1 && u2 > 1) {
                    result = new Intersection("Outside");
                  } else {
                    result = new Intersection("Inside");
                  }
                } else {
                  result = new Intersection("Intersection");

                  if (0 <= u1 && u1 <= 1) {
                    result.points.push(a1.lerp(a2, u1));
                  }

                  if (0 <= u2 && u2 <= 1) {
                    result.points.push(a1.lerp(a2, u2));
                  }
                }
              }

              return result;
            }
            /**
             *  intersectCirclePolygon
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} r
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectCirclePolygon",
            value: function intersectCirclePolygon(c, r, points) {
              return Intersection.intersectCirclePolyline(c, r, closePolygon(points));
            }
            /**
             *  intersectCirclePolyline
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} r
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectCirclePolyline",
            value: function intersectCirclePolyline(c, r, points) {
              var result = new Intersection("No Intersection");
              var len = points.length;
              var inter;

              for (var i = 0; i < len - 1; i++) {
                var a1 = points[i];
                var a2 = points[i + 1];
                inter = Intersection.intersectCircleLine(c, r, a1, a2);
                result.appendPoints(inter.points);
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              } else {
                result.status = inter.status;
              }

              return result;
            }
            /**
             *  intersectCircleRectangle
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} r
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectCircleRectangle",
            value: function intersectCircleRectangle(c, r, r1, r2) {
              var min = r1.min(r2);
              var max = r1.max(r2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectCircleLine(c, r, min, topRight);
              var inter2 = Intersection.intersectCircleLine(c, r, topRight, max);
              var inter3 = Intersection.intersectCircleLine(c, r, max, bottomLeft);
              var inter4 = Intersection.intersectCircleLine(c, r, bottomLeft, min);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              } else {
                result.status = inter1.status;
              }

              return result;
            }
            /**
             *  intersectEllipseEllipse
             *
             *  This code is based on MgcIntr2DElpElp.cpp written by David Eberly.  His
             *  code along with many other excellent examples are avaiable at his site:
             *  http://www.magic-software.com
             *
             *  NOTE: Rotation will need to be added to this function
             *
             *  @param {module:kld-intersections.Point2D} c1
             *  @param {number} rx1
             *  @param {number} ry1
             *  @param {module:kld-intersections.Point2D} c2
             *  @param {number} rx2
             *  @param {number} ry2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectEllipseEllipse",
            value: function intersectEllipseEllipse(c1, rx1, ry1, c2, rx2, ry2) {
              var a = [ry1 * ry1, 0, rx1 * rx1, -2 * ry1 * ry1 * c1.x, -2 * rx1 * rx1 * c1.y, ry1 * ry1 * c1.x * c1.x + rx1 * rx1 * c1.y * c1.y - rx1 * rx1 * ry1 * ry1];
              var b = [ry2 * ry2, 0, rx2 * rx2, -2 * ry2 * ry2 * c2.x, -2 * rx2 * rx2 * c2.y, ry2 * ry2 * c2.x * c2.x + rx2 * rx2 * c2.y * c2.y - rx2 * rx2 * ry2 * ry2];
              var yPoly = bezout(a, b);
              var yRoots = yPoly.getRoots();
              var epsilon = 0.001;
              var norm0 = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * epsilon;
              var norm1 = (b[0] * b[0] + 2 * b[1] * b[1] + b[2] * b[2]) * epsilon;
              var result = new Intersection("No Intersection");

              for (var y = 0; y < yRoots.length; y++) {
                var xPoly = new Polynomial(a[0], a[3] + yRoots[y] * a[1], a[5] + yRoots[y] * (a[4] + yRoots[y] * a[2]));
                var xRoots = xPoly.getRoots();

                for (var x = 0; x < xRoots.length; x++) {
                  var tst = (a[0] * xRoots[x] + a[1] * yRoots[y] + a[3]) * xRoots[x] + (a[2] * yRoots[y] + a[4]) * yRoots[y] + a[5];

                  if (Math.abs(tst) < norm0) {
                    tst = (b[0] * xRoots[x] + b[1] * yRoots[y] + b[3]) * xRoots[x] + (b[2] * yRoots[y] + b[4]) * yRoots[y] + b[5];

                    if (Math.abs(tst) < norm1) {
                      result.appendPoint(new Point2D(xRoots[x], yRoots[y]));
                    }
                  }
                }
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectEllipseLine
             *
             *  NOTE: Rotation will need to be added to this function
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} rx
             *  @param {number} ry
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectEllipseLine",
            value: function intersectEllipseLine(c, rx, ry, a1, a2) {
              var result;
              var orign = new Vector2D(a1.x, a1.y);
              var dir = Vector2D.fromPoints(a1, a2);
              var center = new Vector2D(c.x, c.y);
              var diff = orign.subtract(center);
              var mDir = new Vector2D(dir.x / (rx * rx), dir.y / (ry * ry));
              var mDiff = new Vector2D(diff.x / (rx * rx), diff.y / (ry * ry));
              var a = dir.dot(mDir);
              var b = dir.dot(mDiff);
              c = diff.dot(mDiff) - 1;
              var d = b * b - a * c;

              if (d < 0) {
                result = new Intersection("Outside");
              } else if (d > 0) {
                var root = Math.sqrt(d); // eslint-disable-line no-shadow

                var t_a = (-b - root) / a;
                var t_b = (-b + root) / a;

                if ((t_a < 0 || 1 < t_a) && (t_b < 0 || 1 < t_b)) {
                  if (t_a < 0 && t_b < 0 || t_a > 1 && t_b > 1) {
                    result = new Intersection("Outside");
                  } else {
                    result = new Intersection("Inside");
                  }
                } else {
                  result = new Intersection("Intersection");

                  if (0 <= t_a && t_a <= 1) {
                    result.appendPoint(a1.lerp(a2, t_a));
                  }

                  if (0 <= t_b && t_b <= 1) {
                    result.appendPoint(a1.lerp(a2, t_b));
                  }
                }
              } else {
                var t = -b / a;

                if (0 <= t && t <= 1) {
                  result = new Intersection("Intersection");
                  result.appendPoint(a1.lerp(a2, t));
                } else {
                  result = new Intersection("Outside");
                }
              }

              return result;
            }
            /**
             *  intersectEllipsePolygon
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} rx
             *  @param {number} ry
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectEllipsePolygon",
            value: function intersectEllipsePolygon(c, rx, ry, points) {
              return Intersection.intersectEllipsePolyline(c, rx, ry, closePolygon(points));
            }
            /**
             *  intersectEllipsePolyline
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} rx
             *  @param {number} ry
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectEllipsePolyline",
            value: function intersectEllipsePolyline(c, rx, ry, points) {
              var result = new Intersection("No Intersection");
              var len = points.length;

              for (var i = 0; i < len - 1; i++) {
                var b1 = points[i];
                var b2 = points[i + 1];
                var inter = Intersection.intersectEllipseLine(c, rx, ry, b1, b2);
                result.appendPoints(inter.points);
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectEllipseRectangle
             *
             *  @param {module:kld-intersections.Point2D} c
             *  @param {number} rx
             *  @param {number} ry
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectEllipseRectangle",
            value: function intersectEllipseRectangle(c, rx, ry, r1, r2) {
              var min = r1.min(r2);
              var max = r1.max(r2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectEllipseLine(c, rx, ry, min, topRight);
              var inter2 = Intersection.intersectEllipseLine(c, rx, ry, topRight, max);
              var inter3 = Intersection.intersectEllipseLine(c, rx, ry, max, bottomLeft);
              var inter4 = Intersection.intersectEllipseLine(c, rx, ry, bottomLeft, min);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectLineLine
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} b1
             *  @param {module:kld-intersections.Point2D} b2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectLineLine",
            value: function intersectLineLine(a1, a2, b1, b2) {
              var result;
              var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
              var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
              var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

              if (u_b !== 0) {
                var ua = ua_t / u_b;
                var ub = ub_t / u_b;

                if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                  result = new Intersection("Intersection");
                  result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
                } else {
                  result = new Intersection("No Intersection");
                }
              } else if (ua_t === 0 || ub_t === 0) {
                result = new Intersection("Coincident");
              } else {
                result = new Intersection("Parallel");
              }

              return result;
            }
            /**
             *  intersectLinePolygon
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectLinePolygon",
            value: function intersectLinePolygon(a1, a2, points) {
              return Intersection.intersectLinePolyline(a1, a2, closePolygon(points));
            }
            /**
             *  intersectLinePolyline
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectLinePolyline",
            value: function intersectLinePolyline(a1, a2, points) {
              var result = new Intersection("No Intersection");
              var len = points.length;

              for (var i = 0; i < len - 1; i++) {
                var b1 = points[i];
                var b2 = points[i + 1];
                var inter = Intersection.intersectLineLine(a1, a2, b1, b2);
                result.appendPoints(inter.points);
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectLineRectangle
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectLineRectangle",
            value: function intersectLineRectangle(a1, a2, r1, r2) {
              var min = r1.min(r2);
              var max = r1.max(r2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectLineLine(min, topRight, a1, a2);
              var inter2 = Intersection.intersectLineLine(topRight, max, a1, a2);
              var inter3 = Intersection.intersectLineLine(max, bottomLeft, a1, a2);
              var inter4 = Intersection.intersectLineLine(bottomLeft, min, a1, a2);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectPolygonPolygon
             *
             *  @param {Array<module:kld-intersections.Point2D>} points1
             *  @param {Array<module:kld-intersections.Point2D>} points2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectPolygonPolygon",
            value: function intersectPolygonPolygon(points1, points2) {
              return Intersection.intersectPolylinePolyline(closePolygon(points1), closePolygon(points2));
            }
            /**
             *  intersectPolygonPolyline
             *
             *  @param {Array<module:kld-intersections.Point2D>} points1
             *  @param {Array<module:kld-intersections.Point2D>} points2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectPolygonPolyline",
            value: function intersectPolygonPolyline(points1, points2) {
              return Intersection.intersectPolylinePolyline(closePolygon(points1), points2);
            }
            /**
             *  intersectPolygonRectangle
             *
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectPolygonRectangle",
            value: function intersectPolygonRectangle(points, r1, r2) {
              return Intersection.intersectPolylineRectangle(closePolygon(points), r1, r2);
            }
            /**
             *  intersectPolylinePolyline
             *
             *  @param {Array<module:kld-intersections.Point2D>} points1
             *  @param {Array<module:kld-intersections.Point2D>} points2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectPolylinePolyline",
            value: function intersectPolylinePolyline(points1, points2) {
              var result = new Intersection("No Intersection");
              var len = points1.length;

              for (var i = 0; i < len - 1; i++) {
                var a1 = points1[i];
                var a2 = points1[i + 1];
                var inter = Intersection.intersectLinePolyline(a1, a2, points2);
                result.appendPoints(inter.points);
              }

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectPolylineRectangle
             *
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @param {module:kld-intersections.Point2D} r1
             *  @param {module:kld-intersections.Point2D} r2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectPolylineRectangle",
            value: function intersectPolylineRectangle(points, r1, r2) {
              var min = r1.min(r2);
              var max = r1.max(r2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectLinePolyline(min, topRight, points);
              var inter2 = Intersection.intersectLinePolyline(topRight, max, points);
              var inter3 = Intersection.intersectLinePolyline(max, bottomLeft, points);
              var inter4 = Intersection.intersectLinePolyline(bottomLeft, min, points);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectRectangleRectangle
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} b1
             *  @param {module:kld-intersections.Point2D} b2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectRectangleRectangle",
            value: function intersectRectangleRectangle(a1, a2, b1, b2) {
              var min = a1.min(a2);
              var max = a1.max(a2);
              var topRight = new Point2D(max.x, min.y);
              var bottomLeft = new Point2D(min.x, max.y);
              var inter1 = Intersection.intersectLineRectangle(min, topRight, b1, b2);
              var inter2 = Intersection.intersectLineRectangle(topRight, max, b1, b2);
              var inter3 = Intersection.intersectLineRectangle(max, bottomLeft, b1, b2);
              var inter4 = Intersection.intersectLineRectangle(bottomLeft, min, b1, b2);
              var result = new Intersection("No Intersection");
              result.appendPoints(inter1.points);
              result.appendPoints(inter2.points);
              result.appendPoints(inter3.points);
              result.appendPoints(inter4.points);

              if (result.points.length > 0) {
                result.status = "Intersection";
              }

              return result;
            }
            /**
             *  intersectRayRay
             *
             *  @param {module:kld-intersections.Point2D} a1
             *  @param {module:kld-intersections.Point2D} a2
             *  @param {module:kld-intersections.Point2D} b1
             *  @param {module:kld-intersections.Point2D} b2
             *  @returns {module:kld-intersections.Intersection}
             */

          }, {
            key: "intersectRayRay",
            value: function intersectRayRay(a1, a2, b1, b2) {
              var result;
              var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
              var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
              var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

              if (u_b !== 0) {
                var ua = ua_t / u_b;
                result = new Intersection("Intersection");
                result.points.push(new Point2D(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
              } else if (ua_t === 0 || ub_t === 0) {
                result = new Intersection("Coincident");
              } else {
                result = new Intersection("Parallel");
              }

              return result;
            }
          }]);

          return Intersection;
        }();
        /**
         * Build shapes for intersection
         */


        var Shapes = /*#__PURE__*/function () {
          function Shapes() {
            _classCallCheck(this || _global, Shapes);
          }

          _createClass(Shapes, null, [{
            key: "arc",

            /**
             *  arc
             *
             *  @deprecated use ShapeInfo.arc
             *  @param {number} centerX
             *  @param {number} centerY
             *  @param {number} radiusX
             *  @param {number} radiusY
             *  @param {number} startRadians
             *  @param {number} endRadians
             *  @returns {module:kld-intersections.ShapeInfo}
             */
            value: function arc(centerX, centerY, radiusX, radiusY, startRadians, endRadians) {
              return ShapeInfo.arc.apply(ShapeInfo, arguments);
            }
            /**
             *  quadraticBezier
             *
             *  @deprecated use ShapeInfo.quadraticBezier
             *  @param {number} p1x
             *  @param {number} p1y
             *  @param {number} p2x
             *  @param {number} p2y
             *  @param {number} p3x
             *  @param {number} p3y
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "quadraticBezier",
            value: function quadraticBezier(p1x, p1y, p2x, p2y, p3x, p3y) {
              return ShapeInfo.quadraticBezier.apply(ShapeInfo, arguments);
            }
            /**
             *  cubicBezier
             *
             *  @deprecated use ShapeInfo.cubicBezier
             *  @param {number} p1x
             *  @param {number} p1y
             *  @param {number} p2x
             *  @param {number} p2y
             *  @param {number} p3x
             *  @param {number} p3y
             *  @param {number} p4x
             *  @param {number} p4y
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "cubicBezier",
            value: function cubicBezier(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
              return ShapeInfo.cubicBezier.apply(ShapeInfo, arguments);
            }
            /**
             *  circle
             *
             *  @deprecated use ShapeInfo.circle
             *  @param {number} centerX
             *  @param {number} centerY
             *  @param {number} radius
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "circle",
            value: function circle(centerX, centerY, radius) {
              return ShapeInfo.circle.apply(ShapeInfo, arguments);
            }
            /**
             *  ellipse
             *
             *  @deprecated use ShapeInfo.ellipse
             *  @param {number} centerX
             *  @param {number} centerY
             *  @param {number} radiusX
             *  @param {number} radiusY
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "ellipse",
            value: function ellipse(centerX, centerY, radiusX, radiusY) {
              return ShapeInfo.ellipse.apply(ShapeInfo, arguments);
            }
            /**
             *  line
             *
             *  @deprecated use ShapeInfo.line
             *  @param {number} p1x
             *  @param {number} p1y
             *  @param {number} p2x
             *  @param {number} p2y
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "line",
            value: function line(p1x, p1y, p2x, p2y) {
              return ShapeInfo.line.apply(ShapeInfo, arguments);
            }
            /**
             *  path
             *
             *  @deprecated use ShapeInfo.path
             *  @param {string} pathData
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "path",
            value: function path(pathData) {
              return ShapeInfo.path.apply(ShapeInfo, arguments);
            }
            /**
             *  polygon
             *
             *  @deprecated use ShapeInfo.polygon
             *  @param {Array<number>} coords
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "polygon",
            value: function polygon(coords) {
              return ShapeInfo.polygon.apply(ShapeInfo, arguments);
            }
            /**
             *  polyline
             *
             *  @deprecated use ShapeInfo.polyline
             *  @param {Array<number>} coords
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "polyline",
            value: function polyline(coords) {
              return ShapeInfo.polyline.apply(ShapeInfo, arguments);
            }
            /**
             *  rectangle
             *
             *  @deprecated use ShapeInfo.rectangle
             *  @param {number} x
             *  @param {number} y
             *  @param {number} width
             *  @param {number} height
             *  @param {number} [rx]
             *  @param {number} [ry]
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "rectangle",
            value: function rectangle(x, y, width, height) {
              return ShapeInfo.rectangle.apply(ShapeInfo, arguments);
            }
          }]);

          return Shapes;
        }();
        /**
         * Build shapes for intersection
         */


        var AffineShapes = /*#__PURE__*/function () {
          function AffineShapes() {
            _classCallCheck(this || _global, AffineShapes);
          }

          _createClass(AffineShapes, null, [{
            key: "arc",

            /**
             *  arc
             *
             *  @deprecated use ShapeInfo.arc
             *  @param {module:kld-intersections.Point2D} center
             *  @param {number} radiusX
             *  @param {number} radiusY
             *  @param {number} startRadians
             *  @param {number} endRadians
             *  @returns {module:kld-intersections.ShapeInfo}
             */
            value: function arc(center, radiusX, radiusY, startRadians, endRadians) {
              return ShapeInfo.arc.apply(ShapeInfo, arguments);
            }
            /**
             *  quadraticBezier
             *
             *   @deprecated use ShapeInfo.quadraticBezier
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "quadraticBezier",
            value: function quadraticBezier(p1, p2, p3) {
              return ShapeInfo.quadraticBezier.apply(ShapeInfo, arguments);
            }
            /**
             *  cubicBezier
             *
             *  @deprecated use ShapeInfo.cubicBezier
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @param {module:kld-intersections.Point2D} p3
             *  @param {module:kld-intersections.Point2D} p4
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "cubicBezier",
            value: function cubicBezier(p1, p2, p3, p4) {
              return ShapeInfo.cubicBezier.apply(ShapeInfo, arguments);
            }
            /**
             *  circle
             *
             *  @deprecated use ShapeInfo.circle
             *  @param {module:kld-intersections.Point2D} center
             *  @param {number} radius
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "circle",
            value: function circle(center, radius) {
              return ShapeInfo.circle.apply(ShapeInfo, arguments);
            }
            /**
             *  ellipse
             *
             *  @deprecated use ShapeInfo.ellipse
             *  @param {module:kld-intersections.Point2D} center
             *  @param {number} radiusX
             *  @param {number} radiusY
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "ellipse",
            value: function ellipse(center, radiusX, radiusY) {
              return ShapeInfo.ellipse.apply(ShapeInfo, arguments);
            }
            /**
             *  line
             *
             *  @deprecated use ShapeInfo.line
             *  @param {module:kld-intersections.Point2D} p1
             *  @param {module:kld-intersections.Point2D} p2
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "line",
            value: function line(p1, p2) {
              return ShapeInfo.line.apply(ShapeInfo, arguments);
            }
            /**
             *  path
             *
             *  @deprecated use ShapeInfo.path
             *  @param {string} pathData
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "path",
            value: function path(pathData) {
              return ShapeInfo.path.apply(ShapeInfo, arguments);
            }
            /**
             *  polygon
             *
             *  @deprecated use ShapeInfo.polygon
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "polygon",
            value: function polygon(points) {
              return ShapeInfo.polygon.apply(ShapeInfo, arguments);
            }
            /**
             *  polyline
             *
             *  @deprecated use ShapeInfo.polyline
             *  @param {Array<module:kld-intersections.Point2D>} points
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "polyline",
            value: function polyline(points) {
              return ShapeInfo.polyline.apply(ShapeInfo, arguments);
            }
            /**
             *  rectangle
             *
             *  @deprecated use ShapeInfo.rectangle
             *  @param {module:kld-intersections.Point2D} topLeft
             *  @param {module:kld-intersections.Vector2D} size
             *  @param {number} [rx]
             *  @param {number} [ry]
             *  @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "rectangle",
            value: function rectangle(topLeft, size) {
              return ShapeInfo.rectangle.apply(ShapeInfo, arguments);
            }
          }]);

          return AffineShapes;
        }();

        var SvgShapes = /*#__PURE__*/function () {
          function SvgShapes() {
            _classCallCheck(this || _global, SvgShapes);
          }

          _createClass(SvgShapes, null, [{
            key: "circle",

            /**
             * circle
             *
             * @param {SVGCircleElement} circle
             * @returns {module:kld-intersections.ShapeInfo}
             */
            value: function circle(_circle) {
              if (_circle instanceof SVGCircleElement === false) {
                throw new TypeError("Expected SVGCircleElement, but found ".concat(_circle));
              }

              var center = new Point2D(_circle.cx.baseVal.value, _circle.cy.baseVal.value);
              var radius = _circle.r.baseVal.value;
              return ShapeInfo.circle(center, radius);
            }
            /**
             * ellipse
             *
             * @param {SVGEllipseElement} ellipse
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "ellipse",
            value: function ellipse(_ellipse) {
              if (_ellipse instanceof SVGEllipseElement === false) {
                throw new TypeError("Expected SVGEllipseElement, but found ".concat(_ellipse));
              }

              var center = new Point2D(_ellipse.cx.baseVal.value, _ellipse.cy.baseVal.value);
              var radiusX = _ellipse.rx.baseVal.value;
              var radiusY = _ellipse.ry.baseVal.value;
              return ShapeInfo.ellipse(center, radiusX, radiusY);
            }
            /**
             * line
             *
             * @param {SVGLineElement} line
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "line",
            value: function line(_line) {
              if (_line instanceof SVGLineElement === false) {
                throw new TypeError("Expected SVGLineElement, but found ".concat(_line));
              }

              var p1 = new Point2D(_line.x1.baseVal.value, _line.y1.baseVal.value);
              var p2 = new Point2D(_line.x2.baseVal.value, _line.y2.baseVal.value);
              return ShapeInfo.line(p1, p2);
            }
            /**
             * path
             *
             * @param {SVGPathElement} path
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "path",
            value: function path(_path) {
              if (_path instanceof SVGPathElement === false) {
                throw new TypeError("Expected SVGPathElement, but found ".concat(_path));
              }

              var pathData = _path.getAttributeNS(null, "d");

              return ShapeInfo.path(pathData);
            }
            /**
             * polygon
             *
             * @param {SVGPolygonElement} polygon
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "polygon",
            value: function polygon(_polygon) {
              if (_polygon instanceof SVGPolygonElement === false) {
                throw new TypeError("Expected SVGPolygonElement, but found ".concat(_polygon));
              }

              var points = [];

              for (var i = 0; i < _polygon.points.numberOfItems; i++) {
                var point = _polygon.points.getItem(i);

                points.push(new Point2D(point.x, point.y));
              }

              return ShapeInfo.polygon(points);
            }
            /**
             * polyline
             *
             * @param {SVGPolylineElement} polyline
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "polyline",
            value: function polyline(_polyline) {
              if (_polyline instanceof SVGPolylineElement === false) {
                throw new TypeError("Expected SVGPolylineElement, but found ".concat(_polyline));
              }

              var points = [];

              for (var i = 0; i < _polyline.points.numberOfItems; i++) {
                var point = _polyline.points.getItem(i);

                points.push(new Point2D(point.x, point.y));
              }

              return ShapeInfo.polyline(points);
            }
            /**
             * rect
             *
             * @param {SVGRectElement} rect
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "rect",
            value: function rect(_rect) {
              if (_rect instanceof SVGRectElement === false) {
                throw new TypeError("Expected SVGRectElement, but found ".concat(_rect));
              }

              return ShapeInfo.rectangle(_rect.x.baseVal.value, _rect.y.baseVal.value, _rect.width.baseVal.value, _rect.height.baseVal.value, _rect.rx.baseVal.value, _rect.ry.baseVal.value);
            }
            /**
             * element
             *
             * @param {SVGElement} element
             * @returns {module:kld-intersections.ShapeInfo}
             */

          }, {
            key: "element",
            value: function element(_element) {
              if (_element instanceof SVGElement === false) {
                throw new TypeError("Expected SVGElement, but found ".concat(_element));
              }
              /* eslint-disable-next-line prefer-destructuring */


              var tagName = _element.tagName;

              switch (tagName) {
                case "circle":
                  return SvgShapes.circle(_element);

                case "ellipse":
                  return SvgShapes.ellipse(_element);

                case "line":
                  return SvgShapes.line(_element);

                case "path":
                  return SvgShapes.path(_element);

                case "polygon":
                  return SvgShapes.polygon(_element);

                case "polyline":
                  return SvgShapes.polyline(_element);

                case "rect":
                  return SvgShapes.rect(_element);

                default:
                  throw new TypeError("Unrecognized element type: '".concat(tagName, "'"));
              }
            }
          }]);

          return SvgShapes;
        }();
        /**
         *
         *  IntersectionQuery.js
         *
         *  @copyright 2017 Kevin Lindsey
         * @module IntersectionQuery
         */

        /**
         * @namespace
         */


        var IntersectionQuery = {};
        /**
         *  pointInCircle
         *
         *  @param {module:kld-intersections.Point2D} point
         *  @param {module:kld-intersections.Point2D} center
         *  @param {number} radius
         *  @returns {boolean}
         */

        IntersectionQuery.pointInCircle = function (point, center, radius) {
          var v = Vector2D.fromPoints(center, point);
          return v.length() <= radius;
        };
        /**
         *  pointInEllipse
         *
         *  @param {module:kld-intersections.Point2D} point
         *  @param {module:kld-intersections.Point2D} center
         *  @param {number} radiusX
         *  @param {number} radiusY
         *  @returns {boolean}
         */


        IntersectionQuery.pointInEllipse = function (point, center, radiusX, radiusY) {
          var len = point.subtract(center);
          return len.x * len.x / (radiusX * radiusX) + len.y * len.y / (radiusY * radiusY) <= 1;
        };
        /**
         *  pointInPolyline
         *
         *  @param {module:kld-intersections.Point2D} point
         *  @param {Array<module:kld-intersections.Point2D>} points
         */


        IntersectionQuery.pointInPolyline = function (point, points) {
          var len = points.length;
          var counter = 0;
          var xInter;
          var p1 = points[0];

          for (var i = 1; i <= len; i++) {
            var p2 = points[i % len];
            var minY = Math.min(p1.y, p2.y);
            var maxY = Math.max(p1.y, p2.y);
            var maxX = Math.max(p1.x, p2.x);

            if (p1.y !== p2.y && minY < point.y && point.y <= maxY && point.x <= maxX) {
              xInter = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;

              if (p1.x === p2.x || point.x <= xInter) {
                counter++;
              }
            }

            p1 = p2;
          }

          return counter % 2 === 1;
        };
        /**
         *  pointInPolyline
         *
         *  @param {module:kld-intersections.Point2D} point
         *  @param {Array<module:kld-intersections.Point2D>} points
         */


        IntersectionQuery.pointInPolygon = IntersectionQuery.pointInPolyline;
        /**
         *  pointInRectangle
         *
         *  @param {module:kld-intersections.Point2D} point
         *  @param {module:kld-intersections.Point2D} topLeft
         *  @param {module:kld-intersections.Point2D} bottomRight
         *  @returns {boolean}
         */

        IntersectionQuery.pointInRectangle = function (point, topLeft, bottomRight) {
          return topLeft.x <= point.x && point.x < bottomRight.x && topLeft.y <= point.y && point.y < bottomRight.y;
        };

        exports.AffineShapes = AffineShapes;
        exports.Intersection = Intersection;
        exports.IntersectionArgs = ShapeInfo;
        exports.IntersectionQuery = IntersectionQuery;
        exports.Matrix2D = Matrix2D;
        exports.Point2D = Point2D;
        exports.ShapeInfo = ShapeInfo;
        exports.Shapes = Shapes;
        exports.SvgShapes = SvgShapes;
        exports.Vector2D = Vector2D;
        Object.defineProperty(exports, "__esModule", {
          value: true
        });
      });
      exports$1.AffineShapes;
            exports$1.Intersection;
            exports$1.IntersectionArgs;
            exports$1.IntersectionQuery;
            exports$1.Matrix2D;
            exports$1.Point2D;
            exports$1.ShapeInfo;
            exports$1.Shapes;
            exports$1.SvgShapes;
            exports$1.Vector2D;
            exports$1.__esModule;

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.components/widgets.js");
      __varRecorder__$1.obj = obj;
      __varRecorder__$1.num = num;
      __varRecorder__$1.arr = arr;
      __varRecorder__$1.properties = properties;
      __varRecorder__$1.pt = pt;
      __varRecorder__$1.Color = Color;
      __varRecorder__$1.Rectangle = Rectangle;
      __varRecorder__$1.signal = signal;
      __varRecorder__$1.connect = connect;
      __varRecorder__$1.disconnect = disconnect;
      __varRecorder__$1.Morph = Morph;
      __varRecorder__$1.ShadowObject = ShadowObject;
      __varRecorder__$1.HorizontalLayout = _missingExportShim;
      __varRecorder__$1.Path = Path$1;
      __varRecorder__$1.Ellipse = Ellipse;
      __varRecorder__$1.Label = Label;
      __varRecorder__$1.Icon = Icon;
      __varRecorder__$1.part = part;
      __varRecorder__$1.kld = exports$1;
      __varRecorder__$1.Menu = Menu;
      __varRecorder__$1.SystemTooltip = SystemTooltip;
      var destructured_1 = __varRecorder__$1.kld;
      __varRecorder__$1.Shapes = destructured_1.Shapes;
      __varRecorder__$1.Intersection = destructured_1.Intersection;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/widgets.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("LeashEndpoint") && typeof __lively_classholder__.LeashEndpoint === "function" ? __lively_classholder__.LeashEndpoint : __lively_classholder__.LeashEndpoint = function LeashEndpoint(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "dragTriggerDistance",
          get: function get() {
            return this.connectedMorph ? 20 : 0;
          }
        }, {
          key: "onDragStart",
          value: function LeashEndpoint_onDragStart_(evt) {
            var _evt$state = evt.state,
                lastDragPosition = _evt$state.lastDragPosition,
                clickedOnPosition = _evt$state.clickedOnPosition;
            evt.state.dragDelta = lastDragPosition.subPt(clickedOnPosition);
            evt.state.endpoint = this;
            this.leash.onEndpointDrag(evt);
          }
        }, {
          key: "canConnectTo",
          value: function LeashEndpoint_canConnectTo_(m) {
            return !m.isWorld && !m.isHaloItem && this.leash.canConnectTo(m) && !m.isHighlighter && !m.ownerChain().some(function (m) {
              return m.isHaloItem;
            });
          }
        }, {
          key: "onDrag",
          value: function LeashEndpoint_onDrag_(evt) {
            var _this = this;

            if (this.connectedMorph) {
              this.clearConnection();
            } else {
              var m = evt.hand.findDropTarget(evt.hand.globalPosition, [this.leash, this.leash.endPoint, this.leash.startPoint], function (m) {
                return _this.canConnectTo(m);
              });
              if (this.possibleTarget !== m && this.highlighter) this.highlighter.deactivate();
              this.possibleTarget = m;

              if (this.possibleTarget) {
                this.closestSide = this.possibleTarget.globalBounds().partNameNearest(__varRecorder__$1.obj.keys(__varRecorder__$1.Leash.connectionPoints), this.globalPosition);
                this.highlighter = $world.highlightMorph($world, this.possibleTarget, false, [this.closestSide]);
                this.highlighter.show();
                this.highlighter.get("name tag").value = this.leash.getLabelFor(this.possibleTarget);
              }
            }

            evt.state.endpoint = this;
            this.leash.onEndpointDrag(evt);
          }
        }, {
          key: "onDragEnd",
          value: function LeashEndpoint_onDragEnd_() {
            $world.removeHighlighters();

            if (this.possibleTarget && this.closestSide) {
              this.attachTo(this.possibleTarget, this.closestSide);
            }
          }
        }, {
          key: "getConnectionPoint",
          value: function LeashEndpoint_getConnectionPoint_() {
            var _this$connectedMorph = this.connectedMorph,
                isPath = _this$connectedMorph.isPath,
                isPolygon = _this$connectedMorph.isPolygon,
                vertices = _this$connectedMorph.vertices,
                origin = _this$connectedMorph.origin;
            var gb = this.connectedMorph.globalBounds();

            if ((isPath || isPolygon) && this.attachedSide !== "center") {
              var vs = vertices.map(function (_ref) {
                var x = _ref.x,
                    y = _ref.y;
                return __varRecorder__$1.pt(x, y).addPt(origin);
              });

              var ib = __varRecorder__$1.Rectangle.unionPts(vs);

              var side = ib[this.attachedSide]();
              var center = ib.center().addPt(ib.center().subPt(side));

              var line = __varRecorder__$1.Shapes.line(side.x, side.y, center.x, center.y);

              var path = __varRecorder__$1.Shapes.polyline(vs.map(function (_ref2) {
                var x = _ref2.x,
                    y = _ref2.y;
                return [x, y];
              }).flat());

              var _varRecorder__$arr$m = __varRecorder__$1.arr.min(__varRecorder__$1.Intersection.intersect(path, line).points, function (_ref3) {
                var x = _ref3.x,
                    y = _ref3.y;
                return __varRecorder__$1.pt(x, y).dist(side);
              }),
                  x = _varRecorder__$arr$m.x,
                  y = _varRecorder__$arr$m.y;

              return __varRecorder__$1.pt(x, y).addPt(gb.topLeft());
            } else {
              return gb[this.attachedSide]();
            }
          }
        }, {
          key: "update",
          value: function LeashEndpoint_update_(change) {
            if (change && !["position", "extent", "rotation", "scale"].includes(change.prop) && change.target !== this.connectedMorph) return;
            if (!this.connectedMorph) return;
            var globalPos = this.getConnectionPoint();
            var pos = this.leash.localize(globalPos);
            this.vertex.position = pos;
            this.relayout();
          }
        }, {
          key: "clearConnection",
          value: function LeashEndpoint_clearConnection_() {
            if (this.connectedMorph) {
              __varRecorder__$1.disconnect(this.connectedMorph, "onChange", this, "update");

              this.connectedMorph = null;
            }
          }
        }, {
          key: "relayout",
          value: function LeashEndpoint_relayout_(change) {
            var _this$vertex$position = this.vertex.position,
                x = _this$vertex$position.x,
                y = _this$vertex$position.y;
            var bw = this.leash.borderWidth;

            if (change && change.meta && change.meta.animation) {
              this.animate({
                center: __varRecorder__$1.pt(x + bw, y + bw),
                duration: change.duration
              });
            } else {
              this.center = __varRecorder__$1.pt(x + bw, y + bw);
            }
          }
        }, {
          key: "attachTo",
          value: function LeashEndpoint_attachTo_(morph, side) {
            this.clearConnection();
            if (!this.leash.world()) this.leash.openInWorld(morph.globalPosition);
            this.connectedMorph = morph;
            this.attachedSide = side;
            this.vertex.controlPoints = this.leash.controlPointsFor(side, this);
            this.update();

            __varRecorder__$1.connect(this.connectedMorph, "onChange", this, "update");
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "LeashEndpoint";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              index: {},
              leash: {},
              nativeCursor: {
                defaultValue: "-webkit-grab"
              },
              attachedSide: {},
              connectedMorph: {},
              draggable: {
                defaultValue: true
              },
              vertex: {
                after: ["leash"],
                get: function get() {
                  return this.leash.vertices[this.index];
                },
                set: function set(v) {
                  this.leash.vertices[this.index] = v;
                  this.leash.vertices = this.leash.vertices;
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./widgets.js";
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
          start: 467,
          end: 4781
        });
      })(__varRecorder__$1.Ellipse);

      var Leash = exports('h', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/widgets.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Leash") && typeof __lively_classholder__.Leash === "function" ? __lively_classholder__.Leash : __lively_classholder__.Leash = function Leash(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "onMouseDown",
          value: function Leash_onMouseDown_(evt) {
            this.updateEndpointStyles();
          }
        }, {
          key: "updateEndpointStyles",
          value: function Leash_updateEndpointStyles_() {
            Object.assign(this.startPoint, this.getEndpointStyle(0));
            Object.assign(this.endPoint, this.getEndpointStyle(1));
            this.relayout();
          }
        }, {
          key: "remove",
          value: function Leash_remove_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "remove", this).call(this);

            this.startPoint.clearConnection();
            this.endPoint.clearConnection();
          }
        }, {
          key: "onEndpointDrag",
          value: function Leash_onEndpointDrag_(evt) {
            var pos = evt.state.endpoint.vertex.position;
            evt.state.endpoint.vertex.position = pos.addPt(evt.state.dragDelta);
            this.relayout();
          }
        }, {
          key: "getEndpointStyle",
          value: function Leash_getEndpointStyle_(idx) {
            return Object.assign({}, this.endpointStyle, {}, idx === 0 ? this.endpointStyle.start : this.endpointStyle.end);
          }
        }, {
          key: "endpoint",
          value: function Leash_endpoint_(idx) {
            var leash = this;
            var _leash$vertices$idx = leash.vertices[idx],
                x = _leash$vertices$idx.x,
                y = _leash$vertices$idx.y;
            return new __varRecorder__$1.LeashEndpoint({
              index: idx,
              leash: this,
              position: __varRecorder__$1.pt(x, y)
            });
          }
        }, {
          key: "controlPointsFor",
          value: function Leash_controlPointsFor_(side, endpoint) {
            var next = __varRecorder__$1.Leash.connectionPoints[side];
            next = endpoint === this.startPoint ? next.negated() : next;
            return {
              previous: next.scaleBy(100),
              next: next.negated().scaleBy(100)
            };
          }
        }, {
          key: "relayout",
          value: function Leash_relayout_(change) {
            if (change && !["vertices", "position"].includes(change.prop)) return;
            this.startPoint.relayout(change);
            this.endPoint.relayout(change);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Leash";
          }
        }, {
          key: "connectionPoints",
          get: function get() {
            return {
              topCenter: __varRecorder__$1.pt(0, -1),
              topLeft: __varRecorder__$1.pt(-1, -1),
              rightCenter: __varRecorder__$1.pt(1, 0),
              bottomRight: __varRecorder__$1.pt(1, 1),
              bottomCenter: __varRecorder__$1.pt(0, 1),
              bottomLeft: __varRecorder__$1.pt(-1, 1),
              leftCenter: __varRecorder__$1.pt(-1, 0),
              topRight: __varRecorder__$1.pt(1, -1),
              center: __varRecorder__$1.pt(0, 0)
            };
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              start: {
                defaultValue: __varRecorder__$1.pt(0, 0)
              },
              end: {
                defaultValue: __varRecorder__$1.pt(0, 0)
              },
              canConnectTo: {
                defaultValue: function defaultValue(m) {
                  return true;
                }
              },
              getLabelFor: {
                defaultValue: function defaultValue(m) {
                  return m.name;
                }
              },
              reactsToPointer: {
                defaultValue: false
              },
              acceptsDroppedMorphs: {
                defaultValue: false
              },
              direction: {
                type: "Enum",
                values: ["unidirectional", "outward", "inward"],
                defaultValue: "unidirectional"
              },
              endpointStyle: {
                isStyleProp: true,
                defaultValue: {
                  fill: __varRecorder__$1.Color.black,
                  origin: __varRecorder__$1.pt(3.5, 3.5),
                  extent: __varRecorder__$1.pt(10, 10),
                  nativeCursor: "-webkit-grab"
                }
              },
              borderWidth: {
                defaultValue: 2
              },
              borderColor: {
                defaultValue: __varRecorder__$1.Color.black
              },
              fill: {
                defaultValue: __varRecorder__$1.Color.transparent
              },
              vertices: {
                after: ["start", "end", "borderWidth"],
                initialize: function initialize() {
                  this.vertices = [this.start, this.end];
                }
              },
              submorphs: {
                initialize: function initialize() {
                  this.submorphs = [this.startPoint = this.endpoint(0), this.endPoint = this.endpoint(1)];

                  __varRecorder__$1.connect(this, "onChange", this, "relayout");

                  this.updateEndpointStyles();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./widgets.js";
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
          start: 4790,
          end: 7807
        });
      }(__varRecorder__$1.Path));
      __varRecorder__$1.Leash = Leash;
      __varRecorder__$1.Leash = Leash;
      var Slider = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/widgets.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("Slider") && typeof __lively_classholder__.Slider === "function" ? __lively_classholder__.Slider : __lively_classholder__.Slider = function Slider(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "normalize",
          value: function Slider_normalize_(v) {
            return Math.abs(v / (this.max - this.min));
          }
        }, {
          key: "update",
          value: function Slider_update_() {
            var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
            var x = (this.width - 15) * this.normalize(v);
            this.getSubmorphNamed("slideHandle").center = __varRecorder__$1.pt(x + 7.5, 10);
          }
        }, {
          key: "onSlide",
          value: function Slider_onSlide_(slideHandle, delta) {
            var oldValue = this.value;

            var newValue = __varRecorder__$1.num.roundTo(oldValue + delta.x / this.width, 0.01);

            var v = Math.max(this.min, Math.min(this.max, newValue));
            this.value = v;
            this.update(v);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "Slider";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              value: {},
              min: {},
              max: {},
              height: {
                defaultValue: 20
              },
              fill: {
                defaultValue: __varRecorder__$1.Color.transparent
              },
              draggable: {
                defaultValue: false
              },
              submorphs: {
                after: ["value", "max", "min"],
                initialize: function initialize() {
                  var handle = new __varRecorder__$1.SliderHandle({
                    slider: this,
                    name: "slideHandle"
                  });
                  this.submorphs = [new __varRecorder__$1.Path({
                    borderColor: __varRecorder__$1.Color.gray.darker(),
                    borderWidth: 2,
                    vertices: [__varRecorder__$1.pt(0, 0), __varRecorder__$1.pt(this.width, 0)],
                    position: __varRecorder__$1.pt(0, this.height / 2)
                  }), handle];

                  __varRecorder__$1.connect(this, "extent", this, "update");

                  this.update();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./widgets.js";
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
          start: 7815,
          end: 9156
        });
      }(__varRecorder__$1.Morph);
      __varRecorder__$1.Slider = Slider;
      __varRecorder__$1.Slider = Slider;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/widgets.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SliderHandle") && typeof __lively_classholder__.SliderHandle === "function" ? __lively_classholder__.SliderHandle : __lively_classholder__.SliderHandle = function SliderHandle(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "onDragStart",
          value: function SliderHandle_onDragStart_(evt) {
            this.valueView = __varRecorder__$1.part(__varRecorder__$1.SystemTooltip, {
              description: ""
            }).openInWorld(evt.hand.position.addXY(10, 10));
          }
        }, {
          key: "onDrag",
          value: function SliderHandle_onDrag_(evt) {
            this.slider.onSlide(this, evt.state.dragDelta);
            this.valueView.description = this.slider.value;
            this.valueView.position = evt.hand.position.addXY(10, 10);
          }
        }, {
          key: "onDragEnd",
          value: function SliderHandle_onDragEnd_(evt) {
            this.valueView.remove();
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SliderHandle";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              slider: {},
              fill: {
                defaultValue: __varRecorder__$1.Color.gray
              },
              borderColor: {
                defaultValue: __varRecorder__$1.Color.gray.darker()
              },
              borderWidth: {
                defaultValue: 1
              },
              dropShadow: {
                defaultValue: new __varRecorder__$1.ShadowObject({
                  blur: 5
                })
              },
              extent: {
                defaultValue: __varRecorder__$1.pt(15, 15)
              },
              nativeCursor: {
                defaultValue: "-webkit-grab"
              },
              draggable: {
                defaultValue: true
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./widgets.js";
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
          start: 9158,
          end: 10113
        });
      })(__varRecorder__$1.Ellipse);

      var DropDownSelector = exports('f', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/widgets.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("DropDownSelector") && typeof __lively_classholder__.DropDownSelector === "function" ? __lively_classholder__.DropDownSelector : __lively_classholder__.DropDownSelector = function DropDownSelector(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "build",
          value: function DropDownSelector_build_() {
            this.dropDownLabel = __varRecorder__$1.Icon.makeLabel("chevron-circle-down", {
              opacity: 0,
              name: "dropDownIcon"
            });
            this.submorphs = [{
              type: "label",
              name: "currentValue"
            }, this.dropDownLabel];
          }
        }, {
          key: "getMenuEntries",
          value: function DropDownSelector_getMenuEntries_() {
            var _this2 = this;

            var currentValue = this.getNameFor(this.selectedValue);
            return [].concat(_toConsumableArray(this.selectedValue !== undefined ? [{
              command: currentValue,
              target: this
            }] : []), _toConsumableArray(__varRecorder__$1.arr.compact(this.commands.map(function (c) {
              return c.name !== currentValue && {
                command: c.name,
                target: _this2
              };
            }))));
          }
        }, {
          key: "commands",
          get: function get() {
            var _this3 = this;

            if (__varRecorder__$1.obj.isArray(this.values)) {
              return this.values.map(function (v) {
                return {
                  name: String(v),
                  exec: function exec() {
                    __varRecorder__$1.signal(_this3, "update", v);

                    _this3.selectedValue = v;
                  }
                };
              });
            } else {
              return __varRecorder__$1.properties.forEachOwn(this.values, function (name, v) {
                return {
                  name: name,
                  exec: function exec() {
                    __varRecorder__$1.signal(_this3, "update", v);

                    _this3.selectedValue = v;
                  }
                };
              });
            }
          }
        }, {
          key: "getNameFor",
          value: function DropDownSelector_getNameFor_(value) {
            if (this.getCurrentValue) return this.getCurrentValue();

            if (__varRecorder__$1.obj.isArray(this.values)) {
              return __varRecorder__$1.obj.safeToString(value);
            } else {
              return __varRecorder__$1.obj.safeToString(__varRecorder__$1.properties.nameFor(this.values, value));
            }
          }
        }, {
          key: "relayout",
          value: function DropDownSelector_relayout_() {
            var vPrinted = this.getNameFor(this.selectedValue);
            var valueLabel = this.get("currentValue");

            if (vPrinted === "undefined") {
              valueLabel.value = "Not set";
              valueLabel.fontColor = __varRecorder__$1.Color.gray;
            } else {
              valueLabel.value = vPrinted;
              valueLabel.fontColor = __varRecorder__$1.Color.black;
            }
          }
        }, {
          key: "onHoverIn",
          value: function DropDownSelector_onHoverIn_() {
            this.dropDownLabel.animate({
              opacity: 1,
              duration: 300
            });
          }
        }, {
          key: "onHoverOut",
          value: function DropDownSelector_onHoverOut_() {
            this.dropDownLabel.animate({
              opacity: 0,
              duration: 200
            });
          }
        }, {
          key: "onMouseDown",
          value: function DropDownSelector_onMouseDown_(evt) {
            var eventState = this.env.eventDispatcher.eventState;
            if (eventState.menu) eventState.menu.remove();
            eventState.menu = this.getMenuEntries() && this.getMenuEntries().length ? __varRecorder__$1.Menu.openAtHand(this.getMenuEntries(), {
              hand: evt && evt.hand
            }) : null;
            this.menu = eventState.menu;
            this.menu.hasFixedPosition = true;
            this.menu.topLeft = this.globalPosition;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "DropDownSelector";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              values: {
                defaultValue: []
              },
              getCurrentValue: {
                defaultValue: undefined
              },
              selectedValue: {
                after: ["submorphs", "values", "getCurrentValue"],
                set: function set(v) {
                  this.setProperty("selectedValue", v);
                  this.relayout();
                }
              },
              fontColor: {
                isStyleProp: true,
                defaultValue: __varRecorder__$1.Color.black
              },
              fontSize: {
                isStyleProp: true,
                defaultValue: 12
              },
              fontFamily: {
                isStyleProp: true,
                defaultValue: "IBM Plex Sans"
              },
              border: {
                defaultValue: {
                  radius: 3,
                  color: __varRecorder__$1.Color.gray.darker(),
                  style: "solid"
                }
              },
              padding: {
                defaultValue: 1
              },
              isSelected: {
                defaultValue: "false",
                set: function set(v) {
                  this.setProperty("isSelected", v);
                  this.fontColor = v ? __varRecorder__$1.Color.white : __varRecorder__$1.Color.black;
                }
              },
              layout: {
                initialize: function initialize() {
                  this.layout = new __varRecorder__$1.HorizontalLayout({
                    spacing: this.padding
                  });
                }
              },
              submorphs: {
                initialize: function initialize() {
                  this.build();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./widgets.js";
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
          start: 10122,
          end: 13822
        });
      }(__varRecorder__$1.Morph));
      __varRecorder__$1.DropDownSelector = DropDownSelector;
      __varRecorder__$1.DropDownSelector = DropDownSelector;

      var widgets = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Leash: Leash,
        Slider: Slider,
        DropDownSelector: DropDownSelector
      });

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.components/index.js");
      Object.assign(__varRecorder__, __captured1__);
      Object.assign(__varRecorder__, __captured2__);
      Object.assign(__varRecorder__, __captured3__);
      Object.assign(__varRecorder__, __captured4__);
      Object.assign(__varRecorder__, __captured5__);
      Object.assign(__varRecorder__, __captured6__);
      Object.assign(__varRecorder__, __captured7__);
      __varRecorder__.Window = Window;
      __varRecorder__.prompts = prompts;
      __varRecorder__.widgets = widgets;
      __varRecorder__.LoadingIndicator = LoadingIndicator;
      __varRecorder__.addClassMappings = addClassMappings;
      __varRecorder__.List = List;
      __varRecorder__.DropDownList = DropDownList;
      __varRecorder__.Button = Button;

      __varRecorder__.addClassMappings({
        list: __varRecorder__.List,
        dropdownlist: __varRecorder__.DropDownList,
        button: __varRecorder__.Button
      });
      __varRecorder__.Window = Window;
      __varRecorder__.LoadingIndicator = LoadingIndicator;
      __varRecorder__.prompts = prompts;
      __varRecorder__.widgets = widgets;

    })
  };
}));
