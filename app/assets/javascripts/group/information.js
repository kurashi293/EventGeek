// タブの切り替え
$(document).on("click", '.information-tabs li', function(){
  //クリックしたタブのindexを取得
  var index = $('.information-tabs li').index(this);

  $('.information-container .main-box').hide().removeClass('active');
  $('.information-container .main-box').eq(index).show().addClass('active');

  $('.information-tabs li').removeClass('active');
  $(this).addClass('active');
});