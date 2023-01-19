console.log("Drink Water!");


function listen(eventType, selector, callback) {
    document.querySelector(selector).addEventListener(eventType, callback);
}

function unCheck(){
    var get= document.getElementsByName('check');
    for(var i= 0; i<get.length; i++){
    get[i].checked= false;}
    }

  
  
  