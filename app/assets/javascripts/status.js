// タブを切り替える処理
$(document).on("click", '.status-tab li', function(){
  //クリックしたタブのindexを取得
  var index = $('.status-tab li').index(this);

  $('.status-table ').hide().removeClass('active');
  $('.status-table ').eq(index).show().addClass('active');

  $('.status-tab li').removeClass('active');
  $(this).addClass('active');
});





// 要素を拡大・縮小する処理
$(window).on("load", function(){
  $('.zoom75').click(function() {
      $(".table-wrap").css("zoom","75%");
      $("#current-user__row").css("border", "solid 0.4rem #e5a323")
      return false
  });

  $('.zoom100').click(function() {
      $(".table-wrap").css("zoom","100%");
      return false
  });

  $('.zoom125').click(function() {
      $(".table-wrap").css("zoom","125%");
      return false
  });
});