// Importa las librerías necesarias desde Firebase
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
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

window.uploadProduct = async function() {
    const file = document.getElementById('Prod_img').files[0];
    const Prod_Name = document.getElementById('Prod_Name').value;
    const Desc = document.getElementById('Desc').value;
    const Price = document.getElementById('Price').value;
    const Categoria = document.getElementById('Categoria').value;

    const storageRef = ref(storage, 'Productos/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            document.getElementById('uploadProgress').value = progress;
        }, 
        (error) => {
            console.log(error.message);
        }, 
        async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            document.getElementById('uploadedImage').src = downloadURL;

            try {
                await addDoc(collection(db, 'productos'), {
                    nombre: Prod_Name,
                    descripcion: Desc,
                    precio: Price,
                    categoria: Categoria,
                    imagen: downloadURL
                });
                alert('Producto registrado exitosamente');
            } catch (e) {
                console.error('Error al agregar el documento: ', e);
            }
        }
    );
}
