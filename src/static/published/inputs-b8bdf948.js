System.register(['./__rootModule___commonjs-entry-2a340242.js'], (function (exports) {
  'use strict';
  var component, part, TilingLayout, ViewModel, Icon, Color, initializeClass, Morph, Range, morph, HTMLMorph, Text, pt, Rectangle, signal, connect, noUpdate, arr, obj, num, _asyncToGenerator, _toConsumableArray, _slicedToArray;
  return {
    setters: [function (module) {
      component = module.c;
      part = module.p;
      TilingLayout = module.T;
      ViewModel = module.V;
      Icon = module.j;
      Color = module.C;
      initializeClass = module.i;
      Morph = module.M;
      Range = module.e9;
      morph = module.a1;
      HTMLMorph = module.a3;
      Text = module.h;
      pt = module.b;
      Rectangle = module.R;
      signal = module.s;
      connect = module.a;
      noUpdate = module.aI;
      arr = module.q;
      obj = module.y;
      num = module.aq;
      _asyncToGenerator = module._;
      _toConsumableArray = module.w;
      _slicedToArray = module.t;
    }],
    execute: (function () {

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.components/helpers.cp.js");
      __varRecorder__$1.component = component;
      __varRecorder__$1.part = part;
      __varRecorder__$1.TilingLayout = TilingLayout;
      __varRecorder__$1.ViewModel = ViewModel;
      __varRecorder__$1.Icon = Icon;
      __varRecorder__$1.Color = Color;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/helpers.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InformIconModel") && typeof __lively_classholder__.InformIconModel === "function" ? __lively_classholder__.InformIconModel : __lively_classholder__.InformIconModel = function InformIconModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function InformIconModel_viewDidLoad_() {
            this.view.tooltip = this.information;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InformIconModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              information: {
                defaultValue: "This is important information!"
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./helpers.cp.js";
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
          start: 123,
          end: 368
        });
      })(__varRecorder__$1.ViewModel);

      var InformIconOnLight = exports('a', __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          defaultViewModel: __varRecorder__$1.InformIconModel,
          type: "label",
          textAndAttributes: __varRecorder__$1.Icon.textAttribute("circle-info"),
          fontColor: __varRecorder__$1.Color.darkGray
        });
      }, {
        module: "lively.components/helpers.cp.js",
        "export": "InformIconOnLight",
        range: {
          start: 383,
          end: 555
        }
      }, __varRecorder__$1.InformIconOnLight));
      __varRecorder__$1.InformIconOnLight = InformIconOnLight;
      __varRecorder__$1.InformIconOnLight = InformIconOnLight;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/helpers.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InputLineErrorModel") && typeof __lively_classholder__.InputLineErrorModel === "function" ? __lively_classholder__.InputLineErrorModel : __lively_classholder__.InputLineErrorModel = function InputLineErrorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "viewDidLoad",
          value: function InputLineErrorModel_viewDidLoad_() {
            this.ui.errorLabel.textString = this.information + " ";
            this.ui.exclamationMark.tooltip = this.tooltip;
            this.view.tooltip = this.tooltip;
            this.view.height = this.height;
            this.ui.errorLabel.fontSize = this.fontsize;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InputLineErrorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              tooltip: {},
              height: {},
              fontSize: {
                defaultValue: 20
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./helpers.cp.js";
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
          start: 558,
          end: 1010
        });
      })(__varRecorder__$1.InformIconModel);

      var InputLineError = __varRecorder__$1.component["for"](function () {
        return __varRecorder__$1.component({
          name: "input line error",
          defaultViewModel: __varRecorder__$1.InputLineErrorModel,
          layout: new __varRecorder__$1.TilingLayout({
            axisAlign: "center",
            hugContentsHorizontally: true,
            renderViaCSS: false
          }),
          submorphs: [{
            name: "error label",
            type: "label",
            textString: "an error",
            fontSize: 20,
            fontColor: __varRecorder__$1.Color.red,
            fill: __varRecorder__$1.Color.white.withA(0.9)
          }, __varRecorder__$1.part(__varRecorder__$1.InformIconOnLight, {
            name: "exclamation mark",
            fontColor: __varRecorder__$1.Color.red,
            fontSize: 20
          })]
        });
      }, {
        module: "lively.components/helpers.cp.js",
        "export": "InputLineError",
        range: {
          start: 1025,
          end: 1519
        }
      }, __varRecorder__$1.InputLineError);
      __varRecorder__$1.InputLineError = InputLineError;
      __varRecorder__$1.InputLineError = InputLineError;

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.components/inputs.js");
      __varRecorder__.Morph = Morph;
      __varRecorder__.part = part;
      __varRecorder__.Range = Range;
      __varRecorder__.Icon = Icon;
      __varRecorder__.morph = morph;
      __varRecorder__.HTMLMorph = HTMLMorph;
      __varRecorder__.Text = Text;
      __varRecorder__.ViewModel = ViewModel;
      __varRecorder__.pt = pt;
      __varRecorder__.Rectangle = Rectangle;
      __varRecorder__.Color = Color;
      __varRecorder__.signal = signal;
      __varRecorder__.connect = connect;
      __varRecorder__.noUpdate = noUpdate;
      __varRecorder__.arr = arr;
      __varRecorder__.obj = obj;
      __varRecorder__.num = num;
      __varRecorder__.InputLineError = InputLineError;
      var InputLine = exports('I', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/inputs.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("InputLine") && typeof __lively_classholder__.InputLine === "function" ? __lively_classholder__.InputLine : __lively_classholder__.InputLine = function InputLine(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function InputLine_initialize_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);

            __varRecorder__.connect(this, "textChange", this, "onInputChanged");

            __varRecorder__.connect(this, "selectionChange", this, "fixCursor");

            return _this;
          }
        }, {
          key: "menuItems",
          value: function () {
            var _InputLine_menuItems_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = [{
                        command: "change placeholder",
                        target: this
                      }, {
                        isDivider: true
                      }];
                      _context.t1 = _toConsumableArray;
                      _context.next = 4;
                      return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "menuItems", this).call(this);

                    case 4:
                      _context.t2 = _context.sent;
                      _context.t3 = (0, _context.t1)(_context.t2);
                      return _context.abrupt("return", _context.t0.concat.call(_context.t0, _context.t3));

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function InputLine_menuItems_() {
              return _InputLine_menuItems_.apply(this, arguments);
            }

            return InputLine_menuItems_;
          }()
        }, {
          key: "onChange",
          value: function InputLine_onChange_(change) {
            if (["extent", "fontSize", "padding", "fontFamily", "position", "selection"].includes(change.prop)) {
              this.updatePlaceholder();
            }

            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);
          }
        }, {
          key: "isInputLine",
          get: function get() {
            return true;
          }
        }, {
          key: "allowDuplicatesInHistory",
          get: function get() {
            return false;
          }
        }, {
          key: "resetHistory",
          value: function InputLine_resetHistory_() {
            this.inputHistory = {
              items: [],
              max: 50,
              index: 0
            };
          }
        }, {
          key: "inputHistory",
          get: function get() {
            if (this._inputHistory) return this._inputHistory;
            return this._inputHistory = this.historyId ? this.constructor.getHistory(this.historyId) : {
              items: [],
              max: 30,
              index: 0
            };
          }
        }, {
          key: "inputHistory",
          set: function set(hist) {
            this._inputHistory = hist;
            this.historyId && this.constructor.setHistory(this.historyId, this._inputHistory);
          }
        }, {
          key: "placeholderMorph",
          get: function get() {
            return this.get("placeholder");
          }
        }, {
          key: "deactivate",
          value: function InputLine_deactivate_() {
            this.clear();
            this.readOnly = true;
            this.disabled = true;
            this.nativeCursor = "not-allowed";
            this.placeholderMorph.opacity = 0.4;
          }
        }, {
          key: "activate",
          value: function InputLine_activate_() {
            this.disabled = false;
            this.readOnly = false;
            this.nativeCursor = "text";
            this.placeholderMorph.opacity = 1;
          }
        }, {
          key: "clear",
          value: function InputLine_clear_() {
            this.input = "";
          }
        }, {
          key: "focus",
          value: function InputLine_focus_() {
            this.fixCursor();

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "focus", this).call(this);
          }
        }, {
          key: "onBlur",
          value: function InputLine_onBlur_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onBlur", this).call(this, evt);

            this.updatePlaceholder();
          }
        }, {
          key: "fitToLineHeight",
          value: function InputLine_fitToLineHeight_() {
            this.height = this.defaultLineHeight + this.padding.top() + this.padding.bottom();
          }
        }, {
          key: "indicateError",
          value: function () {
            var _InputLine_indicateError_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(message, tooltip) {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.clearError();
                      this.borderColor = __varRecorder__.Color.red;
                      this._errorIcon = this.addMorph(__varRecorder__.part(__varRecorder__.InputLineError, {
                        viewModel: {
                          information: message,
                          tooltip: tooltip,
                          height: this.height
                        }
                      }));
                      this._errorIcon.opacity = 1;
                      this._errorIcon.right = this.width - 30;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function InputLine_indicateError_(_x, _x2) {
              return _InputLine_indicateError_.apply(this, arguments);
            }

            return InputLine_indicateError_;
          }()
        }, {
          key: "clearError",
          value: function InputLine_clearError_() {
            if (!this._errorIcon) return;
            this._errorIcon && this._errorIcon.remove();
            this._errorIcon = null;
            this.borderColor = __varRecorder__.Color.transparent;
          }
        }, {
          key: "updatePlaceholder",
          value: function InputLine_updatePlaceholder_() {
            var placeholder = this.getSubmorphNamed("placeholder");
            if (!placeholder) return;

            if (this.input.length) {
              placeholder.visible = false;
              return;
            }

            var textB = this.innerBounds();
            placeholder.fontSize = this.fontSize;
            placeholder.visible = true;
            placeholder.height = this.height;
            placeholder.padding = this.padding;
            if (placeholder.fit) placeholder.fit();
            placeholder.topLeft = this.label.length ? textB.topLeft().addXY(0, this.borderWidth) : textB.topLeft().withX(0);
          }
        }, {
          key: "fixCursor",
          value: function InputLine_fixCursor_() {
            if (!this.label) return;
            var leadIndex = this.positionToIndex(this.selection.lead);

            if (leadIndex < this.label.length) {
              this.selection.lead = this.indexToPosition(this.label.length);
            }

            var anchorIndex = this.positionToIndex(this.selection.anchor);

            if (anchorIndex < this.label.length) {
              this.selection.anchor = this.indexToPosition(this.label.length);
            }
          }
        }, {
          key: "acceptInput",
          value: function InputLine_acceptInput_() {
            var i = this.input;
            this.onInput(i);
            return i;
          }
        }, {
          key: "onInput",
          value: function InputLine_onInput_(input) {
            if (this.input.length > 0) this.addInputToHistory(this.input);
            this.clearOnInput && this.clear();

            __varRecorder__.signal(this, "inputAccepted", input);
          }
        }, {
          key: "onInputChanged",
          value: function InputLine_onInputChanged_(change) {
            __varRecorder__.signal(this, "inputChanged", change);

            this.clearError();
            this.updatePlaceholder();
          }
        }, {
          key: "onMouseDown",
          value: function InputLine_onMouseDown_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseDown", this).call(this, evt);

            this._errorIcon && this._errorIcon.remove();
          }
        }, {
          key: "deleteText",
          value: function InputLine_deleteText_(range) {
            range = range.isRange ? range : new __varRecorder__.Range(range);
            if (range.isEmpty()) return;
            range = range.subtract({
              start: {
                row: 0,
                column: 0
              },
              end: {
                row: 0,
                column: this.label.length
              }
            })[0];
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "deleteText", this).call(this, range);
          }
        }, {
          key: "addInputToHistory",
          value: function InputLine_addInputToHistory_(input) {
            var hist = this.inputHistory;
            var items = hist.items;
            if (__varRecorder__.arr.last(items) === input) return;
            items.push(input);

            if (items.length > hist.max) {
              hist.items = items = items.slice(-hist.max);
            }

            hist.index = items.length - 1;

            if (!this.allowDuplicatesInHistory) {
              for (var i = hist.items.length - 1; i--;) {
                if (hist.items[i] === input) {
                  hist.items.splice(i, 1);
                  hist.index--;
                }
              }
            }

            this.historyId && this.constructor.addHistoryToLocalStorage(this.historyId, hist);
          }
        }, {
          key: "browseHistory",
          value: function () {
            var _InputLine_browseHistory_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var items, _yield$this$world$fil, _yield$this$world$fil2, item;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      items = this.inputHistory.items.map(function (item, i) {
                        return {
                          isListItem: true,
                          string: item,
                          value: i
                        };
                      }).reverse();
                      _context3.next = 3;
                      return this.world().filterableListPrompt("Choose item:", items, {
                        commands: [this.histEditCommandForHistBrowse()]
                      });

                    case 3:
                      _yield$this$world$fil = _context3.sent;
                      _yield$this$world$fil2 = _slicedToArray(_yield$this$world$fil.selected, 1);
                      item = _yield$this$world$fil2[0];
                      typeof item === "number" && this.setAndShowHistItem(item);
                      this.focus();

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function InputLine_browseHistory_() {
              return _InputLine_browseHistory_.apply(this, arguments);
            }

            return InputLine_browseHistory_;
          }()
        }, {
          key: "histEditCommandForHistBrowse",
          value: function InputLine_histEditCommandForHistBrowse_() {
            var _this2 = this;

            return {
              name: "edit history " + this.historyId,
              exec: function () {
                var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(prompt) {
                  var items, _yield$prompt$world$e, status, values;

                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          items = _this2.inputHistory.items.slice().reverse();
                          _context4.next = 3;
                          return prompt.world().editListPrompt("edit history " + _this2.historyId, items);

                        case 3:
                          _yield$prompt$world$e = _context4.sent;
                          status = _yield$prompt$world$e.status;
                          values = _yield$prompt$world$e.list;

                          if (!(status === "canceled")) {
                            _context4.next = 8;
                            break;
                          }

                          return _context4.abrupt("return", true);

                        case 8:
                          items = items.filter(function (ea) {
                            return ea.isListItem ? values.includes(ea.value) : values.includes(ea);
                          });
                          _this2.inputHistory = Object.assign({}, _this2.inputHistory, {
                            items: items
                          });
                          prompt.get("list").items = items.map(function (item, i) {
                            return {
                              isListItem: true,
                              string: item,
                              value: i
                            };
                          }).reverse();
                          return _context4.abrupt("return", true);

                        case 12:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                function exec(_x3) {
                  return _exec.apply(this, arguments);
                }

                return exec;
              }()
            };
          }
        }, {
          key: "setAndShowHistItem",
          value: function InputLine_setAndShowHistItem_(idx) {
            var hist = this.inputHistory;
            var items = hist.items;
            var len = items.length - 1;
            var i = idx;
            if (!__varRecorder__.num.between(i, 0, len + 1)) hist.index = i = len;else hist.index = i;
            if (this.input !== items[i] && typeof items[i] !== "undefined") this.input = items[i];
          }
        }, {
          key: "showHistItem",
          value: function InputLine_showHistItem_(dir) {
            dir = dir || "next";
            var hist = this.inputHistory;
            var items = hist.items;
            var len = items.length - 1;
            var i = hist.index;
            if (!__varRecorder__.num.between(i, 0, len + 1)) hist.index = i = len;

            if (this.input !== items[i] && typeof items[i] !== "undefined") {
              this.input = items[i];
              return;
            }

            if (dir === "next") {
              if (i > len) return;
              i = ++hist.index;
            } else {
              if (i <= 0) return;
              i = --hist.index;
            }

            this.input = items[i] || "";
          }
        }, {
          key: "commands",
          get: function get() {
            var _this3 = this;

            return [{
              name: "change placeholder",
              exec: function () {
                var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  var newPlaceholder;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this3.world().prompt("Enter Placeholder:", {
                            input: _this3.placeholder
                          });

                        case 2:
                          newPlaceholder = _context5.sent;
                          if (newPlaceholder) _this3.placeholder = newPlaceholder;

                        case 4:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                function exec() {
                  return _exec2.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "accept input",
              exec: function exec() {
                _this3.acceptInput();

                return true;
              }
            }, {
              name: "show previous input from history",
              exec: function exec() {
                _this3.showHistItem("prev");

                return true;
              }
            }, {
              name: "show next input from history",
              exec: function exec() {
                _this3.showHistItem("next");

                return true;
              }
            }, {
              name: "browse history",
              exec: function exec() {
                _this3.browseHistory();

                return true;
              }
            }, {
              name: "remove items from history",
              exec: function () {
                var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(inputLine) {
                  var hist, items, _yield$inputLine$worl, selected;

                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          hist = inputLine.inputHistory;
                          items = hist.items.map(function (item, i) {
                            return {
                              isListItem: true,
                              string: item,
                              value: i
                            };
                          }).reverse();
                          _context6.next = 4;
                          return inputLine.world().filterableListPrompt("Choose items to delete:", items, {
                            multiSelect: true
                          });

                        case 4:
                          _yield$inputLine$worl = _context6.sent;
                          selected = _yield$inputLine$worl.selected;
                          selected.reverse().forEach(function (index) {
                            if (index < hist.index) hist.index--;
                            hist.items.splice(index, 1);
                          });
                          inputLine.inputHistory = hist;
                          return _context6.abrupt("return", true);

                        case 9:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function exec(_x4) {
                  return _exec3.apply(this, arguments);
                }

                return exec;
              }()
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this));
          }
        }, {
          key: "keybindings",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this).concat([{
              keys: "Enter",
              command: "accept input"
            }, {
              keys: {
                mac: "Meta-S",
                win: "Ctrl-S"
              },
              command: "accept input"
            }, {
              keys: "Up|Ctrl-Up|Alt-P",
              command: "show previous input from history"
            }, {
              keys: "Down|Ctrl-Down|Alt-N",
              command: "show next input from history"
            }, {
              keys: "Alt-H",
              command: "browse history"
            }, {
              keys: "Alt-Shift-H",
              command: "remove items from history"
            }]);
          }
        }, {
          key: "htmlExport_transformNode",
          value: function InputLine_htmlExport_transformNode_(node) {
            var doc = node.getRootNode();
            var input = doc.createElement("input");
            var textCSSProps = ["padding", "font-family", "font-weight", "font-style", "text-decoration", "font-size", "color"];
            var textLayer = node.querySelector(".newtext-text-layer.actual");
            input.id = node.id;
            input.className = node.className;
            input.style = node.style.cssText;
            Object.assign(input.style, __varRecorder__.obj.select(textLayer.style, textCSSProps));
            input.placeholder = this.placeholder;
            input.type = "text";
            input.autocomplete = input.name = this.name.replace(/[\s"]/g, "-");
            return input;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "InputLine";
          }
        }, {
          key: "getHistoryFromLocalSorage",
          value: function InputLine_getHistoryFromLocalSorage_(id) {
            if (typeof localStorage === "undefined") return null;

            try {
              var hist = localStorage.getItem("lively.morphic-inputline-" + id);
              return hist ? JSON.parse(hist) : null;
            } catch (e) {
              return null;
            }
          }
        }, {
          key: "addHistoryToLocalStorage",
          value: function InputLine_addHistoryToLocalStorage_(id, hist) {
            if (typeof localStorage === "undefined") return;

            try {
              localStorage.setItem("lively.morphic-inputline-" + id, JSON.stringify(hist));
            } catch (e) {
              console.error(e);
            }
          }
        }, {
          key: "histories",
          get: function get() {
            if (!this._histories) this._histories = new Map();
            return this._histories;
          }
        }, {
          key: "getHistory",
          value: function InputLine_getHistory_(id) {
            var hist = this.histories.get(id);
            if (hist) return hist;
            hist = this.getHistoryFromLocalSorage(id) || {
              items: [],
              max: 50,
              index: 0
            };
            this.histories.set(id, hist);
            return hist;
          }
        }, {
          key: "setHistory",
          value: function InputLine_setHistory_(id) {
            var hist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              items: [],
              max: 50,
              index: 0
            };
            this.histories.set(id, hist);
            this.addHistoryToLocalStorage(id, hist);
            return hist;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              readOnly: {
                defaultValue: false
              },
              fixedWidth: {
                defaultValue: true
              },
              fixedHeight: {
                defaultValue: true
              },
              extent: {
                defaultValue: __varRecorder__.pt(100, 20)
              },
              padding: {
                defaultValue: __varRecorder__.Rectangle.inset(2, 4)
              },
              clipMode: {
                defaultValue: "hidden"
              },
              lineWrapping: {
                defaultValue: false
              },
              historyId: {
                defaultValue: null
              },
              clearOnInput: {
                defaultValue: false
              },
              selectionMode: {
                defaultValue: "lively"
              },
              nativeCursor: {
                defaultValue: "text"
              },
              label: {
                after: ["textAndAttributes", "extent", "padding", "submorphs"],
                defaultValue: "",
                set: function set(value) {
                  var _this4 = this;

                  this.setProperty("label", value);
                  if (this.textString.startsWith(value)) return;

                  __varRecorder__.noUpdate(function () {
                    _this4.textString = value + _this4.input;
                  });
                }
              },
              input: {
                after: ["label"],
                derived: true,
                get: function get() {
                  return this.textString.slice(this.label.length);
                },
                set: function set(val) {
                  this.textString = this.label + (val ? String(val) : "");
                  this.updatePlaceholder();
                }
              },
              placeholder: {
                after: ["submorphs", "label", "defaultTextStyle"],
                dervied: true,
                get: function get() {
                  var placeholder = this.getSubmorphNamed("placeholder");
                  return placeholder ? placeholder.value : null;
                },
                set: function set(val) {
                  var placeholder = this.getSubmorphNamed("placeholder");

                  if (!val) {
                    if (placeholder) {
                      placeholder.remove();
                      placeholder = null;
                    }
                  } else {
                    if (!placeholder) {
                      placeholder = this.addMorph(__varRecorder__.Text.makeLabel(val, Object.assign({}, this.defaultTextStyle, {
                        name: "placeholder",
                        reactsToPointer: false,
                        fontColor: __varRecorder__.Color.gray
                      })));
                    } else {
                      placeholder.defaultTextStyle = Object.assign({}, this.defaultTextStyle, {
                        fontColor: __varRecorder__.Color.gray
                      });
                      placeholder.value = val;
                    }
                  }

                  this.updatePlaceholder();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./inputs.js";
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
          start: 313,
          end: 15895
        });
      }(__varRecorder__.Text));
      __varRecorder__.InputLine = InputLine;
      __varRecorder__.InputLine = InputLine;
      var PasswordInputLine = exports('P', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.components/inputs.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("PasswordInputLine") && typeof __lively_classholder__.PasswordInputLine === "function" ? __lively_classholder__.PasswordInputLine : __lively_classholder__.PasswordInputLine = function PasswordInputLine(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function PasswordInputLine_initialize_() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, opts);
            this.onLoad();
            return _this;
          }
        }, {
          key: "onChange",
          value: function PasswordInputLine_onChange_(change) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onChange", this).call(this, change);

            if (["fill", "borderRadius"].includes(change.prop)) {
              this.updateHtml(this.input);
            }
          }
        }, {
          key: "onLoad",
          value: function () {
            var _PasswordInputLine_onLoad_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.ensureInputNode().then(function (node) {
                        _this5.updateHtml(_this5.input);

                        node.onkeydown = function (evt) {
                          return _this5.env.eventDispatcher.dispatchDOMEvent(evt, _this5, "onKeyDown");
                        };

                        node.onkeyup = function (evt) {
                          return _this5.env.eventDispatcher.dispatchDOMEvent(evt, _this5, "onKeyUp");
                        };
                      });

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function PasswordInputLine_onLoad_() {
              return _PasswordInputLine_onLoad_.apply(this, arguments);
            }

            return PasswordInputLine_onLoad_;
          }()
        }, {
          key: "onMouseDown",
          value: function PasswordInputLine_onMouseDown_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onMouseDown", this).call(this, evt);

            this._errorIcon && this._errorIcon.remove();
          }
        }, {
          key: "ensureInputNode",
          value: function PasswordInputLine_ensureInputNode_() {
            var _this6 = this;

            return this.whenEnvReady().then(function () {
              var n = _this6.domNode;

              if (n.parentNode && n.parentNode.tagName === "INPUT") {
                n.parentNode.remove();

                var morphNode = _this6.env.renderer.getNodeForMorph(_this6);

                morphNode.insertBefore(_this6.domNode, morphNode.firstChild);
              }

              return _this6.domNode;
            });
          }
        }, {
          key: "onKeyDown",
          value: function PasswordInputLine_onKeyDown_(evt) {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onKeyDown", this).call(this, evt);

            if (this.input !== this.lastInput) {
              this.onInputChanged(this.input);
            }

            this.lastInput = this.input;
          }
        }, {
          key: "focus",
          value: function PasswordInputLine_focus_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "focus", this).call(this);

            this.domNode && this.domNode.focus();
          }
        }, {
          key: "onFocus",
          value: function PasswordInputLine_onFocus_(evt) {
            var _this7 = this;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onFocus", this).call(this, evt);

            if (this._originalShadow) return;
            this._originalShadow = this.dropShadow;
            this.withAnimationDo(function () {
              _this7.withMetaDo({
                skipReconciliation: true
              }, function () {
                if (_this7.highlightWhenFocused) _this7.dropShadow = _this7.haloShadow;
              });
            }, {
              duration: 200
            });
          }
        }, {
          key: "onBlur",
          value: function PasswordInputLine_onBlur_(evt) {
            var _this8 = this;

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "onBlur", this).call(this, evt);

            this.withAnimationDo(function () {
              _this8.withMetaDo({
                skipReconciliation: true
              }, function () {
                if (_this8.highlightWhenFocused) _this8.dropShadow = _this8._originalShadow || null;
              });
            }, {
              duration: 200
            });
            this._originalShadow = null;
          }
        }, {
          key: "indicateError",
          value: function () {
            var _PasswordInputLine_indicateError_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(message) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.clearError();
                      this.borderWidth = 3;
                      this.borderColor = __varRecorder__.Color.red;
                      this._errorIcon = this.addMorph(this._errorIcon || __varRecorder__.morph({
                        type: "label",
                        value: [" " + message, {
                          fontSize: 18
                        }, " ", {}].concat(_toConsumableArray(__varRecorder__.Icon.textAttribute("exclamation-circle", {
                          paddingTop: "2px"
                        }))),
                        fontSize: 20,
                        fontColor: __varRecorder__.Color.red,
                        opacity: 0,
                        reactsToPointer: false,
                        fill: __varRecorder__.Color.white.withA(0.9)
                      }));
                      this._errorIcon.opacity = 1;
                      this._errorIcon.rightCenter = this.innerBounds().insetBy(10).rightCenter();

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function PasswordInputLine_indicateError_(_x5) {
              return _PasswordInputLine_indicateError_.apply(this, arguments);
            }

            return PasswordInputLine_indicateError_;
          }()
        }, {
          key: "clearError",
          value: function PasswordInputLine_clearError_() {
            if (!this._errorIcon) return;
            this._errorIcon && this._errorIcon.remove();
            this._errorIcon = null;
            this.borderColor = __varRecorder__.Color.transparent;
          }
        }, {
          key: "acceptInput",
          value: function PasswordInputLine_acceptInput_() {
            var i = this.input;

            __varRecorder__.signal(this, "inputAccepted", i);

            return i;
          }
        }, {
          key: "onInputChanged",
          value: function PasswordInputLine_onInputChanged_(change) {
            this.clearError();

            __varRecorder__.signal(this, "inputChanged", change);
          }
        }, {
          key: "updateHtml",
          value: function () {
            var _PasswordInputLine_updateHtml_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(input) {
              var fontSize, fontFamily, padding, placeholder, _this$fill, fill, borderRadius, padt, padr, padb, padl, n;

              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      fontSize = this.fontSize, fontFamily = this.fontFamily, padding = this.padding, placeholder = this.placeholder, _this$fill = this.fill, fill = _this$fill === void 0 ? Color.white : _this$fill, borderRadius = this.borderRadius;
                      padt = padding.top();
                      padr = padding.right();
                      padb = padding.bottom();
                      padl = padding.left();
                      _context9.next = 7;
                      return this.ensureInputNode();

                    case 7:
                      n = _context9.sent;
                      n.setAttribute("type", "password");
                      n.setAttribute("placeholder", placeholder);
                      n.setAttribute("value", input);
                      Object.assign(n.style, {
                        position: "absolute",
                        width: "calc(100% - ".concat(padl, "px - ").concat(padr, "px)"),
                        "border-width": 0,
                        outline: "none",
                        "border-radius": "".concat(borderRadius.valueOf(), "px"),
                        background: fill.toString(),
                        padding: "".concat(padt, "px ").concat(padr, "px ").concat(padb, "px ").concat(padl, "px"),
                        "font-size": "".concat(fontSize, "px"),
                        "font-family": "".concat(fontFamily)
                      });

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function PasswordInputLine_updateHtml_(_x6) {
              return _PasswordInputLine_updateHtml_.apply(this, arguments);
            }

            return PasswordInputLine_updateHtml_;
          }()
        }, {
          key: "commands",
          get: function get() {
            var _this9 = this;

            return [{
              name: "accept input",
              exec: function exec() {
                _this9.acceptInput();

                return true;
              }
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this));
          }
        }, {
          key: "keybindings",
          get: function get() {
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this).concat([{
              keys: "Enter",
              command: "accept input"
            }, {
              keys: {
                mac: "Meta-S",
                win: "Ctrl-S"
              },
              command: "accept input"
            }]);
          }
        }, {
          key: "htmlExport_transformNode",
          value: function PasswordInputLine_htmlExport_transformNode_(node) {
            var doc = node.getRootNode();
            var wrapper = doc.createElement("div");
            var oldInput = node.querySelector("input");
            var input = doc.createElement("input");
            var textCSSProps = ["padding", "font-family", "font-weight", "font-style", "text-decoration", "font-size", "border-radius", "color"];

            if (oldInput.childNodes[0] && oldInput.childNodes[0].tagName === "INPUT") {
              oldInput = oldInput.childNodes[0];
            }

            input.id = node.id;
            input.className = node.className;
            wrapper.style = node.style.cssText;
            Object.assign(input.style, __varRecorder__.obj.select(oldInput.style, textCSSProps));
            input.style.position = "absolute";
            input.style.width = node.style.width;
            input.style.height = node.style.height;
            input.style["border-width"] = node.style["border-width"];
            input.placeholder = this.placeholder;
            input.type = "password";
            input.autocomplete = input.name = this.name.replace(/[\s"]/g, "-");
            wrapper.appendChild(input);
            wrapper.appendChild(node.childNodes[1]);
            return wrapper;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "PasswordInputLine";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              extent: {
                defaultValue: __varRecorder__.pt(100, 20)
              },
              html: {
                derived: true,
                initialize: function initialize() {},
                get: function get() {
                  return "";
                },
                set: function set(x) {}
              },
              highlightWhenFocused: {
                defaultValue: true
              },
              isPasswordInput: {
                get: function get() {
                  return true;
                }
              },
              haloShadow: {
                type: "Shadow"
              },
              domNodeTagName: {
                readOnly: true,
                get: function get() {
                  return "input";
                }
              },
              domNodeStyle: {
                readOnly: true,
                get: function get() {
                  return "background: grey";
                }
              },
              input: {
                derived: true,
                after: ["domNode"],
                get: function get() {
                  return this.domNode && this.domNode.value || "";
                },
                set: function set(val) {
                  this.domNode.value = val;
                  this.updateHtml(this.input);
                }
              },
              placeholder: {
                after: ["domNode"],
                set: function set(val) {
                  this.setProperty("placeholder", val);
                  this.updateHtml(this.input);
                }
              },
              fontSize: {
                isStyleProp: true,
                defaultValue: 12,
                after: ["input"],
                set: function set(value) {
                  this.setProperty("fontSize", value);
                  this.updateHtml(this.input);
                }
              },
              fontFamily: {
                isStyleProp: true,
                defaultValue: "IBM Plex Sans",
                after: ["input"],
                set: function set(value) {
                  this.setProperty("fontFamily", value);
                  this.updateHtml(this.input);
                }
              },
              padding: {
                isStyleProp: true,
                defaultValue: __varRecorder__.Rectangle.inset(2),
                after: ["input"],
                set: function set(value) {
                  this.setProperty("padding", value);
                  this.updateHtml(this.input);
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./inputs.js";
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
          start: 15969,
          end: 23373
        });
      }(__varRecorder__.HTMLMorph));
      __varRecorder__.PasswordInputLine = PasswordInputLine;
      __varRecorder__.PasswordInputLine = PasswordInputLine;

    })
  };
}));
