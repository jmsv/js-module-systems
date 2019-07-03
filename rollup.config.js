module.exports = {
  input: 'index.js',
  output: [
    {
      file: 'bundles/cjs.js',
      format: 'cjs'
    },
    {
      file: 'bundles/esm.js',
      format: 'esm'
    },
    {
      file: 'bundles/amd.js',
      format: 'amd',
      amd: {
        id: 'hello-bundle'
      }
    },
    {
      name: 'hello',
      file: 'bundles/umd.js',
      format: 'umd',
      amd: {
        id: 'hello-bundle'
      }
    },
    {
      name: 'hello',
      file: 'bundles/iife.js',
      format: 'iife'
    }
  ]
}
