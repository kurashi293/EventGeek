// 隠しフォームをリストの最下部に追加・表示する処理
$(document).on('click', '#back-log', function(){
  $(".hidden-field").val(1);
  $('.task-form').appendTo($("#add-back-log"));
  $(".task-form").show();
  if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
    $('.task-form').animate({scrollTop: $('.task-form')[0].scrollHeight}, 'fast');
    return false;       //親要素へのイベント伝播を止める
  }
});


$(document).on('click', '#doing', function(){
  $(".hidden-field").val(2);
  $('.task-form').appendTo($("#add-doing"));
  $(".task-form").show();
  if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
    $('.task-form').animate({scrollTop: $('.task-form')[0].scrollHeight}, 'fast');
    return false;
  }
});


$(document).on('click', '#compleate', function(){
  $(".hidden-field").val(3);
  $('.task-form').appendTo($("#add-compleate"));
  $(".task-form").show();
  if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
    $('.task-form').animate({scrollTop: $('.task-form')[0].scrollHeight}, 'fast');
    return false;
  }
});





// text-areaにフォーカスが当たったらheightを広げる処理
$(document).on("focus", ".text-area", function(){
  $(".text-area").css("height", "13rem");
});


// text-areaのフォーカスが外れ、入力値が何も無ければheightを縮める処理
$(document).on("blur", ".text-area", function(){
  if($(this).val() == ""){
  $(".text-area").css("height", "4.5rem");
  }
});





// チェックボックスのモーダルを表示させる処理
$(document).on('click', '.checkbox-modal-button', function(){
  $('.checkbox-modal').fadeIn("fast");
  return false;
});


$(document).on('click', '.checkbox-field__foot--button', function(){
  $('.checkbox-modal').fadeOut("fast");
    return false;
});





// 全てのチェックボックスにチェックをつける処理
$(document).on("click", ".checkbox-field__head--left", function(){
  $('input[name="task[user_ids][]"]').prop('checked', true);
});


// 全てのチェックボックスのチェックを外す処理
$(document).on("click", ".checkbox-field__head--right", function(){
  $('input[name="task[user_ids][]"]').prop('checked', false);
});





// 画像モーダルの処理
$(document).on('click', '.task-image', function(){
  //取得された画像が全て重なった状態で表示される。 そこでクリックされたtask-imageのsrcをattrメソッドで取得し、task-image__modalのsrcをattrメソッドでtask-imageのsrcに変更した
  $(".large-image").attr('src', $(this).attr('src'))
  $('.task-image__modal').fadeIn();
  return false;     //親要素へのイベント伝播を止める
});


$(document).on('click', '.task-image__modal', function(){
  $('.task-image__modal').fadeOut();
  return false;
});