// $(".gallery__wrapper").hide();
$(function() {

// magnificPopup scroller start
  customMfpGallery('.gallery__wrapper--portal', 'a.gallery__pic--portal');
  customMfpGallery('.gallery__wrapper--crma', 'a.gallery__pic--crma');
  customMfpGallery('.gallery__wrapper--crmb', 'a.gallery__pic--crmb');
  customMfpGallery('.gallery__wrapper--colortable', 'a.gallery__pic--colortable');
  customMfpGallery('.gallery__wrapper--crypto-vue', 'a.gallery__pic--crypto-vue');
  customMfpGallery('.gallery__wrapper--orlando', 'a.gallery__pic--orlando');
  customMfpGallery('.gallery__wrapper--mogo', 'a.gallery__pic--mogo');
  customMfpGallery('.gallery__wrapper--btc', 'a.gallery__pic--btc');
  customMfpGallery('.gallery__wrapper--eliteclub', 'a.gallery__pic--eliteclub');
  customMfpGallery('.gallery__wrapper--decor-solutions', 'a.gallery__pic--decor-solutions');
  customMfpGallery('.gallery__wrapper--medhelper', 'a.gallery__pic--medhelper');
  customMfpGallery('.gallery__wrapper--urlaubsgluck', 'a.gallery__pic--urlaubsgluck');
  // customMfpGallery('.gallery__wrapper--xipypri', 'a.gallery__pic--xipypri');
  // customMfpGallery('.gallery__wrapper--buildhome', 'a.gallery__pic--buildhome');
  // customMfpGallery('.gallery__wrapper--pingbuller', 'a.gallery__pic--pingbuller');
  customMfpGallery('.gallery__wrapper--vbs', 'a.gallery__pic--vbs');

  function customMfpGallery(classOfMfpGallery, classOfMfpLink) {
   $(classOfMfpGallery).magnificPopup({
     type: 'image',
     delegate: classOfMfpLink,
     closeOnContentClick: false,
     closeBtnInside: true,
     image: {
       verticalFit: false
     },
     gallery: {
       enabled: true
     },
     });
 };
// magnificPopup scroller end

// top scroller start
 $("body").append('<div class="top"><i class="fa fa-angle-double-up">');

 $("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});
// top scroller end

// anchor link animation start
 $(".menu-main").on("click","a", function (event) {
   //отменяем стандартную обработку нажатия по ссылке
   event.preventDefault();
   //забираем идентификатор бока с атрибута href
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
     top = $(id).offset().top;

   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, "slow");
 });
 // anchor link animation end

  $(".gallery__wrapper").each(function () {
    var animatedElement = $(this);
    animatedElement.show();
    $(this).waypoint(function (direction) {
      if (direction == "down") {
        animatedElement.addClass('js-animate');
      } else {
        animatedElement.removeClass('js-animate');
      }
    }, { offset: '60%' });
  });

});
