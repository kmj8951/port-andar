$(function(){
  $(window).scroll(function(){
    curr = $(this).scrollTop(); //현재스크롤바의 위치



    if(curr > 0){
      $('.header-inner').addClass('fix')
    }else{
      $('.header-inner').removeClass('fix')
    }
  })


  $('#btnAll').click(function(){
    $('.gnb .group-top').toggleClass('on');
    $('.gnb .group-bottom').slideToggle();
  })


  // 사이드 gnb 열고 닫기
  $('#btnMenu').click(function(){
    $('.header .side-nav, .header .bg').addClass('on')
    $('body').addClass('hidden')
  })

  $('#btnClose, .header .bg').click(function(){
    $('.header .side-nav, .header .bg').removeClass('on')
    $('body').removeClass('hidden')
  })




// GNB 아코디언 메뉴
$('.side-gnb .nav').click(function(e){

  e.preventDefault();
  $(this).toggleClass('on');
  $(this).next().toggleClass('on');
  $(this).next().slideToggle();
})


// 검색창 열고 닫기
$('.btn-search').click(function(){
  $('body').addClass('search-bg');
  $('.search-area').addClass('on');
})
$('.search-close').click(function(){
  $('body').removeClass('search-bg');
  $('.search-area').removeClass('on');
})


// BEST 탭
$('.tab-item').click(function(e){
  e.preventDefault();
  tabCon = $(this).children().data('tab');

  $(this).addClass('on').siblings().removeClass('on');
  $(tabCon).addClass('on').siblings().removeClass('on');
})




  // 최상단 블랙슬라이드
    var swiper = new Swiper(".black-slide", {
      effect:'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    });
   
    var swiper = new Swiper(".main-slide", {
      loop:true,
      effect:'fade',
      pagination:{
        el:".swiper-pagination"
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    });

    var swiper = new Swiper(".group-cate .swiper", {
      slidesPerView: 2.5,
      spaceBetween: 10,
    });
    

       
// 퀵메뉴
let lastScroll = 0;
curr = $(this).scrollTop();

$(window).scroll(function(){
  
  if(curr < lastScroll){
      $('.quick-menu').addClass('on');
  } else {
      $('.quick-menu').removeClass('on');
  }
  lastScroll = curr;
})
// 맨위로 버튼
$('.top-btn').click(function(){
  window.scrollTo({
      top:0,
      behavior:"smooth"
  })
})

}) //지우지마세요