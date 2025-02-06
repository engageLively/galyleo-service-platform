System.register(['./__rootModule___commonjs-entry-2a340242.js', './ui.cp-46daffed.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js', './index-57981d2f.js', './editor-modes-146d3c1c.js', './search-1fb0a4bc.js'], (function (exports) {
  'use strict';
  var createFilter, dataToEsm;
  return {
    setters: [function () {}, function (module) {
      createFilter = module.W;
      dataToEsm = module.X;
    }, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      exports('default', json);

      function json(options) {
        if ( options === void 0 ) options = {};

        var filter = createFilter(options.include, options.exclude);
        var indent = 'indent' in options ? options.indent : '\t';

        return {
          name: 'json',

          // eslint-disable-next-line no-shadow
          transform: function transform(code, id) {
            if (id.slice(-5) !== '.json' || !filter(id)) { return null; }

            try {
              var parsed = JSON.parse(code);
              return {
                code: dataToEsm(parsed, {
                  preferConst: options.preferConst,
                  compact: options.compact,
                  namedExports: options.namedExports,
                  indent: indent
                }),
                map: { mappings: '' }
              };
            } catch (err) {
              var message = 'Could not parse JSON file';
              this.error({ message: message, id: id, cause: err });
              return null;
            }
          }
        };
      }

    })
  };
}));
