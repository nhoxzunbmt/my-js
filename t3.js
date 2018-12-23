const sn30s = require('30-seconds-of-code')
const _ = require('lodash')
var data = {};


data[2018] = []

data[2018].push({ total: 2017,count : []});



for(var i = 0; i <= 2 ; i++){
  //Object.assign(data[2018][0], {count: i});
  //data[2018][0].count.push(i);
}
data[2018][0].count.push({a : 1});


console.log(JSON.stringify(data));
