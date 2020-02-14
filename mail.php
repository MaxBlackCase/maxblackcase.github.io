<?php

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
  //Server settings
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'maxblackcase';                     // SMTP username
  $mail->Password   = 'dwvxewjzxiftxnpc';                               // SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mail->Port       = 587;                                    // TCP port to connect to

  //Recipients
  $mail->setFrom('maxblackcase@gmail.com', 'Admin');
  $mail->addAddress('bladro0987@gmail.com', 'Max Black');     //

  // Content
  $mail->isHTML(true);                                  // Set email format to HTML
  $mail->Subject = 'Ответ на резюме с сайта';
  $mail->Body    = 'Рады видеть вас <b>' . $data['name'] . '!</b>';
  $mail->AltBody = 'Текст без HTML';

  $mail->send();
  echo 'Ваше сообщение отправлено';
} catch (Exception $e) {
  echo "При отправке сообщения произошла ошибка: {$mail->ErrorInfo}";
}
