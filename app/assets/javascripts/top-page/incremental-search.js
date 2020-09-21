// インクリメンタルサーチ
function success(group){
  var group_name = `<div class="return_content">${group.name}</div>`;
  $("#incremental-search-result").append(group_name);
}

function error(message){
  var error_message = `<div class="return_content_error">${message}</div>`;
  $("#incremental-search-result").append(error_message);
}

$(document).on("keyup", '#incremental-search', function(e){
  var input = $(this).val();
  $.ajax({
      type: 'GET',
      url:  '/groups',
      data: { keyword: input},
      dataType: 'json'
  })

  .done(function(groups) {
    if (input.length == 0) {
      $("#incremental-search-result").empty();
    }

    else if (input.length !== 0 && input.indexOf(groups)) {
      $("#incremental-search-result").empty();
      groups.forEach(function(group){
        success(group);
      });
    }

    else {
      $('#incremental-search-result').empty();
      error("一致するグループはありません");
    }
  })

  .fail(function() {
    alert('グループ検索に失敗しました');
  })
});



$(document).on("focus", "#incremental-search", function(){
  var input = $(this).val();
  $.ajax({
      type: 'GET',
      url:  '/groups',
      data: { keyword: input},
      dataType: 'json'
  })

  .done(function(groups) {
    if (input.length == 0) {
      $("#incremental-search-result").empty();
    }

    else if (input.length !== 0 && input.indexOf(groups)) {
      $("#incremental-search-result").empty();
      groups.forEach(function(group){
        success(group);
      });

    }else {
      $('#incremental-search-result').empty();
      error("一致するグループはありません");
    }
  })

  .fail(function() {
    alert('グループ検索に失敗しました');
  })
});


// 入力フィールドのフォーカスが外れたら、検索結果を表示しない処理
$(document).on("blur", "#incremental-search", function(){
  $("#incremental-search-result").empty();
});


// 検索対象を選択することで、対象の情報を持たせたフォームを送信
$(document).on("mousedown", '.return_content', function(e){
  // テキストフィールドに入力された文字を、クリックしたグループ名に値を置き換える
  $("#incremental-search").val($(this).text());

  $('#search-form').submit();

  $("#incremental-search-result").empty();

});