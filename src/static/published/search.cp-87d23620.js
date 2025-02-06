System.register(['./__rootModule___commonjs-entry-2a340242.js', './search-1fb0a4bc.js', './inputs-b8bdf948.js'], (function (exports) {
  'use strict';
  var pt, Rectangle, rect, Color, Icon, part, component, ShadowObject, TilingLayout, Text, SearchWidgetModel, InputLine;
  return {
    setters: [function (module) {
      pt = module.b;
      Rectangle = module.R;
      rect = module.a8;
      Color = module.C;
      Icon = module.j;
      part = module.p;
      component = module.c;
      ShadowObject = module.a5;
      TilingLayout = module.T;
      Text = module.h;
    }, function (module) {
      SearchWidgetModel = module.SearchWidgetModel;
    }, function (module) {
      InputLine = module.I;
    }],
    execute: (function () {

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/text/search.cp.js");
      __varRecorder__.pt = pt;
      __varRecorder__.Rectangle = Rectangle;
      __varRecorder__.rect = rect;
      __varRecorder__.Color = Color;
      __varRecorder__.Icon = Icon;
      __varRecorder__.part = part;
      __varRecorder__.component = component;
      __varRecorder__.ShadowObject = ShadowObject;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.Text = Text;
      __varRecorder__.SearchWidgetModel = SearchWidgetModel;
      __varRecorder__.InputLine = InputLine;
      __varRecorder__.IconButtonDefault = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          type: "button",
          name: "icon button/default",
          borderWidth: 0,
          extent: __varRecorder__.pt(28, 24),
          fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
          opacity: 0.9,
          renderOnGPU: true,
          submorphs: [{
            type: "label",
            name: "label",
            fontColor: __varRecorder__.Color.rgb(255, 255, 255),
            fontSize: 18,
            position: __varRecorder__.pt(5, 2.5),
            lineHeight: 1,
            reactsToPointer: false,
            textAndAttributes: __varRecorder__.Icon.textAttribute("check-circle")
          }]
        });
      }, {
        module: "lively.ide/text/search.cp.js",
        "export": "IconButtonDefault",
        range: {
          start: 425,
          end: 866
        }
      }, __varRecorder__.IconButtonDefault);
      __varRecorder__.IconButtonClicked = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.IconButtonDefault, {
          name: "icon button/clicked",
          opacity: 0.5
        });
      }, {
        module: "lively.ide/text/search.cp.js",
        "export": "IconButtonClicked",
        range: {
          start: 874,
          end: 972
        }
      }, __varRecorder__.IconButtonClicked);
      __varRecorder__.IconButton = __varRecorder__.component["for"](function () {
        return __varRecorder__.component(__varRecorder__.IconButtonDefault, {
          name: "icon button",
          master: {
            auto: __varRecorder__.IconButtonDefault,
            click: __varRecorder__.IconButtonClicked
          }
        });
      }, {
        module: "lively.ide/text/search.cp.js",
        "export": "IconButton",
        range: {
          start: 980,
          end: 1123
        }
      }, __varRecorder__.IconButton);
      __varRecorder__.WidgetButton = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          type: "button",
          name: "widget button",
          borderColor: __varRecorder__.Color.rgb(255, 255, 255),
          borderWidth: 2,
          borderRadius: 5,
          extent: __varRecorder__.pt(57, 20),
          fill: __varRecorder__.Color.rgba(0, 0, 0, 0),
          submorphs: [{
            type: "label",
            name: "label",
            fontColor: __varRecorder__.Color.rgb(255, 255, 255),
            fontSize: 10,
            position: __varRecorder__.pt(5, 3.5),
            reactsToPointer: false,
            textAndAttributes: ["replace all", null]
          }]
        });
      }, {
        module: "lively.ide/text/search.cp.js",
        "export": "WidgetButton",
        range: {
          start: 1131,
          end: 1552
        }
      }, __varRecorder__.WidgetButton);
      __varRecorder__.SearchWidget = __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          name: "search widget",
          defaultViewModel: __varRecorder__.SearchWidgetModel,
          borderColor: __varRecorder__.Color.rgb(204, 204, 204),
          borderRadius: 6,
          dropShadow: new __varRecorder__.ShadowObject({
            color: __varRecorder__.Color.rgba(0, 0, 0, 0.4863477979397931)
          }),
          extent: __varRecorder__.pt(344, 55),
          epiMorph: true,
          fill: __varRecorder__.Color.rgba(0, 0, 0, 0.7471867324206476),
          layout: new __varRecorder__.TilingLayout({
            spacing: 2,
            padding: __varRecorder__.Rectangle.inset(2, 2, 2, 4),
            hugContentsVertically: true,
            axis: "column",
            resizePolicies: [["upper row", {
              height: "fixed",
              width: "fill"
            }], ["lower row", {
              height: "fixed",
              width: "fill"
            }]]
          }),
          position: __varRecorder__.pt(395.3, 571.4),
          renderOnGPU: true,
          submorphs: [{
            name: "upper row",
            fill: __varRecorder__.Color.transparent,
            layout: new __varRecorder__.TilingLayout({
              axis: "row",
              align: "center",
              axisAlign: "center",
              resizePolicies: [["label holder", {
                height: "fixed",
                width: "fixed"
              }]]
            }),
            submorphs: [{
              type: __varRecorder__.InputLine,
              name: "searchInput",
              borderColor: __varRecorder__.Color.rgb(204, 204, 204),
              borderRadius: 2,
              borderWidth: 1,
              extent: __varRecorder__.pt(150, 20),
              fill: __varRecorder__.Color.rgba(204, 204, 204, 0.2),
              cursorColor: __varRecorder__.Color.white,
              fontColor: __varRecorder__.Color.rgb(255, 255, 255),
              fontFamily: "\"IBM Plex Mono\"",
              historyId: "lively.morphic-text search",
              padding: __varRecorder__.rect(2, 2, 0, 0),
              placeholder: "search input",
              submorphs: [{
                type: "label",
                name: "placeholder",
                fontColor: __varRecorder__.Color.rgb(204, 204, 204),
                fontFamily: "IBM Plex Mono",
                nativeCursor: "",
                padding: __varRecorder__.rect(2, 2, 0, 0),
                reactsToPointer: false,
                textAndAttributes: ["search input", null]
              }]
            }, {
              name: "label holder",
              extent: __varRecorder__.pt(74, 15),
              layout: new __varRecorder__.TilingLayout({
                axis: "row"
              }),
              clipMode: "hidden",
              fill: __varRecorder__.Color.transparent,
              submorphs: [{
                type: __varRecorder__.Text,
                fontColor: __varRecorder__.Color.lively,
                fontFamily: "IBM Plex Mono",
                textString: "no search",
                padding: __varRecorder__.rect(7, 0, -7, 0),
                name: "result index label"
              }, {
                type: __varRecorder__.Text,
                fontColor: __varRecorder__.Color.lively.withA(0),
                fontFamily: "IBM Plex Mono",
                textString: "/1000",
                padding: __varRecorder__.rect(0, 0, 4, 0),
                name: "result total label"
              }]
            }, __varRecorder__.part(__varRecorder__.IconButton, {
              name: "nextButton",
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("arrow-alt-circle-down")
              }]
            }), __varRecorder__.part(__varRecorder__.IconButton, {
              name: "prevButton",
              submorphs: [{
                name: "label",
                textAndAttributes: __varRecorder__.Icon.textAttribute("arrow-alt-circle-up")
              }]
            }), __varRecorder__.part(__varRecorder__.IconButton, {
              name: "regexModeButton",
              opacity: 0.5,
              submorphs: [{
                name: "label",
                tooltip: ["Match with Regular Expressions.\n", {
                  fontWeight: "bold"
                }, "Either directly type your regular expression,\nor use JS slash syntax if you want to use RegEx flags."],
                textAndAttributes: __varRecorder__.Icon.textAttribute("circle-question")
              }]
            }), __varRecorder__.part(__varRecorder__.IconButton, {
              name: "caseModeButton",
              opacity: 0.5,
              submorphs: [{
                name: "label",
                tooltip: "Match Case Sensitive",
                textAndAttributes: __varRecorder__.Icon.textAttribute("circle-h")
              }]
            })]
          }, {
            name: "lower row",
            fill: __varRecorder__.Color.transparent,
            layout: new __varRecorder__.TilingLayout({
              axis: "row",
              align: "left",
              spacing: 10,
              padding: __varRecorder__.rect(2, 0, 0, 2)
            }),
            submorphs: [{
              type: __varRecorder__.InputLine,
              name: "replaceInput",
              borderColor: __varRecorder__.Color.rgb(204, 204, 204),
              borderRadius: 2,
              borderWidth: 1,
              extent: __varRecorder__.pt(150, 20),
              fill: __varRecorder__.Color.rgba(204, 204, 204, 0.2),
              fontColor: __varRecorder__.Color.rgb(255, 255, 255),
              cursorColor: __varRecorder__.Color.white,
              fontFamily: "\"IBM Plex Mono\"",
              historyId: "lively.morphic-text replace",
              padding: __varRecorder__.rect(2, 2, 0, 0),
              placeholder: "replace input",
              submorphs: [{
                type: "label",
                name: "placeholder",
                fontColor: __varRecorder__.Color.rgb(204, 204, 204),
                fontFamily: "IBM Plex Mono",
                nativeCursor: "",
                padding: __varRecorder__.rect(2, 2, 0, 0),
                reactsToPointer: false,
                textAndAttributes: ["replace input", null]
              }]
            }, __varRecorder__.part(__varRecorder__.WidgetButton, {
              name: "replaceButton",
              width: 55,
              submorphs: [{
                name: "label",
                textAndAttributes: ["replace", null]
              }]
            }), __varRecorder__.part(__varRecorder__.WidgetButton, {
              name: "replaceAllButton",
              width: 55,
              submorphs: [{
                name: "label",
                textAndAttributes: ["replace all", null]
              }]
            })]
          }]
        });
      }, {
        module: "lively.ide/text/search.cp.js",
        "export": "SearchWidget",
        range: {
          start: 1560,
          end: 6199
        }
      }, __varRecorder__.SearchWidget);
      var SearchWidget = exports('SearchWidget', __varRecorder__.SearchWidget);
      __varRecorder__.SearchWidget = SearchWidget;

    })
  };
}));
