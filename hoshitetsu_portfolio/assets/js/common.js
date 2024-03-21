// headerのハンバーガーメニュー
$(".l-header__sp-menu").click(function () {
    $(".l-header__hamburgur").toggleClass('open');
    $(".l-header__menu").toggleClass('open');
    $(".l-header__close").toggleClass('open');
    $(".l-sp-menu").toggleClass('appear');
    $(".l-header .site-logo").toggleClass('hide');
});

// フェードイン
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(percent, {//id名を指定
    strokeWidth: 0,//進捗ゲージの太さ
    duration: 1000,//時間指定(1000＝1秒)
    trailWidth: 0,//線の太さ
    text: {//テキストの形状を直接指定 
      style: {//天地中央に配置
        color:'#f2cb07',
      },
      autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
  });
  
  
  //アニメーションスタート
  bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#loading").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
  });  

//   サムネぐるぐる
$('.p-top-works__slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: false,//下部ドットナビゲーションの表示
  });

  // フェードイン
  jQuery(function($) {
    $(window).on('load scroll', function (){
    
      var box = $('.fadeIn');
      var animated = 'animated';
      
      box.each(function(){
      
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > boxOffset - wh + 100 ){
          $(this).addClass(animated);
        }
      });
    });
    })