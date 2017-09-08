(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['click-behavior'] = global['click-behavior'] || {})));
}(this, (function (exports) { 'use strict';

var clickBehavior = function clickBehavior(config) {
    return function (handler) {
        var lastcall = 0,
            isLoading = false,
            interval = config.interval,
            cb = config.cb;
        function finish() {
            isLoading = false;
        }
        return function (e) {
            if (interval) {
                if (new Date() - lastcall < interval) return;
                lastcall = new Date();
                handler(e);
            } else if (cb) {
                if (!isLoading) {
                    isLoading = true;
                    handler(e, finish);
                }
            } else {
                handler(e);
            }
        };
    };
};

exports.clickBehavior = clickBehavior;

Object.defineProperty(exports, '__esModule', { value: true });

})));
