// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


//ウィンドウの高さを取得する
var window_h = $(window).height();

//スクロールイベント
$(window).on("scroll", function() {

  //スクロールの位置を取得する
  var scroll_top = $(window).scrollTop();

  $(".list-box").each(function() {
    //各box要素のtopの位置を取得する
    var elem_pos = $(this).offset().top;

    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h + 300) {
      $(this).addClass("fadein");　//特定の位置を超えたらクラスを追加
    } else {
      $(this).removeClass("fadein"); //そうでない場合はクラスを削除
    }
  });
});

