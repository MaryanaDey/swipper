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

        //Фракция
        type: 'fraction',
        //Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + 'из' + '<span class="' +
                totalClass + '"></span>';
        },

        /*
        //Прогрессбар
        type: 'progressbar'
        */
    },
    //Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        //Вощможность перетаскивать скролл
        draggable: true
    },

    //включение/отклбчение
    //перетаскивание на ПК
    simulateTouch: true,
    //чувствительность скролла
    touchRadio: 1,
    //Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Курсор перетаскивания
    grabCursor: true,

    //Переклбчение при клике на слайд
    slideToCliledsSlide: true,

    //Навигация по хешу
    hashNavigation: {
        //Отслеживать состояние
        watchState: true,
    }

});