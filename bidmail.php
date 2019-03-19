<?php
        $to = 'sspb@cargo-express.net , msk@cargo-express.net , region@cargo-express.net'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>'.$_POST['what_face_data'].'</p>
                        <p>Основная услуги: '.$_POST['mainUsluga'].'</p>
                        <p>Вариант перевозки: '.$_POST['transVar'].'</p>
                        <p>Место оплаты: '.$_POST['payPlace'].'</p>
                        <p>Вид платежа: '.$_POST['payVar'].'</p>

                        <h3>Плательщик</h3>

                        <p>Плательщик: '.$_POST['PayerName'].'</p>
                        <p>ИНН(если юридическое)/документ(если физическое): '.$_POST['PayerINNorPass'].'</p>
                        <p>Паспорт(если физическое лицо): '.$_POST['PayerPass'].'</p>
                        <p>КПП: '.$_POST['PayerCPP'].'</p>
                        <p>Юр. Адрес, город: '.$_POST['PayerUrAddress'].'</p>
                        <p>улица, дом, корпус, офис: '.$_POST['PayerAddress'].'</p>
                        <p>Контактное лицо: '.$_POST['PayerContactFace'].'</p>
                        <p>Телефон: '.$_POST['PayerContactPhone'].'</p>
                        <p>Email: '.$_POST['PayerContactEmail'].'</p>

                        <h3>Отправитель</h3>

                        <p>Название компании: '.$_POST['SendCompanyName'].'</p>
                        <p>ИНН: '.$_POST['SendCompanyINN'].'</p>
                        <p>Номер документа для получения отгруза: '.$_POST['SendCompanyDocNum'].'</p>
                        <p>Дата отправки: '.$_POST['SendDate'].'</p>
                        <p>время работы,обеда: '.$_POST['SendWorkTime'].'</p>
                        <p>Время отправки груза: '.$_POST['SendTime'].'</p>
                        <p>Адрес отправки: '.$_POST['SendAddress'].'</p>
                        <p>Улица: '.$_POST['SendAddressStreet'].'</p>
                        <p>дом, корпус, офис: '.$_POST['SendAddressHouse'].'</p>
                        <p>Контактное лицо1: '.$_POST['SendContactFace1'].'</p>
                        <p>телефон1: '.$_POST['SendContactFacePhone1'].'</p>
                        <p>Контактное лицо2: '.$_POST['SendContactFace2'].'</p>
                        <p>телефон2: '.$_POST['SendContactFacePhone2'].'</p>
                        <p>Примечание отправителя: '.$_POST['SenderComment'].'</p>

                        <h3>Получатель</h3>

                        <p>Название компании: '.$_POST['GetCompanyName'].'</p>
                        <p>ИНН: '.$_POST['GetCompanyINN'].'</p>
                        <p>Номер документа для получения отгруза: '.$_POST['GetCompanyDocNum'].'</p>
                        <p>Адрес доставки, город: '.$_POST['GetAddress'].'</p>
                        <p>Улица: '.$_POST['GetAddressStreet'].'</p>
                        <p>дом, корпус, офис: '.$_POST['GetAddressHouse'].'</p>
                        <p>Контактное лицо1: '.$_POST['GetContactFace1'].'</p>
                        <p>Телефон1: '.$_POST['GetContactFacePhone1'].'</p>
                        <p>Контактное лицо2: '.$_POST['GetContactFace2'].'</p>
                        <p>Телефон2: '.$_POST['GetContactFacePhone2'].'</p>
                        <p>Время доставки груза: '.$_POST['GetTime'].'</p>
                        <p>Время работы, обеда: '.$_POST['GetWorkTime'].'</p>
                        <p>Примечание получателя: '.$_POST['GetterComment'].'</p>
                        <p>Кол-во мест: '.$_POST['BoxMesto'].'</p>
                        <p>Общий вес, кг: '.$_POST['BoxWeight'].'</p>
                        <p>Объем куб.м: '.$_POST['BoxSquare'].'</p>
                        <p>Длина: '.$_POST['BoxX'].'</p>
                        <p>Ширина: '.$_POST['BoxY'].'</p>
                        <p>Высота: '.$_POST['BoxZ'].'</p>
                        <p>Характер груза: '.$_POST['BoxHaracter'].'</p>
                        <p>Комментарии к грузу: '.$_POST['BoxComment'].'</p>

                        <h3>Платные доп. услуги</h3>

                        <p>Страхование груза: '.$_POST['BoxSave'].'</p>
                        <p>Страховая стоимость груза, руб.: '.$_POST['BoxWeight'].'</p>
                        <p>Возврат документов: '.$_POST['DocsBack'].'</p>
                        <p>ПРР при отправлении: '.$_POST['SendPRR'].'</p>
                        <p>ПРР при доставке: '.$_POST['GetPRR'].'</p>
                        <p>Гидролифт: '.$_POST['Hidrolift'].'</p>
                        <p>Деревянная обрешка: '.$_POST['WoodObr'].'</p>
                        <p>Упаковка: '.$_POST['Pack'].'</p>
                        <p>Паллетирование: '.$_POST['Pallet'].'</p>
                        <p>Сверхнормативное хранение(более 2-х суток): '.$_POST['OutOfNormTime'].'</p>
                        <p>Отправление/доставка груза в выходные и праздничные дни: '.$_POST['WeekendWork'].'</p>
                        <p>Отправление/доставка груза до 09.00 / после 18.00: '.$_POST['LateWork'].'</p>
                        <p>ФИО ответственного лица, подавшего заявкуон: '.$_POST['FIOmainface'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <cargo@express.ru>\r\n";
        mail($to, $subject, $message, $headers);

?>
