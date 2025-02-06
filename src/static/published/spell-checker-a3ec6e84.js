System.register(['./__rootModule___commonjs-entry-2a340242.js'], (function (exports) {
  'use strict';
  var _asyncToGenerator, string, arr, runCommand;
  return {
    setters: [function (module) {
      _asyncToGenerator = module._;
      string = module.u;
      arr = module.q;
      runCommand = module.r;
    }],
    execute: (function () {

      exports('spellCheckWord', spellCheckWord);

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/shell/spell-checker.js");

      function spellCheckWord(_x) {
        return _spellCheckWord.apply(this, arguments);
      }

      function _spellCheckWord() {
        _spellCheckWord = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(word) {
          var cmd, result, suggestions;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  word = word.trim();

                  if (word) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", []);

                case 3:
                  cmd = __varRecorder__.runCommand("aspell -a", {
                    stdin: word
                  });
                  _context.next = 6;
                  return cmd.whenDone();

                case 6:
                  if (!cmd.exitCode) {
                    _context.next = 8;
                    break;
                  }

                  throw new Error("Spell checking failed:\n" + cmd.stderr);

                case 8:
                  result = __varRecorder__.string.lines(cmd.stdout)[1];

                  if (!(!result || !result.length || !result.includes(":"))) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt("return", []);

                case 11:
                  suggestions = __varRecorder__.arr.last(result.split(":")).trim().split(/,\s?/);
                  return _context.abrupt("return", suggestions);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _spellCheckWord.apply(this, arguments);
      }

      __varRecorder__.spellCheckWord = spellCheckWord;
      __varRecorder__.string = string;
      __varRecorder__.arr = arr;
      __varRecorder__.runCommand = runCommand;
      __varRecorder__.spellCheckWord = spellCheckWord;

    })
  };
}));
