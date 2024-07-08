import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC9-0wfVwduQSZW0LnytRLqzcZiUcFiYe4",
    authDomain: "procampoweb-3bf5a.firebaseapp.com",
    projectId: "procampoweb-3bf5a",
    storageBucket: "procampoweb-3bf5a.appspot.com",
    messagingSenderId: "163347514345",
    appId: "1:163347514345:web:50825a06872e8bd2fa8178",
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Referencia a la colección de Firestore
const carritoRef = db.collection('carrito');

function mostrarDatosCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');

    // Limpiar contenido previo
    listaCarrito.innerHTML = '';

    // Obtener datos del carrito desde Firebase
    carritoRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-carrito');
            itemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.name}">
                <div class="info-producto">
                    <h4>${item.name}</h4>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
            `;
            listaCarrito.appendChild(itemElement);
        });
    }).catch((error) => {
        console.log("Error al obtener datos del carrito: ", error);
    });
}

document.addEventListener('DOMContentLoaded', mostrarDatosCarrito);


// Función para obtener y mostrar los datos del carrito en "Boleta.html"
function mostrarDatosCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');

    // Limpiar contenido previo
    listaCarrito.innerHTML = '';

    // Obtener datos del carrito desde Firebase
    carritoRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const item = doc.data();
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-carrito');
            itemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.name}">
                <div class="info-producto">
                    <h4>${item.name}</h4>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
            `;
            listaCarrito.appendChild(itemElement);
        });
    }).catch((error) => {
        console.log("Error al obtener datos del carrito: ", error);
    });
}

// Llama a la función para mostrar los datos del carrito cuando la página se cargue
document.addEventListener('DOMContentLoaded', mostrarDatosCarrito);
