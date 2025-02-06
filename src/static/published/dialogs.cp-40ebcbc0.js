System.register(['./__rootModule___commonjs-entry-2a340242.js', './index-57981d2f.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js'], (function (exports) {
  'use strict';
  var Rectangle, pt, rect, Color, connect, noUpdate, signal, ConstraintLayout, Icon, _missingExportShim, Morph, part, MorphicDB, initializeClass, _asyncToGenerator, _slicedToArray, _toConsumableArray, _createForOfIteratorHelper, component, add, TilingLayout, ShadowObject, Text, Label, ensureCommitInfo, Path, resource, Checkbox, DarkPrompt, OKCancelButtonWrapper, ConfirmPromptModel, InputLineDark, DarkDropDownList, DarkList;
  return {
    setters: [function (module) {
      Rectangle = module.R;
      pt = module.b;
      rect = module.a8;
      Color = module.C;
      connect = module.a;
      noUpdate = module.aI;
      signal = module.s;
      ConstraintLayout = module.a4;
      Icon = module.j;
      _missingExportShim = module.aZ;
      Morph = module.M;
      part = module.p;
      MorphicDB = module.a2;
      initializeClass = module.i;
      _asyncToGenerator = module._;
      _slicedToArray = module.t;
      _toConsumableArray = module.w;
      _createForOfIteratorHelper = module.U;
      component = module.c;
      add = module.ad;
      TilingLayout = module.T;
      ShadowObject = module.a5;
      Text = module.h;
      Label = module.L;
      ensureCommitInfo = module.fK;
      Path = module.aR;
      resource = module.B;
    }, function (module) {
      Checkbox = module.b;
      DarkPrompt = module.D;
      OKCancelButtonWrapper = module.O;
      ConfirmPromptModel = module.g;
      InputLineDark = module.I;
    }, function (module) {
      DarkDropDownList = module.l;
      DarkList = module.O;
    }, function () {}],
    execute: (function () {

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.morphic/morphicdb/tools.js");

      function lastChoiceFromLocalStorage() {
        if (typeof localStorage === "undefined") return null;

        try {
          return localStorage["lively.morphic-morphicdb/current"];
        } catch (e) {
          return null;
        }
      }

      __varRecorder__$1.lastChoiceFromLocalStorage = lastChoiceFromLocalStorage;

      function currentMorphicDBConsideringLocalStorage(wellKnownMorphicDBs) {
        var alias = __varRecorder__$1.lastChoiceFromLocalStorage();

        return alias && wellKnownMorphicDBs[alias] || wellKnownMorphicDBs["default"];
      }

      __varRecorder__$1.currentMorphicDBConsideringLocalStorage = currentMorphicDBConsideringLocalStorage;

      function interactivelyChosenCurrentMorphicDB() {
        return _interactivelyChosenCurrentMorphicDB.apply(this, arguments);
      }

      function _interactivelyChosenCurrentMorphicDB() {
        _interactivelyChosenCurrentMorphicDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.t0 = __varRecorder__$1;
                  _context.next = 3;
                  return __varRecorder__$1.MorphicDB.wellKnownMorphicDBs();

                case 3:
                  _context.t1 = _context.sent;
                  return _context.abrupt("return", _context.t0.currentMorphicDBConsideringLocalStorage.call(_context.t0, _context.t1));

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _interactivelyChosenCurrentMorphicDB.apply(this, arguments);
      }

      __varRecorder__$1.interactivelyChosenCurrentMorphicDB = interactivelyChosenCurrentMorphicDB;

      function interactivelyChooseMorphicDB() {
        return _interactivelyChooseMorphicDB.apply(this, arguments);
      }

      function _interactivelyChooseMorphicDB() {
        _interactivelyChooseMorphicDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var dbs, lastDBAlias, dbList, _yield$__varRecorder_, _yield$__varRecorder_2, db;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return __varRecorder__$1.MorphicDB.wellKnownMorphicDBs();

                case 2:
                  dbs = _context2.sent;
                  lastDBAlias = __varRecorder__$1.lastChoiceFromLocalStorage() || "default";
                  dbList = Object.keys(dbs).map(function (alias) {
                    var _dbs$alias = dbs[alias],
                        name = _dbs$alias.name,
                        serverURL = _dbs$alias.serverURL,
                        snapshotLocation = _dbs$alias.snapshotLocation;
                    return {
                      alias: alias,
                      name: name,
                      serverURL: serverURL,
                      snapshotLocation: snapshotLocation,
                      selected: alias === lastDBAlias
                    };
                  });
                  _context2.next = 7;
                  return __varRecorder__$1.MorphicDBSelectionPrompt.open(dbList, {});

                case 7:
                  _yield$__varRecorder_ = _context2.sent;
                  _yield$__varRecorder_2 = _slicedToArray(_yield$__varRecorder_.selectedDBs, 1);
                  db = _yield$__varRecorder_2[0];

                  if (db) {
                    if (db.alias === "default") {
                      delete localStorage["lively.morphic-morphicdb/current"];
                    } else {
                      localStorage["lively.morphic-morphicdb/current"] = db.alias;
                    }
                  } else {
                    delete localStorage["lively.morphic-morphicdb/current"];
                  }

                  return _context2.abrupt("return", {
                    db: db,
                    dbs: dbs
                  });

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _interactivelyChooseMorphicDB.apply(this, arguments);
      }

      __varRecorder__$1.interactivelyChooseMorphicDB = interactivelyChooseMorphicDB;
      __varRecorder__$1.Rectangle = Rectangle;
      __varRecorder__$1.pt = pt;
      __varRecorder__$1.rect = rect;
      __varRecorder__$1.Color = Color;
      __varRecorder__$1.connect = connect;
      __varRecorder__$1.noUpdate = noUpdate;
      __varRecorder__$1.signal = signal;
      __varRecorder__$1.ConstraintLayout = ConstraintLayout;
      __varRecorder__$1.Icon = Icon;
      __varRecorder__$1.HorizontalLayout = _missingExportShim;
      __varRecorder__$1.VerticalLayout = _missingExportShim;
      __varRecorder__$1.Morph = Morph;
      __varRecorder__$1.part = part;
      __varRecorder__$1.Checkbox = Checkbox;
      __varRecorder__$1.MorphicDB = MorphicDB;
      __varRecorder__$1.interactivelyChosenCurrentMorphicDB = interactivelyChosenCurrentMorphicDB;
      __varRecorder__$1.interactivelyChooseMorphicDB = interactivelyChooseMorphicDB;
      var MorphicDBPrompt = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.morphic/morphicdb/tools.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBPrompt") && typeof __lively_classholder__.MorphicDBPrompt === "function" ? __lively_classholder__.MorphicDBPrompt : __lively_classholder__.MorphicDBPrompt = function MorphicDBPrompt(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "build",
          value: function MorphicDBPrompt_build_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var serverURL = props.serverURL,
                snapshotLocation = props.snapshotLocation,
                dbName = props.dbName,
                extent = props.extent,
                historyId = props.historyId,
                alias = props.alias;
            this.submorphs = [{
              name: "alias label",
              type: "label",
              value: "alias",
              fill: null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 14,
              fontColor: __varRecorder__$1.Color.gray
            }, {
              name: "dbname label",
              type: "label",
              value: "db name",
              fill: null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 14,
              fontColor: __varRecorder__$1.Color.gray
            }, {
              name: "snapshot location label",
              type: "label",
              value: "snapshot location",
              fill: null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 14,
              fontColor: __varRecorder__$1.Color.gray
            }, {
              name: "server url label",
              type: "label",
              value: "server url",
              fill: null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 14,
              fontColor: __varRecorder__$1.Color.gray
            }, {
              name: "alias input",
              type: "input",
              historyId: historyId ? historyId + "-alias" : null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 11
            }, {
              name: "dbname input",
              type: "input",
              historyId: historyId ? historyId + "-dbname" : null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 11
            }, {
              name: "snapshot location input",
              type: "input",
              historyId: historyId ? historyId + "-snapshot" : null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 11
            }, {
              name: "server url input",
              type: "input",
              historyId: historyId ? historyId + "-server" : null,
              padding: __varRecorder__$1.Rectangle.inset(3),
              fontSize: 11
            }, {
              master: {
                auto: "styleguide://SystemPrompts/prompts/buttons/ok/default",
                click: "styleguide://SystemPrompts/prompts/buttons/ok/pressed"
              },
              name: "ok button",
              type: "button"
            }, {
              master: {
                auto: "styleguide://SystemPrompts/prompts/buttons/cancel/default",
                click: "styleguide://SystemPrompts/prompts/buttons/cancel/pressed"
              },
              name: "cancel button",
              type: "button"
            }];

            var _this$submorphs = _slicedToArray(this.submorphs, 6),
                aliasInput = _this$submorphs[0],
                dbnameInput = _this$submorphs[1],
                snapshotLocationInput = _this$submorphs[2],
                serverUrlInput = _this$submorphs[3],
                okButton = _this$submorphs[4],
                cancelButton = _this$submorphs[5];

            if (alias) aliasInput.input = alias;
            if (dbName) dbnameInput.input = dbName;
            if (snapshotLocation) snapshotLocationInput.input = snapshotLocation;
            if (serverURL) serverUrlInput.input = serverURL;

            __varRecorder__$1.connect(okButton, "fire", this, "resolve");

            __varRecorder__$1.connect(cancelButton, "fire", this, "reject");

            this.extent = __varRecorder__$1.pt(600, 128);
            this.initLayout(!!alias);
            if (extent) this.extent = extent;
          }
        }, {
          key: "resolve",
          value: function MorphicDBPrompt_resolve_() {
            var aliasInput = this.get("alias input");
            var dbnameInput = this.get("dbname input");
            var snapshotLocationInput = this.get("snapshot location input");
            var serverUrlInput = this.get("server url input");
            serverUrlInput.acceptInput();
            snapshotLocationInput.acceptInput();
            dbnameInput.acceptInput();

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              alias: aliasInput.input,
              dbName: dbnameInput.input,
              snapshotLocation: snapshotLocationInput.input,
              serverURL: serverUrlInput.input,
              status: "accepted"
            });
          }
        }, {
          key: "reject",
          value: function MorphicDBPrompt_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              status: "rejected"
            });
          }
        }, {
          key: "initLayout",
          value: function MorphicDBPrompt_initLayout_() {
            var showAlias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var bounds = this.innerBounds();
            var relBounds = [__varRecorder__$1.rect(0.02, 0.05, 0.15, 0.19), __varRecorder__$1.rect(0.02, 0.23, 0.22, 0.19), __varRecorder__$1.rect(0.02, 0.42, 0.16, 0.19), __varRecorder__$1.rect(0.02, 0.6, 0.16, 0.19), __varRecorder__$1.rect(0.23, 0.05, 0.76, 0.15), __varRecorder__$1.rect(0.23, 0.23, 0.76, 0.15), __varRecorder__$1.rect(0.23, 0.42, 0.76, 0.15), __varRecorder__$1.rect(0.23, 0.6, 0.76, 0.15), __varRecorder__$1.rect(0.31, 0.79, 0.18, 0.17), __varRecorder__$1.rect(0.51, 0.8, 0.18, 0.16)];
            var realBounds = bounds.divide(relBounds);

            if (!showAlias) {
              relBounds.splice(3, 1);
              relBounds.splice(7, 1);
            }

            this.submorphs.map(function (ea, i) {
              return ea.setBounds(realBounds[i]);
            });
            this.layout = new __varRecorder__$1.ConstraintLayout({
              submorphSettings: [["alias label", "fixed"], ["server url label", "fixed"], ["snapshot location label", "fixed"], ["dbname label", "fixed"], ["alias input", {
                x: "resize",
                y: "fixed"
              }], ["server url input", {
                x: "resize",
                y: "fixed"
              }], ["snapshot location input", {
                x: "resize",
                y: "fixed"
              }], ["dbname input", {
                x: "resize",
                y: "fixed"
              }]]
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBPrompt";
          }
        }, {
          key: "open",
          value: function MorphicDBPrompt_open_(dbName, snapshotLocation, serverURL, opts) {
            var world = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : $world;
            opts = Object.assign({}, opts, {
              serverURL: serverURL,
              snapshotLocation: snapshotLocation,
              dbName: dbName
            });
            return world.openPrompt(new this(opts), opts);
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.morphic",
              version: "0.1.2"
            };
          }
        }, {
          start: 1696,
          end: 6268
        });
      }(__varRecorder__$1.Morph);
      __varRecorder__$1.MorphicDBPrompt = MorphicDBPrompt;
      __varRecorder__$1.MorphicDBPrompt = MorphicDBPrompt;
      var MorphicDBSelectionPrompt = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.morphic/morphicdb/tools.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBSelectionPrompt") && typeof __lively_classholder__.MorphicDBSelectionPrompt === "function" ? __lively_classholder__.MorphicDBSelectionPrompt : __lively_classholder__.MorphicDBSelectionPrompt = function MorphicDBSelectionPrompt(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "build",
          value: function MorphicDBSelectionPrompt_build_() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var allowMultipleSelections = props.allowMultipleSelections,
                dbList = props.dbList,
                extent = props.extent;
            var dbListMorph = new __varRecorder__$1.MorphicDBList({
              itemSettings: {
                showSelect: true
              },
              allowMultipleSelections: allowMultipleSelections,
              dbInfos: dbList,
              draggable: false
            });
            this.submorphs = [dbListMorph];
            dbListMorph.fill = null;

            __varRecorder__$1.connect(dbListMorph, "closed", this, "reject");

            __varRecorder__$1.connect(dbListMorph, "accepted", this, "resolve");

            if (extent) this.extent = extent;else __varRecorder__$1.connect(dbListMorph, "extent", this, "extent");
          }
        }, {
          key: "resolve",
          value: function MorphicDBSelectionPrompt_resolve_() {
            var dbListMorph = this.submorphs[0];

            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              dbs: dbListMorph.dbs(),
              selectedDBs: dbListMorph.selectedDBs(),
              status: "accepted"
            });
          }
        }, {
          key: "reject",
          value: function MorphicDBSelectionPrompt_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "resolve", this).call(this, {
              status: "rejected",
              dbs: [],
              selectedDBs: []
            });
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBSelectionPrompt";
          }
        }, {
          key: "open",
          value: function MorphicDBSelectionPrompt_open_(dbList) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var world = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : $world;
            opts = Object.assign({
              allowMultipleSelections: false,
              dbList: dbList
            }, opts);
            return world.openPrompt(new this(opts), opts);
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.morphic",
              version: "0.1.2"
            };
          }
        }, {
          start: 6276,
          end: 7370
        });
      }(__varRecorder__$1.Morph);
      __varRecorder__$1.MorphicDBSelectionPrompt = MorphicDBSelectionPrompt;
      __varRecorder__$1.MorphicDBSelectionPrompt = MorphicDBSelectionPrompt;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.morphic/morphicdb/tools.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBWidget") && typeof __lively_classholder__.MorphicDBWidget === "function" ? __lively_classholder__.MorphicDBWidget : __lively_classholder__.MorphicDBWidget = function MorphicDBWidget(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isMorphicDBWidget",
          get: function get() {
            return true;
          }
        }, {
          key: "updateView",
          value: function MorphicDBWidget_updateView_() {
            var controls = [];
            var showEdit = this.showEdit,
                showRemove = this.showRemove,
                showSelect = this.showSelect,
                dbInfo = this.dbInfo;

            var _ref = dbInfo || {},
                _ref$alias = _ref.alias,
                alias = _ref$alias === void 0 ? "" : _ref$alias,
                _ref$serverURL = _ref.serverURL,
                serverURL = _ref$serverURL === void 0 ? "" : _ref$serverURL,
                _ref$snapshotLocation = _ref.snapshotLocation,
                snapshotLocation = _ref$snapshotLocation === void 0 ? "" : _ref$snapshotLocation,
                removable = _ref.removable,
                editable = _ref.editable;

            if (!editable) showEdit = false;
            if (!removable) showRemove = false;

            if (showEdit) {
              controls.push({
                master: {
                  auto: "styleguide://SystemPrompts/prompts/buttons/ok/default",
                  click: "styleguide://SystemPrompts/prompts/buttons/ok/pressed"
                },
                type: "button",
                name: "edit button",
                label: "edit"
              });
            }

            if (showRemove) {
              controls.push({
                master: {
                  auto: "styleguide://SystemPrompts/prompts/buttons/cancel/default",
                  click: "styleguide://SystemPrompts/prompts/buttons/cancel/pressed"
                },
                type: "button",
                name: "remove button",
                label: "remove"
              });
            }

            this.submorphs = [{
              type: "label",
              name: "alias",
              value: ["alias: ", null, alias, {
                fontWeight: "bold"
              }]
            }, {
              type: "label",
              name: "snapshotLocation",
              value: "snapshots: ".concat(snapshotLocation)
            }, {
              type: "label",
              name: "serverURL",
              value: "backend: ".concat(serverURL)
            }].concat(_toConsumableArray(!controls.length ? [] : [{
              name: "controls",
              layout: new __varRecorder__$1.HorizontalLayout({
                spacing: 2
              }),
              fill: null,
              submorphs: controls
            }]));

            if (showEdit) {
              var editBtn = this.getSubmorphNamed("edit button");

              __varRecorder__$1.connect(editBtn, "fire", this, "triggerDBEdit");
            }

            if (showRemove) {
              var removeBtn = this.getSubmorphNamed("remove button");

              __varRecorder__$1.connect(removeBtn, "fire", this, "triggerDBRemove");
            }

            if (showSelect) {
              var cb = __varRecorder__$1.part(__varRecorder__$1.Checkbox, {
                name: "selected",
                viewModel: {
                  checked: false
                },
                isLayoutable: false,
                leftCenter: __varRecorder__$1.pt(5, this.height / 2 - (showRemove || showEdit ? 10 : 20))
              });

              __varRecorder__$1.connect(cb, "checked", this, "onDBSelectionChange");
            }
          }
        }, {
          key: "onDBSelectionChange",
          value: function MorphicDBWidget_onDBSelectionChange_(selected) {
            __varRecorder__$1.signal(this, "selected", this, selected);
          }
        }, {
          key: "triggerDBEdit",
          value: function MorphicDBWidget_triggerDBEdit_() {
            __varRecorder__$1.signal(this, "edit", this);
          }
        }, {
          key: "triggerDBRemove",
          value: function MorphicDBWidget_triggerDBRemove_() {
            __varRecorder__$1.signal(this, "remove", this);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBWidget";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              extent: {
                defaultValue: __varRecorder__$1.pt(120, 90)
              },
              fill: {
                defaultValue: __varRecorder__$1.Color.rgb(230, 230, 230)
              },
              dbInfo: {
                defaultValue: null
              },
              showSelect: {
                defaultValue: true
              },
              showEdit: {
                defaultValue: true
              },
              showRemove: {
                defaultValue: true
              },
              selected: {
                after: ["submorphs"],
                derived: true,
                get: function get() {
                  var cb = this.getSubmorphNamed("selected");
                  return cb && cb.checked;
                },
                set: function set(val) {
                  var cb = this.getSubmorphNamed("selected");
                  if (cb) cb.checked = val;
                }
              },
              submorphs: {
                after: ["showSelect", "showEdit", "showRemove", "dbInfo"],
                initialize: function initialize() {
                  this.updateView();
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.morphic",
              version: "0.1.2"
            };
          }
        }, {
          start: 7372,
          end: 10653
        });
      })(__varRecorder__$1.Morph);

      var MorphicDBList = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.morphic/morphicdb/tools.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("MorphicDBList") && typeof __lively_classholder__.MorphicDBList === "function" ? __lively_classholder__.MorphicDBList : __lively_classholder__.MorphicDBList = function MorphicDBList(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "updateView",
          value: function MorphicDBList_updateView_() {
            var _this = this;

            var layout = this.layout,
                itemSettings = this.itemSettings,
                dbInfos = this.dbInfos,
                showAddButton = this.showAddButton,
                showCloseButton = this.showCloseButton,
                showOKButton = this.showOKButton;

            if (!layout) {
              layout = this.layout = new __varRecorder__$1.VerticalLayout({
                align: "center",
                spacing: 4
              });
            }

            this.submorphs = dbInfos.map(function (info) {
              return new __varRecorder__$1.MorphicDBWidget(Object.assign({}, itemSettings, {
                selected: info.selected,
                dbInfo: info
              }));
            });
            this.submorphs.forEach(function (ea) {
              return __varRecorder__$1.connect(ea, "selected", _this, "onDBSelected");
            });

            if (showAddButton || showOKButton) {
              var addBtn = showAddButton && this.addMorph({
                type: "button",
                label: __varRecorder__$1.Icon.makeLabel("plus")
              });
              var okBtn = showOKButton && this.addMorph({
                type: "button",
                label: __varRecorder__$1.Icon.makeLabel("check")
              });
              this.addMorph({
                name: "buttons",
                fill: null,
                layout: new __varRecorder__$1.HorizontalLayout({
                  spacing: 5
                }),
                submorphs: [okBtn, addBtn].filter(Boolean)
              });
              addBtn && __varRecorder__$1.connect(addBtn, "fire", this, "interactivelyAddDB");
              okBtn && __varRecorder__$1.connect(okBtn, "fire", this, "accept");
            }

            if (showCloseButton) {
              var closeBtn = this.addMorph({
                name: "close button",
                type: "button",
                label: Object.assign(__varRecorder__$1.Icon.makeLabel("times-circle"), {
                  fontSize: 18
                }),
                tooltip: "close",
                fill: null,
                extent: __varRecorder__$1.pt(16, 16),
                borderColor: __varRecorder__$1.Color.transparent,
                isLayoutable: false
              });

              __varRecorder__$1.connect(this, "extent", closeBtn, "center", {
                converter: function converter(ext) {
                  return ext.withY(0).addXY(-3, 3);
                }
              });

              closeBtn.center = this.innerBounds().topRight();

              __varRecorder__$1.connect(closeBtn, "fire", this, "close");
            }

            this.whenRendered(50).then(function () {
              return layout.apply();
            });
          }
        }, {
          key: "close",
          value: function MorphicDBList_close_() {
            __varRecorder__$1.signal(this, "closed", this);

            this.remove();
          }
        }, {
          key: "accept",
          value: function MorphicDBList_accept_() {
            __varRecorder__$1.signal(this, "accepted", this);

            this.remove();
          }
        }, {
          key: "dbs",
          value: function MorphicDBList_dbs_() {
            return this.submorphs.map(function (m) {
              return m.isMorphicDBWidget && m.dbInfo;
            }).filter(Boolean);
          }
        }, {
          key: "selectedDBs",
          value: function MorphicDBList_selectedDBs_() {
            return this.submorphs.map(function (m) {
              return m.isMorphicDBWidget && m.selected && m.dbInfo;
            }).filter(Boolean);
          }
        }, {
          key: "onDBSelected",
          value: function MorphicDBList_onDBSelected_(dbMorph, selected) {
            var _this2 = this;

            selected && !this.allowMultipleSelections && __varRecorder__$1.noUpdate(function () {
              var _iterator = _createForOfIteratorHelper(_this2.submorphs),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var m = _step.value;
                  m.isMorphicDBWidget && m !== dbMorph && (m.selected = false);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });

            __varRecorder__$1.signal(this, "dbSelected", dbMorph);
          }
        }, {
          key: "interactivelyAddDB",
          value: function MorphicDBList_interactivelyAddDB_() {}
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "MorphicDBList";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              dbInfos: {
                after: ["itemSettings", "showAddButton"],
                set: function set(val) {
                  this.setProperty("dbInfos", val);
                  this.updateView();
                }
              },
              allowMultipleSelections: {
                defaultValue: false
              },
              showCloseButton: {
                defaultValue: true
              },
              showOKButton: {
                defaultValue: true
              },
              showAddButton: {
                defaultValue: true
              },
              itemSettings: {},
              name: {
                defaultValue: "db list"
              },
              extent: {
                defaultValue: __varRecorder__$1.pt(400, 300)
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./morphicdb/tools.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.morphic",
              version: "0.1.2"
            };
          }
        }, {
          start: 10662,
          end: 13757
        });
      }(__varRecorder__$1.Morph);
      __varRecorder__$1.MorphicDBList = MorphicDBList;
      __varRecorder__$1.MorphicDBList = MorphicDBList;

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/studio/dialogs.cp.js");
      __varRecorder__.DarkPrompt = DarkPrompt;
      __varRecorder__.OKCancelButtonWrapper = OKCancelButtonWrapper;
      __varRecorder__.ConfirmPromptModel = ConfirmPromptModel;
      __varRecorder__.DarkDropDownList = DarkDropDownList;
      __varRecorder__.DarkList = DarkList;
      __varRecorder__.component = component;
      __varRecorder__.add = add;
      __varRecorder__.part = part;
      __varRecorder__.pt = pt;
      __varRecorder__.rect = rect;
      __varRecorder__.Color = Color;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.MorphicDB = MorphicDB;
      __varRecorder__.ShadowObject = ShadowObject;
      __varRecorder__.Text = Text;
      __varRecorder__.Label = Label;
      __varRecorder__.InputLineDark = InputLineDark;
      __varRecorder__.interactivelyChooseMorphicDB = interactivelyChooseMorphicDB;
      __varRecorder__.interactivelyChosenCurrentMorphicDB = interactivelyChosenCurrentMorphicDB;
      __varRecorder__.ensureCommitInfo = ensureCommitInfo;
      __varRecorder__.Path = Path;
      __varRecorder__.resource = resource;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/studio/dialogs.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("SaveWorldDialogModel") && typeof __lively_classholder__.SaveWorldDialogModel === "function" ? __lively_classholder__.SaveWorldDialogModel : __lively_classholder__.SaveWorldDialogModel = function SaveWorldDialogModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "bindings",
          get: function get() {
            return [].concat(_toConsumableArray(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "bindings", this)), [{
              model: "storage type selector",
              signal: "selection",
              handler: "refresh"
            }]);
          }
        }, {
          key: "alignInWorld",
          value: function SaveWorldDialogModel_alignInWorld_() {
            var world = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.world();
            world.addMorph(this);

            var _world$visibleBounds = world.visibleBounds(),
                width = _world$visibleBounds.width,
                height = _world$visibleBounds.height;

            this.width = width * 1 / 2 - 5;
            this.height = height * 1 / 2 - 10;
            this.center = world.visibleBounds().center();
            return this;
          }
        }, {
          key: "viewDidLoad",
          value: function SaveWorldDialogModel_viewDidLoad_() {
            this.ui.nameInput.input = this.worldName;
            this.ui.tagInput.input = this.tags;
            this.ui.description.textString = this.description;
          }
        }, {
          key: "refresh",
          value: function SaveWorldDialogModel_refresh_() {
            this.setStorageMode(this.ui.storageTypeSelector.selection);
          }
        }, {
          key: "setStorageMode",
          value: function SaveWorldDialogModel_setStorageMode_(mode) {
            if (mode === "json") {
              this.ui.filePathInput.visible = true;
              this.ui.chooseDbButton.visible = false;
            }

            if (mode === "db") {
              this.ui.filePathInput.visible = false;
              this.ui.chooseDbButton.visible = true;
            }
          }
        }, {
          key: "activate",
          value: function () {
            var _SaveWorldDialogModel_activate_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(opts) {
              var nameInput, storageMode, _ref, tags, description, jsonPath, _yield$__varRecorder_, morphicDBName, serverURL, snapshotLocation;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      nameInput = this.ui.nameInput;
                      storageMode = "db";

                      if (!(opts && opts.targetWorld)) {
                        _context.next = 17;
                        break;
                      }

                      nameInput.input = opts.targetWorld.name;
                      _context.next = 6;
                      return __varRecorder__.ensureCommitInfo(__varRecorder__.Path("metadata.commit").get(opts.targetWorld));

                    case 6:
                      _context.t0 = _context.sent;

                      if (_context.t0) {
                        _context.next = 9;
                        break;
                      }

                      _context.t0 = {};

                    case 9:
                      _ref = _context.t0;
                      tags = _ref.tags;
                      description = _ref.description;
                      jsonPath = __varRecorder__.Path("metadata.file").get(opts.targetWorld) || __varRecorder__.resource(document.location).query().file;
                      if (jsonPath) storageMode = "json";
                      this.ui.filePathInput.input = jsonPath;
                      this.ui.tagInput.value = (tags || []).join(" ");
                      this.ui.description.textString = description || "";

                    case 17:
                      _context.next = 19;
                      return __varRecorder__.interactivelyChosenCurrentMorphicDB();

                    case 19:
                      _yield$__varRecorder_ = _context.sent;
                      morphicDBName = _yield$__varRecorder_.name;
                      serverURL = _yield$__varRecorder_.serverURL;
                      snapshotLocation = _yield$__varRecorder_.snapshotLocation;
                      this.morphicDBName = morphicDBName;
                      this.serverURL = serverURL;
                      this.snapshotLocation = snapshotLocation;
                      this.ui.storageTypeSelector.selection = storageMode;
                      return _context.abrupt("return", initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "activate", this).call(this));

                    case 28:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function SaveWorldDialogModel_activate_(_x) {
              return _SaveWorldDialogModel_activate_.apply(this, arguments);
            }

            return SaveWorldDialogModel_activate_;
          }()
        }, {
          key: "reject",
          value: function SaveWorldDialogModel_reject_() {
            initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "reject", this).call(this, {
              name: null
            });
          }
        }, {
          key: "resolve",
          value: function SaveWorldDialogModel_resolve_() {
            var name = this.ui.nameInput.input;
            if (!name) return this.reject();
            this.ui.nameInput.acceptInput();
            var tags = this.ui.tagInput.input.split(" ").map(function (ea) {
              return ea.trim();
            }).filter(Boolean);
            var description = this.ui.description.textString || "no description yet";
            var db = this.morphicDB;
            var filePath = this.filePath;
            var mode = this.ui.storageTypeSelector.selection;
            return this.answer.resolve({
              db: db,
              mode: mode,
              filePath: filePath,
              commit: {
                name: name,
                tags: tags,
                description: description
              }
            });
          }
        }, {
          key: "focus",
          value: function SaveWorldDialogModel_focus_() {
            this.ui.nameInput.focus();
          }
        }, {
          key: "morphicDB",
          get: function get() {
            var morphicDBName = this.morphicDBName,
                serverURL = this.serverURL;
            if (!morphicDBName) return __varRecorder__.MorphicDB["default"];
            if (!serverURL) serverURL = __varRecorder__.MorphicDB["default"].serverURL;
            return __varRecorder__.MorphicDB.named(morphicDBName, {
              serverURL: serverURL
            });
          }
        }, {
          key: "changeDB",
          value: function () {
            var _SaveWorldDialogModel_changeDB_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _yield$__varRecorder_2, db, morphicDBName, serverURL, snapshotLocation;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return __varRecorder__.interactivelyChooseMorphicDB();

                    case 2:
                      _yield$__varRecorder_2 = _context2.sent;
                      db = _yield$__varRecorder_2.db;

                      if (db) {
                        _context2.next = 6;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 6:
                      morphicDBName = db.name, serverURL = db.serverURL, snapshotLocation = db.snapshotLocation;
                      this.morphicDBName = morphicDBName;
                      this.serverURL = serverURL;
                      this.snapshotLocation = snapshotLocation;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function SaveWorldDialogModel_changeDB_() {
              return _SaveWorldDialogModel_changeDB_.apply(this, arguments);
            }

            return SaveWorldDialogModel_changeDB_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "SaveWorldDialogModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              morphicDBName: {},
              serverURL: {},
              snapshotLocation: {},
              worldName: {
                defaultValue: ""
              },
              tags: {
                defaultValue: ""
              },
              description: {
                defaultValue: ""
              },
              filePath: {
                derived: true,
                get: function get() {
                  return this.ui.filePathInput.input;
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/dialogs.cp.js";
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
          start: 845,
          end: 4663
        });
      })(__varRecorder__.ConfirmPromptModel);

      __varRecorder__.SaveWorldDialog = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.DarkPrompt, {
          defaultViewModel: __varRecorder__.SaveWorldDialogModel,
          name: "save world dialog",
          extent: __varRecorder__.pt(470, 320),
          submorphs: [{
            name: "prompt title",
            textString: "Save world"
          }, __varRecorder__.add({
            name: "prompt controls",
            clipMode: "hidden",
            extent: __varRecorder__.pt(455.5, 258.5),
            fill: __varRecorder__.Color.transparent,
            layout: new __varRecorder__.TilingLayout({
              align: "center",
              axis: "column",
              axisAlign: "center",
              orderByIndex: true,
              padding: __varRecorder__.rect(11, 11, 0, 0),
              spacing: 5
            }),
            submorphs: [{
              name: "first row",
              extent: __varRecorder__.pt(450, 50),
              fill: __varRecorder__.Color.transparent,
              layout: new __varRecorder__.TilingLayout({
                align: "center",
                axisAlign: "center",
                justifySubmorphs: "spaced",
                orderByIndex: true
              }),
              submorphs: [{
                type: __varRecorder__.Label,
                name: "storage label",
                fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                fontColor: __varRecorder__.Color.rgb(255, 255, 255),
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                nativeCursor: "pointer",
                position: __varRecorder__.pt(1.4, 3.4),
                textAndAttributes: ["store as:", null]
              }, __varRecorder__.part(__varRecorder__.DarkDropDownList, {
                name: "storage type selector",
                layout: new __varRecorder__.TilingLayout({
                  axisAlign: "center",
                  orderByIndex: true,
                  padding: __varRecorder__.rect(5, 0, -5, 0),
                  wrapSubmorphs: false
                }),
                extent: __varRecorder__.pt(105.1, 23),
                position: __varRecorder__.pt(96, 3),
                viewModel: {
                  listMaster: __varRecorder__.DarkList,
                  openListInWorld: true,
                  listAlign: "selection",
                  selection: "Morphic DB",
                  items: [{
                    string: "JSON",
                    value: "json",
                    isListItem: true
                  }, {
                    string: "Morphic DB",
                    value: "db",
                    isListItem: true
                  }]
                }
              }), {
                type: __varRecorder__.Label,
                name: "choose db button",
                fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                fontColor: __varRecorder__.Color.rgb(204, 204, 204),
                fontSize: 15,
                fontStyle: "bold",
                nativeCursor: "pointer",
                extent: __varRecorder__.pt(234, 25),
                fixedHeight: true,
                fixedWidth: true,
                reactsToPointer: false,
                textAndAttributes: ["Change DB ", null, "\uF1C0", {
                  fontFamily: "\"Font Awesome 6 Free\", \"Font Awesome 6 Brands\"",
                  fontWeight: "900"
                }, " ", {
                  backgroundColor: undefined,
                  fontColor: __varRecorder__.Color.rgb(204, 204, 204),
                  fontFamily: "IBM Plex Sans",
                  fontSize: 15,
                  fontStyle: "bold",
                  fontWeight: "normal",
                  letterSpacing: undefined,
                  lineHeight: 1.4,
                  nativeCursor: "text",
                  textAlign: undefined,
                  textDecoration: "none",
                  textStyleClasses: undefined,
                  wordSpacing: undefined
                }]
              }, __varRecorder__.part(__varRecorder__.InputLineDark, {
                name: "file path input",
                visible: false,
                position: __varRecorder__.pt(211.2, 0.5),
                extent: __varRecorder__.pt(234, 25),
                fontSize: 15,
                highlightWhenFocused: true,
                historyId: "lively.morphic-save-world-names",
                placeholder: "./path/to/snapshot.json"
              })]
            }, {
              name: "second row",
              extent: __varRecorder__.pt(450, 50),
              fill: __varRecorder__.Color.transparent,
              layout: new __varRecorder__.TilingLayout({
                align: "center",
                axisAlign: "center",
                justifySubmorphs: "spaced",
                orderByIndex: true
              }),
              submorphs: [{
                type: __varRecorder__.Label,
                name: "name label",
                fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                fontColor: __varRecorder__.Color.rgb(255, 255, 255),
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                nativeCursor: "pointer",
                position: __varRecorder__.pt(1, 40.1),
                textAndAttributes: ["save as: ", {}]
              }, __varRecorder__.part(__varRecorder__.InputLineDark, {
                name: "name input",
                fontSize: 15,
                extent: __varRecorder__.pt(365, 27),
                padding: __varRecorder__.rect(4, 4, 0, 0),
                historyId: "lively.morphic-save-world-names",
                position: __varRecorder__.pt(97, 38.4),
                submorphs: [{
                  name: "placeholder",
                  extent: __varRecorder__.pt(48, 29),
                  fontSize: 15,
                  padding: __varRecorder__.rect(4, 4, 0, 0)
                }]
              })]
            }, {
              name: "third row",
              extent: __varRecorder__.pt(450, 50),
              fill: __varRecorder__.Color.transparent,
              layout: new __varRecorder__.TilingLayout({
                align: "center",
                axisAlign: "center",
                justifySubmorphs: "spaced",
                orderByIndex: true
              }),
              submorphs: [{
                type: __varRecorder__.Label,
                name: "tag label",
                extent: __varRecorder__.pt(56, 16),
                fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                fontColor: __varRecorder__.Color.rgb(255, 255, 255),
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                nativeCursor: "pointer",
                position: __varRecorder__.pt(1, 79.8),
                textAndAttributes: ["tags:", null]
              }, __varRecorder__.part(__varRecorder__.InputLineDark, {
                name: "tag input",
                fontSize: 15,
                placeholder: "tag1 tag2 tag3 ...",
                extent: __varRecorder__.pt(365.5, 27),
                highlightWhenFocused: true,
                historyId: "lively.morphic-save-world-names",
                padding: __varRecorder__.rect(4, 4, 0, 0),
                position: __varRecorder__.pt(97, 76),
                scroll: __varRecorder__.pt(0, 1),
                submorphs: [{
                  name: "placeholder",
                  extent: __varRecorder__.pt(122, 29),
                  fontFamily: "IBM Plex Sans",
                  fontSize: 15,
                  nativeCursor: "text",
                  padding: __varRecorder__.rect(4, 4, 0, 0),
                  textAndAttributes: ["tag1 tag2 tag3 ...", null]
                }]
              })]
            }, {
              name: "fourth row",
              extent: __varRecorder__.pt(450, 115.3),
              fill: __varRecorder__.Color.transparent,
              layout: new __varRecorder__.TilingLayout({
                align: "right",
                justifySubmorphs: "spaced",
                orderByIndex: true,
                padding: __varRecorder__.rect(0, 15, 0, -15)
              }),
              submorphs: [{
                type: __varRecorder__.Label,
                name: "description label",
                extent: __varRecorder__.pt(84.5, 24.5),
                fontFamily: "IBM Plex Sans",
                fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
                fontColor: __varRecorder__.Color.rgb(255, 255, 255),
                fontSize: 15,
                nativeCursor: "pointer",
                position: __varRecorder__.pt(1, 116),
                textAndAttributes: ["Description:", null]
              }, {
                type: __varRecorder__.Text,
                name: "description",
                textAndAttributes: ["", null],
                readOnly: false,
                borderRadius: 5,
                clipMode: "auto",
                nativeCursor: "text",
                dropShadow: new __varRecorder__.ShadowObject({
                  distance: 3,
                  rotation: 75,
                  color: __varRecorder__.Color.rgba(0, 0, 0, 0.2)
                }),
                extent: __varRecorder__.pt(365, 85.9),
                fill: __varRecorder__.Color.rgb(229, 231, 233),
                fixedHeight: true,
                fixedWidth: true,
                fontFamily: "IBM Plex Sans",
                fontSize: 15,
                haloShadow: new __varRecorder__.ShadowObject({
                  distance: 4,
                  color: __varRecorder__.Color.rgba(0, 0, 0, 0.26),
                  blur: 10
                }),
                highlightWhenFocused: true,
                lineWrapping: "by-words",
                padding: __varRecorder__.rect(4, 4, 0, 0),
                position: __varRecorder__.pt(97, 115)
              }]
            }]
          }), __varRecorder__.add(__varRecorder__.part(__varRecorder__.OKCancelButtonWrapper))]
        });
      }, {
        module: "lively.ide/studio/dialogs.cp.js",
        "export": "SaveWorldDialog",
        range: {
          start: 4671,
          end: 11475
        }
      }, __varRecorder__.SaveWorldDialog);
      var SaveWorldDialog = exports('SaveWorldDialog', __varRecorder__.SaveWorldDialog);
      __varRecorder__.SaveWorldDialog = SaveWorldDialog;

    })
  };
}));
