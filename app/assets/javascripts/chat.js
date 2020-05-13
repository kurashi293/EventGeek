// $(document).on('turbolinks:load', function(){


  //⑦
  //jbuilderを使って作成されたjsonデータを用意していたHTMLにぶち込む
  //テンプレートリテラル記法で書く
  // function buildHTML(chat) {
  //   var message = chat.message ? `${ chat.message }` : "";

  //   var img = chat.image.url ?
  //     `<img class= "lower-content__image" src= ${ chat.image.url }>` : "";

  //   var avatar = chat.user.avatar.attached?
  //     `<img class="icon" src= ${ chat.user.avatar }>` : "";

  //   var html =
  //     `<div class="message" data-chat-id="${chat.id}">
  //       <div class="upper-contents">
  //         <div class="upper-contents__icon">
  //         </div>
  //         ${avatar}
  //         <div class="upper-contents__user-name">${chat.user_name}
  //         </div>
  //         <div class="upper-contents__date">${chat.created_at}
  //         </div>
  //       </div>
  //       <div class="lower-content">
  //         <div class="lower-content__text">${message}
  //         </div>
  //         <br>
  //         ${img}
  //         <div class="lower-content__border">
  //         </div>
  //       </div>
  //     </div>`
  //   return html;
  // }




  //②
  // $("#chat_message").on("submit", function(e) {   //ボタンが押された時の処理
    // e.preventDefault();   //フォームが送信された時に、デフォルトだとフォームを送信するための通信(同期通信)がされてしまうので、preventDefault()を使用してデフォルトのイベントを止める


    // var chat = new FormData(this);   //thisでイベントが起こったところを特定し、formDataを取得後、変数に代入
    // var url = $(this).attr("action");   //イベントが起きたurlを取得し変数に代入



    //③
    // $.ajax({     //この記述でchatsコントローラーのcreateアクションを動かす
      // url: url,   //送信先のurl  =>  var url = $(this).attr("action");
      // type: "POST",   //httpメソッド
      // data: chat,   //コントローラーへ送信するデータ  =>  var chat = new FormData(this);
      // dataType: "json",   //データの種類
      // processData: false,
      // contentType: false
    // })



    //⑥
    // .done(function(data) {   //返ってきたJSONを受け取る、成功時の処理      dataの部分の名前は何でもいいい
      // console.log(data);
      // var html = buildHTML(data);
      // $(".message").append(html);     //受け取ったHTMLをviewファイル内の'.message'クラスに追加する
      // $('#chat_message')[0].reset();   //formを空にする
      // scrollBottom();                 //ここで⑨の関数を呼び出す
    // })



    // .fail(function() {             //失敗時の処理
      // alert('エラーが発生したためメッセージは送信できませんでした。');
    // })



    //⑧
    // .always(function() {                               //alwaysは成功/失敗に関わらず実行される
      // $('.chat-form__send').prop('disabled', false);   //disabled, falseは連続で送信ボタンを押せるようにする  =>  propメソッドで解除している
    // })
  // })



  //⑨
  // function scrollBottom() {
  //   var target = $('.chat').last();
  //   var position = target.offset().top + $('.chats').scrollTop();
  //   $('.chats').animate({       //animateメソッドでスクロールを実装
  //     scrollTop: position
  //   }, 300, 'swing');
  // }



  // var reloadMessages = function() {
  //   if (window.location.href.match(/\/groups\/\d+\/chats/)) { //今いるページのリンクが/groups/グループID/chatsのパスとマッチすれば以下を実行。
  //     var last_message_id = $('.chat:last').data("chat-id"); //dataメソッドで.messageにある:last最後のカスタムデータ属性を取得しlast_chat_idに代入。
  //     var group_id = $(".group").data("group-id");
  //     $.ajax({ //ajax通信で以下のことを行う
  //       url: "api/messages", //サーバを指定。今回はapi/message_controllerに処理を飛ばす
  //       type: 'get', //メソッドを指定
  //       dataType: 'json', //データはjson形式
  //       data: {
  //         last_id: last_chat_id
  //       } //飛ばすデータは先ほど取得したlast_message_id。またparamsとして渡すためlast_idとする。
  //     }).done(function(chats) { //通信成功したら、controllerから受け取ったデータ（messages)を引数にとって以下のことを行う
  //       var insertHTML = ''; //追加するHTMLの入れ物を作る
  //       messages.forEach(function(chat) { //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
  //         insertHTML = buildHTML(chat); //メッセージが入ったHTMLを取得
  //         $('.chats').append(insertHTML); //メッセージを追加
  //       })
  //       $('.chats').animate({scrollTop: $('.chats')[0].scrollHeight}, 'fast'); //最新のメッセージが一番下に表示されようにスクロールする。
  //     }).fail(function() {
  //       alert('自動更新に失敗しました'); //ダメだったらアラートを出す
  //     });
  //   }
  // };
  // setInterval(reloadMessages, 5000); //5000ミリ秒ごとにreloadMessagesという関数を実行し自動更新を行う。
// });







//処理の流れ

//① jQueryを記述するためのファイルxxx.jsを作成
//② フォームが送信されたらイベントが発火するようにjsファイルにコードを書く
//③ イベントが発火した時にajaxを使用してcreateアクションが動くようにする
//④ createアクションでメッセージを保存し（非同期通信でメッセージが保存される)respond_toを使用してHTMLとJSONの場合で処理を分ける
//⑤ jbuilderを使用して送信したメッセージをJSON形式で返す
//⑥ 返ってきたJSONをdoneメソッドで受け取りjsファイル内でHTMLを作成する
//⑦ 作成したHTMLをメッセージ画面に追加する
//⑧ メッセージを連続で送信できるようにする
//⑨ HTMLを追加した分メッセージ画面を下にスクロールする









$(document).on('turbolinks:load', function(){
  $(function(){
    $('.lower-content__image').on('click',function(){

      //取得された画像が全て重なった状態で表示される。 そこでクリックされたtask-imageのsrcをattrメソッドで取得し、task-image__modalのsrcをattrメソッドでtask-imageのsrcに変更した
      $(".lower-content__image--modal").attr('src', $(this).attr('src'))

      $('.modal').fadeIn();
      return false;
    });
    $('.modal').on('click',function(){
      $('.modal').fadeOut();
      return false;
    });
  });
});




$(document).on('turbolinks:load', function(){
  var view_box = $('.chat-form__image');

  $(".hidden").on('change', function(){
    var fileprop = $(this).prop('files')[0],
        find_img = $(this).next('img'),
        fileRdr = new FileReader();

    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    var img = '<div class="chat-img_view"><p class= "chat-img__text--selected">選択中の画像</p><img alt="" class="chat-form__img--preview"><p><a href="#" class="chat-form__img--delete">削除</a></p></div>';

    view_box.append(img);

    fileRdr.onload = function() {
      view_box.find('img').attr('src', fileRdr.result);
      form_img__delete(view_box);
    }
    fileRdr.readAsDataURL(fileprop);

    $(this).prop("disabled", true);

    $(this).attr('src')
    $(".chat-img_view").fadeIn();
    $(".messages").fadeTo("fast", 0.2);
    return false;     //親要素へのイベント伝播を止める
  });

  function form_img__delete(target)
  {
    target.find("a.chat-form__img--delete").on('click',function(){
      if(window.confirm('選択した画像を削除します。\nよろしいですか？'))
      {
        $(this).parent().find('input[type=file]').val('');
        $(this).parent().find('.chat-img_view, br').remove();
        $(this).remove();
      }
    });
    return false;
  }

  $(".chat-form__send").on('click', function(){
    $(".hidden").prop("disabled", false);
  });
});
