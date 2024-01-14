const btn = document.getElementById('button');
function actualizar(){location.reload(true);}

document.getElementById('form')
	.addEventListener('submit', function (event) {
	event.preventDefault();

	setInterval("actualizar()",4000)

	btn.value = 'Enviando...';

	const serviceID = 'service_5yvvmdd';
	const templateID = 'template_ep0vv1q';

	emailjs.sendForm(serviceID, templateID, this)
		.then(() => {
			btn.value = 'Enviar';
			alert('Enviado!');
		}, (err) => {
			btn.value = 'Enviar de Nuevo';
			alert(JSON.stringify(err));
		});
});