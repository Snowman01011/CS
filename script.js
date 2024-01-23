//calling the assigned button function ducx()

function ducx() {
  
  //assigning the variable to the input value. Yesley html ko input box ma haleko number lai retrieve garxa.
  var wau = document.getElementById("zzz").value;
  
// Check if the input number is greater than 10
  if (wau > 10) {

    //yo alert message display hunxa yedi wau ko value 10 vanda badi xa vaney (true condition).
  alert("you've entered a number " + wau + " which is greater than 10")
    
  }else{

    //yo alert message display hunxa yedi wau ko value 10 badi xaina vaney (false condition).
    alert("you've entered a number " +  wau + " which is less than 10")
 };
}
