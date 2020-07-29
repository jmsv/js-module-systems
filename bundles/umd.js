(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('hello-bundle', factory) :
  (global = global || self, global.hello = factory());
}(this, function () { 'use strict';

  const thing = {
    number: 1
  };

  const thing$1 = {
    number: 2
  };

  const thing$2 = {
    number: 3
  };

  var hello$1 = jStuff = [
    thing, thing$1, thing$2
  ];

  // const hello = () => {
  //   console.log('hello')
  // }

  // const hi = () => {
  //   console.log('hi')
  // }

  // const unused = () => {
  //   console.log('unused')
  // }

  // export default hello
  // export { hi, unused }

  // Exports could also use:
  // export { hi as logHi }         // <- to change name of named export
  // export { hello as default }    // <- alternative syntax for default exports

  var jStuff$1 = /*#__PURE__*/Object.freeze({
    'default': hello$1
  });

  console.log('jStuff.j1 :', undefined);
  console.log('jStuff.j2 :', undefined);

  hello();
  hi();

  return hello;

}));
