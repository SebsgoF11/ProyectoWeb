<?php
// intento de error
$host = "localhost";
$user = "root";
$pass = "";
$db = "productos_procampo";

if($con -> connect_error){
    die("No se ha encontrado el producto");
}

$con = new mysqli($host,$user,$pass, $db);

// Obtiene la consulta de búsqueda del formulario
$busqueda = isset($_GET['query']) ? $_GET['query'] : '';

// Filtra los productos que coinciden con la consulta
$resultados = $con -> query("SELECT * FROM productos WHERE nombre LIKE '%$busqueda%'");
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de la búsqueda</title>
</head>
<body>
    <h1>
        Resultados de la búsqueda para "
        <?php echo htmlspecialchars($busqueda); ?>"
    </h1>

    <div class="products-container">
        <?php
            foreach ($resultados as $producto) {
                echo '<div class="product" data-name="p-' . $producto["id"] . '">';
                echo '<img src="' . $producto["imagen"] . '" alt="' . $producto["nombre"] . '">';
                echo '<h3>' . $producto["nombre"] . '</h3>';
                echo '<div class="price">$' . $producto["precio"] . '</div>';
                echo '</div>';
            }
        ?>
    </div>
</body>
</html>