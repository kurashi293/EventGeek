// chat-form__text-areaにフォーカスが当たったらheightを広げる処理
$(document).on("focus", ".chat-form__text-area", function(){
  if (window.matchMedia( '(min-width: 482px)' ).matches) {
    $(".chat-form__text-area").css("height", "13rem");
    $(".messages").css("height", "calc(100% - 58px - 150px - 60px)");
    if (window.location.href.match(/\/groups\/\d+\/chats/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    }
  }

  else{
    $(".chat-form__text-area").css("height", "7rem");
    $(".messages").css("height", "calc(100% - 50px - 85px - 50px)");
    if (window.location.href.match(/\/groups\/\d+\/chats/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    }
  }
});



// chat-form__text-areaのフォーカスが外れ、入力値が何も無ければheightを縮める処理
$(document).on("blur", ".chat-form__text-area", function(){
  if (window.matchMedia( '(min-width: 482px)' ).matches) {
    if($(this).val() == ""){
      $(".chat-form__text-area").css("height", "4.5rem");
      $(".messages").css("height", "calc(100% - 58px - 65px - 60px)");
    }
  }

  else{
    if($(this).val() == ""){
      $(".chat-form__text-area").css("height", "3.5rem");
      $(".messages").css("height", "calc(100% - 50px - 50px - 50px)");
    }
  }
});





//フォームで選択した画像をプレビュー
$(document).on('turbolinks:load', function(){
  var view_box = $('.chat-form__image');

  $(".chat-form__image--hidden-field").on('change', function(){
    var fileprop = $(this).prop('files')[0],
        find_img = $(this).next('img'),
        fileRdr = new FileReader();

    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    var img = '<div class="preview-container"><p class= "preview-container__heading">選択中の画像</p><img alt="" class="preview-container__image"><p><a href="#" class="preview-container__caption"><i class="far fa-window-close" id="close-icon"></i></a></p></div>';

    view_box.append(img);

    fileRdr.onload = function() {
      view_box.find('img').attr('src', fileRdr.result);
      form_img__delete(view_box);
    }
    fileRdr.readAsDataURL(fileprop);

    $(this).attr('src')
    $(".preview-container").fadeIn();
    $(".messages").fadeTo("fast", 0.2);
    return false;     //親要素へのイベント伝播を止める
  });

  function form_img__delete(target)
  {
    target.find("a.preview-container__caption").on('click',function(){
      if(window.confirm('選択した画像を削除します。\nよろしいですか？'))
      {
        $(this).parent().find('input[type=file]').val('');
        $(this).parent().find('.preview-container, br').remove();
        $(this).remove();
      }
    });
    return false;
  }
});