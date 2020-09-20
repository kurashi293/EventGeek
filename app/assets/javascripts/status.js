// タブを切り替える処理
$(document).on("click", '.status-tab li', function(){
  //クリックしたタブのindexを取得
  var index = $('.status-tab li').index(this);

  $('.status-table ').hide().removeClass('active');
  $('.status-table ').eq(index).show().addClass('active');

  $('.status-tab li').removeClass('active');
  $(this).addClass('active');
});