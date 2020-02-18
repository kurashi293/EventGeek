$(document).on('turbolinks:load', function(){
  if (window.location.href.match(/\/groups\/\d+\/chats/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  }
});