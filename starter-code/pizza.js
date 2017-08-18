$(document).ready(function () {
    $('.btn-pepperonni').click(function () {
        $('.btn-pepperonni').toggleClass('active');

        $('.pep').fadeToggle();
    });

    $('.btn-mushrooms').click(function () {
        $('.btn-mushrooms').toggleClass('active');

        $('.mushroom').fadeToggle();
    });

    $('.btn-green-peppers').click(function () {
        $('.btn-green-peppers').toggleClass('active');

        $('.green-pepper').fadeToggle();
    });

    $('.btn-sauce').click(function () {
        $('.btn-sauce').toggleClass('active');

        $('.sauce').toggleClass('sauce-white');
    });

    $('.btn-crust').click(function () {
        $('.btn-crust').toggleClass('active');

        $('.crust').toggleClass('crust-gluten-free');
    });
});
