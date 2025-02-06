System.register(['./__rootModule___commonjs-entry-2a340242.js', './index-57981d2f.js', './ui.cp-46daffed.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js', './editor-modes-146d3c1c.js', './search-1fb0a4bc.js'], (function (exports) {
  'use strict';
  var _asyncToGenerator, _toConsumableArray, _typeof, _defineProperty, connect, once, Color, rect, pt, arr, morph, classToFunctionTransform, Leash, _missingExportShim, show, InteractiveMorphSelector;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      _toConsumableArray = module.w;
      _typeof = module.aA;
      _defineProperty = module.X;
      connect = module.a;
      once = module.ao;
      Color = module.C;
      rect = module.a8;
      pt = module.b;
      arr = module.q;
      morph = module.a1;
      classToFunctionTransform = module.d$;
    }, function (module) {
      Leash = module.h;
    }, function (module) {
      _missingExportShim = module.w;
      show = module.s;
      InteractiveMorphSelector = module.x;
    }, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      exports({
        interactiveConnectGivenSource: interactiveConnectGivenSource,
        interactiveConnectGivenSourceAndTarget: interactiveConnectGivenSourceAndTarget,
        interactivelyEvaluateConnection: interactivelyEvaluateConnection,
        interactivelyReEvaluateConnection: interactivelyReEvaluateConnection,
        interactivelyShowConnection: interactivelyShowConnection,
        printConnection: printConnection,
        printConnectionElements: printConnectionElements,
        visualizeConnection: visualizeConnection
      });

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/fabrik.js");

      function interactivelyShowConnection(connection) {
        var sourceObj = connection.sourceObj;
            connection.sourceAttrName;
            var targetObj = connection.targetObj;
            connection.targetMethodName;

        if (sourceObj.isMorph && targetObj.isMorph) {
          sourceObj.show();
          targetObj.show();
          __varRecorder__.showConnector && __varRecorder__.showConnector(sourceObj, targetObj);
        } else __varRecorder__.show(String(connection));
      }

      __varRecorder__.interactivelyShowConnection = interactivelyShowConnection;

      function printConnection(connection) {
        var sourceObj = connection.sourceObj,
            sourceAttrName = connection.sourceAttrName,
            targetObj = connection.targetObj,
            targetMethodName = connection.targetMethodName;
        var converter = connection.getConverter();
        var updater = connection.getUpdater();
        return __varRecorder__.printConnectionElements(sourceObj, sourceAttrName, targetObj, targetMethodName, converter, updater);
      }

      __varRecorder__.printConnection = printConnection;

      function printConnectionElements(sourceObj, sourceAttr, targetObj, targetAttr, converter, updater) {
        var source = "/* global connect, source, target */\nconnect(source, '".concat(sourceAttr, "', target, '").concat(targetAttr, "'");
        if (converter || updater) source += ", {\n";
        if (converter) source += "  converter: ".concat(converter);
        if (converter && updater) source += ",";
        if (converter) source += "\n";
        if (updater) source += "  updater: ".concat(updater, "\n");
        if (converter || updater) source += "}";
        source += ");";
        return source;
      }

      __varRecorder__.printConnectionElements = printConnectionElements;

      function interactiveConnectGivenSource(_x, _x2) {
        return _interactiveConnectGivenSource.apply(this, arguments);
      }

      function _interactiveConnectGivenSource() {
        _interactiveConnectGivenSource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sourceObj, sourceAttr) {
          var selected;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __varRecorder__.InteractiveMorphSelector.selectMorph();

                case 2:
                  selected = _context.sent;
                  return _context.abrupt("return", selected ? __varRecorder__.interactiveConnectGivenSourceAndTarget(sourceObj, sourceAttr, selected) : null);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _interactiveConnectGivenSource.apply(this, arguments);
      }

      __varRecorder__.interactiveConnectGivenSource = interactiveConnectGivenSource;

      function interactiveConnectGivenSourceAndTarget(_x3, _x4, _x5, _x6) {
        return _interactiveConnectGivenSourceAndTarget.apply(this, arguments);
      }

      function _interactiveConnectGivenSourceAndTarget() {
        _interactiveConnectGivenSourceAndTarget = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(sourceObj, sourceAttr, targetObj, onConnect) {
          var targetBindings, world, sourceBindings, items, res;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  targetBindings = targetObj && targetObj.world().targetDataBindings(targetObj);
                  world = sourceObj.world();

                  if (!(!targetBindings || !targetBindings.length)) {
                    _context2.next = 6;
                    break;
                  }

                  world.setStatusMessage("connect canceled");
                  return _context2.abrupt("return");

                case 6:
                  if (sourceAttr) {
                    _context2.next = 15;
                    break;
                  }

                  sourceBindings = [{
                    isListItem: true,
                    string: "[Enter custom attribute..]",
                    value: {
                      custom: true
                    }
                  }].concat(_toConsumableArray(sourceObj.world().targetDataBindings(sourceObj).flat().map(function (ea) {
                    return {
                      isListItem: true,
                      string: ea.signature || ea.name,
                      value: ea
                    };
                  })));
                  _context2.next = 10;
                  return world.listPrompt(["Select Source Attribute\n", {}, "Choose the attribute of the morph that is supposed to invoke the connection. This can be a method, property or a custom signal that is invoked upon the morph.", {
                    paddingTop: "10px",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "normal"
                  }], sourceBindings, {
                    filterable: true
                  });

                case 10:
                  sourceAttr = _context2.sent;

                  if (!(sourceAttr.status == "canceled")) {
                    _context2.next = 13;
                    break;
                  }

                  return _context2.abrupt("return");

                case 13:
                  sourceAttr = sourceAttr.selected[0];
                  sourceAttr = sourceAttr.custom ? "sourceAttribute" : sourceAttr.name;

                case 15:
                  items = [{
                    isListItem: true,
                    string: "[Enter custom attribute...]",
                    value: {
                      custom: true
                    }
                  }].concat(_toConsumableArray(targetBindings.flat().map(function (ea) {
                    return {
                      isListItem: true,
                      value: ea,
                      string: ea.signature || ea.name
                    };
                  })));
                  _context2.next = 18;
                  return world.listPrompt(["Select Target Attribute\n", {}, "Choose the attribute of the morph that is supposed to invoked once the connection is triggered. This can be either a method or a property of the morph. When selecting a property, keep in mind that the value of the source attribute will be assigned to the property or passed to the method as an argument.", {
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "normal",
                    paddingTop: "10px"
                  }], items, {
                    filterable: true
                  });

                case 18:
                  res = _context2.sent;

                  if (!(res.status == "canceled")) {
                    _context2.next = 21;
                    break;
                  }

                  return _context2.abrupt("return");

                case 21:
                  res = res.selected[0];
                  _context2.next = 24;
                  return __varRecorder__.interactivelyEvaluateConnection({
                    sourceObj: sourceObj,
                    sourceAttr: sourceAttr,
                    targetObj: targetObj,
                    targetAttr: res.custom ? "targetAttribute" : res.name,
                    onConnect: onConnect,
                    prompt: "Edit and confirm connection:"
                  });

                case 24:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _interactiveConnectGivenSourceAndTarget.apply(this, arguments);
      }

      __varRecorder__.interactiveConnectGivenSourceAndTarget = interactiveConnectGivenSourceAndTarget;

      function interactivelyReEvaluateConnection(_x7) {
        return _interactivelyReEvaluateConnection.apply(this, arguments);
      }

      function _interactivelyReEvaluateConnection() {
        _interactivelyReEvaluateConnection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(connection) {
          var prompt,
              highlight,
              onConnect,
              sourceObj,
              sourceAttrName,
              targetObj,
              targetMethodName,
              converter,
              updater,
              _args3 = arguments;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  prompt = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "confirm connection";
                  highlight = _args3.length > 2 ? _args3[2] : undefined;
                  onConnect = _args3.length > 3 ? _args3[3] : undefined;
                  sourceObj = connection.sourceObj, sourceAttrName = connection.sourceAttrName, targetObj = connection.targetObj, targetMethodName = connection.targetMethodName;
                  converter = connection.getConverter();
                  updater = connection.getUpdater();
                  return _context3.abrupt("return", __varRecorder__.interactivelyEvaluateConnection({
                    sourceObj: sourceObj,
                    sourceAttr: sourceAttrName,
                    targetObj: targetObj,
                    targetAttr: targetMethodName,
                    converter: converter,
                    updater: updater,
                    prompt: prompt,
                    highlight: highlight,
                    onConnect: onConnect
                  }));

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _interactivelyReEvaluateConnection.apply(this, arguments);
      }

      __varRecorder__.interactivelyReEvaluateConnection = interactivelyReEvaluateConnection;

      function visualizeConnection(m1, m2, existingLeash) {
        var leashStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var sides = __varRecorder__.rect(0).sides.concat(__varRecorder__.rect(0).corners);

        var leash = existingLeash || new __varRecorder__.Leash(Object.assign({
          isSmooth: true,
          styleClasses: ["Halo"],
          borderColor: __varRecorder__.Color.orange,
          epiMorph: true,
          endpointStyle: {
            start: {
              fill: __varRecorder__.Color.transparent,
              nativeCursor: "auto"
            },
            end: {
              fill: __varRecorder__.Color.orange
            }
          }
        }, leashStyle, {
          hasFixedPosition: true
        }));
        leash.startPoint.attachTo(m1, "rightCenter");

        if (m2.isMorph) {
          var nearestPart = m2.globalBounds().partNameNearest(sides, m1.globalPosition);

          if (m1.globalPosition.equals(m2.globalBounds().partNamed(nearestPart))) {
            nearestPart = m2.globalBounds().partNameNearest(__varRecorder__.arr.without(sides, nearestPart), m1.globalPosition);
          }

          leash.endPoint.attachTo(m2, "leftCenter");
        } else {
          var virtualNodePos = m1.globalBounds().topRight().addPt(__varRecorder__.pt(100, 0));

          var visualPointer = __varRecorder__.morph({
            type: "label",
            value: m2.toString(),
            styleClasses: ["Tooltip"],
            padding: __varRecorder__.rect(8, 4)
          }).openInWorld(virtualNodePos);

          visualPointer.position = m1.world().bounds().translateForInclusion(visualPointer.bounds()).topLeft();

          __varRecorder__.once(leash, "remove", visualPointer, "remove");

          leash.endPoint.attachTo(visualPointer, "leftCenter");
        }

        return leash;
      }

      __varRecorder__.visualizeConnection = visualizeConnection;

      function interactivelyEvaluateConnection(_x8) {
        return _interactivelyEvaluateConnection.apply(this, arguments);
      }

      function _interactivelyEvaluateConnection() {
        _interactivelyEvaluateConnection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts) {
          var sourceObj, sourceAttr, targetObj, targetAttr, converter, updater, prompt, _opts$highlight, highlight, onConnect, targetModule, evalEnvironment, input, _ref, targetType, _ref2, sourceType, source, result;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  sourceObj = opts.sourceObj, sourceAttr = opts.sourceAttr, targetObj = opts.targetObj, targetAttr = opts.targetAttr, converter = opts.converter, updater = opts.updater, prompt = opts.prompt, _opts$highlight = opts.highlight, highlight = _opts$highlight === void 0 ? true : _opts$highlight, onConnect = opts.onConnect;
                  targetModule = "lively://lively.bindings-interactive-connect/x" + sourceObj.id;
                  evalEnvironment = {
                    context: window,
                    format: "esm",
                    targetModule: targetModule,
                    classTransform: __varRecorder__.classToFunctionTransform
                  };
                  input = __varRecorder__.printConnectionElements(sourceObj, sourceAttr, targetObj, targetAttr, converter, updater);

                  if (targetObj.isMorph && sourceObj.isMorph) {
                    _ref = targetObj.propertiesAndPropertySettings().properties[targetAttr] || {
                      type: _typeof(targetObj[targetAttr])
                    }, targetType = _ref.type;
                    _ref2 = sourceObj.propertiesAndPropertySettings().properties[sourceAttr] || {
                      type: _typeof(sourceObj[sourceAttr])
                    }, sourceType = _ref2.type;

                    if (sourceType !== targetType) {
                      prompt = ["Edit and confirm connection:\n", {}, "Source: ", {
                        fontSize: 14,
                        fontWeight: "normal"
                      }, sourceObj.toString(), {
                        fontSize: 14,
                        fontWeight: "normal",
                        fontStyle: "italic"
                      }, "\nTarget: ", {
                        fontSize: 14,
                        fontWeight: "normal"
                      }, targetObj.toString(), {
                        fontSize: 14,
                        fontWeight: "normal",
                        fontStyle: "italic"
                      }];
                    }
                  }

                  Object.assign(lively.modules.module(targetModule).recorder, _defineProperty({
                    source: sourceObj,
                    target: targetObj,
                    connect: __varRecorder__.connect,
                    once: __varRecorder__.once
                  }, sourceAttr, sourceObj[sourceAttr]));

                  if (!prompt) {
                    _context4.next = 15;
                    break;
                  }

                  _context4.next = 9;
                  return $world.editPrompt(prompt, {
                    input: input,
                    historyId: "lively.bindings-interactive-morph-connect",
                    mode: "js",
                    requester: $world,
                    evalEnvironment: evalEnvironment,
                    animated: false
                  });

                case 9:
                  source = _context4.sent;

                  if (source) {
                    _context4.next = 13;
                    break;
                  }

                  $world.setStatusMessage("connect canceled");
                  return _context4.abrupt("return");

                case 13:
                  _context4.next = 16;
                  break;

                case 15:
                  source = input;

                case 16:
                  _context4.next = 18;
                  return lively.vm.runEval(source, evalEnvironment);

                case 18:
                  result = _context4.sent;

                  if (!result.isError) {
                    _context4.next = 22;
                    break;
                  }

                  $world.logError(result.value);
                  return _context4.abrupt("return", interactivelyEvaluateConnection({
                    sourceObj: sourceObj,
                    sourceAttr: sourceAttr,
                    targetObj: targetObj,
                    targetAttr: targetAttr,
                    converter: converter,
                    updater: updater,
                    prompt: "confirm connection",
                    highlight: highlight,
                    onConnect: onConnect
                  }));

                case 22:
                  if (highlight) {
                    $world.setStatusMessage("connected!", __varRecorder__.Color.green);

                    __varRecorder__.interactivelyShowConnection(result.value);
                  }

                  if (typeof onConnect === "function") {
                    onConnect(result);
                  }

                case 24:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _interactivelyEvaluateConnection.apply(this, arguments);
      }

      __varRecorder__.interactivelyEvaluateConnection = interactivelyEvaluateConnection;
      __varRecorder__.connect = connect;
      __varRecorder__.once = once;
      __varRecorder__.Color = Color;
      __varRecorder__.rect = rect;
      __varRecorder__.pt = pt;
      __varRecorder__.arr = arr;
      __varRecorder__.morph = morph;
      __varRecorder__.Leash = Leash;
      __varRecorder__.showConnector = _missingExportShim;
      __varRecorder__.show = show;
      __varRecorder__.InteractiveMorphSelector = InteractiveMorphSelector;
      __varRecorder__.classToFunctionTransform = classToFunctionTransform;
      __varRecorder__.interactivelyShowConnection = interactivelyShowConnection;
      __varRecorder__.printConnection = printConnection;
      __varRecorder__.printConnectionElements = printConnectionElements;
      __varRecorder__.interactiveConnectGivenSource = interactiveConnectGivenSource;
      __varRecorder__.interactiveConnectGivenSourceAndTarget = interactiveConnectGivenSourceAndTarget;
      __varRecorder__.interactivelyReEvaluateConnection = interactivelyReEvaluateConnection;
      __varRecorder__.visualizeConnection = visualizeConnection;
      __varRecorder__.interactivelyEvaluateConnection = interactivelyEvaluateConnection;

    })
  };
}));
