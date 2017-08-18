$(document).ready(function () {
    var currentTotal = 13;

    $('.btn-pepperonni').click(function () {
        $('.btn-pepperonni').toggleClass('active');
        $('.pep-price').toggleClass('on-pizza');

        $('.pep').fadeToggle();

        if ($('.btn-pepperonni').hasClass('active')) {
            currentTotal += 1;
        }
        else {
            currentTotal -= 1;
        }

        $('.price strong').html('$' + currentTotal);
    });

    $('.btn-mushrooms').click(function () {
        $('.btn-mushrooms').toggleClass('active');
        $('.mush-price').toggleClass('on-pizza');

        $('.mushroom').fadeToggle();

        if ($('.btn-mushrooms').hasClass('active')) {
            currentTotal += 1;
        }
        else {
            currentTotal -= 1;
        }

        $('.price strong').html('$' + currentTotal);
    });

    $('.btn-green-peppers').click(function () {
        $('.btn-green-peppers').toggleClass('active');
        $('.green-price').toggleClass('on-pizza');

        $('.green-pepper').fadeToggle();

        if ($('.btn-green-peppers').hasClass('active')) {
            currentTotal += 1;
        }
        else {
            currentTotal -= 1;
        }

        $('.price strong').html('$' + currentTotal);
    });

    $('.btn-sauce').click(function () {
        $('.btn-sauce').toggleClass('active');
        $('.white-price').toggleClass('on-pizza');

        $('.sauce').toggleClass('sauce-white');

        if ($('.btn-sauce').hasClass('active')) {
            currentTotal += 3;
        }
        else {
            currentTotal -= 3;
        }

        $('.price strong').html('$' + currentTotal);
    });

    $('.btn-crust').click(function () {
        $('.btn-crust').toggleClass('active');
        $('.gluten-free-price').toggleClass('on-pizza');

        $('.crust').toggleClass('crust-gluten-free');

        if ($('.btn-crust').hasClass('active')) {
            currentTotal += 5;
        }
        else {
            currentTotal -= 5;
        }

        $('.price strong').html('$' + currentTotal);
    });
});
