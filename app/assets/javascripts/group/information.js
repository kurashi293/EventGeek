// タブの切り替え
$(document).on("click", '.information-tabs li', function(){
  //クリックしたタブのindexを取得
  var index = $('.information-tabs li').index(this);

  $('.information-container .main-box').hide().removeClass('active');
  $('.information-container .main-box').eq(index).show().addClass('active');

  $('.information-tabs li').removeClass('active');
  $(this).addClass('active');
});





// スクロールでタブを固定
$(document).on('turbolinks:load', function(){
  if (window.location.href.match(/\/groups\/\d+\/information/)) {
    $(".content:last-child").css("border-bottom", "none");

    $(function() {
      // offset()で画面上からのtopとleftの座標を取得
      var offset = $('.information-tabs').offset();

      $(window).scroll(function () {
        console.log("good");
        // 画面最上部からスクロールした数値（topの座標）が、$('.information-tabs')のtop座標より大きかった場合の処理
        if ($(window).scrollTop() > offset.top) {
          $(".information-tabs").addClass("nav-fixed");
          return false;

        } else {
          $(".information-tabs").removeClass("nav-fixed");
          return false;
        }
      });
    });
  }
});