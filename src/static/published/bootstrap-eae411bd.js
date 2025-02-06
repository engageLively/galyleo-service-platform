System.register(['./__rootModule___commonjs-entry-2a340242.js'], (function (exports, module) {
  'use strict';
  var _asyncToGenerator, resource, unregisterExtension, registerExtension, loadViaScript, string, obj, modules, easings, adoptObject;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      resource = module.B;
      unregisterExtension = module.g3;
      registerExtension = module.Z;
      loadViaScript = module.fR;
      string = module.u;
      obj = module.y;
      modules = module.a6;
      easings = module.$;
      adoptObject = module.aM;
    }],
    execute: (function () {

      exports('bootstrap', bootstrap);

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.freezer/src/util/bootstrap.js");

      function polyfills() {
        var loads = [];

        if (!("PointerEvent" in window)) {
          loads.push(__varRecorder__.loadViaScript(__varRecorder__.resource(System.baseURL).join("/lively.next-node_modules/pepjs/dist/pep.js").url));
        }

        if (!("fetch" in window)) {
          loads.push(__varRecorder__.loadViaScript("//cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.js"));
        }

        return Promise.all(loads);
      }

      __varRecorder__.polyfills = polyfills;

      function importPackageAndDo(packageURL, doFunc) {
        var li = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var name = packageURL.split("/").slice(-1)[0];
        if (li) li.label = "loading ".concat(name);
        return lively.modules.importPackage(packageURL).then(doFunc || function () {});
      }

      __varRecorder__.importPackageAndDo = importPackageAndDo;

      function extractModules(packageName) {
        Object.keys(lively.FreezerRuntime.registry).filter(function (k) {
          return k.startsWith(packageName);
        }).forEach(function (id) {
          __varRecorder__.extractedModules[__varRecorder__.resource(System.baseURL).join(id).url] = Object.assign({}, lively.FreezerRuntime.registry[id].exports);
        });
      }

      __varRecorder__.extractModules = extractModules;

      function loadComponents() {
        return _loadComponents.apply(this, arguments);
      }

      function _loadComponents() {
        _loadComponents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return module.import('./index-4f2bdafd.js').then(function (n) { return n.w; });

                case 2:
                  _context10.next = 4;
                  return module.import('./ui.cp-46daffed.js').then(function (n) { return n.Z; });

                case 4:
                  _context10.next = 6;
                  return module.import('./ui.cp-46daffed.js').then(function (n) { return n.$; });

                case 6:
                  _context10.next = 8;
                  return module.import('./index-86b6196b.js');

                case 8:
                  _context10.next = 10;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.gc; });

                case 10:
                  _context10.next = 12;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.gd; });

                case 12:
                  _context10.next = 14;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.g8; });

                case 14:
                  __varRecorder__.extractModules("lively.bindings");

                  __varRecorder__.extractModules("lively.shell");

                  __varRecorder__.extractModules("lively.ide");

                  __varRecorder__.extractModules("lively.components");

                case 18:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));
        return _loadComponents.apply(this, arguments);
      }

      __varRecorder__.loadComponents = loadComponents;

      function installFetchHook() {
        function logFetch(proceed, load) {
          __varRecorder__.loads++;
          return proceed(load);
        }

        window.__logFetch = logFetch;
        lively.modules.installHook("fetch", logFetch);
      }

      __varRecorder__.installFetchHook = installFetchHook;

      function bootstrapLivelySystem(progress, loadConfig) {
        return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var m;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return progress.whenRendered();

                case 2:
                  if (!(loadConfig["lively.lang"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 5;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.g5; });

                case 5:
                  m = _context.sent;

                  __varRecorder__.extractModules("lively.lang");

                  progress.finishPackage({
                    packageName: "lively.lang",
                    frozen: true
                  });
                  delete m._prevLivelyGlobal;

                case 9:
                  if (!(loadConfig["lively.ast"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 12;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.dX; });

                case 12:
                  lively.ast = _context.sent;

                  __varRecorder__.extractModules("lively.ast");

                  progress.finishPackage({
                    packageName: "lively.ast",
                    frozen: true
                  });

                case 15:
                  if (!(loadConfig["lively.source-transform"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 21;
                    break;
                  }

                  _context.next = 18;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.g6; });

                case 18:
                  lively.sourceTransform = _context.sent;

                  __varRecorder__.extractModules("lively.source-transform");

                  progress.finishPackage({
                    packageName: "lively.source-transform",
                    frozen: true
                  });

                case 21:
                  if (!(loadConfig["lively.classes"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 29;
                    break;
                  }

                  _context.next = 24;
                  return module.import('./object-classes-cce74fc2.js');

                case 24:
                  _context.next = 26;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.eq; });

                case 26:
                  lively.classes = _context.sent;

                  __varRecorder__.extractModules("lively.class");

                  progress.finishPackage({
                    packageName: "lively.classes",
                    frozen: true
                  });

                case 29:
                  if (!(loadConfig["lively.vm"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 35;
                    break;
                  }

                  _context.next = 32;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.d_; });

                case 32:
                  lively.vm = _context.sent;

                  __varRecorder__.extractModules("lively.vm");

                  progress.finishPackage({
                    packageName: "lively.vm",
                    frozen: true
                  });

                case 35:
                  if (!(loadConfig["lively.modules"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 40;
                    break;
                  }

                  _context.next = 38;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.a6; });

                case 38:
                  __varRecorder__.extractModules("lively.modules");

                  progress.finishPackage({
                    packageName: "lively.modules",
                    frozen: true
                  });

                case 40:
                  if (!(loadConfig["lively.storage"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 45;
                    break;
                  }

                  _context.next = 43;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.ge; });

                case 43:
                  __varRecorder__.extractModules("lively.storage");

                  progress.finishPackage({
                    packageName: "lively.storage",
                    frozen: true
                  });

                case 45:
                  if (!(loadConfig["lively.morphic"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context.next = 73;
                    break;
                  }

                  _context.next = 48;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.ga; });

                case 48:
                  __varRecorder__.extractModules("lively.resources");

                  _context.next = 51;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.gb; });

                case 51:
                  _context.next = 53;
                  return module.import('./index-9ef930ec.js');

                case 53:
                  __varRecorder__.extractModules("lively.2lively");

                  _context.next = 56;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.g9; });

                case 56:
                  __varRecorder__.extractModules("lively.serializer2");

                  _context.next = 59;
                  return __varRecorder__.loadComponents();

                case 59:
                  _context.next = 61;
                  return module.import('./ui.cp-46daffed.js').then(function (n) { return n.a3; });

                case 61:
                  __varRecorder__.extractModules("lively.halos");

                  _context.next = 64;
                  return module.import('./ui.cp-46daffed.js').then(function (n) { return n.Y; });

                case 64:
                  __varRecorder__.extractModules("lively-system-interface");

                  _context.next = 67;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.g7; });

                case 67:
                  __varRecorder__.extractModules("lively.graphics");

                  _context.next = 70;
                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.gf; });

                case 70:
                  lively.morphic = _context.sent;

                  __varRecorder__.extractModules("lively.morphic");

                  progress.finishPackage({
                    packageName: "lively.morphic",
                    frozen: true
                  });

                case 73:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var baseURL, oldSystem, initBaseURL, packageCached, System, mod, realignedId, m;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  baseURL = window.SYSTEM_BASE_URL || document.location.origin;
                  oldSystem = window.System;
                  initBaseURL = oldSystem.baseURL;

                  if (initBaseURL.endsWith("/")) {
                    initBaseURL = initBaseURL.slice(0, -1);
                  }

                  _context2.next = 6;
                  return __varRecorder__.resource(baseURL).join("package-registry.json").readJson();

                case 6:
                  packageCached = _context2.sent;
                  _context2.next = 9;
                  return __varRecorder__.loadViaScript(__varRecorder__.resource(baseURL).join("/lively.next-node_modules/@babel/standalone/babel.js").url);

                case 9:
                  _context2.next = 11;
                  return __varRecorder__.loadViaScript(__varRecorder__.resource(baseURL).join("/lively.next-node_modules/systemjs/dist/system.src.js").url);

                case 11:
                  _context2.next = 13;
                  return __varRecorder__.loadViaScript(__varRecorder__.resource(baseURL).join("/lively.modules/systemjs-init.js").url);

                case 13:
                  System = lively.modules.getSystem("bootstrapped", {
                    baseURL: baseURL
                  });
                  lively.modules.changeSystem(System, true);
                  System["__lively.modules__packageRegistry"] = lively.modules.PackageRegistry.fromJSON(System, packageCached);

                  for (mod in __varRecorder__.extractedModules) {
                    realignedId = mod.replace(initBaseURL, baseURL);
                    System.set(realignedId, System.newModule(__varRecorder__.extractedModules[mod]));
                    m = lively.modules.module(realignedId);
                    m._recorder = __varRecorder__.extractedModules[mod];
                    m._frozenModule = true;
                  }

                  oldSystem.config({
                    baseURL: baseURL
                  });

                  __varRecorder__.installFetchHook();

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(loadConfig["lively.lang"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", __varRecorder__.importPackageAndDo("lively.lang", function (m) {
                    progress.finishPackage({
                      packageName: "lively.lang",
                      loaded: true
                    });
                    delete m._prevLivelyGlobal;
                  }));

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  progress.opacity = 1;

                  if (!(loadConfig["lively.ast"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return", __varRecorder__.importPackageAndDo("lively.ast", function (m) {
                    progress.finishPackage({
                      packageName: "lively.ast",
                      loaded: true
                    });
                    lively.ast = m;
                  }));

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(loadConfig["lively.source-transform"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context5.next = 2;
                    break;
                  }

                  return _context5.abrupt("return", __varRecorder__.importPackageAndDo("lively.source-transform", function (m) {
                    progress.finishPackage({
                      packageName: "lively.source-transform",
                      loaded: true
                    });
                    lively.sourceTransform = m;
                  }));

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!(loadConfig["lively.classes"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context6.next = 2;
                    break;
                  }

                  return _context6.abrupt("return", __varRecorder__.importPackageAndDo("lively.classes", function (m) {
                    progress.finishPackage({
                      packageName: "lively.classes",
                      loaded: true
                    });
                    lively.classes = m;
                  }));

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(loadConfig["lively.vm"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context7.next = 2;
                    break;
                  }

                  return _context7.abrupt("return", __varRecorder__.importPackageAndDo("lively.vm", function (m) {
                    progress.finishPackage({
                      packageName: "lively.vm",
                      loaded: true
                    });
                    lively.vm = m;
                  }));

                case 2:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          var afterImport;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  afterImport = function _afterImport(m) {
                    lively.modules = m;
                    lively.modules.unwrapModuleLoad();
                    lively.modules.unwrapModuleResolution();
                    lively.modules.wrapModuleLoad();
                    lively.modules.wrapModuleResolution();

                    __varRecorder__.installFetchHook();

                    var oldRegistry = System["__lively.modules__packageRegistry"];
                    delete System["__lively.modules__packageRegistry"];
                    var newRegistry = System["__lively.modules__packageRegistry"] = m.PackageRegistry.ofSystem(System);
                    Object.assign(newRegistry, __varRecorder__.obj.select(oldRegistry, ["packageMap", "individualPackageDirs", "devPackageDirs", "packageBaseDirs"]));
                    newRegistry.resetByURL();
                    var loadedPackages = newRegistry.allPackages();
                    var instrumentedPackageClass = lively.modules.module("lively.modules/src/packages/package.js").recorder.Package;
                    loadedPackages.filter(function (pkg) {
                      return !pkg.constructor[Symbol["for"]("lively-module-meta")];
                    }).forEach(function (pkg) {
                      __varRecorder__.adoptObject(pkg, instrumentedPackageClass);
                    });
                    var loadedModules = Object.values(System["__lively.modules__loadedModules"]);
                    var instrumentedModuleInterface = lively.modules.module("lively.modules/src/module.js").recorder.ModuleInterface;
                    loadedModules.filter(function (mod) {
                      return !mod.constructor[Symbol["for"]("lively-module-meta")];
                    }).forEach(function (mod) {
                      __varRecorder__.adoptObject(mod, instrumentedModuleInterface);
                    });
                  };

                  if (!(loadConfig["lively.modules"] === "frozen" || __varRecorder__.fastLoad)) {
                    _context8.next = 5;
                    break;
                  }

                  System._scripting = lively.modules.scripting;
                  _context8.next = 7;
                  break;

                case 5:
                  _context8.next = 7;
                  return __varRecorder__.importPackageAndDo("lively.modules", afterImport);

                case 7:
                  progress.finishPackage({
                    packageName: "lively.modules",
                    loaded: true
                  });

                case 8:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }))).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  if (!(loadConfig["lively.storage"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context9.next = 2;
                    break;
                  }

                  return _context9.abrupt("return", __varRecorder__.importPackageAndDo("lively.storage", function (m) {
                    progress.finishPackage({
                      packageName: "lively.storage",
                      loaded: true
                    });
                    lively.storage = m;
                  }));

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        })));
      }

      __varRecorder__.bootstrapLivelySystem = bootstrapLivelySystem;

      function fastPrepLivelySystem() {
        return Promise.resolve().then(function () {
          return __varRecorder__.resource(System.baseURL).join("package-registry.json").readJson();
        }).then(function (packageCached) {
          System["__lively.modules__packageRegistry"] = lively.modules.PackageRegistry.fromJSON(System, packageCached);
          return System;
        });
      }

      __varRecorder__.fastPrepLivelySystem = fastPrepLivelySystem;

      function bootstrap(_x) {
        return _bootstrap.apply(this, arguments);
      }

      function _bootstrap() {
        _bootstrap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(_ref10) {
          var filePath, worldName, projectName, projectRepoOwner, snapshot, commit, progress, _ref10$logError, logError, loadConfig, oldEnv, morphic, landingPageUrl, opts, World, loadMorphFromSnapshot, loadWorld, m, w, LivelyWorld, _loadWorld, printed;

          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  filePath = _ref10.filePath, worldName = _ref10.worldName, projectName = _ref10.projectName, projectRepoOwner = _ref10.projectRepoOwner, snapshot = _ref10.snapshot, commit = _ref10.commit, progress = _ref10.progress, _ref10$logError = _ref10.logError, logError = _ref10$logError === void 0 ? function (err) {
                    return console.log(err);
                  } : _ref10$logError;
                  _context12.prev = 1;
                  loadConfig = JSON.parse(localStorage.getItem("lively.load-config") || "{\"lively.lang\":\"dynamic\",\"lively.ast\":\"dynamic\",\"lively.source-transform\":\"dynamic\",\"lively.classes\":\"dynamic\",\"lively.vm\":\"dynamic\",\"lively.modules\":\"dynamic\",\"lively.storage\":\"dynamic\",\"lively.morphic\":\"dynamic\"}");
                  _context12.next = 5;
                  return __varRecorder__.polyfills();

                case 5:
                  oldEnv = $world.env;

                  if (!__varRecorder__.doBootstrap) {
                    _context12.next = 11;
                    break;
                  }

                  _context12.next = 9;
                  return __varRecorder__.bootstrapLivelySystem(progress, loadConfig);

                case 9:
                  _context12.next = 13;
                  break;

                case 11:
                  _context12.next = 13;
                  return __varRecorder__.fastPrepLivelySystem();

                case 13:
                  _context12.next = 15;
                  return lively.modules.registerPackage("lively.2lively");

                case 15:
                  if (__varRecorder__.askBeforeQuit) {
                    window.addEventListener("beforeunload", function (evt) {
                      var msg = "Really?";
                      evt.returnValue = msg;
                      return msg;
                    }, true);
                  }

                  if (!(loadConfig["lively.morphic"] === "dynamic" && !__varRecorder__.fastLoad)) {
                    _context12.next = 23;
                    break;
                  }

                  _context12.next = 19;
                  return lively.modules.importPackage("lively.morphic");

                case 19:
                  morphic = _context12.sent;
                  progress.finishPackage({
                    packageName: "lively.morphic",
                    loaded: true
                  });
                  _context12.next = 24;
                  break;

                case 23:
                  morphic = lively.morphic;

                case 24:
                  window.onresize = null;
                  lively.FreezerRuntime = false;
                  landingPageUrl = document.location;
                  _context12.prev = 27;
                  opts = {
                    root: $world.env.renderer.bodyNode,
                    verbose: true,
                    localconfig: true,
                    l2l: true,
                    shell: true,
                    moduleManager: lively.modules,
                    onRenderStart: function () {
                      var _onRenderStart = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                if (!(loadConfig["lively.morphic"] === "dynamic" && !__varRecorder__.fastLoad)) {
                                  _context11.next = 11;
                                  break;
                                }

                                document.body.style.background = "white";
                                progress.finishPackage({
                                  packageName: "world",
                                  loaded: true
                                });
                                progress.opacity = 0;
                                _context11.next = 6;
                                return oldEnv.renderer.worldMorph.animate({
                                  opacity: 0
                                });

                              case 6:
                                oldEnv.renderer.renderStep();
                                _context11.next = 9;
                                return oldEnv.renderer.clear();

                              case 9:
                                oldEnv.fontMetric.uninstall();
                                oldEnv.eventDispatcher.uninstall();

                              case 11:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));

                      function onRenderStart() {
                        return _onRenderStart.apply(this, arguments);
                      }

                      return onRenderStart;
                    }()
                  };

                  if (!snapshot) {
                    _context12.next = 57;
                    break;
                  }

                  if (!snapshot.startsWith("http")) snapshot = __varRecorder__.resource(System.baseURL).join(snapshot).url;
                  _context12.next = 33;
                  return lively.modules.module("lively.morphic/world.js").recorder;

                case 33:
                  __varRecorder__.__inter0__ = _context12.sent;
                  World = __varRecorder__.__inter0__.World;
                  _context12.next = 37;
                  return lively.modules.module("lively.morphic/world-loading.js").recorder;

                case 37:
                  __varRecorder__.__inter1__ = _context12.sent;
                  loadWorld = __varRecorder__.__inter1__.loadWorld;
                  _context12.next = 41;
                  return lively.modules.module("lively.morphic/serialization.js").recorder;

                case 41:
                  __varRecorder__.__inter2__ = _context12.sent;
                  loadMorphFromSnapshot = __varRecorder__.__inter2__.loadMorphFromSnapshot;
                  _context12.t0 = loadMorphFromSnapshot;
                  _context12.next = 46;
                  return __varRecorder__.resource(snapshot).readJson();

                case 46:
                  _context12.t1 = _context12.sent;
                  _context12.next = 49;
                  return (0, _context12.t0)(_context12.t1);

                case 49:
                  m = _context12.sent;
                  _context12.next = 52;
                  return loadWorld(new World({
                    askForName: false,
                    extent: $world.extent
                  }), undefined, opts);

                case 52:
                  w = _context12.sent;
                  w.addMorph(m);
                  w.onWindowResize();
                  _context12.next = 104;
                  break;

                case 57:
                  if (!commit) {
                    _context12.next = 62;
                    break;
                  }

                  _context12.next = 60;
                  return morphic.World.loadFromCommit(commit, undefined, Object.assign({}, opts, {
                    browserURL: "/worlds/load?name=" + commit.name
                  }));

                case 60:
                  _context12.next = 104;
                  break;

                case 62:
                  if (!(worldName || projectName)) {
                    _context12.next = 101;
                    break;
                  }

                  if (!(worldName === "__newWorld__" || projectName)) {
                    _context12.next = 97;
                    break;
                  }

                  if (!(Object.values(loadConfig).every(function (v) {
                    return v === "frozen";
                  }) || __varRecorder__.fastLoad)) {
                    _context12.next = 75;
                    break;
                  }

                  _context12.next = 67;
                  return lively.modules.module("lively.ide/world.js").recorder;

                case 67:
                  __varRecorder__.__inter3__ = _context12.sent;
                  LivelyWorld = __varRecorder__.__inter3__.LivelyWorld;
                  _context12.next = 71;
                  return lively.modules.module("lively.morphic/world-loading.js").recorder;

                case 71:
                  __varRecorder__.__inter4__ = _context12.sent;
                  _loadWorld = __varRecorder__.__inter4__.loadWorld;
                  _context12.next = 83;
                  break;

                case 75:
                  _context12.next = 77;
                  return lively.modules.System["import"]("lively.ide/world.js");

                case 77:
                  __varRecorder__.__inter5__ = _context12.sent;
                  LivelyWorld = __varRecorder__.__inter5__.LivelyWorld;
                  _context12.next = 81;
                  return lively.modules.System["import"]("lively.morphic/world-loading.js");

                case 81:
                  __varRecorder__.__inter6__ = _context12.sent;
                  _loadWorld = __varRecorder__.__inter6__.loadWorld;

                case 83:
                  if (!worldName) {
                    _context12.next = 88;
                    break;
                  }

                  _context12.next = 86;
                  return _loadWorld(new LivelyWorld({
                    openNewWorldPrompt: true
                  }), undefined, opts);

                case 86:
                  _context12.next = 95;
                  break;

                case 88:
                  if (!(projectName === "__newProject__")) {
                    _context12.next = 93;
                    break;
                  }

                  _context12.next = 91;
                  return _loadWorld(new LivelyWorld({
                    openNewProjectPrompt: true
                  }), undefined, opts);

                case 91:
                  _context12.next = 95;
                  break;

                case 93:
                  _context12.next = 95;
                  return _loadWorld(new LivelyWorld({
                    projectToBeOpened: projectName,
                    projectRepoOwner: projectRepoOwner
                  }), undefined, opts);

                case 95:
                  _context12.next = 99;
                  break;

                case 97:
                  _context12.next = 99;
                  return morphic.World.loadFromDB(worldName, undefined, undefined, Object.assign({}, opts, {
                    browserURL: "/worlds/load?name=" + worldName.replace(/\.json($|\?)/, "")
                  }));

                case 99:
                  _context12.next = 104;
                  break;

                case 101:
                  if (!filePath) {
                    _context12.next = 104;
                    break;
                  }

                  _context12.next = 104;
                  return morphic.World.loadFromResource(__varRecorder__.resource(System.baseURL).join(filePath), undefined, Object.assign({}, opts, {
                    browserURL: "/worlds/load?file=" + filePath
                  }));

                case 104:
                  _context12.next = 109;
                  break;

                case 106:
                  _context12.prev = 106;
                  _context12.t2 = _context12["catch"](27);
                  window.__loadError__ = _context12.t2;

                case 109:
                  window.addEventListener("popstate", function (event) {
                    if (document.location === landingPageUrl) {
                      document.location.reload();
                    }
                  });
                  _context12.next = 119;
                  break;

                case 112:
                  _context12.prev = 112;
                  _context12.t3 = _context12["catch"](1);
                  if (_context12.t3.originalErr) _context12.t3 = _context12.t3.originalErr;
                  printed = _context12.t3.message;

                  if (_context12.t3.stack !== _context12.t3.message) {
                    printed += _context12.t3.stack.includes(_context12.t3.message) ? _context12.t3.stack.replace(_context12.t3.message, "\n") : _context12.t3.stack;
                  }

                  logError(printed);
                  throw _context12.t3;

                case 119:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, null, [[1, 112], [27, 106]]);
        }));
        return _bootstrap.apply(this, arguments);
      }

      __varRecorder__.bootstrap = bootstrap;
      __varRecorder__.resource = resource;
      __varRecorder__.unregisterExtension = unregisterExtension;
      __varRecorder__.registerExtension = registerExtension;
      __varRecorder__.loadViaScript = loadViaScript;
      __varRecorder__.string = string;
      __varRecorder__.obj = obj;
      __varRecorder__.modulePackage = modules;
      __varRecorder__.easings = easings;
      __varRecorder__.adoptObject = adoptObject;
      lively.modules = __varRecorder__.modulePackage;
      __varRecorder__.doBootstrap = true;
      __varRecorder__.askBeforeQuit = true;
      __varRecorder__.loc = document.location;
      __varRecorder__.query = __varRecorder__.resource(__varRecorder__.loc.href).query();
      __varRecorder__.fastLoad = __varRecorder__.query.fastLoad === true || window.FORCE_FAST_LOAD;
      __varRecorder__.extractedModules = {};
      __varRecorder__.loads = 0;
      __varRecorder__.bootstrap = bootstrap;

    })
  };
}));
