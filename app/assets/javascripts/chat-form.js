//フォームで選択した画像をプレビュー
$(document).on('turbolinks:load', function(){
  var view_box = $('.chat-form__image');

  $(".chat-form__image--hidden-field").on('change', function(){
    var fileprop = $(this).prop('files')[0],
        find_img = $(this).next('img'),
        fileRdr = new FileReader();

    if(find_img.length){
      find_img.nextAll().remove();
      find_img.remove();
    }

    var img = '<div class="preview-container"><p class= "preview-container__heading">選択中の画像</p><img alt="" class="preview-container__image"><p><a href="#" class="preview-container__caption"><i class="far fa-window-close" id="close-icon"></i></a></p></div>';

    view_box.append(img);

    fileRdr.onload = function() {
      view_box.find('img').attr('src', fileRdr.result);
      form_img__delete(view_box);
    }
    fileRdr.readAsDataURL(fileprop);

    $(this).attr('src')
    $(".preview-container").fadeIn();
    $(".messages").fadeTo("fast", 0.2);
    return false;     //親要素へのイベント伝播を止める
  });

  function form_img__delete(target)
  {
    target.find("a.preview-container__caption").on('click',function(){
      if(window.confirm('選択した画像を削除します。\nよろしいですか？'))
      {
        $(this).parent().find('input[type=file]').val('');
        $(this).parent().find('.preview-container, br').remove();
        $(this).remove();
      }
    });
    return false;
  }
});