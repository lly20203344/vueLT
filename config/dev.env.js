'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
console.log('testbms测试的')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://testbms.mhsapp.com"',
})
