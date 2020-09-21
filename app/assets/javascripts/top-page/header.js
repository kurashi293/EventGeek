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





// ドロワーメニュー
$(function(){
  if (window.matchMedia( '(min-width: 770px)' ).matches) {
    $(document).on("click", ".toppage-bars-icon", function(){
      // 1.メニューが現れる位置を設定。あらかじめposition: fixed;の設定で、位置を決めていることが前提。
      var sideVal = -160;
      var mainVal = 0

      // 4.再びクリックされる時（メニューが開いた状態）はopenクラスを持っているので
      if($(this).hasClass("open")) {

        // 5.変数（rightVal）の値を書き換える。書き換える値はposition: fixed;で設定している値と同じにする。
        sideVal = 0;
        mainVal = 160;

        // 6.openクラスを削除し、再びクラスを追加できるようにしておく
        $(this).removeClass("open");
        $(".main-wrap").stop().css({left: mainVal}, 100).css("width", "calc(100% - 16rem)");

      } else {
        // 2.元々openクラスを持っていないので、クリック時にクラスを追加
        $(this).addClass("open");
        $(".main-wrap").stop().css({left: mainVal}, 100).css("width", "100%");
      }

      // 3.処理を止める位置
      $(".side-bar").stop().css({left: sideVal
      // 開閉の速さ
      }, 100);
    });
  }


  if (window.matchMedia( '(max-width: 769px)' ).matches) {
    $(document).on("click", ".toppage-bars-icon", function(){
      var leftVal = 0;

      if($(this).hasClass("open")) {
        leftVal = -160;
        $(this).removeClass("open");

      } else {
        $(this).addClass("open");
      }

      $(".side-bar").stop().animate({
        left: leftVal
      }, 100);
    });
  }
});





// アイコンをクリックで検索フィールドを表示
$(document).on("click", ".search-icon", function(){
  $(".toppage-header__input").show();
  $(".toppage-arrow-left").show();
  $(".toppage-bars-icon").hide();
  $(".toppage-header__title").hide();
  $(".toppage-header__buttons").hide();
});


// アイコンクリックで検索フィールドを非表示
$(document).on("click", ".toppage-arrow-left", function(){
  $(".toppage-header__input").hide();
  $(".toppage-arrow-left").hide();
  $(".toppage-bars-icon").show();
  $(".toppage-header__title").show();
  $(".toppage-header__buttons").show();
});