$(function(){
	$('input#final').on('click',final);
	$('input[type=radio]').on('click',pregunta);
})


function final(event)
{
	event.preventDefault();
	var prueba =$('form').serialize();
	var respuestas=prueba.split('&');
	var buenas=["b", "a", "d", "c", "a", "b", "c", "d", "d", "c", "d", "b", "a", "c", "c", "a", "b", "a", "a", "c"]
	//console.log(respuestas);
	var respuestasAlumno=[];
	var aciertos=0;
	for(x in respuestas)
	{
		var iguales=parseInt(respuestas[x].indexOf('='));
		var letras=respuestas[x].substring(iguales+1);
		respuestasAlumno.push(letras);
	}
	for(x in buenas)
		{
			if(buenas[x]==respuestasAlumno[x])
			{
				aciertos+=1;
			}
		}
	
		var nombre=$('input#alumno').val();
		var calFinal=parseFloat(aciertos*.5);
		$('section').hide('slow');
		$('h2.nombre').text(nombre);
		$('h1.calificacion').text("tu calificacion es: "+calFinal);
	}

function pregunta()
{
	var opcion=$(this).parent().children('h1').css('background', 'orange');;
	//console.log(opcion);
}