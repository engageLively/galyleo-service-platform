System.register(['./__rootModule___commonjs-entry-2a340242.js'], (function (exports) {
  'use strict';
  var component, part, Morph, Text, ViewModel, Icon, TilingLayout, Color, pt, initializeClass;
  return {
    setters: [function (module) {
      component = module.c;
      part = module.p;
      Morph = module.M;
      Text = module.h;
      ViewModel = module.V;
      Icon = module.j;
      TilingLayout = module.T;
      Color = module.C;
      pt = module.b;
      initializeClass = module.i;
    }],
    execute: (function () {

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.ide/studio/zoom-indicator.cp.js");
      __varRecorder__.component = component;
      __varRecorder__.part = part;
      __varRecorder__.Morph = Morph;
      __varRecorder__.Text = Text;
      __varRecorder__.ViewModel = ViewModel;
      __varRecorder__.Icon = Icon;
      __varRecorder__.TilingLayout = TilingLayout;
      __varRecorder__.Color = Color;
      __varRecorder__.pt = pt;

      (function (superclass) {
        var __lively_classholder__ = lively.FreezerRuntime.recorderFor("lively.ide/studio/zoom-indicator.cp.js");

        var __lively_class__ = __lively_classholder__.hasOwnProperty("WorldZoomIndicatorModel") && typeof __lively_classholder__.WorldZoomIndicatorModel === "function" ? __lively_classholder__.WorldZoomIndicatorModel : __lively_classholder__.WorldZoomIndicatorModel = function WorldZoomIndicatorModel(__first_arg__) {
          if (__first_arg__ && __first_arg__[Symbol["for"]("lively-instance-restorer")]) ; else {
            return this[Symbol["for"]("lively-instance-initialize")].apply(this, arguments);
          }
        };

        return initializeClass(__lively_class__, superclass, [{
          key: "isZoomIndicator",
          get: function get() {
            return true;
          }
        }, {
          key: "onMouseDown",
          value: function WorldZoomIndicatorModel_onMouseDown_(evt) {
            $world.resetScaleFactor();
          }
        }, {
          key: "updateZoomLevel",
          value: function WorldZoomIndicatorModel_updateZoomLevel_(newPercentage) {
            this.ui.zoomFactorLabel.textString = newPercentage + " %";
            this.relayout();
          }
        }, {
          key: "relayout",
          value: function WorldZoomIndicatorModel_relayout_() {
            var view = this.view;
            var miniMap = $world.getSubmorphNamed("world mini map");
            var miniMapOffset = 0;
            if (miniMap) miniMapOffset = miniMap.width + 10;
            if ($world.activeSideBars.includes("properties panel")) view.position = __varRecorder__.pt($world.get("properties panel").left - 10 - view.width - miniMapOffset, $world.extent.y - 10 - view.height);else this.view.position = __varRecorder__.pt($world.extent.x - view.width - 10 - miniMapOffset, $world.extent.y - view.height - 10);
          }
        }], [{
          key: Symbol["for"]("__LivelyClassName__"),
          get: function get() {
            return "WorldZoomIndicatorModel";
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              expose: {
                get: function get() {
                  return ["isZoomIndicator", "onMouseDown", "relayout", "updateZoomLevel", "isEpiMorph"];
                }
              },
              isEpiMorph: {
                get: function get() {
                  return true;
                }
              },
              bindings: {
                get: function get() {
                  return [{
                    signal: "onMouseDown",
                    handler: "onMouseDown",
                    override: true
                  }];
                }
              }
            };
          }
        }], __lively_classholder__, {
          pathInPackage: function pathInPackage() {
            return "./studio/zoom-indicator.cp.js";
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
          start: 140,
          end: 1390
        });
      })(__varRecorder__.ViewModel);

      var WorldZoomIndicator = exports('WorldZoomIndicator', __varRecorder__.component["for"](function () {
        return __varRecorder__.component({
          defaultViewModel: __varRecorder__.WorldZoomIndicatorModel,
          name: "zoom indicator",
          borderColor: __varRecorder__.Color.rgb(23, 160, 251),
          borderRadius: 5,
          extent: __varRecorder__.pt(65, 27),
          fill: __varRecorder__.Color.rgba(0, 0, 0, 0.6),
          hasFixedPosition: true,
          halosEnabled: false,
          layout: new __varRecorder__.TilingLayout({
            axisAlign: "center",
            align: "center",
            orderByIndex: true,
            hugContentsHorizontally: true,
            hugContentsVertically: true,
            padding: {
              height: 0,
              width: 0,
              x: 5,
              y: 5
            },
            reactToSubmorphAnimations: false,
            resizeSubmorphs: false,
            spacing: 5
          }),
          nativeCursor: "pointer",
          position: __varRecorder__.pt(535, 438.4),
          submorphs: [{
            type: __varRecorder__.Text,
            name: "zoom icon label",
            fontSize: 14,
            fontColor: __varRecorder__.Color.white,
            nativeCursor: "pointer",
            halosEnabled: false,
            textAndAttributes: __varRecorder__.Icon.textAttribute("magnifying-glass")
          }, {
            type: __varRecorder__.Text,
            name: "zoom factor label",
            fontColor: __varRecorder__.Color.rgb(253, 254, 254),
            nativeCursor: "pointer",
            halosEnabled: false,
            textAndAttributes: ["100 %", null]
          }]
        });
      }, {
        module: "lively.ide/studio/zoom-indicator.cp.js",
        "export": "WorldZoomIndicator",
        range: {
          start: 1405,
          end: 2478
        }
      }, __varRecorder__.WorldZoomIndicator));
      __varRecorder__.WorldZoomIndicator = WorldZoomIndicator;
      __varRecorder__.WorldZoomIndicator = WorldZoomIndicator;

    })
  };
}));
