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