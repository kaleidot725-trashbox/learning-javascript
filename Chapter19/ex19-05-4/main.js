$('p').after('<hr>').append('<sup>*</sup>').filter(':odd').css('color', 'red');
alert('次へ');

$('p').before('<hr>').not('.highlight').css('margin-left', '5cm');
alert('次へ');

$('p').before('<hr>').find('.code').css('font-size', '30px');