var start = document.querySelector("#iniciar-juego");
var canvas = document.querySelector("#ahorcado");
var pincel = canvas.getContext("2d");
pincel.lineWidth = 3;
pincel.strokeStyle = "black"
var words = ["chorizo", "Doberman", "Enamorarse", "Religioso", ]
var palabraElegida = " ";
/* function drawLine(x, y) {
    pincel.fillStyle = "black"; 
    pincel.beginPath();    
    pincel.moveTo(x, y);
    pincel.lineTo(x + 20, y);  ;         
    pincel.stroke(); 
    
}
 */


start.addEventListener("click", function(){

    var x = 165;
    var y = 400;
        
    var randomNumber = Math.floor(Math.random()*words.length);  //math floor redondea al numero inferior
             
   
        for(var posicion = 0; posicion < words.length; posicion++){  

            if (words[posicion] == words[randomNumber]) {

                palabraElegida = words[randomNumber];
                console.log(words[randomNumber]);
                for (var i = 0; i < palabraElegida.length; i++) {
                    pincel.fillStyle = "black"; 
                    pincel.beginPath();    
                    pincel.moveTo(x + (i * 30), y); // de esta forma con la multipicacion creamos una secuencia que hace que la posición en x e mueva 30 hacia la derecha con cada iteraccion en la posición
                    pincel.lineTo((x + 20) + (i * 30), y);         
                    pincel.stroke();                                    
                                       
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


