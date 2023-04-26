// 광고 영역 클릭 시 사라지기

$('.add > i').click(function(){
  $('.add-wrap').removeClass('on');
});


// 네비게이션 바

$('.menu-hover').hover(function(){
  $('.sub-menu-wrap').stop().slideDown();
}, function(){
  $('.sub-menu-wrap').stop().slideUp();
});

// 무비차트 탭

$('.movie-button').click(function () {
  $(this).addClass('on');
  $('.movie-button2').removeClass('on');
  $('.movie-tab-con1').addClass('on');
  $('.movie-tab-con2').removeClass('on');
  $('.movie-tab-drop').css({
    display: 'block'
  });
});

$('.movie-button2').click(function () {
  $(this).addClass('on');
  $('.movie-button').removeClass('on');
  $('.movie-tab-con2').addClass('on');
  $('.movie-tab-con1').removeClass('on');
  $('.movie-tab-drop').css({
    display: 'none'
  });
});

// 무비 이미지 호버시 버튼 보이기

$('.movie-tab-con1-img').hover(function(){
  $(this).find('.movie-tab-con-shadow').css({
    opacity: 0
  });
  $(this).find('.movie-tab-con-shadow2').css({
    opacity: 1
  })
  $(this).find('.movie-tab-con-shadow-button1').css({
    display: 'block'
  });
  $(this).find('.movie-tab-con-shadow-button2').css({
    display: 'block'
  });
}, function(){
  $(this).find('.movie-tab-con-shadow').css({
    opacity: 1
  });
  $('.movie-tab-con-shadow2').css({
    opacity: 0
  });
  $(this).find('.movie-tab-con-shadow-button1').css({
    display: 'none'
  });
  $(this).find('.movie-tab-con-shadow-button2').css({
    display: 'none'
  });
});

// 스크롤 이벤트

$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $('.scroll-nav').css({
      display: 'block'
    });
    
      $('.sub-menu-wrap').css({
        position: 'fixed',
        top: '65px',
        boxShadow: '5px 0 10px rgba(0,0,0,0.3)'
      });
    
    } else if($(this).scrollTop() < 150) {
      $('.scroll-nav').css({
        display: 'none'
      });

      $('.sub-menu-wrap').css({
        position: 'absolute',
        top: '0px',
        boxShadow: '5px 0 10px rgba(0,0,0,0.0)'
      });
    };
});


// 이벤트 자동 스크롤, 클릭하면 이동했다가 다시 스크롤

let E = 0;

function eventScroll () {

  if (E == 0) {
    $('.event-button-left').removeClass('on');
    $('.event-button-right').addClass('on');
    $('.event-con').css({
      left: '-98%'
    });
    E++;
  } else if (E == 1) {
    $('.event-button-right').removeClass('on');
    $('.event-button-left').addClass('on');
    $('.event-con').css({
      left: '0'
    });
    E = 0;
  }

};

let SetEventScroll = setInterval(eventScroll, 5000);

$('.event-button-left').click(function(){
  $('.event-button-right').removeClass('on');
  $('.event-button-left').addClass('on');
  $('.event-con').css({
    left: '0'
  });
  E = 0;
  clearInterval(SetEventScroll);
  SetEventScroll = setInterval(eventScroll, 5000);
});

$('.event-button-right').click(function(){
  $('.event-button-left').removeClass('on');
  $('.event-button-right').addClass('on');
  $('.event-con').css({
    left: '-98%'
  });
  E++;
  clearInterval(SetEventScroll);
  SetEventScroll = setInterval(eventScroll, 5000);
});

// 특별관 글씨 마우스오버 이벤트

$('.special-text').mouseover(function(){
  let n = $(this).index();
  $(this).css({
    border: '1px solid #333',
    borderRadius: '10px',
    overflow: 'hidden',
    fontWeight: 'bold'
  });
  if(n == 0) {
    $('.s1').css({
      opacity: 1
    });
    $('.s2').css({
      opacity: 0
    });
    $('.s3').css({
      opacity: 0
    });
    $('.s4').css({
      opacity: 0
    });
    $('.special-text').eq(1).css({
      border: '1px solid #fff',
      fontWeight: '100'
    });
    $('.special-text').eq(2).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
    $('.special-text').eq(3).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
  } else if(n == 1) {
    $('.s1').css({
      opacity: 0
    });
    $('.s2').css({
      opacity: 1
    });
    $('.s3').css({
      opacity: 0
    });
    $('.s4').css({
      opacity: 0
    });
    $('.special-text').eq(2).css({
      border: '1px solid #fff',
      fontWeight: '100'
    });
    $('.special-text').eq(0).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
    $('.special-text').eq(3).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderBottom: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
  } else if(n == 2) {
    $('.s1').css({
      opacity: 0
    });
    $('.s2').css({
      opacity: 0
    });
    $('.s3').css({
      opacity: 1
    });
    $('.s4').css({
      opacity: 0
    });
    $('.special-text').eq(3).css({
      border: '1px solid #fff',
      borderTop: 'none',
      borderBottom: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
    $('.special-text').eq(0).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
    $('.special-text').eq(1).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
  } else if(n == 3) {
    $('.s1').css({
      opacity: 0
    });
    $('.s2').css({
      opacity: 0
    });
    $('.s3').css({
      opacity: 0
    });
    $('.s4').css({
      opacity: 1
    });
    $('.special-text').eq(0).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
    $('.special-text').eq(1).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
    $('.special-text').eq(2).css({
      border: '1px solid #fff',
      borderTop: '1px solid #ddd',
      borderRadius: '0px',
      fontWeight: '100'
    });
  }
});

// 페이지 하단 광고 무한 재생

let p = 0;

function pAdd () {
  if(p == 0) {
    $('.add-slide').addClass('on');
    p++;
  } else if(p == 1) {
    $('.add-slide').removeClass('on');
    p = 0;
  }
};

setInterval(pAdd, 4000);