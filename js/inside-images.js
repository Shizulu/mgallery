//tabBox内切り替え画面js

$(function(){

	var mainPhoto = $('.mainPhoto').find('img'),
		thumbs = $('.thumbs').find('img');

	$(".thumbs a").click(function(){		//aタグであるサムネイルをクリックしたら
	
		mainPhoto.fadeOut().fadeIn();
		
		$(this).attr("href");		//a要素のhref属性を取得する
		thumbs.attr("alt");
	
		mainPhoto.attr("src", $(this).attr("href"));		//拡大画像のsrc属性に、選択したa要素href属性を入れる
		$(".caption p").html($(this).children("img").attr("alt"));
		
	return false;		//return falseを書いておかないとaのリンク機能がいきてしまいjsの指定がきかないので注意する！
	});
});