/*eslint-env browser*/

//STEP 1
function show_msg(){
    alert("I have been clicked");
}

//STEP 2
window.addEventListener("load", init);
function init() {
    "use strict";
    var msg_btn = window.document.getElementById("msg_btn");
    
    msg_btn.onclick = function () {
        alert("I have been clicked");
    };
}
    


//STEP 3
window.addEventListener("load", init_user);
function init_user() {
    "use strict";
    var user_defined_btn = window.document.getElementById("user_defined_btn");

    //Event handler with user defined function
    user_defined_btn.addEventListener("click", show_btn);
    
    function show_btn () {
        alert("I have been clicked");
    };
}

//STEP 4
window.addEventListener("load", init_callback);
function init_callback() {
    "use strict";
    var callback_btn = window.document.getElementById("callback_btn");
    
    //Event handler with callback function
    callback_btn.addEventListener("click", function () {
        alert("I have been clicked");
    });
}

//STEP 5

