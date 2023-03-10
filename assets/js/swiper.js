// ヘッダーのスワイパー
const swiper = new Swiper("#header_swiper", {
    effect: 'fade',
    speed: '1s',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Color variationsのスワイパー
const swiper2 = new Swiper("#variations_swiper", {
    effect: "coverflow",
    speed: '.8s',
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 3,
    slidesPerView: 1.9,
    spaceBetween: 40,
    pagination: {
        el: ".swiper-pagination_variations",
        clickable: true,
    },
});

// Other items ドロップダウンメニュー上のスワイパー
const swiper3 = new Swiper("#accordion-swiper-1", {
    speed: 700,
    slidesPerGroup: 2,
    loop: true,
    loopAdditionalSlides: 2,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next.next1',
        prevEl: '.swiper-button-prev.prev1',
    },
    breakpoints: {
        768: {
            spaceBetween: 40,
        },
    }
});

// Other items ドロップダウンメニュー中のスワイパー
const swiper4 = new Swiper("#accordion-swiper-2", {
    speed: 700,
    slidesPerGroup: 2,
    loop: true,
    loopAdditionalSlides: 2,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next.next2',
        prevEl: '.swiper-button-prev.prev2',
    },
    breakpoints: {
        768: {
            spaceBetween: 40,
        },
    }
});

// Other items ドロップダウンメニュー下のスワイパー
const swiper5 = new Swiper("#accordion-swiper-3", {
    speed: 700,
    slidesPerGroup: 2,
    loop: true,
    loopAdditionalSlides: 2,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next.next3',
        prevEl: '.swiper-button-prev.prev3',
    },
    breakpoints: {
        768: {
            spaceBetween: 40,
        },
    }
});