'use strict'

window.addEventListener('load', function(){

    let formulario = document.querySelector("#formulario");
    let box_dashed = document.querySelector(".dashed");
    
    box_dashed.style.display= "none";
    
    formulario.addEventListener('submit', function(){

        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let message = document.querySelector("#message").value;

        box_dashed.style.display= "block";
        
        let p_name = document.querySelector("#p_name span");
        let p_email = document.querySelector("#p_email span");
        let p_message = document.querySelector("#p_message span");
        p_name.innerHTML = name;
        p_email.innerHTML = email;
        p_message.innerHTML = message;

        /*
        OPCION 2
        var datos_usuario = [name, email, comment];
        var indice;
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }*/
        console.log(JSON.stringify({name, email, message}));
    });
});



window.addEventListener('load', function(){
    var formulario1 = document.querySelector("#formulario1");
    var box_dashed2 = document.querySelector(".dashed2");
    box_dashed2.style.display = "none";


    formulario1.addEventListener('submit', function(){
      

        var category = document.querySelector("#category").value;
        var date = document.querySelector("#date").value;
        var destination = document.querySelector("#destination").value;
        var price = document.querySelector("#price").value;
        var comment = document.querySelector("#comment").value;

        box_dashed2.style.display = "block";

        let Json = {"Category": category, "Date": date, "Destination": destination, "Price" :price, "Comment":comment}
        alert(JSON.stringify(Json)); 

        var p_category = document.querySelector("#p_category span");
        var p_date = document.querySelector("#p_date span");
        var p_destination = document.querySelector("#p_destination span");
        var p_price = document.querySelector("#p_price span");
        var p_comment = document.querySelector("#p_comment span");

        p_category.innerHTML = category;
        p_date.innerHTML = date;
        p_destination.innerHTML = destination;
        p_price.innerHTML = price;
        p_comment.innerHTML = comment;

    });

});


function filter(){
    var destination = document.querySelector("#destination").value;

    if(destination == "Canary Islands" || destination == "Mallorca" || destination == "Galicia" ){
        alert("We'll get in touch with you ASAP about your trip in:"+ " "+ destination);
    }
    else if(destination == "Any"){
        alert("Please, select a destination");
    }

};


