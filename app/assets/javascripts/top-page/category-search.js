// サイドバーでのカテゴリー検索
// クリックした送信ボタンの値を特定。その値でhidden_fieldの値を書き換える処理
$(document).on("click", ".container__category", function (e) {

  var category_index = $(".container__category").index(this);
  var click_val = $(this).val();

  if (click_val > 0 && click_val < 15 && $(category_index).eq($(e.target))){
    $(".change-val").val(click_val);
    $("#category-form").submit();
  }
});