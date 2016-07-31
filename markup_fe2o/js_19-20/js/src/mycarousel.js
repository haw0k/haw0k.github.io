$(function() {
    $('.jcarousel')
      .jcarousel({
        wrap: 'circular'
      })
      .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
      });

      $('.jcarousel-pagination')

      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
      })

      .jcarouselPagination({
          item: function(page) {
              return '<a href="#"></a></li>';
          }
      });
});
