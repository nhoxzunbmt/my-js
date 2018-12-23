const _ = require('lodash');

var myArray = [
    {group: "one", color: "red"},
    {group: "two", color: "blue"},
    {group: "one", color: "green"},
    {group: "one", color: "black"}
];

var group_to_values = myArray.reduce(function (obj, item) {
    obj[item.group] = obj[item.group] || [];
    obj[item.group].push(item.color);
    return obj;
}, {});

var groups = Object.keys(group_to_values).map(function (key) {
    return {group: key, color: group_to_values[key]};
});

groups = Object.entries(group_to_values).map(([group, color]) => ({ nhom : group, mau : color }));

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

//console.log(groupBy(myArray,'group'));


var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}, {
  name: 'Alice',
  books: ['WaseTime'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(accumulator, currentValue) {
  //console.log('-->',accumulator);
  return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

let rs = _.reduce(friends, function(result, value, key) {
  //console.log('--->',_.merge(result,value.books));
  (result[value.name] || (result[value.name] = [])).push(1);
  return result;
}, {});



let rs2 = friends.filter(o => o.age === 18);


console.log(rs2);
