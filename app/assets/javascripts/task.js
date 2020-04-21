$(document).on('turbolinks:load', function(){
  // $(function() {
  //   $(document).on('click', '.task-list__add', function() {
  //     $('#task-list').clone(true).appendTo($('#task-ul')).draggable();
  //   });
  // });



  // $(function() {
  //   $(document).on('click', '.task-list__remove', function() {
  //     $('#task-list').remove();
  //   });
  // });



  // $(function() {
  //   $(document).on('click', '.task__remove', function() {
  //     $('#task-box').remove();
  //   });
  // });




  // $(function() {
  //   $(".task-box__content--list").draggable({
  //     helper: 'clone',  //クローン（残像）を出す設定
  //     appendTo: 'body',
  //     containment: 'window',
  //     scroll: false,
  //     snap: "#add--doing",
  //     snapMode: "inner",
  //     revert: "invalid",
  //     opacity: 0.7,
  //     cursor: "move",
  //   });
  //   $("#add--doing").droppable({
  //     classes: {
  //       "ui-droppable-active": "ui-state-active",
  //       "ui-droppable-hover": "ui-state-hover"
  //     },
  //     drop: function(event, ui) {
  //       var $srcObj = $(ui.draggable[0]);
  //       $srcObj.offset($(this).offset());
  //     }
  //   });
  // });




  $(function(){
    $('.task-image').on('click',function(){

      //取得された画像が全て重なった状態で表示される。 そこでクリックされたtask-imageのsrcをattrメソッドで取得し、task-image__modalのsrcをattrメソッドでtask-imageのsrcに変更した
      $(".task-image__modal").attr('src', $(this).attr('src'))

      $('.modal').fadeIn();
      return false;     //親要素へのイベント伝播を止める
    });
    $('.modal').on('click',function(){
      $('.modal').fadeOut();
      return false;
    });
  });


});




$(function() {
  $(document).on('click', '#back-log', function() {
    $('.task-form').appendTo($("#add--back-log"));
    $(".task-form").show();
    return false;
  });
});



$(function() {
  $(document).on('click', '#doing', function() {
    $(".hidden-field").val(2);
    $('.task-form').appendTo($("#add--doing"));
    $(".task-form").show();
    return false;
  });
});



$(function() {
  $(document).on('click', '#compleate', function() {
    $(".hidden-field").val(3);
    $('.task-form').appendTo($("#add--compleate"));
    $(".task-form").show();
    return false;
  });
});




$(document).on('turbolinks:load', function(){
  $(document).on('click', '#back-log', function(){
    if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
      $('.task-form').animate({scrollTop: $('.task-form')[0].scrollHeight}, 'fast');
      return false;       //親要素へのイベント伝播を止める
    }
  });

  $(document).on('click', '#doing', function(){
    if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
      $('.task-form').animate({scrollTop: $('.task-form')[0].scrollHeight}, 'fast');
      return false;       //親要素へのイベント伝播を止める
    }
  });

  $(document).on('click', '#compleate', function(){
    if (window.location.href.match(/\/groups\/\d+\/tasks/)) {        //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
      $('.task-form').animate({scrollTop: $('.task-form')[0].scrollHeight}, 'fast');
      return false;       //親要素へのイベント伝播を止める
    }
  });
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
});