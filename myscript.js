
//storing anchor tag in a variable and applying style 
    var x = document.querySelector("a");
    x.style.color = "brown"
    x.style.fontSize = 23 +"px";
    x.style.textDecoration = "none";
    var result ="";
    var button= document.getElementsByTagName("button");
    var button1 = button[0];
    var button2 = button[1];
    button1.style.marginTop = 20 +"px";
    var text = document.querySelector("#attrs");
    text.style.marginTop = 15 + "px";
    
    //function created to show the attributes
    function showAttributes() {
        var i;
        for (i = 0; i < x.attributes.length; i++) {
          result += x.attributes[i].name + " = " + x.attributes[i].value + "<br>";
        }
        text.innerHTML = result;
    }
    //function created to remove attributes
    function removeAttributes(){
        result = "";
        text.innerHTML = result;
    }
    button1.addEventListener('click', showAttributes,);// adding eventlistener to button 1
    button2.addEventListener('click', removeAttributes); // adding eventlistener to button 2
    
    
     
   
    
