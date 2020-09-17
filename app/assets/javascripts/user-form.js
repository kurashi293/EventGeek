// 選択画像のプレビュー

// 前提知識
// FileReader オブジェクトは、ユーザーのコンピューター内にあるファイルをウェブアプリケーションから非同期的に読み込むことが出来るWeb Api
// attr => 属性の存在有無だけを確認
// prop => 属性の状態を確認する
$(document).on('turbolinks:load', function(){
  $(".input-file").on('change', function(){

        // 変数filepropは、FileReader の状態を表す数値0（EMPTY => まだデータは何も読み込まれていない状態）を確認する
    var fileprop = $(this).prop('files')[0],
        // 変数find_imgは、イベントが起こった親要素に存在するイメージ要素を見つける
        find_img = $(this).parent().find('img'),
        // 変数filereaderは新しいfilereaderを作成する
        filereader = new FileReader(),
        // 変数view_boxは、イベントが起こった親要素（avatar-label）
        view_box = $(this).parent(".avatar-label");

    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    if(fileprop.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }


    // 画像をプレビューするためのボックスを作成
    var img = '<div class="preview_box"><img alt="" class="img_selected"><p><a href="#" class="img_delete"><i class="far fa-window-close" id="close-icon"></i></a></p></div>';

    // 変数view_box（changeイベントが起こったavatar-label要素）の最後に変数imgを追加する
    view_box.append(img);
    // 変数view_box（changeイベントが起こったavatar-label要素）からクラス名がimage-iconの要素を特定し、document上から消す
    view_box.find(".image-icon").hide();


    // コンテンツ（画像）の読み込みが完了して、利用可能な状態になったら
    filereader.onload = function() {

      // 変数view_boxからimg要素を見つけ出し、読み込んだファイルに存在するimg要素のsrc属性を取得する
      // 最後にfilereaderのresultプロパティーで、読み取り操作が完了したファイルの内容を返す
      view_box.find('img').attr('src', filereader.result);
      img_delete(view_box);
    }

    // readAsDataURLメソッドはユーザーによって指定されたファイルを読み込むために使用。
    filereader.readAsDataURL(fileprop);

    return false;     //親要素へのイベント伝播を止める
  });


  function img_delete(target){
    target.find("a.img_delete").on('click',function(){
      if(window.confirm('選択した画像を削除します。\nよろしいですか？')){
        $(this).parent().find('input[type=file]').val('');
        $(this).parent().find('.preview_box, br').remove();
        $(this).remove();
      }
    });
    return false;
  }
});