System.register(['./__rootModule___commonjs-entry-2a340242.js', './index-4f2bdafd.js', './index-57981d2f.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js', './ui.cp-46daffed.js', './editor-modes-146d3c1c.js', './search-1fb0a4bc.js', './messages.cp-ccfb5763.js', './code-search.cp-140da4d6.js', './editor-plugin-b7298219.js', './dialogs.cp-40ebcbc0.js', 'lively.collab', './canvas-eb622915.js', './object-classes-cce74fc2.js', './morph-to-image-e16449de.js'], (function (exports) {
  'use strict';
  var _asyncToGenerator, defaultDirectory, runCommand, resource, World, Terminal;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      defaultDirectory = module.v;
      runCommand = module.r;
      resource = module.B;
      World = module.W;
    }, function (module) {
      Terminal = module.T;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      exports('default', interactivelyPublishNewPackageVersion);

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.installer/packages/publish-new-package-version.js");

      function interactivelyPublishNewPackageVersion() {
        return _interactivelyPublishNewPackageVersion.apply(this, arguments);
      }

      function _interactivelyPublishNewPackageVersion() {
        _interactivelyPublishNewPackageVersion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var semver, dir, _yield$__varRecorder_, config, configText, newVersion;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  semver = lively.modules.semver;
                  _context.next = 3;
                  return __varRecorder__.$$world.prompt("Enter the package directory", {
                    input: __varRecorder__.defaultDirectory(),
                    historyId: "pusblish-new-package-dir-history",
                    useLastInput: true
                  });

                case 3:
                  dir = _context.sent;

                  if (dir) {
                    _context.next = 6;
                    break;
                  }

                  throw new Error("canceled");

                case 6:
                  _context.next = 8;
                  return __varRecorder__.readConfig(dir);

                case 8:
                  _yield$__varRecorder_ = _context.sent;
                  config = _yield$__varRecorder_.config;
                  configText = _yield$__varRecorder_.configText;
                  _context.next = 13;
                  return __varRecorder__.confirmPublish(config);

                case 13:
                  if (_context.sent) {
                    _context.next = 15;
                    break;
                  }

                  throw new Error("canceled");

                case 15:
                  _context.next = 17;
                  return __varRecorder__.$$world.prompt("The current version is ".concat(config.version, ". Please enter the new version number:"), {
                    input: semver.inc(config.version, "patch")
                  });

                case 17:
                  newVersion = _context.sent;

                  if (newVersion) {
                    _context.next = 20;
                    break;
                  }

                  throw new Error("canceled");

                case 20:
                  _context.next = 22;
                  return __varRecorder__.addNewVersionToConfig(dir, configText, config.version, newVersion);

                case 22:
                  _context.next = 24;
                  return __varRecorder__.publishToNPM(dir);

                case 24:
                  _context.next = 26;
                  return __varRecorder__.commitChanges(dir);

                case 26:
                  if (!_context.sent) {
                    _context.next = 31;
                    break;
                  }

                  _context.next = 29;
                  return __varRecorder__.gitTag(dir, newVersion);

                case 29:
                  _context.next = 31;
                  return __varRecorder__.gitPush(dir);

                case 31:
                  return _context.abrupt("return", newVersion);

                case 32:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _interactivelyPublishNewPackageVersion.apply(this, arguments);
      }

      __varRecorder__.interactivelyPublishNewPackageVersion = interactivelyPublishNewPackageVersion;

      function confirmPublish(_x) {
        return _confirmPublish.apply(this, arguments);
      }

      function _confirmPublish() {
        _confirmPublish = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(config) {
          var answer;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return __varRecorder__.$$world.confirm("Do you want to publish a new version of ".concat(config.name, "?"));

                case 2:
                  answer = _context2.sent;
                  return _context2.abrupt("return", answer === true || answer === 0);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _confirmPublish.apply(this, arguments);
      }

      __varRecorder__.confirmPublish = confirmPublish;

      function readConfig(_x2) {
        return _readConfig.apply(this, arguments);
      }

      function _readConfig() {
        _readConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dir) {
          var output;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return __varRecorder__.resource(dir).join("package.json").read();

                case 2:
                  output = _context3.sent;
                  return _context3.abrupt("return", {
                    config: JSON.parse(output),
                    configText: output
                  });

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _readConfig.apply(this, arguments);
      }

      __varRecorder__.readConfig = readConfig;

      function addNewVersionToConfig(_x3, _x4, _x5, _x6) {
        return _addNewVersionToConfig.apply(this, arguments);
      }

      function _addNewVersionToConfig() {
        _addNewVersionToConfig = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dir, configText, oldVersion, newVersion) {
          var newConfigText;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  newConfigText = configText.replace("\"version\": \"".concat(oldVersion, "\""), "\"version\": \"".concat(newVersion, "\""));
                  _context4.next = 3;
                  return __varRecorder__.resource(dir).join("package.json").write(newConfigText);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _addNewVersionToConfig.apply(this, arguments);
      }

      __varRecorder__.addNewVersionToConfig = addNewVersionToConfig;

      function commitChanges(_x7) {
        return _commitChanges.apply(this, arguments);
      }

      function _commitChanges() {
        _commitChanges = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dir) {
          var _yield$__varRecorder_2, exitCode, output, localChanges, changes, shouldCommit, _yield$__varRecorder_3;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return __varRecorder__.runCommand("git s", {
                    cwd: dir
                  }).whenDone();

                case 2:
                  _yield$__varRecorder_2 = _context5.sent;
                  exitCode = _yield$__varRecorder_2.exitCode;
                  output = _yield$__varRecorder_2.output;
                  localChanges = output.match(/not a git repo/i) ? null : output.trim();

                  if (localChanges) {
                    _context5.next = 8;
                    break;
                  }

                  return _context5.abrupt("return", false);

                case 8:
                  changes = lively.lang.string.lines(localChanges);
                  if (changes.length > 10) changes = changes.slice(0, 10).concat(["..."]);
                  _context5.next = 12;
                  return __varRecorder__.$$world.confirm("Local changes exist. Commit them all?\n" + changes.join("\n"));

                case 12:
                  shouldCommit = _context5.sent;

                  if (!shouldCommit) {
                    _context5.next = 23;
                    break;
                  }

                  _context5.next = 16;
                  return __varRecorder__.runCommand("git ci -a", {
                    cwd: dir
                  }).whenDone();

                case 16:
                  _yield$__varRecorder_3 = _context5.sent;
                  exitCode = _yield$__varRecorder_3.exitCode;
                  output = _yield$__varRecorder_3.output;

                  if (!exitCode) {
                    _context5.next = 21;
                    break;
                  }

                  throw new Error("Commit canceled");

                case 21:
                  _context5.next = 24;
                  break;

                case 23:
                  throw new Error("Local changes exist");

                case 24:
                  return _context5.abrupt("return", true);

                case 25:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _commitChanges.apply(this, arguments);
      }

      __varRecorder__.commitChanges = commitChanges;

      function gitTag(_x8, _x9) {
        return _gitTag.apply(this, arguments);
      }

      function _gitTag() {
        _gitTag = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dir, tagName) {
          var _yield$__varRecorder_4, exitCode, output;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return __varRecorder__.runCommand("git tag \"".concat(tagName, "\""), {
                    cwd: dir
                  }).whenDone();

                case 2:
                  _yield$__varRecorder_4 = _context6.sent;
                  exitCode = _yield$__varRecorder_4.exitCode;
                  output = _yield$__varRecorder_4.output;

                  if (!exitCode) {
                    _context6.next = 7;
                    break;
                  }

                  throw new Error("git tag failed ".concat(output));

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));
        return _gitTag.apply(this, arguments);
      }

      __varRecorder__.gitTag = gitTag;

      function gitPush(_x10) {
        return _gitPush.apply(this, arguments);
      }

      function _gitPush() {
        _gitPush = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(dir) {
          var _yield$__varRecorder_5, exitCode, output, repo, _yield$__varRecorder_6, branch, push, runner, _yield$runner$targetM;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return __varRecorder__.runCommand("git remote -v | grep origin | head -n 1", {
                    cwd: dir
                  }).whenDone();

                case 2:
                  _yield$__varRecorder_5 = _context7.sent;
                  exitCode = _yield$__varRecorder_5.exitCode;
                  output = _yield$__varRecorder_5.output;

                  if (!exitCode) {
                    _context7.next = 7;
                    break;
                  }

                  throw new Error("git remote -v failed ".concat(output));

                case 7:
                  repo = output.split(/[\t\s]/)[1];
                  _context7.next = 10;
                  return __varRecorder__.runCommand("git branch | grep '*'", {
                    cwd: dir
                  }).whenDone();

                case 10:
                  _yield$__varRecorder_6 = _context7.sent;
                  exitCode = _yield$__varRecorder_6.exitCode;
                  output = _yield$__varRecorder_6.output;

                  if (!exitCode) {
                    _context7.next = 15;
                    break;
                  }

                  throw new Error("git branch failed ".concat(output));

                case 15:
                  branch = output.trim().replace(/^\*\s*/, "");
                  _context7.next = 18;
                  return __varRecorder__.$$world.confirm("Push branch ".concat(branch, " to ").concat(repo, "?\n"));

                case 18:
                  push = _context7.sent;

                  if (!push) {
                    _context7.next = 31;
                    break;
                  }

                  _context7.next = 22;
                  return __varRecorder__.Terminal.runCommand("git push origin ".concat(branch, " && git push --tags"), {
                    cwd: dir
                  });

                case 22:
                  runner = _context7.sent;
                  _context7.next = 25;
                  return runner.targetMorph.command.whenDone();

                case 25:
                  _yield$runner$targetM = _context7.sent;
                  output = _yield$runner$targetM.output;
                  exitCode = _yield$runner$targetM.exitCode;

                  if (!exitCode) {
                    _context7.next = 30;
                    break;
                  }

                  throw new Error("git push failed");

                case 30:
                  runner.close();

                case 31:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _gitPush.apply(this, arguments);
      }

      __varRecorder__.gitPush = gitPush;

      function publishToNPM(_x11) {
        return _publishToNPM.apply(this, arguments);
      }

      function _publishToNPM() {
        _publishToNPM = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(dir) {
          var answer, runner, _yield$runner$targetM2, exitCode;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return __varRecorder__.$$world.confirm("Publish to npm?", ["yes", "no"]);

                case 2:
                  answer = _context8.sent;
                  answer = answer === true || answer === 0;

                  if (answer) {
                    _context8.next = 6;
                    break;
                  }

                  return _context8.abrupt("return");

                case 6:
                  _context8.next = 8;
                  return __varRecorder__.Terminal.runCommand("npm publish", {
                    cwd: dir
                  });

                case 8:
                  runner = _context8.sent;
                  _context8.next = 11;
                  return runner.targetMorph.command.whenDone();

                case 11:
                  _yield$runner$targetM2 = _context8.sent;
                  exitCode = _yield$runner$targetM2.exitCode;

                  if (!exitCode) {
                    _context8.next = 16;
                    break;
                  }

                  throw new Error("npm publish failed");

                case 16:
                  _context8.next = 18;
                  return lively.lang.promise.delay(1000);

                case 18:
                  runner.close();

                case 19:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return _publishToNPM.apply(this, arguments);
      }

      __varRecorder__.publishToNPM = publishToNPM;
      __varRecorder__.defaultDirectory = defaultDirectory;
      __varRecorder__.runCommand = runCommand;
      __varRecorder__.Terminal = Terminal;
      __varRecorder__.resource = resource;
      __varRecorder__.World = World;
      __varRecorder__.$$world = __varRecorder__.World.defaultWorld();
      __varRecorder__["default"] = interactivelyPublishNewPackageVersion;

    })
  };
}));
