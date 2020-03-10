<?php
// Файлы phpmailer
require 'assets/php_mailer/class.phpmailer.php';
require 'assets/php_mailer/class.smtp.php';

if(isset($_POST)){
    error_reporting(E_ERROR);//отключение предупреждений и нотайсов(warning и notice)на сайте
	// Создание переменных полей формы 
	if(isset($_POST['full_name'])){$full_name = $_POST['full_name']; if($full_name == '') {unset($full_name);}}
	if(isset($_POST['phone'])){$phone = $_POST['phone']; if($phone == '') {unset($phone);}}
	if(isset($_POST['comment'])){$comment = $_POST['comment']; if($comment == '') {unset($comment);}}

	//Стирание треугольных скобок из полей формы
	if (isset($full_name)) {
		$full_name=stripslashes($full_name);
		$full_name=htmlspecialchars($full_name);
	}
	if (isset($phone)) {
		$phone=stripslashes($phone);
		$phone=htmlspecialchars($phone);
	}
    
	// Настройки
	$mail = new PHPMailer;
	$mail->isSMTP(); 
	$mail->charset = 'UTF-8';
	$mail->Host = 'smtp.yandex.ru';  
	$mail->SMTPAuth = true;                      
	$mail->Username = 'elsy63'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
	$mail->Password = '1Q2w3e4r'; // Ваш пароль 
	$mail->SMTPSecure = 'ssl';                            
	$mail->Port = 465;
	$mail->setFrom('elsy63@yandex.ru'); // Ваш Email
	$mail->addAddress('elsy63@yandex.ru'); // Email получателя
	                                
	// Письмо
	$mail->isHTML(true); 
	$mail->Subject = "Заказ услуги"; // Заголовок письма
	$mail->Body    = "<!DOCTYPE html>
	<html lang='ru'>
	<head>
		<meta charset='utf-8'>
		<title>maket</title>
	</head>
	<body>
		<h2>Имя : <span style='color: #EFB90F'>$full_name</span></h2>
		<h2>Телефон : <span style='color: #EFB90F'>$phone</span></h2>
		<h1>Заказ <span style='color: #EFB90F'>Услуги</span></h1>
		<h1>$comment</h1>
	</body>
	</html>"; // Текст письма

	// Результат
	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'true';
	}
}
?>
