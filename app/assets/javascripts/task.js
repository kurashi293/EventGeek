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





// tasks/index 画像プレビュー
// tasks/edit

// 前提知識
// FileReader オブジェクトは、ユーザーのコンピューター内にあるファイルをウェブアプリケーションから非同期的に読み込むことが出来るWeb Api
// attr => 属性の存在有無だけを確認
// prop => 属性の状態を確認する
$(document).on('change', ".input-files",  function(){

      // 変数filepropは、FileReader の状態を表す数値0（EMPTY => まだデータは何も読み込まれていない状態）を確認する
  var fileprop = $(this).prop('files')[0],
      // 変数find_imgは、イベントが起こった（input-files）親要素（task-label）に存在するイメージ要素を見つける
      find_img = $(this).parent().find('img'),
      // 変数filereaderは新しいfilereaderを作成する
      filereader = new FileReader(),
      // 変数view_boxは、イベントが起こった親要素（task-label）
      view_box = $(this).parent('.task-label');





      console.log(fileprop);
      find_icon =  $(this).parent().find(".image-icon");

  // changeイベントが発火した時、task-labelにimg要素が既にあったら
  if(find_img.length){
    // task-labelのimg要素の次以降の兄弟要素を削除
    find_img.nextAll().remove();
    // task-labelのimg要素を削除
    find_img.remove();
  }




  if(fileprop.type.indexOf("image") < 0){
    alert("画像ファイルを指定してください。");
    // task-labelのimg要素の次以降の兄弟要素を削除
    find_img.nextAll().remove();
    // task-labelのimg要素を削除
    find_img.remove();
    find_icon.show();
    return false;
  }



  // 画像をプレビューするためのボックスを作成
  var img = '<div class="preview_boxes"><img alt="" class="images_selected"><p><a href="#" class="images_delete"><i class="far fa-window-close" id="closes-icon"></i></a></p></div>';

  // 変数view_box（changeイベントが起こったtask-label要素）の最後に変数imgを追加する
  view_box.append(img);
  // 変数view_box（changeイベントが起こったtask-label要素）からクラス名がimage-iconの要素を特定し、document上から消す
  view_box.find(".image-icon").hide();

  // コンテンツ（画像）の読み込みが完了して、利用可能な状態になったら
  filereader.onload = function() {

    // 変数view_boxからimg要素を見つけ出し、読み込んだファイルに存在するimg要素のsrc属性を取得する
    // 最後にfilereaderのresultプロパティーで、読み取り操作が完了したファイルの内容を返す
    $(view_box).find('img').attr('src', filereader.result);
    images_delete(view_box);
  }

  // readAsDataURLメソッドはユーザーによって指定されたファイルを読み込むために使用。
  filereader.readAsDataURL(fileprop);

  return false;
});


function images_delete(target){
  target.find("a.images_delete").on('click',function(){
    var self = $(this),
        parentBox = self.parent().parent().parent();
    if(window.confirm('選択した画像を削除します。\nよろしいですか？')){
      setTimeout(function(){
        parentBox.find('input[type=file]').val('');
        parentBox.find('.preview_boxes').remove();
        parentBox.find(".image-icon").show();
      } , 0);
      return false;
    }
  });
}





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