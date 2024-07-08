// guardado de los datos del carrito en localStorage
localStorage.setItem('cartItems', JSON.stringify(cartItems));

// Redireccionar a la siguiente página
window.location.href = 'Index_Boleta.html';
// Recuperar los datos del carrito desde localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Verificar si hay datos en el carrito
if (cartItems) {
    // Aquí puedes trabajar con los datos del carrito recuperados
    console.log(cartItems);
} else {
    // Manejar el caso donde no hay datos en el carrito
    console.log('El carrito está vacío.');
}

