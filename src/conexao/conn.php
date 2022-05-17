<?php

$hostname = "sql102.epizy.com";
$dbname = "epiz_31454928_rifas";
$username = "epiz_31454928";
$password = "GEA1TmPNzz";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Error: '.$e->getMessage();
}