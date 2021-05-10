// plus and minus product  quantity

$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

// Product Details Thumb Gallery

  $('.show-product-big-img').zoomImage();
  $('.show-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
  $('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
  $('.show-small-img').click(function () {
    $('#show-img').attr('src', $(this).attr('src'))
    $('#big-img').attr('src', $(this).attr('src'))
    $(this).attr('alt', 'now').siblings().removeAttr('alt')
    $(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': '1px solid #ccc', 'padding': '0'})
    if ($('#small-img-roll').children().length > 4) {
      if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
        $('#small-img-roll').css('left', -($(this).index() - 2) * 110 + 'px')
      } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
        $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 110 + 'px')
      } else {
        $('#small-img-roll').css('left', '0')
      }
    }
  })

  $('#next-img').click(function (){
    $('#show-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
    $('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
    $(".show-small-img[alt='now']").next().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': '1px solid #ccc', 'padding': '0'})
    $(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
    if ($('#small-img-roll').children().length > 4) {
      if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
        $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 110 + 'px')
      } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
        $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 110 + 'px')
      } else {
        $('#small-img-roll').css('left', '0')
      }
    }
  })

  $('#prev-img').click(function (){
    $('#show-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
    $('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
    $(".show-small-img[alt='now']").prev().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': '1px solid #ccc', 'padding': '0'})
    $(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
    if ($('#small-img-roll').children().length > 4) {
      if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
        $('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 110 + 'px')
      } else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
        $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 110 + 'px')
      } else {
        $('#small-img-roll').css('left', '0')
      }
    }
  })




// About Our Story page read more button fade

$(".expandable-txt .button").click(function() {
  totalHeight = 0
  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");

  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });

  // fade out read-more
  $p.fadeOut();
  // prevent jump-down
  return false;

});
