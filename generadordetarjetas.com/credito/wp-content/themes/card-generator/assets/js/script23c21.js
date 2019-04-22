(function($){$(function(){$(document).ready(function(){let typeCard=Math.ceil(Math.random()*3)
$('a[data-num="'+typeCard+'"]').trigger('click')})
$('.vote').on('click',function(){var num=$(this).data('num');$.ajax({type:'post',url:cardTheme.ajaxurl,data:{action:'theme_card_ajax',card:num},success:function(data){$('#votes').html(data);}});return false;})})})(jQuery)