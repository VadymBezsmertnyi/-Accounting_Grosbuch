<?php
/* Здесь мы проверяем существуют ли переменные, которые передала форма обратной связи. Если не существуют, то мы их создаем */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['surname'])) {$surname = $_POST['surname'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}

/* Здесь необходимо вписать ваш e-mail адрес */
$address = "grosbukh@grosbukh.com.ua";
$suportAddress = "Запрос на зворотній звязок <suport@grosbukh.com.ua>";

/* Здесь вписуете тему, которая будет отображаться в теме письма */
$sub = "Запрос на зворотній зв'язок від $name $surname";

/* А здесь прописываете сам текст сообщения, который будет Вам отправлен. Если Вам необходимо начать новую строку необходимо поставить \n */
$mes = "Ім'я та по-батькові: $name $surname \nЗалишив такий E-mail: $email та мобільний номер: $phone \nПитає: \n$message";

/* А это функция, как раз занимается отправкой письма на указанный выше адрес */
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$suportAddress");

header('Location: https://www.grosbukh.com.ua/ ');
?>