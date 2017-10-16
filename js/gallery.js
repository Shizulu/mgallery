$(function(){
	$("#banner-work a").click(function(){		//aタグであるサムネイルをクリックしたら
		$(this).attr("href");		//a要素のhref属性を取得する
		$(this).children("img").attr("alt");
	
		$("#main-photo img").attr("src", $(this).attr("href"));		//拡大画像のsrc属性に、選択したa要素href属性を入れる
		$("#main-photo").children("p").html($(this).children("img").attr("alt"));
		
	return false;		//return falseを書いておかないとaのリンク機能がいきてしまいjsの指定がきかないので注意する！
	});
});