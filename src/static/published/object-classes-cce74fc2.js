System.register(['./__rootModule___commonjs-entry-2a340242.js'], (function (exports) {
  'use strict';
  var _asyncToGenerator, string, Path, obj, isValidIdentifier, parseFunction, resource, runEval, scripting, ExportLookup, RuntimeSourceDescriptor, toJsIdentifier, withSuperclasses, classToFunctionTransform, _createClass, _classCallCheck, _defineProperty;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      string = module.u;
      Path = module.aR;
      obj = module.y;
      isValidIdentifier = module.fF;
      parseFunction = module.ef;
      resource = module.B;
      runEval = module.aU;
      scripting = module.fG;
      ExportLookup = module.fH;
      RuntimeSourceDescriptor = module.fI;
      toJsIdentifier = module.er;
      withSuperclasses = module.fJ;
      classToFunctionTransform = module.d$;
      _createClass = module.g;
      _classCallCheck = module.f;
      _defineProperty = module.X;
    }],
    execute: (function () {

      exports({
        addScript: addScript,
        interactivelyForkPackage: interactivelyForkPackage,
        isObjectClass: isObjectClass
      });

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.classes/object-classes.js");

      function globalClasses() {
        return Object.keys(System.global).map(function (ea) {
          var val = System.global[ea];
          return typeof val === "function" && val.name && val;
        }).filter(Boolean);
      }

      __varRecorder__.globalClasses = globalClasses;

      function normalizeOptions(options) {
        options = Object.assign({
          baseURL: __varRecorder__.defaultBaseURL,
          System: System
        }, options);
        options.baseURL = options.baseURL.replace(/\/$/, "");
        return options;
      }

      __varRecorder__.normalizeOptions = normalizeOptions;

      function addScript(object, funcSource, name) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var moduleOrPackage = options["package"] || __varRecorder__.ObjectPackage.lookupModuleForClass(object.constructor, options);

        if (!moduleOrPackage) throw new Error("Object is not part of an object package: ".concat(object));
        return moduleOrPackage.addScript(object, funcSource, name);
      }

      __varRecorder__.addScript = addScript;

      function isObjectClass(klass, options) {
        var _varRecorder__$norma = __varRecorder__.normalizeOptions(options),
            System = _varRecorder__$norma.System;

        var modMeta = klass[Symbol["for"]("lively-module-meta")];
        var pname = modMeta ? modMeta["package"].name : null;

        var _ref = pname ? __varRecorder__.lookupPackage(System, pname) : {},
            pkg = _ref.pkg;

        return pkg ? !!__varRecorder__.ObjectPackage.forSystemPackage(pkg) : false;
      }

      __varRecorder__.isObjectClass = isObjectClass;

      function interactivelyForkPackage(_x, _x2) {
        return _interactivelyForkPackage.apply(this, arguments);
      }

      function _interactivelyForkPackage() {
        _interactivelyForkPackage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(target, forkedName) {
          var klass, pkg, baseURL, System, forkedPackage;
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  klass = target.constructor;
                  __varRecorder__.withSuperclasses(klass)[1];
                  klass[Symbol["for"]("lively-module-meta")]["package"].name;
                  pkg = __varRecorder__.ObjectPackage.lookupPackageForObject(target);
                  baseURL = pkg.baseURL, System = pkg.System;
                  _context12.next = 7;
                  return pkg.fork(forkedName, {
                    baseURL: baseURL,
                    System: System
                  });

                case 7:
                  forkedPackage = _context12.sent;
                  _context12.next = 10;
                  return __varRecorder__.obj.adoptObject(target, forkedPackage.objectClass);

                case 10:
                  return _context12.abrupt("return", forkedPackage.objectClass[Symbol["for"]("__LivelyClassName__")]);

                case 11:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12);
        }));
        return _interactivelyForkPackage.apply(this, arguments);
      }

      __varRecorder__.interactivelyForkPackage = interactivelyForkPackage;
      __varRecorder__.string = string;
      __varRecorder__.Path = Path;
      __varRecorder__.obj = obj;
      __varRecorder__.isValidIdentifier = isValidIdentifier;
      __varRecorder__.parseFunction = parseFunction;
      __varRecorder__.resource = resource;
      __varRecorder__.runEval = runEval;
      __varRecorder__.scripting = scripting;
      __varRecorder__.ExportLookup = ExportLookup;
      var destructured_1 = __varRecorder__.scripting;
      __varRecorder__.ensurePackage = destructured_1.ensurePackage;
      __varRecorder__.importPackage = destructured_1.importPackage;
      __varRecorder__.lookupPackage = destructured_1.lookupPackage;
      __varRecorder__.module = destructured_1.module;
      __varRecorder__.ImportInjector = destructured_1.ImportInjector;
      __varRecorder__.RuntimeSourceDescriptor = RuntimeSourceDescriptor;
      __varRecorder__.toJsIdentifier = toJsIdentifier;
      __varRecorder__.withSuperclasses = withSuperclasses;
      __varRecorder__.classToFunctionTransform = classToFunctionTransform;
      __varRecorder__.objectPackageSym = Symbol["for"]("lively-object-package-data");
      __varRecorder__.defaultBaseURL = "local://lively-object-modules";
      __varRecorder__.addScript = addScript;
      __varRecorder__.isObjectClass = isObjectClass;
      __varRecorder__._packageStore = __varRecorder__._packageStore || {};
      __varRecorder__.interactivelyForkPackage = interactivelyForkPackage;

      var ObjectPackage = exports('default', /*#__PURE__*/function () {
        _createClass(ObjectPackage, null, [{
          key: "lookupPackageForObject",
          value: function lookupPackageForObject(object, options) {
            return this.lookupPackageForClass(object.constructor, options);
          }
        }, {
          key: "lookupPackageForClass",
          value: function lookupPackageForClass(klass, options) {
            var _varRecorder__$norma2 = __varRecorder__.normalizeOptions(options),
                System = _varRecorder__$norma2.System;

            var modMeta = klass[Symbol["for"]("lively-module-meta")];
            var pname = modMeta ? modMeta["package"].name : null;

            var _ref2 = pname ? __varRecorder__.lookupPackage(System, pname) : {},
                pkg = _ref2.pkg;

            return pkg ? __varRecorder__.ObjectPackage.forSystemPackage(pkg) : null;
          }
        }, {
          key: "lookupModuleForClass",
          value: function lookupModuleForClass(klass, options) {
            var _varRecorder__$norma3 = __varRecorder__.normalizeOptions(options);
                _varRecorder__$norma3.System;

            var pkg = this.lookupPackageForClass(klass, options);
            var modMeta = klass[Symbol["for"]("lively-module-meta")];
            return new __varRecorder__.ObjectModule(modMeta.pathInPackage, pkg);
          }
        }, {
          key: "forSystemPackage",
          value: function forSystemPackage(systemPackage) {
            return this.packageStore[systemPackage.name];
          }
        }, {
          key: "withId",
          value: function withId(id, options) {
            return this.packageStore[id] || (this.packageStore[id] = new this(id, options));
          }
        }, {
          key: "packageStore",
          get: function get() {
            return this._packageStore || (this._packageStore = __varRecorder__._packageStore);
          }
        }]);

        function ObjectPackage(id, options) {
          _classCallCheck(this, ObjectPackage);

          this._id = id;
          this.options = __varRecorder__.normalizeOptions(options);
        }

        _createClass(ObjectPackage, [{
          key: "ensureSubModule",
          value: function () {
            var _ensureSubModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var name,
                  subMod,
                  _args = arguments;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      name = _args.length > 0 && _args[0] !== undefined ? _args[0] : "index";
                      subMod = new __varRecorder__.ObjectModule(name, this);
                      _context.next = 4;
                      return subMod.ensureExistance();

                    case 4:
                      return _context.abrupt("return", subMod);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function ensureSubModule() {
              return _ensureSubModule.apply(this, arguments);
            }

            return ensureSubModule;
          }()
        }, {
          key: "resource",
          value: function resource() {
            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            return __varRecorder__.resource(this.packageURL).join(path);
          }
        }, {
          key: "load",
          value: function load() {
            return __varRecorder__.importPackage(this.System, this.packageURL);
          }
        }, {
          key: "ensureExistance",
          value: function () {
            var _ensureExistance = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var resource, dirs, files, System, packageURL, config, p;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      resource = this.resource("/");
                      _context3.next = 3;
                      return resource.exists();

                    case 3:
                      if (!_context3.sent) {
                        _context3.next = 5;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 5:
                      dirs = [{
                        resource: resource
                      }];
                      files = [{
                        resource: this.resource("package.json"),
                        content: JSON.stringify(this.config, null, 2)
                      }];
                      _context3.next = 9;
                      return Promise.all(dirs.map(function (ea) {
                        return ea.resource.mkdir();
                      }));

                    case 9:
                      _context3.next = 11;
                      return Promise.all(files.map( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ea) {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return ea.resource.exists();

                                case 2:
                                  _context2.t0 = !_context2.sent;

                                  if (!_context2.t0) {
                                    _context2.next = 7;
                                    break;
                                  }

                                  _context2.next = 6;
                                  return ea.resource.write(ea.content);

                                case 6:
                                  _context2.t0 = _context2.sent;

                                case 7:
                                  return _context2.abrupt("return", _context2.t0);

                                case 8:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function (_x3) {
                          return _ref3.apply(this, arguments);
                        };
                      }()));

                    case 11:
                      _context3.next = 13;
                      return this.objectModule.ensureExistance();

                    case 13:
                      System = this.System, packageURL = this.packageURL, config = this.config;
                      _context3.next = 16;
                      return __varRecorder__.ensurePackage(System, packageURL);

                    case 16:
                      p = _context3.sent;
                      p.registerWithConfig(config);
                      console.log("".concat(this.packageURL, " REGISTERED"));
                      return _context3.abrupt("return", this);

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function ensureExistance() {
              return _ensureExistance.apply(this, arguments);
            }

            return ensureExistance;
          }()
        }, {
          key: "ensureObjectClass",
          value: function () {
            var _ensureObjectClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(superClass) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.ensureExistance();

                    case 2:
                      return _context4.abrupt("return", this.objectModule.ensureObjectClass(superClass));

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function ensureObjectClass(_x4) {
              return _ensureObjectClass.apply(this, arguments);
            }

            return ensureObjectClass;
          }()
        }, {
          key: "adoptObject",
          value: function () {
            var _adoptObject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(object) {
              var klass;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(this.objectClass === object.constructor)) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 2:
                      _context5.next = 4;
                      return this.ensureObjectClass(object.constructor);

                    case 4:
                      klass = _context5.sent;

                      __varRecorder__.obj.adoptObject(object, klass);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function adoptObject(_x5) {
              return _adoptObject.apply(this, arguments);
            }

            return adoptObject;
          }()
        }, {
          key: "addScript",
          value: function addScript(object, funcSource, name) {
            return this.objectModule.addScript(object, funcSource, name);
          }
        }, {
          key: "remove",
          value: function remove() {
            this.systemPackage.remove();
            delete __varRecorder__.ObjectPackage.packageStore[this.id];
            return this.resource().remove();
          }
        }, {
          key: "renameObjectClass",
          value: function () {
            var _renameObjectClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(newName) {
              var objects,
                  klass,
                  System,
                  descr,
                  source,
                  _descr$ast$id,
                  start,
                  end,
                  newKlass,
                  _args6 = arguments;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      objects = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : [];
                      klass = this.objectClass, System = this.System;

                      if (!(!klass || klass[Symbol["for"]("__LivelyClassName__")] === newName)) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return", klass);

                    case 4:
                      if (__varRecorder__.isValidIdentifier(newName)) {
                        _context6.next = 6;
                        break;
                      }

                      throw new Error("".concat(newName, " is not a valid name for a class"));

                    case 6:
                      descr = __varRecorder__.RuntimeSourceDescriptor["for"](klass, System);
                      source = descr.source, _descr$ast$id = descr.ast.id, start = _descr$ast$id.start, end = _descr$ast$id.end;
                      _context6.next = 10;
                      return descr.changeSource(source.slice(0, start) + newName + source.slice(end));

                    case 10:
                      newKlass = this.objectClass;
                      objects.forEach(function (ea) {
                        ea.constructor = newKlass;
                        ea.__proto__ = newKlass.prototype;
                      });
                      return _context6.abrupt("return", newKlass);

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function renameObjectClass(_x6) {
              return _renameObjectClass.apply(this, arguments);
            }

            return renameObjectClass;
          }()
        }, {
          key: "fork",
          value: function () {
            var _fork = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(forkedPackageName, opts) {
              var System, baseURL, objectClass, descr, _descr$_renamedSource, moduleSource, newPackage, systemModule;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      System = this.System, baseURL = this.baseURL, objectClass = this.objectClass;
                      opts = Object.assign({
                        System: System,
                        baseURL: baseURL
                      }, opts);
                      descr = __varRecorder__.RuntimeSourceDescriptor["for"](objectClass);
                      _descr$_renamedSource = descr._renamedSource(forkedPackageName), moduleSource = _descr$_renamedSource.moduleSource;
                      newPackage = __varRecorder__.ObjectPackage.withId(forkedPackageName, opts);
                      _context7.next = 7;
                      return newPackage.ensureExistance();

                    case 7:
                      systemModule = newPackage.objectModule.systemModule;
                      _context7.next = 10;
                      return systemModule.load({
                        format: "esm"
                      });

                    case 10:
                      _context7.next = 12;
                      return systemModule.changeSource(moduleSource);

                    case 12:
                      return _context7.abrupt("return", newPackage);

                    case 13:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function fork(_x7, _x8) {
              return _fork.apply(this, arguments);
            }

            return fork;
          }()
        }, {
          key: "id",
          get: function get() {
            return this._id;
          }
        }, {
          key: "name",
          get: function get() {
            return this.id;
          }
        }, {
          key: "System",
          get: function get() {
            return this.options.System;
          }
        }, {
          key: "baseURL",
          get: function get() {
            return this.options.baseURL;
          }
        }, {
          key: "packageURL",
          get: function get() {
            return this.baseURL + "/".concat(this.id);
          }
        }, {
          key: "config",
          get: function get() {
            return {
              name: this.name,
              version: "0.1.0",
              lively: {
                isObjectPackage: true
              }
            };
          }
        }, {
          key: "systemPackage",
          get: function get() {
            return __varRecorder__.lookupPackage(this.System, this.packageURL, true).pkg;
          }
        }, {
          key: "objectModule",
          get: function get() {
            return this._objectModule || (this._objectModule = new __varRecorder__.ObjectModule("index.js", this));
          }
        }, {
          key: "objectClass",
          get: function get() {
            return this.objectModule.objectClass;
          }
        }]);

        return ObjectPackage;
      }());
      __varRecorder__.ObjectPackage = ObjectPackage;

      var ObjectModule = /*#__PURE__*/function () {
        function ObjectModule(moduleName, objectPackage) {
          _classCallCheck(this, ObjectModule);

          if (!moduleName) throw new Error("ObjectModule needs package!");
          if (!objectPackage) throw new Error("ObjectModule needs package!");
          this._moduleName = moduleName;
          this._objectPackage = objectPackage;
        }

        _createClass(ObjectModule, [{
          key: "read",
          value: function read() {
            return this.resource.read();
          }
        }, {
          key: "write",
          value: function write(content) {
            return this.resource.write(content);
          }
        }, {
          key: "ensureExistance",
          value: function () {
            var _ensureExistance2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var r;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      r = this.resource;
                      _context8.next = 3;
                      return r.exists();

                    case 3:
                      if (_context8.sent) {
                        _context8.next = 7;
                        break;
                      }

                      _context8.next = 6;
                      return r.write("'format esm';\n");

                    case 6:
                      this.System.config({
                        meta: _defineProperty({}, this.url, {
                          format: "esm"
                        })
                      });

                    case 7:
                      return _context8.abrupt("return", this);

                    case 8:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function ensureExistance() {
              return _ensureExistance2.apply(this, arguments);
            }

            return ensureExistance;
          }()
        }, {
          key: "adoptObject",
          value: function () {
            var _adoptObject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(object, optClassName) {
              var klass;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!(this.objectClass === object.constructor)) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      _context9.next = 4;
                      return this.ensureObjectClass(object.constructor, optClassName);

                    case 4:
                      klass = _context9.sent;

                      __varRecorder__.obj.adoptObject(object, klass);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function adoptObject(_x9, _x10) {
              return _adoptObject2.apply(this, arguments);
            }

            return adoptObject;
          }()
        }, {
          key: "ensureObjectClass",
          value: function ensureObjectClass(superClass, optClassName) {
            var _this = this;

            var klass = this.objectClass;

            if (klass && klass.prototype.__proto__ === superClass.prototype) {
              return klass;
            }

            return Promise.resolve(this.ensureObjectClassSource(superClass, optClassName)).then(function (ensured) {
              var source = ensured.source,
                  moduleId = ensured.moduleId,
                  className = ensured.className,
                  bindings = ensured.bindings;
              var System = _this.System;

              var mod = __varRecorder__.module(System, moduleId);

              if (bindings) for (var key in bindings) {
                mod.define(key, bindings[key]);
              }

              var evalResult = __varRecorder__.runEval(source, {
                classTransform: __varRecorder__.classToFunctionTransform,
                sync: true,
                targetModule: moduleId,
                System: System
              });

              if (evalResult.isError) {
                throw evalResult.value;
              }

              var klass = mod.recorder[className];

              if (!klass) {
                throw new Error("Failed to define class ".concat(className, " in ").concat(moduleId));
              }

              return klass;
            });
          }
        }, {
          key: "ensureObjectClassSource",
          value: function ensureObjectClassSource(superClass, optClassName) {
            return this.createDefaultClassDeclaration(superClass, optClassName);
          }
        }, {
          key: "createDefaultClassDeclaration",
          value: function () {
            var _createDefaultClassDeclaration = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var superClass,
                  className,
                  System,
                  module,
                  objectPackage,
                  superClassName,
                  isAnonymousSuperclass,
                  globalSuperClass,
                  source,
                  bindings,
                  exportForClass,
                  _varRecorder__$Impor,
                  standaloneImport,
                  classSource,
                  _args10 = arguments;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      superClass = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : Object;
                      className = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : false;
                      System = this.System, module = this.systemModule, objectPackage = this.objectPackage;
                      className = className || __varRecorder__.string.capitalize(__varRecorder__.toJsIdentifier(objectPackage.id));
                      superClassName = superClass[Symbol["for"]("__LivelyClassName__")] || superClass.name;
                      isAnonymousSuperclass = !superClassName || superClassName == "anonymous_class";
                      globalSuperClass = __varRecorder__.globalClasses().includes(superClass);
                      source = "";
                      bindings = null;

                      if (!isAnonymousSuperclass) {
                        _context10.next = 15;
                        break;
                      }

                      superClassName = "__anonymous_superclass__";
                      bindings = _defineProperty({}, superClassName, superClass);
                      source += "let __anonymous_superclass__ = __anonymous_superclass__;\n";
                      _context10.next = 20;
                      break;

                    case 15:
                      if (globalSuperClass) {
                        _context10.next = 20;
                        break;
                      }

                      _context10.next = 18;
                      return __varRecorder__.ExportLookup.findExportOfValue(superClass, System);

                    case 18:
                      exportForClass = _context10.sent;

                      if (exportForClass) {
                        _varRecorder__$Impor = __varRecorder__.ImportInjector.run(System, module.id, module["package"](), "", exportForClass), standaloneImport = _varRecorder__$Impor.standaloneImport;
                        source += standaloneImport + "\n\n";
                      } else {
                        bindings = _defineProperty({}, superClassName, superClass);
                      }

                    case 20:
                      if (className === superClassName) className = "Object" + className;
                      classSource = superClassName === "Object" ? "class ".concat(className, " {}\n") : "class ".concat(className, " extends ").concat(superClassName, " {}\n");
                      source += "export default ".concat(classSource, "\n");

                      if (module.isLoaded()) {
                        _context10.next = 27;
                        break;
                      }

                      _context10.next = 26;
                      return module.setSource("\"format esm\";");

                    case 26:
                      if (isAnonymousSuperclass) {
                        module.recorder[superClassName] = superClass;
                      }

                    case 27:
                      _context10.next = 29;
                      return module.changeSource(source);

                    case 29:
                      _context10.next = 31;
                      return module.load();

                    case 31:
                      return _context10.abrupt("return", {
                        source: source,
                        className: className,
                        moduleId: this.url,
                        bindings: bindings
                      });

                    case 32:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function createDefaultClassDeclaration() {
              return _createDefaultClassDeclaration.apply(this, arguments);
            }

            return createDefaultClassDeclaration;
          }()
        }, {
          key: "addScript",
          value: function () {
            var _addScript = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(object, functionOrSource, name) {
              var klass, funcSource, parsedFunction, descr, methodName, args, body, methodSource, source, classDecl, existing, insertAt, before, after;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      if (!(object.constructor === this.objectClass)) {
                        _context11.next = 4;
                        break;
                      }

                      _context11.t0 = object.constructor;
                      _context11.next = 7;
                      break;

                    case 4:
                      _context11.next = 6;
                      return this.ensureObjectClass(object.constructor);

                    case 6:
                      _context11.t0 = _context11.sent;

                    case 7:
                      klass = _context11.t0;
                      funcSource = typeof functionOrSource === "function" ? String(functionOrSource) : functionOrSource;
                      parsedFunction = __varRecorder__.parseFunction(funcSource);
                      descr = __varRecorder__.RuntimeSourceDescriptor["for"](klass, this.System);
                      if (!name) name = __varRecorder__.Path("id.name").get(parsedFunction);

                      if (name) {
                        _context11.next = 14;
                        break;
                      }

                      throw new Error("No name, cannot add ".concat(__varRecorder__.string.truncate(funcSource, 30).replace(/\n/g, ""), "!"));

                    case 14:
                      methodName = __varRecorder__.toJsIdentifier(name);
                      console.assert(parsedFunction.type === "FunctionExpression" || parsedFunction.type === "ArrowFunctionExpression", "not a function expression but: " + parsedFunction.type);
                      args = parsedFunction.params.map(function (_ref4) {
                        var start = _ref4.start,
                            end = _ref4.end;
                        return funcSource.slice(start, end);
                      });
                      body = parsedFunction.body.type === "BlockStatement" ? funcSource.slice(parsedFunction.body.start, parsedFunction.body.end) : "{ return ".concat(funcSource.slice(parsedFunction.body.start, parsedFunction.body.end), " }");
                      methodSource = "".concat(methodName, "(").concat(args.join(","), ") ").concat(body);

                      if (parsedFunction.type === "ArrowFunctionExpression") {
                        parsedFunction.type = "FunctionExpression";
                      }

                      source = descr.source;
                      classDecl = descr.ast;

                      if (classDecl) {
                        _context11.next = 24;
                        break;
                      }

                      throw new Error("cannot find class decl of " + descr.module.id);

                    case 24:
                      existing = classDecl.body.body.find(function (method) {
                        return method.key.name === methodName && !method["static"];
                      });

                      if (existing) {
                        source = source.slice(0, existing.start) + methodSource + source.slice(existing.end);
                      } else {
                        insertAt = source.lastIndexOf("}");
                        before = source.slice(0, insertAt);
                        after = source.slice(insertAt);
                        if (!/\n\s*$/m.test(before)) before += "\n";
                        methodSource = __varRecorder__.string.changeIndent(methodSource, "  ", 1);
                        if (!/^[ ]*\n/m.test(after)) after = "\n" + after;
                        source = before + methodSource + after;
                      }

                      _context11.next = 28;
                      return descr.changeSource(source);

                    case 28:
                      return _context11.abrupt("return", {
                        script: klass.prototype[methodName],
                        klass: klass,
                        module: descr.module.id,
                        methodName: methodName
                      });

                    case 29:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function addScript(_x11, _x12, _x13) {
              return _addScript.apply(this, arguments);
            }

            return addScript;
          }()
        }, {
          key: "objectPackage",
          get: function get() {
            return this._objectPackage;
          }
        }, {
          key: "objectClass",
          get: function get() {
            var m = this.systemModule;
            return m.isLoaded() ? m.System.get(m.id)["default"] : null;
          }
        }, {
          key: "moduleName",
          get: function get() {
            return this._moduleName;
          }
        }, {
          key: "systemModule",
          get: function get() {
            return __varRecorder__.module(this.System, this.url);
          }
        }, {
          key: "System",
          get: function get() {
            return this.objectPackage.System;
          }
        }, {
          key: "resource",
          get: function get() {
            return this.objectPackage.resource(this.moduleName);
          }
        }, {
          key: "url",
          get: function get() {
            return this.resource.url;
          }
        }]);

        return ObjectModule;
      }();

      __varRecorder__.ObjectModule = ObjectModule;
      __varRecorder__["default"] = ObjectPackage;

    })
  };
}));
