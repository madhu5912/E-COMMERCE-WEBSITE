function redirect(){
  let x = document.getElementById('name').value;
  document.write('<h1>Hello '+ x + 'Your order is placed successfully. Thank You for ordering.</h1>');

}

var modal = document.getElementById('login-page');
function myfocus(){
    document.getElementById("email").style.background = "lightblue"
  }
  function blurFunction() {
    document.getElementById("email").style.background = "red";
  }

function myFocus(){
    document.getElementById("pswrd").style.background = "lightblue"
  }
function onBlurFunction() {
    document.getElementById("pswrd").style.background = "red";
  }
function onInput(){
    document.getElementById("email").style.background = "transparent"
}
function input(){
    document.getElementById("pswrd").style.background = "transparent"
}


//email validation
function validate() {
  // let x = document.getElementById('email').value;
  var user = document.getElementById("email").value;
  var user2 = document.getElementById("email");
  var re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (re.test(user)) {
      alert("Valid Email");
      // alert("Hi "+x+" we're Sorry for the in-convinience caused by us.");
      return true;
      
  }
  else {
      user2.style.border = "red solid 3px";
      alert("Please provide a valid email")
      return false;
  }
}




//Quantity
let Clicks = 0 ;
function add() {
  Clicks += 1 ;
  document.getElementById('clicks').innerHTML = Clicks ;
};
function del() {
  Clicks -= 1 ;
  document.getElementById('clicks').innerHTML = Clicks ;
}


//Add Text Boxes
var counter = 1;
var textBox="";
function addBox(){
  var div = document.createElement("div");
  div.setAttribute("class","form-address");
  div.setAttribute("id","box_"+counter);

  var textBox="<label>Landmark "+counter+"</label><input type='text' name='address[]' class='form-address' id='Landmark_"+counter+"'><input class='mybox' type='button' value='-' onclick='removeBox(this)' >";
  div.innerHTML=textBox;
  address1.appendChild(div);
  counter++;

}
//remove text boxes
function removeBox(ele){
  ele.parentNode.remove();
}


// function add() {
//   Clicks += 1 ;
//   document.getElementById('click1').innerHTML = Clicks ;
// };
// function del() {
//   Clicks -= 1 ;
//   document.getElementById('click1').innerHTML = Clicks ;
// }









