import Vue from 'vue'
// require all files in this directory except index.js
let req = require.context("./", false, /^((?!index).)*\.ts$/);
req.keys().forEach(function(key) {
    let filters = req(key);
    // add each function exported has a filter
    Object.keys(filters).forEach(function(name) {
        Vue.filter(name, filters[name]);
    });
});