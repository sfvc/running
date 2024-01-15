const btn = document.getElementById('button');
const alertContainer = document.getElementById('alert-container');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    btn.value = 'Enviando...';

    const serviceID = 'service_5yvvmdd';
    const templateID = 'template_ep0vv1q';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar';

            // Agregar el alert personalizado
            const successAlert = document.createElement('div');
            successAlert.className = 'p-4 mb-4 mt-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800';
            successAlert.setAttribute('role', 'alert');
            successAlert.innerHTML = '<span class="font-medium">¡Enviado con éxito!</span>';

            // Limpiar el contenedor de alertas antes de agregar uno nuevo
            alertContainer.innerHTML = '';
            nameInput.value = '';
            surnameInput.value = '';
            phoneInput.value = '';
            emailInput.value = '';
            messageInput.value = '';

            // Agregar el alert al contenedor
            alertContainer.appendChild(successAlert);
        })
        .catch((err) => {
            btn.value = 'Enviar de Nuevo';

            // Agregar el alert de error (puedes personalizar esto según tus necesidades)
            const errorAlert = document.createElement('div');
            errorAlert.className = 'p-4 mb-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800';
            errorAlert.setAttribute('role', 'alert');
            errorAlert.innerHTML = '<span class="font-medium">¡Error! Cambia algunas cosas y vuelve a intentarlo.</span> ' + JSON.stringify(err);

            // Limpiar el contenedor de alertas antes de agregar uno nuevo
            alertContainer.innerHTML = '';

            // Agregar el alert al contenedor
            alertContainer.appendChild(errorAlert);
        });
});

function validateForm() {
    let formIsValid = true;

    // Verificar campos vacíos
    if (nameInput.value.trim() === '') {
        displayAlert('name-alert', '¡El campo "Nombre" es obligatorio!');
        formIsValid = false;
    } else {
        hideAlert('name-alert');
    }

    if (surnameInput.value.trim() === '') {
        displayAlert('surname-alert', '¡El campo "Apellido" es obligatorio!');
        formIsValid = false;
    } else {
        hideAlert('surname-alert');
    }

    if (phoneInput.value.trim() === '') {
        displayAlert('phone-alert', '¡El campo "Teléfono" es obligatorio!');
        formIsValid = false;
    } else {
        hideAlert('phone-alert');
    }

    if (emailInput.value.trim() === '') {
        displayAlert('email-alert', '¡El campo "Correo Electrónico" es obligatorio!');
        formIsValid = false;
    } else {
        hideAlert('email-alert');
    }

    if (messageInput.value.trim() === '') {
        displayAlert('message-alert', '¡El campo "Mensaje" es obligatorio!');
        formIsValid = false;
    } else {
        hideAlert('message-alert');
    }

    return formIsValid;
}

function displayAlert(alertId, message) {
    const alertElement = document.getElementById(alertId);
    alertElement.innerText = message;
    alertElement.classList.remove('hidden');
}

function hideAlert(alertId) {
    const alertElement = document.getElementById(alertId);
    alertElement.innerText = '';
    alertElement.classList.add('hidden');
}
