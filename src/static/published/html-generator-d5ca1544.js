System.register(['./__rootModule___commonjs-entry-2a340242.js', './ui.cp-46daffed.js', './loading-indicator.cp-680c2ecd.js', './inputs-b8bdf948.js', './index-57981d2f.js', './editor-modes-146d3c1c.js', './search-1fb0a4bc.js'], (function (exports) {
  'use strict';
  var commonjsHelpers, _typeof, _asyncToGenerator, _createForOfIteratorHelper, _toConsumableArray, IFrameMorph, _missingExportShim, tree, tidyHtml;
  return {
    setters: [function (module) {
      commonjsHelpers = module.aJ;
      _typeof = module.aA;
      _asyncToGenerator = module._;
      _createForOfIteratorHelper = module.U;
      _toConsumableArray = module.w;
      IFrameMorph = module.fh;
      _missingExportShim = module.aZ;
      tree = module.au;
    }, function (module) {
      tidyHtml = module.v;
    }, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      exports({
        generateHTML: generateHTML,
        generateHTMLForAll: generateHTMLForAll,
        morphToNode: morphToNode,
        morphicStyles: morphicStyles
      });

      var __varRecorder__$H = lively.FreezerRuntime.recorderFor("lively.next-node_modules/x-is-array/0.1.0/index.js");

      function isArray(obj) {
        return __varRecorder__$H.toString.call(obj) === "[object Array]";
      }

      __varRecorder__$H.isArray = isArray;
      __varRecorder__$H.commonjsHelpers = commonjsHelpers;
      __varRecorder__$H.nativeIsArray = Array.isArray;
      __varRecorder__$H.toString = Object.prototype.toString;
      __varRecorder__$H._0_1_0 = __varRecorder__$H.nativeIsArray || __varRecorder__$H.isArray;
      var _0_1_0 = __varRecorder__$H._0_1_0;
      var _0_1_0 = __varRecorder__$H._0_1_0;
      __varRecorder__$H.__moduleExports = _0_1_0;
      __varRecorder__$H._0_1_0 = _0_1_0;
      __varRecorder__$H["default"] = _0_1_0;

      var __varRecorder__$G = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/version.js");
      __varRecorder__$G.commonjsHelpers = commonjsHelpers;
      __varRecorder__$G.version = "2";
      var version = __varRecorder__$G.version;
      var version = __varRecorder__$G.version;
      __varRecorder__$G.__moduleExports = version;
      __varRecorder__$G.version = version;
      __varRecorder__$G["default"] = version;

      var __varRecorder__$F = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/vpatch.js");

      function VirtualPatch(type, vNode, patch) {
        this.type = Number(type);
        this.vNode = vNode;
        this.patch = patch;
      }

      __varRecorder__$F.VirtualPatch = VirtualPatch;
      __varRecorder__$F.commonjsHelpers = commonjsHelpers;
      __varRecorder__$F.require$$0 = version;
      __varRecorder__$F.version = __varRecorder__$F.require$$0;
      __varRecorder__$F.VirtualPatch.NONE = 0;
      __varRecorder__$F.VirtualPatch.VTEXT = 1;
      __varRecorder__$F.VirtualPatch.VNODE = 2;
      __varRecorder__$F.VirtualPatch.WIDGET = 3;
      __varRecorder__$F.VirtualPatch.PROPS = 4;
      __varRecorder__$F.VirtualPatch.ORDER = 5;
      __varRecorder__$F.VirtualPatch.INSERT = 6;
      __varRecorder__$F.VirtualPatch.REMOVE = 7;
      __varRecorder__$F.VirtualPatch.THUNK = 8;
      __varRecorder__$F.vpatch = __varRecorder__$F.VirtualPatch;
      __varRecorder__$F.VirtualPatch.prototype.version = __varRecorder__$F.version;
      __varRecorder__$F.VirtualPatch.prototype.type = "VirtualPatch";
      var vpatch = __varRecorder__$F.vpatch;
      var vpatch = __varRecorder__$F.vpatch;
      __varRecorder__$F.__moduleExports = vpatch;
      __varRecorder__$F.vpatch = vpatch;
      __varRecorder__$F["default"] = vpatch;

      var __varRecorder__$E = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/is-vnode.js");

      function isVirtualNode(x) {
        return x && x.type === "VirtualNode" && x.version === __varRecorder__$E.version;
      }

      __varRecorder__$E.isVirtualNode = isVirtualNode;
      __varRecorder__$E.commonjsHelpers = commonjsHelpers;
      __varRecorder__$E.require$$0 = version;
      __varRecorder__$E.version = __varRecorder__$E.require$$0;
      __varRecorder__$E.isVnode = __varRecorder__$E.isVirtualNode;
      var isVnode = __varRecorder__$E.isVnode;
      var isVnode = __varRecorder__$E.isVnode;
      __varRecorder__$E.__moduleExports = isVnode;
      __varRecorder__$E.isVnode = isVnode;
      __varRecorder__$E["default"] = isVnode;

      var __varRecorder__$D = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/is-vtext.js");

      function isVirtualText(x) {
        return x && x.type === "VirtualText" && x.version === __varRecorder__$D.version;
      }

      __varRecorder__$D.isVirtualText = isVirtualText;
      __varRecorder__$D.commonjsHelpers = commonjsHelpers;
      __varRecorder__$D.require$$0 = version;
      __varRecorder__$D.version = __varRecorder__$D.require$$0;
      __varRecorder__$D.isVtext = __varRecorder__$D.isVirtualText;
      var isVtext = __varRecorder__$D.isVtext;
      var isVtext = __varRecorder__$D.isVtext;
      __varRecorder__$D.__moduleExports = isVtext;
      __varRecorder__$D.isVtext = isVtext;
      __varRecorder__$D["default"] = isVtext;

      var __varRecorder__$C = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/is-widget.js");

      function isWidget(w) {
        return w && w.type === "Widget";
      }

      __varRecorder__$C.isWidget = isWidget;
      __varRecorder__$C.commonjsHelpers = commonjsHelpers;
      __varRecorder__$C.isWidget_1 = __varRecorder__$C.isWidget;
      var isWidget_1 = __varRecorder__$C.isWidget_1;
      var isWidget_1 = __varRecorder__$C.isWidget_1;
      __varRecorder__$C.__moduleExports = isWidget_1;
      __varRecorder__$C.isWidget_1 = isWidget_1;
      __varRecorder__$C["default"] = isWidget_1;

      var __varRecorder__$B = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/is-thunk.js");

      function isThunk(t) {
        return t && t.type === "Thunk";
      }

      __varRecorder__$B.isThunk = isThunk;
      __varRecorder__$B.commonjsHelpers = commonjsHelpers;
      __varRecorder__$B.isThunk_1 = __varRecorder__$B.isThunk;
      var isThunk_1 = __varRecorder__$B.isThunk_1;
      var isThunk_1 = __varRecorder__$B.isThunk_1;
      __varRecorder__$B.__moduleExports = isThunk_1;
      __varRecorder__$B.isThunk_1 = isThunk_1;
      __varRecorder__$B["default"] = isThunk_1;

      var __varRecorder__$A = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/handle-thunk.js");

      function handleThunk(a, b) {
        var renderedA = a;
        var renderedB = b;

        if (__varRecorder__$A.isThunk(b)) {
          renderedB = __varRecorder__$A.renderThunk(b, a);
        }

        if (__varRecorder__$A.isThunk(a)) {
          renderedA = __varRecorder__$A.renderThunk(a, null);
        }

        return {
          a: renderedA,
          b: renderedB
        };
      }

      __varRecorder__$A.handleThunk = handleThunk;

      function renderThunk(thunk, previous) {
        var renderedThunk = thunk.vnode;

        if (!renderedThunk) {
          renderedThunk = thunk.vnode = thunk.render(previous);
        }

        if (!(__varRecorder__$A.isVNode(renderedThunk) || __varRecorder__$A.isVText(renderedThunk) || __varRecorder__$A.isWidget(renderedThunk))) {
          throw new Error("thunk did not return a valid node");
        }

        return renderedThunk;
      }

      __varRecorder__$A.renderThunk = renderThunk;
      __varRecorder__$A.commonjsHelpers = commonjsHelpers;
      __varRecorder__$A.require$$0 = isVnode;
      __varRecorder__$A.require$$1 = isVtext;
      __varRecorder__$A.require$$2 = isWidget_1;
      __varRecorder__$A.require$$3 = isThunk_1;
      __varRecorder__$A.isVNode = __varRecorder__$A.require$$0;
      __varRecorder__$A.isVText = __varRecorder__$A.require$$1;
      __varRecorder__$A.isWidget = __varRecorder__$A.require$$2;
      __varRecorder__$A.isThunk = __varRecorder__$A.require$$3;
      __varRecorder__$A.handleThunk_1 = __varRecorder__$A.handleThunk;
      var handleThunk_1 = __varRecorder__$A.handleThunk_1;
      var handleThunk_1 = __varRecorder__$A.handleThunk_1;
      __varRecorder__$A.__moduleExports = handleThunk_1;
      __varRecorder__$A.handleThunk_1 = handleThunk_1;
      __varRecorder__$A["default"] = handleThunk_1;

      var __varRecorder__$z = lively.FreezerRuntime.recorderFor("lively.next-node_modules/is-object/1.0.1/index.js");
      __varRecorder__$z.commonjsHelpers = commonjsHelpers;

      __varRecorder__$z._1_0_1 = function isObject(x) {
        return _typeof(x) === "object" && x !== null;
      };

      var _1_0_1 = __varRecorder__$z._1_0_1;
      var _1_0_1 = __varRecorder__$z._1_0_1;
      __varRecorder__$z.__moduleExports = _1_0_1;
      __varRecorder__$z._1_0_1 = _1_0_1;
      __varRecorder__$z["default"] = _1_0_1;

      var __varRecorder__$y = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/is-vhook.js");

      function isHook(hook) {
        return hook && (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") || typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"));
      }

      __varRecorder__$y.isHook = isHook;
      __varRecorder__$y.commonjsHelpers = commonjsHelpers;
      __varRecorder__$y.isVhook = __varRecorder__$y.isHook;
      var isVhook = __varRecorder__$y.isVhook;
      var isVhook = __varRecorder__$y.isVhook;
      __varRecorder__$y.__moduleExports = isVhook;
      __varRecorder__$y.isVhook = isVhook;
      __varRecorder__$y["default"] = isVhook;

      var __varRecorder__$x = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vtree/diff-props.js");

      function diffProps(a, b) {
        var diff;

        for (var aKey in a) {
          if (!(aKey in b)) {
            diff = diff || {};
            diff[aKey] = undefined;
          }

          var aValue = a[aKey];
          var bValue = b[aKey];

          if (aValue === bValue) {
            continue;
          } else if (__varRecorder__$x.isObject(aValue) && __varRecorder__$x.isObject(bValue)) {
            if (__varRecorder__$x.getPrototype(bValue) !== __varRecorder__$x.getPrototype(aValue)) {
              diff = diff || {};
              diff[aKey] = bValue;
            } else if (__varRecorder__$x.isHook(bValue)) {
              diff = diff || {};
              diff[aKey] = bValue;
            } else {
              var objectDiff = diffProps(aValue, bValue);

              if (objectDiff) {
                diff = diff || {};
                diff[aKey] = objectDiff;
              }
            }
          } else {
            diff = diff || {};
            diff[aKey] = bValue;
          }
        }

        for (var bKey in b) {
          if (!(bKey in a)) {
            diff = diff || {};
            diff[bKey] = b[bKey];
          }
        }

        return diff;
      }

      __varRecorder__$x.diffProps = diffProps;

      function getPrototype$1(value) {
        if (Object.getPrototypeOf) {
          return Object.getPrototypeOf(value);
        } else if (value.__proto__) {
          return value.__proto__;
        } else if (value.constructor) {
          return value.constructor.prototype;
        }
      }

      __varRecorder__$x.getPrototype = getPrototype$1;
      __varRecorder__$x.commonjsHelpers = commonjsHelpers;
      __varRecorder__$x.require$$0 = _1_0_1;
      __varRecorder__$x.require$$1 = isVhook;
      __varRecorder__$x.isObject = __varRecorder__$x.require$$0;
      __varRecorder__$x.isHook = __varRecorder__$x.require$$1;
      __varRecorder__$x.diffProps_1 = __varRecorder__$x.diffProps;
      var diffProps_1 = __varRecorder__$x.diffProps_1;
      var diffProps_1 = __varRecorder__$x.diffProps_1;
      __varRecorder__$x.__moduleExports = diffProps_1;
      __varRecorder__$x.diffProps_1 = diffProps_1;
      __varRecorder__$x["default"] = diffProps_1;

      var __varRecorder__$w = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vtree/diff.js");

      function diff(a, b) {
        var patch = {
          a: a
        };

        __varRecorder__$w.walk(a, b, patch, 0);

        return patch;
      }

      __varRecorder__$w.diff = diff;

      function walk(a, b, patch, index) {
        if (a === b) {
          return;
        }

        var apply = patch[index];
        var applyClear = false;

        if (__varRecorder__$w.isThunk(a) || __varRecorder__$w.isThunk(b)) {
          __varRecorder__$w.thunks(a, b, patch, index);
        } else if (b == null) {
          if (!__varRecorder__$w.isWidget(a)) {
            __varRecorder__$w.clearState(a, patch, index);

            apply = patch[index];
          }

          apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.REMOVE, a, b));
        } else if (__varRecorder__$w.isVNode(b)) {
          if (__varRecorder__$w.isVNode(a)) {
            if (a.tagName === b.tagName && a.namespace === b.namespace && a.key === b.key) {
              var propsPatch = __varRecorder__$w.diffProps(a.properties, b.properties);

              if (propsPatch) {
                apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.PROPS, a, propsPatch));
              }

              apply = __varRecorder__$w.diffChildren(a, b, patch, apply, index);
            } else {
              apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.VNODE, a, b));
              applyClear = true;
            }
          } else {
            apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.VNODE, a, b));
            applyClear = true;
          }
        } else if (__varRecorder__$w.isVText(b)) {
          if (!__varRecorder__$w.isVText(a)) {
            apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.VTEXT, a, b));
            applyClear = true;
          } else if (a.text !== b.text) {
            apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.VTEXT, a, b));
          }
        } else if (__varRecorder__$w.isWidget(b)) {
          if (!__varRecorder__$w.isWidget(a)) {
            applyClear = true;
          }

          apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.WIDGET, a, b));
        }

        if (apply) {
          patch[index] = apply;
        }

        if (applyClear) {
          __varRecorder__$w.clearState(a, patch, index);
        }
      }

      __varRecorder__$w.walk = walk;

      function diffChildren(a, b, patch, apply, index) {
        var aChildren = a.children;

        var orderedSet = __varRecorder__$w.reorder(aChildren, b.children);

        var bChildren = orderedSet.children;
        var aLen = aChildren.length;
        var bLen = bChildren.length;
        var len = aLen > bLen ? aLen : bLen;

        for (var i = 0; i < len; i++) {
          var leftNode = aChildren[i];
          var rightNode = bChildren[i];
          index += 1;

          if (!leftNode) {
            if (rightNode) {
              apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.INSERT, null, rightNode));
            }
          } else {
            __varRecorder__$w.walk(leftNode, rightNode, patch, index);
          }

          if (__varRecorder__$w.isVNode(leftNode) && leftNode.count) {
            index += leftNode.count;
          }
        }

        if (orderedSet.moves) {
          apply = __varRecorder__$w.appendPatch(apply, new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.ORDER, a, orderedSet.moves));
        }

        return apply;
      }

      __varRecorder__$w.diffChildren = diffChildren;

      function clearState(vNode, patch, index) {
        __varRecorder__$w.unhook(vNode, patch, index);

        __varRecorder__$w.destroyWidgets(vNode, patch, index);
      }

      __varRecorder__$w.clearState = clearState;

      function destroyWidgets(vNode, patch, index) {
        if (__varRecorder__$w.isWidget(vNode)) {
          if (typeof vNode.destroy === "function") {
            patch[index] = __varRecorder__$w.appendPatch(patch[index], new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.REMOVE, vNode, null));
          }
        } else if (__varRecorder__$w.isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
          var children = vNode.children;
          var len = children.length;

          for (var i = 0; i < len; i++) {
            var child = children[i];
            index += 1;
            destroyWidgets(child, patch, index);

            if (__varRecorder__$w.isVNode(child) && child.count) {
              index += child.count;
            }
          }
        } else if (__varRecorder__$w.isThunk(vNode)) {
          __varRecorder__$w.thunks(vNode, null, patch, index);
        }
      }

      __varRecorder__$w.destroyWidgets = destroyWidgets;

      function thunks(a, b, patch, index) {
        var nodes = __varRecorder__$w.handleThunk(a, b);

        var thunkPatch = __varRecorder__$w.diff(nodes.a, nodes.b);

        if (__varRecorder__$w.hasPatches(thunkPatch)) {
          patch[index] = new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.THUNK, null, thunkPatch);
        }
      }

      __varRecorder__$w.thunks = thunks;

      function hasPatches(patch) {
        for (var index in patch) {
          if (index !== "a") {
            return true;
          }
        }

        return false;
      }

      __varRecorder__$w.hasPatches = hasPatches;

      function unhook(vNode, patch, index) {
        if (__varRecorder__$w.isVNode(vNode)) {
          if (vNode.hooks) {
            patch[index] = __varRecorder__$w.appendPatch(patch[index], new __varRecorder__$w.VPatch(__varRecorder__$w.VPatch.PROPS, vNode, __varRecorder__$w.undefinedKeys(vNode.hooks)));
          }

          if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children;
            var len = children.length;

            for (var i = 0; i < len; i++) {
              var child = children[i];
              index += 1;
              unhook(child, patch, index);

              if (__varRecorder__$w.isVNode(child) && child.count) {
                index += child.count;
              }
            }
          }
        } else if (__varRecorder__$w.isThunk(vNode)) {
          __varRecorder__$w.thunks(vNode, null, patch, index);
        }
      }

      __varRecorder__$w.unhook = unhook;

      function undefinedKeys(obj) {
        var result = {};

        for (var key in obj) {
          result[key] = undefined;
        }

        return result;
      }

      __varRecorder__$w.undefinedKeys = undefinedKeys;

      function reorder(aChildren, bChildren) {
        var bChildIndex = __varRecorder__$w.keyIndex(bChildren);

        var bKeys = bChildIndex.keys;
        var bFree = bChildIndex.free;

        if (bFree.length === bChildren.length) {
          return {
            children: bChildren,
            moves: null
          };
        }

        var aChildIndex = __varRecorder__$w.keyIndex(aChildren);

        var aKeys = aChildIndex.keys;
        var aFree = aChildIndex.free;

        if (aFree.length === aChildren.length) {
          return {
            children: bChildren,
            moves: null
          };
        }

        var newChildren = [];
        var freeIndex = 0;
        var freeCount = bFree.length;
        var deletedItems = 0;

        for (var i = 0; i < aChildren.length; i++) {
          var aItem = aChildren[i];
          var itemIndex;

          if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
              itemIndex = bKeys[aItem.key];
              newChildren.push(bChildren[itemIndex]);
            } else {
              itemIndex = i - deletedItems++;
              newChildren.push(null);
            }
          } else {
            if (freeIndex < freeCount) {
              itemIndex = bFree[freeIndex++];
              newChildren.push(bChildren[itemIndex]);
            } else {
              itemIndex = i - deletedItems++;
              newChildren.push(null);
            }
          }
        }

        var lastFreeIndex = freeIndex >= bFree.length ? bChildren.length : bFree[freeIndex];

        for (var j = 0; j < bChildren.length; j++) {
          var newItem = bChildren[j];

          if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
              newChildren.push(newItem);
            }
          } else if (j >= lastFreeIndex) {
            newChildren.push(newItem);
          }
        }

        var simulate = newChildren.slice();
        var simulateIndex = 0;
        var removes = [];
        var inserts = [];
        var simulateItem;

        for (var k = 0; k < bChildren.length;) {
          var wantedItem = bChildren[k];
          simulateItem = simulate[simulateIndex];

          while (simulateItem === null && simulate.length) {
            removes.push(__varRecorder__$w.remove(simulate, simulateIndex, null));
            simulateItem = simulate[simulateIndex];
          }

          if (!simulateItem || simulateItem.key !== wantedItem.key) {
            if (wantedItem.key) {
              if (simulateItem && simulateItem.key) {
                if (bKeys[simulateItem.key] !== k + 1) {
                  removes.push(__varRecorder__$w.remove(simulate, simulateIndex, simulateItem.key));
                  simulateItem = simulate[simulateIndex];

                  if (!simulateItem || simulateItem.key !== wantedItem.key) {
                    inserts.push({
                      key: wantedItem.key,
                      to: k
                    });
                  } else {
                    simulateIndex++;
                  }
                } else {
                  inserts.push({
                    key: wantedItem.key,
                    to: k
                  });
                }
              } else {
                inserts.push({
                  key: wantedItem.key,
                  to: k
                });
              }

              k++;
            } else if (simulateItem && simulateItem.key) {
              removes.push(__varRecorder__$w.remove(simulate, simulateIndex, simulateItem.key));
            }
          } else {
            simulateIndex++;
            k++;
          }
        }

        while (simulateIndex < simulate.length) {
          simulateItem = simulate[simulateIndex];
          removes.push(__varRecorder__$w.remove(simulate, simulateIndex, simulateItem && simulateItem.key));
        }

        if (removes.length === deletedItems && !inserts.length) {
          return {
            children: newChildren,
            moves: null
          };
        }

        return {
          children: newChildren,
          moves: {
            removes: removes,
            inserts: inserts
          }
        };
      }

      __varRecorder__$w.reorder = reorder;

      function remove(arr, index, key) {
        arr.splice(index, 1);
        return {
          from: index,
          key: key
        };
      }

      __varRecorder__$w.remove = remove;

      function keyIndex(children) {
        var keys = {};
        var free = [];
        var length = children.length;

        for (var i = 0; i < length; i++) {
          var child = children[i];

          if (child.key) {
            keys[child.key] = i;
          } else {
            free.push(i);
          }
        }

        return {
          keys: keys,
          free: free
        };
      }

      __varRecorder__$w.keyIndex = keyIndex;

      function appendPatch(apply, patch) {
        if (apply) {
          if (__varRecorder__$w.isArray(apply)) {
            apply.push(patch);
          } else {
            apply = [apply, patch];
          }

          return apply;
        } else {
          return patch;
        }
      }

      __varRecorder__$w.appendPatch = appendPatch;
      __varRecorder__$w.commonjsHelpers = commonjsHelpers;
      __varRecorder__$w.require$$0 = _0_1_0;
      __varRecorder__$w.require$$1 = vpatch;
      __varRecorder__$w.require$$2 = isVnode;
      __varRecorder__$w.require$$3 = isVtext;
      __varRecorder__$w.require$$4 = isWidget_1;
      __varRecorder__$w.require$$5 = isThunk_1;
      __varRecorder__$w.require$$6 = handleThunk_1;
      __varRecorder__$w.require$$7 = diffProps_1;
      __varRecorder__$w.isArray = __varRecorder__$w.require$$0;
      __varRecorder__$w.VPatch = __varRecorder__$w.require$$1;
      __varRecorder__$w.isVNode = __varRecorder__$w.require$$2;
      __varRecorder__$w.isVText = __varRecorder__$w.require$$3;
      __varRecorder__$w.isWidget = __varRecorder__$w.require$$4;
      __varRecorder__$w.isThunk = __varRecorder__$w.require$$5;
      __varRecorder__$w.handleThunk = __varRecorder__$w.require$$6;
      __varRecorder__$w.diffProps = __varRecorder__$w.require$$7;
      __varRecorder__$w.diff_1 = __varRecorder__$w.diff;
      var diff_1$1 = __varRecorder__$w.diff_1;
      var diff_1$1 = __varRecorder__$w.diff_1;
      __varRecorder__$w.__moduleExports = diff_1$1;
      __varRecorder__$w.diff_1 = diff_1$1;
      __varRecorder__$w["default"] = diff_1$1;

      var __varRecorder__$v = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/diff.js");
      __varRecorder__$v.commonjsHelpers = commonjsHelpers;
      __varRecorder__$v.require$$0 = diff_1$1;
      __varRecorder__$v.diff = __varRecorder__$v.require$$0;
      __varRecorder__$v.diff_1 = __varRecorder__$v.diff;
      var diff_1 = __varRecorder__$v.diff_1;
      var diff_1 = __varRecorder__$v.diff_1;
      __varRecorder__$v.__moduleExports = diff_1;
      __varRecorder__$v.diff_1 = diff_1;
      __varRecorder__$v["default"] = diff_1;

      var document$4 = {exports: {}};

      var __varRecorder__$u = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/dom-text.js");

      function DOMText(value, owner) {
        if (!(this instanceof DOMText)) {
          return new DOMText(value);
        }

        this.data = value || "";
        this.length = this.data.length;
        this.ownerDocument = owner || null;
      }

      __varRecorder__$u.DOMText = DOMText;
      __varRecorder__$u.commonjsHelpers = commonjsHelpers;
      __varRecorder__$u.domText = __varRecorder__$u.DOMText;
      __varRecorder__$u.DOMText.prototype.type = "DOMTextNode";
      __varRecorder__$u.DOMText.prototype.nodeType = 3;

      __varRecorder__$u.DOMText.prototype.toString = function _Text_toString() {
        return this.data;
      };

      __varRecorder__$u.DOMText.prototype.replaceData = function replaceData(index, length, value) {
        var current = this.data;
        var left = current.substring(0, index);
        var right = current.substring(index + length, current.length);
        this.data = left + value + right;
        this.length = this.data.length;
      };

      var domText = __varRecorder__$u.domText;
      var domText = __varRecorder__$u.domText;
      __varRecorder__$u.__moduleExports = domText;
      __varRecorder__$u.domText = domText;
      __varRecorder__$u["default"] = domText;

      var __varRecorder__$t = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/event/dispatch-event.js");

      function dispatchEvent(ev) {
        var elem = this;
        var type = ev.type;

        if (!ev.target) {
          ev.target = elem;
        }

        if (!elem.listeners) {
          elem.listeners = {};
        }

        var listeners = elem.listeners[type];

        if (listeners) {
          return listeners.forEach(function (listener) {
            ev.currentTarget = elem;

            if (typeof listener === "function") {
              listener(ev);
            } else {
              listener.handleEvent(ev);
            }
          });
        }

        if (elem.parentNode) {
          elem.parentNode.dispatchEvent(ev);
        }
      }

      __varRecorder__$t.dispatchEvent = dispatchEvent;
      __varRecorder__$t.commonjsHelpers = commonjsHelpers;
      __varRecorder__$t.dispatchEvent_1 = __varRecorder__$t.dispatchEvent;
      var dispatchEvent_1 = __varRecorder__$t.dispatchEvent_1;
      var dispatchEvent_1 = __varRecorder__$t.dispatchEvent_1;
      __varRecorder__$t.__moduleExports = dispatchEvent_1;
      __varRecorder__$t.dispatchEvent_1 = dispatchEvent_1;
      __varRecorder__$t["default"] = dispatchEvent_1;

      var __varRecorder__$s = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/event/add-event-listener.js");
      __varRecorder__$s.commonjsHelpers = commonjsHelpers;
      __varRecorder__$s.addEventListener_1 = addEventListener$1;

      function addEventListener$1(type, listener) {
        var elem = this;

        if (!elem.listeners) {
          elem.listeners = {};
        }

        if (!elem.listeners[type]) {
          elem.listeners[type] = [];
        }

        if (elem.listeners[type].indexOf(listener) === -1) {
          elem.listeners[type].push(listener);
        }
      }

      var addEventListener_1 = __varRecorder__$s.addEventListener_1;
      var addEventListener_1 = __varRecorder__$s.addEventListener_1;
      __varRecorder__$s.__moduleExports = addEventListener_1;
      __varRecorder__$s.addEventListener_1 = addEventListener_1;
      __varRecorder__$s["default"] = addEventListener_1;

      var __varRecorder__$r = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/serialize.js");

      function serializeElement(elem) {
        var strings = [];
        var tagname = elem.tagName;

        if (elem.namespaceURI === "http://www.w3.org/1999/xhtml") {
          tagname = tagname.toLowerCase();
        }

        strings.push("<" + tagname + __varRecorder__$r.properties(elem) + __varRecorder__$r.datasetify(elem) + ">");

        if (elem.textContent) {
          strings.push(elem.textContent);
        }

        elem.childNodes.forEach(function (node) {
          strings.push(node.toString());
        });
        strings.push("</" + tagname + ">");
        return strings.join("");
      }

      __varRecorder__$r.serializeElement = serializeElement;

      function isProperty(elem, key) {
        var type = _typeof(elem[key]);

        return elem.hasOwnProperty(key) && (type === "string" || type === "boolean" || type === "number") && key !== "nodeName" && key !== "className" && key !== "tagName" && key !== "textContent" && key !== "namespaceURI";
      }

      __varRecorder__$r.isProperty = isProperty;

      function stylify(styles) {
        var attr = "";
        Object.keys(styles).forEach(function (key) {
          var value = styles[key];
          attr += key + ":" + value + ";";
        });
        return attr;
      }

      __varRecorder__$r.stylify = stylify;

      function datasetify(elem) {
        var ds = elem.dataset;
        var props = [];

        for (var key in ds) {
          props.push({
            name: "data-" + key,
            value: ds[key]
          });
        }

        return props.length ? __varRecorder__$r.stringify(props) : "";
      }

      __varRecorder__$r.datasetify = datasetify;

      function stringify(list) {
        var attributes = [];
        list.forEach(function (tuple) {
          var name = tuple.name;
          var value = tuple.value;

          if (name === "style") {
            value = __varRecorder__$r.stylify(value);
          }

          attributes.push(name + "=" + "\"" + value + "\"");
        });
        return attributes.length ? " " + attributes.join(" ") : "";
      }

      __varRecorder__$r.stringify = stringify;

      function properties(elem) {
        var props = [];

        for (var key in elem) {
          if (__varRecorder__$r.isProperty(elem, key)) {
            props.push({
              name: key,
              value: elem[key]
            });
          }
        }

        if (elem.className) {
          props.push({
            name: "class",
            value: elem.className
          });
        }

        return props.length ? __varRecorder__$r.stringify(props) : "";
      }

      __varRecorder__$r.properties = properties;
      __varRecorder__$r.commonjsHelpers = commonjsHelpers;
      __varRecorder__$r.serialize = __varRecorder__$r.serializeElement;
      var serialize = __varRecorder__$r.serialize;
      var serialize = __varRecorder__$r.serialize;
      __varRecorder__$r.__moduleExports = serialize;
      __varRecorder__$r.serialize = serialize;
      __varRecorder__$r["default"] = serialize;

      var __varRecorder__$q = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/dom-element.js");

      function DOMElement(tagName, owner, namespace) {
        if (!(this instanceof DOMElement)) {
          return new DOMElement(tagName);
        }

        var ns = namespace === undefined ? __varRecorder__$q.htmlns : namespace || null;
        this.tagName = ns === __varRecorder__$q.htmlns ? String(tagName).toUpperCase() : tagName;
        this.className = "";
        this.dataset = {};
        this.childNodes = [];
        this.parentNode = null;
        this.style = {};
        this.ownerDocument = owner || null;
        this.namespaceURI = ns;
      }

      __varRecorder__$q.DOMElement = DOMElement;
      __varRecorder__$q.commonjsHelpers = commonjsHelpers;
      __varRecorder__$q.require$$0 = dispatchEvent_1;
      __varRecorder__$q.require$$1 = addEventListener_1;
      __varRecorder__$q.require$$2 = serialize;
      __varRecorder__$q.dispatchEvent = __varRecorder__$q.require$$0;
      var addEventListener = __varRecorder__$q.require$$1;
      __varRecorder__$q.serializeElement = __varRecorder__$q.require$$2;
      __varRecorder__$q.htmlns = "http://www.w3.org/1999/xhtml";
      __varRecorder__$q.domElement = __varRecorder__$q.DOMElement;
      __varRecorder__$q.DOMElement.prototype.type = "DOMElement";
      __varRecorder__$q.DOMElement.prototype.nodeType = 1;

      __varRecorder__$q.DOMElement.prototype.appendChild = function _Element_appendChild(child) {
        if (child.parentNode) {
          child.parentNode.removeChild(child);
        }

        this.childNodes.push(child);
        child.parentNode = this;
        return child;
      };

      __varRecorder__$q.DOMElement.prototype.replaceChild = function _Element_replaceChild(elem, needle) {
        if (elem.parentNode) {
          elem.parentNode.removeChild(elem);
        }

        var index = this.childNodes.indexOf(needle);
        needle.parentNode = null;
        this.childNodes[index] = elem;
        elem.parentNode = this;
        return needle;
      };

      __varRecorder__$q.DOMElement.prototype.removeChild = function _Element_removeChild(elem) {
        var index = this.childNodes.indexOf(elem);
        this.childNodes.splice(index, 1);
        elem.parentNode = null;
        return elem;
      };

      __varRecorder__$q.DOMElement.prototype.insertBefore = function _Element_insertBefore(elem, needle) {
        if (elem.parentNode) {
          elem.parentNode.removeChild(elem);
        }

        var index = needle === null || needle === undefined ? -1 : this.childNodes.indexOf(needle);

        if (index > -1) {
          this.childNodes.splice(index, 0, elem);
        } else {
          this.childNodes.push(elem);
        }

        elem.parentNode = this;
        return elem;
      };

      __varRecorder__$q.DOMElement.prototype.addEventListener = addEventListener;
      __varRecorder__$q.DOMElement.prototype.dispatchEvent = __varRecorder__$q.dispatchEvent;

      __varRecorder__$q.DOMElement.prototype.focus = function _Element_focus() {
        return void 0;
      };

      __varRecorder__$q.DOMElement.prototype.toString = function _Element_toString() {
        return __varRecorder__$q.serializeElement(this);
      };

      var domElement = __varRecorder__$q.domElement;
      var domElement = __varRecorder__$q.domElement;
      __varRecorder__$q.__moduleExports = domElement;
      __varRecorder__$q.domElement = domElement;
      __varRecorder__$q["default"] = domElement;

      var __varRecorder__$p = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/dom-fragment.js");

      function DocumentFragment(owner) {
        if (!(this instanceof DocumentFragment)) {
          return new DocumentFragment();
        }

        this.childNodes = [];
        this.parentNode = null;
        this.ownerDocument = owner || null;
      }

      __varRecorder__$p.DocumentFragment = DocumentFragment;
      __varRecorder__$p.commonjsHelpers = commonjsHelpers;
      __varRecorder__$p.require$$0 = domElement;
      __varRecorder__$p.DOMElement = __varRecorder__$p.require$$0;
      __varRecorder__$p.domFragment = __varRecorder__$p.DocumentFragment;
      __varRecorder__$p.DocumentFragment.prototype.type = "DocumentFragment";
      __varRecorder__$p.DocumentFragment.prototype.nodeType = 11;
      __varRecorder__$p.DocumentFragment.prototype.nodeName = "#document-fragment";
      __varRecorder__$p.DocumentFragment.prototype.appendChild = __varRecorder__$p.DOMElement.prototype.appendChild;
      __varRecorder__$p.DocumentFragment.prototype.replaceChild = __varRecorder__$p.DOMElement.prototype.replaceChild;
      __varRecorder__$p.DocumentFragment.prototype.removeChild = __varRecorder__$p.DOMElement.prototype.removeChild;

      __varRecorder__$p.DocumentFragment.prototype.toString = function _DocumentFragment_toString() {
        return this.childNodes.map(function (node) {
          return String(node);
        }).join("");
      };

      var domFragment = __varRecorder__$p.domFragment;
      var domFragment = __varRecorder__$p.domFragment;
      __varRecorder__$p.__moduleExports = domFragment;
      __varRecorder__$p.domFragment = domFragment;
      __varRecorder__$p["default"] = domFragment;

      var __varRecorder__$o = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/event.js");

      function Event(family) {}

      __varRecorder__$o.Event = Event;
      __varRecorder__$o.commonjsHelpers = commonjsHelpers;
      __varRecorder__$o.event = __varRecorder__$o.Event;

      __varRecorder__$o.Event.prototype.initEvent = function _Event_initEvent(type, bubbles, cancelable) {
        this.type = type;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
      };

      var event = __varRecorder__$o.event;
      var event = __varRecorder__$o.event;
      __varRecorder__$o.__moduleExports = event;
      __varRecorder__$o.event = event;
      __varRecorder__$o["default"] = event;

      var __varRecorder__$n = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/document.js");

      function Document() {
        if (!(this instanceof Document)) {
          return new Document();
        }

        this.body = this.createElement("body");
        this.documentElement = this.createElement("html");
        this.documentElement.appendChild(this.body);
      }

      __varRecorder__$n.Document = Document;
      __varRecorder__$n.commonjsHelpers = commonjsHelpers;
      __varRecorder__$n.require$$0 = domText;
      __varRecorder__$n.require$$1 = domElement;
      __varRecorder__$n.require$$2 = domFragment;
      __varRecorder__$n.require$$3 = event;
      __varRecorder__$n.DOMText = __varRecorder__$n.require$$0;
      __varRecorder__$n.DOMElement = __varRecorder__$n.require$$1;
      __varRecorder__$n.DocumentFragment = __varRecorder__$n.require$$2;
      __varRecorder__$n.Event = __varRecorder__$n.require$$3;
      var document$3 = __varRecorder__$n.Document;
      __varRecorder__$n.proto = __varRecorder__$n.Document.prototype;

      __varRecorder__$n.proto.createTextNode = function createTextNode(value) {
        return new __varRecorder__$n.DOMText(value, this);
      };

      __varRecorder__$n.proto.createElementNS = function createElementNS(namespace, tagName) {
        var ns = namespace === null ? null : String(namespace);
        return new __varRecorder__$n.DOMElement(tagName, this, ns);
      };

      __varRecorder__$n.proto.createElement = function createElement(tagName) {
        return new __varRecorder__$n.DOMElement(tagName, this);
      };

      __varRecorder__$n.proto.createDocumentFragment = function createDocumentFragment() {
        return new __varRecorder__$n.DocumentFragment(this);
      };

      __varRecorder__$n.proto.createEvent = function createEvent(family) {
        return new __varRecorder__$n.Event(family);
      };

      __varRecorder__$n.proto.getElementById = function getElementById(id, parent) {
        if (!parent) {
          parent = this.body;
        }

        if (String(parent.id) === String(id)) {
          return parent;
        }

        var arr = parent.childNodes;
        var result = null;

        if (!arr) {
          return result;
        }

        for (var i = 0, len = arr.length; !result && i < len; i++) {
          result = getElementById(id, arr[i]);
        }

        return result;
      };
      __varRecorder__$n.__moduleExports = document$3;
      __varRecorder__$n.document = document$3;
      __varRecorder__$n["default"] = document$3;

      var __varRecorder__$m = lively.FreezerRuntime.recorderFor("lively.next-node_modules/min-document/2.6.1/index.js");
      __varRecorder__$m.commonjsHelpers = commonjsHelpers;
      __varRecorder__$m.require$$0 = document$3;
      __varRecorder__$m.Document = __varRecorder__$m.require$$0;
      __varRecorder__$m._2_6_1 = new __varRecorder__$m.Document();
      var _2_6_1 = __varRecorder__$m._2_6_1;
      var _2_6_1 = __varRecorder__$m._2_6_1;
      __varRecorder__$m.__moduleExports = _2_6_1;
      __varRecorder__$m._2_6_1 = _2_6_1;
      __varRecorder__$m["default"] = _2_6_1;

      var __varRecorder__$l = lively.FreezerRuntime.recorderFor("lively.next-node_modules/global/4.3.0/document.js");
      __varRecorder__$l.commonjsHelpers = commonjsHelpers;
      __varRecorder__$l.documentModule = document$4;
      __varRecorder__$l.document_1 = document$4.exports;
      __varRecorder__$l.require$$0 = _2_6_1;
      __varRecorder__$l.topLevel = typeof __varRecorder__$l.commonjsHelpers.commonjsGlobal !== "undefined" ? __varRecorder__$l.commonjsHelpers.commonjsGlobal : typeof window !== "undefined" ? window : {};
      __varRecorder__$l.minDoc = __varRecorder__$l.require$$0;

      if (typeof document !== "undefined") {
        __varRecorder__$l.documentModule.exports = document;
      } else {
        __varRecorder__$l.doccy = __varRecorder__$l.topLevel["__GLOBAL_DOCUMENT_CACHE@4"];

        if (!__varRecorder__$l.doccy) {
          __varRecorder__$l.doccy = __varRecorder__$l.topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = __varRecorder__$l.minDoc;
        }

        __varRecorder__$l.documentModule.exports = __varRecorder__$l.doccy;
      }
      __varRecorder__$l.__moduleExports = document$4.exports;
      __varRecorder__$l.document_1 = document$4.exports;
      __varRecorder__$l["default"] = document$4.exports;
      __varRecorder__$l.document_1 = document$4.exports;

      var __varRecorder__$k = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vdom/apply-properties.js");

      function applyProperties(node, props, previous) {
        for (var propName in props) {
          var propValue = props[propName];

          if (propValue === undefined) {
            __varRecorder__$k.removeProperty(node, propName, propValue, previous);
          } else if (__varRecorder__$k.isHook(propValue)) {
            __varRecorder__$k.removeProperty(node, propName, propValue, previous);

            if (propValue.hook) {
              propValue.hook(node, propName, previous ? previous[propName] : undefined);
            }
          } else {
            if (__varRecorder__$k.isObject(propValue)) {
              __varRecorder__$k.patchObject(node, props, previous, propName, propValue);
            } else {
              node[propName] = propValue;
            }
          }
        }
      }

      __varRecorder__$k.applyProperties = applyProperties;

      function removeProperty(node, propName, propValue, previous) {
        if (previous) {
          var previousValue = previous[propName];

          if (!__varRecorder__$k.isHook(previousValue)) {
            if (propName === "attributes") {
              for (var attrName in previousValue) {
                node.removeAttribute(attrName);
              }
            } else if (propName === "style") {
              for (var i in previousValue) {
                node.style[i] = "";
              }
            } else if (typeof previousValue === "string") {
              node[propName] = "";
            } else {
              node[propName] = null;
            }
          } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue);
          }
        }
      }

      __varRecorder__$k.removeProperty = removeProperty;

      function patchObject(node, props, previous, propName, propValue) {
        var previousValue = previous ? previous[propName] : undefined;

        if (propName === "attributes") {
          for (var attrName in propValue) {
            var attrValue = propValue[attrName];

            if (attrValue === undefined) {
              node.removeAttribute(attrName);
            } else {
              node.setAttribute(attrName, attrValue);
            }
          }

          return;
        }

        if (previousValue && __varRecorder__$k.isObject(previousValue) && __varRecorder__$k.getPrototype(previousValue) !== __varRecorder__$k.getPrototype(propValue)) {
          node[propName] = propValue;
          return;
        }

        if (!__varRecorder__$k.isObject(node[propName])) {
          node[propName] = {};
        }

        var replacer = propName === "style" ? "" : undefined;

        for (var k in propValue) {
          var value = propValue[k];
          node[propName][k] = value === undefined ? replacer : value;
        }
      }

      __varRecorder__$k.patchObject = patchObject;

      function getPrototype(value) {
        if (Object.getPrototypeOf) {
          return Object.getPrototypeOf(value);
        } else if (value.__proto__) {
          return value.__proto__;
        } else if (value.constructor) {
          return value.constructor.prototype;
        }
      }

      __varRecorder__$k.getPrototype = getPrototype;
      __varRecorder__$k.commonjsHelpers = commonjsHelpers;
      __varRecorder__$k.require$$0 = _1_0_1;
      __varRecorder__$k.require$$1 = isVhook;
      __varRecorder__$k.isObject = __varRecorder__$k.require$$0;
      __varRecorder__$k.isHook = __varRecorder__$k.require$$1;
      __varRecorder__$k.applyProperties_1 = __varRecorder__$k.applyProperties;
      var applyProperties_1 = __varRecorder__$k.applyProperties_1;
      var applyProperties_1 = __varRecorder__$k.applyProperties_1;
      __varRecorder__$k.__moduleExports = applyProperties_1;
      __varRecorder__$k.applyProperties_1 = applyProperties_1;
      __varRecorder__$k["default"] = applyProperties_1;

      var __varRecorder__$j = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vdom/create-element.js");

      function createElement(vnode, opts) {
        var doc = opts ? opts.document || document$2 : document$2;
        var warn = opts ? opts.warn : null;
        vnode = __varRecorder__$j.handleThunk(vnode).a;

        if (__varRecorder__$j.isWidget(vnode)) {
          return vnode.init();
        } else if (__varRecorder__$j.isVText(vnode)) {
          return doc.createTextNode(vnode.text);
        } else if (!__varRecorder__$j.isVNode(vnode)) {
          if (warn) {
            warn("Item is not a valid virtual dom node", vnode);
          }

          return null;
        }

        var node = vnode.namespace === null ? doc.createElement(vnode.tagName) : doc.createElementNS(vnode.namespace, vnode.tagName);
        var props = vnode.properties;

        __varRecorder__$j.applyProperties(node, props);

        var children = vnode.children;

        for (var i = 0; i < children.length; i++) {
          var childNode = createElement(children[i], opts);

          if (childNode) {
            node.appendChild(childNode);
          }
        }

        return node;
      }

      __varRecorder__$j.createElement = createElement;
      __varRecorder__$j.commonjsHelpers = commonjsHelpers;
      __varRecorder__$j.require$$0 = document$4.exports;
      __varRecorder__$j.require$$1 = applyProperties_1;
      __varRecorder__$j.require$$2 = isVnode;
      __varRecorder__$j.require$$3 = isVtext;
      __varRecorder__$j.require$$4 = isWidget_1;
      __varRecorder__$j.require$$5 = handleThunk_1;
      var document$2 = __varRecorder__$j.require$$0;
      __varRecorder__$j.applyProperties = __varRecorder__$j.require$$1;
      __varRecorder__$j.isVNode = __varRecorder__$j.require$$2;
      __varRecorder__$j.isVText = __varRecorder__$j.require$$3;
      __varRecorder__$j.isWidget = __varRecorder__$j.require$$4;
      __varRecorder__$j.handleThunk = __varRecorder__$j.require$$5;
      __varRecorder__$j.createElement_1 = __varRecorder__$j.createElement;
      var createElement_1$1 = __varRecorder__$j.createElement_1;
      var createElement_1$1 = __varRecorder__$j.createElement_1;
      __varRecorder__$j.__moduleExports = createElement_1$1;
      __varRecorder__$j.createElement_1 = createElement_1$1;
      __varRecorder__$j["default"] = createElement_1$1;

      var __varRecorder__$i = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vdom/dom-index.js");

      function domIndex(rootNode, tree, indices, nodes) {
        if (!indices || indices.length === 0) {
          return {};
        } else {
          indices.sort(__varRecorder__$i.ascending);
          return __varRecorder__$i.recurse(rootNode, tree, indices, nodes, 0);
        }
      }

      __varRecorder__$i.domIndex = domIndex;

      function recurse(rootNode, tree, indices, nodes, rootIndex) {
        nodes = nodes || {};

        if (rootNode) {
          if (__varRecorder__$i.indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode;
          }

          var vChildren = tree.children;

          if (vChildren) {
            var childNodes = rootNode.childNodes;

            for (var i = 0; i < tree.children.length; i++) {
              rootIndex += 1;
              var vChild = vChildren[i] || __varRecorder__$i.noChild;
              var nextIndex = rootIndex + (vChild.count || 0);

              if (__varRecorder__$i.indexInRange(indices, rootIndex, nextIndex)) {
                recurse(childNodes[i], vChild, indices, nodes, rootIndex);
              }

              rootIndex = nextIndex;
            }
          }
        }

        return nodes;
      }

      __varRecorder__$i.recurse = recurse;

      function indexInRange(indices, left, right) {
        if (indices.length === 0) {
          return false;
        }

        var minIndex = 0;
        var maxIndex = indices.length - 1;
        var currentIndex;
        var currentItem;

        while (minIndex <= maxIndex) {
          currentIndex = (maxIndex + minIndex) / 2 >> 0;
          currentItem = indices[currentIndex];

          if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right;
          } else if (currentItem < left) {
            minIndex = currentIndex + 1;
          } else if (currentItem > right) {
            maxIndex = currentIndex - 1;
          } else {
            return true;
          }
        }

        return false;
      }

      __varRecorder__$i.indexInRange = indexInRange;

      function ascending(a, b) {
        return a > b ? 1 : -1;
      }

      __varRecorder__$i.ascending = ascending;
      __varRecorder__$i.commonjsHelpers = commonjsHelpers;
      __varRecorder__$i.noChild = {};
      __varRecorder__$i.domIndex_1 = __varRecorder__$i.domIndex;
      var domIndex_1 = __varRecorder__$i.domIndex_1;
      var domIndex_1 = __varRecorder__$i.domIndex_1;
      __varRecorder__$i.__moduleExports = domIndex_1;
      __varRecorder__$i.domIndex_1 = domIndex_1;
      __varRecorder__$i["default"] = domIndex_1;

      var __varRecorder__$h = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vdom/update-widget.js");

      function updateWidget(a, b) {
        if (__varRecorder__$h.isWidget(a) && __varRecorder__$h.isWidget(b)) {
          if ("name" in a && "name" in b) {
            return a.id === b.id;
          } else {
            return a.init === b.init;
          }
        }

        return false;
      }

      __varRecorder__$h.updateWidget = updateWidget;
      __varRecorder__$h.commonjsHelpers = commonjsHelpers;
      __varRecorder__$h.require$$0 = isWidget_1;
      __varRecorder__$h.isWidget = __varRecorder__$h.require$$0;
      __varRecorder__$h.updateWidget_1 = __varRecorder__$h.updateWidget;
      var updateWidget_1 = __varRecorder__$h.updateWidget_1;
      var updateWidget_1 = __varRecorder__$h.updateWidget_1;
      __varRecorder__$h.__moduleExports = updateWidget_1;
      __varRecorder__$h.updateWidget_1 = updateWidget_1;
      __varRecorder__$h["default"] = updateWidget_1;

      var __varRecorder__$g = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vdom/patch-op.js");

      function applyPatch$1(vpatch, domNode, renderOptions) {
        var type = vpatch.type;
        var vNode = vpatch.vNode;
        var patch = vpatch.patch;

        switch (type) {
          case __varRecorder__$g.VPatch.REMOVE:
            return __varRecorder__$g.removeNode(domNode, vNode);

          case __varRecorder__$g.VPatch.INSERT:
            return __varRecorder__$g.insertNode(domNode, patch, renderOptions);

          case __varRecorder__$g.VPatch.VTEXT:
            return __varRecorder__$g.stringPatch(domNode, vNode, patch, renderOptions);

          case __varRecorder__$g.VPatch.WIDGET:
            return __varRecorder__$g.widgetPatch(domNode, vNode, patch, renderOptions);

          case __varRecorder__$g.VPatch.VNODE:
            return __varRecorder__$g.vNodePatch(domNode, vNode, patch, renderOptions);

          case __varRecorder__$g.VPatch.ORDER:
            __varRecorder__$g.reorderChildren(domNode, patch);

            return domNode;

          case __varRecorder__$g.VPatch.PROPS:
            __varRecorder__$g.applyProperties(domNode, patch, vNode.properties);

            return domNode;

          case __varRecorder__$g.VPatch.THUNK:
            return __varRecorder__$g.replaceRoot(domNode, renderOptions.patch(domNode, patch, renderOptions));

          default:
            return domNode;
        }
      }

      __varRecorder__$g.applyPatch = applyPatch$1;

      function removeNode(domNode, vNode) {
        var parentNode = domNode.parentNode;

        if (parentNode) {
          parentNode.removeChild(domNode);
        }

        __varRecorder__$g.destroyWidget(domNode, vNode);

        return null;
      }

      __varRecorder__$g.removeNode = removeNode;

      function insertNode(parentNode, vNode, renderOptions) {
        var newNode = renderOptions.render(vNode, renderOptions);

        if (parentNode) {
          parentNode.appendChild(newNode);
        }

        return parentNode;
      }

      __varRecorder__$g.insertNode = insertNode;

      function stringPatch(domNode, leftVNode, vText, renderOptions) {
        var newNode;

        if (domNode.nodeType === 3) {
          domNode.replaceData(0, domNode.length, vText.text);
          newNode = domNode;
        } else {
          var parentNode = domNode.parentNode;
          newNode = renderOptions.render(vText, renderOptions);

          if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
          }
        }

        return newNode;
      }

      __varRecorder__$g.stringPatch = stringPatch;

      function widgetPatch(domNode, leftVNode, widget, renderOptions) {
        var updating = __varRecorder__$g.updateWidget(leftVNode, widget);

        var newNode;

        if (updating) {
          newNode = widget.update(leftVNode, domNode) || domNode;
        } else {
          newNode = renderOptions.render(widget, renderOptions);
        }

        var parentNode = domNode.parentNode;

        if (parentNode && newNode !== domNode) {
          parentNode.replaceChild(newNode, domNode);
        }

        if (!updating) {
          __varRecorder__$g.destroyWidget(domNode, leftVNode);
        }

        return newNode;
      }

      __varRecorder__$g.widgetPatch = widgetPatch;

      function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
        var parentNode = domNode.parentNode;
        var newNode = renderOptions.render(vNode, renderOptions);

        if (parentNode && newNode !== domNode) {
          parentNode.replaceChild(newNode, domNode);
        }

        return newNode;
      }

      __varRecorder__$g.vNodePatch = vNodePatch;

      function destroyWidget(domNode, w) {
        if (typeof w.destroy === "function" && __varRecorder__$g.isWidget(w)) {
          w.destroy(domNode);
        }
      }

      __varRecorder__$g.destroyWidget = destroyWidget;

      function reorderChildren(domNode, moves) {
        var childNodes = domNode.childNodes;
        var keyMap = {};
        var node;
        var remove;
        var insert;

        for (var i = 0; i < moves.removes.length; i++) {
          remove = moves.removes[i];
          node = childNodes[remove.from];

          if (remove.key) {
            keyMap[remove.key] = node;
          }

          domNode.removeChild(node);
        }

        var length = childNodes.length;

        for (var j = 0; j < moves.inserts.length; j++) {
          insert = moves.inserts[j];
          node = keyMap[insert.key];
          domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to]);
        }
      }

      __varRecorder__$g.reorderChildren = reorderChildren;

      function replaceRoot(oldRoot, newRoot) {
        if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
          oldRoot.parentNode.replaceChild(newRoot, oldRoot);
        }

        return newRoot;
      }

      __varRecorder__$g.replaceRoot = replaceRoot;
      __varRecorder__$g.commonjsHelpers = commonjsHelpers;
      __varRecorder__$g.require$$0 = applyProperties_1;
      __varRecorder__$g.require$$1 = isWidget_1;
      __varRecorder__$g.require$$2 = vpatch;
      __varRecorder__$g.require$$3 = updateWidget_1;
      __varRecorder__$g.applyProperties = __varRecorder__$g.require$$0;
      __varRecorder__$g.isWidget = __varRecorder__$g.require$$1;
      __varRecorder__$g.VPatch = __varRecorder__$g.require$$2;
      __varRecorder__$g.updateWidget = __varRecorder__$g.require$$3;
      __varRecorder__$g.patchOp = __varRecorder__$g.applyPatch;
      var patchOp = __varRecorder__$g.patchOp;
      var patchOp = __varRecorder__$g.patchOp;
      __varRecorder__$g.__moduleExports = patchOp;
      __varRecorder__$g.patchOp = patchOp;
      __varRecorder__$g["default"] = patchOp;

      var __varRecorder__$f = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vdom/patch.js");

      function patch(rootNode, patches, renderOptions) {
        renderOptions = renderOptions || {};
        renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch ? renderOptions.patch : __varRecorder__$f.patchRecursive;
        renderOptions.render = renderOptions.render || __varRecorder__$f.render;
        return renderOptions.patch(rootNode, patches, renderOptions);
      }

      __varRecorder__$f.patch = patch;

      function patchRecursive(rootNode, patches, renderOptions) {
        var indices = __varRecorder__$f.patchIndices(patches);

        if (indices.length === 0) {
          return rootNode;
        }

        var index = __varRecorder__$f.domIndex(rootNode, patches.a, indices);

        var ownerDocument = rootNode.ownerDocument;

        if (!renderOptions.document && ownerDocument !== document$1) {
          renderOptions.document = ownerDocument;
        }

        for (var i = 0; i < indices.length; i++) {
          var nodeIndex = indices[i];
          rootNode = __varRecorder__$f.applyPatch(rootNode, index[nodeIndex], patches[nodeIndex], renderOptions);
        }

        return rootNode;
      }

      __varRecorder__$f.patchRecursive = patchRecursive;

      function applyPatch(rootNode, domNode, patchList, renderOptions) {
        if (!domNode) {
          return rootNode;
        }

        var newNode;

        if (__varRecorder__$f.isArray(patchList)) {
          for (var i = 0; i < patchList.length; i++) {
            newNode = __varRecorder__$f.patchOp(patchList[i], domNode, renderOptions);

            if (domNode === rootNode) {
              rootNode = newNode;
            }
          }
        } else {
          newNode = __varRecorder__$f.patchOp(patchList, domNode, renderOptions);

          if (domNode === rootNode) {
            rootNode = newNode;
          }
        }

        return rootNode;
      }

      __varRecorder__$f.applyPatch = applyPatch;

      function patchIndices(patches) {
        var indices = [];

        for (var key in patches) {
          if (key !== "a") {
            indices.push(Number(key));
          }
        }

        return indices;
      }

      __varRecorder__$f.patchIndices = patchIndices;
      __varRecorder__$f.commonjsHelpers = commonjsHelpers;
      __varRecorder__$f.require$$0 = document$4.exports;
      __varRecorder__$f.require$$1 = _0_1_0;
      __varRecorder__$f.require$$2 = createElement_1$1;
      __varRecorder__$f.require$$3 = domIndex_1;
      __varRecorder__$f.require$$4 = patchOp;
      var document$1 = __varRecorder__$f.require$$0;
      __varRecorder__$f.isArray = __varRecorder__$f.require$$1;
      __varRecorder__$f.render = __varRecorder__$f.require$$2;
      __varRecorder__$f.domIndex = __varRecorder__$f.require$$3;
      __varRecorder__$f.patchOp = __varRecorder__$f.require$$4;
      __varRecorder__$f.patch_1 = __varRecorder__$f.patch;
      var patch_1$1 = __varRecorder__$f.patch_1;
      var patch_1$1 = __varRecorder__$f.patch_1;
      __varRecorder__$f.__moduleExports = patch_1$1;
      __varRecorder__$f.patch_1 = patch_1$1;
      __varRecorder__$f["default"] = patch_1$1;

      var __varRecorder__$e = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/patch.js");
      __varRecorder__$e.commonjsHelpers = commonjsHelpers;
      __varRecorder__$e.require$$0 = patch_1$1;
      __varRecorder__$e.patch = __varRecorder__$e.require$$0;
      __varRecorder__$e.patch_1 = __varRecorder__$e.patch;
      var patch_1 = __varRecorder__$e.patch_1;
      var patch_1 = __varRecorder__$e.patch_1;
      __varRecorder__$e.__moduleExports = patch_1;
      __varRecorder__$e.patch_1 = patch_1;
      __varRecorder__$e["default"] = patch_1;

      var __varRecorder__$d = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/vnode.js");

      function VirtualNode(tagName, properties, children, key, namespace) {
        this.tagName = tagName;
        this.properties = properties || __varRecorder__$d.noProperties;
        this.children = children || __varRecorder__$d.noChildren;
        this.key = key != null ? String(key) : undefined;
        this.namespace = typeof namespace === "string" ? namespace : null;
        var count = children && children.length || 0;
        var descendants = 0;
        var hasWidgets = false;
        var hasThunks = false;
        var descendantHooks = false;
        var hooks;

        for (var propName in properties) {
          if (properties.hasOwnProperty(propName)) {
            var property = properties[propName];

            if (__varRecorder__$d.isVHook(property) && property.unhook) {
              if (!hooks) {
                hooks = {};
              }

              hooks[propName] = property;
            }
          }
        }

        for (var i = 0; i < count; i++) {
          var child = children[i];

          if (__varRecorder__$d.isVNode(child)) {
            descendants += child.count || 0;

            if (!hasWidgets && child.hasWidgets) {
              hasWidgets = true;
            }

            if (!hasThunks && child.hasThunks) {
              hasThunks = true;
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
              descendantHooks = true;
            }
          } else if (!hasWidgets && __varRecorder__$d.isWidget(child)) {
            if (typeof child.destroy === "function") {
              hasWidgets = true;
            }
          } else if (!hasThunks && __varRecorder__$d.isThunk(child)) {
            hasThunks = true;
          }
        }

        this.count = count + descendants;
        this.hasWidgets = hasWidgets;
        this.hasThunks = hasThunks;
        this.hooks = hooks;
        this.descendantHooks = descendantHooks;
      }

      __varRecorder__$d.VirtualNode = VirtualNode;
      __varRecorder__$d.commonjsHelpers = commonjsHelpers;
      __varRecorder__$d.require$$0 = version;
      __varRecorder__$d.require$$1 = isVnode;
      __varRecorder__$d.require$$2 = isWidget_1;
      __varRecorder__$d.require$$3 = isThunk_1;
      __varRecorder__$d.require$$4 = isVhook;
      __varRecorder__$d.version = __varRecorder__$d.require$$0;
      __varRecorder__$d.isVNode = __varRecorder__$d.require$$1;
      __varRecorder__$d.isWidget = __varRecorder__$d.require$$2;
      __varRecorder__$d.isThunk = __varRecorder__$d.require$$3;
      __varRecorder__$d.isVHook = __varRecorder__$d.require$$4;
      __varRecorder__$d.vnode = __varRecorder__$d.VirtualNode;
      __varRecorder__$d.noProperties = {};
      __varRecorder__$d.noChildren = [];
      __varRecorder__$d.VirtualNode.prototype.version = __varRecorder__$d.version;
      __varRecorder__$d.VirtualNode.prototype.type = "VirtualNode";
      var vnode = __varRecorder__$d.vnode;
      var vnode = __varRecorder__$d.vnode;
      __varRecorder__$d.__moduleExports = vnode;
      __varRecorder__$d.vnode = vnode;
      __varRecorder__$d["default"] = vnode;

      var __varRecorder__$c = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/vnode/vtext.js");

      function VirtualText(text) {
        this.text = String(text);
      }

      __varRecorder__$c.VirtualText = VirtualText;
      __varRecorder__$c.commonjsHelpers = commonjsHelpers;
      __varRecorder__$c.require$$0 = version;
      __varRecorder__$c.version = __varRecorder__$c.require$$0;
      __varRecorder__$c.vtext = __varRecorder__$c.VirtualText;
      __varRecorder__$c.VirtualText.prototype.version = __varRecorder__$c.version;
      __varRecorder__$c.VirtualText.prototype.type = "VirtualText";
      var vtext = __varRecorder__$c.vtext;
      var vtext = __varRecorder__$c.vtext;
      __varRecorder__$c.__moduleExports = vtext;
      __varRecorder__$c.vtext = vtext;
      __varRecorder__$c["default"] = vtext;

      var __varRecorder__$b = lively.FreezerRuntime.recorderFor("lively.next-node_modules/browser-split/0.0.1/index.js");
      __varRecorder__$b.commonjsHelpers = commonjsHelpers;

      __varRecorder__$b._0_0_1 = function split(undef) {
        var nativeSplit = String.prototype.split,
            compliantExecNpcg = /()??/.exec("")[1] === undef,
            self;

        self = function self(str, separator, limit) {
          if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
            return nativeSplit.call(str, separator, limit);
          }

          var output = [],
              flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + (separator.sticky ? "y" : ""),
              lastLastIndex = 0,
              separator = new RegExp(separator.source, flags + "g"),
              separator2,
              match,
              lastIndex,
              lastLength;
          str += "";

          if (!compliantExecNpcg) {
            separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
          }

          limit = limit === undef ? -1 >>> 0 : limit >>> 0;

          while (match = separator.exec(str)) {
            lastIndex = match.index + match[0].length;

            if (lastIndex > lastLastIndex) {
              output.push(str.slice(lastLastIndex, match.index));

              if (!compliantExecNpcg && match.length > 1) {
                match[0].replace(separator2, function () {
                  for (var i = 1; i < arguments.length - 2; i++) {
                    if (arguments[i] === undef) {
                      match[i] = undef;
                    }
                  }
                });
              }

              if (match.length > 1 && match.index < str.length) {
                Array.prototype.push.apply(output, match.slice(1));
              }

              lastLength = match[0].length;
              lastLastIndex = lastIndex;

              if (output.length >= limit) {
                break;
              }
            }

            if (separator.lastIndex === match.index) {
              separator.lastIndex++;
            }
          }

          if (lastLastIndex === str.length) {
            if (lastLength || !separator.test("")) {
              output.push("");
            }
          } else {
            output.push(str.slice(lastLastIndex));
          }

          return output.length > limit ? output.slice(0, limit) : output;
        };

        return self;
      }();

      var _0_0_1 = __varRecorder__$b._0_0_1;
      var _0_0_1 = __varRecorder__$b._0_0_1;
      __varRecorder__$b.__moduleExports = _0_0_1;
      __varRecorder__$b._0_0_1 = _0_0_1;
      __varRecorder__$b["default"] = _0_0_1;

      var __varRecorder__$a = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/virtual-hyperscript/parse-tag.js");

      function parseTag(tag, props) {
        if (!tag) {
          return "DIV";
        }

        var noId = !props.hasOwnProperty("id");

        var tagParts = __varRecorder__$a.split(tag, __varRecorder__$a.classIdSplit);

        var tagName = null;

        if (__varRecorder__$a.notClassId.test(tagParts[1])) {
          tagName = "DIV";
        }

        var classes, part, type, i;

        for (i = 0; i < tagParts.length; i++) {
          part = tagParts[i];

          if (!part) {
            continue;
          }

          type = part.charAt(0);

          if (!tagName) {
            tagName = part;
          } else if (type === ".") {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
          } else if (type === "#" && noId) {
            props.id = part.substring(1, part.length);
          }
        }

        if (classes) {
          if (props.className) {
            classes.push(props.className);
          }

          props.className = classes.join(" ");
        }

        return props.namespace ? tagName : tagName.toUpperCase();
      }

      __varRecorder__$a.parseTag = parseTag;
      __varRecorder__$a.commonjsHelpers = commonjsHelpers;
      __varRecorder__$a.require$$0 = _0_0_1;

      __varRecorder__$a.split = __varRecorder__$a.require$$0;
      __varRecorder__$a.classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
      __varRecorder__$a.notClassId = /^\.|#/;
      __varRecorder__$a.parseTag_1 = __varRecorder__$a.parseTag;
      var parseTag_1 = __varRecorder__$a.parseTag_1;
      var parseTag_1 = __varRecorder__$a.parseTag_1;
      __varRecorder__$a.__moduleExports = parseTag_1;
      __varRecorder__$a.parseTag_1 = parseTag_1;
      __varRecorder__$a["default"] = parseTag_1;

      var __varRecorder__$9 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/virtual-hyperscript/hooks/soft-set-hook.js");

      function SoftSetHook(value) {
        if (!(this instanceof SoftSetHook)) {
          return new SoftSetHook(value);
        }

        this.value = value;
      }

      __varRecorder__$9.SoftSetHook = SoftSetHook;
      __varRecorder__$9.commonjsHelpers = commonjsHelpers;

      __varRecorder__$9.softSetHook = __varRecorder__$9.SoftSetHook;

      __varRecorder__$9.SoftSetHook.prototype.hook = function (node, propertyName) {
        if (node[propertyName] !== this.value) {
          node[propertyName] = this.value;
        }
      };

      var softSetHook = __varRecorder__$9.softSetHook;
      var softSetHook = __varRecorder__$9.softSetHook;
      __varRecorder__$9.__moduleExports = softSetHook;
      __varRecorder__$9.softSetHook = softSetHook;
      __varRecorder__$9["default"] = softSetHook;

      var __varRecorder__$8 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/individual/3.0.0/index.js");

      function Individual(key, value) {
        if (key in __varRecorder__$8.root) {
          return __varRecorder__$8.root[key];
        }

        __varRecorder__$8.root[key] = value;
        return value;
      }

      __varRecorder__$8.Individual = Individual;
      __varRecorder__$8.commonjsHelpers = commonjsHelpers;

      __varRecorder__$8.root = typeof window !== "undefined" ? window : typeof __varRecorder__$8.commonjsHelpers.commonjsGlobal !== "undefined" ? __varRecorder__$8.commonjsHelpers.commonjsGlobal : {};
      __varRecorder__$8._3_0_0 = __varRecorder__$8.Individual;
      var _3_0_0 = __varRecorder__$8._3_0_0;
      var _3_0_0 = __varRecorder__$8._3_0_0;
      __varRecorder__$8.__moduleExports = _3_0_0;
      __varRecorder__$8._3_0_0 = _3_0_0;
      __varRecorder__$8["default"] = _3_0_0;

      var __varRecorder__$7 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/individual/3.0.0/one-version.js");

      function OneVersion(moduleName, version, defaultValue) {
        var key = "__INDIVIDUAL_ONE_VERSION_" + moduleName;
        var enforceKey = key + "_ENFORCE_SINGLETON";

        var versionValue = __varRecorder__$7.Individual(enforceKey, version);

        if (versionValue !== version) {
          throw new Error("Can only have one copy of " + moduleName + ".\n" + "You already have version " + versionValue + " installed.\n" + "This means you cannot install version " + version);
        }

        return __varRecorder__$7.Individual(key, defaultValue);
      }

      __varRecorder__$7.OneVersion = OneVersion;
      __varRecorder__$7.commonjsHelpers = commonjsHelpers;
      __varRecorder__$7.require$$0 = _3_0_0;

      __varRecorder__$7.Individual = __varRecorder__$7.require$$0;
      __varRecorder__$7.oneVersion = __varRecorder__$7.OneVersion;
      var oneVersion = __varRecorder__$7.oneVersion;
      var oneVersion = __varRecorder__$7.oneVersion;
      __varRecorder__$7.__moduleExports = oneVersion;
      __varRecorder__$7.oneVersion = oneVersion;
      __varRecorder__$7["default"] = oneVersion;

      var __varRecorder__$6 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/ev-store/7.0.0/index.js");

      function EvStore(elem) {
        var hash = elem[__varRecorder__$6.hashKey];

        if (!hash) {
          hash = elem[__varRecorder__$6.hashKey] = {};
        }

        return hash;
      }

      __varRecorder__$6.EvStore = EvStore;
      __varRecorder__$6.commonjsHelpers = commonjsHelpers;
      __varRecorder__$6.require$$0 = oneVersion;

      __varRecorder__$6.OneVersionConstraint = __varRecorder__$6.require$$0;
      __varRecorder__$6.MY_VERSION = "7";

      __varRecorder__$6.OneVersionConstraint("ev-store", __varRecorder__$6.MY_VERSION);

      __varRecorder__$6.hashKey = "__EV_STORE_KEY@" + __varRecorder__$6.MY_VERSION;
      __varRecorder__$6._7_0_0 = __varRecorder__$6.EvStore;
      var _7_0_0 = __varRecorder__$6._7_0_0;
      var _7_0_0 = __varRecorder__$6._7_0_0;
      __varRecorder__$6.__moduleExports = _7_0_0;
      __varRecorder__$6._7_0_0 = _7_0_0;
      __varRecorder__$6["default"] = _7_0_0;

      var __varRecorder__$5 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/virtual-hyperscript/hooks/ev-hook.js");

      function EvHook(value) {
        if (!(this instanceof EvHook)) {
          return new EvHook(value);
        }

        this.value = value;
      }

      __varRecorder__$5.EvHook = EvHook;
      __varRecorder__$5.commonjsHelpers = commonjsHelpers;
      __varRecorder__$5.require$$0 = _7_0_0;

      __varRecorder__$5.EvStore = __varRecorder__$5.require$$0;
      __varRecorder__$5.evHook = __varRecorder__$5.EvHook;

      __varRecorder__$5.EvHook.prototype.hook = function (node, propertyName) {
        var es = __varRecorder__$5.EvStore(node);

        var propName = propertyName.substr(3);
        es[propName] = this.value;
      };

      __varRecorder__$5.EvHook.prototype.unhook = function (node, propertyName) {
        var es = __varRecorder__$5.EvStore(node);

        var propName = propertyName.substr(3);
        es[propName] = undefined;
      };

      var evHook = __varRecorder__$5.evHook;
      var evHook = __varRecorder__$5.evHook;
      __varRecorder__$5.__moduleExports = evHook;
      __varRecorder__$5.evHook = evHook;
      __varRecorder__$5["default"] = evHook;

      var __varRecorder__$4 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/virtual-hyperscript/index.js");

      function h(tagName, properties, children) {
        var childNodes = [];
        var tag, props, key, namespace;

        if (!children && __varRecorder__$4.isChildren(properties)) {
          children = properties;
          props = {};
        }

        props = props || properties || {};
        tag = __varRecorder__$4.parseTag(tagName, props);

        if (props.hasOwnProperty("key")) {
          key = props.key;
          props.key = undefined;
        }

        if (props.hasOwnProperty("namespace")) {
          namespace = props.namespace;
          props.namespace = undefined;
        }

        if (tag === "INPUT" && !namespace && props.hasOwnProperty("value") && props.value !== undefined && !__varRecorder__$4.isHook(props.value)) {
          props.value = __varRecorder__$4.softSetHook(props.value);
        }

        __varRecorder__$4.transformProperties(props);

        if (children !== undefined && children !== null) {
          __varRecorder__$4.addChild(children, childNodes, tag, props);
        }

        return new __varRecorder__$4.VNode(tag, props, childNodes, key, namespace);
      }

      __varRecorder__$4.h = h;

      function addChild(c, childNodes, tag, props) {
        if (typeof c === "string") {
          childNodes.push(new __varRecorder__$4.VText(c));
        } else if (typeof c === "number") {
          childNodes.push(new __varRecorder__$4.VText(String(c)));
        } else if (__varRecorder__$4.isChild(c)) {
          childNodes.push(c);
        } else if (__varRecorder__$4.isArray(c)) {
          for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
          }
        } else if (c === null || c === undefined) {
          return;
        } else {
          throw __varRecorder__$4.UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
              tagName: tag,
              properties: props
            }
          });
        }
      }

      __varRecorder__$4.addChild = addChild;

      function transformProperties(props) {
        for (var propName in props) {
          if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (__varRecorder__$4.isHook(value)) {
              continue;
            }

            if (propName.substr(0, 3) === "ev-") {
              props[propName] = __varRecorder__$4.evHook(value);
            }
          }
        }
      }

      __varRecorder__$4.transformProperties = transformProperties;

      function isChild(x) {
        return __varRecorder__$4.isVNode(x) || __varRecorder__$4.isVText(x) || __varRecorder__$4.isWidget(x) || __varRecorder__$4.isVThunk(x);
      }

      __varRecorder__$4.isChild = isChild;

      function isChildren(x) {
        return typeof x === "string" || __varRecorder__$4.isArray(x) || __varRecorder__$4.isChild(x);
      }

      __varRecorder__$4.isChildren = isChildren;

      function UnexpectedVirtualElement(data) {
        var err = new Error();
        err.type = "virtual-hyperscript.unexpected.virtual-element";
        err.message = "Unexpected virtual child passed to h().\n" + "Expected a VNode / Vthunk / VWidget / string but:\n" + "got:\n" + __varRecorder__$4.errorString(data.foreignObject) + ".\n" + "The parent vnode is:\n" + __varRecorder__$4.errorString(data.parentVnode);
        err.foreignObject = data.foreignObject;
        err.parentVnode = data.parentVnode;
        return err;
      }

      __varRecorder__$4.UnexpectedVirtualElement = UnexpectedVirtualElement;

      function errorString(obj) {
        try {
          return JSON.stringify(obj, null, "    ");
        } catch (e) {
          return String(obj);
        }
      }

      __varRecorder__$4.errorString = errorString;
      __varRecorder__$4.commonjsHelpers = commonjsHelpers;
      __varRecorder__$4.require$$0 = _0_1_0;
      __varRecorder__$4.require$$1 = vnode;
      __varRecorder__$4.require$$2 = vtext;
      __varRecorder__$4.require$$3 = isVnode;
      __varRecorder__$4.require$$4 = isVtext;
      __varRecorder__$4.require$$5 = isWidget_1;
      __varRecorder__$4.require$$6 = isVhook;
      __varRecorder__$4.require$$7 = isThunk_1;
      __varRecorder__$4.require$$8 = parseTag_1;
      __varRecorder__$4.require$$9 = softSetHook;
      __varRecorder__$4.require$$10 = evHook;

      __varRecorder__$4.isArray = __varRecorder__$4.require$$0;
      __varRecorder__$4.VNode = __varRecorder__$4.require$$1;
      __varRecorder__$4.VText = __varRecorder__$4.require$$2;
      __varRecorder__$4.isVNode = __varRecorder__$4.require$$3;
      __varRecorder__$4.isVText = __varRecorder__$4.require$$4;
      __varRecorder__$4.isWidget = __varRecorder__$4.require$$5;
      __varRecorder__$4.isHook = __varRecorder__$4.require$$6;
      __varRecorder__$4.isVThunk = __varRecorder__$4.require$$7;
      __varRecorder__$4.parseTag = __varRecorder__$4.require$$8;
      __varRecorder__$4.softSetHook = __varRecorder__$4.require$$9;
      __varRecorder__$4.evHook = __varRecorder__$4.require$$10;
      __varRecorder__$4.virtualHyperscript = __varRecorder__$4.h;
      var virtualHyperscript = __varRecorder__$4.virtualHyperscript;
      var virtualHyperscript = __varRecorder__$4.virtualHyperscript;
      __varRecorder__$4.__moduleExports = virtualHyperscript;
      __varRecorder__$4.virtualHyperscript = virtualHyperscript;
      __varRecorder__$4["default"] = virtualHyperscript;

      var __varRecorder__$3 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/h.js");
      __varRecorder__$3.commonjsHelpers = commonjsHelpers;
      __varRecorder__$3.require$$0 = virtualHyperscript;
      __varRecorder__$3.h = __varRecorder__$3.require$$0;
      __varRecorder__$3.h_1 = __varRecorder__$3.h;
      var h_1 = __varRecorder__$3.h_1;
      var h_1 = __varRecorder__$3.h_1;
      __varRecorder__$3.__moduleExports = h_1;
      __varRecorder__$3.h_1 = h_1;
      __varRecorder__$3["default"] = h_1;

      var __varRecorder__$2 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/create-element.js");
      __varRecorder__$2.commonjsHelpers = commonjsHelpers;
      __varRecorder__$2.require$$0 = createElement_1$1;
      __varRecorder__$2.createElement = __varRecorder__$2.require$$0;
      __varRecorder__$2.createElement_1 = __varRecorder__$2.createElement;
      var createElement_1 = __varRecorder__$2.createElement_1;
      var createElement_1 = __varRecorder__$2.createElement_1;
      __varRecorder__$2.__moduleExports = createElement_1;
      __varRecorder__$2.createElement_1 = createElement_1;
      __varRecorder__$2["default"] = createElement_1;

      var __varRecorder__$1 = lively.FreezerRuntime.recorderFor("lively.next-node_modules/virtual-dom/2.1.1/index.js");
      __varRecorder__$1.commonjsHelpers = commonjsHelpers;
      __varRecorder__$1.require$$0 = diff_1;
      __varRecorder__$1.require$$1 = patch_1;
      __varRecorder__$1.require$$2 = h_1;
      __varRecorder__$1.require$$3 = createElement_1;
      __varRecorder__$1.require$$4 = vnode;
      __varRecorder__$1.require$$5 = vtext;
      __varRecorder__$1.diff = __varRecorder__$1.require$$0;
      __varRecorder__$1.patch = __varRecorder__$1.require$$1;
      __varRecorder__$1.h = __varRecorder__$1.require$$2;
      __varRecorder__$1.create = __varRecorder__$1.require$$3;
      __varRecorder__$1.VNode = __varRecorder__$1.require$$4;
      __varRecorder__$1.VText = __varRecorder__$1.require$$5;
      __varRecorder__$1._2_1_1 = {
        diff: __varRecorder__$1.diff,
        patch: __varRecorder__$1.patch,
        h: __varRecorder__$1.h,
        create: __varRecorder__$1.create,
        VNode: __varRecorder__$1.VNode,
        VText: __varRecorder__$1.VText
      };
      var _2_1_1 = __varRecorder__$1._2_1_1;
      var _2_1_1 = __varRecorder__$1._2_1_1;
      __varRecorder__$1.__moduleExports = _2_1_1;
      __varRecorder__$1._2_1_1 = _2_1_1;
      __varRecorder__$1["default"] = _2_1_1;

      var __varRecorder__ = lively.FreezerRuntime.recorderFor("lively.morphic/rendering/html-generator.js");

      function morphToNode(morph) {
        var renderer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : morph.env.renderer;

        var vNode = morph.render(renderer),
            node = __varRecorder__.createNode(vNode);

        node = __varRecorder__.callMorphHTMLTransforms(morph, node, []);
        return node;
      }

      __varRecorder__.morphToNode = morphToNode;

      function callMorphHTMLTransforms(morph, node) {
        var parents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var morphNode = node.id === morph.id ? node : node.querySelector("#" + morph.id);

        if (!morphNode) {
          console.warn("Cannot find node for morph ".concat(morph));
          return;
        }

        morph.submorphs.forEach(function (ea) {
          return callMorphHTMLTransforms(ea, morphNode, parents.concat(morph));
        });
        morphNode.className += " " + morph.name.replace(/[\s|"]/g, "-");

        if (typeof morph.htmlExport_transformNode === "function") {
          var newNode = morph.htmlExport_transformNode(morphNode);
          if (newNode !== morphNode && morphNode.parentNode) morphNode.parentNode.replaceChild(newNode, morphNode);
          return newNode;
        }

        return morphNode;
      }

      __varRecorder__.callMorphHTMLTransforms = callMorphHTMLTransforms;

      function morphicStyles() {
        var styleLinks = Array.from(document.querySelectorAll("link")).map(function (ea) {
          return ea.outerHTML.replace("href=\"".concat(document.location.origin), "href=\"");
        }).join("\n"),
            styles = Array.from(document.querySelectorAll("style")).map(function (ea) {
          return ea.outerHTML;
        }).join("\n");
        return "".concat(styles, "\n").concat(styleLinks);
      }

      __varRecorder__.morphicStyles = morphicStyles;

      function generateHTMLForAll(_x, _x2, _x3) {
        return _generateHTMLForAll.apply(this, arguments);
      }

      function _generateHTMLForAll() {
        _generateHTMLForAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(morphs, dirResource, options) {
          var _iterator, _step, morph, name;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _iterator = _createForOfIteratorHelper(morphs);
                  _context.prev = 2;

                  _iterator.s();

                case 4:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 12;
                    break;
                  }

                  morph = _step.value;
                  name = morph.name;
                  if (!name.endsWith(".html")) name += ".html";
                  _context.next = 10;
                  return __varRecorder__.generateHTML(morph, dirResource.join(name), options);

                case 10:
                  _context.next = 4;
                  break;

                case 12:
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](2);

                  _iterator.e(_context.t0);

                case 17:
                  _context.prev = 17;

                  _iterator.f();

                  return _context.finish(17);

                case 20:
                  $world.setStatusMessage("written files to ".concat(dirResource.url));
                  _context.next = 26;
                  break;

                case 23:
                  _context.prev = 23;
                  _context.t1 = _context["catch"](0);
                  $world.showError(_context.t1);

                case 26:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 23], [2, 14, 17, 20]]);
        }));
        return _generateHTMLForAll.apply(this, arguments);
      }

      __varRecorder__.generateHTMLForAll = generateHTMLForAll;

      function generateHTML(_x4, _x5) {
        return _generateHTML.apply(this, arguments);
      }

      function _generateHTML() {
        _generateHTML = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(morph, htmlResource) {
          var options,
              _options,
              _options$isFragment,
              isFragment,
              _options$addStyles,
              addStyles,
              containerOpts,
              _options$removeTarget,
              removeTargetFromLinks,
              addMetaTags,
              addScripts,
              appendHTML,
              _options$title,
              title,
              renderFreeStanding,
              _ref,
              containerId,
              root,
              htmlClassName,
              morphHtml,
              html,
              metaTags,
              tagMarkup,
              _iterator2,
              _step2,
              spec,
              markup,
              prop,
              htmlMorphs,
              _args2 = arguments;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  options = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};

                  if (htmlResource && !htmlResource.isResource) {
                    options = htmlResource;
                    htmlResource = null;
                  }

                  _options = options, _options$isFragment = _options.isFragment, isFragment = _options$isFragment === void 0 ? false : _options$isFragment, _options$addStyles = _options.addStyles, addStyles = _options$addStyles === void 0 ? true : _options$addStyles, containerOpts = _options.container, _options$removeTarget = _options.removeTargetFromLinks, removeTargetFromLinks = _options$removeTarget === void 0 ? true : _options$removeTarget, addMetaTags = _options.addMetaTags, addScripts = _options.addScripts, appendHTML = _options.appendHTML, _options$title = _options.title, title = _options$title === void 0 ? false : _options$title, renderFreeStanding = containerOpts == false, _ref = containerOpts || {}, containerId = _ref.id, root = __varRecorder__.morphToNode(morph), htmlClassName = "html-".concat(morph.name.replace(/[\s|"]/g, "-"));
                  root.style.transform = "";

                  if (removeTargetFromLinks) {
                    __varRecorder__.tree.postwalk(root, function (node) {
                      if (String(node.tagName).toLowerCase() !== "a") return;
                      if (node.target === "_blank" && !node.getAttribute("href").startsWith("http")) node.setAttribute("target", "");
                    }, function (n) {
                      return n.childNodes;
                    });
                  }

                  morphHtml = root.outerHTML;

                  if (!renderFreeStanding) {
                    morphHtml = "<div class=\"exported-morph-container ".concat(htmlClassName, "\"") + (containerId ? " id=\"".concat(containerId, "\" ") : "") + ">" + "".concat(morphHtml, "\n</div>");
                  }

                  if (isFragment) {
                    html = addStyles ? __varRecorder__.morphicStyles() + morphHtml : morphHtml;
                    if (appendHTML) html += appendHTML;
                  } else {
                    html = "<head>\n     ".concat(title ? "<title>".concat(title, "</title>") : "", "\n     <meta content=\"utf-8\" http-equiv=\"encoding\">\n     <meta content=\"text/html;charset=utf-8\" http-equiv=\"Content-Type\">");

                    if (addMetaTags) {
                      metaTags = typeof addMetaTags === "function" ? addMetaTags(morph, htmlResource, options) : addMetaTags, tagMarkup = [];
                      _iterator2 = _createForOfIteratorHelper(metaTags);

                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          spec = _step2.value;
                          markup = "<meta";

                          for (prop in spec) {
                            markup += " ".concat(prop, "=\"").concat(spec[prop], "\"");
                          }

                          markup += ">";
                          tagMarkup.push(markup);
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }

                      html += "\n" + tagMarkup.join("\n");
                    }

                    if (addStyles) html += __varRecorder__.morphicStyles();
                    if (addScripts) html += addScripts;
                    html += "</head><body style=\"margin: 0; overflow: hidden; width: 100%; height: 100%;\">\n" + morphHtml + "\n";
                    if (appendHTML) html += appendHTML + "\n";
                    html += "</body>";
                  }

                  if (!htmlResource) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return htmlResource.write(html);

                case 11:
                  htmlMorphs = [];
                  htmlMorphs.push.apply(htmlMorphs, _toConsumableArray(morph.withAllSubmorphsSelect(function (ea) {
                    return ea.isHTMLMorph;
                  })));
                  htmlMorphs.forEach(function (ea) {
                    var o = ea.owner,
                        i = o.submorphs.indexOf(ea);
                    ea.remove();
                    setTimeout(function () {
                      return o.addMorphAt(ea, i);
                    }, 0);
                  });
                  return _context2.abrupt("return", html);

                case 15:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _generateHTML.apply(this, arguments);
      }

      __varRecorder__.generateHTML = generateHTML;

      function showPreview(html, iframeMorph, outputFile) {
        if (!iframeMorph || !iframeMorph.world()) {
          iframeMorph = this._iframeMorph = new __varRecorder__.IFrameMorph();
          iframeMorph.openInWindow({
            title: "rendered HTML"
          });
        }

        var url = outputFile && outputFile.url;

        if (url) {
          iframeMorph.loadURL(url);
        } else iframeMorph.displayHTML(html);

        return iframeMorph;
      }

      __varRecorder__.showPreview = showPreview;
      __varRecorder__.tidyHtml = tidyHtml;
      __varRecorder__.IFrameMorph = IFrameMorph;
      __varRecorder__.show = _missingExportShim;
      __varRecorder__.createNode = _2_1_1.create;
      __varRecorder__.tree = tree;
      __varRecorder__.morphToNode = morphToNode;
      __varRecorder__.morphicStyles = morphicStyles;
      __varRecorder__.generateHTMLForAll = generateHTMLForAll;
      __varRecorder__.generateHTML = generateHTML;

    })
  };
}));
