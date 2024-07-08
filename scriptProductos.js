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
    const productosRef = db.collection('productos');

    // Función para obtener productos y mostrarlos en la página
    function obtenerProductos() {
        productosRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Datos del documento
                const producto = doc.data();
                // Crea el HTML para el producto
                const productoHtml = `
                    <div class="product" data-name="${producto.nombre}">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h3>${producto.nombre}</h3>
                        <div class="price">$${producto.precio}</div>
                    </div>
                `;
                // Agrega el producto a la lista de productos
                document.querySelector('.products-container').innerHTML += productoHtml;
            });
        }).catch((error) => {
            console.log("Error al obtener productos: ", error);
        });
    }

    // Llama a la función para obtener los productos cuando la página se carga
    document.addEventListener('DOMContentLoaded', obtenerProductos);

    // Manejo de vistas previas de productos al hacer clic en ellos
    // Primera categoría
    let previewContainer1 = document.querySelector('.products-preview');
    let previewBoxes1 = previewContainer1.querySelectorAll('.preview');

    document.querySelectorAll('.container .product').forEach(product => {
        product.onclick = () => {
            previewContainer1.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes1.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes1.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer1.style.display = 'none';
        };
    });

    // JavaScript para la segunda categoría
    let previewContainer2 = document.querySelector('.products-preview_2');
    let previewBoxes2 = previewContainer2.querySelectorAll('.preview');

    document.querySelectorAll('.container_2 .product').forEach(product => {
        product.onclick = () => {
            previewContainer2.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes2.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes2.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer2.style.display = 'none';
        };
    });

    // JavaScript para la tercera categoría
    let previewContainer3 = document.querySelector('.products-preview_3');
    let previewBoxes3 = previewContainer3.querySelectorAll('.preview');

    document.querySelectorAll('.container_3 .product').forEach(product => {
        product.onclick = () => {
            previewContainer3.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes3.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes3.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer3.style.display = 'none';
        };
    });

    // JavaScript para la cuarta categoría
    let previewContainer4 = document.querySelector('.products-preview_4');
    let previewBoxes4 = previewContainer4.querySelectorAll('.preview');

    document.querySelectorAll('.container_4 .product').forEach(product => {
        product.onclick = () => {
            previewContainer4.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes4.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes4.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer4.style.display = 'none';
        };
    });

    // JavaScript para la quinta categoría
    let previewContainer5 = document.querySelector('.products-preview_5');
    let previewBoxes5 = previewContainer5.querySelectorAll('.preview');

    document.querySelectorAll('.container_5 .product').forEach(product => {
        product.onclick = () => {
            previewContainer5.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes5.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes5.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer5.style.display = 'none';
        };
    });

    // JavaScript para la sexta categoría
    let previewContainer6 = document.querySelector('.products-preview_6');
    let previewBoxes6 = previewContainer6.querySelectorAll('.preview');

    document.querySelectorAll('.container_6 .product').forEach(product => {
        product.onclick = () => {
            previewContainer6.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBoxes6.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        };
    });

    previewBoxes6.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewContainer6.style.display = 'none';
        };
    });

    // Código para hacer pegajoso el encabezado al hacer scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", this.window.scrollY > 0);
    });

    // Código para la flecha de desplazamiento
    document.getElementById('arrow').addEventListener('click', function (event) {
        event.preventDefault();  // Evitar el comportamiento de anclaje predeterminado

        const target = document.getElementById('trending');
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });

    // Código para los botones de categoría
    function setActiveCategory(button, targetContainer) {
        const buttons = document.querySelectorAll('.filter-buttons button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        const containers = document.querySelectorAll('.container, .container_2, .container_3, .container_4, .container_5, .container_6');
        containers.forEach(container => {
            container.style.display = 'none';
        });

        if (targetContainer === 'all') {
            containers.forEach(container => {
                container.style.display = 'block';
            });
        } else {
            document.querySelector('.' + targetContainer).style.display = 'block';
        }
    }

    // Código para la barra de búsqueda
    document.getElementById('search').addEventListener('click', () => {
        const searchInput = document.getElementById('search-input').value.toUpperCase();
        const elements = document.querySelectorAll('.product-name');
        const cards = document.querySelectorAll('.card');

        elements.forEach((element, index) => {
            if (element.innerText.toUpperCase().includes(searchInput)) {
                cards[index].classList.remove('hide');
            } else {
                cards[index].classList.add('hide');
            }
        });
    });

    // Mostrar todos los productos al cargar la página
    window.onload = () => {
        filterProduct("all");
    };

    // Función para filtrar productos por categoría
    function filterProduct(value) {
        const buttons = document.querySelectorAll(".button-value");
        buttons.forEach(button => {
            if (value.toUpperCase() === button.innerText.toUpperCase()) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        const elements = document.querySelectorAll(".card");
        elements.forEach(element => {
            if (value === "all") {
                element.classList.remove("hide");
            } else {
                if (element.classList.contains(value)) {
                    element.classList.remove("hide");
                } else {
                    element.classList.add("hide");
                }
            }
        });
    }

