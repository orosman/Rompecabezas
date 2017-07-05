var noticias = obtenerNoticias();

// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    contador++; //contador = contador + 1
  }
}

// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while
function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}

// Esta la tienen que hacer, puede ser con while o for
function resaltarNoticiasQueContengan(palabra, color){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    if (contienePalabra(noticiaActual, palabra))
    {
    cambiarColor(noticiaActual, color);
    }
  }
}

// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    if (contienePalabra(noticiaActual, palabra))
    {
      ocultarNoticia(noticiaActual);
    }
  }
}

function recortarNoticias(cantPalabras){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    recortarTexto(noticiaActual, cantPalabras);
  }
}

// Acá abajo podés poner las funciones que quieras usar
//marcarNoticiasConWhile()
//marcarNoticiasConFor()
// ...

ocultarNoticiasQueContengan("Google");
resaltarNoticiasQueContengan("Tandil", 'rgb(192, 232, 187)');
resaltarNoticiasQueContengan("robots", 'rgb(237, 230, 180)');
recortarNoticias(20);
