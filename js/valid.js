<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <link rel="stylesheet" href="/path/to/pristine.css">
</head>
<body>

<form id="myForm" method="post" enctype="multipart/form-data" action="/submit">
    <div>
        <label for="hashtags">Hash Tags:</label>
        <input type="text" name="hashtags" id="hashtags" required>
    </div>
    <div>
        <label for="comment">Comment:</label>
        <textarea name="comment" id="comment" required></textarea>
    </div>
    <div>
        <label for="image">Image:</label>
        <input type="file" name="image" id="image" accept="image/*" required>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>

<script src="/path/to/pristine.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('myForm');
        var pristine = new Pristine(form);

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var valid = pristine.validate(); // Возвращает true, если форма валидна

            if (valid) {
                // Отправка данных на сервер
                form.submit();
            } else {
                // Вывод сообщений об ошибках
                alert('Please fill out the form correctly.');
            }
        });

        // Дополнительные обработчики для событий изменения значений полей
        form.addEventListener('input', function () {
            pristine.validate(); // Проверка формы при изменении значений полей
        });
