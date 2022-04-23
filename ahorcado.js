var start = document.querySelector("#iniciar-juego");
var canvas = document.querySelector("#ahorcado");
var pincel = canvas.getContext("2d");
var words = ["chorizo", "Doberman", "Enamorarse", "Religioso", ]
var palabraElegida = " ";
start.addEventListener("click", function(){
    
    var randomNumber = Math.floor(Math.random()*words.length);  //math floor redondea al numero inferior
             
   
        for(var posicion = 0; posicion < words.length; posicion++){  

            if (words[posicion] == words[randomNumber]) {

                palabraElegida = words[randomNumber];
                console.log(words[randomNumber]);
                for (var i = 0; i < palabraElegida.length; i++) {
                    
                }
                
            }     
               
    
        }

        /* OTRO MÉTODO MÁS SIMPLE

        start.addEventListener("click", function(){    
            var randomNumber = Math.floor(Math.random()*words.length);  //math floor redondea al numero inferior
            palabraElegida = words[randomNumber];
        
        });


        */

            // método .length permite tomr los valores completos de un array
            //recordar siempre que el for tiene 3 partes, la variable inicializadora, la condición y el incrementador
           


});


