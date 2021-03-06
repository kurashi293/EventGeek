$(document).on('turbolinks:load', function(){

  var search_list = $("#user-search-result");
  var member_list = $("#group-users");


  function appendUser(user){

    var japanese = /^[^\x20-\x7e]+$/;             // 全角文字のみ（空文字NG）
    var english = /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/;  // 半角英数記号のみ（空文字NG）

    if (user.name.match(japanese) && user.name.length > 12){
      var slice_name = user.name.slice(0, 11) + "...";
      // console.log("全角文字のみ（空文字NG）");

    }else if (user.name.match(english) && user.name.length > 12){
      var slice_name = user.name.slice(0, 11) + "...";
      // console.log("半角英数記号のみ（空文字NG）");


    }else if (user.name.match(japanese) && user.name.match(english) && user.name.length > 12){
      var slice_name = user.name.slice(0, 11) + "...";
      // console.log("全角文字のみ（空文字NG）かつ半角英数記号のみ（空文字NG）");

    }else{
      var slice_name = user.name
      // console.log("12文字以下");
    }


    var html =
              `<div class="group-user clearfix">
                  <p class="group-user__name target">${slice_name}</p>
                  <div class="user-search-add group-user__btn group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
              </div>`;
    search_list.append(html);                   //作成した変数htmlを変数search_listに追加する
  }

  function appendErrMsgToHTML(msg){
    var html =
              `<div class="group-user clearfix">
                  <p class="group-user__name">${msg}</p>
              </div>`;
    search_list.append(html);    //作成した変数htmlを変数search_listに追加する
  }

  function apeendMember(id,name){

    var japanese = /^[^\x20-\x7e]+$/;             // 全角文字のみ（空文字NG）
    var english = /^[a-zA-Z0-9!-/:-@¥[-`{-~]+$/;  // 半角英数記号のみ（空文字NG）

    if (name.match(japanese) && name.length > 12){
      var slice_name = name.slice(0, 11) + "...";
      // console.log("全角文字のみ（空文字NG）");

    }else if (name.match(english) && name.length > 12){
      var slice_name = name.slice(0, 11) + "...";
      // console.log("半角英数記号のみ（空文字NG）");

    }else {
      var slice_name = name
      // console.log("11文字以下");
    }


    var html =
              `<div class='group-user'>
                <input name='group[user_ids][]' type='hidden' value='${id}'>
                <p class='group-user__name'>${slice_name}</p>
                <div class='user-search-remove group-user__btn group-user__btn--remove js-remove-btn'>削除</div>
              </div>`;
    member_list.append(html);      //作成した変数htmlを変数member_listに追加する
  }



  $('#user-search-field').on("keyup", function(e){      //検索欄に文字入力されるたびに処理を行う
    var input = $("#user-search-field").val();          //検索欄に入力された文字をvalで取得し変数inputに代入
    $.ajax({
        type: 'GET',                // HTTPメソッドはGETで
        url:  '/users',             // /usersのURLに (これによりusersコントローラのindexアクションが起動)
        data: { keyword: input},    // keyword: inputを送信する  =>  var input = $("#user-search-field").val();
        dataType: 'json'            // サーバから値を返す際はjsonである
    })


    .done(function(users) {                // 処理が成功したら、usersにjbuilderから送られたjson形式のuser変数が代入される。複数形なので配列型で入ってくる
      if (input.length == 0) {             // フォームの文字列長さが0であれば、インクリメンタルサーチ結果を表示しないようにする
        $("#user-search-result").empty();  // 要素の中身を空にする。この処理がなければ、文字が一致し続ける度に配列の中身が繰り返し表示されてしまう
      }

      else if (input.length !== 0 && input.indexOf(users)) {
        $("#user-search-result").empty();
        users.forEach(function(user){      //usersという配列をforEachで取得し、ユーザーごとにappendUser(user)関数に飛ばす
          appendUser(user);
        });
      }

      else {
        $('#user-search-result').empty();                       //appendErrMsgToHTML関数に飛ばす
          appendErrMsgToHTML("一致するユーザーはいません");
      }
    })


    .fail(function() {                    //処理が失敗したらアラートをだす
      alert('ユーザー検索に失敗しました');
    })
  });



  $(document).on("click", ".user-search-add", function(e){
  var id = $(this).attr("data-user-id");
  var name = $(this).attr("data-user-name");
  $(this).parent().remove();
  apeendMember(id,name);                //削除ボタンが書いてあるapeendMember関数に飛ばす
  });



  $(document).on("click", ".group-user__btn--remove",function(e){
    $(this).parent().remove();          //クリックされたところを特定し、htmlを親要素をごと消す（検索結果から消す）
  });
});