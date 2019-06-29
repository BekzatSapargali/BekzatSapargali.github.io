// прелоадер сайта
document.body.onload = function () {

 setTimeout(function (){

  var preloader = document.getElementById('preloader-page');
  
  if(!preloader.classList.contains('done')){
    preloader.classList.add('done');
  }

 }, 500);

} // загрузчик экрана на сайте

// аккордеон - таб на сайте
function accord () {  

    var cText   = $('.changeText'),
    lineActive  = $('.active-line'),
    infoblock   = $('.information-block'),
    accordeon   = $('.accordeon');

    infoblock.on('click','.accordeon' , function () {

    let stext  = $(this).text();
    cText.html(stext);

    });

   // настройка аккордеона
   $('.tabs-info').hide();
   $('.tabs-info:first').show();
   $('.active-line:first').addClass('active-liner');

   $('.accordeon').click(function () {

      event.preventDefault(); // сброс <a> тэга
      $('.active-line').removeClass('active-liner');
      $('.tabs-info').hide();
      var selectedid = $(this).find('a').attr('href');
      $(selectedid).fadeIn(400);
      $(this).find('span').addClass('active-liner');

   });

} // аккордеон

// функция открытия меню
function openmenu () {
  
   // клик на бургер-меню
  $('.burger').on('click', function (e) {

  e.preventDefault;
  $(this).toggleClass('burger_active');
  $('.menu').toggleClass('menu_active');

  });

} // open menu открыть меню

// функция закрытия меню
function closemenu () {

   $('.burger').removeClass().addClass('burger');
   $('.menu').removeClass().addClass('menu');

} // функция закрытия вертикального меню

// закрытия меню при клике и сбросс стилей
function close_click_menu () {
  
    $('.close-menu').on('click', function () { closemenu(); });
    $('.menu-container').on('click', function () { closemenu(); });
    $('.menu a').on('click', function () { closemenu(); });

}

// эффект печатания
function writeTextByJS(id, text, speed){

  var ele = document.getElementById(id),
  txt = text.join("").split("");

  var interval = setInterval(function(){

    if(!txt[0]){
      return clearInterval(interval);
    };
    ele.innerHTML += txt.shift();
  }, speed != undefined ? speed : 70);
  return false;

};

// функция слайдера

function slick_slider() {

   $(".otzivi-container").slick({

        dots: true,
        infinite: true,
         infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        dots: true
      } 
    }

    ]

  }); // slick function

} // slick_slider function

// функция когда выполнится загрузка всех файлов - скрипт работает.
$(document).ready(function () {

    // аккорден
    accord();  

    // меню 
    openmenu();

    // закрытие меню 
    close_click_menu();  

    // слик-слайдер
    slick_slider();

    // эффект печатания текста
    
}); 