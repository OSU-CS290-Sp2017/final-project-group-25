/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.
 */

 var createTwitButton = document.getElementById('New_Listing_Button');
createTwitButton.addEventListener('click', function() {
  unhideModal();
});
function unhideModal(){
    document.getElementById("New_Post_Background").style.display ="block";
    document.getElementById("Dialog_Window").style.display = "block";
}

var modalCloseButton = document.getElementsByClassName('Close_Button')[0];
modalCloseButton.addEventListener('click', function() {
  closeModal();
});

var modalCloseButton = document.getElementsByClassName('Window_Cancel_Button')[0];
modalCloseButton.addEventListener('click', function() {
  closeModal();
});

function closeModal(){
    document.getElementById("New_Post_Background").style.display ="none";
    document.getElementById("Dialog_Window").style.display = "none";
    document.getElementById("text_input").value = "";
    document.getElementById("Date_Input").value = "";
}

var modalacceptButton = document.getElementsByClassName('Window_Accept_Button')[0];
modalacceptButton.addEventListener('click', function() {
  acceptButton();
});

function acceptButton(){
  var main  = document.createElement("main");

 var article = document.createElement("article");
 console.log(article);
 var div1 = document.createElement("div");
 var i = document.createElement("I");
 var div2 = document.createElement("div");
 var p = document.createElement("P");
 var p2 = document.createElement("P");
 var a = document.createElement("A");

 article.appendChild(div1);
 div1.appendChild(i);
 article.appendChild(div2);
 div2.appendChild(p);
 div2.appendChild(p2);
 p2.appendChild(a);

 article.className = "Listing_Box";
 div1.className = "Description_Field";
 i.className = "fa fa-flag";
 div2.className = "Description_Field";
 p.className = "Text_On_Screen";
 p2.className = "Sale_Date_Time";
 a.className = "#";

 var newtext = document.createTextNode(document.getElementById("text_input").value);
 var newatt = document.createTextNode(document.getElementById("Date_Input").value);
 newtext.classname = "Text_On_Screen";
 newatt.classname = "Sale_Date_Time";
 p.appendChild(newtext);
 p2.appendChild(newatt);
 div1.appendChild(p);
 div1.appendChild(p2);

 var twitcontainer = document.getElementsByClassName("Listing_Field");
 twitcontainer[0].appendChild(article);
 var alert = false;

  if (document.getElementById("Date_Input").value === "" && document.getElementById("text_input").value === "")
  {
    alert("You did not enter any text for either field");
  }

  else if (document.getElementById("text_input").value === "")
  {
    alert("You did not enter any text for a Twit");
  }
  else if(document.getElementById("Date_Input").value === "")
  {
    alert("You did not enter any text for a Attribution");
  }

  else
  {
  document.getElementById("modal-backdrop").style.display ="none";
  document.getElementById("Dialog_Window").style.display = "none";
  document.getElementById("text_input").value = "";
  document.getElementById("Date_Input").value = "";
  }
}


/***********************SEARCH FUNCTION************************************/

var navbarSearchbutton = document.getElementById('Search_Button');
navbarSearchbutton.addEventListener('click', function() {
  searchFunction();
});
document.getElementById("Menu_Bar_Search_Input").addEventListener("keyup", searchFunction);

function searchFunction() {

    var input, filter, ul, li, a, i, foo;
    foo = document.getElementsByClassName("Listing_Box");
    foo2 = document.getElementsByClassName("Sale_Box");
    input = document.getElementById("Menu_Bar_Search_Input");
    filter = input.value.toUpperCase();
    for (i = 0; i < foo.length; i++) {
        ul = foo[i];
        if (ul.textContent.toUpperCase().indexOf(filter) > -1) {
            ul.style.display = "";
        } else {
            ul.style.display = "none";
        }
    }

}
