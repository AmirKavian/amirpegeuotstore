// calling owl carosoul
// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// });


$(document).ready(function () {
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            margin: 0,
            nav: false,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
})
$(document).ready(function () {
    $('.product-container').owlCarousel(
        {
            items: 3,
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            rtl: true,
        })
})









