System.register(['./__rootModule___commonjs-entry-2a340242.js', './index-4f2bdafd.js', './index-57981d2f.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js', './ui.cp-46daffed.js', './editor-modes-146d3c1c.js', './search-1fb0a4bc.js', './messages.cp-ccfb5763.js', './code-search.cp-140da4d6.js', './editor-plugin-b7298219.js', './dialogs.cp-40ebcbc0.js', 'lively.collab', './canvas-eb622915.js', './object-classes-cce74fc2.js', './morph-to-image-e16449de.js'], (function (exports, module) {
  'use strict';
  var _asyncToGenerator, Morph, World, MorphicDB, TilingLayout, Path, part, Ellipse, Icon, Label, component, stringToEasing, easings, pt, rect, Color, num, promise, fun, resource, initializeClass, Project;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      Morph = module.M;
      World = module.W;
      MorphicDB = module.a2;
      TilingLayout = module.T;
      Path = module.ae;
      part = module.p;
      Ellipse = module.af;
      Icon = module.j;
      Label = module.L;
      component = module.c;
      stringToEasing = module.a$;
      easings = module.$;
      pt = module.b;
      rect = module.a8;
      Color = module.C;
      num = module.aq;
      promise = module.a9;
      fun = module.x;
      resource = module.B;
      initializeClass = module.i;
    }, function (module) {
      Project = module.P;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      exports('main', main);

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.freezer/src/loading-screen.cp.js");

      function main() {
        return _main.apply(this, arguments);
      }

      function _main() {
        _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var ls;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  ls = __varRecorder__.part(__varRecorder__.LoadingScreen);
                  _context4.next = 3;
                  return ls.get("icon").whenFontLoaded();

                case 3:
                  ls.respondsToVisibleWindow = true;
                  $world.addMorph(ls);
                  ls.activate();
                  ls.relayout();

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _main.apply(this, arguments);
      }

      __varRecorder__.main = main;
      __varRecorder__.Morph = Morph;
      __varRecorder__.World = World;
      __varRecorder__.MorphicDB = MorphicDB;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.Path = Path;
      __varRecorder__.part = part;
      __varRecorder__.Ellipse = Ellipse;
      __varRecorder__.Icon = Icon;
      __varRecorder__.Label = Label;
      __varRecorder__.component = component;
      __varRecorder__.stringToEasing = stringToEasing;
      __varRecorder__.easings = easings;
      __varRecorder__.pt = pt;
      __varRecorder__.rect = rect;
      __varRecorder__.Color = Color;
      __varRecorder__.num = num;
      __varRecorder__.promise = promise;
      __varRecorder__.fun = fun;
      __varRecorder__.resource = resource;
      __varRecorder__.Project = Project;
      var WorldLoadingScreen = exports('WorldLoadingScreen', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.freezer/src/loading-screen.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("WorldLoadingScreen") && typeof __lively_classholder__.WorldLoadingScreen === "function" ? __lively_classholder__.WorldLoadingScreen : __lively_classholder__.WorldLoadingScreen = function WorldLoadingScreen(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "commands",
          get: function get() {
            var _this = this;

            return [{
              name: "resize on client",
              exec: function exec() {
                _this.relayout();
              }
            }];
          }
        }, {
          key: "activate",
          value: function () {
            var _WorldLoadingScreen_activate_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var progressBar, cssLoadingScreen, projectName, projectRepoOwner, worldName, filePath, snapshot;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!lively.FreezerRuntime) {
                        _context.next = 13;
                        break;
                      }

                      progressBar = this.get("package loading indicator");
                      cssLoadingScreen = this.get("css loading screen");
                      projectName = this.getProjectName();
                      projectRepoOwner = this.getProjectRepoOwner();
                      worldName = this.getWorldName();
                      filePath = this.getFilePath();
                      snapshot = this.getSnapshot();

                      if (snapshot) {
                        progressBar.isLayoutable = progressBar.visible = false;
                        cssLoadingScreen.isLayoutable = cssLoadingScreen.visible = true;
                      } else {
                        document.body.style.backgroundColor = "black";
                      }

                      if (filePath) {
                        this.get("json target indicator").animate({
                          opacity: 1,
                          duration: 300
                        });
                      }

                      _context.next = 12;
                      return this.transitionToLivelyWorld({
                        worldName: worldName,
                        filePath: filePath,
                        snapshot: snapshot,
                        projectName: projectName,
                        projectRepoOwner: projectRepoOwner
                      }, progressBar);

                    case 12:
                      progressBar.stopStepping();

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function WorldLoadingScreen_activate_() {
              return _WorldLoadingScreen_activate_.apply(this, arguments);
            }

            return WorldLoadingScreen_activate_;
          }()
        }, {
          key: "transitionToLivelyWorld",
          value: function () {
            var _WorldLoadingScreen_transitionToLivelyWorld_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref, progress) {
              var worldName, filePath, snapshot, projectName, projectRepoOwner, serverURL, _yield$import, bootstrap, existingProjects, foundProject;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      worldName = _ref.worldName, filePath = _ref.filePath, snapshot = _ref.snapshot, projectName = _ref.projectName, projectRepoOwner = _ref.projectRepoOwner;
                      serverURL = __varRecorder__.resource(window.SYSTEM_BASE_URL || document.location.origin).join("objectdb/").url;
                      _context2.next = 4;
                      return module.import('./bootstrap-eae411bd.js');

                    case 4:
                      _yield$import = _context2.sent;
                      bootstrap = _yield$import.bootstrap;
                      document.fonts.load("12px Noto Emoji");

                      if (!projectName) {
                        _context2.next = 14;
                        break;
                      }

                      _context2.next = 10;
                      return __varRecorder__.Project.listAvailableProjects();

                    case 10:
                      existingProjects = _context2.sent;
                      foundProject = existingProjects.filter(function (p) {
                        return p.name === projectName && p.projectRepoOwner === projectRepoOwner;
                      });

                      if (!(projectName !== "__newProject__" && !foundProject.length > 0)) {
                        _context2.next = 14;
                        break;
                      }

                      return _context2.abrupt("return", this.indicateMissing(true));

                    case 14:
                      _context2.t0 = worldName && worldName !== "__newWorld__";

                      if (!_context2.t0) {
                        _context2.next = 19;
                        break;
                      }

                      _context2.next = 18;
                      return __varRecorder__.MorphicDB.named("lively.morphic/objectdb/morphicdb", {
                        serverURL: serverURL
                      }).exists("world", worldName);

                    case 18:
                      _context2.t0 = !_context2.sent.exists;

                    case 19:
                      if (!_context2.t0) {
                        _context2.next = 21;
                        break;
                      }

                      return _context2.abrupt("return", this.indicateMissing(false));

                    case 21:
                      _context2.t1 = filePath;

                      if (!_context2.t1) {
                        _context2.next = 26;
                        break;
                      }

                      _context2.next = 25;
                      return __varRecorder__.resource(document.location.origin).join(filePath).exists();

                    case 25:
                      _context2.t1 = !_context2.sent;

                    case 26:
                      if (!_context2.t1) {
                        _context2.next = 28;
                        break;
                      }

                      return _context2.abrupt("return", this.indicateMissing(false));

                    case 28:
                      _context2.next = 30;
                      return bootstrap({
                        worldName: worldName,
                        filePath: filePath,
                        loadingIndicator: new __varRecorder__.Morph(),
                        progress: progress,
                        snapshot: snapshot,
                        projectName: projectName,
                        projectRepoOwner: projectRepoOwner
                      });

                    case 30:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function WorldLoadingScreen_transitionToLivelyWorld_(_x, _x2) {
              return _WorldLoadingScreen_transitionToLivelyWorld_.apply(this, arguments);
            }

            return WorldLoadingScreen_transitionToLivelyWorld_;
          }()
        }, {
          key: "getProjectName",
          value: function WorldLoadingScreen_getProjectName_() {
            if (!document.location.href.includes("projects")) return false;
            var loc = document.location;

            var query = __varRecorder__.resource(loc.href).query();

            var projectNameMatch = query.name || window.PROJECT_NAME;
            var projectName = projectNameMatch || false;
            return projectName;
          }
        }, {
          key: "getProjectRepoOwner",
          value: function WorldLoadingScreen_getProjectRepoOwner_() {
            if (!document.location.href.includes("projects")) return false;
            var loc = document.location;

            var query = __varRecorder__.resource(loc.href).query();

            var projectRepoOwnerMatch = query.owner || window.OWNER;
            var projectRepoOwner = projectRepoOwnerMatch || false;
            return projectRepoOwner;
          }
        }, {
          key: "getWorldName",
          value: function WorldLoadingScreen_getWorldName_() {
            if (!document.location.href.includes("worlds/")) return false;
            var loc = document.location;

            var query = __varRecorder__.resource(loc.href).query();

            var worldNameMatch = query.name || window.WORLD_NAME;
            var worldName = worldNameMatch || false;
            return worldName;
          }
        }, {
          key: "getFilePath",
          value: function WorldLoadingScreen_getFilePath_() {
            var loc = document.location;

            var query = __varRecorder__.resource(loc.href).query();

            return query.file || false;
          }
        }, {
          key: "getSnapshot",
          value: function WorldLoadingScreen_getSnapshot_() {
            var loc = document.location;

            var query = __varRecorder__.resource(loc.href).query();

            return query.snapshot || window.SNAPSHOT_PATH || false;
          }
        }, {
          key: "relayout",
          value: function WorldLoadingScreen_relayout_() {
            $world._cachedWindowBounds = null;
            this.setBounds($world.windowBounds());
            this.get("json target indicator").topRight = this.innerBounds().insetBy(25).topRight();
          }
        }, {
          key: "indicateMissing",
          value: function WorldLoadingScreen_indicateMissing_(project) {
            this.get("package loading indicator").visible = this.get("package loading indicator").isLayoutable = false;
            this.get("broken heart").visible = this.get("broken heart").isLayoutable = true;
            this.get("error text").textString = project ? "Sorry, the project you requested cannot be found on this machine" : "Sorry, the world you requested cannot be found on this machine";
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "WorldLoadingScreen";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              title: {
                derived: true,
                get: function get() {
                  return "lively.next (".concat(document.location.hostname, ")");
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./src/loading-screen.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.freezer",
              version: "0.1.0"
            };
          }
        }, {
          start: 336,
          end: 4908
        });
      }(__varRecorder__.Morph));
      __varRecorder__.WorldLoadingScreen = WorldLoadingScreen;
      __varRecorder__.WorldLoadingScreen = WorldLoadingScreen;

      var ModuleProgress = exports('default', function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.freezer/src/loading-screen.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ModuleProgress") && typeof __lively_classholder__.ModuleProgress === "function" ? __lively_classholder__.ModuleProgress : __lively_classholder__.ModuleProgress = function ModuleProgress(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "fadeIntoBack",
          value: function ModuleProgress_fadeIntoBack_() {
            this.animate({
              blur: 5
            });
          }
        }, {
          key: "relayout",
          value: function ModuleProgress_relayout_() {
            var _this$owner;

            if (this.isComponent || ((_this$owner = this.owner) === null || _this$owner === void 0 ? void 0 : _this$owner.isWorld)) return;
            this.bottomCenter = $world.visibleBounds().center().subXY(0, 100);
          }
        }, {
          key: "reset",
          value: function ModuleProgress_reset_() {
            var stageMorphs = this.getAllNamed(/stage/);
            this.blur = 0;
            this.stages = new Map(stageMorphs.map(function (stage) {
              return [stage, "not loaded"];
            }));
            this.updateProgressVisualization();
            this.getAllNamed(/label/).map(function (m) {
              m._cachedTextBounds = null;
              m.fit();
            });
          }
        }, {
          key: "updateProgressBar",
          value: function ModuleProgress_updateProgressBar_() {
            if (!this._lastWidth) return;
            this.relayout();
            var pb = this.get("progress path");
            var cm = this.get("stage lang").get("checkmark");

            var p = __varRecorder__.stringToEasing(__varRecorder__.easings.inOutExpo)(__varRecorder__.num.clamp(Date.now() - this._timeStamp, 0, 1000) / 1000);

            var targetWidth = this._currentProgress;
            pb.width = __varRecorder__.num.interpolate(p, this._lastWidth, targetWidth);
            pb.position = cm.transformPointToMorph(this, cm.extent.scaleByPt(__varRecorder__.pt(1, 0.5)));
          }
        }, {
          key: "fastLoadTest",
          value: function () {
            var _ModuleProgress_fastLoadTest_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var mods, _i, _mods, mod;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.reset();
                      mods = ["lively.lang", "lively.ast", "lively.source-transform", "lively.classes", "lively.vm", "lively.modules", "lively.storage", "lively.morphic"];
                      _i = 0, _mods = mods;

                    case 3:
                      if (!(_i < _mods.length)) {
                        _context3.next = 11;
                        break;
                      }

                      mod = _mods[_i];
                      this.finishPackage({
                        packageName: mod,
                        loaded: true
                      });
                      _context3.next = 8;
                      return __varRecorder__.promise.delay(200);

                    case 8:
                      _i++;
                      _context3.next = 3;
                      break;

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function ModuleProgress_fastLoadTest_() {
              return _ModuleProgress_fastLoadTest_.apply(this, arguments);
            }

            return ModuleProgress_fastLoadTest_;
          }()
        }, {
          key: "finishPackage",
          value: function ModuleProgress_finishPackage_(_ref2) {
            var _this2 = this;

            var packageName = _ref2.packageName,
                frozen = _ref2.frozen,
                loaded = _ref2.loaded;
            var stageName = "stage " + packageName.replace("lively.", "");
            var stageMorph = this.get(stageName);
            if (frozen) this.stages.set(stageMorph, "frozen");
            if (loaded) this.stages.set(stageMorph, "loaded");

            __varRecorder__.fun.debounceNamed("update progress", 200, function () {
              _this2.updateProgressVisualization();
            })();
          }
        }, {
          key: "updateProgressVisualization",
          value: function ModuleProgress_updateProgressVisualization_() {
            var _this3 = this;

            var progressPath = this.getSubmorphNamed("progress path");
            var stages = this.getAllNamed(/stage/);
            var stop = stages[0];
            stages.forEach(function (stage) {
              var checkmark = stage.get("checkmark");
              var frozenIndicator = stage.get("frozen indicator");
              var icon = stage.get("icon");

              var state = _this3.stages.get(stage);

              if (state !== "not loaded") {
                stop = checkmark;

                if (state === "loaded") {
                  if (checkmark.visible) return;
                  checkmark.visible = true;
                }

                if (state === "frozen") {
                  if (frozenIndicator.visible) return;
                  frozenIndicator.visible = true;
                }

                icon.opacity = 1;
              } else {
                checkmark.visible = false;
                frozenIndicator.visible = false;
                icon.opacity = 0.2;
              }
            });
            var progress = this.localizePointFrom(__varRecorder__.pt(-10, 0), stop).x;
            var dist = Math.max(20, progress - progressPath.left);
            this._lastWidth = progressPath.width;
            this._timeStamp = Date.now();
            this._currentProgress = dist;
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ModuleProgress";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              stages: {
                serialize: false,
                after: ["submorphs"],
                initialize: function initialize() {
                  var _this4 = this;

                  this.whenRendered().then(function () {
                    _this4.reset();
                  });
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./src/loading-screen.cp.js";
          },
          unsubscribeFromToplevelDefinitionChanges: function unsubscribeFromToplevelDefinitionChanges() {
            return function () {};
          },
          subscribeToToplevelDefinitionChanges: function subscribeToToplevelDefinitionChanges() {
            return function () {};
          },
          "package": function _package() {
            return {
              name: "lively.freezer",
              version: "0.1.0"
            };
          }
        }, {
          start: 4924,
          end: 8083
        });
      }(__varRecorder__.Morph));
      __varRecorder__.Stage = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          name: "stage",
          extent: __varRecorder__.pt(58, 119),
          fill: __varRecorder__.Color.rgba(46, 75, 223, 0),
          layout: new __varRecorder__.TilingLayout({
            orderByIndex: true,
            axis: "column",
            align: "center",
            axisAlign: "center",
            spacing: 10
          }),
          submorphs: [{
            type: __varRecorder__.Label,
            name: "icon",
            fontSize: 30.108,
            opacity: 0.2,
            lineHeight: 1,
            textAndAttributes: __varRecorder__.Icon.textAttribute("language")
          }, {
            type: __varRecorder__.Label,
            name: "label",
            fill: __varRecorder__.Color.rgba(255, 255, 255, 0),
            fontColor: __varRecorder__.Color.rgb(64, 64, 64),
            fontSize: 16,
            fontWeight: "500",
            nativeCursor: "pointer",
            textAndAttributes: ["lang", null]
          }, {
            type: __varRecorder__.Ellipse,
            name: "stop",
            borderColor: __varRecorder__.Color.rgb(127, 140, 141),
            borderWidth: 4,
            extent: __varRecorder__.pt(27, 27),
            fill: __varRecorder__.Color.rgb(253, 254, 254),
            submorphs: [{
              type: __varRecorder__.Label,
              name: "checkmark",
              fontColor: __varRecorder__.Color.rgb(100, 221, 23),
              fontSize: 27,
              lineHeight: 1,
              textAndAttributes: __varRecorder__.Icon.textAttribute("check-circle"),
              visible: true
            }, {
              type: __varRecorder__.Label,
              name: "frozen indicator",
              borderRadius: 30,
              fill: __varRecorder__.Color.rgb(0, 176, 255),
              fontColor: __varRecorder__.Color.rgb(255, 255, 255),
              fontSize: 20,
              lineHeight: 1,
              padding: __varRecorder__.rect(4, 3, 0, 0),
              textAndAttributes: __varRecorder__.Icon.textAttribute("snowflake"),
              visible: true
            }]
          }]
        });
      }, {
        module: "lively.freezer/src/loading-screen.cp.js",
        "export": "Stage",
        range: {
          start: 8090,
          end: 9442
        }
      }, __varRecorder__.Stage);
      __varRecorder__.ProgressIndicator = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          type: __varRecorder__.ModuleProgress,
          borderRadius: 6,
          dropShadow: false,
          extent: __varRecorder__.pt(1003, 400),
          fill: __varRecorder__.Color.rgba(253, 254, 254, 0),
          name: "progress indicator",
          layout: new __varRecorder__.TilingLayout({
            align: "center",
            spacing: 23
          }),
          submorphs: [{
            type: __varRecorder__.Path,
            name: "progress path",
            borderColor: __varRecorder__.Color.rgb(127, 140, 141),
            borderWidth: 3,
            endMarker: {
              children: [{
                d: "M0,0 L10,5 L0,10 z",
                tagName: "path"
              }],
              fill: "rgba(127,140,141,1)",
              id: "end-marker",
              markerHeight: "5",
              markerWidth: "5",
              orient: "auto",
              refX: "5",
              refY: "5",
              tagName: "marker",
              viewBox: "0 0 10 10"
            },
            extent: __varRecorder__.pt(20, 3),
            fill: __varRecorder__.Color.transparent,
            isLayoutable: false,
            vertices: [{
              position: __varRecorder__.pt(0, 0),
              isSmooth: false,
              controlPoints: {
                next: __varRecorder__.pt(0, 0),
                previous: __varRecorder__.pt(0, 0)
              }
            }, {
              position: __varRecorder__.pt(20, 0),
              isSmooth: false,
              controlPoints: {
                next: __varRecorder__.pt(0, 0),
                previous: __varRecorder__.pt(0, 0)
              }
            }],
            visible: false
          }, __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage lang",
            extent: __varRecorder__.pt(58, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("language")
            }, {
              name: "label",
              textString: "lang"
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage ast",
            extent: __varRecorder__.pt(47, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("tree")
            }, {
              name: "label",
              textAndAttributes: ["ast", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage source-transform",
            extent: __varRecorder__.pt(149, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("retweet")
            }, {
              name: "label",
              textAndAttributes: ["source transform", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage classes",
            extent: __varRecorder__.pt(76, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("sitemap")
            }, {
              name: "label",
              textAndAttributes: ["classes", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage vm",
            extent: __varRecorder__.pt(58, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("cogs")
            }, {
              name: "label",
              textAndAttributes: ["VM", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage modules",
            extent: __varRecorder__.pt(85, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("box-open")
            }, {
              name: "label",
              textAndAttributes: ["modules", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage storage",
            extent: __varRecorder__.pt(77, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("database")
            }, {
              name: "label",
              textAndAttributes: ["storage", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage morphic",
            extent: __varRecorder__.pt(82, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("cube")
            }, {
              name: "label",
              textAndAttributes: ["morphic", null]
            }]
          }), __varRecorder__.part(__varRecorder__.Stage, {
            name: "stage world",
            extent: __varRecorder__.pt(64, 119),
            submorphs: [{
              name: "icon",
              textAndAttributes: __varRecorder__.Icon.textAttribute("globe-europe")
            }, {
              name: "label",
              textAndAttributes: ["world", null]
            }]
          })]
        });
      }, {
        module: "lively.freezer/src/loading-screen.cp.js",
        "export": "ProgressIndicator",
        range: {
          start: 9450,
          end: 12739
        }
      }, __varRecorder__.ProgressIndicator);
      __varRecorder__.ErrorIndicator = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          type: __varRecorder__.Label,
          fontColor: __varRecorder__.Color.rgb(231, 76, 60),
          fontSize: 211,
          isLayoutable: false,
          submorphs: [{
            type: "text",
            name: "error text",
            borderColor: __varRecorder__.Color.rgb(23, 160, 251),
            extent: __varRecorder__.pt(345.1, 104.8),
            position: __varRecorder__.pt(-64.5, 242.5),
            fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
            fixedHeight: true,
            fixedWidth: true,
            fontSize: 22,
            fontWeight: "bold",
            lineWrapping: true,
            nativeCursor: "default",
            readOnly: true,
            textAlign: "center",
            textAndAttributes: ["Sorry, the world you requested cannot be found on this machine.", null]
          }],
          textAndAttributes: __varRecorder__.Icon.textAttribute("heart-broken")
        });
      }, {
        module: "lively.freezer/src/loading-screen.cp.js",
        "export": "ErrorIndicator",
        range: {
          start: 12747,
          end: 13410
        }
      }, __varRecorder__.ErrorIndicator);
      __varRecorder__.LoadingScreen = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          type: __varRecorder__.WorldLoadingScreen,
          name: "loading screen",
          extent: __varRecorder__.pt(1000, 600),
          layout: new __varRecorder__.TilingLayout({
            align: "center",
            axisAlign: "center",
            orderByIndex: true,
            spacing: 10
          }),
          submorphs: [{
            type: __varRecorder__.Label,
            name: "json target indicator",
            borderColor: __varRecorder__.Color.rgb(0, 0, 0),
            borderRadius: 6,
            borderWidth: 2,
            fontSize: 20,
            fontWeight: "bold",
            isLayoutable: false,
            opacity: 0,
            padding: __varRecorder__.rect(5, 2, 5, 2),
            textAndAttributes: ["JSON", null]
          }, __varRecorder__.part(__varRecorder__.ErrorIndicator, {
            name: "broken heart",
            visible: false
          }), __varRecorder__.part(__varRecorder__.ProgressIndicator, {
            name: "package loading indicator",
            opacity: 0
          }), {
            type: "html",
            name: "css loading screen",
            cssDeclaration: "#loading-bar {\n  height: 20px;\n  width: 400px;\n  color: gray;\n  border-style: solid;\n  border-color: gray;\n  border-width: 2px;\n  border-radius: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  overflow: hidden;\n  margin: 0px 0 0 -202px;\n}\n\n#progress {\n  background-color: gray;\n  height: 100%;\n  animation: load 5s;\n}\n\n@keyframes load {\n  from { width: 0% }\n  to { width: 100% }\n}",
            extent: __varRecorder__.pt(940, 274.3),
            html: "<div style=position: fixed; z-index: 1; height: 100%; width: 100%; background-color: transparent\">\n  <div id=\"loading-bar\">\n     <div id=\"progress\" style=\"width: 100%;\">\n  </div>\n</div></div>",
            isLayoutable: false,
            visible: false
          }]
        });
      }, {
        module: "lively.freezer/src/loading-screen.cp.js",
        "export": "LoadingScreen",
        range: {
          start: 13418,
          end: 14940
        }
      }, __varRecorder__.LoadingScreen);
      __varRecorder__.main = main;
      var TITLE = exports('TITLE', "lively.next");
      __varRecorder__.TITLE = TITLE;
      __varRecorder__.TITLE = TITLE;
      var WORLD_CLASS = exports('WORLD_CLASS', __varRecorder__.World);
      __varRecorder__.WORLD_CLASS = WORLD_CLASS;
      __varRecorder__.WORLD_CLASS = WORLD_CLASS;
      var EXCLUDED_MODULES = exports('EXCLUDED_MODULES', ["lively.collab", "mocha-es6", "mocha", "picomatch", "path-is-absolute", "fs.realpath", "rollup", "@babel/preset-env", "@babel/plugin-syntax-import-meta", "@rollup/plugin-json", "@rollup/plugin-commonjs", "rollup-plugin-polyfill-node", "babel-plugin-transform-es2015-modules-systemjs"]);
      __varRecorder__.EXCLUDED_MODULES = EXCLUDED_MODULES;
      __varRecorder__.EXCLUDED_MODULES = EXCLUDED_MODULES;
      var ProgressIndicator = exports('ProgressIndicator', __varRecorder__.ProgressIndicator);
      __varRecorder__.ProgressIndicator = ProgressIndicator;
      __varRecorder__["default"] = ModuleProgress;

    })
  };
}));
