$('.canvas').css('display','none');
$('img').on('click', function(){
  offset = $(this).offset();
  $copy = $(this).clone();
  dimensions = { 
    width: $(this).width(), 
    height: $(this).height(),
    top:  $(this).offset().top - $(window).scrollTop() 
  }
  $copy.css({
    width: dimensions.width,
    height: dimensions.height,
    top: Math.abs($(window).scrollTop() - offset.top) + 'px',
    left: offset.left + 'px'
  });
  dimensions.aspectRatio = dimensions.width / dimensions.height;
  console.log(dimensions);
  bounds = { width: 700, height: 500 }
  newHeight = bounds.width / dimensions.aspectRatio;
  console.log( newHeight );
  pageWidth = $(window).width();
  if( newHeight > bounds.height ){
    $copy.animate({ 
      width: '800px', 
      height: newHeight + 'px',
      top: ($(window).height() /2) - newHeight / 2 + 'px',
      left: ( pageWidth / 2 ) - (400) + 'px'
    });  
  } else{
    newWidth = bounds.height * dimensions.aspectRatio;
    $copy.animate({ 
      width: newWidth, 
      height: '500px',
      top: ($(window).height() /2) - 500 / 2 + 'px',
      left: ( pageWidth / 2 ) - (newWidth / 2) + 'px'
    });  
  }
  $copy.toggleClass('is-expanded');
  $('.canvas').css('display','block');
  $('.canvas').animate({'opacity':'1'});
  $('.canvas').html($copy);
});

$('.canvas').on('click', function(){
  $(this).animate({
    opacity: 0
  },function(){
    $(this).css('display','none');
  });
});