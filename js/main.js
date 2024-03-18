$(document).ready(function(){

    //section_1 start
    var s = 0;
    function slide(){

      if(s<3){
        s++;
      }else{
        s=0;
      }

      $('.section_1 .bg').fadeOut();
      $('.section_1 .bg').eq(s).fadeIn();
    };
    setInterval(slide, 5000)
    //section_1 end

    //section_2 start
    $('.tab li').click(function(){

      var t = $(this).index();
      console.log(t);

      $('.tab li').removeClass('active');
      $(this).addClass('active');

      $('.item').hide();
      $('.item').eq(t).show();

      return false;

    });

    //section_4 start    
   $(window).scroll(function(){
        
      sct = $(window).scrollTop();
      console.log(sct);

      if(sct>666) {
        $('.section_3').animate({
          opacity: 1,
          top: 0
      },1000);
      }

      if(sct>1578) {
        $('.section_4').delay(50).animate({
          opacity: 1,
          top: 0
      },1000);
      }

      if(sct>1232) {
        $('.re_section_4').delay(50).animate({
          opacity: 1,
          top: 0
      },1000);
      }
    });
   //section_4 end

    //section_5 반응형 start
    var i = 0;

    $('.right_btn').click(function(){
        i++;
        if(i>2){
            i=0;
        }
        $('.content').animate({
            left: i * -90 + '%' 
        });
    });

    $('.left_btn').click(function(){
        i--;
        if(i<0){
            i=0;
        }
        $('.content').animate({
            left: i * -90 + '%' 
        });
    });


    //section_2 반응형 swiper
    var mySwiper = new Swiper('.swiper-container', {

      spaceBetween: 10 + '%',

      // 스크롤
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      });


    //section_5 반응형 swiper
    new Swiper('.swiper', {
        // autoplay: {
        //   delay: 5000
        // },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      })
});//end