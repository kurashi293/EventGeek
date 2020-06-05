$(document).on('turbolinks:load', function(){
  var view_box = $(".group-icon__select");

  $(".input-file").on('change', function(){
    var fileprop = $(this).prop('files')[0],
        find_img = $(this).next('img'),
        fileRdr = new FileReader();

    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    if(fileprop.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    var img = '<div class="img_view"><img alt="" class="group-icon--preview"><p><a href="#" class="form_img__delete">削除</a></p></div>';

    view_box.append(img);

    fileRdr.onload = function() {
      view_box.find('img').attr('src', fileRdr.result);
      form_img__delete(view_box);
    }
    fileRdr.readAsDataURL(fileprop);

    $(this).prop("disabled", true);
    return false;     //親要素へのイベント伝播を止める
  });

  function form_img__delete(target)
  {
    target.find("a.form_img__delete").on('click',function(){
      if(window.confirm('選択した画像を削除します。\nよろしいですか？'))
      {
        $(this).parent().find('input[type=file]').val('');
        $(this).parent().find('.img_view, br').remove();
        $(this).remove();
      }
    });
    return false;
  }

  $(".form-submit--black").on('click', function(){
    $(".input-file").prop("disabled", false);
  });
});