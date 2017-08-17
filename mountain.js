(function () {



let mt = [400, 55000, 4200, 42424, 1900, 646];
mt.sort(function(a, b) {
  //console.log(a-b);
  return a - b;
});

console.log(mt);
console.log(Math.max.apply(null,mt));
})()
