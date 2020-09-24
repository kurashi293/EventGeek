// 選択画像のプレビュー

// 前提知識
// FileReader オブジェクトは、ユーザーのコンピューター内にあるファイルをウェブアプリケーションから非同期的に読み込むことが出来るWeb Api
// attr => 属性の存在を確認する
// prop => 属性の状態を確認する
$(document).on('change', ".input-files", function(){

      // 変数file_dataは、選択されたファイルの情報群。 [0]はFileReader の状態を表す（EMPTY => まだデータは何も読み込まれていない状態）
  var file_data = $(this).prop('files')[0],

      // 変数filereaderは新しいfilereaderを作成する
      filereader = new FileReader(),

      // 変数labelは、イベントが起こった親要素（task-image-label）
      label = $(this).parent('.task-image-label'),

      // 変数find_imgは、イベントが起こった親要素（task-image-label）に存在するイメージ要素
      find_img = $(this).parent().find('img');



  // !は否定。偽の時に真を返し、真の時に偽を返す。
  // 選択されたファイルの情報がnullか空文字ならtrueと判定。処理を中断。
  if(!file_data){
    return false;
  }



  // 選択されたファイル情報のtype: 項目にimageという文字列が含まれているかを判定。
  // 含まれていなければアラートを出し、処理を中断する。
  if(file_data.type.indexOf("image") < 0){
    alert("画像ファイルを指定してください。");
    return false;
  }



  // changeイベントが発火した時、task-image-labelにimg要素が既にあったら
  if(find_img.length){
    // task-image-labelのimg要素の次以降の兄弟要素を削除
    find_img.nextAll().remove();
    // task-image-labelのimg要素を削除
    find_img.remove();
    // イベントが起こった親要素（task-image-label）に存在する.task_preview_boxを削除
    label.find(".task_preview_box").remove();
  }



  // 画像をプレビューするためのボックスを作成
  var preview_box = '<div class="task_preview_box"><img alt="" class="imgs_selected"><p class="imgs_paragraph"><a href="#" class="imgs_delete">Cancel</a></p></div>';

  // 変数label（changeイベントが起こったtask-image-label要素）の最後に変数preview_boxを追加する
  label.append(preview_box);
  // 変数label（changeイベントが起こったtask-image-label要素）からクラス名がtask-image-iconの要素を特定し、document上から消す
  label.find(".task-image-icon").hide();



  // コンテンツ（画像）の読み込みが完了して、利用可能な状態になったら
  filereader.onload = function() {
    // 変数labelからimg要素を見つけ出し、読み込んだファイルに存在するimg要素のsrc属性を取得する
    // 最後にfilereaderのresultプロパティーで、読み取り操作が完了したファイルの内容を返す
    label.find('img').attr('src', filereader.result);

    // task_preview_box_delete関数に処理を繋げる
    task_preview_box_delete(label);
  }

  // readAsDataURLメソッドはユーザーによって指定されたファイルを読み込むために使用。
  filereader.readAsDataURL(file_data);

  return false;     //親要素へのイベント伝播を止める
});



function task_preview_box_delete(label){
  label.find("a.imgs_delete").on('click',function(){
    var self = $(this),
        parentBox = self.parent().parent().parent();
    setTimeout(function(){
      parentBox.find('input[type=file]').val('');
      parentBox.find('.task_preview_box').remove();
      parentBox.find(".task-image-icon").show();
    } , 0);
    return false;
  });
}





// CancelとRe-selectの切り替え
$(document).on('mouseenter', '.imgs_selected', function(){
  var preview_box = $(this).parent('.task_preview_box'),
      html = `<div class="imgs_inform">Re-select</div>`;

  preview_box.find(".imgs_paragraph").append(html);
  preview_box.find(".imgs_delete").hide();
});


$(document).on('mouseleave','.imgs_selected',function(){
  var preview_box = $(this).parent('.task_preview_box');
  preview_box.find(".imgs_inform").remove();
  preview_box.find(".imgs_delete").show();
});