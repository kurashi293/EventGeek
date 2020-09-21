// 詳細検索のモーダル
$(document).on("click", "#modal-open", function(){
  $('.search-modal').fadeIn("fast");

  // スクリーンサイズが635px以下ならば、.date-selectに改行を適用させる処理
  if (window.matchMedia( '(max-width: 635px)' ).matches) {
    $(".hide-br").show();
    $(".date-select").css("margin-bottom", "15px")
  }
  return false;     //親要素へのイベント伝播を止める
});

$(document).on("click", ".search-area__link", function(){
  $('.search-modal').fadeOut("fast");
  return false;
});




$(document).on('turbolinks:load', function(){
  //tabをクリックしたときの動作
  $('.information-tab li').click(function(){
    //クリックしたタブのindexを取得
    var index = $('.information-tab li').index(this);

    $('.information-contents .information-content').hide().removeClass('active');
    $('.information-contents .information-content').eq(index).fadeIn().addClass('active');

    $('.information-tab li').removeClass('active');
    $(this).addClass('active');
  });
});



// $(document).on('turbolinks:load', function(){
//   $('.toppage-users').hide();
//   $('.bolt').click(function() {

//     $('.toppage-users').fadeIn(2000);     //2秒かけてフェードイン
//   });
// });



// $(document).on('turbolinks:load', function(){
//   $('.fade-close').click(function() {

//     $('.toppage-users').fadeOut(1000);     //1秒かけてフェードアウト
//   });
// });