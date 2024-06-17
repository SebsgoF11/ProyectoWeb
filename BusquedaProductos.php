<?php
// Array de productos
$productos = [
    ["id" => 1, "nombre" => "AMINOTERRA GREEN X 20 LT", "imagen" => "./imagenes/pro1.jpg", "precio" => 25.00],
    ["id" => 2, "nombre" => "AMINOTERRA PLUS ZN X 20 LTS", "imagen" => "./imagenes/pro2.jpg", "precio" => 20.00],
    ["id" => 3, "nombre" => "ESCUDERO X 1 LT", "imagen" => "./imagenes/pro3.jpg", "precio" => 18.00],
    ["id" => 4, "nombre" => "KELP WAY ALGAE X 1 LT", "imagen" => "./imagenes/pro4.jpg", "precio" => 30.00],
    ["id" => 5, "nombre" => "BIOIL-S (ENHANCE) X 20 LT", "imagen" => "./imagenes/n1.png", "precio" => 30.00],
    ["id" => 6, "nombre" => "BIOAMINO-L X 20 LTS", "imagen" => "./imagenes/n2.png", "precio" => 30.00],
    ["id" => 7, "nombre" => "TRIADA FOLIAR 18-28-8 KG", "imagen" => "./imagenes/pro5.jpg", "precio" => 25.00],
    ["id" => 8, "nombre" => "TRIADA FOLIAR 18-28-8 X 10 KG", "imagen" => "./imagenes/pro6.jpg", "precio" => 60.00],
    ["id" => 9, "nombre" => "TRIADA FOLIAR 18-45-0 KG", "imagen" => "./imagenes/pro66.png", "precio" => 20.00],
    ["id" => 10, "nombre" => "KELP WAY FULVICO X 200 LT", "imagen" => "./imagenes/pro7.jpg", "precio" => 25.00],
    ["id" => 11, "nombre" => "KELP WAY HUMICO TECH X 1 LT", "imagen" => "./imagenes/pro8.jpg", "precio" => 20.00],
    ["id" => 12, "nombre" => "KELP WAY HUMIKELP X 1LT", "imagen" => "./imagenes/pro9.jpg", "precio" => 18.00],
    ["id" => 13, "nombre" => "KELP WAY STICK X 20 LT", "imagen" => "./imagenes/p1.png", "precio" => 25.00],
    ["id" => 14, "nombre" => "TRIADA CITOPLEX X 4 LT", "imagen" => "./imagenes/p26.png", "precio" => 30.00],
    ["id" => 15, "nombre" => "TRIADA CITOPLEX X 20 LT", "imagen" => "./imagenes/p2.png", "precio" => 20.00],
    ["id" => 16, "nombre" => "TRIADA FOLIAR 0-32-43 KG", "imagen" => "./imagenes/p3.png", "precio" => 18.00],
    ["id" => 17, "nombre" => "TRIADA QUEL BORO X 0.5 KG", "imagen" => "./imagenes/p4.png", "precio" => 18.00],
    ["id" => 18, "nombre" => "TRIADA QUEL MN X 10 KG", "imagen" => "./imagenes/p5.png", "precio" => 18.00],
    ["id" => 19, "nombre" => "KELP WAY CITOKIN X LT", "imagen" => "./imagenes/p6.png", "precio" => 25.00],
    ["id" => 20, "nombre" => "KELP WAY DEFENSE K84 X 20LT", "imagen" => "./imagenes/p7.png", "precio" => 20.00],
    ["id" => 21, "nombre" => "TRIADA QUEL CU X 10 KG", "imagen" => "./imagenes/p8.png", "precio" => 18.00],
    ["id" => 22, "nombre" => "TRIADA QUEL MG X 1 KG", "imagen" => "./imagenes/p9.png", "precio" => 18.00],
    ["id" => 23, "nombre" => "TRIADA QUEL ZN X 1 KG", "imagen" => "./imagenes/p10.png", "precio" => 18.00],
    ["id" => 24, "nombre" => "TRIADA R 14-8-19 X 1 KG", "imagen" => "./imagenes/p11.png", "precio" => 18.00],
    ["id" => 39, "nombre" => "TRIADA R 14-8-19 X 12 KG", "imagen" => "./imagenes/p11.png", "precio" => 68.00],
    ["id" => 25, "nombre" => "TRIADA-FLUX 411F X 20 LT", "imagen" => "./imagenes/p12.png", "precio" => 18.00],
    ["id" => 26, "nombre" => "TRIADAMIN X 1 LT", "imagen" => "./imagenes/p13.png", "precio" => 18.00],
    ["id" => 27, "nombre" => "RADIFLEX X 1 LT", "imagen" => "./imagenes/p15.png", "precio" => 20.00],
    ["id" => 28, "nombre" => "TRIADA AGUAS X 1 KG", "imagen" => "./imagenes/p16.png", "precio" => 18.00],
    ["id" => 29, "nombre" => "TRIADA IN X 4 LT", "imagen" => "./imagenes/p17.png", "precio" => 18.00],
    ["id" => 30, "nombre" => "TRIADA MADURADOR X 10 KG", "imagen" => "./imagenes/p18.png", "precio" => 18.00],
    ["id" => 31, "nombre" => "TRIADA QUEL BALANCE X 1 KG", "imagen" => "./imagenes/p19.png", "precio" => 18.00],
    ["id" => 32, "nombre" => "TRIADA QUEL CA X 10 KG", "imagen" => "./imagenes/p20.png", "precio" => 18.00],
    ["id" => 33, "nombre" => "TRIADA-FLUX 411F X 4 LT", "imagen" => "./imagenes/p21.png", "precio" => 18.00],
    ["id" => 34, "nombre" => "TRIADA-OIL EMULSION X 1 LT", "imagen" => "./imagenes/p22.png", "precio" => 20.00],
    ["id" => 35, "nombre" => "TRIADA-OIL EMULSION X 20 LT", "imagen" => "./imagenes/p23.png", "precio" => 18.00],
    ["id" => 36, "nombre" => "TRIADA-OIL EMULSION X 200 LT", "imagen" => "./imagenes/p24.png", "precio" => 58.00],
    ["id" => 37, "nombre" => "TRIADAMIN X 20 LT", "imagen" => "./imagenes/p25.png", "precio" => 58.00],

];

// Obtiene la consulta de búsqueda del formulario
$query = isset($_GET['query']) ? $_GET['query'] : '';

// Filtra los productos que coinciden con la consulta
$resultados = array_filter($productos, function($producto) use ($query) {
    return stripos($producto["nombre"], $query) !== false;
});
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados de la búsqueda</title>
</head>
<body>
    <h1>Resultados de la búsqueda para "<?php echo htmlspecialchars($query); ?>"</h1>

    <div class="products-container">
        <?php
        if (count($resultados) > 0) {
            foreach ($resultados as $producto) {
                echo '<div class="product" data-name="p-' . $producto["id"] . '">';
                echo '<img src="' . $producto["imagen"] . '" alt="' . $producto["nombre"] . '">';
                echo '<h3>' . $producto["nombre"] . '</h3>';
                echo '<div class="price">$' . $producto["precio"] . '</div>';
                echo '</div>';
            }
        } else {
            echo '<p>No se encontraron productos.</p>';
        }
        ?>
    </div>
</body>
</html>