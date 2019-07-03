const hello = () => console.log('hello')
const hi = () => console.log('hi')

export default hello
export { hi }

// Exports could also use:
// export { hi as logHi }         // <- to change name of named export
// export { hello as default }    // <- alternative syntax for default exports
