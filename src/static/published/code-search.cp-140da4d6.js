System.register(['./__rootModule___commonjs-entry-2a340242.js', './index-57981d2f.js', './loading-indicator.cp-680c2ecd.js', './ui.cp-46daffed.js'], (function (exports, module) {
  'use strict';
  var fun, arr, obj, string, pt, Color, Rectangle, config, connect, noUpdate, initializeClass, _asyncToGenerator, _slicedToArray, Icon, TilingLayout, component, part, rect, Label, Window, InputLineDefault, LoadingIndicator, FilterableList, DropDownList, DefaultList, SystemList, ButtonDefault, localInterface, callService, ProgressMonitor, show;
  return {
    setters: [function (module) {
      fun = module.x;
      arr = module.q;
      obj = module.y;
      string = module.u;
      pt = module.b;
      Color = module.C;
      Rectangle = module.R;
      config = module.z;
      connect = module.a;
      noUpdate = module.aI;
      initializeClass = module.i;
      _asyncToGenerator = module._;
      _slicedToArray = module.t;
      Icon = module.j;
      TilingLayout = module.T;
      component = module.c;
      part = module.p;
      rect = module.a8;
      Label = module.L;
    }, function (module) {
      Window = module.W;
      InputLineDefault = module.a;
    }, function (module) {
      LoadingIndicator = module.L;
      FilterableList = module.F;
      DropDownList = module.k;
      DefaultList = module.v;
      SystemList = module.a;
      ButtonDefault = module.q;
    }, function (module) {
      localInterface = module.l;
      callService = module.t;
      ProgressMonitor = module.u;
      show = module.s;
    }],
    execute: (function () {

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.ide/code-search.js");

      function doSearch(_x, _x2) {
        return _doSearch.apply(this, arguments);
      }

      function _doSearch() {
        _doSearch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(livelySystem, searchTerm) {
          var excludedModules,
              excludedPackages,
              includeUnloaded,
              caseSensitive,
              regexMode,
              progress,
              searchResult,
              _varRecorder__$arr$p,
              _varRecorder__$arr$p2,
              errors,
              found,
              _args5 = arguments;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  excludedModules = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : [/systemjs-plugin-babel|.*\.min\.js|.*browserified[^/]+js|landing-page|loading-screen/];
                  excludedPackages = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : [];
                  includeUnloaded = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : true;
                  caseSensitive = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : false;
                  regexMode = _args5.length > 6 && _args5[6] !== undefined ? _args5[6] : false;
                  progress = _args5.length > 7 ? _args5[7] : undefined;

                  if (!(searchTerm.length <= 2)) {
                    _context5.next = 8;
                    break;
                  }

                  return _context5.abrupt("return", []);

                case 8:
                  if (!(!System.get("@system-env").worker && __varRecorder__$1.config.ide.workerEnabled)) {
                    _context5.next = 12;
                    break;
                  }

                  _context5.next = 11;
                  return __varRecorder__$1.callService("doSearch", {
                    livelySystem: livelySystem,
                    searchTerm: searchTerm,
                    excludedModules: excludedModules,
                    excludedPackages: excludedPackages,
                    includeUnloaded: includeUnloaded,
                    caseSensitive: caseSensitive,
                    regexMode: regexMode,
                    progress: progress
                  });

                case 11:
                  return _context5.abrupt("return", _context5.sent);

                case 12:
                  _context5.next = 14;
                  return livelySystem.searchInAllPackages(searchTerm, {
                    caseSensitive: caseSensitive,
                    regexMode: regexMode,
                    excludedModules: excludedModules,
                    excludedPackages: excludedPackages,
                    includeUnloaded: includeUnloaded,
                    progress: progress
                  });

                case 14:
                  searchResult = _context5.sent;
                  _varRecorder__$arr$p = __varRecorder__$1.arr.partition(searchResult, function (_ref2) {
                    var isError = _ref2.isError;
                    return isError;
                  }), _varRecorder__$arr$p2 = _slicedToArray(_varRecorder__$arr$p, 2), errors = _varRecorder__$arr$p2[0], found = _varRecorder__$arr$p2[1];

                  if (errors.length) {
                    __varRecorder__$1.show("Errors in search results:\n".concat(__varRecorder__$1.arr.pluck(errors, "value").join("\n")));
                  }

                  return _context5.abrupt("return", found.reduce(function (result, ea) {
                    var nameAndLine = "".concat(ea.packageName, "/").concat(ea.pathInPackage, ":").concat(ea.line);
                    result.maxModuleNameLength = Math.max(result.maxModuleNameLength, nameAndLine.length);
                    result.items.push({
                      isListItem: true,
                      value: ea,

                      get string() {
                        return nameAndLine + ea.lineString;
                      }

                    });
                    return result;
                  }, {
                    items: [],
                    maxModuleNameLength: 0
                  }).items);

                case 18:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _doSearch.apply(this, arguments);
      }

      __varRecorder__$1.doSearch = doSearch;
      __varRecorder__$1.fun = fun;
      __varRecorder__$1.arr = arr;
      __varRecorder__$1.obj = obj;
      __varRecorder__$1.string = string;
      __varRecorder__$1.pt = pt;
      __varRecorder__$1.Color = Color;
      __varRecorder__$1.Rectangle = Rectangle;
      __varRecorder__$1.config = config;
      __varRecorder__$1.connect = connect;
      __varRecorder__$1.noUpdate = noUpdate;
      __varRecorder__$1.localInterface = localInterface;
      __varRecorder__$1.LoadingIndicator = LoadingIndicator;
      __varRecorder__$1.Window = Window;
      __varRecorder__$1.FilterableList = FilterableList;
      __varRecorder__$1.callService = callService;
      __varRecorder__$1.ProgressMonitor = ProgressMonitor;
      __varRecorder__$1.show = show;
      __varRecorder__$1.ModeButtonActive = ModeButtonActive;
      __varRecorder__$1.ModeButtonDisabled = ModeButtonDisabled;
      __varRecorder__$1.ModeButtonInactiveClick = ModeButtonInactiveClick;
      __varRecorder__$1.ModeButtonInactiveHover = ModeButtonInactiveHover;
      __varRecorder__$1.ModeButtonInactive = ModeButtonInactive;
      __varRecorder__$1.ModeButtonActiveClick = ModeButtonActiveClick;
      __varRecorder__$1.ModeButtonActiveHover = ModeButtonActiveHover;
      __varRecorder__$1.doSearch = doSearch;
      var CodeSearcher = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/code-search.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("CodeSearcher") && typeof __lively_classholder__.CodeSearcher === "function" ? __lively_classholder__.CodeSearcher : __lively_classholder__.CodeSearcher = function CodeSearcher(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function CodeSearcher_initialize_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _this;

            if (props.targetBrowser) props.browser = props.targetBrowser;
            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            this.reset();
            return _this;
          }
        }, {
          key: "onLoad",
          value: function CodeSearcher_onLoad_() {
            this.reset();
          }
        }, {
          key: "relayout",
          value: function CodeSearcher_relayout_() {}
        }, {
          key: "reset",
          value: function CodeSearcher_reset_() {
            var _this2 = this;

            this.caseModeActive = false;
            this.regexModeActive = false;
            this.currentSearchTerm = "";

            __varRecorder__$1.connect(this, "accepted", this, "openSelection");

            this.get("list").items = [];
            this.get("input").input = "";
            this.get("search chooser").items = ["in loaded modules", "in loaded and unloaded modules"];

            __varRecorder__$1.noUpdate(function () {
              _this2.get("search chooser").selection = "in loaded modules";
            });

            this.getWindow() && (this.getWindow().title = "code search");

            __varRecorder__$1.connect(this.get("caseMode").viewModel, "fire", this, "caseModeToggled", {
              converter: "() => target.searchModeToggled(\"case\")"
            });

            __varRecorder__$1.connect(this.get("regexMode").viewModel, "fire", this, "regexModeToggled", {
              converter: "() => target.searchModeToggled(\"regex\")"
            });

            __varRecorder__$1.connect(this.get("search chooser").viewModel, "selection", this, "handleSpecialSearchModes");

            __varRecorder__$1.connect(this.get("search chooser").viewModel, "selection", this, "searchAgain");

            __varRecorder__$1.connect(this.get("reload").viewModel, "fire", this, "searchAgain");

            __varRecorder__$1.connect(this.get("input"), "inputChanged", this, "updateFilter");

            __varRecorder__$1.connect(this.get("list"), "selection", this, "selectionChanged");

            __varRecorder__$1.connect(this.get("list"), "onItemMorphDoubleClicked", this, "acceptInput");
          }
        }, {
          key: "handleSpecialSearchModes",
          value: function CodeSearcher_handleSpecialSearchModes_() {
            this.caseModeActive = false;
            this.regexModeActive = false;
            [this.get("caseMode"), this.get("regexMode")].forEach(function (button) {
              return button.master = {
                auto: __varRecorder__$1.ModeButtonInactive,
                hover: __varRecorder__$1.ModeButtonInactiveHover,
                click: __varRecorder__$1.ModeButtonInactiveClick
              };
            });
          }
        }, {
          key: "searchModeToggled",
          value: function CodeSearcher_searchModeToggled_(type) {
            var button = type === "case" ? this.get("caseMode") : this.get("regexMode");
            var active;

            if (type === "case") {
              this.caseModeActive = !this.caseModeActive;
              active = this.caseModeActive;
            }

            if (type === "regex") {
              this.regexModeActive = !this.regexModeActive;
              active = this.regexModeActive;
            }

            if (active) {
              button.master = {
                auto: __varRecorder__$1.ModeButtonActive,
                hover: __varRecorder__$1.ModeButtonActiveHover,
                click: __varRecorder__$1.ModeButtonActiveClick
              };
            } else {
              button.master = {
                auto: __varRecorder__$1.ModeButtonInactive,
                hover: __varRecorder__$1.ModeButtonInactiveHover,
                click: __varRecorder__$1.ModeButtonInactiveClick
              };
            }

            this.searchAgain();
          }
        }, {
          key: "ensureIndicator",
          value: function CodeSearcher_ensureIndicator_(label, progress) {
            if (!this.progressIndicator) {
              var win = this.getWindow();
              this.progressIndicator = this.addMorph(__varRecorder__$1.LoadingIndicator.open("Searching Files", {
                isLayoutable: false
              }));
              if (win) this.progressIndicator.center = win.innerBounds().center();
            }

            this.progressIndicator.label = "Searching Files";
            this.progressIndicator.status = label;
            if (progress) this.progressIndicator.progress = progress;
          }
        }, {
          key: "removeIndicator",
          value: function CodeSearcher_removeIndicator_() {
            if (this.progressIndicator) this.progressIndicator.remove();
            this.progressIndicator = null;
          }
        }, {
          key: "updateFilter",
          value: function CodeSearcher_updateFilter_() {
            var _this3 = this;

            var searchInput = this.get("input").textString;
            if (searchInput.length <= 2) return;
            this.ensureIndicator("receiving input...");

            __varRecorder__$1.fun.debounceNamed(this.id + "updateFilterDebounced", 1200, /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(needle) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _this3.removeIndicator();

                        _context.prev = 1;
                        _context.next = 4;
                        return _this3.searchAndUpdate(needle);

                      case 4:
                        _context.next = 9;
                        break;

                      case 6:
                        _context.prev = 6;
                        _context.t0 = _context["catch"](1);

                        _this3.world().logError(_context.t0);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[1, 6]]);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }())(searchInput);
          }
        }, {
          key: "searchAgain",
          value: function CodeSearcher_searchAgain_() {
            var needle = this.currentSearchTerm;
            if (needle <= 2) return;
            this.getSubmorphNamed("list").items = [];
            this.currentSearchTerm = "";
            this.searchAndUpdate(needle);
          }
        }, {
          key: "searchAndUpdate",
          value: function () {
            var _CodeSearcher_searchAndUpdate_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(searchInput) {
              var _this4 = this;

              var filterTokens, win, searchTerm, newSearch, searchType, searchInModules, searchInAllModules, progressMonitor, filteredItems;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.get("input").acceptInput();
                      filterTokens = searchInput.split(/\s+/).filter(function (ea) {
                        return !!ea;
                      });
                      win = this.getWindow();

                      if (win && win.targetMorph === this) {
                        win.title = "".concat(win.title.split("-")[0].trim(), " - ").concat(filterTokens.join(" + "));
                      }

                      searchTerm = filterTokens.shift();
                      newSearch = searchTerm !== this.currentSearchTerm;

                      if (!newSearch) {
                        _context2.next = 19;
                        break;
                      }

                      this.currentSearchTerm = searchTerm;
                      searchType = this.get("search chooser").selection;
                      searchInModules = searchType === "in loaded modules";
                      searchInAllModules = searchType === "in loaded and unloaded modules";
                      this.ensureIndicator("searching...");
                      progressMonitor = new __varRecorder__$1.ProgressMonitor({
                        handlers: {
                          loadingIndicatorUpdater: function loadingIndicatorUpdater(step, percentage) {
                            _this4.ensureIndicator(step, percentage);
                          }
                        }
                      });

                      if (!(searchInModules || searchInAllModules)) {
                        _context2.next = 17;
                        break;
                      }

                      _context2.next = 16;
                      return __varRecorder__$1.doSearch(this.systemInterface, searchTerm, undefined, __varRecorder__$1.config.ide.js.ignoredPackages, !!searchInAllModules, this.caseModeActive, this.regexModeActive, progressMonitor);

                    case 16:
                      this.items = _context2.sent;

                    case 17:
                      this.removeIndicator();
                      this.progressIndicator = null;

                    case 19:
                      filterTokens = filterTokens.map(function (ea) {
                        return ea.toLowerCase();
                      });

                      if (newSearch || this.currentFilters !== filterTokens.join("+")) {
                        this.currentFilters = filterTokens.join("+");
                        filteredItems = this.items.filter(function (item) {
                          return filterTokens.every(function (token) {
                            return item.string.toLowerCase().includes(token);
                          });
                        });
                        this.get("list").items = filteredItems;
                      }

                    case 21:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function CodeSearcher_searchAndUpdate_(_x4) {
              return _CodeSearcher_searchAndUpdate_.apply(this, arguments);
            }

            return CodeSearcher_searchAndUpdate_;
          }()
        }, {
          key: "openSelection",
          value: function () {
            var _CodeSearcher_openSelection_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var sel;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      sel = this.selection;

                      if (sel) {
                        _context3.next = 3;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 3:
                      return _context3.abrupt("return", this.openBrowserForSelection());

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function CodeSearcher_openSelection_() {
              return _CodeSearcher_openSelection_.apply(this, arguments);
            }

            return CodeSearcher_openSelection_;
          }()
        }, {
          key: "openBrowserForSelection",
          value: function () {
            var _CodeSearcher_openBrowserForSelection_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var browser, _this$selection, column, line, packageName, pathInPackage, browserOrProps, browseSpec, Browser;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.selection) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      browser = this.browser, _this$selection = this.selection, column = _this$selection.column, line = _this$selection.line, packageName = _this$selection.packageName, pathInPackage = _this$selection.pathInPackage;
                      browserOrProps = browser;
                      browseSpec = {
                        packageName: packageName,
                        moduleName: pathInPackage,
                        textPosition: {
                          column: column,
                          row: line - 1
                        }
                      };
                      _context4.next = 7;
                      return module.import('./ui.cp-46daffed.js').then(function (n) { return n.a2; });

                    case 7:
                      Browser = _context4.sent;
                      _context4.next = 10;
                      return Browser.browse(browseSpec, browserOrProps || {}, browser ? browser.systemInterface : this.systemInterface);

                    case 10:
                      browser = _context4.sent;
                      browser.associatedSearchPanel = this;
                      return _context4.abrupt("return", browser.getWindow().activate());

                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function CodeSearcher_openBrowserForSelection_() {
              return _CodeSearcher_openBrowserForSelection_.apply(this, arguments);
            }

            return CodeSearcher_openBrowserForSelection_;
          }()
        }, {
          key: "onWindowActivated",
          value: function CodeSearcher_onWindowActivated_() {
            this.get("input").selectAll();
          }
        }, {
          key: "commands",
          get: function get() {
            var chooser = this.get("search chooser");
            return initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "commands", this).concat([{
              name: "toggle search in unloaded modules",
              exec: function exec() {
                chooser.selection = chooser.selection === "in loaded modules" ? "in loaded and unloaded modules" : "in loaded modules";
                return true;
              }
            }]);
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "F1",
              command: "toggle search in unloaded modules"
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "CodeSearcher";
          }
        }, {
          key: "inWindow",
          value: function CodeSearcher_inWindow_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              title: "code search",
              targetBrowser: null,
              systemInterface: null
            };
            var searcher = new this(props);
            var win = new __varRecorder__$1.Window(Object.assign({}, __varRecorder__$1.obj.dissoc(props, ["targetBrowser", "systemInterface"]), {
              extent: searcher.extent.addXY(0, 25),
              targetMorph: searcher
            }));

            __varRecorder__$1.connect(win, "windowActivated", searcher, "onWindowActivated");

            return win;
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              fill: {
                defaultValue: __varRecorder__$1.Color.transparent
              },
              extent: {
                defaultValue: __varRecorder__$1.pt(800, 500)
              },
              fontFamily: {
                defaultValue: "IBM Plex Mono"
              },
              fontSize: {
                defaultValue: 12
              },
              inputPadding: {
                defaultValue: __varRecorder__$1.Rectangle.inset(5)
              },
              itemPadding: {
                defaultValue: __varRecorder__$1.Rectangle.inset(4, 2)
              },
              borderWidth: {
                defaultValue: 0
              },
              historyId: {
                defaultValue: "lively.morphic-code searcher"
              },
              input: {
                after: ["submorphs"],
                derived: true,
                get: function get() {
                  return this.getSubmorphNamed("input").input;
                },
                set: function set(input) {
                  this.getSubmorphNamed("input").input = input;
                }
              },
              browser: {
                set: function set(browser) {
                  this.setProperty("browser", browser ? browser.id : null);
                },
                get: function get() {
                  var w = this.world();
                  var id = this.getProperty("browser");
                  return !w || !id ? null : w.getMorphWithId(id);
                }
              },
              systemInterface: {
                after: ["browser"],
                derived: true,
                get: function get() {
                  var browser = this.browser;
                  return browser ? browser.systemInterface : this.getProperty("systemInterface") || __varRecorder__$1.localInterface;
                },
                set: function set(systemInterface) {
                  var browser = this.browser;
                  if (browser) browser.systemInterface = systemInterface;else this.setProperty("systemInterface", systemInterface);
                }
              },
              currentSearchTerm: {
                defaultValue: ""
              },
              currentFilters: {
                defaultValue: ""
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./code-search.js";
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
          start: 2172,
          end: 11146
        });
      }(__varRecorder__$1.FilterableList);
      __varRecorder__$1.CodeSearcher = CodeSearcher;
      __varRecorder__$1.CodeSearcher = CodeSearcher;

      var codeSearch = /*#__PURE__*/Object.freeze({
        __proto__: null,
        doSearch: doSearch,
        CodeSearcher: CodeSearcher
      });
      exports('c', codeSearch);

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/code-search.cp.js");
      __varRecorder__.Icon = Icon;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.component = component;
      __varRecorder__.part = part;
      __varRecorder__.pt = pt;
      __varRecorder__.Color = Color;
      __varRecorder__.rect = rect;
      __varRecorder__.InputLineDefault = InputLineDefault;
      __varRecorder__.DropDownList = DropDownList;
      __varRecorder__.DefaultList = DefaultList;
      __varRecorder__.SystemList = SystemList;
      __varRecorder__.CodeSearcher = CodeSearcher;
      __varRecorder__.ButtonDefault = ButtonDefault;
      __varRecorder__.Label = Label;
      __varRecorder__.ModeButtonInactive = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.ButtonDefault, {
          extent: __varRecorder__.pt(27, 27),
          borderStyle: "none",
          fill: __varRecorder__.Color.transparent
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonInactive",
        range: {
          start: 489,
          end: 610
        }
      }, __varRecorder__.ModeButtonInactive);
      __varRecorder__.ModeButtonInactiveHover = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.ModeButtonInactive, {
          fill: __varRecorder__.Color.gray
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonInactiveHover",
        range: {
          start: 618,
          end: 697
        }
      }, __varRecorder__.ModeButtonInactiveHover);
      __varRecorder__.ModeButtonActiveClick = __varRecorder__.ModeButtonInactiveHover;
      __varRecorder__.ModeButtonInactiveClick = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.ModeButtonInactive, {
          fill: __varRecorder__.Color.darkGray
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonInactiveClick",
        range: {
          start: 760,
          end: 843
        }
      }, __varRecorder__.ModeButtonInactiveClick);
      __varRecorder__.ModeButtonActiveHover = __varRecorder__.ModeButtonInactiveClick;
      __varRecorder__.ModeButtonActive = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.ModeButtonInactive, {
          fill: __varRecorder__.Color.darkGray,
          submorphs: [{
            name: "label",
            fontColor: __varRecorder__.Color.white
          }]
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonActive",
        range: {
          start: 906,
          end: 1050
        }
      }, __varRecorder__.ModeButtonActive);
      __varRecorder__.ModeButtonDisabled = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.ModeButtonInactive, {
          visible: false,
          reactsToPointer: false
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "ModeButtonDisabled",
        range: {
          start: 1058,
          end: 1156
        }
      }, __varRecorder__.ModeButtonDisabled);
      __varRecorder__.CodeSearch = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          type: __varRecorder__.CodeSearcher,
          name: "code search",
          acceptsDrops: false,
          extent: __varRecorder__.pt(538, 421.5),
          layout: new __varRecorder__.TilingLayout({
            axis: "column",
            orderByIndex: true,
            resizePolicies: [["controls holder", {
              height: "fixed",
              width: "fill"
            }], ["list", {
              height: "fill",
              width: "fill"
            }]],
            spacing: 5,
            renderViaCSS: false
          }),
          selectedAction: "default",
          submorphs: [{
            name: "controls holder",
            height: 43.0921875,
            layout: new __varRecorder__.TilingLayout({
              axisAlign: "right",
              orderByIndex: true,
              padding: __varRecorder__.rect(5, 0, -5, 0),
              resizePolicies: [["input", {
                height: "fixed",
                width: "fill"
              }], ["holder", {
                height: "fixed"
              }]],
              spacing: 2
            }),
            borderColor: __varRecorder__.Color.rgb(23, 160, 251),
            fill: __varRecorder__.Color.transparent,
            position: __varRecorder__.pt(17.3, 247.4),
            submorphs: [__varRecorder__.part(__varRecorder__.ModeButtonInactive, {
              master: {
                click: __varRecorder__.ModeButtonInactiveClick,
                hover: __varRecorder__.ModeButtonInactiveHover
              },
              name: "reload",
              position: __varRecorder__.pt(-415.8, -407.5),
              submorphs: [{
                name: "label",
                fontColor: __varRecorder__.Color.rgb(60, 60, 60),
                textAndAttributes: __varRecorder__.Icon.textAttribute("rotate-right")
              }],
              tooltip: "Refresh Search Results"
            }), __varRecorder__.part(__varRecorder__.InputLineDefault, {
              name: "input",
              borderRadius: 6,
              borderWidth: 1,
              extent: __varRecorder__.pt(243, 27),
              fontFamily: "IBM Plex Mono",
              fontSize: 14,
              haloShadow: {
                blur: 6,
                color: {
                  a: 1,
                  b: 0.8588,
                  g: 0.5961,
                  r: 0.2039
                },
                distance: 0,
                rotation: 45
              },
              historyId: "lively.morphic-code searcher",
              padding: __varRecorder__.rect(5, 5, 0, 0),
              placeholder: "Search Source Files",
              submorphs: [{
                name: "placeholder",
                extent: __varRecorder__.pt(134, 29),
                fontSize: 14,
                padding: __varRecorder__.rect(5, 5, 0, 0),
                lineHeight: 1,
                textAndAttributes: ["Search Source Files", null]
              }]
            }), {
              name: "holder",
              extent: __varRecorder__.pt(89.7, 27),
              fill: __varRecorder__.Color.transparent,
              layout: new __varRecorder__.TilingLayout({
                align: "right",
                axisAlign: "center",
                hugContentsHorizontally: true,
                orderByIndex: true,
                padding: __varRecorder__.rect(0, 0, 5, 0),
                spacing: 2
              }),
              position: __varRecorder__.pt(0, 33),
              submorphs: [__varRecorder__.part(__varRecorder__.ModeButtonInactive, {
                master: {
                  click: __varRecorder__.ModeButtonInactiveClick,
                  hover: __varRecorder__.ModeButtonInactiveHover
                },
                tooltip: "Search Case Sensitive",
                name: "caseMode",
                extent: __varRecorder__.pt(27, 22),
                submorphs: [{
                  type: __varRecorder__.Label,
                  name: "label",
                  textAndAttributes: __varRecorder__.Icon.textAttribute("circle-h")
                }]
              }), __varRecorder__.part(__varRecorder__.ModeButtonInactive, {
                master: {
                  click: __varRecorder__.ModeButtonInactiveClick,
                  hover: __varRecorder__.ModeButtonInactiveHover
                },
                tooltip: "Search based on regular expressions.\nRegular expression should be given without quotes or literal mode slashes.",
                name: "regexMode",
                extent: __varRecorder__.pt(27, 22),
                submorphs: [{
                  type: __varRecorder__.Label,
                  name: "label",
                  textAndAttributes: __varRecorder__.Icon.textAttribute("circle-question")
                }]
              }), __varRecorder__.part(__varRecorder__.DropDownList, {
                name: "search chooser",
                master: {
                  auto: __varRecorder__.ModeButtonActive,
                  click: __varRecorder__.ModeButtonInactiveClick
                },
                viewModel: {
                  openListInWorld: true,
                  listMaster: __varRecorder__.SystemList,
                  items: ["in loaded modules", "in loaded and unloaded modules"]
                },
                borderColor: __varRecorder__.Color.gray,
                borderStyle: "none",
                extent: __varRecorder__.pt(63, 22),
                fill: __varRecorder__.Color.darkGray,
                layout: new __varRecorder__.TilingLayout({
                  align: "center",
                  axisAlign: "center",
                  hugContentsHorizontally: true,
                  orderByIndex: true,
                  padding: __varRecorder__.rect(10, 0, 0, 0)
                }),
                submorphs: [{
                  name: "label",
                  fontColor: __varRecorder__.Color.white
                }]
              })]
            }]
          }, __varRecorder__.part(__varRecorder__.DefaultList, {
            name: "list",
            extent: __varRecorder__.pt(538.7, 279.6),
            fontFamily: "IBM Plex Mono",
            itemPadding: __varRecorder__.rect(4, 2, 0, 0),
            padding: __varRecorder__.rect(2, 0, 0, 0),
            position: __varRecorder__.pt(0, 27)
          })]
        });
      }, {
        module: "lively.ide/code-search.cp.js",
        "export": "CodeSearch",
        range: {
          start: 1164,
          end: 5365
        }
      }, __varRecorder__.CodeSearch);
      var CodeSearch = exports('C', __varRecorder__.CodeSearch);
      var ModeButtonActive = __varRecorder__.ModeButtonActive;
      var ModeButtonInactive = __varRecorder__.ModeButtonInactive;
      var ModeButtonActiveClick = __varRecorder__.ModeButtonActiveClick;
      var ModeButtonInactiveClick = __varRecorder__.ModeButtonInactiveClick;
      var ModeButtonActiveHover = __varRecorder__.ModeButtonActiveHover;
      var ModeButtonInactiveHover = __varRecorder__.ModeButtonInactiveHover;
      var ModeButtonDisabled = __varRecorder__.ModeButtonDisabled;
      __varRecorder__.CodeSearch = CodeSearch;
      __varRecorder__.ModeButtonActive = ModeButtonActive;
      __varRecorder__.ModeButtonInactive = ModeButtonInactive;
      __varRecorder__.ModeButtonActiveClick = ModeButtonActiveClick;
      __varRecorder__.ModeButtonInactiveClick = ModeButtonInactiveClick;
      __varRecorder__.ModeButtonActiveHover = ModeButtonActiveHover;
      __varRecorder__.ModeButtonInactiveHover = ModeButtonInactiveHover;
      __varRecorder__.ModeButtonDisabled = ModeButtonDisabled;

    })
  };
}));
