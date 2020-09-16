$(document).on('turbolinks:load', function(){
  if (window.location.href.match(/\/groups\/\d+/)) {                //今いるページのリンクが/groups/グループIDのパスとマッチすれば以下を実行。
    $('#nav__home').css("color", "#008BBB");
  }
  if (window.location.href.match(/\/groups\/\d+\/\w/)) {           //今いるページのリンクが/groups/グループID/大文字・小文字の英字、数字、アンダースコアのパスとマッチすれば以下を実行。
    $('#nav__home').css("color", "white");
  }
  if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/tasksのパスとマッチすれば以下を実行。
    $('#nav__task').css("color", "#008BBB");
  }
  if (window.location.href.match(/\/groups\/\d+\/statuses/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
    $('#nav__status').css("color", "#008BBB");
  }
  if (window.location.href.match(/\/groups\/\d+\/chats/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
    $('#nav__chat').css("color", "#008BBB");
  }
  if (window.location.href.match(/\/groups\/\d+\/mypages/)) {      //今いるページのリンクが/groups/グループID/mypagesのパスとマッチすれば以下を実行。
    $('#nav__group-mypage').css("color", "#008BBB");
  }
  if (window.location.href.match(/\//)) {                          //今いるページのリンクが/のパスとマッチすれば以下を実行。
    $('#nav__root').css("color", "#008BBB");
  }
  if (window.location.href.match(/\/users\//)) {                   //今いるページのリンクが/usersのパスとマッチすれば以下を実行。
    $('#nav__root').css("color", "white");
  }
  if (window.location.href.match(/\/users\/\d+/)) {                //今いるページのリンクが/users/グループIDのパスとマッチすれば以下を実行。
    $('#nav__mypage').css("color", "#008BBB");
  }
  if (window.location.href.match(/\/groups\/\d+\/information/)) {        //今いるページのリンクが/groups/グループID/tasksのパスとマッチすれば以下を実行。
    $('.comment-alt-icon').css("color", "#008BBB");
  }
});