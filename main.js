var imagenes=[ "portada.jpg", "niña.jpg", "niña.png", "señora.jpg", "señora.png"];
var nombres=["mi familia", "Alejandra", "Sandra", "Flora", "Sara"]; 
var i=0; 
function siguiente(){
    i=i+1;
    var total_imagenes=4;
    if(i>total_imagenes){ 
    i=0;

    }
    var volver_a_laimagen=imagenes[i];
    var volver_a_nombres=nombres[i];
    document.getElementById("foto").src= volver_a_laimagen;
    document.getElementById("nombre").innerHTML=volver_a_nombres;
}