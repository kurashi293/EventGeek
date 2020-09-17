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





$(document).on('turbolinks:load', function(){
  $(".input-file__js").on('change', function(){
    var fileprop = $(this).prop('files')[0],
      find_img = $(this).parent().find('img'),
      filereader = new FileReader(),
      view_box = $(this).parent('.label__js');

    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    var img = '<div class="img_view"><img alt="" class="selected-images"><p><a href="#" class="img_del">削除</a></p></div>';

    view_box.append(img);

    filereader.onload = function() {
      view_box.find('img').attr('src', filereader.result);
      img_del(view_box);
    }
    filereader.readAsDataURL(fileprop);

    $(this).prop("disabled", true);
    return false;
  });

  function img_del(target){
    target.find("a.img_del").on('click',function(){
      var self = $(this),
          parentBox = self.parent().parent().parent();
      if(window.confirm('選択した画像を削除します。\nよろしいですか？')){
        setTimeout(function(){
          parentBox.find('input[type=file]').val('');
          parentBox.find('.img_view').remove();
        } , 0);
      }
      return false;
    });
  }

  $(".form-submit__js--green").on('click', function(){
    $(".input-file__js").prop("disabled", false);
  });
});