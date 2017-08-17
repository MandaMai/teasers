(function () {
  var word = "pickle rick";
  var wordArray = word.split("");
  //console.log(wordArray);//check split
  letter = "a";

  //var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

  /**
   * Array filters items based on search criteria (query)
   */
  function filterItems(query) {
    return wordArray.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }


  var check = filterItems(letter);
  var num = check.length;
  if(num>0) {
    if(num ==1){
      console.log("Yeah, the letter " + letter + " exists " + num + " time in my word");
    } else {
    console.log("Yeah, the letter " + letter + " exists " + num + " times in my word");
  }
  } else {
    console.log("Nope, that letter doesn't exist in my word");
  }


})()
