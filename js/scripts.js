//frontend
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();
    var num = $("input#numberBox").val();
    var array = sieve(num);
    console.log(array);

  });
});


//backend
function sieve(num){
  var array = [];
  for (var i = 2; i <= num; i++){
    array.push(i);
  }
  for(var prime = 2; prime <= num; prime++){
    //make a new array
    var newArray = [];
    //add only numbesrs we want
    array.forEach(function(index){
      if(!(index % prime == 0 && index / prime !=1)){
          newArray.push(index);
      }
    });
    //copy to original array
    array = newArray;
  }
  return array;
}
