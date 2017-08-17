(function () {
  var startingPopulation = 200;//initial population
  var birthRate = .1;//percentage by week
  var numberOfWeeks = 5;//simulation time period
  var population = startingPopulation;

  function validateBR (){
    var work = (birthRate.indexOf('%'));
    if(birthRate.indexOf('%')>0) {//percent sign is used
      var tempPercent = (birthRate.substring(0, work))/100;
      return tempPercent;
    }
  }

  //Calculate
  function simulation () {
    var loopStep;
    for (loopStep = 0; loopStep < numberOfWeeks; loopStep++)
    {
      population = population + (population * birthRate);
      //console.log(loopStep + " : " + population);
    }
    console.log("Starting Population: " + startingPopulation);
    console.log("Birth Rate: " + birthRate);
    console.log("Number of Weeks: " + numberOfWeeks);
    console.log("Final Population: " + population);
  }


//take care of birthRate cleaning
// console.log(birthRate);
// console.log(startingPopulation);
// console.log(numberOfWeeks);
// console.log(population);

if(typeof birthRate == 'string') {
  birthRate = validateBR();
  console.log(birthRate);
}
simulation();




})()
