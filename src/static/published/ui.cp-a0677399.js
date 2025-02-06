System.register(['./__rootModule___commonjs-entry-2a340242.js', './ui.cp-46daffed.js', './index-57981d2f.js', './object-classes-cce74fc2.js', './messages.cp-ccfb5763.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js', './editor-modes-146d3c1c.js', './search-1fb0a4bc.js'], (function (exports, module) {
  'use strict';
  var _typeof, _createClass, process, _createForOfIteratorHelper, _slicedToArray, _classCallCheck, _toConsumableArray, _lruCache2, exports$1$5, arr, withSuperclasses, lexicalClassMembers, Icon, initializeClass, RuntimeSourceDescriptor, isClass, string, num, promise, Path, obj, subscribe, unsubscribe, L2LClient, deserialize, getClassName, stringifyFunctionWithoutToplevelRecorder, modules, _asyncToGenerator, fun, TilingLayout, Morph, GridLayout, config, pt, Color, connect, parse, query, adoptObject, resource, ViewModel, component, part, rect, Text, l2lInterfaceFor, localInterface, chooseUnusedImports, JavaScriptEditorPlugin, interactivlyFixUndeclaredVariables, interactivelyChooseImports, InteractiveMorphSelector, DarkTheme, DefaultTheme, interactivelyFreezePart, generateReferenceExpression, lint, TreeData, Tree, isObjectClass, interactivelyForkPackage, addScript, ObjectPackage, StatusMessageConfirm, StatusMessageWarning, StatusMessageError, LoadingIndicator, SystemButton, DefaultList;
  return {
    setters: [function (module) {
      _typeof = module.aA;
      _createClass = module.g;
      process = module.eu;
      _createForOfIteratorHelper = module.U;
      _slicedToArray = module.t;
      _classCallCheck = module.f;
      _toConsumableArray = module.w;
      _lruCache2 = module.f_;
      exports$1$5 = module.f$;
      arr = module.q;
      withSuperclasses = module.fJ;
      lexicalClassMembers = module.g0;
      Icon = module.j;
      initializeClass = module.i;
      RuntimeSourceDescriptor = module.fI;
      isClass = module.g1;
      string = module.u;
      num = module.aq;
      promise = module.a9;
      Path = module.aR;
      obj = module.y;
      subscribe = module.aX;
      unsubscribe = module.g2;
      L2LClient = module.m;
      deserialize = module.fm;
      getClassName = module.aF;
      stringifyFunctionWithoutToplevelRecorder = module.es;
      modules = module.a6;
      _asyncToGenerator = module._;
      fun = module.x;
      TilingLayout = module.T;
      Morph = module.M;
      GridLayout = module.G;
      config = module.z;
      pt = module.b;
      Color = module.C;
      connect = module.a;
      parse = module.e8;
      query = module.ea;
      adoptObject = module.aM;
      resource = module.B;
      ViewModel = module.V;
      component = module.c;
      part = module.p;
      rect = module.a8;
      Text = module.h;
    }, function (module) {
      l2lInterfaceFor = module.y;
      localInterface = module.l;
      chooseUnusedImports = module.z;
      JavaScriptEditorPlugin = module.J;
      interactivlyFixUndeclaredVariables = module.A;
      interactivelyChooseImports = module.K;
      InteractiveMorphSelector = module.x;
      DarkTheme = module.L;
      DefaultTheme = module.N;
      interactivelyFreezePart = module.Q;
      generateReferenceExpression = module.U;
      lint = module.V;
    }, function (module) {
      TreeData = module.T;
      Tree = module.e;
    }, function (module) {
      isObjectClass = module.isObjectClass;
      interactivelyForkPackage = module.interactivelyForkPackage;
      addScript = module.addScript;
      ObjectPackage = module["default"];
    }, function (module) {
      StatusMessageConfirm = module.StatusMessageConfirm;
      StatusMessageWarning = module.StatusMessageWarning;
      StatusMessageError = module.StatusMessageError;
    }, function (module) {
      LoadingIndicator = module.L;
      SystemButton = module.b;
      DefaultList = module.v;
    }, function () {}, function () {}, function () {}],
    execute: (function () {

      exports('open', open);

      var exports$5$1 = {},
          _dewExec$5$1 = false;

      function dew$5$1() {
        if (_dewExec$5$1) return exports$5$1;
        _dewExec$5$1 = true; // Note: this is the semver.org version of the spec that it implements
        // Not necessarily the package version of this code.

        var SEMVER_SPEC_VERSION = "2.0.0";
        var MAX_LENGTH = 256;
        var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
        /* istanbul ignore next */
        9007199254740991; // Max safe segment length for coercion.

        var MAX_SAFE_COMPONENT_LENGTH = 16; // Max safe length for a build identifier. The max length minus 6 characters for
        // the shortest version with a build 0.0.0+BUILD.

        var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
        var RELEASE_TYPES = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
        exports$5$1 = {
          MAX_LENGTH: MAX_LENGTH,
          MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH,
          MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH,
          MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
          RELEASE_TYPES: RELEASE_TYPES,
          SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
          FLAG_INCLUDE_PRERELEASE: 1,
          FLAG_LOOSE: 2
        };
        return exports$5$1;
      }

      var exports$4$1 = {},
          _dewExec$4$1 = false;

      function dew$4$1() {
        if (_dewExec$4$1) return exports$4$1;
        _dewExec$4$1 = true;
        var process$1 = process;
        var debug = _typeof(process$1) === "object" && process$1.env && process$1.env.NODE_DEBUG && /\bsemver\b/i.test(process$1.env.NODE_DEBUG) ? function () {
          var _console;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (_console = console).error.apply(_console, ["SEMVER"].concat(args));
        } : function () {};
        exports$4$1 = debug;
        return exports$4$1;
      }

      var exports$3$1 = {},
          _dewExec$3$1 = false;

      function dew$3$1() {
        if (_dewExec$3$1) return exports$3$1;
        _dewExec$3$1 = true;

        var _dew$ = dew$5$1(),
            MAX_SAFE_COMPONENT_LENGTH = _dew$.MAX_SAFE_COMPONENT_LENGTH,
            MAX_SAFE_BUILD_LENGTH = _dew$.MAX_SAFE_BUILD_LENGTH,
            MAX_LENGTH = _dew$.MAX_LENGTH;

        var debug = dew$4$1();
        exports$3$1 = exports$3$1 = {}; // The actual regexps go on exports.re

        var re = exports$3$1.re = [];
        var safeRe = exports$3$1.safeRe = [];
        var src = exports$3$1.src = [];
        var t = exports$3$1.t = {};
        var R = 0;
        var LETTERDASHNUMBER = "[a-zA-Z0-9-]"; // Replace some greedy regex tokens to prevent regex dos issues. These regex are
        // used internally via the safeRe object since all inputs in this library get
        // normalized first to trim and collapse all extra whitespace. The original
        // regexes are exported for userland consumption and lower level usage. A
        // future breaking change could export the safer regex only with a note that
        // all input should have extra whitespace removed.

        var safeRegexReplacements = [["\\s", 1], ["\\d", MAX_LENGTH], [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]];

        var makeSafeRegex = function makeSafeRegex(value) {
          var _iterator = _createForOfIteratorHelper(safeRegexReplacements),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  token = _step$value[0],
                  max = _step$value[1];

              value = value.split("".concat(token, "*")).join("".concat(token, "{0,").concat(max, "}")).split("".concat(token, "+")).join("".concat(token, "{1,").concat(max, "}"));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return value;
        };

        var createToken = function createToken(name, value, isGlobal) {
          var safe = makeSafeRegex(value);
          var index = R++;
          debug(name, index, value);
          t[name] = index;
          src[index] = value;
          re[index] = new RegExp(value, isGlobal ? "g" : undefined);
          safeRe[index] = new RegExp(safe, isGlobal ? "g" : undefined);
        }; // The following Regular Expressions can be used for tokenizing,
        // validating, and parsing SemVer version strings.
        // ## Numeric Identifier
        // A single `0`, or a non-zero digit followed by zero or more digits.


        createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
        createToken("NUMERICIDENTIFIERLOOSE", "\\d+"); // ## Non-numeric Identifier
        // Zero or more digits, followed by a letter or hyphen, and then zero or
        // more letters, digits, or hyphens.

        createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-]".concat(LETTERDASHNUMBER, "*")); // ## Main Version
        // Three dot-separated numeric identifiers.

        createToken("MAINVERSION", "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")"));
        createToken("MAINVERSIONLOOSE", "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")")); // ## Pre-release Version Identifier
        // A numeric identifier, or a non-numeric identifier.

        createToken("PRERELEASEIDENTIFIER", "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
        createToken("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(src[t.NONNUMERICIDENTIFIER], ")")); // ## Pre-release Version
        // Hyphen, followed by one or more dot-separated pre-release version
        // identifiers.

        createToken("PRERELEASE", "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIER], ")*))"));
        createToken("PRERELEASELOOSE", "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIERLOOSE], ")*))")); // ## Build Metadata Identifier
        // Any combination of digits, letters, or hyphens.

        createToken("BUILDIDENTIFIER", "".concat(LETTERDASHNUMBER, "+")); // ## Build Metadata
        // Plus sign, followed by one or more period-separated build metadata
        // identifiers.

        createToken("BUILD", "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(src[t.BUILDIDENTIFIER], ")*))")); // ## Full Version String
        // A main version, followed optionally by a pre-release version and
        // build metadata.
        // Note that the only major, minor, patch, and pre-release sections of
        // the version string are capturing groups.  The build metadata is not a
        // capturing group, because it should not ever be used in version
        // comparison.

        createToken("FULLPLAIN", "v?".concat(src[t.MAINVERSION]).concat(src[t.PRERELEASE], "?").concat(src[t.BUILD], "?"));
        createToken("FULL", "^".concat(src[t.FULLPLAIN], "$")); // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
        // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
        // common in the npm registry.

        createToken("LOOSEPLAIN", "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(src[t.PRERELEASELOOSE], "?").concat(src[t.BUILD], "?"));
        createToken("LOOSE", "^".concat(src[t.LOOSEPLAIN], "$"));
        createToken("GTLT", "((?:<|>)?=?)"); // Something like "2.*" or "1.2.x".
        // Note that "x.x" is a valid xRange identifer, meaning "any version"
        // Only the first item is strictly required.

        createToken("XRANGEIDENTIFIERLOOSE", "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
        createToken("XRANGEIDENTIFIER", "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));
        createToken("XRANGEPLAIN", "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(src[t.PRERELEASE], ")?").concat(src[t.BUILD], "?") + ")?)?");
        createToken("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(src[t.PRERELEASELOOSE], ")?").concat(src[t.BUILD], "?") + ")?)?");
        createToken("XRANGE", "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
        createToken("XRANGELOOSE", "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$")); // Coercion.
        // Extract anything that could conceivably be a part of a valid semver

        createToken("COERCE", "".concat("(^|[^\\d])" + "(\\d{1,").concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:$|[^\\d])");
        createToken("COERCERTL", src[t.COERCE], true); // Tilde ranges.
        // Meaning is "reasonably at or greater than"

        createToken("LONETILDE", "(?:~>?)");
        createToken("TILDETRIM", "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
        exports$3$1.tildeTrimReplace = "$1~";
        createToken("TILDE", "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
        createToken("TILDELOOSE", "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$")); // Caret ranges.
        // Meaning is "at least and backwards compatible with"

        createToken("LONECARET", "(?:\\^)");
        createToken("CARETTRIM", "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
        exports$3$1.caretTrimReplace = "$1^";
        createToken("CARET", "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
        createToken("CARETLOOSE", "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$")); // A simple gt/lt/eq thing, or just "" to indicate "any version"

        createToken("COMPARATORLOOSE", "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
        createToken("COMPARATOR", "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$")); // An expression to strip any whitespace between the gtlt and the thing
        // it modifies, so that `> 1.2.3` ==> `>1.2.3`

        createToken("COMPARATORTRIM", "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
        exports$3$1.comparatorTrimReplace = "$1$2$3"; // Something like `1.2.3 - 1.2.4`
        // Note that these all use the loose form, because they'll be
        // checked against either the strict or loose comparator form
        // later.

        createToken("HYPHENRANGE", "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAIN], ")") + "\\s*$");
        createToken("HYPHENRANGELOOSE", "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s*$"); // Star ranges basically just allow anything at all.

        createToken("STAR", "(<|>)?=?\\s*\\*"); // >=0.0.0 is like a star

        createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
        createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
        return exports$3$1;
      }

      var exports$2$1 = {},
          _dewExec$2$1 = false;

      function dew$2$1() {
        if (_dewExec$2$1) return exports$2$1;
        _dewExec$2$1 = true; // parse out just the options we care about

        var looseOption = Object.freeze({
          loose: true
        });
        var emptyOpts = Object.freeze({});

        var parseOptions = function parseOptions(options) {
          if (!options) {
            return emptyOpts;
          }

          if (_typeof(options) !== "object") {
            return looseOption;
          }

          return options;
        };

        exports$2$1 = parseOptions;
        return exports$2$1;
      }

      var exports$1$4 = {},
          _dewExec$1$3 = false;

      function dew$1$3() {
        if (_dewExec$1$3) return exports$1$4;
        _dewExec$1$3 = true;
        var numeric = /^[0-9]+$/;

        var compareIdentifiers = function compareIdentifiers(a, b) {
          var anum = numeric.test(a);
          var bnum = numeric.test(b);

          if (anum && bnum) {
            a = +a;
            b = +b;
          }

          return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
        };

        var rcompareIdentifiers = function rcompareIdentifiers(a, b) {
          return compareIdentifiers(b, a);
        };

        exports$1$4 = {
          compareIdentifiers: compareIdentifiers,
          rcompareIdentifiers: rcompareIdentifiers
        };
        return exports$1$4;
      }

      var exports$B = {},
          _dewExec$A = false;

      function dew$A() {
        if (_dewExec$A) return exports$B;
        _dewExec$A = true;
        var debug = dew$4$1();

        var _dew$2 = dew$5$1(),
            MAX_LENGTH = _dew$2.MAX_LENGTH,
            MAX_SAFE_INTEGER = _dew$2.MAX_SAFE_INTEGER;

        var _dew$3 = dew$3$1(),
            re = _dew$3.safeRe,
            t = _dew$3.t;

        var parseOptions = dew$2$1();

        var _dew$4 = dew$1$3(),
            compareIdentifiers = _dew$4.compareIdentifiers;

        var SemVer = /*#__PURE__*/function () {
          function SemVer(version, options) {
            _classCallCheck(this, SemVer);

            options = parseOptions(options);

            if (version instanceof SemVer) {
              if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
              } else {
                version = version.version;
              }
            } else if (typeof version !== "string") {
              throw new TypeError("Invalid version. Must be a string. Got type \"".concat(_typeof(version), "\"."));
            }

            if (version.length > MAX_LENGTH) {
              throw new TypeError("version is longer than ".concat(MAX_LENGTH, " characters"));
            }

            debug("SemVer", version, options);
            this.options = options;
            this.loose = !!options.loose; // this isn't actually relevant for versions, but keep it so that we
            // don't run into trouble passing this.options around.

            this.includePrerelease = !!options.includePrerelease;
            var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

            if (!m) {
              throw new TypeError("Invalid Version: ".concat(version));
            }

            this.raw = version; // these are actually numbers

            this.major = +m[1];
            this.minor = +m[2];
            this.patch = +m[3];

            if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
              throw new TypeError("Invalid major version");
            }

            if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
              throw new TypeError("Invalid minor version");
            }

            if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
              throw new TypeError("Invalid patch version");
            } // numberify any prerelease numeric ids


            if (!m[4]) {
              this.prerelease = [];
            } else {
              this.prerelease = m[4].split(".").map(function (id) {
                if (/^[0-9]+$/.test(id)) {
                  var num = +id;

                  if (num >= 0 && num < MAX_SAFE_INTEGER) {
                    return num;
                  }
                }

                return id;
              });
            }

            this.build = m[5] ? m[5].split(".") : [];
            this.format();
          }

          _createClass(SemVer, [{
            key: "format",
            value: function format() {
              this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);

              if (this.prerelease.length) {
                this.version += "-".concat(this.prerelease.join("."));
              }

              return this.version;
            }
          }, {
            key: "toString",
            value: function toString() {
              return this.version;
            }
          }, {
            key: "compare",
            value: function compare(other) {
              debug("SemVer.compare", this.version, this.options, other);

              if (!(other instanceof SemVer)) {
                if (typeof other === "string" && other === this.version) {
                  return 0;
                }

                other = new SemVer(other, this.options);
              }

              if (other.version === this.version) {
                return 0;
              }

              return this.compareMain(other) || this.comparePre(other);
            }
          }, {
            key: "compareMain",
            value: function compareMain(other) {
              if (!(other instanceof SemVer)) {
                other = new SemVer(other, this.options);
              }

              return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
            }
          }, {
            key: "comparePre",
            value: function comparePre(other) {
              if (!(other instanceof SemVer)) {
                other = new SemVer(other, this.options);
              } // NOT having a prerelease is > having one


              if (this.prerelease.length && !other.prerelease.length) {
                return -1;
              } else if (!this.prerelease.length && other.prerelease.length) {
                return 1;
              } else if (!this.prerelease.length && !other.prerelease.length) {
                return 0;
              }

              var i = 0;

              do {
                var a = this.prerelease[i];
                var b = other.prerelease[i];
                debug("prerelease compare", i, a, b);

                if (a === undefined && b === undefined) {
                  return 0;
                } else if (b === undefined) {
                  return 1;
                } else if (a === undefined) {
                  return -1;
                } else if (a === b) {
                  continue;
                } else {
                  return compareIdentifiers(a, b);
                }
              } while (++i);
            }
          }, {
            key: "compareBuild",
            value: function compareBuild(other) {
              if (!(other instanceof SemVer)) {
                other = new SemVer(other, this.options);
              }

              var i = 0;

              do {
                var a = this.build[i];
                var b = other.build[i];
                debug("prerelease compare", i, a, b);

                if (a === undefined && b === undefined) {
                  return 0;
                } else if (b === undefined) {
                  return 1;
                } else if (a === undefined) {
                  return -1;
                } else if (a === b) {
                  continue;
                } else {
                  return compareIdentifiers(a, b);
                }
              } while (++i);
            } // preminor will bump the version up to the next minor release, and immediately
            // down to pre-release. premajor and prepatch work the same way.

          }, {
            key: "inc",
            value: function inc(release, identifier, identifierBase) {
              switch (release) {
                case "premajor":
                  this.prerelease.length = 0;
                  this.patch = 0;
                  this.minor = 0;
                  this.major++;
                  this.inc("pre", identifier, identifierBase);
                  break;

                case "preminor":
                  this.prerelease.length = 0;
                  this.patch = 0;
                  this.minor++;
                  this.inc("pre", identifier, identifierBase);
                  break;

                case "prepatch":
                  // If this is already a prerelease, it will bump to the next version
                  // drop any prereleases that might already exist, since they are not
                  // relevant at this point.
                  this.prerelease.length = 0;
                  this.inc("patch", identifier, identifierBase);
                  this.inc("pre", identifier, identifierBase);
                  break;
                // If the input is a non-prerelease version, this acts the same as
                // prepatch.

                case "prerelease":
                  if (this.prerelease.length === 0) {
                    this.inc("patch", identifier, identifierBase);
                  }

                  this.inc("pre", identifier, identifierBase);
                  break;

                case "major":
                  // If this is a pre-major version, bump up to the same major version.
                  // Otherwise increment major.
                  // 1.0.0-5 bumps to 1.0.0
                  // 1.1.0 bumps to 2.0.0
                  if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                  }

                  this.minor = 0;
                  this.patch = 0;
                  this.prerelease = [];
                  break;

                case "minor":
                  // If this is a pre-minor version, bump up to the same minor version.
                  // Otherwise increment minor.
                  // 1.2.0-5 bumps to 1.2.0
                  // 1.2.1 bumps to 1.3.0
                  if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                  }

                  this.patch = 0;
                  this.prerelease = [];
                  break;

                case "patch":
                  // If this is not a pre-release version, it will increment the patch.
                  // If it is a pre-release it will bump up to the same patch version.
                  // 1.2.0-5 patches to 1.2.0
                  // 1.2.0 patches to 1.2.1
                  if (this.prerelease.length === 0) {
                    this.patch++;
                  }

                  this.prerelease = [];
                  break;
                // This probably shouldn't be used publicly.
                // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.

                case "pre":
                  {
                    var base = Number(identifierBase) ? 1 : 0;

                    if (!identifier && identifierBase === false) {
                      throw new Error("invalid increment argument: identifier is empty");
                    }

                    if (this.prerelease.length === 0) {
                      this.prerelease = [base];
                    } else {
                      var i = this.prerelease.length;

                      while (--i >= 0) {
                        if (typeof this.prerelease[i] === "number") {
                          this.prerelease[i]++;
                          i = -2;
                        }
                      }

                      if (i === -1) {
                        // didn't increment anything
                        if (identifier === this.prerelease.join(".") && identifierBase === false) {
                          throw new Error("invalid increment argument: identifier already exists");
                        }

                        this.prerelease.push(base);
                      }
                    }

                    if (identifier) {
                      // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                      // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                      var prerelease = [identifier, base];

                      if (identifierBase === false) {
                        prerelease = [identifier];
                      }

                      if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                        if (isNaN(this.prerelease[1])) {
                          this.prerelease = prerelease;
                        }
                      } else {
                        this.prerelease = prerelease;
                      }
                    }

                    break;
                  }

                default:
                  throw new Error("invalid increment argument: ".concat(release));
              }

              this.raw = this.format();

              if (this.build.length) {
                this.raw += "+".concat(this.build.join("."));
              }

              return this;
            }
          }]);

          return SemVer;
        }();

        exports$B = SemVer;
        return exports$B;
      }

      var exports$A = {},
          _dewExec$z = false;

      function dew$z() {
        if (_dewExec$z) return exports$A;
        _dewExec$z = true;
        var SemVer = dew$A();

        var parse = function parse(version, options) {
          var throwErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (version instanceof SemVer) {
            return version;
          }

          try {
            return new SemVer(version, options);
          } catch (er) {
            if (!throwErrors) {
              return null;
            }

            throw er;
          }
        };

        exports$A = parse;
        return exports$A;
      }

      var exports$z = {},
          _dewExec$y = false;

      function dew$y() {
        if (_dewExec$y) return exports$z;
        _dewExec$y = true;
        var parse = dew$z();

        var valid = function valid(version, options) {
          var v = parse(version, options);
          return v ? v.version : null;
        };

        exports$z = valid;
        return exports$z;
      }

      var exports$y = {},
          _dewExec$x = false;

      function dew$x() {
        if (_dewExec$x) return exports$y;
        _dewExec$x = true;
        var parse = dew$z();

        var clean = function clean(version, options) {
          var s = parse(version.trim().replace(/^[=v]+/, ""), options);
          return s ? s.version : null;
        };

        exports$y = clean;
        return exports$y;
      }

      var exports$x = {},
          _dewExec$w = false;

      function dew$w() {
        if (_dewExec$w) return exports$x;
        _dewExec$w = true;
        var SemVer = dew$A();

        var inc = function inc(version, release, options, identifier, identifierBase) {
          if (typeof options === "string") {
            identifierBase = identifier;
            identifier = options;
            options = undefined;
          }

          try {
            return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
          } catch (er) {
            return null;
          }
        };

        exports$x = inc;
        return exports$x;
      }

      var exports$w = {},
          _dewExec$v = false;

      function dew$v() {
        if (_dewExec$v) return exports$w;
        _dewExec$v = true;
        var parse = dew$z();

        var diff = function diff(version1, version2) {
          var v1 = parse(version1, null, true);
          var v2 = parse(version2, null, true);
          var comparison = v1.compare(v2);

          if (comparison === 0) {
            return null;
          }

          var v1Higher = comparison > 0;
          var highVersion = v1Higher ? v1 : v2;
          var lowVersion = v1Higher ? v2 : v1;
          var highHasPre = !!highVersion.prerelease.length;
          var lowHasPre = !!lowVersion.prerelease.length;

          if (lowHasPre && !highHasPre) {
            // Going from prerelease -> no prerelease requires some special casing
            // If the low version has only a major, then it will always be a major
            // Some examples:
            // 1.0.0-1 -> 1.0.0
            // 1.0.0-1 -> 1.1.1
            // 1.0.0-1 -> 2.0.0
            if (!lowVersion.patch && !lowVersion.minor) {
              return "major";
            } // Otherwise it can be determined by checking the high version


            if (highVersion.patch) {
              // anything higher than a patch bump would result in the wrong version
              return "patch";
            }

            if (highVersion.minor) {
              // anything higher than a minor bump would result in the wrong version
              return "minor";
            } // bumping major/minor/patch all have same result


            return "major";
          } // add the `pre` prefix if we are going to a prerelease version


          var prefix = highHasPre ? "pre" : "";

          if (v1.major !== v2.major) {
            return prefix + "major";
          }

          if (v1.minor !== v2.minor) {
            return prefix + "minor";
          }

          if (v1.patch !== v2.patch) {
            return prefix + "patch";
          } // high and low are preleases


          return "prerelease";
        };

        exports$w = diff;
        return exports$w;
      }

      var exports$v = {},
          _dewExec$u = false;

      function dew$u() {
        if (_dewExec$u) return exports$v;
        _dewExec$u = true;
        var SemVer = dew$A();

        var major = function major(a, loose) {
          return new SemVer(a, loose).major;
        };

        exports$v = major;
        return exports$v;
      }

      var exports$u = {},
          _dewExec$t = false;

      function dew$t() {
        if (_dewExec$t) return exports$u;
        _dewExec$t = true;
        var SemVer = dew$A();

        var minor = function minor(a, loose) {
          return new SemVer(a, loose).minor;
        };

        exports$u = minor;
        return exports$u;
      }

      var exports$t = {},
          _dewExec$s = false;

      function dew$s() {
        if (_dewExec$s) return exports$t;
        _dewExec$s = true;
        var SemVer = dew$A();

        var patch = function patch(a, loose) {
          return new SemVer(a, loose).patch;
        };

        exports$t = patch;
        return exports$t;
      }

      var exports$s = {},
          _dewExec$r = false;

      function dew$r() {
        if (_dewExec$r) return exports$s;
        _dewExec$r = true;
        var parse = dew$z();

        var prerelease = function prerelease(version, options) {
          var parsed = parse(version, options);
          return parsed && parsed.prerelease.length ? parsed.prerelease : null;
        };

        exports$s = prerelease;
        return exports$s;
      }

      var exports$r = {},
          _dewExec$q = false;

      function dew$q() {
        if (_dewExec$q) return exports$r;
        _dewExec$q = true;
        var SemVer = dew$A();

        var compare = function compare(a, b, loose) {
          return new SemVer(a, loose).compare(new SemVer(b, loose));
        };

        exports$r = compare;
        return exports$r;
      }

      var exports$q = {},
          _dewExec$p = false;

      function dew$p() {
        if (_dewExec$p) return exports$q;
        _dewExec$p = true;
        var compare = dew$q();

        var rcompare = function rcompare(a, b, loose) {
          return compare(b, a, loose);
        };

        exports$q = rcompare;
        return exports$q;
      }

      var exports$p = {},
          _dewExec$o = false;

      function dew$o() {
        if (_dewExec$o) return exports$p;
        _dewExec$o = true;
        var SemVer = dew$A();

        var compareBuild = function compareBuild(a, b, loose) {
          var versionA = new SemVer(a, loose);
          var versionB = new SemVer(b, loose);
          return versionA.compare(versionB) || versionA.compareBuild(versionB);
        };

        exports$p = compareBuild;
        return exports$p;
      }

      var exports$o = {},
          _dewExec$n = false;

      function dew$n() {
        if (_dewExec$n) return exports$o;
        _dewExec$n = true;
        var compareBuild = dew$o();

        var sort = function sort(list, loose) {
          return list.sort(function (a, b) {
            return compareBuild(a, b, loose);
          });
        };

        exports$o = sort;
        return exports$o;
      }

      var exports$n = {},
          _dewExec$m = false;

      function dew$m() {
        if (_dewExec$m) return exports$n;
        _dewExec$m = true;
        var compareBuild = dew$o();

        var rsort = function rsort(list, loose) {
          return list.sort(function (a, b) {
            return compareBuild(b, a, loose);
          });
        };

        exports$n = rsort;
        return exports$n;
      }

      var exports$m = {},
          _dewExec$l = false;

      function dew$l() {
        if (_dewExec$l) return exports$m;
        _dewExec$l = true;
        var compare = dew$q();

        var gt = function gt(a, b, loose) {
          return compare(a, b, loose) > 0;
        };

        exports$m = gt;
        return exports$m;
      }

      var exports$l = {},
          _dewExec$k = false;

      function dew$k() {
        if (_dewExec$k) return exports$l;
        _dewExec$k = true;
        var compare = dew$q();

        var lt = function lt(a, b, loose) {
          return compare(a, b, loose) < 0;
        };

        exports$l = lt;
        return exports$l;
      }

      var exports$k = {},
          _dewExec$j = false;

      function dew$j() {
        if (_dewExec$j) return exports$k;
        _dewExec$j = true;
        var compare = dew$q();

        var eq = function eq(a, b, loose) {
          return compare(a, b, loose) === 0;
        };

        exports$k = eq;
        return exports$k;
      }

      var exports$j = {},
          _dewExec$i = false;

      function dew$i() {
        if (_dewExec$i) return exports$j;
        _dewExec$i = true;
        var compare = dew$q();

        var gte = function gte(a, b, loose) {
          return compare(a, b, loose) >= 0;
        };

        exports$j = gte;
        return exports$j;
      }

      var exports$i = {},
          _dewExec$h = false;

      function dew$h() {
        if (_dewExec$h) return exports$i;
        _dewExec$h = true;
        var compare = dew$q();

        var lte = function lte(a, b, loose) {
          return compare(a, b, loose) <= 0;
        };

        exports$i = lte;
        return exports$i;
      }

      var exports$1$3 = {},
          _dewExec$1$2 = false;

      function dew$1$2() {
        if (_dewExec$1$2) return exports$1$3;
        _dewExec$1$2 = true;
        var compare = dew$q();

        var neq = function neq(a, b, loose) {
          return compare(a, b, loose) !== 0;
        };

        exports$1$3 = neq;
        return exports$1$3;
      }

      var exports$h = {},
          _dewExec$g = false;

      function dew$g() {
        if (_dewExec$g) return exports$h;
        _dewExec$g = true;
        var eq = dew$j();
        var neq = dew$1$2();
        var gt = dew$l();
        var gte = dew$i();
        var lt = dew$k();
        var lte = dew$h();

        var cmp = function cmp(a, op, b, loose) {
          switch (op) {
            case "===":
              if (_typeof(a) === "object") {
                a = a.version;
              }

              if (_typeof(b) === "object") {
                b = b.version;
              }

              return a === b;

            case "!==":
              if (_typeof(a) === "object") {
                a = a.version;
              }

              if (_typeof(b) === "object") {
                b = b.version;
              }

              return a !== b;

            case "":
            case "=":
            case "==":
              return eq(a, b, loose);

            case "!=":
              return neq(a, b, loose);

            case ">":
              return gt(a, b, loose);

            case ">=":
              return gte(a, b, loose);

            case "<":
              return lt(a, b, loose);

            case "<=":
              return lte(a, b, loose);

            default:
              throw new TypeError("Invalid operator: ".concat(op));
          }
        };

        exports$h = cmp;
        return exports$h;
      }

      var exports$g = {},
          _dewExec$f = false;

      function dew$f() {
        if (_dewExec$f) return exports$g;
        _dewExec$f = true;
        var SemVer = dew$A();
        var parse = dew$z();

        var _dew$ = dew$3$1(),
            re = _dew$.safeRe,
            t = _dew$.t;

        var coerce = function coerce(version, options) {
          if (version instanceof SemVer) {
            return version;
          }

          if (typeof version === "number") {
            version = String(version);
          }

          if (typeof version !== "string") {
            return null;
          }

          options = options || {};
          var match = null;

          if (!options.rtl) {
            match = version.match(re[t.COERCE]);
          } else {
            // Find the right-most coercible string that does not share
            // a terminus with a more left-ward coercible string.
            // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
            //
            // Walk through the string checking with a /g regexp
            // Manually set the index so as to pick up overlapping matches.
            // Stop when we get a match that ends at the string end, since no
            // coercible string can be more right-ward without the same terminus.
            var next;

            while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
              if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
              }

              re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
            } // leave it in a clean state


            re[t.COERCERTL].lastIndex = -1;
          }

          if (match === null) {
            return null;
          }

          return parse("".concat(match[2], ".").concat(match[3] || "0", ".").concat(match[4] || "0"), options);
        };

        exports$g = coerce;
        return exports$g;
      }

      var _lruCache = "default" in _lruCache2 ? exports$1$5 : _lruCache2;

      var exports$1$2 = {},
          _dewExec$1$1 = false;

      function dew$1$1() {
        if (_dewExec$1$1) return exports$1$2;
        _dewExec$1$1 = true; // hoisted class for cyclic dependency

        var Range = /*#__PURE__*/function () {
          function Range(range, options) {
            var _this = this;

            _classCallCheck(this, Range);

            options = parseOptions(options);

            if (range instanceof Range) {
              if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
              } else {
                return new Range(range.raw, options);
              }
            }

            if (range instanceof Comparator) {
              // just put it in the set and return
              this.raw = range.value;
              this.set = [[range]];
              this.format();
              return this;
            }

            this.options = options;
            this.loose = !!options.loose;
            this.includePrerelease = !!options.includePrerelease; // First reduce all whitespace as much as possible so we do not have to rely
            // on potentially slow regexes like \s*. This is then stored and used for
            // future error messages as well.

            this.raw = range.trim().split(/\s+/).join(" "); // First, split on ||

            this.set = this.raw.split("||") // map the range to a 2d array of comparators
            .map(function (r) {
              return _this.parseRange(r.trim());
            }) // throw out any comparator lists that are empty
            // this generally means that it was not a valid range, which is allowed
            // in loose mode, but will still throw if the WHOLE range is invalid.
            .filter(function (c) {
              return c.length;
            });

            if (!this.set.length) {
              throw new TypeError("Invalid SemVer Range: ".concat(this.raw));
            } // if we have any that are not the null set, throw out null sets.


            if (this.set.length > 1) {
              // keep the first one, in case they're all null sets
              var first = this.set[0];
              this.set = this.set.filter(function (c) {
                return !isNullSet(c[0]);
              });

              if (this.set.length === 0) {
                this.set = [first];
              } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                var _iterator = _createForOfIteratorHelper(this.set),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var c = _step.value;

                    if (c.length === 1 && isAny(c[0])) {
                      this.set = [c];
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }

            this.format();
          }

          _createClass(Range, [{
            key: "format",
            value: function format() {
              this.range = this.set.map(function (comps) {
                return comps.join(" ").trim();
              }).join("||").trim();
              return this.range;
            }
          }, {
            key: "toString",
            value: function toString() {
              return this.range;
            }
          }, {
            key: "parseRange",
            value: function parseRange(range) {
              var _this2 = this;

              // memoize range parsing for performance.
              // this is a very hot path, and fully deterministic.
              var memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
              var memoKey = memoOpts + ":" + range;
              var cached = cache.get(memoKey);

              if (cached) {
                return cached;
              }

              var loose = this.options.loose; // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

              var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
              range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
              debug("hyphen replace", range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

              range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
              debug("comparator trim", range); // `~ 1.2.3` => `~1.2.3`

              range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
              debug("tilde trim", range); // `^ 1.2.3` => `^1.2.3`

              range = range.replace(re[t.CARETTRIM], caretTrimReplace);
              debug("caret trim", range); // At this point, the range is completely trimmed and
              // ready to be split into comparators.

              var rangeList = range.split(" ").map(function (comp) {
                return parseComparator(comp, _this2.options);
              }).join(" ").split(/\s+/) // >=0.0.0 is equivalent to *
              .map(function (comp) {
                return replaceGTE0(comp, _this2.options);
              });

              if (loose) {
                // in loose mode, throw out any that are not valid comparators
                rangeList = rangeList.filter(function (comp) {
                  debug("loose invalid filter", comp, _this2.options);
                  return !!comp.match(re[t.COMPARATORLOOSE]);
                });
              }

              debug("range list", rangeList); // if any comparators are the null set, then replace with JUST null set
              // if more than one comparator, remove any * comparators
              // also, don't include the same comparator more than once

              var rangeMap = new Map();
              var comparators = rangeList.map(function (comp) {
                return new Comparator(comp, _this2.options);
              });

              var _iterator2 = _createForOfIteratorHelper(comparators),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var comp = _step2.value;

                  if (isNullSet(comp)) {
                    return [comp];
                  }

                  rangeMap.set(comp.value, comp);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (rangeMap.size > 1 && rangeMap.has("")) {
                rangeMap["delete"]("");
              }

              var result = _toConsumableArray(rangeMap.values());

              cache.set(memoKey, result);
              return result;
            }
          }, {
            key: "intersects",
            value: function intersects(range, options) {
              if (!(range instanceof Range)) {
                throw new TypeError("a Range is required");
              }

              return this.set.some(function (thisComparators) {
                return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
                  return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
                    return rangeComparators.every(function (rangeComparator) {
                      return thisComparator.intersects(rangeComparator, options);
                    });
                  });
                });
              });
            } // if ANY of the sets match ALL of its comparators, then pass

          }, {
            key: "test",
            value: function test(version) {
              if (!version) {
                return false;
              }

              if (typeof version === "string") {
                try {
                  version = new SemVer(version, this.options);
                } catch (er) {
                  return false;
                }
              }

              for (var i = 0; i < this.set.length; i++) {
                if (testSet(this.set[i], version, this.options)) {
                  return true;
                }
              }

              return false;
            }
          }]);

          return Range;
        }();

        exports$1$2 = Range;
        var LRU = _lruCache;
        var cache = new LRU({
          max: 1000
        });
        var parseOptions = dew$2$1();
        var Comparator = dew$e();
        var debug = dew$4$1();
        var SemVer = dew$A();

        var _dew$ = dew$3$1(),
            re = _dew$.safeRe,
            t = _dew$.t,
            comparatorTrimReplace = _dew$.comparatorTrimReplace,
            tildeTrimReplace = _dew$.tildeTrimReplace,
            caretTrimReplace = _dew$.caretTrimReplace;

        var _dew$2 = dew$5$1(),
            FLAG_INCLUDE_PRERELEASE = _dew$2.FLAG_INCLUDE_PRERELEASE,
            FLAG_LOOSE = _dew$2.FLAG_LOOSE;

        var isNullSet = function isNullSet(c) {
          return c.value === "<0.0.0-0";
        };

        var isAny = function isAny(c) {
          return c.value === "";
        }; // take a set of comparators and determine whether there
        // exists a version which can satisfy it


        var isSatisfiable = function isSatisfiable(comparators, options) {
          var result = true;
          var remainingComparators = comparators.slice();
          var testComparator = remainingComparators.pop();

          while (result && remainingComparators.length) {
            result = remainingComparators.every(function (otherComparator) {
              return testComparator.intersects(otherComparator, options);
            });
            testComparator = remainingComparators.pop();
          }

          return result;
        }; // comprised of xranges, tildes, stars, and gtlt's at this point.
        // already replaced the hyphen ranges
        // turn into a set of JUST comparators.


        var parseComparator = function parseComparator(comp, options) {
          debug("comp", comp, options);
          comp = replaceCarets(comp, options);
          debug("caret", comp);
          comp = replaceTildes(comp, options);
          debug("tildes", comp);
          comp = replaceXRanges(comp, options);
          debug("xrange", comp);
          comp = replaceStars(comp, options);
          debug("stars", comp);
          return comp;
        };

        var isX = function isX(id) {
          return !id || id.toLowerCase() === "x" || id === "*";
        }; // ~, ~> --> * (any, kinda silly)
        // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
        // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
        // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
        // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
        // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
        // ~0.0.1 --> >=0.0.1 <0.1.0-0


        var replaceTildes = function replaceTildes(comp, options) {
          return comp.trim().split(/\s+/).map(function (c) {
            return replaceTilde(c, options);
          }).join(" ");
        };

        var replaceTilde = function replaceTilde(comp, options) {
          var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
          return comp.replace(r, function (_, M, m, p, pr) {
            debug("tilde", comp, _, M, m, p, pr);
            var ret;

            if (isX(M)) {
              ret = "";
            } else if (isX(m)) {
              ret = ">=".concat(M, ".0.0 <").concat(+M + 1, ".0.0-0");
            } else if (isX(p)) {
              // ~1.2 == >=1.2.0 <1.3.0-0
              ret = ">=".concat(M, ".").concat(m, ".0 <").concat(M, ".").concat(+m + 1, ".0-0");
            } else if (pr) {
              debug("replaceTilde pr", pr);
              ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
            } else {
              // ~1.2.3 == >=1.2.3 <1.3.0-0
              ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(M, ".").concat(+m + 1, ".0-0");
            }

            debug("tilde return", ret);
            return ret;
          });
        }; // ^ --> * (any, kinda silly)
        // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
        // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
        // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
        // ^1.2.3 --> >=1.2.3 <2.0.0-0
        // ^1.2.0 --> >=1.2.0 <2.0.0-0
        // ^0.0.1 --> >=0.0.1 <0.0.2-0
        // ^0.1.0 --> >=0.1.0 <0.2.0-0


        var replaceCarets = function replaceCarets(comp, options) {
          return comp.trim().split(/\s+/).map(function (c) {
            return replaceCaret(c, options);
          }).join(" ");
        };

        var replaceCaret = function replaceCaret(comp, options) {
          debug("caret", comp, options);
          var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
          var z = options.includePrerelease ? "-0" : "";
          return comp.replace(r, function (_, M, m, p, pr) {
            debug("caret", comp, _, M, m, p, pr);
            var ret;

            if (isX(M)) {
              ret = "";
            } else if (isX(m)) {
              ret = ">=".concat(M, ".0.0").concat(z, " <").concat(+M + 1, ".0.0-0");
            } else if (isX(p)) {
              if (M === "0") {
                ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
              } else {
                ret = ">=".concat(M, ".").concat(m, ".0").concat(z, " <").concat(+M + 1, ".0.0-0");
              }
            } else if (pr) {
              debug("replaceCaret pr", pr);

              if (M === "0") {
                if (m === "0") {
                  ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
                } else {
                  ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
                }
              } else {
                ret = ">=".concat(M, ".").concat(m, ".").concat(p, "-").concat(pr, " <").concat(+M + 1, ".0.0-0");
              }
            } else {
              debug("no pr");

              if (M === "0") {
                if (m === "0") {
                  ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(m, ".").concat(+p + 1, "-0");
                } else {
                  ret = ">=".concat(M, ".").concat(m, ".").concat(p).concat(z, " <").concat(M, ".").concat(+m + 1, ".0-0");
                }
              } else {
                ret = ">=".concat(M, ".").concat(m, ".").concat(p, " <").concat(+M + 1, ".0.0-0");
              }
            }

            debug("caret return", ret);
            return ret;
          });
        };

        var replaceXRanges = function replaceXRanges(comp, options) {
          debug("replaceXRanges", comp, options);
          return comp.split(/\s+/).map(function (c) {
            return replaceXRange(c, options);
          }).join(" ");
        };

        var replaceXRange = function replaceXRange(comp, options) {
          comp = comp.trim();
          var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
          return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
            debug("xRange", comp, ret, gtlt, M, m, p, pr);
            var xM = isX(M);
            var xm = xM || isX(m);
            var xp = xm || isX(p);
            var anyX = xp;

            if (gtlt === "=" && anyX) {
              gtlt = "";
            } // if we're including prereleases in the match, then we need
            // to fix this to -0, the lowest possible prerelease value


            pr = options.includePrerelease ? "-0" : "";

            if (xM) {
              if (gtlt === ">" || gtlt === "<") {
                // nothing is allowed
                ret = "<0.0.0-0";
              } else {
                // nothing is forbidden
                ret = "*";
              }
            } else if (gtlt && anyX) {
              // we know patch is an x, because we have any x at all.
              // replace X with 0
              if (xm) {
                m = 0;
              }

              p = 0;

              if (gtlt === ">") {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = ">=";

                if (xm) {
                  M = +M + 1;
                  m = 0;
                  p = 0;
                } else {
                  m = +m + 1;
                  p = 0;
                }
              } else if (gtlt === "<=") {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = "<";

                if (xm) {
                  M = +M + 1;
                } else {
                  m = +m + 1;
                }
              }

              if (gtlt === "<") {
                pr = "-0";
              }

              ret = "".concat(gtlt + M, ".").concat(m, ".").concat(p).concat(pr);
            } else if (xm) {
              ret = ">=".concat(M, ".0.0").concat(pr, " <").concat(+M + 1, ".0.0-0");
            } else if (xp) {
              ret = ">=".concat(M, ".").concat(m, ".0").concat(pr, " <").concat(M, ".").concat(+m + 1, ".0-0");
            }

            debug("xRange return", ret);
            return ret;
          });
        }; // Because * is AND-ed with everything else in the comparator,
        // and '' means "any version", just remove the *s entirely.


        var replaceStars = function replaceStars(comp, options) {
          debug("replaceStars", comp, options); // Looseness is ignored here.  star is always as loose as it gets!

          return comp.trim().replace(re[t.STAR], "");
        };

        var replaceGTE0 = function replaceGTE0(comp, options) {
          debug("replaceGTE0", comp, options);
          return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
        }; // This function is passed to string.replace(re[t.HYPHENRANGE])
        // M, m, patch, prerelease, build
        // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
        // 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
        // 1.2 - 3.4 => >=1.2.0 <3.5.0-0


        var hyphenReplace = function hyphenReplace(incPr) {
          return function ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
            if (isX(fM)) {
              from = "";
            } else if (isX(fm)) {
              from = ">=".concat(fM, ".0.0").concat(incPr ? "-0" : "");
            } else if (isX(fp)) {
              from = ">=".concat(fM, ".").concat(fm, ".0").concat(incPr ? "-0" : "");
            } else if (fpr) {
              from = ">=".concat(from);
            } else {
              from = ">=".concat(from).concat(incPr ? "-0" : "");
            }

            if (isX(tM)) {
              to = "";
            } else if (isX(tm)) {
              to = "<".concat(+tM + 1, ".0.0-0");
            } else if (isX(tp)) {
              to = "<".concat(tM, ".").concat(+tm + 1, ".0-0");
            } else if (tpr) {
              to = "<=".concat(tM, ".").concat(tm, ".").concat(tp, "-").concat(tpr);
            } else if (incPr) {
              to = "<".concat(tM, ".").concat(tm, ".").concat(+tp + 1, "-0");
            } else {
              to = "<=".concat(to);
            }

            return "".concat(from, " ").concat(to).trim();
          };
        };

        var testSet = function testSet(set, version, options) {
          for (var i = 0; i < set.length; i++) {
            if (!set[i].test(version)) {
              return false;
            }
          }

          if (version.prerelease.length && !options.includePrerelease) {
            // Find the set of versions that are allowed to have prereleases
            // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
            // That should allow `1.2.3-pr.2` to pass.
            // However, `1.2.4-alpha.notready` should NOT be allowed,
            // even though it's within the range set by the comparators.
            for (var _i = 0; _i < set.length; _i++) {
              debug(set[_i].semver);

              if (set[_i].semver === Comparator.ANY) {
                continue;
              }

              if (set[_i].semver.prerelease.length > 0) {
                var allowed = set[_i].semver;

                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                  return true;
                }
              }
            } // Version has a -pre, but it's not one of the ones we like.


            return false;
          }

          return true;
        };

        return exports$1$2;
      }

      var exports$f = {},
          _dewExec$e = false;

      function dew$e() {
        if (_dewExec$e) return exports$f;
        _dewExec$e = true;
        var ANY = Symbol("SemVer ANY"); // hoisted class for cyclic dependency

        var Comparator = /*#__PURE__*/function () {
          _createClass(Comparator, null, [{
            key: "ANY",
            get: function get() {
              return ANY;
            }
          }]);

          function Comparator(comp, options) {
            _classCallCheck(this, Comparator);

            options = parseOptions(options);

            if (comp instanceof Comparator) {
              if (comp.loose === !!options.loose) {
                return comp;
              } else {
                comp = comp.value;
              }
            }

            comp = comp.trim().split(/\s+/).join(" ");
            debug("comparator", comp, options);
            this.options = options;
            this.loose = !!options.loose;
            this.parse(comp);

            if (this.semver === ANY) {
              this.value = "";
            } else {
              this.value = this.operator + this.semver.version;
            }

            debug("comp", this);
          }

          _createClass(Comparator, [{
            key: "parse",
            value: function parse(comp) {
              var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
              var m = comp.match(r);

              if (!m) {
                throw new TypeError("Invalid comparator: ".concat(comp));
              }

              this.operator = m[1] !== undefined ? m[1] : "";

              if (this.operator === "=") {
                this.operator = "";
              } // if it literally is just '>' or '' then allow anything.


              if (!m[2]) {
                this.semver = ANY;
              } else {
                this.semver = new SemVer(m[2], this.options.loose);
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              return this.value;
            }
          }, {
            key: "test",
            value: function test(version) {
              debug("Comparator.test", version, this.options.loose);

              if (this.semver === ANY || version === ANY) {
                return true;
              }

              if (typeof version === "string") {
                try {
                  version = new SemVer(version, this.options);
                } catch (er) {
                  return false;
                }
              }

              return cmp(version, this.operator, this.semver, this.options);
            }
          }, {
            key: "intersects",
            value: function intersects(comp, options) {
              if (!(comp instanceof Comparator)) {
                throw new TypeError("a Comparator is required");
              }

              if (this.operator === "") {
                if (this.value === "") {
                  return true;
                }

                return new Range(comp.value, options).test(this.value);
              } else if (comp.operator === "") {
                if (comp.value === "") {
                  return true;
                }

                return new Range(this.value, options).test(comp.semver);
              }

              options = parseOptions(options); // Special cases where nothing can possibly be lower

              if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
                return false;
              }

              if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
                return false;
              } // Same direction increasing (> or >=)


              if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
                return true;
              } // Same direction decreasing (< or <=)


              if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
                return true;
              } // same SemVer and both sides are inclusive (<= or >=)


              if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
                return true;
              } // opposite directions less than


              if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
                return true;
              } // opposite directions greater than


              if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
                return true;
              }

              return false;
            }
          }]);

          return Comparator;
        }();

        exports$f = Comparator;
        var parseOptions = dew$2$1();

        var _dew$3 = dew$3$1(),
            re = _dew$3.safeRe,
            t = _dew$3.t;

        var cmp = dew$g();
        var debug = dew$4$1();
        var SemVer = dew$A();
        var Range = dew$1$1();
        return exports$f;
      }

      var exports$e = {},
          _dewExec$d = false;

      function dew$d() {
        if (_dewExec$d) return exports$e;
        _dewExec$d = true;
        var Range = dew$1$1();

        var satisfies = function satisfies(version, range, options) {
          try {
            range = new Range(range, options);
          } catch (er) {
            return false;
          }

          return range.test(version);
        };

        exports$e = satisfies;
        return exports$e;
      }

      var exports$d = {},
          _dewExec$c = false;

      function dew$c() {
        if (_dewExec$c) return exports$d;
        _dewExec$c = true;
        var SemVer = dew$A();
        var Range = dew$1$1();

        var maxSatisfying = function maxSatisfying(versions, range, options) {
          var max = null;
          var maxSV = null;
          var rangeObj = null;

          try {
            rangeObj = new Range(range, options);
          } catch (er) {
            return null;
          }

          versions.forEach(function (v) {
            if (rangeObj.test(v)) {
              // satisfies(v, range, options)
              if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
              }
            }
          });
          return max;
        };

        exports$d = maxSatisfying;
        return exports$d;
      }

      var exports$c = {},
          _dewExec$b = false;

      function dew$b() {
        if (_dewExec$b) return exports$c;
        _dewExec$b = true;
        var SemVer = dew$A();
        var Range = dew$1$1();
        var gt = dew$l();

        var minVersion = function minVersion(range, loose) {
          range = new Range(range, loose);
          var minver = new SemVer("0.0.0");

          if (range.test(minver)) {
            return minver;
          }

          minver = new SemVer("0.0.0-0");

          if (range.test(minver)) {
            return minver;
          }

          minver = null;

          var _loop = function _loop(i) {
            var comparators = range.set[i];
            var setMin = null;
            comparators.forEach(function (comparator) {
              // Clone to avoid manipulating the comparator's semver object.
              var compver = new SemVer(comparator.semver.version);

              switch (comparator.operator) {
                case ">":
                  if (compver.prerelease.length === 0) {
                    compver.patch++;
                  } else {
                    compver.prerelease.push(0);
                  }

                  compver.raw = compver.format();

                /* fallthrough */

                case "":
                case ">=":
                  if (!setMin || gt(compver, setMin)) {
                    setMin = compver;
                  }

                  break;

                case "<":
                case "<=":
                  /* Ignore maximum versions */
                  break;

                /* istanbul ignore next */

                default:
                  throw new Error("Unexpected operation: ".concat(comparator.operator));
              }
            });

            if (setMin && (!minver || gt(minver, setMin))) {
              minver = setMin;
            }
          };

          for (var i = 0; i < range.set.length; ++i) {
            _loop(i);
          }

          if (minver && range.test(minver)) {
            return minver;
          }

          return null;
        };

        exports$c = minVersion;
        return exports$c;
      }

      var exports$b = {},
          _dewExec$a = false;

      function dew$a() {
        if (_dewExec$a) return exports$b;
        _dewExec$a = true;
        var Range = dew$1$1();

        var validRange = function validRange(range, options) {
          try {
            // Return '*' instead of '' so that truthiness works.
            // This will throw if it's invalid anyway
            return new Range(range, options).range || "*";
          } catch (er) {
            return null;
          }
        };

        exports$b = validRange;
        return exports$b;
      }

      var exports$a = {},
          _dewExec$9 = false;

      function dew$9() {
        if (_dewExec$9) return exports$a;
        _dewExec$9 = true;
        var Range = dew$1$1();

        var intersects = function intersects(r1, r2, options) {
          r1 = new Range(r1, options);
          r2 = new Range(r2, options);
          return r1.intersects(r2, options);
        };

        exports$a = intersects;
        return exports$a;
      }

      var exports$9 = {},
          _dewExec$8 = false;

      function dew$8() {
        if (_dewExec$8) return exports$9;
        _dewExec$8 = true;
        var Range = dew$1$1();
        var Comparator = dew$e();
        var ANY = Comparator.ANY;
        var satisfies = dew$d();
        var compare = dew$q(); // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
        // - Every simple range `r1, r2, ...` is a null set, OR
        // - Every simple range `r1, r2, ...` which is not a null set is a subset of
        //   some `R1, R2, ...`
        //
        // Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
        // - If c is only the ANY comparator
        //   - If C is only the ANY comparator, return true
        //   - Else if in prerelease mode, return false
        //   - else replace c with `[>=0.0.0]`
        // - If C is only the ANY comparator
        //   - if in prerelease mode, return true
        //   - else replace C with `[>=0.0.0]`
        // - Let EQ be the set of = comparators in c
        // - If EQ is more than one, return true (null set)
        // - Let GT be the highest > or >= comparator in c
        // - Let LT be the lowest < or <= comparator in c
        // - If GT and LT, and GT.semver > LT.semver, return true (null set)
        // - If any C is a = range, and GT or LT are set, return false
        // - If EQ
        //   - If GT, and EQ does not satisfy GT, return true (null set)
        //   - If LT, and EQ does not satisfy LT, return true (null set)
        //   - If EQ satisfies every C, return true
        //   - Else return false
        // - If GT
        //   - If GT.semver is lower than any > or >= comp in C, return false
        //   - If GT is >=, and GT.semver does not satisfy every C, return false
        //   - If GT.semver has a prerelease, and not in prerelease mode
        //     - If no C has a prerelease and the GT.semver tuple, return false
        // - If LT
        //   - If LT.semver is greater than any < or <= comp in C, return false
        //   - If LT is <=, and LT.semver does not satisfy every C, return false
        //   - If GT.semver has a prerelease, and not in prerelease mode
        //     - If no C has a prerelease and the LT.semver tuple, return false
        // - Else return true

        var subset = function subset(sub, dom) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          if (sub === dom) {
            return true;
          }

          sub = new Range(sub, options);
          dom = new Range(dom, options);
          var sawNonNull = false;

          var _iterator = _createForOfIteratorHelper(sub.set),
              _step;

          try {
            OUTER: for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var simpleSub = _step.value;

              var _iterator2 = _createForOfIteratorHelper(dom.set),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var simpleDom = _step2.value;
                  var isSub = simpleSubset(simpleSub, simpleDom, options);
                  sawNonNull = sawNonNull || isSub !== null;

                  if (isSub) {
                    continue OUTER;
                  }
                } // the null set is a subset of everything, but null simple ranges in
                // a complex range should be ignored.  so if we saw a non-null range,
                // then we know this isn't a subset, but if EVERY simple range was null,
                // then it is a subset.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (sawNonNull) {
                return false;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return true;
        };

        var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
        var minimumVersion = [new Comparator(">=0.0.0")];

        var simpleSubset = function simpleSubset(sub, dom, options) {
          if (sub === dom) {
            return true;
          }

          if (sub.length === 1 && sub[0].semver === ANY) {
            if (dom.length === 1 && dom[0].semver === ANY) {
              return true;
            } else if (options.includePrerelease) {
              sub = minimumVersionWithPreRelease;
            } else {
              sub = minimumVersion;
            }
          }

          if (dom.length === 1 && dom[0].semver === ANY) {
            if (options.includePrerelease) {
              return true;
            } else {
              dom = minimumVersion;
            }
          }

          var eqSet = new Set();
          var gt, lt;

          var _iterator3 = _createForOfIteratorHelper(sub),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var c = _step3.value;

              if (c.operator === ">" || c.operator === ">=") {
                gt = higherGT(gt, c, options);
              } else if (c.operator === "<" || c.operator === "<=") {
                lt = lowerLT(lt, c, options);
              } else {
                eqSet.add(c.semver);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (eqSet.size > 1) {
            return null;
          }

          var gtltComp;

          if (gt && lt) {
            gtltComp = compare(gt.semver, lt.semver, options);

            if (gtltComp > 0) {
              return null;
            } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
              return null;
            }
          } // will iterate one or zero times


          var _iterator4 = _createForOfIteratorHelper(eqSet),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var eq = _step4.value;

              if (gt && !satisfies(eq, String(gt), options)) {
                return null;
              }

              if (lt && !satisfies(eq, String(lt), options)) {
                return null;
              }

              var _iterator6 = _createForOfIteratorHelper(dom),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _c = _step6.value;

                  if (!satisfies(eq, String(_c), options)) {
                    return false;
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              return true;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          var higher, lower;
          var hasDomLT, hasDomGT; // if the subset has a prerelease, we need a comparator in the superset
          // with the same tuple and a prerelease, or it's not a subset

          var needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
          var needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false; // exception: <1.2.3-0 is the same as <1.2.3

          if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
            needDomLTPre = false;
          }

          var _iterator5 = _createForOfIteratorHelper(dom),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _c2 = _step5.value;
              hasDomGT = hasDomGT || _c2.operator === ">" || _c2.operator === ">=";
              hasDomLT = hasDomLT || _c2.operator === "<" || _c2.operator === "<=";

              if (gt) {
                if (needDomGTPre) {
                  if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomGTPre.major && _c2.semver.minor === needDomGTPre.minor && _c2.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                  }
                }

                if (_c2.operator === ">" || _c2.operator === ">=") {
                  higher = higherGT(gt, _c2, options);

                  if (higher === _c2 && higher !== gt) {
                    return false;
                  }
                } else if (gt.operator === ">=" && !satisfies(gt.semver, String(_c2), options)) {
                  return false;
                }
              }

              if (lt) {
                if (needDomLTPre) {
                  if (_c2.semver.prerelease && _c2.semver.prerelease.length && _c2.semver.major === needDomLTPre.major && _c2.semver.minor === needDomLTPre.minor && _c2.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                  }
                }

                if (_c2.operator === "<" || _c2.operator === "<=") {
                  lower = lowerLT(lt, _c2, options);

                  if (lower === _c2 && lower !== lt) {
                    return false;
                  }
                } else if (lt.operator === "<=" && !satisfies(lt.semver, String(_c2), options)) {
                  return false;
                }
              }

              if (!_c2.operator && (lt || gt) && gtltComp !== 0) {
                return false;
              }
            } // if there was a < or >, and nothing in the dom, then must be false
            // UNLESS it was limited by another range in the other direction.
            // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0

          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (gt && hasDomLT && !lt && gtltComp !== 0) {
            return false;
          }

          if (lt && hasDomGT && !gt && gtltComp !== 0) {
            return false;
          } // we needed a prerelease range in a specific tuple, but didn't get one
          // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
          // because it includes prereleases in the 1.2.3 tuple


          if (needDomGTPre || needDomLTPre) {
            return false;
          }

          return true;
        }; // >=1.2.3 is lower than >1.2.3


        var higherGT = function higherGT(a, b, options) {
          if (!a) {
            return b;
          }

          var comp = compare(a.semver, b.semver, options);
          return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
        }; // <=1.2.3 is higher than <1.2.3


        var lowerLT = function lowerLT(a, b, options) {
          if (!a) {
            return b;
          }

          var comp = compare(a.semver, b.semver, options);
          return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
        };

        exports$9 = subset;
        return exports$9;
      }

      var exports$7 = {},
          _dewExec$7 = false;

      function dew$7() {
        if (_dewExec$7) return exports$7;
        _dewExec$7 = true;
        var compare = dew$q();

        var compareLoose = function compareLoose(a, b) {
          return compare(a, b, true);
        };

        exports$7 = compareLoose;
        return exports$7;
      }

      var exports$6 = {},
          _dewExec$6 = false;

      function dew$6() {
        if (_dewExec$6) return exports$6;
        _dewExec$6 = true;
        var Range = dew$1$1(); // Mostly just for testing and legacy API reasons

        var toComparators = function toComparators(range, options) {
          return new Range(range, options).set.map(function (comp) {
            return comp.map(function (c) {
              return c.value;
            }).join(" ").trim().split(" ");
          });
        };

        exports$6 = toComparators;
        return exports$6;
      }

      var exports$5 = {},
          _dewExec$5 = false;

      function dew$5() {
        if (_dewExec$5) return exports$5;
        _dewExec$5 = true;
        var SemVer = dew$A();
        var Range = dew$1$1();

        var minSatisfying = function minSatisfying(versions, range, options) {
          var min = null;
          var minSV = null;
          var rangeObj = null;

          try {
            rangeObj = new Range(range, options);
          } catch (er) {
            return null;
          }

          versions.forEach(function (v) {
            if (rangeObj.test(v)) {
              // satisfies(v, range, options)
              if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
              }
            }
          });
          return min;
        };

        exports$5 = minSatisfying;
        return exports$5;
      }

      var exports$4 = {},
          _dewExec$4 = false;

      function dew$4() {
        if (_dewExec$4) return exports$4;
        _dewExec$4 = true;
        var SemVer = dew$A();
        var Comparator = dew$e();
        var ANY = Comparator.ANY;
        var Range = dew$1$1();
        var satisfies = dew$d();
        var gt = dew$l();
        var lt = dew$k();
        var lte = dew$h();
        var gte = dew$i();

        var outside = function outside(version, range, hilo, options) {
          version = new SemVer(version, options);
          range = new Range(range, options);
          var gtfn, ltefn, ltfn, comp, ecomp;

          switch (hilo) {
            case ">":
              gtfn = gt;
              ltefn = lte;
              ltfn = lt;
              comp = ">";
              ecomp = ">=";
              break;

            case "<":
              gtfn = lt;
              ltefn = gte;
              ltfn = gt;
              comp = "<";
              ecomp = "<=";
              break;

            default:
              throw new TypeError("Must provide a hilo val of \"<\" or \">\"");
          } // If it satisfies the range it is not outside


          if (satisfies(version, range, options)) {
            return false;
          } // From now on, variable terms are as if we're in "gtr" mode.
          // but note that everything is flipped for the "ltr" function.


          var _loop = function _loop(i) {
            var comparators = range.set[i];
            var high = null;
            var low = null;
            comparators.forEach(function (comparator) {
              if (comparator.semver === ANY) {
                comparator = new Comparator(">=0.0.0");
              }

              high = high || comparator;
              low = low || comparator;

              if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
              } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
              }
            }); // If the edge version comparator has a operator then our version
            // isn't outside it

            if (high.operator === comp || high.operator === ecomp) {
              return {
                v: false
              };
            } // If the lowest version comparator has an operator and our version
            // is less than it then it isn't higher than the range


            if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
              return {
                v: false
              };
            } else if (low.operator === ecomp && ltfn(version, low.semver)) {
              return {
                v: false
              };
            }
          };

          for (var i = 0; i < range.set.length; ++i) {
            var _ret = _loop(i);

            if (_typeof(_ret) === "object") return _ret.v;
          }

          return true;
        };

        exports$4 = outside;
        return exports$4;
      }

      var exports$3 = {},
          _dewExec$3 = false;

      function dew$3() {
        if (_dewExec$3) return exports$3;
        _dewExec$3 = true; // Determine if version is greater than all the versions possible in the range.

        var outside = dew$4();

        var gtr = function gtr(version, range, options) {
          return outside(version, range, ">", options);
        };

        exports$3 = gtr;
        return exports$3;
      }

      var exports$2 = {},
          _dewExec$2 = false;

      function dew$2() {
        if (_dewExec$2) return exports$2;
        _dewExec$2 = true;
        var outside = dew$4(); // Determine if version is less than all the versions possible in the range

        var ltr = function ltr(version, range, options) {
          return outside(version, range, "<", options);
        };

        exports$2 = ltr;
        return exports$2;
      }

      var exports$1$1 = {},
          _dewExec$1 = false;

      function dew$1() {
        if (_dewExec$1) return exports$1$1;
        _dewExec$1 = true; // given a set of versions and a range, create a "simplified" range
        // that includes the same versions that the original range does
        // If the original range is shorter than the simplified one, return that.

        var satisfies = dew$d();
        var compare = dew$q();

        exports$1$1 = function exports$1(versions, range, options) {
          var set = [];
          var first = null;
          var prev = null;
          var v = versions.sort(function (a, b) {
            return compare(a, b, options);
          });

          var _iterator = _createForOfIteratorHelper(v),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var version = _step.value;
              var included = satisfies(version, range, options);

              if (included) {
                prev = version;

                if (!first) {
                  first = version;
                }
              } else {
                if (prev) {
                  set.push([first, prev]);
                }

                prev = null;
                first = null;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          if (first) {
            set.push([first, null]);
          }

          var ranges = [];

          for (var _i = 0, _set = set; _i < _set.length; _i++) {
            var _set$_i = _slicedToArray(_set[_i], 2),
                min = _set$_i[0],
                max = _set$_i[1];

            if (min === max) {
              ranges.push(min);
            } else if (!max && min === v[0]) {
              ranges.push("*");
            } else if (!max) {
              ranges.push(">=".concat(min));
            } else if (min === v[0]) {
              ranges.push("<=".concat(max));
            } else {
              ranges.push("".concat(min, " - ").concat(max));
            }
          }

          var simplified = ranges.join(" || ");
          var original = typeof range.raw === "string" ? range.raw : String(range);
          return simplified.length < original.length ? simplified : range;
        };

        return exports$1$1;
      }

      var exports$8 = {},
          _dewExec = false;

      function dew() {
        if (_dewExec) return exports$8;
        _dewExec = true; // just pre-load all the stuff that index.js lazily exports

        var internalRe = dew$3$1();
        var constants = dew$5$1();
        var SemVer = dew$A();
        var identifiers = dew$1$3();
        var parse = dew$z();
        var valid = dew$y();
        var clean = dew$x();
        var inc = dew$w();
        var diff = dew$v();
        var major = dew$u();
        var minor = dew$t();
        var patch = dew$s();
        var prerelease = dew$r();
        var compare = dew$q();
        var rcompare = dew$p();
        var compareLoose = dew$7();
        var compareBuild = dew$o();
        var sort = dew$n();
        var rsort = dew$m();
        var gt = dew$l();
        var lt = dew$k();
        var eq = dew$j();
        var neq = dew$1$2();
        var gte = dew$i();
        var lte = dew$h();
        var cmp = dew$g();
        var coerce = dew$f();
        var Comparator = dew$e();
        var Range = dew$1$1();
        var satisfies = dew$d();
        var toComparators = dew$6();
        var maxSatisfying = dew$c();
        var minSatisfying = dew$5();
        var minVersion = dew$b();
        var validRange = dew$a();
        var outside = dew$4();
        var gtr = dew$3();
        var ltr = dew$2();
        var intersects = dew$9();
        var simplifyRange = dew$1();
        var subset = dew$8();
        exports$8 = {
          parse: parse,
          valid: valid,
          clean: clean,
          inc: inc,
          diff: diff,
          major: major,
          minor: minor,
          patch: patch,
          prerelease: prerelease,
          compare: compare,
          rcompare: rcompare,
          compareLoose: compareLoose,
          compareBuild: compareBuild,
          sort: sort,
          rsort: rsort,
          gt: gt,
          lt: lt,
          eq: eq,
          neq: neq,
          gte: gte,
          lte: lte,
          cmp: cmp,
          coerce: coerce,
          Comparator: Comparator,
          Range: Range,
          satisfies: satisfies,
          toComparators: toComparators,
          maxSatisfying: maxSatisfying,
          minSatisfying: minSatisfying,
          minVersion: minVersion,
          validRange: validRange,
          outside: outside,
          gtr: gtr,
          ltr: ltr,
          intersects: intersects,
          simplifyRange: simplifyRange,
          subset: subset,
          SemVer: SemVer,
          re: internalRe.re,
          src: internalRe.src,
          tokens: internalRe.t,
          SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
          RELEASE_TYPES: constants.RELEASE_TYPES,
          compareIdentifiers: identifiers.compareIdentifiers,
          rcompareIdentifiers: identifiers.rcompareIdentifiers
        };
        return exports$8;
      }

      const exports$1 = dew();
      exports$1['parse']; exports$1['valid']; exports$1['clean']; exports$1['inc']; exports$1['diff']; exports$1['major']; exports$1['minor']; exports$1['patch']; exports$1['prerelease']; exports$1['compare']; exports$1['rcompare']; exports$1['compareLoose']; exports$1['compareBuild']; exports$1['sort']; exports$1['rsort']; exports$1['gt']; exports$1['lt']; exports$1['eq']; exports$1['neq']; exports$1['gte']; exports$1['lte']; exports$1['cmp']; exports$1['coerce']; exports$1['Comparator']; exports$1['Range']; exports$1['satisfies']; exports$1['toComparators']; exports$1['maxSatisfying']; exports$1['minSatisfying']; exports$1['minVersion']; exports$1['validRange']; exports$1['outside']; exports$1['gtr']; exports$1['ltr']; exports$1['intersects']; exports$1['simplifyRange']; exports$1['subset']; exports$1['SemVer']; exports$1['re'];

      var __varRecorder__$3 = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/classTree.js");
      __varRecorder__$3.TreeData = TreeData;
      __varRecorder__$3.arr = arr;
      __varRecorder__$3.withSuperclasses = withSuperclasses;
      __varRecorder__$3.lexicalClassMembers = lexicalClassMembers;
      __varRecorder__$3.Icon = Icon;

      var ClassTreeData = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/classTree.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ClassTreeData") && typeof __lively_classholder__.ClassTreeData === "function" ? __lively_classholder__.ClassTreeData : __lively_classholder__.ClassTreeData = function ClassTreeData(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function ClassTreeData_initialize_(target) {
            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, {
              target: target,
              name: "root",
              isRoot: true,
              isCollapsed: false
            });
            return _this;
          }
        }, {
          key: "display",
          value: function ClassTreeData_display_(node) {
            if (!node) return "empty";

            if (node.isRoot) {
              return node.target.name || node.target.id || "root object";
            }

            if (node.isClass) {
              return node.target;
            }

            return node.name || "no name";
          }
        }, {
          key: "isLeaf",
          value: function ClassTreeData_isLeaf_(node) {
            if (!node) return true;
            return !node.isRoot && !node.isClass;
          }
        }, {
          key: "isCollapsed",
          value: function ClassTreeData_isCollapsed_(node) {
            return !node || node.isCollapsed;
          }
        }, {
          key: "collapse",
          value: function ClassTreeData_collapse_(node, bool) {
            node && (node.isCollapsed = bool);
          }
        }, {
          key: "getChildren",
          value: function ClassTreeData_getChildren_(node) {
            if (!node) return [];

            if (node.isRoot) {
              if (node.children) return node.children;

              var classes = __varRecorder__$3.arr.without(__varRecorder__$3.withSuperclasses(node.target), Object).reverse();

              return node.children = classes.map(function (klass) {
                return {
                  isClass: true,
                  klass: klass,
                  target: klass[Symbol["for"]("__LivelyClassName__")],
                  isCollapsed: true
                };
              });
            }

            if (node.isClass) {
              try {
                return node.children || (node.children = __varRecorder__$3.lexicalClassMembers(node.klass).map(function (ea) {
                  var _static = ea["static"],
                      name = ea.name,
                      kind = ea.kind,
                      overridden = ea.overridden;
                  var prefix = "";
                  if (_static) prefix += "static ";
                  if (kind === "get") prefix += "get ";
                  if (kind === "set") prefix += "set ";
                  return {
                    name: [overridden ? [].concat(_toConsumableArray(__varRecorder__$3.Icon.textAttribute("arrow-circle-up")), [" ", {
                      opacity: 0.5
                    }]) : [], prefix + name, {}],
                    target: ea
                  };
                }));
              } catch (e) {
                $world.showError(e);
                return node.children = [];
              }
            }

            return [];
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ClassTreeData";
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/classTree.js";
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
          start: 971,
          end: 2818
        });
      }(__varRecorder__$3.TreeData);
      __varRecorder__$3["default"] = ClassTreeData;

      var __varRecorder__$2 = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/context.js");
      __varRecorder__$2.semver = exports$1;
      __varRecorder__$2.RuntimeSourceDescriptor = RuntimeSourceDescriptor;
      __varRecorder__$2.withSuperclasses = withSuperclasses;
      __varRecorder__$2.isClass = isClass;
      __varRecorder__$2.isObjectClass = isObjectClass;
      __varRecorder__$2.interactivelyForkPackage = interactivelyForkPackage;
      __varRecorder__$2.addScript = addScript;
      __varRecorder__$2.string = string;
      __varRecorder__$2.num = num;
      __varRecorder__$2.promise = promise;
      __varRecorder__$2.Path = Path;
      __varRecorder__$2.obj = obj;
      __varRecorder__$2.subscribe = subscribe;
      __varRecorder__$2.unsubscribe = unsubscribe;
      __varRecorder__$2.L2LClient = L2LClient;
      __varRecorder__$2.l2lInterfaceFor = l2lInterfaceFor;
      __varRecorder__$2.localInterface = localInterface;
      __varRecorder__$2.deserialize = deserialize;
      __varRecorder__$2.getClassName = getClassName;
      __varRecorder__$2.stringifyFunctionWithoutToplevelRecorder = stringifyFunctionWithoutToplevelRecorder;
      __varRecorder__$2.modules = modules;
      var destructured_1 = __varRecorder__$2.modules;
      __varRecorder__$2.module = destructured_1.module;
      __varRecorder__$2.ClassTreeData = ClassTreeData;
      __varRecorder__$2.chooseUnusedImports = chooseUnusedImports;

      var ObjectEditorContext = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/context.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ObjectEditorContext") && typeof __lively_classholder__.ObjectEditorContext === "function" ? __lively_classholder__.ObjectEditorContext : __lively_classholder__.ObjectEditorContext = function ObjectEditorContext(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isRemote",
          get: function get() {
            return !!this.remoteContextId;
          }
        }, {
          key: "selectedModule",
          get: function get() {
            return __varRecorder__$2.module(this.evalEnvironment.targetModule);
          }
        }, {
          key: "isRemoteHandle",
          value: function ObjectEditorContext_isRemoteHandle_(id) {
            return __varRecorder__$2.obj.isString(id) && id.startsWith("lively://lively.next-object-editor/");
          }
        }, {
          key: "selectTarget",
          value: function () {
            var _ObjectEditorContext_selectTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(target, editor) {
              var _this = this;

              var evalEnvironment,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      evalEnvironment = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;

                      if (!this.onModuleChangeHandler && this.interfaceToEditor) {
                        this.onModuleChangeHandler = /*#__PURE__*/function () {
                          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(evt) {
                            var newClassSource;
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return _this.onModuleChanged(evt);

                                  case 2:
                                    newClassSource = _context.sent;

                                    if (newClassSource) {
                                      _this.withEditorDo(function (ed) {
                                        return ed.reactToModuleChange(newClassSource);
                                      }, {
                                        newClassSource: newClassSource
                                      });
                                    }

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x3) {
                            return _ref.apply(this, arguments);
                          };
                        }();

                        __varRecorder__$2.subscribe("lively.modules/modulechanged", this.onModuleChangeHandler);

                        __varRecorder__$2.subscribe("lively.modules/moduleloaded", this.onModuleChangeHandler);
                      }

                      if (!(evalEnvironment && this.isRemoteHandle(target))) {
                        _context2.next = 5;
                        break;
                      }

                      this.connectToContext(target, editor, evalEnvironment);
                      return _context2.abrupt("return", this);

                    case 5:
                      if (!(evalEnvironment && typeof target === "string")) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 8;
                      return this.selectRemoteTarget({
                        code: target,
                        editor: editor,
                        evalEnvironment: evalEnvironment
                      });

                    case 8:
                      return _context2.abrupt("return", this);

                    case 9:
                      _context2.next = 11;
                      return this.selectLocalTarget(target, editor);

                    case 11:
                      return _context2.abrupt("return", this);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function ObjectEditorContext_selectTarget_(_x, _x2) {
              return _ObjectEditorContext_selectTarget_.apply(this, arguments);
            }

            return ObjectEditorContext_selectTarget_;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _ObjectEditorContext_refresh_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(expandAll) {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.classTreeData = new __varRecorder__$2.ClassTreeData(this.target.constructor);

                      if (!expandAll) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 4;
                      return this.classTreeData.uncollapseAll(function (node) {
                        return _this2.classTreeData.getChildren(node) && node.isRoot;
                      });

                    case 4:
                      this.evalEnvironment = {
                        context: this.target,
                        systemInterface: __varRecorder__$2.localInterface,
                        targetModule: this.sourceDescriptorFor(this.target.constructor).module.id,
                        format: "esm"
                      };

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function ObjectEditorContext_refresh_(_x4) {
              return _ObjectEditorContext_refresh_.apply(this, arguments);
            }

            return ObjectEditorContext_refresh_;
          }()
        }, {
          key: "connectToContext",
          value: function () {
            var _ObjectEditorContext_connectToContext_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, editor, evalEnvironment) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.remoteContextId = this.target = id;
                      this.evalEnvironment = {
                        context: "System.get('@lively-env').objectEditContexts[\"".concat(this.remoteContextId, "\"].target"),
                        systemInterface: evalEnvironment.systemInterface,
                        format: "esm"
                      };
                      _context4.next = 4;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedModule.id;
                      });

                    case 4:
                      this.evalEnvironment.targetModule = _context4.sent;

                      if (editor) {
                        Object.assign(editor.editorPlugin.evalEnvironment, this.evalEnvironment);
                      }

                      _context4.next = 8;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClassName;
                      });

                    case 8:
                      this.selectedClassName = _context4.sent;

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function ObjectEditorContext_connectToContext_(_x5, _x6, _x7) {
              return _ObjectEditorContext_connectToContext_.apply(this, arguments);
            }

            return ObjectEditorContext_connectToContext_;
          }()
        }, {
          key: "selectLocalTarget",
          value: function () {
            var _ObjectEditorContext_selectLocalTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(target) {
              var editor,
                  _args5 = arguments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      editor = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
                      this.target = target;
                      this.selectedClass = null;
                      this.selectedMethod = null;
                      _context5.next = 6;
                      return this.refresh(!editor);

                    case 6:
                      if (editor) {
                        Object.assign(editor.editorPlugin.evalEnvironment, this.evalEnvironment);
                      }

                      _context5.next = 9;
                      return this.selectClass(__varRecorder__$2.getClassName(target));

                    case 9:
                      return _context5.abrupt("return", this);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function ObjectEditorContext_selectLocalTarget_(_x8) {
              return _ObjectEditorContext_selectLocalTarget_.apply(this, arguments);
            }

            return ObjectEditorContext_selectLocalTarget_;
          }()
        }, {
          key: "selectRemoteTarget",
          value: function () {
            var _ObjectEditorContext_selectRemoteTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
              var code, evalEnvironment, editor, peerId, res;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      code = _ref2.code, evalEnvironment = _ref2.evalEnvironment, editor = _ref2.editor;
                      peerId = __varRecorder__$2.L2LClient["default"]().id;
                      _context6.next = 4;
                      return evalEnvironment.systemInterface.runEval("\n       const { default: ObjectEditorContext} = await System.import(\"lively.ide/js/objecteditor/context.js\");\n       const t = (() => ".concat(code, ")();\n       const ctx = await ObjectEditorContext.for(t);\n       const id = await ctx.connectToEditor(\"").concat(peerId, "\", \"").concat(editor.id, "\");\n       const targetModule = ctx.selectedModule.id;\n       const res =  {targetModule, id};\n       res;\n    "), evalEnvironment);

                    case 4:
                      res = _context6.sent;

                      if (!res.isError) {
                        _context6.next = 7;
                        break;
                      }

                      throw Error(res);

                    case 7:
                      this.remoteContextId = this.target = res.value.id;
                      this.evalEnvironment = {
                        context: "System.get('@lively-env').objectEditContexts[\"".concat(this.remoteContextId, "\"].target"),
                        systemInterface: evalEnvironment.systemInterface,
                        targetModule: res.value.targetModule,
                        format: "esm"
                      };
                      _context6.next = 11;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClassName;
                      });

                    case 11:
                      this.selectedClassName = _context6.sent;

                      if (editor) {
                        Object.assign(editor.editorPlugin.evalEnvironment, this.evalEnvironment);
                      }

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function ObjectEditorContext_selectRemoteTarget_(_x9) {
              return _ObjectEditorContext_selectRemoteTarget_.apply(this, arguments);
            }

            return ObjectEditorContext_selectRemoteTarget_;
          }()
        }, {
          key: "dispose",
          value: function ObjectEditorContext_dispose_() {
            var _this3 = this;

            this.withContextDo(function () {
              if (!System.get("@system-env").node) return;
              delete System.get("@lively-env").objectEditContexts[_this3.id];

              __varRecorder__$2.unsubscribe("lively.modules/modulechanged", _this3.onModuleChangeHandler);

              __varRecorder__$2.unsubscribe("lively.modules/moduleloaded", _this3.onModuleChangeHandler);
            });
          }
        }, {
          key: "connectToEditor",
          value: function ObjectEditorContext_connectToEditor_(peerId, editorId) {
            this.id = "lively://lively.next-object-editor/".concat(editorId);
            if (!System.get("@lively-env").objectEditContexts) System.get("@lively-env").objectEditContexts = {};
            this.interfaceToEditor = __varRecorder__$2.l2lInterfaceFor(peerId, __varRecorder__$2.L2LClient["default"]());
            this.editorId = editorId;
            System.get("@lively-env").objectEditContexts[this.id] = this;
            return this.id;
          }
        }, {
          key: "stringifySource",
          value: function ObjectEditorContext_stringifySource_(source) {
            var varMapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var varDeclarations = __varRecorder__$2.obj.keys(varMapping).map(function (k) {
              return "const ".concat(k, " = ").concat(JSON.stringify(varMapping[k]), ";");
            }).join("\n");

            source = source === "string" ? source : __varRecorder__$2.stringifyFunctionWithoutToplevelRecorder(source);
            return "(() => {" + varDeclarations + "\n return (" + source + ")(this) })()";
          }
        }, {
          key: "withEditorDo",
          value: function () {
            var _ObjectEditorContext_withEditorDo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(source, varMapping) {
              var res;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      source = this.wrapSource(this.stringifySource(source, varMapping));
                      _context7.next = 3;
                      return this.interfaceToEditor.runEval(source, {
                        context: "$world.getMorphWithId(\"".concat(this.editorId, "\")"),
                        targetModule: "lively.ide/js/objecteditor/index.js",
                        ackTimeout: 30 * 1000
                      });

                    case 3:
                      res = _context7.sent;

                      if (!res.isError) {
                        _context7.next = 6;
                        break;
                      }

                      throw Error(res.value);

                    case 6:
                      res = res.value;

                      if (!(!__varRecorder__$2.obj.isArray(res) && __varRecorder__$2.obj.isObject(res))) {
                        _context7.next = 9;
                        break;
                      }

                      return _context7.abrupt("return", __varRecorder__$2.deserialize(res));

                    case 9:
                      return _context7.abrupt("return", res);

                    case 10:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function ObjectEditorContext_withEditorDo_(_x10, _x11) {
              return _ObjectEditorContext_withEditorDo_.apply(this, arguments);
            }

            return ObjectEditorContext_withEditorDo_;
          }()
        }, {
          key: "wrapSource",
          value: function ObjectEditorContext_wrapSource_(source) {
            return "\n          let { serialize } = await System.import('lively.serializer2');\n          let __eval_res__ = await ".concat(source, ";\n          if (!obj.isArray(__eval_res__) && obj.isObject(__eval_res__))\n            __eval_res__ = serialize(__eval_res__);\n          __eval_res__;\n        ");
          }
        }, {
          key: "withContextDo",
          value: function () {
            var _ObjectEditorContext_withContextDo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(source) {
              var _this4 = this;

              var varMapping,
                  evalStr,
                  context,
                  res,
                  _args8 = arguments;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      varMapping = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};

                      if (!(!this.remoteContextId && __varRecorder__$2.obj.isFunction(source))) {
                        _context8.next = 5;
                        break;
                      }

                      _context8.next = 4;
                      return source(this);

                    case 4:
                      return _context8.abrupt("return", _context8.sent);

                    case 5:
                      if (!this._evalInProgress) {
                        _context8.next = 8;
                        break;
                      }

                      _context8.next = 8;
                      return __varRecorder__$2.promise.waitFor(5000, function () {
                        return !_this4._evalInProgress;
                      });

                    case 8:
                      this._evalInProgress = true;
                      source = this.stringifySource(source, varMapping);
                      evalStr = this.wrapSource(source);
                      context = this.remoteContextId ? "System.get('@lively-env').objectEditContexts[\"".concat(this.remoteContextId, "\"]") : this;
                      _context8.next = 14;
                      return this.evalEnvironment.systemInterface.runEval(evalStr, {
                        targetModule: "lively.ide/js/objecteditor/context.js",
                        ackTimeout: 30 * 1000,
                        context: context
                      });

                    case 14:
                      res = _context8.sent;

                      if (!res.isError) {
                        _context8.next = 17;
                        break;
                      }

                      throw Error(res.value);

                    case 17:
                      res = res.value;
                      this._evalInProgress = false;

                      if (!(!__varRecorder__$2.obj.isArray(res) && __varRecorder__$2.obj.isObject(res))) {
                        _context8.next = 21;
                        break;
                      }

                      return _context8.abrupt("return", __varRecorder__$2.deserialize(res));

                    case 21:
                      return _context8.abrupt("return", res);

                    case 22:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function ObjectEditorContext_withContextDo_(_x12) {
              return _ObjectEditorContext_withContextDo_.apply(this, arguments);
            }

            return ObjectEditorContext_withContextDo_;
          }()
        }, {
          key: "sourceDescriptorFor",
          value: function ObjectEditorContext_sourceDescriptorFor_(klass) {
            return __varRecorder__$2.RuntimeSourceDescriptor["for"](klass);
          }
        }, {
          key: "classChainOfTarget",
          value: function ObjectEditorContext_classChainOfTarget_() {
            return __varRecorder__$2.withSuperclasses(this.target.constructor);
          }
        }, {
          key: "addModuleChangeWarning",
          value: function () {
            var _ObjectEditorContext_addModuleChangeWarning_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var newClassSource;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      if (!this.isSaving) {
                        _context9.next = 2;
                        break;
                      }

                      return _context9.abrupt("return");

                    case 2:
                      _context9.next = 4;
                      return this.sourceDescriptorFor(this.selectedClass).source;

                    case 4:
                      newClassSource = _context9.sent;
                      this.moduleChangeWarning = this.selectedModule.id;
                      this.sourceHash = __varRecorder__$2.string.hashCode(newClassSource);

                    case 7:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function ObjectEditorContext_addModuleChangeWarning_() {
              return _ObjectEditorContext_addModuleChangeWarning_.apply(this, arguments);
            }

            return ObjectEditorContext_addModuleChangeWarning_;
          }()
        }, {
          key: "onModuleChanged",
          value: function () {
            var _ObjectEditorContext_onModuleChanged_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(evt) {
              var m, selectedModule, selectedClass;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!this.isSaving) {
                        _context10.next = 2;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 2:
                      m = __varRecorder__$2.module(evt.module);
                      selectedModule = this.selectedModule, selectedClass = this.selectedClass;

                      if (!(!selectedModule || selectedModule.id !== m.id)) {
                        _context10.next = 6;
                        break;
                      }

                      return _context10.abrupt("return");

                    case 6:
                      _context10.next = 8;
                      return this.sourceDescriptorFor(selectedClass).source;

                    case 8:
                      return _context10.abrupt("return", _context10.sent);

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function ObjectEditorContext_onModuleChanged_(_x13) {
              return _ObjectEditorContext_onModuleChanged_.apply(this, arguments);
            }

            return ObjectEditorContext_onModuleChanged_;
          }()
        }, {
          key: "onModuleLoaded",
          value: function ObjectEditorContext_onModuleLoaded_(evt) {
            this.onModuleChanged(evt);
          }
        }, {
          key: "getTitle",
          value: function () {
            var _ObjectEditorContext_getTitle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var title, selectedClass, selectedMethod, selectedModule, p;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      title = "";
                      selectedClass = this.selectedClass, selectedMethod = this.selectedMethod, selectedModule = this.selectedModule;

                      if (selectedClass) {
                        title += " - ".concat(selectedClass[Symbol["for"]("__LivelyClassName__")]);

                        if (__varRecorder__$2.isObjectClass(selectedClass)) {
                          p = selectedClass[Symbol["for"]("lively-module-meta")]["package"];
                          if (p && p.version) title += "@" + p.version;
                        }

                        if (selectedMethod) title += ">>".concat(selectedMethod.name);
                      } else if (selectedModule) {
                        title += " - ".concat(selectedModule.shortName());
                      }

                      return _context11.abrupt("return", title);

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function ObjectEditorContext_getTitle_() {
              return _ObjectEditorContext_getTitle_.apply(this, arguments);
            }

            return ObjectEditorContext_getTitle_;
          }()
        }, {
          key: "selectClass",
          value: function () {
            var _ObjectEditorContext_selectClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(className) {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.withContextDo(function () {
                        var klass = _this5.classChainOfTarget().find(function (ea) {
                          return ea[Symbol["for"]("__LivelyClassName__")] === className;
                        });

                        _this5.selectedMethod = null;
                        _this5.selectedClass = klass;
                        return klass[Symbol["for"]("__LivelyClassName__")];
                      }, {
                        className: className
                      });

                    case 2:
                      this.selectedClassName = _context12.sent;

                    case 3:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function ObjectEditorContext_selectClass_(_x14) {
              return _ObjectEditorContext_selectClass_.apply(this, arguments);
            }

            return ObjectEditorContext_selectClass_;
          }()
        }, {
          key: "updatePackageConfig",
          value: function ObjectEditorContext_updatePackageConfig_(sourceChanged) {
            if (__varRecorder__$2.isObjectClass(this.selectedClass) && sourceChanged) {
              var system = this.evalEnvironment.systemInterface;
              var descr = this.sourceDescriptorFor(this.selectedClass);
              var pkg = descr.module["package"]();
              var packageConfig = Object.assign({}, pkg.config, {
                version: __varRecorder__$2.semver.inc(pkg.version, "prerelease", true)
              });
              var mod = system.getModule(pkg.url + "/package.json");
              system.packageConfChange(JSON.stringify(packageConfig, null, 2), mod.id);
            }
          }
        }, {
          key: "forkPackage",
          value: function () {
            var _ObjectEditorContext_forkPackage_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(forkedName) {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return __varRecorder__$2.interactivelyForkPackage(this.target, forkedName);

                    case 2:
                      return _context13.abrupt("return", _context13.sent);

                    case 3:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function ObjectEditorContext_forkPackage_(_x15) {
              return _ObjectEditorContext_forkPackage_.apply(this, arguments);
            }

            return ObjectEditorContext_forkPackage_;
          }()
        }, {
          key: "addNewMethod",
          value: function () {
            var _ObjectEditorContext_addNewMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return __varRecorder__$2.addScript(this.target, "function() {}", "newMethod");

                    case 2:
                      return _context14.abrupt("return", _context14.sent);

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function ObjectEditorContext_addNewMethod_() {
              return _ObjectEditorContext_addNewMethod_.apply(this, arguments);
            }

            return ObjectEditorContext_addNewMethod_;
          }()
        }, {
          key: "selectMethod",
          value: function () {
            var _ObjectEditorContext_selectMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(className, methodSpec) {
              var _this6 = this;

              var methodNode;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.withContextDo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                        var klass, methodNode;
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                klass = _this6.classChainOfTarget().find(function (ea) {
                                  return ea[Symbol["for"]("__LivelyClassName__")] === className;
                                });

                                if (klass && !methodSpec && __varRecorder__$2.isClass(klass.owner)) {
                                  methodSpec = klass;
                                  klass = klass.owner;
                                }

                                _this6.selectedMethod = methodSpec;
                                _context15.next = 5;
                                return _this6._sourceDescriptor_of_class_findMethodNode(klass, methodSpec.name, methodSpec.kind, methodSpec["static"]);

                              case 5:
                                methodNode = _context15.sent;
                                return _context15.abrupt("return", methodNode);

                              case 7:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15);
                      })), {
                        className: className,
                        methodSpec: methodSpec
                      });

                    case 2:
                      methodNode = _context16.sent;
                      if (methodNode) this.selectedMethodName = methodSpec.name;
                      return _context16.abrupt("return", methodNode);

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function ObjectEditorContext_selectMethod_(_x16, _x17) {
              return _ObjectEditorContext_selectMethod_.apply(this, arguments);
            }

            return ObjectEditorContext_selectMethod_;
          }()
        }, {
          key: "removeUnusedImports",
          value: function () {
            var _ObjectEditorContext_removeUnusedImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(toRemove) {
              var _m, _origSource, _toRemove;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.prev = 0;
                      _m = this.selectedModule;
                      _context17.next = 4;
                      return _m.source();

                    case 4:
                      _origSource = _context17.sent;
                      _context17.next = 7;
                      return __varRecorder__$2.chooseUnusedImports(_origSource);

                    case 7:
                      _toRemove = _context17.sent;

                      if (!(!_toRemove || !_toRemove.changes || !_toRemove.changes.length)) {
                        _context17.next = 10;
                        break;
                      }

                      return _context17.abrupt("return", {
                        statusMessage: "Nothing to remove"
                      });

                    case 10:
                      _context17.next = 12;
                      return _m.removeImports(_toRemove.removedImports);

                    case 12:
                      return _context17.abrupt("return", {
                        statusMessage: "Imports removed"
                      });

                    case 15:
                      _context17.prev = 15;
                      _context17.t0 = _context17["catch"](0);
                      _context17.t1 = origSource;

                      if (!_context17.t1) {
                        _context17.next = 21;
                        break;
                      }

                      _context17.next = 21;
                      return m.changeSource(origSource);

                    case 21:
                      return _context17.abrupt("return", {
                        statusMessage: _context17.t0.toString()
                      });

                    case 22:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[0, 15]]);
            }));

            function ObjectEditorContext_removeUnusedImports_(_x18) {
              return _ObjectEditorContext_removeUnusedImports_.apply(this, arguments);
            }

            return ObjectEditorContext_removeUnusedImports_;
          }()
        }, {
          key: "getMethodAtCursorPos",
          value: function () {
            var _ObjectEditorContext_getMethodAtCursorPos_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(className, methodSpec, cursorIndex) {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.withContextDo(function () {
                        var klass = _this7.classChainOfTarget().find(function (ea) {
                          return ea[Symbol["for"]("__LivelyClassName__")] === className;
                        });

                        return _this7._sourceDescriptor_of_class_findMethodNode(klass, cursorIndex);
                      }, {
                        cursorIndex: cursorIndex
                      });

                    case 2:
                      return _context18.abrupt("return", _context18.sent);

                    case 3:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function ObjectEditorContext_getMethodAtCursorPos_(_x19, _x20, _x21) {
              return _ObjectEditorContext_getMethodAtCursorPos_.apply(this, arguments);
            }

            return ObjectEditorContext_getMethodAtCursorPos_;
          }()
        }, {
          key: "_sourceDescriptor_of_class_findMethodNode",
          value: function () {
            var _ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(klass, methodNameOrIndex, methodKind) {
              var isClassMethod,
                  ast,
                  descr,
                  parsed,
                  methods,
                  method,
                  _args19 = arguments;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      isClassMethod = _args19.length > 3 && _args19[3] !== undefined ? _args19[3] : false;
                      ast = _args19.length > 4 ? _args19[4] : undefined;
                      descr = this.sourceDescriptorFor(klass);
                      _context19.t0 = ast;

                      if (_context19.t0) {
                        _context19.next = 8;
                        break;
                      }

                      _context19.next = 7;
                      return descr.ast;

                    case 7:
                      _context19.t0 = _context19.sent;

                    case 8:
                      parsed = _context19.t0;
                      methods = __varRecorder__$2.Path("body.body").get(parsed);
                      method = methods.find(function (_ref4) {
                        var kind = _ref4.kind,
                            itIsClassMethod = _ref4["static"],
                            name = _ref4.key.name,
                            _ref4$value$body = _ref4.value.body,
                            start = _ref4$value$body.start,
                            end = _ref4$value$body.end;
                        if (__varRecorder__$2.obj.isNumber(methodNameOrIndex)) return __varRecorder__$2.num.between(methodNameOrIndex, start, end);

                        if (name !== methodNameOrIndex || itIsClassMethod !== isClassMethod) {
                          return false;
                        }

                        if (!methodKind || methodKind !== "get" && methodKind !== "set") {
                          return true;
                        }

                        return methodKind === kind;
                      });
                      return _context19.abrupt("return", method);

                    case 12:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_(_x22, _x23, _x24) {
              return _ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_.apply(this, arguments);
            }

            return ObjectEditorContext__sourceDescriptor_of_class_findMethodNode_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ObjectEditorContext";
          }
        }, {
          key: "for",
          value: function () {
            var _ObjectEditorContext_for_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(target, editor, evalEnvironment) {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return new this().selectTarget(target, editor, evalEnvironment);

                    case 2:
                      return _context20.abrupt("return", _context20.sent);

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function ObjectEditorContext_for_(_x25, _x26, _x27) {
              return _ObjectEditorContext_for_.apply(this, arguments);
            }

            return ObjectEditorContext_for_;
          }()
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/context.js";
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
          start: 890,
          end: 13113
        });
      }(undefined);
      __varRecorder__$2["default"] = ObjectEditorContext;

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/index.js");
      __varRecorder__$1.arr = arr;
      __varRecorder__$1.obj = obj;
      __varRecorder__$1.Path = Path;
      __varRecorder__$1.string = string;
      __varRecorder__$1.fun = fun;
      __varRecorder__$1.promise = promise;
      __varRecorder__$1.Icon = Icon;
      __varRecorder__$1.TilingLayout = TilingLayout;
      __varRecorder__$1.Morph = Morph;
      __varRecorder__$1.GridLayout = GridLayout;
      __varRecorder__$1.config = config;
      __varRecorder__$1.pt = pt;
      __varRecorder__$1.Color = Color;
      __varRecorder__$1.JavaScriptEditorPlugin = JavaScriptEditorPlugin;
      __varRecorder__$1.withSuperclasses = withSuperclasses;
      __varRecorder__$1.isClass = isClass;
      __varRecorder__$1.LoadingIndicator = LoadingIndicator;
      __varRecorder__$1.connect = connect;
      __varRecorder__$1.RuntimeSourceDescriptor = RuntimeSourceDescriptor;
      __varRecorder__$1.ObjectPackage = ObjectPackage;
      __varRecorder__$1.isObjectClass = isObjectClass;
      __varRecorder__$1.chooseUnusedImports = chooseUnusedImports;
      __varRecorder__$1.interactivlyFixUndeclaredVariables = interactivlyFixUndeclaredVariables;
      __varRecorder__$1.interactivelyChooseImports = interactivelyChooseImports;
      __varRecorder__$1.modules = modules;
      __varRecorder__$1.parse = parse;
      __varRecorder__$1.query = query;
      __varRecorder__$1.adoptObject = adoptObject;
      __varRecorder__$1.InteractiveMorphSelector = InteractiveMorphSelector;
      __varRecorder__$1.ObjectEditorContext = ObjectEditorContext;
      __varRecorder__$1.DarkTheme = DarkTheme;
      __varRecorder__$1.DefaultTheme = DefaultTheme;
      __varRecorder__$1.stringifyFunctionWithoutToplevelRecorder = stringifyFunctionWithoutToplevelRecorder;
      __varRecorder__$1.interactivelyFreezePart = interactivelyFreezePart;
      __varRecorder__$1.generateReferenceExpression = generateReferenceExpression;
      __varRecorder__$1.getClassName = getClassName;
      __varRecorder__$1.resource = resource;
      __varRecorder__$1.lint = lint;
      __varRecorder__$1.StatusMessageConfirm = StatusMessageConfirm;
      __varRecorder__$1.StatusMessageWarning = StatusMessageWarning;
      __varRecorder__$1.StatusMessageError = StatusMessageError;
      __varRecorder__$1.ViewModel = ViewModel;
      __varRecorder__$1.DANGEROUS_METHODS_TO_OVERRIDE = ["render", "remove", "addMorph", "addMorphAt"];
      var ObjectEditorModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/index.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ObjectEditorModel") && typeof __lively_classholder__.ObjectEditorModel === "function" ? __lively_classholder__.ObjectEditorModel : __lively_classholder__.ObjectEditorModel = function ObjectEditorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "keybindings",
          get: function get() {
            return [{
              keys: "F1",
              command: "focus class tree"
            }, {
              keys: "F2",
              command: "focus code editor"
            }, {
              keys: "F3",
              command: "toggle showing imports"
            }, {
              keys: {
                mac: "Command-S",
                win: "Ctrl-S"
              },
              command: "save source"
            }, {
              keys: {
                mac: "Command-Shift-=",
                win: "Ctrl-Shift-="
              },
              command: "add method"
            }, {
              keys: {
                mac: "Command-Shift--",
                win: "Ctrl-Shift--"
              },
              command: "remove method or class"
            }, {
              keys: "Ctrl-Shift-R",
              command: "run selected method"
            }, {
              keys: "Alt-R",
              command: "refresh"
            }, {
              keys: {
                win: "Ctrl-B",
                mac: "Meta-B"
              },
              command: "open class in system browser"
            }, {
              keys: "Alt-Shift-T",
              command: "choose target"
            }, {
              keys: "Alt-J",
              command: "jump to definition"
            }, {
              keys: "Ctrl-C I",
              command: "[javascript] inject import"
            }, {
              keys: "Ctrl-C C I",
              command: "[javascript] fix undeclared variables"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this2 = this;

            return [{
              name: "focus class tree",
              exec: function exec() {
                var m = _this2.ui.classTree;
                m.show();
                m.focus();
                return true;
              }
            }, {
              name: "focus code editor",
              exec: function exec() {
                var m = _this2.ui.sourceEditor;
                m.show();
                m.focus();
                return true;
              }
            }, {
              name: "refresh",
              exec: function () {
                var _exec = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this2.withContextDo(function (ctx) {
                            var klass = ctx.selectedClass;

                            if (klass) {
                              var descr = ctx.sourceDescriptorFor(klass);
                              descr.module.reset();
                              descr.reset();
                            }
                          });

                        case 2:
                          _context.next = 4;
                          return _this2.refresh(true);

                        case 4:
                          _this2.view.setStatusMessage("reloaded");

                          return _context.abrupt("return", true);

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                function exec() {
                  return _exec.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "[javascript] inject import",
              exec: function () {
                var _exec2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this2.models.importController.interactivelyAddImport();

                        case 2:
                          return _context2.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                function exec() {
                  return _exec2.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "[javascript] fix undeclared variables",
              exec: function () {
                var _exec3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          return _context3.abrupt("return", _this2.interactivlyFixUndeclaredVariables());

                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                function exec() {
                  return _exec3.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "[javascript] removed unused imports",
              exec: function () {
                var _exec4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return _this2.interactivelyRemoveUnusedImports();

                        case 2:
                          return _context4.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                function exec() {
                  return _exec4.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "toggle showing imports",
              exec: function () {
                var _exec5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return _this2.toggleShowingImports();

                        case 2:
                          return _context5.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                function exec() {
                  return _exec5.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "add method",
              exec: function () {
                var _exec6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return _this2.interactivelyAddObjectPackageAndMethod();

                        case 2:
                          return _context6.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function exec() {
                  return _exec6.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "remove method or class",
              exec: function () {
                var _exec7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this2.interactivelyRemoveMethodOrClass();

                        case 2:
                          return _context7.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                function exec() {
                  return _exec7.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "adopt by superclass",
              exec: function () {
                var _exec8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return _this2.interactivelyAdoptBySuperclass();

                        case 2:
                          return _context8.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                function exec() {
                  return _exec8.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "adopt by another class",
              exec: function () {
                var _exec9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _this2.interactivelyAdoptByClass();

                        case 2:
                          return _context9.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                function exec() {
                  return _exec9.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "run selected method",
              exec: function () {
                var _exec10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return _this2.interactivelyRunSelectedMethod();

                        case 2:
                          return _context10.abrupt("return", true);

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                function exec() {
                  return _exec10.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "jump to definition",
              exec: function () {
                var _exec11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                  var _this2$ui, tree, sourceEditor, td, classNodes, items, _yield$_this2$world$f, _yield$_this2$world$f2, choice;

                  return regeneratorRuntime.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _this2$ui = _this2.ui, tree = _this2$ui.classTree, sourceEditor = _this2$ui.sourceEditor;
                          td = tree.treeData;
                          classNodes = td.getChildren(td.root).slice();
                          items = classNodes.reverse().flatMap(function (node) {
                            var klass = node.target;
                            var methods = td.getChildren(node);
                            return [{
                              isListItem: true,
                              label: [klass, {
                                fontWeight: "bold",
                                fontFamily: "IBM Plex Mono"
                              }],
                              value: {
                                node: node,
                                selector: "selectClass",
                                klass: klass
                              }
                            }].concat(methods.map(function (ea) {
                              return {
                                isListItem: true,
                                label: ["".concat(klass), {
                                  fontSize: "80%",
                                  textStyleClasses: ["v-center-text"],
                                  paddingRight: "10px"
                                }, "".concat(ea.name[1]), {}],
                                value: {
                                  node: ea,
                                  selector: "selectMethod",
                                  klass: klass
                                }
                              };
                            }));
                          });
                          _context11.next = 6;
                          return _this2.world().filterableListPrompt("select class or method", items, {
                            historyId: "lively.morphic-object-editor-jump-def-hist",
                            requester: _this2.view
                          });

                        case 6:
                          _yield$_this2$world$f = _context11.sent;
                          _yield$_this2$world$f2 = _slicedToArray(_yield$_this2$world$f.selected, 1);
                          choice = _yield$_this2$world$f2[0];

                          if (!choice) {
                            _context11.next = 15;
                            break;
                          }

                          _context11.next = 12;
                          return _this2[choice.selector](choice.klass, choice.node.target);

                        case 12:
                          sourceEditor.focus();
                          tree.scrollSelectionIntoView();
                          if (choice.selector === "selectClass") sourceEditor.scroll = __varRecorder__$1.pt(0, 0);

                        case 15:
                          return _context11.abrupt("return", true);

                        case 16:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }));

                function exec() {
                  return _exec11.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "save source",
              exec: function () {
                var _exec12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                  var view, _yield$_this2$doSave, success, reason, warnings;

                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          _context12.prev = 0;
                          view = _this2.view;
                          _context12.next = 4;
                          return _this2.doSave();

                        case 4:
                          _yield$_this2$doSave = _context12.sent;
                          success = _yield$_this2$doSave.success;
                          reason = _yield$_this2$doSave.reason;
                          warnings = _yield$_this2$doSave.warnings;

                          if (!(warnings && warnings.length > 0)) {
                            _context12.next = 11;
                            break;
                          }

                          view.setStatusMessage(["Saved with warnings:"].concat(warnings.map(function (warning) {
                            return "\"".concat(warning.message, "\" on line ").concat(warning.line);
                          })).join("\n"), __varRecorder__$1.StatusMessageWarning, 5000, {
                            isCompact: false
                          });
                          return _context12.abrupt("return", true);

                        case 11:
                          view.setStatusMessage(success ? "saved" : reason, success ? __varRecorder__$1.StatusMessageConfirm : __varRecorder__$1.StatusMessageError, 5000, {
                            extent: __varRecorder__$1.pt(view.width, 40)
                          });
                          _context12.next = 17;
                          break;

                        case 14:
                          _context12.prev = 14;
                          _context12.t0 = _context12["catch"](0);

                          _this2.view.showError(_context12.t0);

                        case 17:
                          return _context12.abrupt("return", true);

                        case 18:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12, null, [[0, 14]]);
                }));

                function exec() {
                  return _exec12.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "open class in system browser",
              exec: function () {
                var _exec13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(_) {
                  var opts,
                      _args13 = arguments;
                  return regeneratorRuntime.wrap(function _callee13$(_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          opts = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {
                            klass: null
                          };
                          return _context13.abrupt("return", _this2.browseClass(opts.klass));

                        case 2:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _callee13);
                }));

                function exec(_x) {
                  return _exec13.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "open object inspector for target",
              exec: function () {
                var _exec14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                  return regeneratorRuntime.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          return _context14.abrupt("return", _this2.world().execCommand("open object inspector", {
                            target: _this2.target
                          }));

                        case 1:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14);
                }));

                function exec() {
                  return _exec14.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "freeze target",
              exec: function () {
                var _exec15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.prev = 0;
                          _context15.next = 3;
                          return __varRecorder__$1.interactivelyFreezePart(_this2.target, _this2.view);

                        case 3:
                          _context15.next = 8;
                          break;

                        case 5:
                          _context15.prev = 5;
                          _context15.t0 = _context15["catch"](0);
                          if (_context15.t0 === "canceled") _this2.view.setStatusMessage("canceled");else _this2.view.showError(_context15.t0);

                        case 8:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15, null, [[0, 5]]);
                }));

                function exec() {
                  return _exec15.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "choose target",
              exec: function () {
                var _exec16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                  var view, _yield$_this2$world$e, _yield$_this2$world$e2, selected, _selected;

                  return regeneratorRuntime.wrap(function _callee19$(_context19) {
                    while (1) {
                      switch (_context19.prev = _context19.next) {
                        case 0:
                          view = _this2.view;

                          if (!view.env.eventDispatcher.isKeyPressed("Shift")) {
                            _context19.next = 18;
                            break;
                          }

                          if (!_this2.context.isRemote) {
                            _context19.next = 10;
                            break;
                          }

                          _this2._loadingIndicator = __varRecorder__$1.LoadingIndicator.open("Connecting to Remote...");
                          _context19.next = 6;
                          return _this2.withContextDo( /*#__PURE__*/function () {
                            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(ctx) {
                              var selectionFn, _yield$$world$execCom, _yield$$world$execCom2, selected;

                              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                                while (1) {
                                  switch (_context18.prev = _context18.next) {
                                    case 0:
                                      if (ctx.target.isMorph) {
                                        _context18.next = 2;
                                        break;
                                      }

                                      return _context18.abrupt("return");

                                    case 2:
                                      selectionFn = /*#__PURE__*/function () {
                                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(title, items, opts) {
                                          var editorCallback, res, selected, action;
                                          return regeneratorRuntime.wrap(function _callee17$(_context17) {
                                            while (1) {
                                              switch (_context17.prev = _context17.next) {
                                                case 0:
                                                  editorCallback = __varRecorder__$1.stringifyFunctionWithoutToplevelRecorder( /*#__PURE__*/function () {
                                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(ed) {
                                                      var res;
                                                      return regeneratorRuntime.wrap(function _callee16$(_context16) {
                                                        while (1) {
                                                          switch (_context16.prev = _context16.next) {
                                                            case 0:
                                                              ed._loadingIndicator.remove();

                                                              _context16.next = 3;
                                                              return ed.world().filterableListPrompt(title, items, opts);

                                                            case 3:
                                                              res = _context16.sent;
                                                              ed._loadingIndicator = __varRecorder__$1.LoadingIndicator.open("Switching Target...");
                                                              return _context16.abrupt("return", res);

                                                            case 6:
                                                            case "end":
                                                              return _context16.stop();
                                                          }
                                                        }
                                                      }, _callee16);
                                                    }));

                                                    return function (_x6) {
                                                      return _ref3.apply(this, arguments);
                                                    };
                                                  }());
                                                  _context17.next = 3;
                                                  return ctx.withEditorDo(editorCallback, {
                                                    items: items.map(function (item) {
                                                      item.value = item.value.id;
                                                      return item;
                                                    }),
                                                    title: title,
                                                    opts: opts
                                                  });

                                                case 3:
                                                  res = _context17.sent;
                                                  selected = res.selected, action = res.action;
                                                  selected = selected.map(function (id) {
                                                    return $world.getMorphWithId(id);
                                                  });
                                                  return _context17.abrupt("return", {
                                                    selected: selected,
                                                    action: action
                                                  });

                                                case 7:
                                                case "end":
                                                  return _context17.stop();
                                              }
                                            }
                                          }, _callee17);
                                        }));

                                        return function selectionFn(_x3, _x4, _x5) {
                                          return _ref2.apply(this, arguments);
                                        };
                                      }();

                                      _context18.next = 5;
                                      return $world.execCommand("select morph", {
                                        selectionFn: selectionFn,
                                        justReturn: true,
                                        root: [ctx.target].concat(_toConsumableArray(ctx.target.ownerChain())).find(function (m) {
                                          return m.owner.isWorld;
                                        })
                                      });

                                    case 5:
                                      _yield$$world$execCom = _context18.sent;
                                      _yield$$world$execCom2 = _slicedToArray(_yield$$world$execCom, 1);
                                      selected = _yield$$world$execCom2[0];

                                      if (!selected) {
                                        _context18.next = 11;
                                        break;
                                      }

                                      _context18.next = 11;
                                      return ctx.selectTarget(selected);

                                    case 11:
                                    case "end":
                                      return _context18.stop();
                                  }
                                }
                              }, _callee18);
                            }));

                            return function (_x2) {
                              return _ref.apply(this, arguments);
                            };
                          }());

                        case 6:
                          _context19.next = 8;
                          return _this2.refresh();

                        case 8:
                          _this2._loadingIndicator.remove();

                          return _context19.abrupt("return");

                        case 10:
                          _context19.next = 12;
                          return _this2.world().execCommand("select morph", {
                            justReturn: true,
                            root: [_this2.target].concat(_toConsumableArray(_this2.target.ownerChain())).find(function (m) {
                              return m.owner.isWorld;
                            })
                          });

                        case 12:
                          _yield$_this2$world$e = _context19.sent;
                          _yield$_this2$world$e2 = _slicedToArray(_yield$_this2$world$e, 1);
                          selected = _yield$_this2$world$e2[0];
                          if (selected) _this2.selectTarget(selected);
                          _context19.next = 22;
                          break;

                        case 18:
                          _context19.next = 20;
                          return __varRecorder__$1.InteractiveMorphSelector.selectMorph(_this2.world());

                        case 20:
                          _selected = _context19.sent;
                          if (_selected) _this2.selectTarget(_selected);

                        case 22:
                          view.focus();
                          return _context19.abrupt("return", _this2.target);

                        case 24:
                        case "end":
                          return _context19.stop();
                      }
                    }
                  }, _callee19);
                }));

                function exec() {
                  return _exec16.apply(this, arguments);
                }

                return exec;
              }()
            }, {
              name: "open browse snippet",
              exec: function exec() {
                return _this2.world().execCommand("open workspace", {
                  content: _this2.browseSnippetForSelection(),
                  language: "javascript"
                });
              }
            }];
          }
        }, {
          key: "viewDidLoad",
          value: function ObjectEditorModel_viewDidLoad_() {
            var _this3 = this;

            this.ui.sourceEditor.addCommands([{
              name: "[javascript] fix undeclared variables",
              exec: function exec() {
                return _this3.interactivlyFixUndeclaredVariables();
              }
            }, {
              name: "[javascript] inject import",
              exec: function exec() {
                return _this3.interactivelyAddImport();
              }
            }, {
              name: "[javascript] remove unused imports",
              exec: function exec() {
                return _this3.interactivelyRemoveUnusedImports();
              }
            }]);
          }
        }, {
          key: "warnForUnsavedChanges",
          value: function () {
            var _ObjectEditorModel_warnForUnsavedChanges_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.world().confirm(["Discard Changes\n", {}, "The unsaved changes to this module are going to be discarded.\nAre you sure you want to proceed?", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }], {
                        requester: this.view,
                        width: 350
                      });

                    case 2:
                      return _context20.abrupt("return", _context20.sent);

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));

            function ObjectEditorModel_warnForUnsavedChanges_() {
              return _ObjectEditorModel_warnForUnsavedChanges_.apply(this, arguments);
            }

            return ObjectEditorModel_warnForUnsavedChanges_;
          }()
        }, {
          key: "onWindowClose",
          value: function () {
            var _ObjectEditorModel_onWindowClose_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var proceed;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      proceed = true;
                      _context21.next = 3;
                      return this.hasUnsavedChanges();

                    case 3:
                      if (!_context21.sent) {
                        _context21.next = 7;
                        break;
                      }

                      _context21.next = 6;
                      return this.warnForUnsavedChanges();

                    case 6:
                      proceed = _context21.sent;

                    case 7:
                      if (!proceed) {
                        _context21.next = 11;
                        break;
                      }

                      this.context.dispose();
                      _context21.next = 12;
                      break;

                    case 11:
                      return _context21.abrupt("return", false);

                    case 12:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));

            function ObjectEditorModel_onWindowClose_() {
              return _ObjectEditorModel_onWindowClose_.apply(this, arguments);
            }

            return ObjectEditorModel_onWindowClose_;
          }()
        }, {
          key: "isShowingImports",
          value: function ObjectEditorModel_isShowingImports_() {
            return this.view.layout.grid.col(2).width > 10;
          }
        }, {
          key: "sourceDescriptorFor",
          value: function ObjectEditorModel_sourceDescriptorFor_(klass) {
            return __varRecorder__$1.RuntimeSourceDescriptor["for"](klass);
          }
        }, {
          key: "classChainOfTarget",
          value: function ObjectEditorModel_classChainOfTarget_() {
            return __varRecorder__$1.withSuperclasses(this.target.constructor);
          }
        }, {
          key: "toggleShowingImports",
          value: function () {
            var _ObjectEditorModel_toggleShowingImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var timeout,
                  view,
                  _this$ui,
                  importController,
                  sourceEditor,
                  expandedWidth,
                  enable,
                  newWidth,
                  column,
                  _args22 = arguments;

              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      timeout = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : 300;
                      view = this.view, _this$ui = this.ui, importController = _this$ui.importController, sourceEditor = _this$ui.sourceEditor;
                      expandedWidth = importController.getExpandedWidth();
                      enable = !this.isShowingImports();
                      newWidth = enable ? expandedWidth : -expandedWidth;
                      column = view.layout.grid.col(2);
                      view.layout.disable();
                      importController.layout.disable();
                      column.width += newWidth;
                      column.before.width -= newWidth;
                      importController.layout.col(0).width = enable ? expandedWidth : 0;
                      importController.layout.enable(timeout ? {
                        duration: timeout
                      } : null);
                      _context22.next = 14;
                      return view.layout.enable(timeout ? {
                        duration: timeout
                      } : null);

                    case 14:
                      (enable ? importController : sourceEditor).focus();
                      _context22.next = 17;
                      return __varRecorder__$1.promise.delay(2 * timeout);

                    case 17:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));

            function ObjectEditorModel_toggleShowingImports_() {
              return _ObjectEditorModel_toggleShowingImports_.apply(this, arguments);
            }

            return ObjectEditorModel_toggleShowingImports_;
          }()
        }, {
          key: "ensureProperWindowStyle",
          value: function () {
            var _ObjectEditorModel_ensureProperWindowStyle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var animated,
                  duration,
                  theme,
                  styleClasses,
                  window,
                  _args23 = arguments;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      animated = _args23.length > 0 && _args23[0] !== undefined ? _args23[0] : true;
                      duration = 300;
                      window = this.view.getWindow();
                      _context23.next = 5;
                      return this.editorPlugin.runEval("System.get('@system-env').node");

                    case 5:
                      if (!_context23.sent.value) {
                        _context23.next = 10;
                        break;
                      }

                      styleClasses = [].concat(_toConsumableArray(__varRecorder__$1.arr.without(window.styleClasses, "local")), ["node"]);
                      theme = __varRecorder__$1.DarkTheme.instance;
                      _context23.next = 12;
                      break;

                    case 10:
                      styleClasses = ["local"].concat(_toConsumableArray(__varRecorder__$1.arr.without(window.styleClasses, "node")));
                      theme = __varRecorder__$1.DefaultTheme.instance;

                    case 12:
                      this.editorPlugin.theme = theme;

                      if (animated) {
                        window.animate({
                          duration: duration,
                          styleClasses: styleClasses
                        });
                        this.ui.sourceEditor.animate({
                          fill: theme.background,
                          duration: duration
                        });
                      } else {
                        window.styleClasses = styleClasses;
                      }

                      this.ui.sourceEditor.textString = this.ui.sourceEditor.textString;
                      this.editorPlugin.highlight();

                    case 16:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function ObjectEditorModel_ensureProperWindowStyle_() {
              return _ObjectEditorModel_ensureProperWindowStyle_.apply(this, arguments);
            }

            return ObjectEditorModel_ensureProperWindowStyle_;
          }()
        }, {
          key: "selectTarget",
          value: function () {
            var _ObjectEditorModel_selectTarget_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(target, evalEnvironment) {
              var _this$ui2, classTree, openInBrowserButton, publishButton;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _this$ui2 = this.ui, classTree = _this$ui2.classTree, openInBrowserButton = _this$ui2.openInBrowserButton, publishButton = _this$ui2.publishButton;
                      _context24.next = 3;
                      return __varRecorder__$1.ObjectEditorContext["for"](target, this, evalEnvironment);

                    case 3:
                      this.context = _context24.sent;
                      _context24.next = 6;
                      return this.withContextDo(function (ctx) {
                        return !ctx.target.isMorph;
                      });

                    case 6:
                      if (!_context24.sent) {
                        _context24.next = 10;
                        break;
                      }

                      publishButton.disable();
                      _context24.next = 11;
                      break;

                    case 10:
                      publishButton.enable();

                    case 11:
                      _context24.next = 13;
                      return this.withContextDo(function (ctx) {
                        return !ctx.target.constructor[Symbol["for"]("lively-module-meta")]["package"].name;
                      });

                    case 13:
                      if (!_context24.sent) {
                        _context24.next = 17;
                        break;
                      }

                      openInBrowserButton.disable();
                      _context24.next = 18;
                      break;

                    case 17:
                      openInBrowserButton.enable();

                    case 18:
                      _context24.next = 20;
                      return this.withContextDo(function (ctx) {
                        return ctx.classTreeData;
                      });

                    case 20:
                      classTree.treeData = _context24.sent;
                      _context24.next = 23;
                      return this.selectClass(this.context.selectedClassName);

                    case 23:
                      this.ensureProperWindowStyle();

                    case 24:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function ObjectEditorModel_selectTarget_(_x7, _x8) {
              return _ObjectEditorModel_selectTarget_.apply(this, arguments);
            }

            return ObjectEditorModel_selectTarget_;
          }()
        }, {
          key: "withContextDo",
          value: function () {
            var _ObjectEditorModel_withContextDo_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(fn, varMapping) {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.context.withContextDo(fn, varMapping);

                    case 2:
                      return _context25.abrupt("return", _context25.sent);

                    case 3:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function ObjectEditorModel_withContextDo_(_x9, _x10) {
              return _ObjectEditorModel_withContextDo_.apply(this, arguments);
            }

            return ObjectEditorModel_withContextDo_;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _ObjectEditorModel_refresh_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var keepCursor,
                  _this$ui3,
                  ed,
                  tree,
                  oldPos,
                  _yield$this$withConte,
                  className,
                  treeData,
                  _args27 = arguments;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      keepCursor = _args27.length > 0 && _args27[0] !== undefined ? _args27[0] : false;
                      _this$ui3 = this.ui, ed = _this$ui3.sourceEditor, tree = _this$ui3.classTree;
                      oldPos = ed.cursorPosition;
                      _context27.next = 5;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(ctx) {
                          var res;
                          return regeneratorRuntime.wrap(function _callee26$(_context26) {
                            while (1) {
                              switch (_context26.prev = _context26.next) {
                                case 0:
                                  res = {
                                    className: ctx.selectedClass && ctx.selectedClass.name,
                                    methodName: ctx.selectedMethod && ctx.selectedMethod.name
                                  };
                                  _context26.next = 3;
                                  return ctx.refresh();

                                case 3:
                                  res.treeData = ctx.classTreeData;
                                  return _context26.abrupt("return", res);

                                case 5:
                                case "end":
                                  return _context26.stop();
                              }
                            }
                          }, _callee26);
                        }));

                        return function (_x11) {
                          return _ref4.apply(this, arguments);
                        };
                      }());

                    case 5:
                      _yield$this$withConte = _context27.sent;
                      className = _yield$this$withConte.className;
                      treeData = _yield$this$withConte.treeData;
                      _context27.next = 10;
                      return tree.maintainViewStateWhile(function () {
                        return tree.treeData = treeData;
                      }, function (node) {
                        return node.isClass ? node.target : node.name;
                      });

                    case 10:
                      if (!(className && !tree.selectedNode)) {
                        _context27.next = 13;
                        break;
                      }

                      _context27.next = 13;
                      return this.selectClass(className);

                    case 13:
                      if (keepCursor) ed.cursorPosition = oldPos;

                    case 14:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));

            function ObjectEditorModel_refresh_() {
              return _ObjectEditorModel_refresh_.apply(this, arguments);
            }

            return ObjectEditorModel_refresh_;
          }()
        }, {
          key: "updateKnownGlobals",
          value: function () {
            var _ObjectEditorModel_updateKnownGlobals_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var declaredNames;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(ctx) {
                          var declaredNames, klass, descr;
                          return regeneratorRuntime.wrap(function _callee28$(_context28) {
                            while (1) {
                              switch (_context28.prev = _context28.next) {
                                case 0:
                                  declaredNames = [];
                                  klass = ctx.selectedClass;

                                  if (!klass) {
                                    _context28.next = 8;
                                    break;
                                  }

                                  descr = ctx.sourceDescriptorFor(klass);
                                  _context28.next = 6;
                                  return descr.declaredAndUndeclaredNames;

                                case 6:
                                  __varRecorder__$1.__inter0__ = _context28.sent;
                                  declaredNames = __varRecorder__$1.__inter0__.declaredNames;

                                case 8:
                                  Object.assign(ctx.evalEnvironment, {
                                    knownGlobals: declaredNames
                                  });
                                  return _context28.abrupt("return", declaredNames);

                                case 10:
                                case "end":
                                  return _context28.stop();
                              }
                            }
                          }, _callee28);
                        }));

                        return function (_x12) {
                          return _ref5.apply(this, arguments);
                        };
                      }());

                    case 2:
                      declaredNames = _context29.sent;
                      Object.assign(this.editorPlugin.evalEnvironment, {
                        knownGlobals: declaredNames
                      });
                      this.editorPlugin.highlight();

                    case 5:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));

            function ObjectEditorModel_updateKnownGlobals_() {
              return _ObjectEditorModel_updateKnownGlobals_.apply(this, arguments);
            }

            return ObjectEditorModel_updateKnownGlobals_;
          }()
        }, {
          key: "updateSource",
          value: function () {
            var _ObjectEditorModel_updateSource_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(source) {
              var targetModule,
                  ed,
                  format,
                  hashCode,
                  _args31 = arguments;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      targetModule = _args31.length > 1 && _args31[1] !== undefined ? _args31[1] : "lively://object-editor/" + this.id;
                      ed = this.ui.sourceEditor;
                      _context31.next = 4;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(ctx) {
                          var system, format;
                          return regeneratorRuntime.wrap(function _callee30$(_context30) {
                            while (1) {
                              switch (_context30.prev = _context30.next) {
                                case 0:
                                  system = ctx.evalEnvironment.systemInterface;
                                  _context30.next = 3;
                                  return system.moduleFormat(targetModule);

                                case 3:
                                  _context30.t0 = _context30.sent;

                                  if (_context30.t0) {
                                    _context30.next = 6;
                                    break;
                                  }

                                  _context30.t0 = "esm";

                                case 6:
                                  format = _context30.t0;
                                  Object.assign(ctx.evalEnvironment, {
                                    targetModule: targetModule,
                                    format: format
                                  });
                                  return _context30.abrupt("return", format);

                                case 9:
                                case "end":
                                  return _context30.stop();
                              }
                            }
                          }, _callee30);
                        }));

                        return function (_x14) {
                          return _ref6.apply(this, arguments);
                        };
                      }(), {
                        targetModule: targetModule
                      });

                    case 4:
                      format = _context31.sent;

                      if (ed.textString !== source) {
                        ed.textString = source;
                      }

                      Object.assign(this.editorPlugin.evalEnvironment, {
                        targetModule: targetModule,
                        format: format
                      });
                      hashCode = __varRecorder__$1.string.hashCode(source);
                      _context31.next = 10;
                      return this.withContextDo(function (ctx) {
                        ctx.moduleChangeWarning = null;
                        ctx.sourceHash = hashCode;
                      }, {
                        hashCode: hashCode
                      });

                    case 10:
                      _context31.next = 12;
                      return this.clearLocalProperties();

                    case 12:
                      this.indicateNoUnsavedChanges();

                    case 13:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));

            function ObjectEditorModel_updateSource_(_x13) {
              return _ObjectEditorModel_updateSource_.apply(this, arguments);
            }

            return ObjectEditorModel_updateSource_;
          }()
        }, {
          key: "clearLocalProperties",
          value: function () {
            var _ObjectEditorModel_clearLocalProperties_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.withContextDo(function (ctx) {
                        var _ctx$target$propertie = ctx.target.propertiesAndPropertySettings(),
                            properties = _ctx$target$propertie.properties;

                        for (var prop in properties) {
                          if (ctx.target.hasOwnProperty(prop)) {
                            if (ctx.target[prop] && ctx.target[prop].isConnectionWrapper) continue;
                            if (ctx.hasOwnProperty("$$" + prop)) delete ctx.target[prop];
                          }
                        }
                      });

                    case 2:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));

            function ObjectEditorModel_clearLocalProperties_() {
              return _ObjectEditorModel_clearLocalProperties_.apply(this, arguments);
            }

            return ObjectEditorModel_clearLocalProperties_;
          }()
        }, {
          key: "indicateUnsavedChanges",
          value: function ObjectEditorModel_indicateUnsavedChanges_() {
            var sourceEditor = this.ui.sourceEditor;
            this.view.layout.col(1).paddingRight = 1;
            sourceEditor.padding = sourceEditor.padding.withWidth(-1);
            sourceEditor.borderColor = __varRecorder__$1.Color.red;
          }
        }, {
          key: "indicateNoUnsavedChanges",
          value: function ObjectEditorModel_indicateNoUnsavedChanges_() {
            var sourceEditor = this.ui.sourceEditor;
            this.view.layout.col(1).paddingRight = 0;
            sourceEditor.padding = sourceEditor.padding.withWidth(0);
            sourceEditor.borderColor = __varRecorder__$1.Color.gray;
          }
        }, {
          key: "hasUnsavedChanges",
          value: function () {
            var _ObjectEditorModel_hasUnsavedChanges_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.withContextDo(function (ctx) {
                        return ctx.sourceHash;
                      });

                    case 2:
                      _context33.t0 = _context33.sent;
                      _context33.t1 = __varRecorder__$1.string.hashCode(this.ui.sourceEditor.textString);
                      return _context33.abrupt("return", _context33.t0 !== _context33.t1);

                    case 5:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));

            function ObjectEditorModel_hasUnsavedChanges_() {
              return _ObjectEditorModel_hasUnsavedChanges_.apply(this, arguments);
            }

            return ObjectEditorModel_hasUnsavedChanges_;
          }()
        }, {
          key: "updateUnsavedChangeIndicator",
          value: function () {
            var _ObjectEditorModel_updateUnsavedChangeIndicator_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.hasUnsavedChanges();

                    case 2:
                      if (!_context34.sent) {
                        _context34.next = 6;
                        break;
                      }

                      _context34.t0 = "indicateUnsavedChanges";
                      _context34.next = 7;
                      break;

                    case 6:
                      _context34.t0 = "indicateNoUnsavedChanges";

                    case 7:
                      _context34.t1 = _context34.t0;

                      this[_context34.t1]();

                    case 9:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));

            function ObjectEditorModel_updateUnsavedChangeIndicator_() {
              return _ObjectEditorModel_updateUnsavedChangeIndicator_.apply(this, arguments);
            }

            return ObjectEditorModel_updateUnsavedChangeIndicator_;
          }()
        }, {
          key: "updateUnsavedChangeIndicatorDebounced",
          value: function ObjectEditorModel_updateUnsavedChangeIndicatorDebounced_() {
            var _this4 = this;

            __varRecorder__$1.fun.debounceNamed(this.id + "-updateUnsavedChangeIndicatorDebounced", 20, function () {
              return _this4.updateUnsavedChangeIndicator();
            })();
          }
        }, {
          key: "reactToModuleChange",
          value: function () {
            var _ObjectEditorModel_reactToModuleChange_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(newClassSource) {
              var ed;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      ed = this.ui.sourceEditor;
                      _context35.next = 3;
                      return this.hasUnsavedChanges();

                    case 3:
                      if (!_context35.sent) {
                        _context35.next = 8;
                        break;
                      }

                      if (!(__varRecorder__$1.string.hashCode(ed.textString) !== __varRecorder__$1.string.hashCode(newClassSource))) {
                        _context35.next = 8;
                        break;
                      }

                      _context35.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.addModuleChangeWarning();
                      });

                    case 7:
                      return _context35.abrupt("return");

                    case 8:
                      _context35.next = 10;
                      return this.refresh(true);

                    case 10:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));

            function ObjectEditorModel_reactToModuleChange_(_x15) {
              return _ObjectEditorModel_reactToModuleChange_.apply(this, arguments);
            }

            return ObjectEditorModel_reactToModuleChange_;
          }()
        }, {
          key: "onModuleChanged",
          value: function () {
            var _ObjectEditorModel_onModuleChanged_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(evt) {
              var newClassSource;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      if (!(!this.context || this.context.isRemote)) {
                        _context36.next = 2;
                        break;
                      }

                      return _context36.abrupt("return");

                    case 2:
                      _context36.next = 4;
                      return this.context.onModuleChanged(evt);

                    case 4:
                      newClassSource = _context36.sent;
                      if (newClassSource) this.reactToModuleChange(newClassSource);

                    case 6:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));

            function ObjectEditorModel_onModuleChanged_(_x16) {
              return _ObjectEditorModel_onModuleChanged_.apply(this, arguments);
            }

            return ObjectEditorModel_onModuleChanged_;
          }()
        }, {
          key: "onModuleLoaded",
          value: function ObjectEditorModel_onModuleLoaded_(evt) {
            this.onModuleChanged(evt);
          }
        }, {
          key: "browse",
          value: function () {
            var _ObjectEditorModel_browse_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(spec) {
              var target, className, methodName, textPosition, scroll, classTreeScroll, evalEnvironment, _this$ui4, classTree, sourceEditor;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      target = spec.target, className = spec.className, methodName = spec.methodName, textPosition = spec.textPosition, scroll = spec.scroll, classTreeScroll = spec.classTreeScroll, evalEnvironment = spec.evalEnvironment;

                      if (!target) {
                        _context37.next = 4;
                        break;
                      }

                      _context37.next = 4;
                      return this.selectTarget(target, evalEnvironment);

                    case 4:
                      if (className) {
                        _context37.next = 8;
                        break;
                      }

                      _context37.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClass.name;
                      });

                    case 7:
                      className = _context37.sent;

                    case 8:
                      if (!(className && methodName)) {
                        _context37.next = 13;
                        break;
                      }

                      _context37.next = 11;
                      return this.selectMethod(className, methodName, false);

                    case 11:
                      _context37.next = 16;
                      break;

                    case 13:
                      if (!className) {
                        _context37.next = 16;
                        break;
                      }

                      _context37.next = 16;
                      return this.selectClass(className);

                    case 16:
                      _this$ui4 = this.ui, classTree = _this$ui4.classTree, sourceEditor = _this$ui4.sourceEditor;
                      if (scroll) sourceEditor.scroll = scroll;
                      if (textPosition) sourceEditor.cursorPosition = textPosition;
                      if (classTreeScroll) classTree.scroll = classTreeScroll;
                      return _context37.abrupt("return", this);

                    case 21:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));

            function ObjectEditorModel_browse_(_x17) {
              return _ObjectEditorModel_browse_.apply(this, arguments);
            }

            return ObjectEditorModel_browse_;
          }()
        }, {
          key: "browseSpec",
          value: function () {
            var _ObjectEditorModel_browseSpec_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              var complete,
                  _this$ui5,
                  classTreeScroll,
                  _this$ui5$sourceEdito,
                  scroll,
                  textPosition,
                  _yield$this$withConte2,
                  className,
                  methodName,
                  _args38 = arguments;

              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      complete = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : true;
                      _this$ui5 = this.ui, classTreeScroll = _this$ui5.classTree.scroll, _this$ui5$sourceEdito = _this$ui5.sourceEditor, scroll = _this$ui5$sourceEdito.scroll, textPosition = _this$ui5$sourceEdito.cursorPosition;
                      _context38.next = 4;
                      return this.withContextDo(function (ctx) {
                        var className = ctx.selectedClass && ctx.selectedClass.name;
                        var methodName = ctx.selectedMethod && ctx.selectedMethod.name;
                        return {
                          className: className,
                          methodName: methodName
                        };
                      });

                    case 4:
                      _yield$this$withConte2 = _context38.sent;
                      className = _yield$this$withConte2.className;
                      methodName = _yield$this$withConte2.methodName;
                      return _context38.abrupt("return", Object.assign({
                        target: this.context.target,
                        className: className,
                        methodName: methodName,
                        evalEnvironment: this.context.evalEnvironment
                      }, complete ? {
                        scroll: scroll,
                        textPosition: textPosition,
                        classTreeScroll: classTreeScroll
                      } : {}));

                    case 8:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));

            function ObjectEditorModel_browseSpec_() {
              return _ObjectEditorModel_browseSpec_.apply(this, arguments);
            }

            return ObjectEditorModel_browseSpec_;
          }()
        }, {
          key: "browseClass",
          value: function () {
            var _ObjectEditorModel_browseClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(klass) {
              var className, moduleName, _varRecorder__$__int;

              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      if (!klass) {
                        _context39.next = 4;
                        break;
                      }

                      __varRecorder__$1.__inter1__ = this.context.sourceDescriptorFor(klass), className = __varRecorder__$1.__inter1__.name, (_varRecorder__$__int = __varRecorder__$1.__inter1__.module, moduleName = _varRecorder__$__int.id, _varRecorder__$__int);
                      _context39.next = 9;
                      break;

                    case 4:
                      _context39.next = 6;
                      return this.withContextDo(function (ctx) {
                        if (!ctx.selectedClass) return {};
                        var desc = ctx.sourceDescriptorFor(ctx.selectedClass);
                        return {
                          className: desc.name,
                          moduleName: desc.module.id
                        };
                      });

                    case 6:
                      __varRecorder__$1.__inter2__ = _context39.sent;
                      className = __varRecorder__$1.__inter2__.className;
                      moduleName = __varRecorder__$1.__inter2__.moduleName;

                    case 9:
                      if (!(moduleName && className)) {
                        _context39.next = 11;
                        break;
                      }

                      return _context39.abrupt("return", this.world().execCommand("open browser", {
                        moduleName: moduleName,
                        codeEntity: {
                          name: className
                        },
                        systemInterface: this.systemInterface
                      }));

                    case 11:
                      this.view.setStatusMessage("No class specified");
                      return _context39.abrupt("return", true);

                    case 13:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));

            function ObjectEditorModel_browseClass_(_x18) {
              return _ObjectEditorModel_browseClass_.apply(this, arguments);
            }

            return ObjectEditorModel_browseClass_;
          }()
        }, {
          key: "browseSnippetForSelection",
          value: function ObjectEditorModel_browseSnippetForSelection_() {
            var c = this.context.selectedClassName;
            var m = this.selectedMethod;
            var t = this.target;
            var codeSnip = "$world.execCommand(\"open object editor\", {";
            codeSnip += "target: ".concat(__varRecorder__$1.generateReferenceExpression(t));
            if (c) codeSnip += ", selectedClass: \"".concat(c, "\"");
            if (m && c) codeSnip += ", selectedMethod: \"".concat(m.name, "\"");
            codeSnip += "});";
            return codeSnip;
          }
        }, {
          key: "onClassTreeSelection",
          value: function ObjectEditorModel_onClassTreeSelection_(node) {
            if (!node) {
              return;
            }

            if (__varRecorder__$1.obj.isString(node.target) || __varRecorder__$1.isClass(node.target)) {
              this.selectClass(node.target);
              return;
            }

            var tree = this.ui.classTree;
            var parentNode = tree.treeData.parentNode(node);
            var isClick = !!__varRecorder__$1.Path("env.eventDispatcher.eventState.clickedOnMorph").get(this.view);
            this.selectMethod(parentNode.target, node.target, isClick);
          }
        }, {
          key: "contextMenuForClassTree",
          value: function ObjectEditorModel_contextMenuForClassTree_(_ref7) {
            var node = _ref7.node,
                evt = _ref7.evt;
            evt.stop();
            if (!node || !node.target) return;
            var klass = __varRecorder__$1.isClass(node.target) ? node.target : node.target.owner && __varRecorder__$1.isClass(node.target.owner) ? node.target.owner : __varRecorder__$1.obj.isString(node.target) ? node.target : null;
            var items = [];

            if (klass) {
              items.push({
                command: "open browse snippet",
                target: this.view
              });
            }

            if (__varRecorder__$1.obj.isString(klass) ? this.context.selectedClassName === klass : this.context.selectedClass === klass) {
              var adoptByItems = [];
              klass.name !== "Morph" && adoptByItems.push({
                alias: "by superclass",
                command: "adopt by superclass",
                target: this.view
              });
              adoptByItems.push({
                alias: "by custom class...",
                command: "adopt by another class",
                target: this.view
              });
              items.push(["adopt by...", adoptByItems]);
            }

            return this.world().openWorldMenu(evt, items);
          }
        }, {
          key: "selectClass",
          value: function () {
            var _ObjectEditorModel_selectClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(klass) {
              var _this5 = this;

              var tree, className, proceed, node, descr, _node;

              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      if (!this._updatingTree) {
                        _context41.next = 2;
                        break;
                      }

                      return _context41.abrupt("return");

                    case 2:
                      tree = this.ui.classTree;
                      className = typeof klass === "string" ? klass : klass.name;

                      if (!(this.context.selectedClassName !== className)) {
                        _context41.next = 25;
                        break;
                      }

                      _context41.t1 = tree.selectedNode;

                      if (!_context41.t1) {
                        _context41.next = 10;
                        break;
                      }

                      _context41.next = 9;
                      return this.hasUnsavedChanges();

                    case 9:
                      _context41.t1 = _context41.sent;

                    case 10:
                      _context41.t0 = _context41.t1;

                      if (!_context41.t0) {
                        _context41.next = 13;
                        break;
                      }

                      _context41.t0 = this.ui.sourceEditor.textString;

                    case 13:
                      if (!_context41.t0) {
                        _context41.next = 23;
                        break;
                      }

                      _context41.next = 16;
                      return this.warnForUnsavedChanges();

                    case 16:
                      proceed = _context41.sent;

                      if (proceed) {
                        _context41.next = 23;
                        break;
                      }

                      node = tree.nodes.find(function (ea) {
                        return !ea.isRoot && ea.isClass && ea.klass.name === _this5.context.selectedClassName;
                      });
                      this._updatingTree = true;
                      tree.selectedNode = node;
                      this._updatingTree = false;
                      return _context41.abrupt("return");

                    case 23:
                      _context41.next = 25;
                      return this.context.selectClass(className);

                    case 25:
                      _context41.next = 27;
                      return this.withContextDo(function (ctx) {
                        return __varRecorder__$1.isObjectClass(ctx.selectedClass);
                      });

                    case 27:
                      if (!_context41.sent) {
                        _context41.next = 31;
                        break;
                      }

                      this.ui.forkPackageButton.enable();
                      _context41.next = 32;
                      break;

                    case 31:
                      this.ui.forkPackageButton.disable();

                    case 32:
                      _context41.next = 34;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(ctx) {
                          var descr;
                          return regeneratorRuntime.wrap(function _callee40$(_context40) {
                            while (1) {
                              switch (_context40.prev = _context40.next) {
                                case 0:
                                  ctx.selectedMethod = null;
                                  descr = ctx.sourceDescriptorFor(ctx.selectedClass);

                                  if (!(!descr._moduleSource && descr.module._frozenModule)) {
                                    _context40.next = 6;
                                    break;
                                  }

                                  _context40.next = 5;
                                  return descr.module.source();

                                case 5:
                                  descr._moduleSource = _context40.sent;

                                case 6:
                                  return _context40.abrupt("return", {
                                    source: descr.source,
                                    moduleId: descr.module.id
                                  });

                                case 7:
                                case "end":
                                  return _context40.stop();
                              }
                            }
                          }, _callee40);
                        }));

                        return function (_x20) {
                          return _ref8.apply(this, arguments);
                        };
                      }());

                    case 34:
                      descr = _context41.sent;
                      _context41.t2 = this;
                      _context41.next = 38;
                      return descr.source;

                    case 38:
                      _context41.t3 = _context41.sent;
                      _context41.t4 = descr.moduleId;
                      _context41.next = 42;
                      return _context41.t2.updateSource.call(_context41.t2, _context41.t3, _context41.t4);

                    case 42:
                      _context41.next = 44;
                      return this.updateKnownGlobals();

                    case 44:
                      _context41.next = 46;
                      return this.updateTitle();

                    case 46:
                      _context41.next = 48;
                      return this.ui.importController.setModule(descr.moduleId);

                    case 48:
                      if (!tree.selectedNode || tree.selectedNode.target !== klass) {
                        _node = tree.nodes.find(function (ea) {
                          return !ea.isRoot && ea.isClass && ea.name === klass;
                        });
                        tree.selectedNode = _node;
                      }

                    case 49:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));

            function ObjectEditorModel_selectClass_(_x19) {
              return _ObjectEditorModel_selectClass_.apply(this, arguments);
            }

            return ObjectEditorModel_selectClass_;
          }()
        }, {
          key: "selectMethod",
          value: function () {
            var _ObjectEditorModel_selectMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42(klass, methodSpec) {
              var highlight,
                  putCursorInBody,
                  className,
                  methodNode,
                  tree,
                  differentClassSelected,
                  node,
                  ed,
                  cursorPos,
                  methodRange,
                  _args42 = arguments;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      highlight = _args42.length > 2 && _args42[2] !== undefined ? _args42[2] : true;
                      putCursorInBody = _args42.length > 3 && _args42[3] !== undefined ? _args42[3] : false;
                      className = klass.name || klass;
                      if (!methodSpec.name) methodSpec = {
                        name: methodSpec
                      };
                      _context42.next = 6;
                      return this.context.selectMethod(className, methodSpec);

                    case 6:
                      methodNode = _context42.sent;

                      if (methodNode) {
                        _context42.next = 10;
                        break;
                      }

                      this.setStatusMessage("Cannot find method ".concat(methodSpec.name));
                      return _context42.abrupt("return");

                    case 10:
                      _context42.next = 12;
                      return this.updateTitle();

                    case 12:
                      tree = this.ui.classTree;
                      _context42.next = 15;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClass.name !== className;
                      }, {
                        className: className
                      });

                    case 15:
                      differentClassSelected = _context42.sent;

                      if (!(differentClassSelected || !tree.selectedNode)) {
                        _context42.next = 19;
                        break;
                      }

                      _context42.next = 19;
                      return this.selectClass(klass);

                    case 19:
                      _context42.next = 21;
                      return tree.uncollapse(tree.selectedNode);

                    case 21:
                      if (!tree.selectedNode || tree.selectedNode.target !== methodSpec) {
                        node = tree.nodes.find(function (ea) {
                          return !ea.isClass && !ea.isRoot && ea.target.owner === klass && ea.target.name === methodSpec.name;
                        });
                        tree.selectedNode = node;
                        tree.scrollSelectionIntoView();
                      }

                      ed = this.ui.sourceEditor;
                      cursorPos = ed.indexToPosition(putCursorInBody ? methodNode.value.body.start + 1 : methodNode.key.start);
                      ed.cursorPosition = cursorPos;
                      ed.scrollCursorIntoView();
                      methodRange = {
                        start: ed.indexToPosition(methodNode.start),
                        end: ed.indexToPosition(methodNode.end)
                      };
                      ed.centerRange(methodRange);

                      if (highlight) {
                        ed.flash(methodRange, {
                          id: "method",
                          time: 1000,
                          fill: ed.selectionColor || __varRecorder__$1.Color.blue.withA(0.2)
                        });
                      }

                      this.selectedMethodName = methodSpec.name;

                    case 30:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));

            function ObjectEditorModel_selectMethod_(_x21, _x22) {
              return _ObjectEditorModel_selectMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_selectMethod_;
          }()
        }, {
          key: "displayFrozenWarningIfNeeded",
          value: function () {
            var _ObjectEditorModel_displayFrozenWarningIfNeeded_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              var view, moduleInfo, prevHeight, row;
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      view = this.view;
                      _context43.next = 3;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedModule._frozenModule && {
                          pkgName: ctx.selectedModule["package"]().name,
                          moduleName: ctx.selectedModule.pathInPackage()
                        };
                      });

                    case 3:
                      moduleInfo = _context43.sent;

                      if (moduleInfo) {
                        this.ui.frozenWarning.textString = "The module \"".concat(moduleInfo.pkgName, "/").concat(moduleInfo.moduleName, "\" you are viewing is frozen. You are not able to make changes to this module unless you reload the world with dynamic load enabled for the package \"").concat(moduleInfo.pkgName, "\".");
                      }

                      this.ui.saveButton.deactivated = !!moduleInfo;
                      prevHeight = view.layout.row(1).height;
                      row = view.layout.row(1);
                      view.layout.disable();
                      row.height = moduleInfo ? 80 : 0;
                      row.after.height -= prevHeight !== row.height ? moduleInfo ? 80 : -80 : 0;
                      view.layout.enable({
                        duration: 300
                      });

                    case 12:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));

            function ObjectEditorModel_displayFrozenWarningIfNeeded_() {
              return _ObjectEditorModel_displayFrozenWarningIfNeeded_.apply(this, arguments);
            }

            return ObjectEditorModel_displayFrozenWarningIfNeeded_;
          }()
        }, {
          key: "updateTitle",
          value: function () {
            var _ObjectEditorModel_updateTitle_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              var win, title, url;
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      win = this.view.getWindow();

                      if (win) {
                        _context44.next = 3;
                        break;
                      }

                      return _context44.abrupt("return");

                    case 3:
                      title = "ObjectEditor";
                      _context44.t0 = title;
                      _context44.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.getTitle();
                      });

                    case 7:
                      title = _context44.t0 += _context44.sent;
                      url = this.systemInterface.coreInterface.url;
                      title += url ? " [".concat(url, "]") : "";
                      win.title = title;
                      win.relayoutWindowControls();

                    case 12:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));

            function ObjectEditorModel_updateTitle_() {
              return _ObjectEditorModel_updateTitle_.apply(this, arguments);
            }

            return ObjectEditorModel_updateTitle_;
          }()
        }, {
          key: "doSave",
          value: function () {
            var _ObjectEditorModel_doSave_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              var _this6 = this;

              var sourceEditor, fixed, className, content, warnings, _varRecorder__$lint, _varRecorder__$lint2, editorSourceHash, _yield$this$withConte3, sourceChanged, outsideChangeWarning, selectedModuleId, overriddenSystemMethods, overriddenSystemMethod, really, _really;

              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      sourceEditor = this.ui.sourceEditor;
                      _context47.next = 3;
                      return this.withContextDo(function (ctx) {
                        return !ctx.selectedClass;
                      });

                    case 3:
                      if (!_context47.sent) {
                        _context47.next = 5;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "No class selected"
                      });

                    case 5:
                      _context47.next = 7;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedModule._frozenModule;
                      });

                    case 7:
                      if (!_context47.sent) {
                        _context47.next = 9;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "Frozen modules can not be altered"
                      });

                    case 9:
                      if (!__varRecorder__$1.config.objectEditor.fixUndeclaredVarsOnSave) {
                        _context47.next = 15;
                        break;
                      }

                      _context47.next = 12;
                      return this.execCommand("[javascript] fix undeclared variables");

                    case 12:
                      fixed = _context47.sent;

                      if (fixed) {
                        _context47.next = 15;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "Save canceled"
                      });

                    case 15:
                      content = sourceEditor.textString;
                      _context47.next = 18;
                      return this.withContextDo(function (ctx) {
                        var selectedClass = ctx.selectedClass;

                        var parsed = __varRecorder__$1.parse(content);

                        if (parsed.body.length !== 1 || parsed.body[0].type !== "ClassDeclaration") {
                          return {
                            success: false,
                            reason: "Code is expected to contain the class definition of ".concat(selectedClass, ", aborting save.")
                          };
                        }

                        var classDecl = parsed.body[0];
                        var className = content.slice(classDecl.id.start, classDecl.id.end);

                        if (className !== selectedClass.name) {
                          content = content.slice(0, classDecl.id.start) + selectedClass.name + content.slice(classDecl.id.end);
                        }

                        return {
                          content: content,
                          className: className
                        };
                      }, {
                        content: content
                      });

                    case 18:
                      __varRecorder__$1.__inter3__ = _context47.sent;
                      content = __varRecorder__$1.__inter3__.content;
                      className = __varRecorder__$1.__inter3__.className;
                      warnings = false;
                      _varRecorder__$lint = __varRecorder__$1.lint(content, {
                        "no-unused-vars": ["warn", {
                          args: "none",
                          varsIgnorePattern: "_|".concat(className)
                        }]
                      });
                      _varRecorder__$lint2 = _slicedToArray(_varRecorder__$lint, 2);
                      content = _varRecorder__$lint2[0];
                      warnings = _varRecorder__$lint2[1];
                      editorSourceHash = __varRecorder__$1.string.hashCode(content);
                      _context47.next = 29;
                      return this.withContextDo(function (ctx) {
                        var sourceHash = ctx.sourceHash,
                            moduleChangeWarning = ctx.moduleChangeWarning,
                            selectedModule = ctx.selectedModule;
                        var sourceChanged = sourceHash !== editorSourceHash;
                        return {
                          selectedModuleId: selectedModule.id,
                          sourceChanged: sourceChanged,
                          outsideChangeWarning: moduleChangeWarning === selectedModule.id
                        };
                      }, {
                        editorSourceHash: editorSourceHash
                      });

                    case 29:
                      _yield$this$withConte3 = _context47.sent;
                      sourceChanged = _yield$this$withConte3.sourceChanged;
                      outsideChangeWarning = _yield$this$withConte3.outsideChangeWarning;
                      selectedModuleId = _yield$this$withConte3.selectedModuleId;
                      _context47.next = 35;
                      return this.withContextDo(function (ctx) {
                        var parsed = __varRecorder__$1.parse(content);

                        var _varRecorder__$query = _slicedToArray(__varRecorder__$1.query.topLevelDeclsAndRefs(parsed).classDecls, 1),
                            classDecl = _varRecorder__$query[0];

                        var problematicOverrides = __varRecorder__$1.query.nodesInScopeOf(classDecl).filter(function (m) {
                          return m.type === "MethodDefinition" && __varRecorder__$1.DANGEROUS_METHODS_TO_OVERRIDE.includes(m.key.name) && !ctx.selectedClass.prototype.hasOwnProperty(m.key.name);
                        });

                        return problematicOverrides.length ? problematicOverrides.map(function (m) {
                          return m.key.name;
                        }) : false;
                      });

                    case 35:
                      overriddenSystemMethods = _context47.sent;

                      if (!overriddenSystemMethods) {
                        _context47.next = 45;
                        break;
                      }

                    case 37:
                      if (!(overriddenSystemMethod = overriddenSystemMethods.pop())) {
                        _context47.next = 45;
                        break;
                      }

                      _context47.next = 40;
                      return this.world().confirm(["System Method Override\n", {}, "You are about to override ", {
                        fontWeight: "normal",
                        fontSize: 16
                      }, overriddenSystemMethod + "()", {
                        fontWeight: "bold",
                        fontStyle: "italic"
                      }, " which is a method at the core of the System. You should only proceed if you are absolutely sure you know what you are doing, else you may cause to crash the running System.", {
                        fontWeight: "normal"
                      }], {
                        width: 400,
                        requester: this
                      });

                    case 40:
                      really = _context47.sent;

                      if (really) {
                        _context47.next = 43;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false
                      });

                    case 43:
                      _context47.next = 37;
                      break;

                    case 45:
                      if (!(sourceChanged && outsideChangeWarning)) {
                        _context47.next = 53;
                        break;
                      }

                      _context47.next = 48;
                      return this.world().confirm(["Simultaneous Change Warning\n", {}, "The module ".concat(selectedModuleId, " you are trying to save changed elsewhere!\nOverwrite those changes?"), {
                        fontSize: 16,
                        fontWeight: "normal"
                      }], {
                        requester: this
                      });

                    case 48:
                      _really = _context47.sent;

                      if (_really) {
                        _context47.next = 51;
                        break;
                      }

                      return _context47.abrupt("return", {
                        success: false,
                        reason: "Save canceled"
                      });

                    case 51:
                      _context47.next = 53;
                      return this.withContextDo(function (ctx) {
                        return ctx.moduleChangeWarning = null;
                      });

                    case 53:
                      this.backupSourceInLocalStorage(content);
                      _context47.prev = 54;
                      _context47.next = 57;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45(ctx) {
                          return regeneratorRuntime.wrap(function _callee45$(_context45) {
                            while (1) {
                              switch (_context45.prev = _context45.next) {
                                case 0:
                                  ctx.isSaving = true;
                                  _context45.next = 3;
                                  return _this6.sourceDescriptorFor(ctx.selectedClass).changeSource(content);

                                case 3:
                                case "end":
                                  return _context45.stop();
                              }
                            }
                          }, _callee45);
                        }));

                        return function (_x23) {
                          return _ref9.apply(this, arguments);
                        };
                      }(), {
                        content: content
                      });

                    case 57:
                      _context47.next = 59;
                      return sourceEditor.saveExcursion( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
                        return regeneratorRuntime.wrap(function _callee46$(_context46) {
                          while (1) {
                            switch (_context46.prev = _context46.next) {
                              case 0:
                                _context46.next = 2;
                                return _this6.refresh();

                              case 2:
                              case "end":
                                return _context46.stop();
                            }
                          }
                        }, _callee46);
                      })));

                    case 59:
                      _context47.next = 61;
                      return this.withContextDo(function (ctx) {
                        ctx.updatePackageConfig(sourceChanged);
                      }, {
                        sourceChanged: sourceChanged
                      });

                    case 61:
                      return _context47.abrupt("return", {
                        success: true,
                        warnings: warnings
                      });

                    case 62:
                      _context47.prev = 62;
                      this.jumpToMethodAtCursorPosition();
                      _context47.next = 66;
                      return this.withContextDo(function (ctx) {
                        return ctx.isSaving = false;
                      });

                    case 66:
                      this.updateSource(content, selectedModuleId);
                      return _context47.finish(62);

                    case 68:
                      if (this.target instanceof __varRecorder__$1.ViewModel) {
                        this.target.reifyBindings();
                        this.target.reifyExposedProps();
                      }

                    case 69:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47, this, [[54,, 62, 68]]);
            }));

            function ObjectEditorModel_doSave_() {
              return _ObjectEditorModel_doSave_.apply(this, arguments);
            }

            return ObjectEditorModel_doSave_;
          }()
        }, {
          key: "jumpToMethodAtCursorPosition",
          value: function () {
            var _ObjectEditorModel_jumpToMethodAtCursorPosition_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var _yield$this$withConte4, _yield$this$withConte5, methodNode, className;

              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      return _context48.abrupt("return");

                    case 5:
                      _yield$this$withConte4 = _context48.sent;
                      _yield$this$withConte5 = _slicedToArray(_yield$this$withConte4, 2);
                      methodNode = _yield$this$withConte5[0];
                      className = _yield$this$withConte5[1];
                      this.selectMethod(className, methodNode.key.name, false);

                    case 10:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48, this);
            }));

            function ObjectEditorModel_jumpToMethodAtCursorPosition_() {
              return _ObjectEditorModel_jumpToMethodAtCursorPosition_.apply(this, arguments);
            }

            return ObjectEditorModel_jumpToMethodAtCursorPosition_;
          }()
        }, {
          key: "backupSourceInLocalStorage",
          value: function ObjectEditorModel_backupSourceInLocalStorage_(source) {
            var store = JSON.parse(localStorage.getItem("oe helper") || "{\"saves\": []}");
            if (store.saves.some(function (ea) {
              return typeof ea === "string" ? ea === source : ea.source === source;
            })) return;
            if (store.saves.length > 100) store.saves = store.saves.slice(40, 100);
            store.saves.push({
              source: source,
              time: Date.now()
            });
            localStorage.setItem("oe helper", JSON.stringify(store));
          }
        }, {
          key: "interactivelyAddObjectPackageAndMethod",
          value: function () {
            var _ObjectEditorModel_interactivelyAddObjectPackageAndMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              var objPkgName, className, methodName, stringifiedTarget, li, requester, worldPkgUrl;
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      li = __varRecorder__$1.LoadingIndicator.open("Lookup Package...");
                      requester = this.view.getWindow();
                      _context52.prev = 2;
                      _context52.next = 5;
                      return this.withContextDo(function (ctx) {
                        var pkg = __varRecorder__$1.ObjectPackage.lookupPackageForObject(ctx.target);

                        return {
                          objPkgName: pkg && pkg.id,
                          className: __varRecorder__$1.getClassName(ctx.target),
                          stringifiedTarget: ctx.target.toString()
                        };
                      });

                    case 5:
                      __varRecorder__$1.__inter4__ = _context52.sent;
                      objPkgName = __varRecorder__$1.__inter4__.objPkgName;
                      className = __varRecorder__$1.__inter4__.className;
                      stringifiedTarget = __varRecorder__$1.__inter4__.stringifiedTarget;

                      if (objPkgName) {
                        _context52.next = 35;
                        break;
                      }

                      li.remove();
                      _context52.next = 13;
                      return this.withContextDo(function () {
                        var pkg = __varRecorder__$1.ObjectPackage.lookupPackageForObject($world);

                        if (pkg) return pkg.name;
                      });

                    case 13:
                      worldPkgUrl = _context52.sent;

                      if (!worldPkgUrl) {
                        _context52.next = 25;
                        break;
                      }

                      _context52.next = 17;
                      return this.world().prompt(["New Class\n", {}, "Regarding the object:\n", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }, stringifiedTarget, {
                        fontSize: 16,
                        fontStyle: "italic",
                        fontWeight: "normal"
                      }, "\nEnter a name for the new class of this object:", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }], {
                        historyId: "object-package-name-hist",
                        requester: requester,
                        width: 400,
                        input: __varRecorder__$1.string.capitalize(className).replace(/\s+(.)/g, function (_, match) {
                          return match.toUpperCase();
                        })
                      });

                    case 17:
                      className = _context52.sent;

                      if (className) {
                        _context52.next = 21;
                        break;
                      }

                      requester.setStatusMessage("Canceled");
                      return _context52.abrupt("return");

                    case 21:
                      _context52.next = 23;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49(ctx) {
                          var pkg, modName, mod;
                          return regeneratorRuntime.wrap(function _callee49$(_context49) {
                            while (1) {
                              switch (_context49.prev = _context49.next) {
                                case 0:
                                  pkg = __varRecorder__$1.ObjectPackage.withId(worldPkgUrl);
                                  modName = className[0].toLowerCase() + className.slice(1) + ".js";
                                  _context49.next = 4;
                                  return pkg.ensureSubModule(modName);

                                case 4:
                                  mod = _context49.sent;
                                  _context49.next = 7;
                                  return mod.adoptObject(ctx.target, className);

                                case 7:
                                case "end":
                                  return _context49.stop();
                              }
                            }
                          }, _callee49);
                        }));

                        return function (_x24) {
                          return _ref11.apply(this, arguments);
                        };
                      }(), {
                        className: className,
                        worldPkgUrl: worldPkgUrl
                      });

                    case 23:
                      _context52.next = 35;
                      break;

                    case 25:
                      _context52.next = 27;
                      return this.world().prompt(["New Object Package\n", {}, "No object package exists yet for object\n", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }, stringifiedTarget, {
                        fontSize: 16,
                        fontStyle: "italic",
                        fontWeight: "normal"
                      }, "\nEnter a name for a new package:", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }], {
                        historyId: "object-package-name-hist",
                        requester: requester,
                        width: 400,
                        input: __varRecorder__$1.string.capitalize(className).replace(/\s+(.)/g, function (_, match) {
                          return match.toUpperCase();
                        })
                      });

                    case 27:
                      objPkgName = _context52.sent;

                      if (objPkgName) {
                        _context52.next = 31;
                        break;
                      }

                      requester.setStatusMessage("Canceled");
                      return _context52.abrupt("return");

                    case 31:
                      li.label = "Creating Class...";
                      li.openInWorld();
                      _context52.next = 35;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50(ctx) {
                          var pkg;
                          return regeneratorRuntime.wrap(function _callee50$(_context50) {
                            while (1) {
                              switch (_context50.prev = _context50.next) {
                                case 0:
                                  pkg = __varRecorder__$1.ObjectPackage.withId(objPkgName);
                                  _context50.next = 3;
                                  return pkg.adoptObject(ctx.target);

                                case 3:
                                case "end":
                                  return _context50.stop();
                              }
                            }
                          }, _callee50);
                        }));

                        return function (_x25) {
                          return _ref12.apply(this, arguments);
                        };
                      }(), {
                        objPkgName: objPkgName
                      });

                    case 35:
                      li.label = "Adding method...";
                      _context52.next = 38;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51(ctx) {
                          var _yield$ctx$addNewMeth, methodName;

                          return regeneratorRuntime.wrap(function _callee51$(_context51) {
                            while (1) {
                              switch (_context51.prev = _context51.next) {
                                case 0:
                                  _context51.next = 2;
                                  return ctx.addNewMethod();

                                case 2:
                                  _yield$ctx$addNewMeth = _context51.sent;
                                  methodName = _yield$ctx$addNewMeth.methodName;
                                  return _context51.abrupt("return", {
                                    methodName: methodName,
                                    className: ctx.target.constructor[Symbol["for"]("__LivelyClassName__")]
                                  });

                                case 5:
                                case "end":
                                  return _context51.stop();
                              }
                            }
                          }, _callee51);
                        }));

                        return function (_x26) {
                          return _ref13.apply(this, arguments);
                        };
                      }());

                    case 38:
                      __varRecorder__$1.__inter5__ = _context52.sent;
                      className = __varRecorder__$1.__inter5__.className;
                      methodName = __varRecorder__$1.__inter5__.methodName;
                      li.remove();
                      _context52.next = 44;
                      return this.refresh();

                    case 44:
                      _context52.next = 46;
                      return this.selectMethod(className, methodName, true, true);

                    case 46:
                      this.ui.sourceEditor.focus();
                      _context52.next = 53;
                      break;

                    case 49:
                      _context52.prev = 49;
                      _context52.t0 = _context52["catch"](2);
                      li.remove();
                      requester.showError(_context52.t0);

                    case 53:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this, [[2, 49]]);
            }));

            function ObjectEditorModel_interactivelyAddObjectPackageAndMethod_() {
              return _ObjectEditorModel_interactivelyAddObjectPackageAndMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyAddObjectPackageAndMethod_;
          }()
        }, {
          key: "interactivelyRemoveMethodOrClass",
          value: function () {
            var _ObjectEditorModel_interactivelyRemoveMethodOrClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var _yield$this$withConte6, selectedMethod, selectedClass;

              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return this.withContextDo(function (ctx) {
                        return {
                          selectedMethod: __varRecorder__$1.Path("selectedMethod.name").get(ctx),
                          selectedClass: __varRecorder__$1.Path("selectedClass.name").get(ctx)
                        };
                      });

                    case 2:
                      _yield$this$withConte6 = _context53.sent;
                      selectedMethod = _yield$this$withConte6.selectedMethod;
                      selectedClass = _yield$this$withConte6.selectedClass;

                      if (!selectedMethod) {
                        _context53.next = 7;
                        break;
                      }

                      return _context53.abrupt("return", this.interactivelyRemoveMethod());

                    case 7:
                      if (!selectedClass) {
                        _context53.next = 9;
                        break;
                      }

                      return _context53.abrupt("return", this.interactivelyAdoptBySuperclass());

                    case 9:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));

            function ObjectEditorModel_interactivelyRemoveMethodOrClass_() {
              return _ObjectEditorModel_interactivelyRemoveMethodOrClass_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyRemoveMethodOrClass_;
          }()
        }, {
          key: "interactivelyAdoptByClass",
          value: function () {
            var _ObjectEditorModel_interactivelyAdoptByClass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              var li, items, _yield$$world$filtera, _yield$$world$filtera2, klassAndModule;

              return regeneratorRuntime.wrap(function _callee55$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      li = __varRecorder__$1.LoadingIndicator.open("fetching modules...");
                      _context56.next = 3;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee54(ctx) {
                          var system, modules, _yield$import, module$1, items, _iterator, _step, _loop, _ret;

                          return regeneratorRuntime.wrap(function _callee54$(_context55) {
                            while (1) {
                              switch (_context55.prev = _context55.next) {
                                case 0:
                                  system = ctx.evalEnvironment.systemInterface;
                                  _context55.next = 3;
                                  return system.getModules();

                                case 3:
                                  modules = _context55.sent;
                                  _context55.next = 6;
                                  return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.a6; });

                                case 6:
                                  _yield$import = _context55.sent;
                                  module$1 = _yield$import.module;
                                  items = [];
                                  _iterator = _createForOfIteratorHelper(modules);
                                  _context55.prev = 10;
                                  _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                                    var mod, pkg, shortName, realModule, imports, _ref15, Morph, klassDefs, klasses, _iterator2, _step2, klass;

                                    return regeneratorRuntime.wrap(function _loop$(_context54) {
                                      while (1) {
                                        switch (_context54.prev = _context54.next) {
                                          case 0:
                                            mod = _step.value;

                                            if (!mod.name.endsWith(".md")) {
                                              _context54.next = 3;
                                              break;
                                            }

                                            return _context54.abrupt("return", "continue");

                                          case 3:
                                            _context54.next = 5;
                                            return system.getPackageForModule(mod.name);

                                          case 5:
                                            pkg = _context54.sent;
                                            shortName = pkg ? pkg.name + "/" + system.shortModuleName(mod.name, pkg) : mod.name;
                                            realModule = module$1(mod.name);

                                            if (!(realModule.format() !== "esm" && realModule.format() !== "register")) {
                                              _context54.next = 10;
                                              break;
                                            }

                                            return _context54.abrupt("return", "continue");

                                          case 10:
                                            _context54.next = 12;
                                            return realModule.imports();

                                          case 12:
                                            _context54.t0 = function (ea) {
                                              return ea.local;
                                            };

                                            imports = _context54.sent.map(_context54.t0);

                                            if (!ctx.target.isMorph) {
                                              _context54.next = 20;
                                              break;
                                            }

                                            _context54.next = 17;
                                            return module.import('./__rootModule___commonjs-entry-2a340242.js').then(function (n) { return n.gf; });

                                          case 17:
                                            _context54.t1 = _context54.sent;
                                            _context54.next = 21;
                                            break;

                                          case 20:
                                            _context54.t1 = {};

                                          case 21:
                                            _ref15 = _context54.t1;
                                            Morph = _ref15.Morph;
                                            _context54.next = 25;
                                            return realModule.scope();

                                          case 25:
                                            _context54.t2 = function (klass) {
                                              return klass.id.name;
                                            };

                                            klassDefs = _context54.sent.classDecls.map(_context54.t2);
                                            klasses = __varRecorder__$1.obj.values(realModule.recorder).filter(function (ea) {
                                              return __varRecorder__$1.isClass(ea) && !imports.includes(ea.name) && klassDefs.includes(ea.name) && (ctx.target.isMorph ? __varRecorder__$1.withSuperclasses(ea).includes(Morph) : true);
                                            });
                                            _iterator2 = _createForOfIteratorHelper(klasses);

                                            try {
                                              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                                                klass = _step2.value;
                                                items.push({
                                                  isListItem: true,
                                                  string: "".concat(shortName, " ").concat(klass.name),
                                                  value: {
                                                    moduleName: mod.name,
                                                    className: klass.name
                                                  }
                                                });
                                              }
                                            } catch (err) {
                                              _iterator2.e(err);
                                            } finally {
                                              _iterator2.f();
                                            }

                                          case 30:
                                          case "end":
                                            return _context54.stop();
                                        }
                                      }
                                    }, _loop);
                                  });

                                  _iterator.s();

                                case 13:
                                  if ((_step = _iterator.n()).done) {
                                    _context55.next = 20;
                                    break;
                                  }

                                  return _context55.delegateYield(_loop(), "t0", 15);

                                case 15:
                                  _ret = _context55.t0;

                                  if (!(_ret === "continue")) {
                                    _context55.next = 18;
                                    break;
                                  }

                                  return _context55.abrupt("continue", 18);

                                case 18:
                                  _context55.next = 13;
                                  break;

                                case 20:
                                  _context55.next = 25;
                                  break;

                                case 22:
                                  _context55.prev = 22;
                                  _context55.t1 = _context55["catch"](10);

                                  _iterator.e(_context55.t1);

                                case 25:
                                  _context55.prev = 25;

                                  _iterator.f();

                                  return _context55.finish(25);

                                case 28:
                                  return _context55.abrupt("return", items);

                                case 29:
                                case "end":
                                  return _context55.stop();
                              }
                            }
                          }, _callee54, null, [[10, 22, 25, 28]]);
                        }));

                        return function (_x27) {
                          return _ref14.apply(this, arguments);
                        };
                      }());

                    case 3:
                      items = _context56.sent;
                      li.remove();
                      _context56.next = 7;
                      return $world.filterableListPrompt("From which class should the target object inherit?", items, {
                        requester: this.view
                      });

                    case 7:
                      _yield$$world$filtera = _context56.sent;
                      _yield$$world$filtera2 = _slicedToArray(_yield$$world$filtera.selected, 1);
                      klassAndModule = _yield$$world$filtera2[0];

                      if (klassAndModule) {
                        _context56.next = 12;
                        break;
                      }

                      return _context56.abrupt("return");

                    case 12:
                      _context56.next = 14;
                      return this.withContextDo(function (ctx) {
                        var moduleName = klassAndModule.moduleName,
                            className = klassAndModule.className;

                        var klass = __varRecorder__$1.modules.module(moduleName).recorder[className];

                        __varRecorder__$1.adoptObject(ctx.target, klass);
                      }, {
                        klassAndModule: klassAndModule
                      });

                    case 14:
                      this.refresh();
                      this.selectClass(klassAndModule.className);

                    case 16:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee55, this);
            }));

            function ObjectEditorModel_interactivelyAdoptByClass_() {
              return _ObjectEditorModel_interactivelyAdoptByClass_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyAdoptByClass_;
          }()
        }, {
          key: "interactivelyAdoptBySuperclass",
          value: function () {
            var _ObjectEditorModel_interactivelyAdoptBySuperclass_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
              var _yield$this$withConte7, nextClassName, className, targetName, moduleMeta, nextModuleMeta, generateDoit, normalStyle, highlightStyle, really;

              return regeneratorRuntime.wrap(function _callee56$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      _context57.next = 2;
                      return this.withContextDo(function (ctx) {
                        var t = ctx.target;
                        var klass = t.constructor;
                        if (klass === __varRecorder__$1.Morph) return {};

                        var nextClass = __varRecorder__$1.withSuperclasses(klass)[1];

                        return {
                          moduleMeta: klass[Symbol["for"]("lively-module-meta")],
                          nextModuleMeta: nextClass[Symbol["for"]("lively-module-meta")],
                          nextClassName: nextClass.name,
                          className: klass.name,
                          targetName: t.name
                        };
                      });

                    case 2:
                      _yield$this$withConte7 = _context57.sent;
                      nextClassName = _yield$this$withConte7.nextClassName;
                      className = _yield$this$withConte7.className;
                      targetName = _yield$this$withConte7.targetName;
                      moduleMeta = _yield$this$withConte7.moduleMeta;
                      nextModuleMeta = _yield$this$withConte7.nextModuleMeta;

                      generateDoit = function generateDoit(meta, entity) {
                        return {
                          textDecoration: "underline",
                          doit: {
                            code: "$world.execCommand(\"open browser\", {moduleName: \"".concat(meta["package"].name + "/" + meta.pathInPackage, "\", codeEntity: \"").concat(entity, "\"})")
                          }
                        };
                      };

                      if (!nextClassName) {
                        _context57.next = 21;
                        break;
                      }

                      normalStyle = {
                        fontWeight: "normal",
                        fontSize: 16
                      };
                      highlightStyle = {
                        fontWeight: "normal",
                        fontStyle: "italic",
                        fontSize: 16
                      };
                      _context57.next = 14;
                      return this.world().confirm(["Class Hierarchy Change\n", {}, "Do you really want to make ", normalStyle, "\"".concat(targetName, "\""), highlightStyle, " an instance of ", normalStyle, nextClassName, Object.assign({}, highlightStyle, {}, generateDoit(nextModuleMeta, nextClassName)), " and remove class ", normalStyle, className, Object.assign({}, highlightStyle, {}, generateDoit(moduleMeta, className)), " and its package ", normalStyle, moduleMeta["package"].name, highlightStyle, " ?", normalStyle], {
                        requester: this.view,
                        width: 500
                      });

                    case 14:
                      really = _context57.sent;

                      if (really) {
                        _context57.next = 17;
                        break;
                      }

                      return _context57.abrupt("return");

                    case 17:
                      _context57.next = 19;
                      return this.withContextDo(function (ctx) {
                        __varRecorder__$1.adoptObject(ctx.target, __varRecorder__$1.withSuperclasses(ctx.target.constructor)[1]);
                      });

                    case 19:
                      this.refresh();
                      this.selectClass(nextClassName);

                    case 21:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee56, this);
            }));

            function ObjectEditorModel_interactivelyAdoptBySuperclass_() {
              return _ObjectEditorModel_interactivelyAdoptBySuperclass_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyAdoptBySuperclass_;
          }()
        }, {
          key: "interactivelyRemoveMethod",
          value: function () {
            var _ObjectEditorModel_interactivelyRemoveMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
              var parsed, _yield$this$withConte8, methodNode, selectedMethodName, really, ed, range;

              return regeneratorRuntime.wrap(function _callee58$(_context59) {
                while (1) {
                  switch (_context59.prev = _context59.next) {
                    case 0:
                      _context59.next = 2;
                      return this.withContextDo(function (ctx) {
                        return !ctx.selectedMethod;
                      });

                    case 2:
                      if (!_context59.sent) {
                        _context59.next = 4;
                        break;
                      }

                      return _context59.abrupt("return");

                    case 4:
                      parsed = this.editorPlugin.parse().body[0];
                      _context59.next = 7;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57(ctx) {
                          var selectedMethod, selectedClass;
                          return regeneratorRuntime.wrap(function _callee57$(_context58) {
                            while (1) {
                              switch (_context58.prev = _context58.next) {
                                case 0:
                                  selectedMethod = ctx.selectedMethod, selectedClass = ctx.selectedClass;
                                  _context58.t0 = selectedMethod.name;
                                  _context58.next = 4;
                                  return ctx._sourceDescriptor_of_class_findMethodNode(selectedClass, selectedMethod.name, selectedMethod.kind, selectedMethod["static"], parsed);

                                case 4:
                                  _context58.t1 = _context58.sent;
                                  return _context58.abrupt("return", {
                                    selectedMethodName: _context58.t0,
                                    methodNode: _context58.t1
                                  });

                                case 6:
                                case "end":
                                  return _context58.stop();
                              }
                            }
                          }, _callee57);
                        }));

                        return function (_x28) {
                          return _ref16.apply(this, arguments);
                        };
                      }(), {
                        parsed: parsed
                      });

                    case 7:
                      _yield$this$withConte8 = _context59.sent;
                      methodNode = _yield$this$withConte8.methodNode;
                      selectedMethodName = _yield$this$withConte8.selectedMethodName;

                      if (selectedMethodName) {
                        _context59.next = 12;
                        break;
                      }

                      return _context59.abrupt("return");

                    case 12:
                      if (methodNode) {
                        _context59.next = 15;
                        break;
                      }

                      this.view.showError("Cannot find AST node for method ".concat(selectedMethodName));
                      return _context59.abrupt("return");

                    case 15:
                      _context59.next = 17;
                      return this.world().confirm("Really remove method ".concat(selectedMethodName, "?"));

                    case 17:
                      really = _context59.sent;

                      if (really) {
                        _context59.next = 20;
                        break;
                      }

                      return _context59.abrupt("return");

                    case 20:
                      ed = this.ui.sourceEditor;
                      range = {
                        start: ed.indexToPosition(methodNode.start),
                        end: ed.indexToPosition(methodNode.end)
                      };

                      if (!ed.textInRange({
                        start: {
                          column: 0,
                          row: range.start.row
                        },
                        end: range.start
                      }).trim()) {
                        range.start = ed.lineRange(range.start.row - 1).end;
                      }

                      ed.replace(range, "");
                      _context59.next = 26;
                      return this.doSave();

                    case 26:
                    case "end":
                      return _context59.stop();
                  }
                }
              }, _callee58, this);
            }));

            function ObjectEditorModel_interactivelyRemoveMethod_() {
              return _ObjectEditorModel_interactivelyRemoveMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyRemoveMethod_;
          }()
        }, {
          key: "interactivelyForkPackage",
          value: function () {
            var _ObjectEditorModel_interactivelyForkPackage_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
              var forkedName, newClassName;
              return regeneratorRuntime.wrap(function _callee60$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                      _context61.t0 = this.world();
                      _context61.t1 = ["New Forked Package\n", {}, "Please enter a name for the forked class and its package:", {
                        fontSize: 16,
                        fontWeight: "normal"
                      }];
                      _context61.t2 = this.view;
                      _context61.next = 5;
                      return this.withContextDo(function (ctx) {
                        return ctx.target.constructor[Symbol["for"]("__LivelyClassName__")];
                      });

                    case 5:
                      _context61.t3 = _context61.sent;
                      _context61.t4 = _context61.t3 + "Fork";
                      _context61.t5 = {
                        requester: _context61.t2,
                        input: _context61.t4,
                        historyId: "lively.morphic-object-editor-fork-names",
                        useLastInput: false
                      };
                      _context61.next = 10;
                      return _context61.t0.prompt.call(_context61.t0, _context61.t1, _context61.t5);

                    case 10:
                      forkedName = _context61.sent;

                      if (forkedName) {
                        _context61.next = 13;
                        break;
                      }

                      return _context61.abrupt("return");

                    case 13:
                      _context61.next = 15;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee59(ctx) {
                          return regeneratorRuntime.wrap(function _callee59$(_context60) {
                            while (1) {
                              switch (_context60.prev = _context60.next) {
                                case 0:
                                  _context60.next = 2;
                                  return ctx.forkPackage(forkedName);

                                case 2:
                                case "end":
                                  return _context60.stop();
                              }
                            }
                          }, _callee59);
                        }));

                        return function (_x29) {
                          return _ref17.apply(this, arguments);
                        };
                      }(), {
                        forkedName: forkedName
                      });

                    case 15:
                      newClassName = _context61.sent;
                      _context61.next = 18;
                      return this.browse({
                        target: this.context.target,
                        selectedClass: newClassName
                      });

                    case 18:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee60, this);
            }));

            function ObjectEditorModel_interactivelyForkPackage_() {
              return _ObjectEditorModel_interactivelyForkPackage_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyForkPackage_;
          }()
        }, {
          key: "interactivlyFixUndeclaredVariables",
          value: function () {
            var _ObjectEditorModel_interactivlyFixUndeclaredVariables_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
              var _this7 = this;

              var moduleId, origSource, content, _this$ui6, sourceEditor, importController;

              return regeneratorRuntime.wrap(function _callee66$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                      _this$ui6 = this.ui, sourceEditor = _this$ui6.sourceEditor, importController = _this$ui6.importController;
                      _context67.prev = 1;
                      _context67.next = 4;
                      return this.withContextDo(function (ctx) {
                        return ctx.selectedClass && ctx.selectedClass.name;
                      });

                    case 4:
                      if (_context67.sent) {
                        _context67.next = 7;
                        break;
                      }

                      this.view.showError(new Error("No class selected"));
                      return _context67.abrupt("return", null);

                    case 7:
                      content = sourceEditor.textString;
                      _context67.next = 10;
                      return this.withContextDo(function (ctx) {
                        var selectedClass = ctx.selectedClass;
                        var descr = ctx.sourceDescriptorFor(selectedClass);
                        var m = descr.module;
                        var origSource = descr.moduleSource;
                        ctx.isSaving = true;
                        return {
                          moduleId: m.id,
                          origSource: origSource
                        };
                      });

                    case 10:
                      __varRecorder__$1.__inter6__ = _context67.sent;
                      moduleId = __varRecorder__$1.__inter6__.moduleId;
                      origSource = __varRecorder__$1.__inter6__.origSource;
                      _context67.next = 15;
                      return __varRecorder__$1.interactivlyFixUndeclaredVariables(sourceEditor, {
                        requester: sourceEditor,
                        sourceUpdater: function () {
                          var _sourceUpdater = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee62(type, arg) {
                            return regeneratorRuntime.wrap(function _callee62$(_context63) {
                              while (1) {
                                switch (_context63.prev = _context63.next) {
                                  case 0:
                                    _context63.next = 2;
                                    return _this7.withContextDo( /*#__PURE__*/function () {
                                      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee61(ctx) {
                                        var descr, m;
                                        return regeneratorRuntime.wrap(function _callee61$(_context62) {
                                          while (1) {
                                            switch (_context62.prev = _context62.next) {
                                              case 0:
                                                descr = ctx.sourceDescriptorFor(ctx.selectedClass);
                                                m = descr.module;

                                                if (!(type === "import")) {
                                                  _context62.next = 7;
                                                  break;
                                                }

                                                _context62.next = 5;
                                                return m.addImports(arg);

                                              case 5:
                                                _context62.next = 13;
                                                break;

                                              case 7:
                                                if (!(type === "global")) {
                                                  _context62.next = 12;
                                                  break;
                                                }

                                                _context62.next = 10;
                                                return m.addGlobalDeclaration(arg);

                                              case 10:
                                                _context62.next = 13;
                                                break;

                                              case 12:
                                                throw new Error("Cannot handle fixUndeclaredVar type ".concat(type));

                                              case 13:
                                                descr.resetIfChanged();

                                              case 14:
                                              case "end":
                                                return _context62.stop();
                                            }
                                          }
                                        }, _callee61);
                                      }));

                                      return function (_x32) {
                                        return _ref18.apply(this, arguments);
                                      };
                                    }(), {
                                      type: type,
                                      arg: arg
                                    });

                                  case 2:
                                    _context63.next = 4;
                                    return importController.updateImports();

                                  case 4:
                                    _context63.next = 6;
                                    return _this7.updateKnownGlobals();

                                  case 6:
                                  case "end":
                                    return _context63.stop();
                                }
                              }
                            }, _callee62);
                          }));

                          function sourceUpdater(_x30, _x31) {
                            return _sourceUpdater.apply(this, arguments);
                          }

                          return sourceUpdater;
                        }(),
                        sourceRetriever: function () {
                          var _sourceRetriever = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
                            return regeneratorRuntime.wrap(function _callee63$(_context64) {
                              while (1) {
                                switch (_context64.prev = _context64.next) {
                                  case 0:
                                    return _context64.abrupt("return", _this7.withContextDo(function (ctx) {
                                      var descr = ctx.sourceDescriptorFor(ctx.selectedClass);
                                      return descr._modifiedSource(content).moduleSource;
                                    }, {
                                      content: sourceEditor.textString
                                    }));

                                  case 1:
                                  case "end":
                                    return _context64.stop();
                                }
                              }
                            }, _callee63);
                          }));

                          function sourceRetriever() {
                            return _sourceRetriever.apply(this, arguments);
                          }

                          return sourceRetriever;
                        }(),
                        highlightUndeclared: function () {
                          var _highlightUndeclared = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee64(undeclaredVar) {
                            var varStart, varEnd, _yield$_this7$withCon, classStart, classEnd, range;

                            return regeneratorRuntime.wrap(function _callee64$(_context65) {
                              while (1) {
                                switch (_context65.prev = _context65.next) {
                                  case 0:
                                    varStart = undeclaredVar.start, varEnd = undeclaredVar.end;
                                    _context65.next = 3;
                                    return _this7.withContextDo(function (ctx) {
                                      var descr = ctx.sourceDescriptorFor(ctx.selectedClass);
                                      var _descr$sourceLocation = descr.sourceLocation,
                                          classStart = _descr$sourceLocation.start,
                                          classEnd = _descr$sourceLocation.end;
                                      return {
                                        classStart: classStart,
                                        classEnd: classEnd
                                      };
                                    });

                                  case 3:
                                    _yield$_this7$withCon = _context65.sent;
                                    classStart = _yield$_this7$withCon.classStart;
                                    classEnd = _yield$_this7$withCon.classEnd;

                                    if (!(varStart < classStart || varEnd > classEnd)) {
                                      _context65.next = 8;
                                      break;
                                    }

                                    return _context65.abrupt("return");

                                  case 8:
                                    varStart -= classStart;
                                    varEnd -= classStart;
                                    range = {
                                      start: sourceEditor.indexToPosition(varStart),
                                      end: sourceEditor.indexToPosition(varEnd)
                                    };
                                    sourceEditor.selection = range;
                                    sourceEditor.centerRange(range);

                                  case 13:
                                  case "end":
                                    return _context65.stop();
                                }
                              }
                            }, _callee64);
                          }));

                          function highlightUndeclared(_x33) {
                            return _highlightUndeclared.apply(this, arguments);
                          }

                          return highlightUndeclared;
                        }()
                      });

                    case 15:
                      return _context67.abrupt("return", _context67.sent);

                    case 18:
                      _context67.prev = 18;
                      _context67.t0 = _context67["catch"](1);
                      _context67.next = 22;
                      return this.withContextDo( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
                        return regeneratorRuntime.wrap(function _callee65$(_context66) {
                          while (1) {
                            switch (_context66.prev = _context66.next) {
                              case 0:
                                _context66.t0 = origSource;

                                if (!_context66.t0) {
                                  _context66.next = 5;
                                  break;
                                }

                                _context66.next = 4;
                                return __varRecorder__$1.modules.module(moduleId).changeSource(origSource);

                              case 4:
                                _context66.t0 = _context66.sent;

                              case 5:
                                return _context66.abrupt("return", _context66.t0);

                              case 6:
                              case "end":
                                return _context66.stop();
                            }
                          }
                        }, _callee65);
                      })), {
                        moduleId: moduleId,
                        origSource: origSource
                      });

                    case 22:
                      this.view.showError(_context67.t0);
                      return _context67.abrupt("return", null);

                    case 24:
                      _context67.prev = 24;
                      _context67.next = 27;
                      return this.withContextDo(function (ctx) {
                        return ctx.isSaving = false;
                      });

                    case 27:
                      _context67.next = 29;
                      return importController.updateImports();

                    case 29:
                      _context67.next = 31;
                      return this.updateKnownGlobals();

                    case 31:
                      sourceEditor.focus();
                      return _context67.finish(24);

                    case 33:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee66, this, [[1, 18, 24, 33]]);
            }));

            function ObjectEditorModel_interactivlyFixUndeclaredVariables_() {
              return _ObjectEditorModel_interactivlyFixUndeclaredVariables_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivlyFixUndeclaredVariables_;
          }()
        }, {
          key: "interactivelyRunSelectedMethod",
          value: function () {
            var _ObjectEditorModel_interactivelyRunSelectedMethod_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
              var _this8 = this;

              var opts,
                  _yield$this$withConte9,
                  statusMessage,
                  _args69 = arguments;

              return regeneratorRuntime.wrap(function _callee68$(_context69) {
                while (1) {
                  switch (_context69.prev = _context69.next) {
                    case 0:
                      opts = _args69.length > 0 && _args69[0] !== undefined ? _args69[0] : {};
                      _context69.next = 3;
                      return this.withContextDo( /*#__PURE__*/function () {
                        var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee67(ctx) {
                          var selectedMethod, result, msg;
                          return regeneratorRuntime.wrap(function _callee67$(_context68) {
                            while (1) {
                              switch (_context68.prev = _context68.next) {
                                case 0:
                                  selectedMethod = ctx.selectedMethod;

                                  if (selectedMethod) {
                                    _context68.next = 3;
                                    break;
                                  }

                                  return _context68.abrupt("return", {
                                    statusMessage: "no message selected"
                                  });

                                case 3:
                                  if (!(typeof ctx.target[selectedMethod.name] !== "function")) {
                                    _context68.next = 5;
                                    break;
                                  }

                                  return _context68.abrupt("return", {
                                    statusMessage: "".concat(selectedMethod.name, " is not a method of ").concat(_this8.target)
                                  });

                                case 5:
                                  _context68.prev = 5;
                                  _context68.next = 8;
                                  return ctx.target[selectedMethod.name]();

                                case 8:
                                  result = _context68.sent;
                                  msg = "Running ".concat(selectedMethod.name);
                                  if (typeof result !== "undefined") msg += ", returns ".concat(result);
                                  return _context68.abrupt("return", {
                                    statusMessage: msg
                                  });

                                case 14:
                                  _context68.prev = 14;
                                  _context68.t0 = _context68["catch"](5);
                                  return _context68.abrupt("return", {
                                    statusMessage: _context68.t0.toString()
                                  });

                                case 17:
                                case "end":
                                  return _context68.stop();
                              }
                            }
                          }, _callee67, null, [[5, 14]]);
                        }));

                        return function (_x34) {
                          return _ref20.apply(this, arguments);
                        };
                      }());

                    case 3:
                      _yield$this$withConte9 = _context69.sent;
                      statusMessage = _yield$this$withConte9.statusMessage;
                      if (statusMessage && !opts.silent) this.view.setStatusMessage(statusMessage);

                    case 6:
                    case "end":
                      return _context69.stop();
                  }
                }
              }, _callee68, this);
            }));

            function ObjectEditorModel_interactivelyRunSelectedMethod_() {
              return _ObjectEditorModel_interactivelyRunSelectedMethod_.apply(this, arguments);
            }

            return ObjectEditorModel_interactivelyRunSelectedMethod_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ObjectEditorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              context: {},
              editorPlugin: {
                readOnly: true,
                derived: true,
                after: ["submorphs"],
                get: function get() {
                  var ed = this.ui.sourceEditor;
                  var p = ed.pluginFind(function (p) {
                    return p.isEditorPlugin;
                  });
                  if (!p) p = ed.addPlugin(new __varRecorder__$1.JavaScriptEditorPlugin(__varRecorder__$1.config.codeEditor.defaultTheme));
                  return p;
                }
              },
              target: {
                get: function get() {
                  return this.context.target;
                }
              },
              isObjectEditor: {
                readOnly: true,
                get: function get() {
                  return true;
                }
              },
              systemInterface: {
                readOnly: true,
                get: function get() {
                  return this.editorPlugin.evalEnvironment.systemInterface;
                }
              },
              expose: {
                get: function get() {
                  return ["browse", "commands", "keybindings", "onWindowClose"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "inspect object button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "open object inspector for target";
                    }
                  }, {
                    model: "publish button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "freeze target";
                    }
                  }, {
                    model: "choose target button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "choose target";
                    }
                  }, {
                    model: "add button",
                    signal: "fire",
                    handler: "interactivelyAddObjectPackageAndMethod"
                  }, {
                    model: "remove button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "remove method or class";
                    }
                  }, {
                    model: "fork package button",
                    signal: "fire",
                    handler: "interactivelyForkPackage"
                  }, {
                    model: "open in browser button",
                    signal: "fire",
                    handler: "execCommand",
                    updater: function updater($upd) {
                      $upd("open class in system browser", {
                        klass: this.targetObj.selectedClass
                      });
                    }
                  }, {
                    model: "save button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "save source";
                    }
                  }, {
                    model: "run method button",
                    signal: "fire",
                    handler: "execCommand",
                    converter: function converter() {
                      return "run selected method";
                    }
                  }, {
                    model: "toggle imports button",
                    signal: "fire",
                    handler: "toggleShowingImports"
                  }, {
                    target: "source editor",
                    signal: "textChange",
                    handler: "updateUnsavedChangeIndicatorDebounced"
                  }, {
                    target: "class tree",
                    signal: "selectedNode",
                    handler: "onClassTreeSelection"
                  }, {
                    target: "class tree",
                    signal: "contextMenuRequested",
                    handler: "contextMenuForClassTree"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/index.js";
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
          start: 1695,
          end: 63805
        });
      }(__varRecorder__$1.ViewModel);
      __varRecorder__$1.ObjectEditorModel = ObjectEditorModel;
      __varRecorder__$1.ObjectEditorModel = ObjectEditorModel;
      var ImportControllerModel = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/index.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ImportControllerModel") && typeof __lively_classholder__.ImportControllerModel === "function" ? __lively_classholder__.ImportControllerModel : __lively_classholder__.ImportControllerModel = function ImportControllerModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "getExpandedWidth",
          value: function ImportControllerModel_getExpandedWidth_() {
            return Math.min(400, Math.max(300, this.ui.importsList.listItemContainer.width));
          }
        }, {
          key: "openModuleInBrowser",
          value: function ImportControllerModel_openModuleInBrowser_() {
            this.view.execCommand("open selected module in system browser");
          }
        }, {
          key: "setModule",
          value: function () {
            var _ImportControllerModel_setModule_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee69(moduleId) {
              return regeneratorRuntime.wrap(function _callee69$(_context70) {
                while (1) {
                  switch (_context70.prev = _context70.next) {
                    case 0:
                      this.module = moduleId;
                      _context70.next = 3;
                      return this.updateImports();

                    case 3:
                    case "end":
                      return _context70.stop();
                  }
                }
              }, _callee69, this);
            }));

            function ImportControllerModel_setModule_(_x35) {
              return _ImportControllerModel_setModule_.apply(this, arguments);
            }

            return ImportControllerModel_setModule_;
          }()
        }, {
          key: "doNewNPMSearch",
          value: function () {
            var _ImportControllerModel_doNewNPMSearch_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee70(query) {
              var i, url, found;
              return regeneratorRuntime.wrap(function _callee70$(_context71) {
                while (1) {
                  switch (_context71.prev = _context71.next) {
                    case 0:
                      i = __varRecorder__$1.LoadingIndicator.open("fetching information...");
                      i.center = this.view.owner.globalBounds().center();
                      url = "https://registry.npmjs.com/-/v1/search?text=".concat(query, "&size=50");
                      _context71.next = 5;
                      return __varRecorder__$1.resource(url).makeProxied().readJson();

                    case 5:
                      found = _context71.sent;
                      i.remove();
                      return _context71.abrupt("return", found.objects.map(function (p) {
                        var _p$package = p["package"],
                            name = _p$package.name,
                            version = _p$package.version;
                        return {
                          isListItem: true,
                          string: "".concat(name, "@").concat(version),
                          value: p
                        };
                      }));

                    case 8:
                    case "end":
                      return _context71.stop();
                  }
                }
              }, _callee70, this);
            }));

            function ImportControllerModel_doNewNPMSearch_(_x36) {
              return _ImportControllerModel_doNewNPMSearch_.apply(this, arguments);
            }

            return ImportControllerModel_doNewNPMSearch_;
          }()
        }, {
          key: "updateImports",
          value: function () {
            var _ImportControllerModel_updateImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
              var importsList, items;
              return regeneratorRuntime.wrap(function _callee72$(_context73) {
                while (1) {
                  switch (_context73.prev = _context73.next) {
                    case 0:
                      importsList = this.ui.importsList;
                      _context73.next = 3;
                      return this.editor.withContextDo( /*#__PURE__*/function () {
                        var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee71(ctx) {
                          var module, imports, items;
                          return regeneratorRuntime.wrap(function _callee71$(_context72) {
                            while (1) {
                              switch (_context72.prev = _context72.next) {
                                case 0:
                                  _context72.next = 2;
                                  return ctx.selectedModule;

                                case 2:
                                  module = _context72.sent;

                                  if (module) {
                                    _context72.next = 5;
                                    break;
                                  }

                                  return _context72.abrupt("return", []);

                                case 5:
                                  _context72.next = 7;
                                  return module.imports();

                                case 7:
                                  imports = _context72.sent;
                                  items = imports.map(function (ea) {
                                    var label = [];
                                    var alias = ea.local !== ea.imported && ea.imported !== "default" ? ea.local : null;
                                    if (alias) label.push("".concat(ea.imported, " as "), {});
                                    var importName = alias || ea.local || "??????";
                                    label.push(importName, {
                                      fontWeight: "bold"
                                    });
                                    label.push(" from ".concat(__varRecorder__$1.string.truncate(ea.fromModule, 25, "...")), {
                                      opacity: 0.5
                                    });
                                    var tooltip = label.slice();
                                    tooltip[2] = " from ".concat(ea.fromModule);
                                    tooltip[3] = {};
                                    return {
                                      isListItem: true,
                                      value: ea,
                                      label: label,
                                      tooltip: tooltip,
                                      annotation: ea.fromModule.includes("jspm.dev") ? __varRecorder__$1.Icon.textAttribute("npm", {
                                        fontSize: 18,
                                        fontWeight: "400",
                                        textStyleClasses: ["fab"]
                                      }) : []
                                    };
                                  });
                                  return _context72.abrupt("return", items);

                                case 10:
                                case "end":
                                  return _context72.stop();
                              }
                            }
                          }, _callee71);
                        }));

                        return function (_x37) {
                          return _ref21.apply(this, arguments);
                        };
                      }());

                    case 3:
                      items = _context73.sent;
                      importsList.items = [];
                      importsList.items = items;

                    case 6:
                    case "end":
                      return _context73.stop();
                  }
                }
              }, _callee72, this);
            }));

            function ImportControllerModel_updateImports_() {
              return _ImportControllerModel_updateImports_.apply(this, arguments);
            }

            return ImportControllerModel_updateImports_;
          }()
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Enter",
              command: "open selected module in system browser"
            }];
          }
        }, {
          key: "commands",
          get: function get() {
            var _this9 = this;

            return [{
              name: "open selected module in system browser",
              exec: function () {
                var _exec17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee73(importController) {
                  var requester, importSpec, _ref22, fromModule, local;

                  return regeneratorRuntime.wrap(function _callee73$(_context74) {
                    while (1) {
                      switch (_context74.prev = _context74.next) {
                        case 0:
                          requester = _this9.view.getWindow();
                          importSpec = _this9.ui.importsList.selection;

                          if (importSpec) {
                            _context74.next = 5;
                            break;
                          }

                          requester.setStatusMessage("no module selected");
                          return _context74.abrupt("return", null);

                        case 5:
                          _ref22 = importSpec || {}, fromModule = _ref22.fromModule, local = _ref22.local;

                          if (fromModule.startsWith(".")) {
                            fromModule = System.decanonicalize(fromModule, _this9.module);
                          }

                          return _context74.abrupt("return", _this9.world().execCommand("open browser", {
                            moduleName: fromModule,
                            codeEntity: local
                          }));

                        case 8:
                        case "end":
                          return _context74.stop();
                      }
                    }
                  }, _callee73);
                }));

                function exec(_x38) {
                  return _exec17.apply(this, arguments);
                }

                return exec;
              }()
            }];
          }
        }, {
          key: "refreshInterface",
          value: function () {
            var _ImportControllerModel_refreshInterface_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
              return regeneratorRuntime.wrap(function _callee74$(_context75) {
                while (1) {
                  switch (_context75.prev = _context75.next) {
                    case 0:
                      _context75.next = 2;
                      return this.updateImports();

                    case 2:
                      _context75.next = 4;
                      return this.editor.updateKnownGlobals();

                    case 4:
                      this.editor.ui.sourceEditor.focus();

                    case 5:
                    case "end":
                      return _context75.stop();
                  }
                }
              }, _callee74, this);
            }));

            function ImportControllerModel_refreshInterface_() {
              return _ImportControllerModel_refreshInterface_.apply(this, arguments);
            }

            return ImportControllerModel_refreshInterface_;
          }()
        }, {
          key: "interactivelyAddImport",
          value: function () {
            var _ImportControllerModel_interactivelyAddImport_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee80() {
              var _this10 = this;

              var origSource, editor, requester, importStyle, importStmt, jspmModule, _jspmModule$selected, _jspmModule$package, version, name, system, choices, insertions, sourceEditor;

              return regeneratorRuntime.wrap(function _callee80$(_context81) {
                while (1) {
                  switch (_context81.prev = _context81.next) {
                    case 0:
                      editor = this.editor;
                      requester = this.view.getWindow();
                      _context81.prev = 2;
                      _context81.next = 5;
                      return editor.withContextDo(function (ctx) {
                        return !ctx.selectedClass;
                      });

                    case 5:
                      if (!_context81.sent) {
                        _context81.next = 8;
                        break;
                      }

                      requester.showError(new Error("No class selected"));
                      return _context81.abrupt("return");

                    case 8:
                      _context81.next = 10;
                      return this.world().multipleChoicePrompt("Select import style:", {
                        requester: requester,
                        width: 400,
                        choices: new Map([["An already loaded module (via exports)", "system"], ["A NPM Module via jspm.dev", "jspm"], ["A custom module (via free text)", "free text"]])
                      });

                    case 10:
                      importStyle = _context81.sent;

                      if (!(importStyle === undefined)) {
                        _context81.next = 13;
                        break;
                      }

                      return _context81.abrupt("return");

                    case 13:
                      importStmt = "import ... from \"module\";";

                      if (!(importStyle === "jspm")) {
                        _context81.next = 25;
                        break;
                      }

                      _context81.next = 17;
                      return this.world().filterableListPrompt("Browse NPM", [], {
                        requester: requester,
                        onFilter: __varRecorder__$1.fun.debounce(500, /*#__PURE__*/function () {
                          var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee75(param) {
                            var list;
                            return regeneratorRuntime.wrap(function _callee75$(_context76) {
                              while (1) {
                                switch (_context76.prev = _context76.next) {
                                  case 0:
                                    list = param.target.owner;

                                    if (!(list._lastTerm === list.input)) {
                                      _context76.next = 3;
                                      break;
                                    }

                                    return _context76.abrupt("return");

                                  case 3:
                                    list._lastTerm = list.input;
                                    _context76.next = 6;
                                    return _this10.doNewNPMSearch(list.input);

                                  case 6:
                                    list.items = _context76.sent;

                                  case 7:
                                  case "end":
                                    return _context76.stop();
                                }
                              }
                            }, _callee75);
                          }));

                          return function (_x39) {
                            return _ref23.apply(this, arguments);
                          };
                        }()),
                        fuzzy: true
                      });

                    case 17:
                      jspmModule = _context81.sent;

                      if (!(jspmModule.status !== "accepted")) {
                        _context81.next = 20;
                        break;
                      }

                      return _context81.abrupt("return");

                    case 20:
                      _jspmModule$selected = _slicedToArray(jspmModule.selected, 1);
                      jspmModule = _jspmModule$selected[0];
                      _jspmModule$package = jspmModule["package"], version = _jspmModule$package.version, name = _jspmModule$package.name;
                      importStmt = "import ... from \"https://jspm.dev/".concat(name, "@").concat(version, "\";");
                      importStyle = "free text";

                    case 25:
                      if (!(importStyle === "free text")) {
                        _context81.next = 46;
                        break;
                      }

                    case 26:

                      _context81.next = 29;
                      return this.world().editPrompt("Enter import statement:", {
                        requester: requester,
                        input: importStmt,
                        mode: "js"
                      });

                    case 29:
                      importStmt = _context81.sent;

                      if (importStmt) {
                        _context81.next = 32;
                        break;
                      }

                      return _context81.abrupt("return");

                    case 32:
                      _context81.prev = 32;

                      __varRecorder__$1.parse(importStmt);

                      _context81.next = 40;
                      break;

                    case 36:
                      _context81.prev = 36;
                      _context81.t0 = _context81["catch"](32);
                      requester.setStatusMessage(_context81.t0.message);
                      return _context81.abrupt("continue", 26);

                    case 40:
                      return _context81.abrupt("break", 43);

                    case 43:
                      _context81.next = 45;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee76(ctx) {
                          var origSource;
                          return regeneratorRuntime.wrap(function _callee76$(_context77) {
                            while (1) {
                              switch (_context77.prev = _context77.next) {
                                case 0:
                                  _context77.next = 2;
                                  return ctx.selectedModule.source();

                                case 2:
                                  origSource = _context77.sent;
                                  ctx.isSaving = true;
                                  _context77.next = 6;
                                  return ctx.selectedModule.changeSource(importStmt + "\n" + origSource);

                                case 6:
                                  return _context77.abrupt("return", origSource);

                                case 7:
                                case "end":
                                  return _context77.stop();
                              }
                            }
                          }, _callee76);
                        }));

                        return function (_x40) {
                          return _ref24.apply(this, arguments);
                        };
                      }(), {
                        importStmt: importStmt
                      });

                    case 45:
                      origSource = _context81.sent;

                    case 46:
                      if (!(importStyle === "system")) {
                        _context81.next = 61;
                        break;
                      }

                      _context81.next = 49;
                      return editor.editorPlugin.systemInterface();

                    case 49:
                      system = _context81.sent;
                      _context81.next = 52;
                      return __varRecorder__$1.interactivelyChooseImports(system, {
                        requester: requester
                      });

                    case 52:
                      choices = _context81.sent;

                      if (choices) {
                        _context81.next = 55;
                        break;
                      }

                      return _context81.abrupt("return", null);

                    case 55:
                      _context81.next = 57;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee77(ctx) {
                          var origSource;
                          return regeneratorRuntime.wrap(function _callee77$(_context78) {
                            while (1) {
                              switch (_context78.prev = _context78.next) {
                                case 0:
                                  _context78.next = 2;
                                  return ctx.selectedModule.source();

                                case 2:
                                  origSource = _context78.sent;
                                  ctx.isSaving = true;
                                  _context78.next = 6;
                                  return ctx.selectedModule.addImports(choices);

                                case 6:
                                  return _context78.abrupt("return", origSource);

                                case 7:
                                case "end":
                                  return _context78.stop();
                              }
                            }
                          }, _callee77);
                        }));

                        return function (_x41) {
                          return _ref25.apply(this, arguments);
                        };
                      }(), {
                        choices: choices
                      });

                    case 57:
                      origSource = _context81.sent;
                      insertions = choices.map(function (_ref26) {
                        var local = _ref26.local,
                            exported = _ref26.exported;
                        return exported === "default" ? local : exported;
                      }).join("\n");
                      sourceEditor = editor.ui.sourceEditor;
                      sourceEditor.insertTextAndSelect(insertions, sourceEditor.cursorPosition);

                    case 61:
                      _context81.next = 68;
                      break;

                    case 63:
                      _context81.prev = 63;
                      _context81.t1 = _context81["catch"](2);
                      _context81.next = 67;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref27 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee78(ctx) {
                          return regeneratorRuntime.wrap(function _callee78$(_context79) {
                            while (1) {
                              switch (_context79.prev = _context79.next) {
                                case 0:
                                  _context79.t0 = origSource;

                                  if (!_context79.t0) {
                                    _context79.next = 5;
                                    break;
                                  }

                                  _context79.next = 4;
                                  return ctx.selectedModule.changeSource(origSource);

                                case 4:
                                  _context79.t0 = _context79.sent;

                                case 5:
                                  return _context79.abrupt("return", _context79.t0);

                                case 6:
                                case "end":
                                  return _context79.stop();
                              }
                            }
                          }, _callee78);
                        }));

                        return function (_x42) {
                          return _ref27.apply(this, arguments);
                        };
                      }(), {
                        origSource: origSource
                      });

                    case 67:
                      requester.showError(_context81.t1);

                    case 68:
                      _context81.prev = 68;
                      _context81.next = 71;
                      return this.updateImports();

                    case 71:
                      _context81.next = 73;
                      return editor.updateKnownGlobals();

                    case 73:
                      _context81.next = 75;
                      return editor.withContextDo( /*#__PURE__*/function () {
                        var _ref28 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee79(ctx) {
                          return regeneratorRuntime.wrap(function _callee79$(_context80) {
                            while (1) {
                              switch (_context80.prev = _context80.next) {
                                case 0:
                                  ctx.isSaving = false;

                                case 1:
                                case "end":
                                  return _context80.stop();
                              }
                            }
                          }, _callee79);
                        }));

                        return function (_x43) {
                          return _ref28.apply(this, arguments);
                        };
                      }());

                    case 75:
                      return _context81.finish(68);

                    case 76:
                    case "end":
                      return _context81.stop();
                  }
                }
              }, _callee80, this, [[2, 63, 68, 76], [32, 36]]);
            }));

            function ImportControllerModel_interactivelyAddImport_() {
              return _ImportControllerModel_interactivelyAddImport_.apply(this, arguments);
            }

            return ImportControllerModel_interactivelyAddImport_;
          }()
        }, {
          key: "interactivelyRemoveImport",
          value: function () {
            var _ImportControllerModel_interactivelyRemoveImport_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee82() {
              var importsList, requester, sels, really, error;
              return regeneratorRuntime.wrap(function _callee82$(_context83) {
                while (1) {
                  switch (_context83.prev = _context83.next) {
                    case 0:
                      importsList = this.ui.importsList;
                      requester = this.view.getWindow();
                      sels = importsList.selections;

                      if (!(!sels || !sels.length)) {
                        _context83.next = 5;
                        break;
                      }

                      return _context83.abrupt("return");

                    case 5:
                      _context83.next = 7;
                      return this.world().confirm(["Really remove these imports?\n", {}, __varRecorder__$1.arr.pluck(sels, "local").join("\n"), {
                        fontWeight: "normal",
                        fontSize: 16
                      }], {
                        requester: requester
                      });

                    case 7:
                      really = _context83.sent;

                      if (really) {
                        _context83.next = 10;
                        break;
                      }

                      return _context83.abrupt("return");

                    case 10:
                      _context83.next = 12;
                      return this.editor.withContextDo( /*#__PURE__*/function () {
                        var _ref29 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee81(ctx) {
                          var m, origSource;
                          return regeneratorRuntime.wrap(function _callee81$(_context82) {
                            while (1) {
                              switch (_context82.prev = _context82.next) {
                                case 0:
                                  _context82.prev = 0;
                                  m = ctx.selectedModule;
                                  _context82.next = 4;
                                  return m.source();

                                case 4:
                                  origSource = _context82.sent;
                                  _context82.next = 7;
                                  return m.removeImports(sels);

                                case 7:
                                  return _context82.abrupt("return", false);

                                case 10:
                                  _context82.prev = 10;
                                  _context82.t0 = _context82["catch"](0);
                                  _context82.t1 = origSource;

                                  if (!_context82.t1) {
                                    _context82.next = 16;
                                    break;
                                  }

                                  _context82.next = 16;
                                  return m.changeSource(origSource);

                                case 16:
                                  return _context82.abrupt("return", _context82.t0);

                                case 17:
                                case "end":
                                  return _context82.stop();
                              }
                            }
                          }, _callee81, null, [[0, 10]]);
                        }));

                        return function (_x44) {
                          return _ref29.apply(this, arguments);
                        };
                      }(), {
                        sels: sels
                      });

                    case 12:
                      error = _context83.sent;
                      importsList.selection = null;
                      if (error) requester.showError(error);
                      this.refreshInterface();

                    case 16:
                    case "end":
                      return _context83.stop();
                  }
                }
              }, _callee82, this);
            }));

            function ImportControllerModel_interactivelyRemoveImport_() {
              return _ImportControllerModel_interactivelyRemoveImport_.apply(this, arguments);
            }

            return ImportControllerModel_interactivelyRemoveImport_;
          }()
        }, {
          key: "interactivelyRemoveUnusedImports",
          value: function () {
            var _ImportControllerModel_interactivelyRemoveUnusedImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee84() {
              var _requester, _origSource, toRemove;

              return regeneratorRuntime.wrap(function _callee84$(_context85) {
                while (1) {
                  switch (_context85.prev = _context85.next) {
                    case 0:
                      _context85.prev = 0;
                      _requester = this.view.getWindow();
                      _context85.next = 4;
                      return this.editor.withContextDo( /*#__PURE__*/function () {
                        var _ref30 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee83(ctx) {
                          return regeneratorRuntime.wrap(function _callee83$(_context84) {
                            while (1) {
                              switch (_context84.prev = _context84.next) {
                                case 0:
                                  _context84.next = 2;
                                  return ctx.selectedModule.source();

                                case 2:
                                  return _context84.abrupt("return", _context84.sent);

                                case 3:
                                case "end":
                                  return _context84.stop();
                              }
                            }
                          }, _callee83);
                        }));

                        return function (_x45) {
                          return _ref30.apply(this, arguments);
                        };
                      }());

                    case 4:
                      _origSource = _context85.sent;
                      _context85.next = 7;
                      return __varRecorder__$1.chooseUnusedImports(_origSource, {
                        requester: _requester
                      });

                    case 7:
                      toRemove = _context85.sent;

                      if (!(!toRemove || !toRemove.changes || !toRemove.changes.length)) {
                        _context85.next = 11;
                        break;
                      }

                      _requester.setStatusMessage("Nothing to remove");

                      return _context85.abrupt("return");

                    case 11:
                      _context85.next = 13;
                      return this.editor.withContextDo(function (ctx) {
                        ctx.selectedModule.removeImports(toRemove.removedImports);
                      }, {
                        toRemove: toRemove
                      });

                    case 13:
                      _requester.setStatusMessage("Imports removed");

                      _context85.next = 24;
                      break;

                    case 16:
                      _context85.prev = 16;
                      _context85.t0 = _context85["catch"](0);
                      _context85.t1 = origSource;

                      if (!_context85.t1) {
                        _context85.next = 22;
                        break;
                      }

                      _context85.next = 22;
                      return this.editor.withContextDo(function (ctx) {
                        return ctx.selectedModule.changeSource(origSource);
                      }, {
                        origSource: origSource
                      });

                    case 22:
                      requester.setStatusMessage(_context85.t0.toString());
                      return _context85.abrupt("return");

                    case 24:
                      _context85.next = 26;
                      return this.updateImports();

                    case 26:
                      _context85.next = 28;
                      return this.editor.updateKnownGlobals();

                    case 28:
                      this.editor.ui.sourceEditor.focus();

                    case 29:
                    case "end":
                      return _context85.stop();
                  }
                }
              }, _callee84, this, [[0, 16]]);
            }));

            function ImportControllerModel_interactivelyRemoveUnusedImports_() {
              return _ImportControllerModel_interactivelyRemoveUnusedImports_.apply(this, arguments);
            }

            return ImportControllerModel_interactivelyRemoveUnusedImports_;
          }()
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ImportControllerModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              editor: {
                get: function get() {
                  return this.view.owner.viewModel;
                }
              },
              systemInterface: {
                get: function get() {
                  return this.editor && this.editor.systemInterface;
                }
              },
              module: {
                set: function set(moduleOrId) {
                  var id = !moduleOrId ? null : typeof moduleOrId === "string" ? moduleOrId : moduleOrId.id;
                  this.setProperty("module", id);
                }
              },
              expose: {
                get: function get() {
                  return ["commands", "keybindings", "setModule", "updateImports", "doNewNPMSearch", "getExpandedWidth"];
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    model: "open button",
                    signal: "fire",
                    handler: "openModuleInBrowser"
                  }, {
                    model: "add import button",
                    signal: "fire",
                    handler: "interactivelyAddImport"
                  }, {
                    model: "remove import button",
                    signal: "fire",
                    handler: "interactivelyRemoveImport"
                  }, {
                    model: "cleanup button",
                    signal: "fire",
                    handler: "interactivelyRemoveUnusedImports"
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/index.js";
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
          start: 63813,
          end: 75040
        });
      }(__varRecorder__$1.ViewModel);
      __varRecorder__$1.ImportControllerModel = ImportControllerModel;
      __varRecorder__$1.ImportControllerModel = ImportControllerModel;
      var ImportController$1 = function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/index.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("ImportController") && typeof __lively_classholder__.ImportController === "function" ? __lively_classholder__.ImportController : __lively_classholder__.ImportController = function ImportController(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: Symbol["for"]("lively-instance-initialize"),
          value: function ImportController_initialize_(props) {
            var _this;

            _this = initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), Symbol["for"]("lively-instance-initialize"), this).call(this, props);
            this.build();

            __varRecorder__$1.connect(this.get("openButton"), "fire", this, "execCommand", {
              converter: function converter() {
                return "open selected module in system browser";
              }
            });

            return _this;
          }
        }, {
          key: "setModule",
          value: function () {
            var _ImportController_setModule_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee85(moduleId) {
              return regeneratorRuntime.wrap(function _callee85$(_context86) {
                while (1) {
                  switch (_context86.prev = _context86.next) {
                    case 0:
                      this.module = moduleId;
                      _context86.next = 3;
                      return this.updateImports();

                    case 3:
                    case "end":
                      return _context86.stop();
                  }
                }
              }, _callee85, this);
            }));

            function ImportController_setModule_(_x46) {
              return _ImportController_setModule_.apply(this, arguments);
            }

            return ImportController_setModule_;
          }()
        }, {
          key: "build",
          value: function ImportController_build_() {
            var listStyle = {
              borderWidthTop: 1,
              borderWidthBottom: 1,
              borderColor: __varRecorder__$1.Color.gray,
              fontSize: 14,
              fontFamily: "IBM Plex Sans",
              type: "list"
            };
            var btnStyle = {
              type: "button",
              extent: __varRecorder__$1.pt(26, 24)
            };
            this.submorphs = [Object.assign({}, listStyle, {
              name: "importsList",
              multiSelect: true,
              borderBottom: {
                width: 1,
                color: __varRecorder__$1.Color.gray
              }
            }), {
              name: "buttons",
              fill: __varRecorder__$1.Color.transparent,
              layout: new __varRecorder__$1.TilingLayout({
                align: "center",
                axisAlign: "center",
                spacing: 2
              }),
              submorphs: [Object.assign({}, btnStyle, {
                name: "addImportButton",
                label: __varRecorder__$1.Icon.makeLabel("plus"),
                tooltip: "add new import"
              }), Object.assign({}, btnStyle, {
                name: "removeImportButton",
                label: __varRecorder__$1.Icon.makeLabel("minus"),
                tooltip: "remove selected import(s)"
              }), Object.assign({}, btnStyle, {
                name: "cleanupButton",
                label: "cleanup",
                tooltip: "remove unused imports"
              }), Object.assign({}, btnStyle, {
                name: "openButton",
                label: "open",
                tooltip: "open selected module"
              })]
            }];
            this.layout = new __varRecorder__$1.GridLayout({
              renderViaCSS: true,
              grid: [["importsList"], ["buttons"]]
            });
            this.layout.row(1).fixed = 30;
            this.layout.row(1).col(0).group.resize = false;
            this.layout.row(1).col(0).group.align = "center";
            this.layout.row(1).col(0).group.alignedProperty = "center";
            this.applyLayoutIfNeeded();
            [this.get("openButton"), this.get("cleanupButton"), this.get("removeImportButton"), this.get("addImportButton")].forEach(function (btn) {
              return btn.extent = btnStyle.extent;
            });
          }
        }, {
          key: "doNewNPMSearch",
          value: function () {
            var _ImportController_doNewNPMSearch_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee86(query) {
              var i, url, found;
              return regeneratorRuntime.wrap(function _callee86$(_context87) {
                while (1) {
                  switch (_context87.prev = _context87.next) {
                    case 0:
                      i = __varRecorder__$1.LoadingIndicator.open("fetching information...");
                      i.center = this.owner.globalBounds().center();
                      url = "https://registry.npmjs.com/-/v1/search?text=".concat(query, "&size=50");
                      _context87.next = 5;
                      return __varRecorder__$1.resource(url).makeProxied().readJson();

                    case 5:
                      found = _context87.sent;
                      i.remove();
                      return _context87.abrupt("return", found.objects.map(function (p) {
                        var _p$package2 = p["package"],
                            name = _p$package2.name,
                            version = _p$package2.version;
                        return {
                          isListItem: true,
                          string: "".concat(name, "@").concat(version),
                          value: p
                        };
                      }));

                    case 8:
                    case "end":
                      return _context87.stop();
                  }
                }
              }, _callee86, this);
            }));

            function ImportController_doNewNPMSearch_(_x47) {
              return _ImportController_doNewNPMSearch_.apply(this, arguments);
            }

            return ImportController_doNewNPMSearch_;
          }()
        }, {
          key: "updateImports",
          value: function () {
            var _ImportController_updateImports_ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee88() {
              var items;
              return regeneratorRuntime.wrap(function _callee88$(_context89) {
                while (1) {
                  switch (_context89.prev = _context89.next) {
                    case 0:
                      _context89.next = 2;
                      return this.owner.withContextDo( /*#__PURE__*/function () {
                        var _ref31 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee87(ctx) {
                          var module, imports, items;
                          return regeneratorRuntime.wrap(function _callee87$(_context88) {
                            while (1) {
                              switch (_context88.prev = _context88.next) {
                                case 0:
                                  _context88.next = 2;
                                  return ctx.selectedModule;

                                case 2:
                                  module = _context88.sent;

                                  if (module) {
                                    _context88.next = 5;
                                    break;
                                  }

                                  return _context88.abrupt("return", []);

                                case 5:
                                  _context88.next = 7;
                                  return module.imports();

                                case 7:
                                  imports = _context88.sent;
                                  items = imports.map(function (ea) {
                                    var label = [];
                                    var alias = ea.local !== ea.imported && ea.imported !== "default" ? ea.local : null;
                                    if (alias) label.push("".concat(ea.imported, " as "), {});
                                    var importName = alias || ea.local || "??????";
                                    label.push(importName, {
                                      fontWeight: "bold"
                                    });
                                    label.push(" from ".concat(__varRecorder__$1.string.truncate(ea.fromModule, 25, "...")), {
                                      opacity: 0.5
                                    });
                                    var tooltip = label.slice();
                                    tooltip[2] = " from ".concat(ea.fromModule);
                                    tooltip[3] = {};
                                    return {
                                      isListItem: true,
                                      value: ea,
                                      label: label,
                                      tooltip: tooltip,
                                      annotation: ea.fromModule.includes("jspm.dev") ? __varRecorder__$1.Icon.textAttribute("npm", {
                                        fontSize: 18,
                                        fontWeight: "400",
                                        textStyleClasses: ["fab"]
                                      }) : []
                                    };
                                  });
                                  return _context88.abrupt("return", items);

                                case 10:
                                case "end":
                                  return _context88.stop();
                              }
                            }
                          }, _callee87);
                        }));

                        return function (_x48) {
                          return _ref31.apply(this, arguments);
                        };
                      }());

                    case 2:
                      items = _context89.sent;
                      this.getSubmorphNamed("importsList").items = [];
                      this.getSubmorphNamed("importsList").items = items;

                    case 5:
                    case "end":
                      return _context89.stop();
                  }
                }
              }, _callee88, this);
            }));

            function ImportController_updateImports_() {
              return _ImportController_updateImports_.apply(this, arguments);
            }

            return ImportController_updateImports_;
          }()
        }, {
          key: "keybindings",
          get: function get() {
            return [{
              keys: "Enter",
              command: "open selected module in system browser"
            }].concat(initializeClass._get(Object.getPrototypeOf(__lively_class__.prototype), "keybindings", this));
          }
        }, {
          key: "commands",
          get: function get() {
            var _this11 = this;

            return [{
              name: "open selected module in system browser",
              exec: function () {
                var _exec18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee89(importController) {
                  var importSpec, _ref32, fromModule, local;

                  return regeneratorRuntime.wrap(function _callee89$(_context90) {
                    while (1) {
                      switch (_context90.prev = _context90.next) {
                        case 0:
                          importSpec = _this11.getSubmorphNamed("importsList").selection;

                          if (importSpec) {
                            _context90.next = 4;
                            break;
                          }

                          _this11.setStatusMessage("no module selected");

                          return _context90.abrupt("return", null);

                        case 4:
                          _ref32 = importSpec || {}, fromModule = _ref32.fromModule, local = _ref32.local;

                          if (fromModule.startsWith(".")) {
                            fromModule = System.decanonicalize(fromModule, _this11.module);
                          }

                          return _context90.abrupt("return", _this11.world().execCommand("open browser", {
                            moduleName: fromModule,
                            codeEntity: local
                          }));

                        case 7:
                        case "end":
                          return _context90.stop();
                      }
                    }
                  }, _callee89);
                }));

                function exec(_x49) {
                  return _exec18.apply(this, arguments);
                }

                return exec;
              }()
            }];
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "ImportController";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              extent: {
                defaultValue: __varRecorder__$1.pt(300, 600)
              },
              systemInterface: {
                get: function get() {
                  return this.owner.systemInterface;
                }
              },
              module: {
                set: function set(moduleOrId) {
                  var id = !moduleOrId ? null : typeof moduleOrId === "string" ? moduleOrId : moduleOrId.id;
                  this.setProperty("module", id);
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./js/objecteditor/index.js";
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
          start: 75048,
          end: 80953
        });
      }(__varRecorder__$1.Morph);
      __varRecorder__$1.ImportController = ImportController$1;
      __varRecorder__$1.ImportController = ImportController$1;

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/js/objecteditor/ui.cp.js");

      function open() {
        return _open.apply(this, arguments);
      }

      function _open() {
        _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var options,
              title,
              target,
              className,
              methodName,
              textPosition,
              scroll,
              classTreeScroll,
              evalEnvironment,
              loadingIndicator,
              ed,
              winOpts,
              win,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                  title = options.title, target = options.target, className = options.className, methodName = options.methodName, textPosition = options.textPosition, scroll = options.scroll, classTreeScroll = options.classTreeScroll, evalEnvironment = options.evalEnvironment, loadingIndicator = options.loadingIndicator;
                  ed = __varRecorder__.part(__varRecorder__.ObjectEditorLight, {
                    viewModel: __varRecorder__.obj.dissoc(options, "title", "class", "method", "target", "evalEnvironment")
                  });
                  winOpts = {
                    name: "ObjectEditor window",
                    title: options.title || "ObjectEditor"
                  };
                  _context.next = 6;
                  return ed.openInWindow(winOpts);

                case 6:
                  win = _context.sent.activate();

                  if (!target) {
                    _context.next = 11;
                    break;
                  }

                  if (loadingIndicator) loadingIndicator.label = "Connecting to target";
                  _context.next = 11;
                  return ed.browse({
                    title: title,
                    target: target,
                    className: className,
                    methodName: methodName,
                    textPosition: textPosition,
                    scroll: scroll,
                    classTreeScroll: classTreeScroll,
                    evalEnvironment: evalEnvironment
                  });

                case 11:
                  win.doNotAcceptDropsForThisAndSubmorphs();
                  return _context.abrupt("return", win);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _open.apply(this, arguments);
      }

      __varRecorder__.open = open;
      __varRecorder__.component = component;
      __varRecorder__.part = part;
      __varRecorder__.ObjectEditorModel = ObjectEditorModel;
      __varRecorder__.ImportControllerModel = ImportControllerModel;
      __varRecorder__.pt = pt;
      __varRecorder__.rect = rect;
      __varRecorder__.Color = Color;
      __varRecorder__.GridLayout = GridLayout;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.Text = Text;
      __varRecorder__.Icon = Icon;
      __varRecorder__.Tree = Tree;
      __varRecorder__.SystemButton = SystemButton;
      __varRecorder__.DefaultList = DefaultList;
      __varRecorder__.obj = obj;
      __varRecorder__.ImportController = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          defaultViewModel: __varRecorder__.ImportControllerModel,
          name: "import controller",
          extent: __varRecorder__.pt(209.5, 472),
          fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
          layout: new __varRecorder__.GridLayout({
            autoAssign: false,
            columns: [0, {
              width: 200
            }],
            grid: [["imports list"], ["buttons"]],
            groups: {
              buttons: {
                align: "topLeft",
                resize: true
              },
              "imports list": {
                align: "topLeft",
                resize: true
              }
            },
            rows: [0, {
              height: 442
            }, 1, {
              fixed: 30
            }]
          }),
          submorphs: [__varRecorder__.part(__varRecorder__.DefaultList, {
            name: "imports list",
            borderColor: __varRecorder__.Color.rgbHex("CCCCCC"),
            itemBorderRadius: 2,
            borderWidth: {
              left: 0,
              right: 0,
              bottom: 1,
              top: 1
            }
          }), {
            name: "buttons",
            clipMode: "hidden",
            layout: new __varRecorder__.TilingLayout({
              align: "center",
              axisAlign: "center",
              orderByIndex: true,
              spacing: 3,
              wrapSubmorphs: false
            }),
            extent: __varRecorder__.pt(199.1, 29.3),
            fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
            reactsToPointer: false,
            submorphs: [__varRecorder__.part(__varRecorder__.SystemButton, {
              name: "add import button",
              extent: __varRecorder__.pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("plus")
              }],
              tooltip: "add new import"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "remove import button",
              extent: __varRecorder__.pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("minus")
              }],
              tooltip: "remove selected import(s)"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "cleanup button",
              extent: __varRecorder__.pt(53, 24),
              submorphs: [{
                name: "label",
                fontSize: 12,
                textAndAttributes: ["cleanup", null]
              }],
              tooltip: "remove unused imports"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "open button",
              extent: __varRecorder__.pt(38, 24),
              submorphs: [{
                name: "label",
                fontSize: 12,
                textAndAttributes: ["open", null]
              }],
              tooltip: "open module of selected import"
            })]
          }]
        });
      }, {
        module: "lively.ide/js/objecteditor/ui.cp.js",
        "export": "ImportController",
        range: {
          start: 504,
          end: 2549
        }
      }, __varRecorder__.ImportController);
      __varRecorder__.ObjectEditorLight = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          defaultViewModel: __varRecorder__.ObjectEditorModel,
          name: "object editor light",
          extent: __varRecorder__.pt(693.7, 426.9),
          fill: __varRecorder__.Color.transparent,
          reactsToPointer: false,
          layout: new __varRecorder__.GridLayout({
            autoAssign: false,
            columns: [0, {
              fixed: 180
            }, 1, {
              width: 243
            }, 2, {
              fixed: 0
            }],
            grid: [["object commands", "object commands", "object commands"], ["class tree", "frozen warning", "import controller"], ["class tree", "source editor", "import controller"], ["class and method controls", "source editor controls", "import controller"]],
            groups: {
              "class and method controls": {
                align: "topLeft",
                resize: true
              },
              "class tree": {
                align: "topLeft",
                resize: true
              },
              "frozen warning": {
                align: "topLeft",
                resize: true
              },
              "import controller": {
                align: "topLeft",
                resize: true
              },
              "object commands": {
                align: "topLeft",
                resize: true
              },
              "source editor": {
                align: "topLeft",
                resize: true
              },
              "source editor controls": {
                align: "topLeft",
                resize: true
              }
            },
            rows: [0, {
              fixed: 28
            }, 1, {
              fixed: 0
            }, 2, {
              height: 125
            }, 3, {
              fixed: 30
            }]
          }),
          submorphs: [{
            name: "object commands",
            extent: __varRecorder__.pt(727, 28),
            fill: __varRecorder__.Color.transparent,
            layout: new __varRecorder__.TilingLayout({
              orderByIndex: true,
              resizePolicies: [["target controls", {
                height: "fixed",
                width: "fill"
              }]],
              wrapSubmorphs: false
            }),
            reactsToPointer: false,
            submorphs: [{
              name: "target controls",
              clipMode: "hidden",
              extent: __varRecorder__.pt(181.3, 30),
              fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
              layout: new __varRecorder__.TilingLayout({
                axisAlign: "center",
                align: "center",
                orderByIndex: true,
                padding: {
                  height: 0,
                  width: 0,
                  x: 2,
                  y: 2
                },
                reactToSubmorphAnimations: false,
                renderViaCSS: true,
                spacing: 2
              }),
              position: __varRecorder__.pt(271.9, 0),
              reactsToPointer: false,
              submorphs: [__varRecorder__.part(__varRecorder__.SystemButton, {
                name: "inspect object button",
                extent: __varRecorder__.pt(28, 24),
                tooltip: "open object inspector",
                submorphs: [{
                  name: "label",
                  textAndAttributes: __varRecorder__.Icon.textAttribute("cogs")
                }]
              }), __varRecorder__.part(__varRecorder__.SystemButton, {
                extent: __varRecorder__.pt(28, 24),
                name: "publish button",
                tooltip: "Freeze this morph",
                submorphs: [{
                  name: "label",
                  textAndAttributes: __varRecorder__.Icon.textAttribute("cloud-upload-alt")
                }]
              }), __varRecorder__.part(__varRecorder__.SystemButton, {
                name: "choose target button",
                extent: __varRecorder__.pt(26, 24),
                tooltip: "select another target",
                submorphs: [{
                  name: "label",
                  textAndAttributes: __varRecorder__.Icon.textAttribute("crosshairs")
                }]
              })]
            }, {
              name: "freezer controls",
              clipMode: "hidden",
              extent: __varRecorder__.pt(35, 28),
              fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
              position: __varRecorder__.pt(626, 0),
              reactsToPointer: false
            }]
          }, {
            name: "class and method controls",
            extent: __varRecorder__.pt(180, 30),
            fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
            layout: new __varRecorder__.TilingLayout({
              axisAlign: "center",
              align: "center",
              orderByIndex: true,
              padding: {
                height: 0,
                width: 0,
                x: 2,
                y: 2
              },
              reactToSubmorphAnimations: false,
              renderViaCSS: true,
              spacing: 2
            }),
            submorphs: [__varRecorder__.part(__varRecorder__.SystemButton, {
              name: "add button",
              extent: __varRecorder__.pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("plus")
              }],
              tooltip: "add a new method"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "remove button",
              extent: __varRecorder__.pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("minus")
              }],
              tooltip: "remove a method or class"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "fork package button",
              extent: __varRecorder__.pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("code-branch")
              }],
              tooltip: "fork package"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "open in browser button",
              extent: __varRecorder__.pt(26, 24),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("external-link-alt")
              }],
              tooltip: "open selected class in system browser"
            })]
          }, {
            type: __varRecorder__.Text,
            name: "source editor",
            readOnly: false,
            borderColor: __varRecorder__.Color.rgb(204, 204, 204),
            borderWidth: 1,
            clipMode: "auto",
            extent: __varRecorder__.pt(547, 442),
            fixedHeight: true,
            fixedWidth: true,
            fontFamily: "\"IBM Plex Mono\"",
            lineWrapping: "by-chars",
            padding: __varRecorder__.rect(4, 2, 0, 0)
          }, {
            type: __varRecorder__.Tree,
            name: "class tree",
            clipMode: "hidden",
            extent: __varRecorder__.pt(180, 442),
            fontFamily: "\"IBM Plex Sans\"",
            fontSize: 14,
            fill: __varRecorder__.Color.white,
            borderColor: __varRecorder__.Color.rgb(204, 204, 204),
            borderWidth: {
              top: 1,
              bottom: 1,
              left: 0,
              right: 0
            },
            treeData: {}
          }, {
            name: "source editor controls",
            borderColor: {
              bottom: __varRecorder__.Color.rgb(255, 255, 255),
              left: __varRecorder__.Color.rgb(204, 204, 204),
              right: __varRecorder__.Color.rgb(204, 204, 204),
              top: __varRecorder__.Color.rgb(255, 255, 255)
            },
            borderWidth: {
              bottom: 0,
              left: 1,
              right: 1,
              top: 0
            },
            extent: __varRecorder__.pt(547, 30),
            fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
            layout: new __varRecorder__.GridLayout({
              autoAssign: false,
              columns: [0, {
                width: 110
              }, 1, {
                fixed: 30,
                paddingRight: 1
              }, 2, {
                fixed: 30,
                paddingLeft: 1
              }, 3, {
                width: 110
              }, 4, {
                fixed: 74,
                paddingRight: 4
              }],
              grid: [[null, "save button", "run method button", null, "toggle imports button"]],
              groups: {
                "run method button": {
                  align: "topLeft",
                  resize: true
                },
                "save button": {
                  align: "topLeft",
                  resize: true
                },
                "toggle imports button": {
                  align: "topLeft",
                  resize: true
                }
              },
              rows: [0, {
                height: 30,
                paddingBottom: 3,
                paddingTop: 2
              }]
            }),
            submorphs: [__varRecorder__.part(__varRecorder__.SystemButton, {
              name: "save button",
              extent: __varRecorder__.pt(29, 23),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("save")
              }],
              tooltip: "save"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "run method button",
              extent: __varRecorder__.pt(28, 23),
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("play-circle")
              }],
              tooltip: "execute selected method"
            }), __varRecorder__.part(__varRecorder__.SystemButton, {
              name: "toggle imports button",
              extent: __varRecorder__.pt(70, 23),
              submorphs: [{
                name: "label",
                textAndAttributes: ["imports", null]
              }],
              tooltip: "toggle showing imports"
            })]
          }, __varRecorder__.part(__varRecorder__.ImportController, {
            name: "import controller"
          })]
        });
      }, {
        module: "lively.ide/js/objecteditor/ui.cp.js",
        "export": "ObjectEditorLight",
        range: {
          start: 2690,
          end: 9785
        }
      }, __varRecorder__.ObjectEditorLight);
      var ObjectEditorLight = exports('ObjectEditorLight', __varRecorder__.ObjectEditorLight);
      var ImportController = exports('ImportController', __varRecorder__.ImportController);
      __varRecorder__.ObjectEditorLight = ObjectEditorLight;
      __varRecorder__.ImportController = ImportController;
      __varRecorder__.open = open;

    })
  };
}));
