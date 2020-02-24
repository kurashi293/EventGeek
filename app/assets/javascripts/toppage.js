$(document).on('turbolinks:load', function(){
  $('#hidden-content').hide();
  $('.storage-awesome').click(function(){
    $('#hidden-content').slideDown();
  });
});


$(document).on('turbolinks:load', function(){
  $('.slide-close').click(function(){
    $('#hidden-content').slideUp();
  });
});


$(document).on('turbolinks:load', function(){
  //tabをクリックしたときの動作
  $('.information-tab li').click(function(){
    //クリックしたタブのindexを取得
    var index = $('.information-tab li').index(this);

    $('.information-contents .information-content').hide().removeClass('active');
    $('.information-contents .information-content').eq(index).fadeIn().addClass('active');

    $('.information-tab li').removeClass('active');
    $(this).addClass('active');
  });
});



$(document).on('turbolinks:load', function(){
  $('.toppage-users').hide();
  $('.bolt').click(function() {

    $('.toppage-users').fadeIn(2000);     //2秒かけてフェードイン
  });
});



$(document).on('turbolinks:load', function(){
  $('.fade-close').click(function() {

    $('.toppage-users').fadeOut(1000);     //1秒かけてフェードアウト
  });
});