// para la primera categoría -->

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


// JavaScript para la segunda categoría -->

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



//  JavaScript para la tercera categoría -->

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
//  JavaScript para la cuarta categoría -->

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

//  JavaScript para la quinta categoría -->

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

//  JavaScript para la sexta categoría -->

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


const header = document.querySelector("header");

window.addEventListener("scroll", function(){
header.classList.toggle("sticky",this.window.scrollY)

})

//CODIGO DE BOTONES DE CATEGORIA

function setActive(button, targetContainer) {
// Obtener todos los botones
var buttons = document.querySelectorAll('.filter_buttons button');

// Remover la clase 'active' de todos los botones
buttons.forEach(function(btn) {
 btn.classList.remove('active');
});

// Agregar la clase 'active' al botón seleccionado
button.classList.add('active');

// Mostrar solo el contenedor correspondiente a la categoría seleccionada
var containers = document.querySelectorAll('.container, .container_2, .container_3,.container_4,.container_5,.container_6');
containers.forEach(function(container) {
 container.style.display = 'none';
});

if (targetContainer === 'all') {
 containers.forEach(function(container) {
   container.style.display = 'block';
 });
} else {
 document.querySelector('.' + targetContainer).style.display = 'block';
}
}

// Código para la flecha de desplazamiento
document.getElementById('arrow').addEventListener('click', function(event) {
  event.preventDefault();
  const target = document.getElementById('trending');
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});




document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu_icon');
  const navMenu = document.querySelector('.children');

  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

  // Animate the arrow's movement to the target position
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });


//-------------------------------------

/* BARRA DE BUSQUEDAAA */

let products = {
  data:[
    {
      productName: "AMINOTERRA GREEN X 20 LT",
      category: "Agroquimicos",
      price: "$25.00",
      image: "./imagenes/pro1.jpg",
    },
    {
      productName: "AMINOTERRA PLUS ZN X 20 LTS",
      category: "Agroquimicos",
      price: "$20.00",
      image: "./imagenes/pro2.jpg",
    },
    {
      productName: "ESCUDERO X 1 LT<",
      category: "Agroquimicos",
      price: "$18.00",
      image: "./imagenes/pro3.jpg",
    },
    {
      productName: "KELP WAY ALGAE X 1 LT",
      category: "Agroquimicos",
      price: "$30.00",
      image: "./imagenes/pro4.jpg",
    },
    {
      productName: "BIOIL-S (ENHANCE) X 20 LT",
      category: "Agroquimicos",
      price: "$30.00",
      image: "./imagenes/n1.png",
    },
    {
      productName: "BIOAMINO-L X 20 LTS",
      category: "Agroquimicos",
      price: "$30.00",
      image: "./imagenes/n2.png",
    },
    //----- SEGUNDA CATEGORIA */
    {
      productName: "TRIADA FOLIAR 18-28-8 KG",
      category: "Acidificantes con Indicador de ph",
      price: "$25.00",
      image: "./imagenes/pro5.jpg",
    },
    {
      productName: "ARIADA FOLIAR 18-28-8 X 10 KG",
      category: "Acidificantes con Indicador de ph",
      price: "$60.00",
      image: "./imagenes/pro6.jpg",
    },
    {
      productName: "TRIADA FOLIAR 18-45-0 KG",
      category: "Acidificantes con Indicador de ph",
      price: "$20.00",
      image: "./imagenes/pro66.png",
    },
    //----- TERCERA CATEGORIA */
    {
      productName: "KELP WAY FULVICO X 200 LT",
      category: "Ácido Húmico",
      price: "$25.00",
      image: "./imagenes/pro7.jpg",
    },
    {
      productName: "KELP WAY HUMICO TECH X 1 LT",
      category: "Ácido Húmico",
      price: "$20.00",
      image: "./imagenes/pro8.jpg",
    },
    {
      productName: "KELP WAY HUMIKELP X 1LT",
      category: "Ácido Húmico",
      price: "$18.00",
      image: "./imagenes/pro9.jpg",
    },

    //----- CUARTA CATEGORIA */

    {
      productName: "KELP WAY HUMIKELP X 1LT",
      category: "Ácido Húmico",
      price: "$18.00",
      image: "./imagenes/pro9.jpg",
    },

  ]
}

// entrega de las funciones del JScript

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};




// carrito:

// Variables
let containerBuyCart = document.querySelector('.lista-carrito');
let priceTotal = document.querySelector('.price-total');
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

// Funciones
loadEventListeners();

function loadEventListeners() {
    document.querySelectorAll('.products-preview .cart').forEach(button => {
        button.addEventListener('click', addProduct);
    });

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e) {
    e.preventDefault();
    if (e.target.classList.contains('cart')) {
        const selectProduct = e.target.closest('.preview');
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach((value, index) => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard -= priceReduce;
                totalCard = totalCard.toFixed(2);
                buyThings.splice(index, 1);
            }
        });

        countProduct--;
    }

    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }

    loadHtml();
}

function readTheContent(product) {
    const infoProduct = {
        image: product.querySelector('img').src,
        title: product.querySelector('h3').textContent,
        price: product.querySelector('.price').textContent.replace('$', ''),
        id: product.getAttribute('data-target'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct];
        countProduct++;
    }
    loadHtml();
}

function loadHtml() {
    clearHtml();
    buyThings.forEach(product => {
        const { image, title, price, amount, id } = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">$${price}</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}

function clearHtml() {
    containerBuyCart.innerHTML = '';
}


