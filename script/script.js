const swiper = new Swiper('.swiper', {
    initialSlide:  1,
    navigation: {
        nextEl: '.slider-top-buttons__button_next',
        prevEl: '.slider-top-buttons__button_prev',
    },
    loop: true,
});

(function($) {
    let tabs = $('.category__tabs');
    $(function() {
        tabs.each(function(i) {
            let storage = localStorage.getItem('tab' + i);
            if (storage) {
                $(this).find('category__tab').removeClass('category__tabs_active').eq(storage).addClass('category__tabs_active')
                    .closest('.category__tabs-wr').find('.category__cards').removeClass('category__cards_active').eq(storage).addClass('category__cards_active');
            }
        });

        tabs.on('click', 'li:not(.category__tab_active)', function() {
            $(this)
                .addClass('category__tab_active').siblings().removeClass('category__tab_active')
                .closest('.category__tabs-wr').find('.category__cards').removeClass('category__cards_active').eq($(this).index()).addClass('category__cards_active');
            let ulIndex = $('.category__tabs').index($(this).parents('.category__tabs'));
            localStorage.removeItem('tab' + ulIndex);
            localStorage.setItem('tab' + ulIndex, $(this).index());
        });

    });
})(jQuery);