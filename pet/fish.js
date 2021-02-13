var images = document.getElementsByTagName('img');
/*
var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="test123";
*/


var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("/pet/fish.html");

document.body.insertBefore (iFrame, document.body.firstChild);

/*
$(document).ready (jQueryMain);

function jQueryMain () {
    $("body").append ('<p>Added by jQuery</p>');
}*/
/*
var footer = document.createElement("footer");
document.body.appendChild(footer); 
*/