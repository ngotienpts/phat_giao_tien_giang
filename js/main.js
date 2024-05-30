document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // search
    var searchPc = document.querySelector(".js__searchPc");
    var showSearchPc = document.querySelector(".js__showSearchPc");

    var searchMb = document.querySelector(".js__searchMb");
    var showSearchMb = document.querySelector(".js__showSearchMb");

    // sub menu
    const subMenu = document.querySelector(".js__subMenuContainer");

    // slide
    var oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
    var autoSlides = document.querySelectorAll(".js__swiperAutoContainer");
    var twoSlides = document.querySelectorAll(".js__twoSlidesContainer");
    var fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
    var fiveSlides = document.querySelectorAll(".js__fiveSlidesContainer");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            if (backTop) {
                backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }

            // search pc
            if (showSearchPc && searchPc) {
                const focusElement =
                    searchPc.querySelector(".js__focusSearchPc");
                if (focusElement) {
                    showSearchPc.onclick = () => {
                        showSearchPc.classList.toggle("active");
                        searchPc.classList.toggle("active");
                        focusElement.focus();
                        if (showSearchPc.classList.contains("active")) {
                            focusElement.value = "";
                        }
                    };
                }
            }

            // search mb
            if (showSearchMb && searchMb) {
                const focusElement =
                    searchMb.querySelector(".js__focusSearchMb");
                if (focusElement) {
                    showSearchMb.onclick = () => {
                        showSearchMb.classList.toggle("active");
                        searchMb.classList.toggle("active");
                        focusElement.focus();
                        if (showSearchMb.classList.contains("active")) {
                            focusElement.value = "";
                        }
                    };
                }
            }

            // submenu
            if (subMenu) {
                var menu = subMenu.querySelector(".js__subMenu");
                var showSubMenu = subMenu.querySelector(".js__showSubMenu");
                var closeSubMenu = subMenu.querySelector(".js__closeSubMenu");

                showSubMenu.onclick = function () {
                    menu.classList.add("active");
                    bodyEle.classList.add("overflow-hidden");
                };
                closeSubMenu.onclick = function () {
                    menu.classList.remove("active");
                    bodyEle.classList.remove("overflow-hidden");
                };
            }
        },
        sliderOneItems: function () {
            if (oneSlides) {
                oneSlides.forEach((item) => {
                    var slider = item.querySelector(".js__oneSlide");
                    var pagi = item.querySelector(".swiper-pagination");
                    new Swiper(slider, {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        slidesPerGroup: 1,
                        effect: "fade",
                        loop: true,
                        fadeEffect: { crossFade: true },
                        autoplay: {
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        },
                        pagination: { el: pagi, clickable: false },
                    });
                });
            }
        },
        // slider auto
        sliderAutoItems: function () {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 10,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },
        sliderTwoItems: function () {
            if (twoSlides) {
                twoSlides.forEach((item) => {
                    var slider = item.querySelector(".js__twoSlide");
                    var next = item.querySelector(".swiper-button-next");
                    var prev = item.querySelector(".swiper-button-prev");
                    new Swiper(slider, {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        slidesPerGroup: 1,
                        loop: true,
                        navigation: {
                            nextEl: next || null,
                            prevEl: prev || null,
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        },
                    });
                });
            }
        },
        sliderFourItems: function () {
            if (fourSlides) {
                fourSlides.forEach((item) => {
                    var slider = item.querySelector(".js__fourSlide");
                    var pagi = item.querySelector(".swiper-pagination");
                    new Swiper(slider, {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        slidesPerGroup: 1,
                        loop: true,
                        pagination: { el: pagi, clickable: false },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        },
                    });
                });
            }
        },
        sliderFiveItems: function () {
            if (fiveSlides) {
                fiveSlides.forEach((item) => {
                    var slider = item.querySelector(".js__fiveSlide");
                    var next = item.querySelector(".swiper-button-next");
                    var prev = item.querySelector(".swiper-button-prev");
                    new Swiper(slider, {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        slidesPerGroup: 1,
                        loop: true,
                        navigation: {
                            nextEl: next || null,
                            prevEl: prev || null,
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        },
                    });
                });
            }
        },
        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },
        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // one slide
            this.sliderOneItems();
            // slider auto
            this.sliderAutoItems();
            // two slider
            this.sliderTwoItems();
            // four slider
            this.sliderFourItems();
            // five slider
            this.sliderFiveItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
