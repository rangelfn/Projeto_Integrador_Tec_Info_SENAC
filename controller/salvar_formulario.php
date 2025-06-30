<?php
// Configurações do banco de dados
$host = "localhost";        // ou 127.0.0.1
$usuario = "root";          // seu usuário do MySQL
$senha = "@Vinicius272";                // sua senha do MySQL
$banco = "db_cliente";      // nome do banco de dados

// Conexão com o banco
$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica conexão
if ($conn->connect_error) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Erro na conexão: " . $conn->connect_error
    ]);
    exit;
}

// Captura os dados do formulário
$nome    = $_POST['nome'] ?? '';
$email   = $_POST['email'] ?? '';
$data    = $_POST['data'] ?? '';
$pedido  = $_POST['pedido'] ?? '';

// Verifica se os campos obrigatórios foram preenchidos
if (empty($nome) || empty($email) || empty($data) || empty($pedido)) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Todos os campos são obrigatórios."
    ]);
    exit;
}

// Prepara e executa a inserção
$stmt = $conn->prepare("INSERT INTO formulario (nome, email, data_pedido, pedido) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nome, $email, $data, $pedido);

if ($stmt->execute()) {
    echo json_encode([
        "status" => "sucesso",
        "mensagem" => "Pedido enviado com sucesso!"
    ]);
} else {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Erro ao salvar: " . $stmt->error
    ]);
}

$stmt->close();
$conn->close();
?>