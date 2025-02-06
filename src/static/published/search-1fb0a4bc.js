System.register(['./__rootModule___commonjs-entry-2a340242.js'], (function (exports, module) {
  'use strict';
  var once, arr, string, config, ViewModel, part, comparePosition, lessEqPosition, debounceNamed, Color, initializeClass, _defineProperty, _asyncToGenerator;
  return {
    setters: [function (module) {
      once = module.ao;
      arr = module.q;
      string = module.u;
      config = module.z;
      ViewModel = module.V;
      part = module.p;
      comparePosition = module.fN;
      lessEqPosition = module.fL;
      debounceNamed = module.fO;
      Color = module.C;
      initializeClass = module.i;
      _defineProperty = module.X;
      _asyncToGenerator = module._;
    }],
    execute: (function () {

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/text/search.js");
      __varRecorder__.once = once;
      __varRecorder__.arr = arr;
      __varRecorder__.string = string;
      __varRecorder__.config = config;
      __varRecorder__.ViewModel = ViewModel;
      __varRecorder__.part = part;
      __varRecorder__.comparePosition = comparePosition;
      __varRecorder__.lessEqPosition = lessEqPosition;
      __varRecorder__.debounceNamed = debounceNamed;
      __varRecorder__.Color = Color;
      var TextSearcher = exports('TextSearcher', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/text/search.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("TextSearcher") && typeof __lively_classholder__.TextSearcher === "function" ? __lively_classholder__.TextSearcher : __lively_classholder__.TextSearcher = function TextSearcher(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function TextSearcher_initialize_(morph) {
            this.morph = morph;
          }
        }, {
          key: "document",
          get: function get() {
            return this.morph.document;
          }
        }, {
          key: "calculateRangeForFind",
          value: function TextSearcher_calculateRangeForFind_(start, match) {
            var i = this.document.positionToIndex(start);
            var end = this.document.indexToPosition(i + match.length);
            return {
              range: {
                start: start,
                end: end
              },
              match: match
            };
          }
        }, {
          key: "stringSearch",
          value: function TextSearcher_stringSearch_(lines, needle, caseSensitive, nLines, _char, pos) {
            if (!caseSensitive) _char = _char.toLowerCase();
            if (_char !== needle[0]) return null;
            var row = pos.row,
                column = pos.column;
            var lineString = lines[row];
            var followingText = nLines <= 1 ? "" : "\n" + lines.slice(row + 1, row + 1 + (nLines - 1)).join("\n");
            var chunk = lineString.slice(column) + followingText;
            var chunkToTest = caseSensitive ? chunk : chunk.toLowerCase();
            return chunkToTest.indexOf(needle) !== 0 ? null : this.calculateRangeForFind({
              row: row,
              column: column
            }, chunk.slice(0, needle.length));
          }
        }, {
          key: "reSearch",
          value: function TextSearcher_reSearch_(lines, needle, multiline, _char2, pos) {
            var row = pos.row,
                column = pos.column;
            var chunk = lines[row].slice(column) + (multiline ? "\n" + lines.slice(row + 1).join("\n") : "");
            var reMatch = chunk.match(needle);
            return reMatch ? this.calculateRangeForFind({
              row: row,
              column: column
            }, reMatch[0]) : null;
          }
        }, {
          key: "search",
          value: function TextSearcher_search_(options) {
            var _Object$assign = Object.assign({
              start: this.morph.cursorPosition,
              needle: "",
              backwards: false,
              caseSensitive: false
            }, options),
                start = _Object$assign.start,
                needle = _Object$assign.needle,
                backwards = _Object$assign.backwards,
                caseSensitive = _Object$assign.caseSensitive;

            if (!needle) return null;
            var search;

            if (needle instanceof RegExp) {
              var flags = (needle.flags || "").split("");
              var multiline = !!needle.multiline;
              flags.splice(flags.indexOf("m"), 1);
              if (!caseSensitive && !flags.includes("i")) flags.push("i");
              needle = new RegExp("^" + needle.source.replace(/^\^+/, ""), flags.join(""));
              search = this.reSearch.bind(this, this.document.lineStrings, needle, multiline);
            } else {
              needle = String(needle);
              if (!caseSensitive) needle = needle.toLowerCase();
              var nLines = needle.split(this.document.constructor.newline).length;
              search = this.stringSearch.bind(this, this.document.lineStrings, needle, caseSensitive, nLines);
            }

            var result = this.document[backwards ? "scanBackward" : "scanForward"](start, search);
            return result === {} ? null : result;
          }
        }, {
          key: "searchForAll",
          value: function TextSearcher_searchForAll_(options) {
            var results = [];
            var i = 0;

            while (true) {
              if (i++ > 10000) throw new Error("endless loop");
              var found = this.search(options);
              if (!found) return results;
              results.push(found);
              options = Object.assign({}, options, {
                start: options.backwards ? found.range.start : found.range.end
              });
            }
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "TextSearcher";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./text/search.js";
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
          start: 410,
          end: 6395
        });
      }(undefined));
      __varRecorder__.TextSearcher = TextSearcher;
      __varRecorder__.TextSearcher = TextSearcher;
      var SearchWidgetModel = exports('SearchWidgetModel', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/text/search.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SearchWidgetModel") && typeof __lively_classholder__.SearchWidgetModel === "function" ? __lively_classholder__.SearchWidgetModel : __lively_classholder__.SearchWidgetModel = function SearchWidgetModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isSearchWidget",
          get: function get() {
            return true;
          }
        }, {
          key: "viewDidLoad",
          value: function SearchWidgetModel_viewDidLoad_() {
            if (this.targetText) this.target = this.targetText;
            if (!this.target) throw new Error("SearchWidget needs a target text morph!");
            this.setProperty("currentResultIndex", 0);
            if (this.input) this.search();
          }
        }, {
          key: "toggleRegexMode",
          value: function SearchWidgetModel_toggleRegexMode_() {
            this.state.regexMode = !this.state.regexMode;
            this.ui.regexModeButton.opacity = this.state.regexMode ? 1 : 0.5;
            this.cleanup();
            this.search();
          }
        }, {
          key: "toggleCaseMode",
          value: function SearchWidgetModel_toggleCaseMode_() {
            this.state.caseMode = !this.state.caseMode;
            this.ui.caseModeButton.opacity = this.state.caseMode ? 1 : 0.5;
            this.cleanup();
            this.search();
          }
        }, {
          key: "focus",
          value: function () {
            var _SearchWidgetModel_focus_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.ui.searchInput.focus();

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function SearchWidgetModel_focus_() {
              return _SearchWidgetModel_focus_.apply(this, arguments);
            }

            return SearchWidgetModel_focus_;
          }()
        }, {
          key: "onBlur",
          value: function SearchWidgetModel_onBlur_(evt) {
            var _this = this;

            var world = this.world();
            var view = this.view,
                _this$ui = this.ui,
                searchInput = _this$ui.searchInput,
                replaceInput = _this$ui.replaceInput;
            if (!world) return;
            setTimeout(function () {
              var focusedMorph = world.focusedMorph;

              if (!view.withAllSubmorphsDetect(function (m) {
                return m.isFocused();
              }) && !$world.focusedMorph.isTextMap) {
                _this.close();

                return;
              }

              view.bringToFront();

              if (searchInput !== focusedMorph && replaceInput !== focusedMorph) {
                searchInput.focus();
              }
            });
          }
        }, {
          key: "cleanup",
          value: function SearchWidgetModel_cleanup_() {
            this.removeSearchMarkers();
            this.results = [];
            this.currentResultIndex = 0;
            this.textMap && this.textMap.update();
          }
        }, {
          key: "close",
          value: function SearchWidgetModel_close_() {
            this.ui.searchInput.acceptInput();
            this.cleanup();
            if (!this._reuseTextMap) this.target.removeTextMap();
            this.view.remove();
            this.target.focus();
          }
        }, {
          key: "moveCursorToNextResult",
          value: function SearchWidgetModel_moveCursorToNextResult_() {
            var backwards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.results.length === 0) return;
            this.state.backwards = backwards;
            var text = this.target;
            var sel = text.selection;
            var select = !!text.activeMark || !sel.isEmpty();
            if (backwards) this.currentResultIndex = this.currentResultIndex - 1 === -1 ? this.results.length - 1 : this.currentResultIndex - 1;else this.currentResultIndex = this.currentResultIndex + 1 === this.results.length ? 0 : this.currentResultIndex + 1;
            var _this$results$this$cu = this.results[this.currentResultIndex].range,
                start = _this$results$this$cu.start,
                end = _this$results$this$cu.end;
            var pos = backwards ? end : start;
            select ? sel.lead = pos : text.cursorPosition = pos;
            if (!text.isLineFullyVisible(pos.row)) text.centerRow();
            this.updateCursorMarker();
          }
        }, {
          key: "removeSearchMarkers",
          value: function SearchWidgetModel_removeSearchMarkers_() {
            var _this2 = this;

            (this.target.markers || []).forEach(function (_ref) {
              var id = _ref.id;
              return id.startsWith("search-highlight") && _this2.target.removeMarker(id);
            });
          }
        }, {
          key: "addSearchMarkers",
          value: function SearchWidgetModel_addSearchMarkers_() {
            this.removeSearchMarkers();
            var text = this.target;
            this.results.forEach(function (searchResult, i) {
              text.addMarker({
                id: "search-highlight-" + i,
                range: searchResult.range,
                style: {
                  "border-radius": "4px",
                  "background-color": "rgba(255, 200, 0, 0.3)",
                  "box-shadow": "0 0 4px rgba(255, 200, 0, 0.3)",
                  "pointer-events": "none"
                }
              });
            });
            this.updateCursorMarker();
            this.textMap && this.textMap.update();
          }
        }, {
          key: "updateCursorMarker",
          value: function SearchWidgetModel_updateCursorMarker_() {
            this.target.removeMarker("search-highlight-cursor");
            var resultAtCursor = this.results[this.currentResultIndex];
            var positionRange;

            if (this.state.backwards) {
              var _resultAtCursor$range = resultAtCursor.range.end,
                  row = _resultAtCursor$range.row,
                  column = _resultAtCursor$range.column;
              positionRange = {
                start: {
                  row: row,
                  column: column
                },
                end: {
                  row: row,
                  column: column + 1
                }
              };
            } else {
              var _resultAtCursor$range2 = resultAtCursor.range.start,
                  _row = _resultAtCursor$range2.row,
                  _column = _resultAtCursor$range2.column;
              positionRange = {
                start: {
                  row: _row,
                  column: _column - 1
                },
                end: {
                  row: _row,
                  column: _column
                }
              };
            }

            this.createCursorMarker(positionRange);
          }
        }, {
          key: "createCursorMarker",
          value: function SearchWidgetModel_createCursorMarker_(range) {
            this.target.addMarker({
              id: "search-highlight-cursor",
              range: range,
              style: _defineProperty({
                "pointer-events": "none",
                "box-sizing": "border-box"
              }, this.state.backwards ? "border-left" : "border-right", "3px red solid")
            });
          }
        }, {
          key: "prepareForNewSearch",
          value: function SearchWidgetModel_prepareForNewSearch_() {
            var text = this.target,
                view = this.view,
                searchInput = this.ui.searchInput;
            var world = text.world();
            if (!world) return;
            view.openInWorld(world.visibleBounds().center(), world);
            view.topRight = text.globalBounds().insetBy(5).topRight().addXY(0, text.padding.top());
            if (text.verticalScrollbarVisible) view.topRight = view.topRight.subXY(text.scrollbarOffset.x, 0);
            if (text.getWindow()) __varRecorder__.once(text.getWindow(), "remove", view, "remove");
            this.focus();

            if (!text.selection.isEmpty()) {
              searchInput.textString = text.selectionOrLineString();
              text.selection.collapse();
            } else searchInput.selectAll();

            if (this.input.length > 0) {
              this.search();
            } else this.showNoSearchHint();
          }
        }, {
          key: "showNoSearchHint",
          value: function SearchWidgetModel_showNoSearchHint_() {
            this.ui.resultIndexLabel.textString = "no search";
            this.ui.resultTotalLabel.fontColor = __varRecorder__.Color.lively.withA(0);
            this.ui.nextButton.opacity = 0.5;
            this.ui.prevButton.opacity = 0.5;
          }
        }, {
          key: "showResultNumberHint",
          value: function SearchWidgetModel_showResultNumberHint_() {
            if (this.results.length > 10000) {
              this.ui.resultIndexLabel.textString = "> 10000";
              this.ui.resultTotalLabel.fontColor = __varRecorder__.Color.lively.withA(0);
            } else {
              this.ui.resultTotalLabel.fontColor = __varRecorder__.Color.lively.withA(1);
              this.ui.resultIndexLabel.textString = (this.results.length === 0 ? 0 : this.currentResultIndex + 1) + "/";
              this.ui.resultTotalLabel.textString = this.results.length;
            }

            if (this.results.length > 0) {
              this.ui.nextButton.opacity = 1;
              this.ui.prevButton.opacity = 1;
            } else {
              this.ui.nextButton.opacity = 0.5;
              this.ui.prevButton.opacity = 0.5;
            }
          }
        }, {
          key: "search",
          value: function SearchWidgetModel_search_() {
            var _this3 = this;

            __varRecorder__.debounceNamed("search", 10, function () {
              if (!_this3.input) {
                _this3.cleanup();

                _this3.showNoSearchHint();

                return;
              }

              var opts = {
                start: {
                  column: 0,
                  row: 0
                },
                caseSensitive: _this3.state.caseMode
              };
              var found = new __varRecorder__.TextSearcher(_this3.target).searchForAll(Object.assign({
                needle: _this3.input
              }, opts));
              found = found.sort(function (a, b) {
                return __varRecorder__.comparePosition(a.range, b.range);
              });
              _this3.results = found;

              if (found.length > 0) {
                var currPos = _this3.target.cursorPosition;

                var resultsBehindCursor = _this3.results.filter(function (resPos) {
                  return __varRecorder__.lessEqPosition(currPos, resPos.range.start);
                });

                var firstResultBehindCursor = resultsBehindCursor[0];

                var resultsBeforeCursor = _this3.results.filter(function (resPos) {
                  return !__varRecorder__.lessEqPosition(currPos, resPos.range.start);
                });

                var firstResultBeforeCursor = __varRecorder__.arr.last(resultsBeforeCursor);

                if (!firstResultBehindCursor) _this3.currentResultIndex = _this3.results.findIndex(function (res) {
                  return res === firstResultBeforeCursor;
                });else if (!firstResultBeforeCursor) _this3.currentResultIndex = _this3.results.findIndex(function (res) {
                  return res === firstResultBehindCursor;
                });else if (__varRecorder__.comparePosition(firstResultBehindCursor.range.start, firstResultBeforeCursor.range.start) === 0) _this3.currentResultIndex = _this3.results.findIndex(function (res) {
                  return res === firstResultBehindCursor;
                });else {
                  var distanceToBefore = {
                    row: Math.abs(currPos.row - firstResultBeforeCursor.range.end.row),
                    column: Math.abs(currPos.column - firstResultBeforeCursor.range.end.column)
                  };
                  var distanceToBehind = {
                    row: Math.abs(currPos.row - firstResultBehindCursor.range.start.row),
                    column: Math.abs(currPos.column - firstResultBehindCursor.range.start.column)
                  };
                  _this3.currentResultIndex = __varRecorder__.lessEqPosition(distanceToBefore, distanceToBehind) ? _this3.results.findIndex(function (res) {
                    return res === firstResultBeforeCursor;
                  }) : _this3.results.findIndex(function (res) {
                    return res === firstResultBehindCursor;
                  });
                }

                _this3.addSearchMarkers();

                var _this3$results$_this = _this3.results[_this3.currentResultIndex].range,
                    start = _this3$results$_this.start,
                    end = _this3$results$_this.end;
                var positionRange = {
                  start: {
                    row: start.row,
                    column: start.column - 1
                  },
                  end: {
                    row: end.row,
                    column: end.column
                  }
                };

                _this3.createCursorMarker(positionRange);

                _this3.target.centerRow(positionRange.start.row);

                _this3.target.cursorPosition = positionRange.end;
              } else {
                _this3.cleanup();
              }
            })();
          }
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Enter",
              command: "search next or replace and go to next"
            }, {
              keys: "Alt-Enter",
              command: {
                command: "search next or replace and go to next",
                args: {
                  direction: "backwards"
                }
              }
            }, {
              keys: "Tab",
              command: "change focus"
            }, {
              keys: {
                mac: "Ctrl-O",
                win: "Alt-O"
              },
              command: "occur with search term"
            }, {
              keys: "Escape",
              command: "remove search widget"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this4 = this;

            return [{
              name: "occur with search term",
              exec: function () {
                var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _yield$import, occurStartCommand;

                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return module.import('./occur-a28e6568.js');

                        case 2:
                          _yield$import = _context2.sent;
                          occurStartCommand = _yield$import.occurStartCommand;

                          _this4.target.addCommands([occurStartCommand]);

                          _this4.execCommand("accept search");

                          return _context2.abrupt("return", _this4.target.execCommand("occur", {
                            needle: _this4.input
                          }));

                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function exec() {
                  return _exec.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "remove search widget",
              exec: function exec() {
                _this4.close();

                return true;
              }
            }, {
              name: "goto next result",
              exec: function exec() {
                _this4.moveCursorToNextResult();

                return true;
              }
            }, {
              name: "goto previous result",
              exec: function exec() {
                _this4.moveCursorToNextResult(true);

                return true;
              }
            }, {
              name: "search next or replace and go to next",
              exec: function exec(_, args) {
                if ((args === null || args === void 0 ? void 0 : args.direction) === "backwards") _this4.state.backwards = true;else _this4.state.backwards = false;

                _this4.ui.searchInput.acceptInput();

                if (_this4.replaceInput) _this4.ui.replaceInput.acceptInput();
                return _this4.execCommand(_this4.ui.replaceInput.isFocused() ? "replace and go to next" : _this4.state.backwards ? "goto previous result" : "goto next result");
              }
            }, {
              name: "replace current search location with replace input",
              exec: function exec() {
                var replaceInput = _this4.ui.replaceInput;

                if (_this4.replaceInput.length > 0) {
                  replaceInput.acceptInput();
                  var replacement = _this4.replaceInput;

                  _this4.target.replace(_this4.results[_this4.currentResultIndex].range, replacement);
                }

                return true;
              }
            }, {
              name: "replace and go to next",
              exec: function exec() {
                if (_this4.state.backwards) _this4.execCommand("goto previous result");

                _this4.execCommand("replace current search location with replace input");

                if (!_this4.state.backwards) _this4.execCommand("goto next result");

                _this4.search();

                return true;
              }
            }, {
              name: "replace all",
              exec: function exec() {
                var target = _this4.target;
                var replaceInput = _this4.ui.replaceInput;
                var currentSourceString = target.textString;
                var replacement = replaceInput.textString;
                replaceInput.acceptInput();
                var lineOfLastMatch = -1;
                var offsetForCurrentLine = 0;
                var replacements = [];

                _this4.results.forEach(function (found) {
                  var range = found.range,
                      match = found.match;
                  var lineOfCurrentMatch = range.start.row;

                  if (lineOfCurrentMatch === lineOfLastMatch) {
                    offsetForCurrentLine += replacement.length - match.length;
                  } else offsetForCurrentLine = 0;

                  lineOfLastMatch = lineOfCurrentMatch;
                  var start = target.positionToIndex(range.start);
                  var end = target.positionToIndex(range.end);
                  replacements.unshift({
                    action: "remove",
                    start: start,
                    end: end
                  }, {
                    action: "insert",
                    start: start,
                    lines: [replacement]
                  });
                  range.start.column += offsetForCurrentLine;
                  range.end.column += offsetForCurrentLine;
                });

                target.textString = __varRecorder__.string.applyChanges(currentSourceString, replacements);

                _this4.search();

                return true;
              }
            }, {
              name: "change focus",
              exec: function exec() {
                var _this4$ui = _this4.ui,
                    searchInput = _this4$ui.searchInput,
                    replaceInput = _this4$ui.replaceInput;

                if (searchInput.isFocused()) {
                  replaceInput.focus();
                } else {
                  searchInput.focus();
                }

                return true;
              }
            }];
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SearchWidgetModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              target: {},
              state: {
                initialize: function initialize() {
                  this.state = {
                    backwards: false,
                    caseMode: false,
                    regexMode: false,
                    results: []
                  };
                }
              },
              currentResultIndex: {
                set: function set(v) {
                  this.setProperty("currentResultIndex", v);
                  this.showResultNumberHint();
                }
              },
              input: {
                get: function get() {
                  var text = this.ui.searchInput.textString;

                  if (this.state.regexMode) {
                    var reMatch = text.match(/^\/(.*)\/([a-z]*)$/);

                    if (reMatch) {
                      return RegExp(reMatch[1], reMatch[2]);
                    }

                    return new RegExp(text);
                  }

                  return text;
                },
                set: function set(v) {
                  this.ui.searchInput.textString = String(v);
                }
              },
              replaceInput: {
                get: function get() {
                  return this.ui.replaceInput.textString;
                },
                set: function set(v) {
                  this.ui.replaceInput.textString = String(v);
                }
              },
              textMap: {
                get: function get() {
                  return this.target.textMap;
                }
              },
              expose: {
                get: function get() {
                  return ["state", "prepareForNewSearch", "commands", "keybindings", "isSearchWidget"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    target: "searchInput",
                    signal: "onBlur",
                    handler: "onBlur"
                  }, {
                    target: "replaceInput",
                    signal: "onBlur",
                    handler: "onBlur"
                  }, {
                    signal: "onBlur",
                    handler: "onBlur",
                    override: true
                  }, {
                    target: "nextButton",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "goto next result";
                    }
                  }, {
                    target: "prevButton",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "goto previous result";
                    }
                  }, {
                    target: "searchInput",
                    signal: "inputChanged",
                    handler: "search"
                  }, {
                    target: "replaceButton",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "replace and go to next";
                    }
                  }, {
                    target: "replaceAllButton",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "replace all";
                    }
                  }, {
                    target: "caseModeButton",
                    signal: "fire",
                    handler: "toggleCaseMode"
                  }, {
                    target: "regexModeButton",
                    signal: "fire",
                    handler: "toggleRegexMode"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./text/search.js";
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
          start: 6403,
          end: 22197
        });
      }(__varRecorder__.ViewModel));
      __varRecorder__.SearchWidgetModel = SearchWidgetModel;
      __varRecorder__.SearchWidgetModel = SearchWidgetModel;
      var searchCommands = exports('searchCommands', [{
        name: "search in text",
        exec: function () {
          var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(morph) {
            var _morph$textMap;

            var opts,
                _yield$import2,
                SearchWidget,
                search,
                _args3 = arguments;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    opts = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {
                      backwards: false
                    };
                    _context3.next = 3;
                    return module.import('./search.cp-87d23620.js');

                  case 3:
                    _yield$import2 = _context3.sent;
                    SearchWidget = _yield$import2.SearchWidget;
                    search = morph._searchWidget || (morph._searchWidget = __varRecorder__.part(SearchWidget, {
                      viewModel: {
                        target: morph
                      }
                    }));
                    search.state.backwards = opts.backwards;
                    search.prepareForNewSearch();
                    search.viewModel._reuseTextMap = !!morph.textMap;

                    if (__varRecorder__.config.codeEditor.search.showTextMap && !search.viewModel._reuseTextMap) {
                      morph.showTextMap();
                    }

                    (_morph$textMap = morph.textMap) === null || _morph$textMap === void 0 ? void 0 : _morph$textMap.updateDebounced();
                    return _context3.abrupt("return", true);

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          function exec(_x) {
            return _exec2.apply(this, arguments);
          }

          return exec;
        }()
      }]);
      __varRecorder__.searchCommands = searchCommands;
      __varRecorder__.searchCommands = searchCommands;

    })
  };
}));
