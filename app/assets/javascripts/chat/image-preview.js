$(document).on('change', ".chat-file-field", function(){
  var file_data = $(this).prop('files')[0],
      filereader = new FileReader(),
      label = $('.chat-form__image-label'),
      find_img = $(this).parent().find('img');


  if(!file_data){
    return false;
  }


  if(file_data.type.indexOf("image") < 0){
    alert("画像ファイルを指定してください。");
    return false;
  }


  if(find_img.length){
    find_img.nextAll().remove();
    find_img.remove();
    $(".chat_preview_box").remove();
  }

  var preview_box = '<div class="chat_preview_box"><img alt="" class="img_selected"><p class="img_paragraph"><a href="#" class="img_delete">Cancel</a></p></div>';

  label.append(preview_box);


  filereader.onload = function() {
    label.find('img').attr('src', filereader.result);
    form_img__delete(label);
  }

  filereader.readAsDataURL(file_data);

  $(this).attr('src')
  $(".chat_preview_box").fadeIn();
  $(".messages").fadeTo("fast", 0.2);
  return false;     //親要素へのイベント伝播を止める
});


function form_img__delete(label){
  label.find("a.img_delete").on('click',function(){
    $(this).parent().find('input[type=file]').val('');
    $(this).parent().find('.chat_preview_box, br').remove();
    $(this).remove();
  });
  return false;
}