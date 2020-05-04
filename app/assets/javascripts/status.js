$(document).on('turbolinks:load', function(){
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



// $(document).on('scroll', 'window', function(){
//   if (window.location.href.match(/\/groups\/\d+\/statuses/)) {
//     $(function() {
//       var topBtn = $("#scroll");
//       topBtn.hide();
//       //スクロールが100に達したらボタン表示
//       $(window).scroll(function () {
//         if ($(this).scrollTop() > 20) {
//           topBtn.fadeIn();
//         } else {
//           topBtn.fadeOut();
//         }
//       });
//     });
//   };
// });