

 var Create_Button = document.getElementById('New_Listing_Button');
Create_Button.addEventListener('click', function() {unhideModal();});

function unhideModal(){
    document.getElementById("Popup_Background").style.display ="block";
    document.getElementById("Dialog_Window").style.display = "block";
}

var Close_Button = document.getElementsByClassName('Close_Button')[0];
Close_Button.addEventListener('click', function() {closeModal();});

var Close_Button = document.getElementsByClassName('Window_Cancel_Button')[0];
Close_Button.addEventListener('click', function() {closeModal();});

var Accept_Button = document.getElementsByClassName('Window_Accept_Button')[0];
Accept_Button.addEventListener('click', function() {acceptButton();});

function closeModal(){
    document.getElementById("Popup_Background").style.display ="none";
    document.getElementById("Dialog_Window").style.display = "none";
    document.getElementById("text_input").value = "";
    document.getElementById("Date_Input").value = "";
}



function acceptButton(){
  if (document.getElementById("text_input").value === "" && document.getElementById("Date_Input").value === "")
  {
    alert("You did not enter any text for either field")
    return 0;
  }

  else if (document.getElementById("text_input").value === "")
  {
    alert("You did not enter any text")
    return 0;
  }
  else if(document.getElementById("Date_Input").value === "")
  {
    alert("You did not enter any text for a Attribution")
    return 0;
  }

  else
  {

 var main  = document.createElement("main");

 var article = document.createElement("article");
 console.log(article);
 var div1 = document.createElement("div");
 var i = document.createElement("I");
 var div2 = document.createElement("div");
 var p = document.createElement("P");
 var p2 = document.createElement("P");
 var a = document.createElement("A");

 var img = document.createElement("img");

 article.appendChild(div1);
 div1.appendChild(i);
 article.appendChild(div2);
 div2.appendChild(p);

 img.appendChild(p);

 div2.appendChild(p2);
 p2.appendChild(a);

 article.className = "Listing_Box";
 div1.className = "Description_Field";
 i.className = "fa fa-flag";
 div2.className = "Description_Field";
 p.className = "Text_On_Screen";

 img.className = "Thumbnail";

 img.src = document.getElementById("Img_URL").value;

 p2.className = "Sale_Date_Time";
 a.className = "#";

 var new_text = document.createTextNode(document.getElementById("text_input").value);
 var New_date = document.createTextNode(document.getElementById("Date_Input").value);

var New_URL = document.createTextNode(document.getElementById("Img_URL").value);

 new_text.classname = "Text_On_Screen";
 New_date.classname = "Sale_Date_Time";

 New_URL.classname = "Img_URL";

 p.appendChild(new_text);
 p2.appendChild(New_date);

 p2.appendChild(img);
 
 div1.appendChild(p);
 div1.appendChild(p2);

 var container = document.getElementsByClassName("Listing_Field");
 container[0].appendChild(article);

 document.getElementById("Popup_Background").style.display ="none";
 document.getElementById("Dialog_Window").style.display = "none";
 document.getElementById("text_input").value = "";
 document.getElementById("Date_Input").value = "";

 document.getElementById("Img_URL").value = "";
 }

};


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
