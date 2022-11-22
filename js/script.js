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
    },

    // Кправление клавиатурой
    keyboard: {
        //Включить/выключить
        enabled: true,
        //Включить/выключить
        //только когда слайдер 
        // впределах вьюпорта
        onlyInViewport: true,
        //Включить/выключить
        //кправление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        //Чувствительность мыши
        sensitivity: 1,
        //Класс обьекта на котором
        // будет спабатывать прокрутка мишью
        // eventsTarget: ".image-slider"
    },

    // Автовысота
    // autoHeight: true,
    autoHeight: false,


    // Количество слайдов для показов
    // slidesPerView: 'auto',
    slidesPerView: 3,


    // Отклбчение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    spaceBetween: 30,

    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    //Активный слайд по центру
    centeredFlides: false,

    // Стартовый слайд
    initialSlide: 0,

    // Мультирядность
    slidesPerColumn: 1,

    // Бесконечный слайдер
    //loop: true,
    loop: false,

    // Количество дублирующих слайдов
    loopedSlides: 0,

    // Свободный режим
    freeMode: true,

    // Автопрокрутка
    // autoplay: {
    // Пауза между прокруткой
    //  delay: 1000,
    // Закончить на последнем слайде
    //  stopOnLastSlide: true,
    // Отключить после ручного переключения
    // disableOnInteraction: false
    // },

    // Скорость
    speed: 800,

    // Вертикальный слайдер
    direction: 'horizontal',

    // Эффекты переключения слайдов
    //Листание
    effect: 'slide',

    /*
    // Эффекты переключения слайдов
    //Смена прозрачности
    effect: 'fade',
 
    //Дополнение к fade
    fadeEffect: {
        //Паралельная
        //смена прозрачности
        crossFade: true
    },
*/

    /*
    // Эффекты переключения слайдов
    //Переворот
    effect: 'flip',

    //Дополнение k flip
    flipEffect: {
        //Тень
        slideShadows: true,
        //Показ только аутивного слайда
        limitRotation: true
    },
*/

    /*
    // Эффекты переключения слайдов
    //Куб
    effect: 'cube',

    //Дополнение к cube
    cubeEffect: {
        //настройки тени
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },
*/

    /*
    // Эффекты переключения слайдов
    // Эффект потока
    effect: 'coverflow',

    //Дополнение с coverflow
    coverflowEffect: {
        //угол
        rotate: 20,
        //Наложение
        stretch: 50,
        //Тень
        slideShadows: true,
    },

    */

    /*
    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
        '@0.75': {
            slidesPerView: 1,
        },
        '1.00': {
            slidesPerView: 2
        },
        '@1.50': {
            slidesPerView: 3,
        }
    },
    */

    //Отключить перезагрузка картинок
    preloadImages: false,
    //Lazy Loading
    //(подгрузка картинок)
    lazy: {
        //Подгружать на старте
        //переключение слайда
        loadOnTransitionStart: false,
        //Подгрузить предыдущую
        //и следующую картинки
        loadPrevNext: false,
    },
    //Слежка за видимыми слайдами
    watchSlidesProgress: true,
    //Доюавление класса видимым слайдам
    watchSlidesVisibility: true,

    //Зум картинки
    zoom: {
        //Минимальное увеличение 
        maxRatio: 5,
        //Минимальное увеличение 
        minRatio: 1,
    },

});

