$(function(){
  var $title = $('.goods__title');
  var elGroup = {};
  var heightGroup = {};
  //同じtop位置のグループを作る
  $.each($title, function(idx, el){
    var $el = $(el);
    var myOffset = $el.offset().top;
    if ( !elGroup[myOffset] ) {
      elGroup[myOffset] = [];
      heightGroup[myOffset] = [];
    }
    elGroup[myOffset].push($el);
    heightGroup[myOffset].push($el.height());
  });
  //同じtop位置のグループの高さの最大値を求める
  $.each(heightGroup, function(offset, heightList){
    var maxH = Math.max.apply(null, heightList);
    //求めた高さを同グループの要素に適用する
    $(elGroup[offset]).each(function(idx, el){
      $(el).css({'min-height':maxH});
    })
  });
});
