

var primeravez=true;


function solopalabrasgracias() {
  /* elimino números y signos raros, pero permito palabas y letras, y de
  paso agrego puntos, comas y signos en español con tilde y eñe*/
  var sincosasraras = document.getElementById('talvezdos');
  sincosasraras.value = sincosasraras.value.replace(/[^.,a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]+/, '');
};

function sujetoypredicado() {

if (document.getElementById("talvezdos").value=="") {
  /* insultar al usuario con un exponencial de maternidad entre 1 y 30*/
  randomvieja = (Math.floor(Math.random() * (31-1)+1 ));
  alert("Tenías un solo trabajo, me cago en vos y en la forra "+"de la vieja ".repeat([randomvieja])+"de tu vieja");
} else {

  if (primeravez == true) {

  /* modifico una variable por única vez con dos objetivos. primero, hacer aparecer
  las div .referencia. segundo para que, a partir de la segunda vez, se remuevan
  los child divs donde el usuario puso su oración*/
    primeravez = false;
  oracion = document.getElementById("talvezdos").value;

  /*creo un array con las palabras*/
  palabras = oracion.split(" ");

  /*averiguo la cantidad de palabras*/
  largoOracion = palabras.length;

  /*extraigo la primera mitad de las palabras al array constituyendo otro que llamo
  sujeto (lo restante será el predicado)*/

  sujeto = palabras.splice(0, Math.floor(palabras.length / 2));


/* esto lo usé en desarrollo
  console.log(palabras);
  console.log(largoOracion);
  console.log(sujeto.join(' '));
  console.log(palabras.join(' '));
*/


/*sujeto.join vuelve a crear un string con el array ya recortado. el resto es
crear un elemento y clavarlo como child en un elemento*/

  sintagma=document.createElement('div');
  sintagma.className = 'sujetodelaoracion';
  sintagma.innerHTML = (sujeto.join(' '))+' ';
  document.getElementById("resultados").appendChild(sintagma);

  otrosintagma=document.createElement('div');
  otrosintagma.className = 'predicadodelaoracion';
  otrosintagma.innerHTML = (palabras.join(' '));
  document.getElementById("resultados").appendChild(otrosintagma);

var referencia = document.querySelectorAll('.indicaciones');
for(var i=0; i<referencia.length; i++){
    referencia[i].style.display=null;
    }

  } else {

    document.getElementById("resultados").removeChild(sintagma);
    document.getElementById("resultados").removeChild(otrosintagma);

    oracion = document.getElementById("talvezdos").value;
    palabras = oracion.split(" ");
    largoOracion = palabras.length;

    sujeto = palabras.splice(0, Math.floor(palabras.length / 2));

    sintagma=document.createElement('div');
    sintagma.className = 'sujetodelaoracion';
    sintagma.innerHTML = (sujeto.join(' '))+' ';
    document.getElementById("resultados").appendChild(sintagma);

    otrosintagma=document.createElement('div');
    otrosintagma.className = 'predicadodelaoracion';
    otrosintagma.innerHTML = (palabras.join(' '));
    document.getElementById("resultados").appendChild(otrosintagma);

    }
  }
}



  /* todo esto son intentos fallidos del ejercicio#2

  for (i = 0; i < largoOracion; i++) {
  }


function sujetoypredicado() {
  oracion = [];
  var textoingresado = document.getElementById("talvezdos").value;
  oracion.push(textoingresado);
  largoOracion = oracion.length;

  palabras = oracion.split(" ");
  console.log(palabras);

    for (i = 0; i < largoOracion; i++) {
      sintagma = document.createElement('div');
      sintagma.className = 'sujetodelaoracion';
      sintagma.innerHTML = oracion[i];
      document.getElementById("resultados").appendChild(sintagma);
    }
  } */


/*
  document.getElementById("oracioncompleta").innerHTML = oracion;
  return false;
}

*/
/* ejercicio # 1
function sujeto() {

document.getElementById("lacuestion").classList.add("esesta");

}

function predicado() {

document.getElementById("lacuestion").classList.add("ytambienesesta");

}
*/
