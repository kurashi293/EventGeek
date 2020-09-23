// 選択画像のプレビュー

// 前提知識
// FileReader オブジェクトは、ユーザーのコンピューター内にあるファイルをウェブアプリケーションから非同期的に読み込むことが出来るWeb Api
// attr => 属性の存在を確認する
// prop => 属性の状態を確認する
$(document).on('change', ".input-file", function(){

  // 登録済みアバターに表示されているRe-selectの要素
  $(".avatar-paragraph").remove();

      // 変数file_dataは、選択されたファイルの情報群。 [0]はFileReader の状態を表す（EMPTY => まだデータは何も読み込まれていない状態）
  var file_data = $(this).prop('files')[0],

      // 変数filereaderは新しいfilereaderを作成する
      filereader = new FileReader(),

      // 変数labelは、イベントが起こった親要素（avatar-label）
      label = $(this).parent(".avatar-label"),

      // 変数find_imgは、イベントが起こった親要素（avatar-label）に存在するイメージ要素
      find_img = $(this).parent().find('img');



  // !は否定。偽の時に真を返し、真の時に偽を返す。
  // 選択されたファイルの情報がnullか空文字ならtrueと判定。処理を中断。
  if(!file_data){
    // console.log("情報がnull");
    return false;
  }



  // console.log(file_data);
  // 選択されたファイル情報のtype: 項目にimageという文字列が含まれているかを判定。
  // 含まれていなければアラートを出し、処理を中断する。
  if(file_data.type.indexOf("image") < 0){
    alert("画像ファイルを指定してください。");
    return false;
  }



  // changeイベントが発火した時、avatar-labelにimg要素が既にあったら
  if(find_img.length){
    //avatar-labelのimg要素の次以降の兄弟要素を削除
    find_img.nextAll().remove();
    // avatar-labelのimg要素を削除
    find_img.remove();
    $(".preview_box").remove();
  }



  // 画像をプレビューするためのボックスを作成
  var preview_box = '<div class="preview_box"><img alt="" class="img_selected"><p class="img_paragraph"><a href="#" class="img_delete">Cancel</a></p></div>';

  // 変数label（changeイベントが起こったavatar-label要素）の最後に変数preview_boxを追加する
  label.append(preview_box);
  // 変数label（changeイベントが起こったavatar-label要素）からクラス名がimage-iconの要素を特定し、document上から消す
  label.find(".image-icon").hide();



  // コンテンツ（画像）の読み込みが完了して、利用可能な状態になったら
  filereader.onload = function() {
    // 変数labelからimg要素を見つけ出し、読み込んだファイルに存在するimg要素のsrc属性を取得する
    // 最後にfilereaderのresultプロパティーで、読み取り操作が完了したファイルの内容を返す
    label.find('img').attr('src', filereader.result);

    // preview_box_delete関数に処理を繋げる
    preview_box_delete(label);
  }

  // readAsDataURLメソッドはユーザーによって指定されたファイルを読み込むために使用。
  filereader.readAsDataURL(file_data);

  return false;     //親要素へのイベント伝播を止める
});



// 画像削除
function preview_box_delete(label){
  label.find("a.img_delete").on('click',function(){
    $(this).parent().find('input[type=file]').val('');
    $(this).parent().find('.preview_box, br').remove();
    $(this).remove();
  });
  return false;
}





// CancelとRe-selectの切り替え
$(document).on('mouseenter', '.img_selected', function(){
  var html = `<div class="img_inform">Re-select</div>`;
  $(".img_paragraph").append(html);
  $(".img_delete").hide();
});


$(document).on('mouseleave','.img_selected',function(){
  $(".img_inform").remove();
  $(".img_delete").show();
});