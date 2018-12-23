var obj = {};



obj['item'] = {
  name : ['a']
};

obj['item'].name.push('b');

//obj['item2'] = [];

for(var i = 1; i<= 10;i++){
  obj['item2'] = i || [];
}
console.log(obj);

var cards = [
 {"resourceType":"myRT","id":"1","value":"ha"},
 {"resourceType":"myRT","id":"2","value":"he"},
 {"resourceType":"myRT","id":"3","value":"Li"}
];
var newCards = {};
cards.each(function(o) {
  newCards['name'] = [o.value]
})
console.log(newCards);
