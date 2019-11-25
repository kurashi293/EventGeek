$(function(){
  //tabをクリックしたときの動作
  $('.tab li').click(function(){
    //クリックしたタブのindexを取得
    var index = $('.tab li').index(this);

    $('.contents .content').hide().removeClass('active');
    $('.contents .content').eq(index).fadeIn().addClass('active');

    $('.tab li').removeClass('active');
    $(this).addClass('active');
  });
});