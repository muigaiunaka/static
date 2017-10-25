Modernizr.load([
    // Slider
    {
        test: Modernizr.mq('(min-width: 950px)'),
        yep: [ '/js/bxslider/jquery.bxslider.css', '/css/slider.css', '/js/bxslider/jquery.bxslider.js' ],
        callback: function (url, result, key) {
            if (!result || key < 2) return;
            $.ajax(
                '/Slider.html',
                {
                    accepts: 'text/html',
                    dataType: 'html',
                    success: function (data) {
                        var visual = $('div.visual');
                        visual.html(data);
                        visual.addClass('slider');
                        visual.find('img').each(function(n, img) { var i = $(img); i.attr('title', i.attr('alt')); });
                        $('.slider ul').bxSlider(
                            {
                                captions: true,
                                pager: false,
                                auto: true
                            }
                        );
                    }
                }
            );
        }
    }
]);
