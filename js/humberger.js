(function(){
  'use strict'
  
  //先ずは要素の取得をする
  var show = document.getElementById('show');
  var hide = document.getElementById('hide');
  var cover = document.getElementById('cover')
  
  //showをクリックした時に、次の処理をしなさいよと書いていく。
  //clickイベントをさせたいので、showにaddEventListenerをする。
  //同じくhideの時もそう。
  show.addEventListener('click', function(){
    document.body.className = 'menu-open';
  });
  
  hide.addEventListener('click', function(){
    document.body.className = '';
  });
  
  cover.addEventListener('click', function(){
    document.body.className = '';
  });
  
})();