<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/motor.js"></script>
    <title>Detalle de prenda</title>

    <script src="js/motor.js"></script>
    <script src="js/all.js"></script>

    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    
</head>
<body id= "detalle1">

      <nav class="sidebar">

    <svg width="92" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 19" aria-hidden="true"
      focusable="false" class="logo">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M83.902 15.582V10.23h5.92V7.496h-5.92V3.253h7.341V.518H80.871v17.798H92v-2.733h-8.098zM75.568 19L75.591.495H72.56l.047 11.715L59.3 0l-.024 18.315h3.032l-.049-11.267L75.569 19zm-21.6-.685L53.97.495h-3.03l-.003 17.82h3.031zm-17.355.001H47.15v-2.733h-7.507V.495h-3.031v17.821zm-15.677 0h11.13v-2.733h-8.099V10.23h5.92V7.496h-5.92V3.253h7.342V.518H20.936v17.798zM3.22 9.312c0-3.396 2.368-6.484 6.393-6.484 1.847 0 3.67.66 4.926 1.886l1.61-2.098C15.558 1.91 13.285.094 9.614.094 3.931.094 0 4.384 0 9.382c0 5.116 4.144 9.359 9.945 9.359 2.558 0 4.69-.825 6.324-2.381l-1.398-1.957c-.71.708-2.533 1.627-4.783 1.627-4.05 0-6.867-2.994-6.867-6.718z"
        fill="#000206"></path>
    </svg>

    <ul>
      <li> <a href="index.html">INICIO</a> </li>
      <li> <a class="active" href="COLECCIONES.html">COLECCIONES</a> </li>
      <li><a href="#">CELINE MAISON DE COUTURE</a></li>
      <li> <a href="droite.html">RIVE DROITE</a></li>

      <ul>
        <div>
          <div id="contenedor1">
            <div class="control1 row">

              <input type="text" id="campo1" placeholder="Buscar" class="buscar">
              <svg class="a-icon a-icon--search-tiny lupa" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                  d="M19.335 19.749a6.5 6.5 0 111.414-1.414l3.958 3.958-1.414 1.414-3.958-3.958zM20 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z">
                </path>
              </svg>
              <!-- <input type="button" id="boton1" value="Mostrar"> -->
            </div>
          </div>
        </div>
        </li>
      </ul>

  </nav>



<section = "zind">
    <div id= "contenedor">

            <?php
                // Lecutra de fichero json
                $json = file_get_contents('json/db1.json');
                //Descodificación e3l fichero JSON y volcaado en una matriz
                $json_data = json_decode($json,true);
                //Recorrido de los datos de JSON
                foreach($json_data['datos1'] as $item){
                    if($item['ide']==$_GET['ide']){   
                    echo "<div> <div class='articulos'><img src='" . $item['ruta'] . "'></div>";
                    echo "<div class='articulos otros'><img src='" . $item['img2'] . "'></div>";
                    echo "<div class='articulos otros'><img src='" . $item['img3'] . "'></div></div>";

                    echo " <div class= 'info'><div class='nombreArt'>" . $item['articulo'] . "</div>";
                    echo "<div class='pvp'>" . $item['pvp'] . "</div>";
                    echo "<div class = 'descripcion' >" . $item['descripcion'] . "<br><a><u> MÁS DETALLES </u></a></div>";
                    echo "<div class = 'color' > <b>COLOR:</b>" . $item['color'] . "</div>  ";
                    echo "<div><input type='color' value='#000000' class='btn'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</input></div> <div class = ' tallas row'><b> TALLA CELINE</b> <p class ='dp'>GUÍA DE TALLAS></p></div>";
                    echo"<div><select name='menu' class= 'menu'>  <option selected>SELECCIONAR TALLA</option>  <option value='1'> CELINE F34 - ES 34 </option>  <option value='2'> CELINE F36 - ES 36 - AGOTADO</option>  <option value='3'> CELINE F38 - ES 38</option> <option value='4'> CELINE F40 - ES 40</option>  <option value='5'> CELINE F42 - ES 42</option></div> ";
                   echo "<div><input class='button button1' type='button' value='AÑADIR A LA CESTA'</div>";
                   echo "<div> <p class = ' p1'>BUSCAR EN TIENDA > </p> </div>";
                    echo "<div> <p class = 'p2'>ENVIOS Y DEVOLUCIONES > </p> </div>";
                    echo "<div class= 'iconos row'> <img class = 'icon1' src='pics/15895.png'> <img class = 'icon1' src='pics/2.png'><img class = 'icon1' src='pics/2258541.png'> </div></div>";
                 
                }
            }

            ?>
            
            

    </div>
          </section>

    <footer class="row">



        <div class="parte1f row">
            <ul>
                <li><a href="" title="Client service">SERVICIO DE ATENCIÓN AL
                        CLIENTE</a></li>
                <li><a href="">Seguir pedido</a></li>
                <li class=""><a href="">Envío</a></li>
                <li class=""><a href="">DEVOLUCIÓN</a></li>
                <li class=""><a href="">EMAIL</a> <a href="tel:+34911987850">+34 911 98 78 50</a></li>
            </ul>

            <ul class="celine">
                <li><a href="" title="Client service"></a>CELINE 12</li>
                <li><a href="">BAIE DES ANGES</a></li>
                <li class=""><a href="">BAIE DES ANGES</a></li>
                <li class=""><a href="">WOMEN SUMMER22</a></li>
            </ul>

        </div>

        <div class="parte2f">
            <ul class="f1">

                <li class="">
                    <a href="https://www.facebook.com/ysl" target="_blank" <span>FACEBOOK</span>

                    </a>
                </li>

                <li class="">
                    <a href="https://www.twitter.com/ysl" target="_blank" <span class="">TWITTER</span>

                    </a>
                </li>

                <li class="">
                    <a href="https://www.instagram.com/ysl/" target="_blank" <span class="">INSTAGRAM</span>

                    </a>
                </li>

                <li class="">
                    <a href="https://www.youtube.com/ysl" target="_blank" <span class="">YOUTUBE</span>

                    </a>
                </li>
                <li class="">
                    <a href="https://www.tiktok.com/@ysl?lang=es" target="_blank" <span class="">TIKTOK</span>

                    </a>
                </li>

            </ul>
        </div>

        <div class="parte3f">
           <a> <img class="rss" src="pics/facebook.png" alt=""></a>
            <img class="rss" src="pics/twitter.png" alt="">
            <img class="rss" src="pics/insta.png" alt="">
            <img class="rss" src="pics/YouTube.png" alt="">
        </div>
    </footer>

        
</body>
</html>