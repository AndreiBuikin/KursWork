$(document).ready(function() {
    // Получаем элементы ползунка и картинок
    var slider = $("#slider");
    var image1 = $("#image1");
    var image2 = $("#image2");

    // Обрабатываем событие изменения положения ползунка
    slider.on("input", function() {
        var value = slider.val();

        // Изменяем прозрачность картинок в зависимости от положения ползунка
        image1.css("opacity", 1 - value);
        image2.css("opacity", value);
    });
});
