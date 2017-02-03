var Immutable = require('immutable');

var a = {test: 1, test2: 'adfa'};
var map1 = Immutable.Map(a);
var map2 = Immutable.Map(a);
console.log(map1.equals(map2));
console.log(map1 == map2);
console.log(map1);
console.log(map2.get('test2'));
