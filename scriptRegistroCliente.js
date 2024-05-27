const dni = document.getElementById('numeroDocumento');

const database = firebase.database();

btnGrabar.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/Clientes').set({
        campo1: dni.value
    });
});