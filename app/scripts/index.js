var Like = require('./models/like').Like;
var $ = require('jquery');
var _ = require('underscore');

var newLike = new Like({'like': 0});
console.log(newLike);

$('.like').on('click', function(){
  // event.preventDefault();
  newLike.setCounter();
  $('.likes-counter').html(newLike.get('like'));
  // console.log(newLike);
  newLike.toJSON();
  console.log(newLike.toJSON());
});
