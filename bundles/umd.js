(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('hello-bundle', factory) :
  (global = global || self, global.hello = factory());
}(this, function () { 'use strict';

  const hello = () => {
    console.log('hello');
  };

  const hi = () => {
    console.log('hi');
  };

  // Exports could also use:
  // export { hi as logHi }         // <- to change name of named export
  // export { hello as default }    // <- alternative syntax for default exports

  hello();
  hi();

  return hello;

}));
