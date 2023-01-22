console.log("Drink Water!");


function listen(eventType, selector, callback) {
    document.querySelector(selector).addEventListener(eventType, callback);
}

function getCheck(checked){
    const get= document.querySelectorAll('input[type=checkbox]'); 
    for(var i= 0; i<get.length; i++){
        get[i].checked = false;}
        console.log(get) 
}

listen("click", "#clearButton", getCheck)

  
  