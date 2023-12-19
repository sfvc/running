const verMasBtn = document.getElementById('verMasBtn');
const textoCompleto = `Los 15km del campeonato argentino CLASSIC largarán el día sábado 16 de marzo a las 16:30h desde el PARQUE DE LOS VIENTOS, ubicado en inmediaciones del DIQUE EL JUMEAL en la ciudad de San Fernando del valle de Catamarca. La partida se encuentra a 644 msnm sobre el asfalto junto al parque. Se larga rumbo a avenida Illia por asfalto en bajada, son 300 metros por avenida Illia hasta entrar a mano derecha en la senda que lleva al primer ascenso. Se ingresa a mano derecha en la senda y transcurre el primer ascenso por dentro de una quebrada de 1500 metros de longitud hasta llegar al monumento al aborigen del Jumeal. Una vez allí se conecta con el asfalto y se retoma rumbo al dique El Jumeal hasta “Mirador de la cascada” debajo del boliche Wika, en este punto km 1,5 se encuentra el primer puesto de abastecimiento PA1. Por este sendero se baja hasta la “cola del dique” para continuar por dentro del río seco hasta acceder a la subida que nos sitúa en el filo del Jumeal, se desciende por las variantes de las letras hasta el peri lago y se conecta por el mismo con la subida de las letras. La subida de las letras se realiza hasta el filo, y luego se desciende por filo hasta la subida de talco y posteriormente hasta el Club Mountain Bike Catamarca. En este punto kilómetro 5,5 se encuentra el segundo y último puesto de abastecimiento PA2. Luego del club se asciende por el costado del canal hasta el vertedero del dique, para transcurrir por el murallón del mismo de allí por el camino que accede a la cola del dique se accede a la última subida de 0,6 km y 80 metros de d+. Al final del ascenso se conecta con camino del Jumeal y por el asfalto se desciende a la llegada.`;

let mostrandoCompleto = false;
const textoResumido = textoCompleto.substring(0, 218) + '...';

const textoElement = document.querySelector('.text-md');
textoElement.textContent = textoResumido;

verMasBtn.addEventListener('click', function () {
    mostrandoCompleto = !mostrandoCompleto;

    if (mostrandoCompleto) {
        textoElement.textContent = textoCompleto;
        verMasBtn.textContent = 'Ver menos';
    } else {
        textoElement.textContent = textoResumido;
        verMasBtn.textContent = 'Ver más';
    }
});