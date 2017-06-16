var tagL = "";

var Create_Button = document.getElementById('New_Listing_Button');
Create_Button.addEventListener('click', function() {unhideModal(); tagL = "Local_List_Box";});

var Create_Button1 = document.getElementById('New_buy_Button');
Create_Button1.addEventListener('click', function() {unhideModal(); tagL = "Buy_Box";});

var Create_Button2 = document.getElementById('New_sell_Button');
Create_Button2.addEventListener('click', function() {unhideModal(); tagL = "Sell_Box"});

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

var CYS_Home_Button = document.getElementById("Home");
CYS_Home_Button.addEventListener('click', function(){ showAllListings(); });

var Local_Listings_Button = document.getElementById("Local_Listings");
Local_Listings_Button.addEventListener('click', function(){
    showAllListings();
    showLocalListing();
});

var Willing_to_Sell_Button = document.getElementById("Willing_to_Sell");
Willing_to_Sell_Button.addEventListener('click', function(){
    showAllListings();
    showSelling();
});

var Willing_to_Buy_Button = document.getElementById("Willing_to_Buy");
Willing_to_Buy_Button.addEventListener('click', function(){
    showAllListings();
    showBuying();
});

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
/*
 var main  = document.createElement("main");
 var div0 = document.createElement("div");
 var article = document.createElement("article");
 console.log(article);
 var div1 = document.createElement("div");
 var i = document.createElement("I");
 var div2 = document.createElement("div");
 var p = document.createElement("P");
 var p2 = document.createElement("P");
 var a = document.createElement("A");

 var img = document.createElement("img");

 div0.appendChild(article);
 article.appendChild(div1);
 div1.appendChild(i);
 article.appendChild(div2);
 div2.appendChild(p);

 img.appendChild(p);

 div2.appendChild(p2);
 p2.appendChild(a);

 div0.className = "Post";
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
*/
 }
 var image = document.getElementById('Img_URL').value || '';
 var descrip = document.getElementById('text_input').value || '';
 var amount = document.getElementById('Date_Input').value || '';
 storeListing(image, descrip, amount, tagL, function(err) {
   if (err) {
         alert("Unable to save person's post.  Got this error:\n\n" + err);
     } else {

       var PostTemplate = Handlebars.templates['post'];
       var templateArgs = {
         imgUrl: image,
         text: descrip,
         amount: amount,
         listTag: tagL

       };

       var postHTML = PostTemplate(templateArgs);
       // console.log(photoCardHTML);

       var postContainer = document.querySelector('.Post');
       postContainer.insertAdjacentHTML('beforeend', postHTML);

     }
 });
 listTag = "";
 closeModal();
};

function storeListing(url, txt, amnt, tag, callback) {

  var postURL = "/posts/addListing";

  var postRequest = new XMLHttpRequest();
  postRequest.open('POST', postURL);
  postRequest.setRequestHeader('Content-Type', 'application/json');

  postRequest.addEventListener('load', function (event) {
    var error;
    if (event.target.status !== 200) {
      error = event.target.response;
    }
    callback(error);
  });

  var postBody = {
    text: txt,
    amount: amnt,
    imgUrl: url,
    listTag: tag
  };

  postRequest.send(JSON.stringify(postBody));

}


function showSelling(){
    var buyBoxes = document.getElementsByClassName("Buy_Box");
    for (var i = 0; i < buyBoxes.length; i++){
        buyBoxes[i].style.display = "none";
    }

    var listBoxes = document.getElementsByClassName("Local_List_Box");
    for (var i = 0; i < listBoxes.length; i++){
        listBoxes[i].style.display = "none";
    }
    console.log("Showing only selling");
    console.log(buyBoxes);
}

function showBuying(){
    var sellBoxes = document.getElementsByClassName("Sell_Box");
    for (var i = 0; i < sellBoxes.length; i++){
        sellBoxes[i].style.display = "none";
    }

    var listBoxes = document.getElementsByClassName("Local_List_Box");
    for (var i = 0; i < listBoxes.length; i++){
        listBoxes[i].style.display = "none";
    }
}

function showLocalListing(){
    var sellBoxes = document.getElementsByClassName("Sell_Box");
    for (var i = 0; i < sellBoxes.length; i++){
        sellBoxes[i].style.display = "none";
    }

    var buyBoxes = document.getElementsByClassName("Buy_Box");
    for (var i = 0; i < buyBoxes.length; i++){
        buyBoxes[i].style.display = "none";
    }
}

function showAllListings(){
     var sellBoxes = document.getElementsByClassName("Sell_Box");
    for (var i = 0; i < sellBoxes.length; i++){
        sellBoxes[i].style.display = "initial";
    }

    var buyBoxes = document.getElementsByClassName("Buy_Box");
    for (var i = 0; i < buyBoxes.length; i++){
        buyBoxes[i].style.display = "initial";
    }

    var listBoxes = document.getElementsByClassName("Local_List_Box");
    for (var i = 0; i < listBoxes.length; i++){
        listBoxes[i].style.display = "initial";
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
