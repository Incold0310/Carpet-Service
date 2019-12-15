<?php
require_once './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 1;

$mail->Host = 'smtp.yandex.ru';
$mail->Port = 465;
$mail->Username = 'avd5209';
$mail->Password = 'AvdI1304';
$mail->SMTPSecure = 'ssl';
// От кого
$mail->setFrom('avd5209@yandex.ru');

// Кому
$mail->addAddress('avd5209@yandex.ru');

// Тема письма
$mail->Subject = "Заявка на обратный звонок";

// Тело письма
$message = "<ul><li>Имя: " .$_POST['userName']."</li><li>Телефон: ".$_POST['userPhone']."</li><li>Email: " .$_POST['userEmail']."</li><li>Сообщение: ".$_POST['userMessage']."</li></ul>";
$mail->msgHTML($message);

$mail->send();
?>
