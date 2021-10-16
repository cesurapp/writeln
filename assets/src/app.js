import './app.scss';

$(function () {
    /**
     * Bootstrap Dropdown
     */
    $('.dropdown-toggle').dropdown();

    $('.dropdown')
        .on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(200);
        })
        .on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);
        });

    /**
     * Tooltips
     */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })

    /**
     * Navbar Fixed
     */
    let navbar = document.querySelector(".navbar");
    let sticky = navbar.offsetTop + 400;
    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    };

    /**
     * Responsive Navigation
     */
    $('.nav-responsive > .toggle').click(function () {
        list = $(this).next();

        if (list.hasClass('show')) {
            list.removeClass('show').slideUp('fast');
        } else {
            list.addClass('show').slideDown('fast');
        }
    });

    /**
     * VM Pricing Calculator
     */
    let priceMin = 0;
    let priceMax = 0;

    /* Show Modal */
    $('#pricingModal').on('show.bs.modal', function (event) {
        let click = $(event.relatedTarget);
        let modal = $(this);

        // Get Data
        priceMin = click.data('min');
        priceMax = click.data('max');

        // Set Data
        modal.find('#resource').text('$' + priceMin + '-' + priceMax);

        // Calc
        calcPrice();
    });

    /* Calc Price */
    $(document).on('input change', '#pricingModal input[type=range]', function () {
        $(this).prev().find('.count').html(this.value);

        calcPrice();
    });

    function calcPrice() {
        // Calc Month
        let resourceAverage = ($('#cpu').val() / 2) + ($('#ram').val() / 2);
        let priceMonth = ((priceMax - priceMin) * resourceAverage) / 100 + priceMin;
        let priceHours = priceMonth / 720;

        // Response
        $('#priceHours').text('$' + round(priceHours, 3));
        $('#priceMonth').text('$' + round(priceMonth, 3));
    }

    /**
     * Round Decimal
     *
     * @param value
     * @param decimals
     * @returns {number}
     */
    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    /**
     * Contact Form Ajax Submit
     */
    $('.ajaxForm').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        let loading = form.find('.loading');
        let button = form.find('[type=submit]');

        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: form.serialize(),
            beforeSend: function () {
                loading.html('<i class="fas fa-cog fa-spin fa-2x"></i>');
                loading.show();
                form.find('.invalid-feedback').remove();
                form.find('.is-invalid').removeClass('is-invalid');
                button.prop('disabled', true)
            },
            success: function (response) {
                if (response.status === 'success') {
                    setTimeout(function () {
                        loading.html('<i class="fas fa-check text-success fa-2x"></i>');
                        form.find(':input').prop('disabled', true);
                    }, 600);
                } else {
                    setTimeout(function () {
                        loading.html('<i class="fas fa-times text-danger fa-2x"></i>');
                        form.find(':input').prop('disabled', false);

                        // Set Error
                        for (var name in response.form) {
                            form.find('#' + name).toggleClass('is-invalid').after('<div class="invalid-feedback">' + response.form[name] + '</div>');
                        }
                    }, 600);
                }
            }
        })
    })
});
