// ドロワーメニュー
$(document).on("click", ".bars-icon", function(){
  // 1.メニューが現れる位置を設定。あらかじめposition: fixed;のマイナス設定で、ウィンドウ上からコンテンツを隠し、位置を決めていることが前提。
  var rightVal = 0;

  // 4.再びクリックされる時（メニューが開いた状態）はopenクラスを持っているので
  if($(this).hasClass("open")) {

    // 5.変数（rightVal）の値を書き換える。書き換える値はposition: fixed;で設定している値と同じにする。
    rightVal = -300;

    // 6.openクラスを削除し、再びクラスを追加できるようにしておく
    $(this).removeClass("open");

    // 2.元々openクラスを持っていないので、クリック時にクラスを追加
  } else {
    $(this).addClass("open");
  }

  // 3.処理を止める位置
  $(".drawer-menu").stop().animate({
    right: rightVal
  // 開閉の速さ
  }, 100);
});





// モバイルデバイス時のグループ名切り替え処理
$(document).on('turbolinks:load', function(){
  if (window.matchMedia( '(max-width: 999px)' ).matches) {
    $(document).on("click", ".location-arrow-icon", function(){
      $(".global-header__body--group-name").show();
      $(".global-header__body--logo").hide();
      $(".location-arrow-icon").hide();
    });

    $(document).on("click", ".global-header__body--group-name", function(){
      $(".global-header__body--group-name").hide();
      $(".global-header__body--logo").show();
      $(".location-arrow-icon").show();
    });
  }
});