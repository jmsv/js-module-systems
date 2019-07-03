(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define('b', factory)
    : ((global = global || self), (global.b = factory()))
})(this, function() {
  const hello = () => console.log('hello')
  return { hello }
})
