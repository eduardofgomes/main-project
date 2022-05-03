<?php

$hostname = "sql102.epizy.com";
$database = "epiz_31454928_rifas";
$username = "epiz_31454928";
$password = "GEA1TmPNzz";

if($conecta = mysqli_connect($hostname, $username, $password, $database)){
    echo 'Conectado ao banco de dados '.$database.'.....';
} else {
    echo 'Erro: '.mysqli_connect_error();
}