new Swiper('.image-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //Навигация
    //Буллеты, текущее положение , прокрессбар
    pagination: {
        el: '.swiper-pagination',
        /*
        //Буллеты
        clickable: true,
        //Динамические буддеты
        dynamicBullets: true,
        //Кастомные юуллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        */
        /*
        //Фракция
        type: 'fraction',
        //Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + 'из' + '<span class="' +
                totalClass + '"></span>';
    },
        */
        //Прогрессбар
        type: 'progressbar'
    },
});