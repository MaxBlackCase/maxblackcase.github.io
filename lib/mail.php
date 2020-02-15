<?php
header('Access-Control-Allow-Origin: *');

$data = filter_input_array(INPUT_POST);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require './lib/PHPMailer/src/PHPMailer.php';
require './lib/PHPMailer/src/SMTP.php';
require './lib/PHPMailer/src/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
  $mail->charSet = "UTF-8";
  //Server settings
  $mail->SMTPDebug = 2;                      // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'maxblackcase';                     // SMTP username
  $mail->Password   = 'dwvxewjzxiftxnpc';                               // SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mail->Port = 587;                                    // TCP port to connect to

  //Recipients
  $mail->setFrom('maxblackcase@gmail.com', 'Admin');
  $mail->addAddress('bladro0987@gmail.com', 'Max Black');     //
  $mail->addCustomHeader('X-custom-header: custom-value');
  // Content
  $mail->isHTML(true);                                  // Set email format to HTML
  $mail->Subject = 'Job invitation';
  // $mail->Body    = 'Имя: <b>' . $data['name'] . '!</b>';
  $mail->Body = '
  <div class="container" style="margin: 0 auto; width:600px;>
  <h1 style="font-size: 24px;">Письмо с сайта <b>maxblackcase.github.io</b></h1>
  <h2 style="font-size: 18px;"><b>Имя: </b>' . $data['name'] . '</h2>
  <h2 style="font-size: 18px;"><b>Email: </b>' . $data['email'] . '</h2>
  <h2 style="font-size: 18px;"><b>Сообщение: </b></h2>
  <p style="font-size: 16px;">' . $data['message'] . '</p>
  ';
  $mail->AltBody = 'Текст без HTML';

  $mail->send();
  echo 'Ваше сообщение отправлено';
} catch (Exception $e) {
  echo "При отправке сообщения произошла ошибка: {$mail->ErrorInfo}";
}
