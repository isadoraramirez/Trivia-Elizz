//Inicializa visualizacion de objetos

document.getElementById("encabPuntos").style.display = "none";
document.getElementById("encaNom").style.display = "none";
document.getElementById("botons").style.display = "none";
document.getElementById("diver").style.display = "none";
document.getElementById("conom").style.display = "none";
document.getElementById("table1").style.display = "none";
document.getElementById("table2").style.display = "none";
document.getElementById("ContName").value = " ";//limpia imput 



//Apartado Bienvenida


  document.getElementById("enviar").addEventListener("click", function(){
    
    let name = document.getElementById("ContName").value;
      console.log (name);
document.getElementById("encaNom").style.display = "block";   
document.getElementById("VisualName").innerHTML= (name);
    
 document.getElementById("nom").style.display = "none";
            document.getElementById("botons").style.display = "block";
                  
        
  })


let resp_d1;
let resp_d2;
let resp_d3;
let resp_c1;
let resp_c2;
let resp_c3;
let puntaje=0;

//limpiar input
document.getElementById("rd1").value = " "; 
document.getElementById("rd2").value = " "; 
document.getElementById("rd3").value = " "; 
//Caso  boton DIVERSION


 document.getElementById("diversion").addEventListener("click", function(){
  document.getElementById("table2").style.display = "none";
   document.getElementById("myTable").style.display = "none";
  document.getElementById("botons").style.display = "none";
  document.getElementById("diver").style.display = "block";
   document.getElementById("preg_d1").style.display = "block";
  document.getElementById("preg_d2").style.display = "none";
  document.getElementById("preg_d3").style.display = "none";
   })
 
  document.getElementById("env_rd1").addEventListener("click", function(){
     resp_d1 = document.getElementById("rd1").value;
   console.log(resp_d1);
  
   if( resp_d1 ==="Roja" || resp_d1 ==="roja" || resp_d1 ==="ROJA"){
                   document.getElementById("preg_d1").style.display = "none";
          document.getElementById("preg_d2").style.display = "block";
          puntaje=puntaje +1;
          console.log(puntaje);
                } 
         /* else{
              alert(`Respuesta Incorrecta`);*/
              document.getElementById("preg_d1").style.display = "none";
              document.getElementById("preg_d2").style.display = "block"; 
            //}
  })


puntaje=puntaje;
console.log(puntaje);
document.getElementById("env_rd2").addEventListener("click", function(){
   resp_d2 = document.getElementById("rd2").value;
   console.log(resp_d2);
   if( resp_d2 === "Hansel y Gretel" || resp_d2 === "hansel y gretel" || resp_d2 === "HANSEL y GRETEL"){
          //alert(`Correcto`);
          document.getElementById("preg_d2").style.display = "none";
          document.getElementById("preg_d3").style.display = "block";
          puntaje=puntaje +1;
          console.log(puntaje);
                } 
        /*  else{
              alert(`Respuesta Incorrecta`);*/
              document.getElementById("preg_d2").style.display = "none";
              document.getElementById("preg_d3").style.display = "block"; 
          //  }
  })
    

puntaje=puntaje;
console.log(puntaje);
document.getElementById("env_rd3").addEventListener("click", function(){
   resp_d3 = document.getElementById("rd3").value;
   console.log(resp_d3);
   if(resp_d3 === "Arnold" || resp_d3 === "arnold" || resp_d3 === "ARNOLD"){
         // alert(`Correcto`);
           puntaje=puntaje +1;
          console.log(puntaje);
         document.getElementById("ContName").reset();
     }
 
   
let res_ptos=puntaje;
 console.log(res_ptos);
     
  
        /*  else{
              alert(`Respuesta Incorrecta`);
              }*/
  /* alert(`Tu puntaje fue de: ${puntaje} respuestas correctas`);*/
  //PASAR PUNTAJE A VARIABLE
   
document.getElementById("encaNom").style.display = "none";  
document.getElementById("encabPuntos").style.display = "block";
document.getElementById("totalPuntos").innerHTML= (res_ptos);
  
 document.getElementById("preg_d3").style.display = "none"; 
   document.getElementById("diver").style.display = "none";
   document.getElementById("table1").style.display = "block";
   
  })
 

 document.getElementById("mostrar").addEventListener("click", function(){
   document.getElementById("myTable").style.display = "block";
   var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Preguntas";
    cell2.innerHTML = "Tus respuestas";
    cell3.innerHTML = "Respuestas Correctas";
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "¿Color de la tarjeta que debe recibir un  jugador de fútbol antes de ser expulsado? ";
    cell2.innerHTML = resp_d1;
    cell3.innerHTML = "Roja";
   
   var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "¿Qué personajes de un cuento de hadas terminaron en una casa de jengibre? ";
    cell2.innerHTML = resp_d2;
    cell3.innerHTML = " Hansel y Gretel";
   
   var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "¿Qué famoso actor de Hollywood dijo las siguiente frase?: Volveré...";
    cell2.innerHTML = resp_d3;
    cell3.innerHTML = " Arnold";
   
 document.getElementById("mostrar").style.display = "none";  
 document.getElementById("botons").style.display = "block";
})

//
//Caso  boton CONOCIMIENTO

 document.getElementById("conocimto").addEventListener("click", function(){
   document.getElementById("table1").style.display = "none";
   document.getElementById("myTable2").style.display = "none";
   document.getElementById("botons").style.display = "none";
  document.getElementById("conom").style.display = "block";
  document.getElementById("preg_c1").style.display = "block";
  document.getElementById("preg_c2").style.display = "none";
  document.getElementById("preg_c3").style.display = "none";
   })
 
let puntos=0;
  document.getElementById("env_rc1").addEventListener("click", function(){
   resp_c1 = document.getElementById("rc1").value;
   console.log(resp_c1);
  
   if( resp_c1 === "Roja"){
         // alert(`Verdadero`);
          document.getElementById("preg_c1").style.display = "none";
          document.getElementById("preg_c2").style.display = "block";
          puntos=puntos +1;
          console.log(puntos);
                } 
          /*else{
              alert(`Respuesta Incorrecta`);*/
              document.getElementById("preg_c1").style.display = "none";
              document.getElementById("preg_c2").style.display = "block"; 
          //  }
  })

puntos=puntos;
console.log(puntos);
document.getElementById("env_rc2").addEventListener("click", function(){
   resp_c2 = document.getElementById("rc2").value;
   console.log(resp_c2);
   if( resp_c2 === "Amazona"){
         // alert(`Correcto`);
          document.getElementById("preg_c2").style.display = "none";
          document.getElementById("preg_c3").style.display = "block";
         puntos=puntos +1;
          console.log(puntos);
                } 
         /* else{
              alert(`Respuesta Incorrecta`);*/
              document.getElementById("preg_c2").style.display = "none";
              document.getElementById("preg_c3").style.display = "block"; 
          //  }
  })
    

puntos=puntos;
console.log(puntos);
document.getElementById("env_rc3").addEventListener("click", function(){
   resp_c3 = document.getElementById("rc3").value;
   console.log(resp_c3);
   if(resp_c3 === "Neil Armstrong"){
          //alert(`Correcto`);
            puntos=puntos +1;
          console.log(puntos);
         
                } 
          else{
              alert(`Respuesta Incorrecta`);
              }
   alert(`Tu puntaje fue de: ${puntos} respuestas correctas`);
   document.getElementById("preg_c3").style.display = "none"; 
   document.getElementById("conom").style.display = "none";
   document.getElementById("table2").style.display = "block";
 
  })
  
 document.getElementById("ver").addEventListener("click", function(){
  
   document.getElementById("myTable2").style.display = "block";
   var table = document.getElementById("myTable2");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Preguntas";
    cell2.innerHTML = "Tus respuestas";
    cell3.innerHTML = "Respuestas Correctas";
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "VERDADERO O FALSO. En la mitología Griega, Hades es el dios del Inframundo ";
    cell2.innerHTML = resp_c1;
    cell3.innerHTML = "Verdadero";
   
   var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "¿Cuál es el río más largo del mundo? ";
    cell2.innerHTML = resp_c2;
    cell3.innerHTML = " Amazona";
   
   var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "¿Quién dijo: Un pequeño paso para el hombre, un gran salto para la humanidad? ";
    cell2.innerHTML = resp_c3;
    cell3.innerHTML = " Neil Armstrong";
   
 document.getElementById("ver").style.display = "none";  
 document.getElementById("botons").style.display = "block";
 
})