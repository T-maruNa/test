// リスト
var theme = $('.theme').find('li');

function theme_rund(){

  // 乱数
  var num = Math.floor( Math.random() * theme.length ) ;

  $('#result')
    .html(theme[num]);
}
