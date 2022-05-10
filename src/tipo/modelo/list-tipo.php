<?php

include('../../conexao/conn.php');

$requestData = $_REQUEST;

$colunas = $requestData['columns'];

$sql = "SELECT ID, NOME FROM TIPO WHERE 1=1 ";

$resultado = $pdo->query($sql);
$qtdeLinhas = $resultado->rowCount();

$filtro = $requestData['search']['value'];
if( !empty($filtro)){
    $sql .= " AND (ID LIKE '$filtro%' ";
    $sql .= " OR NOME LIKE '$filtro%') ";
}

$resultado = $pdo->query($sql);
$totalFiltrados = $resultado->rowCount();

$colunaOrdem = $requestData['order'][0]['column'];
$ordem = $colunas[$colunaOrdem]['data'];
$direcao = $requestData['order'][0]['dir'];