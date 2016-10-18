var Like = require('./models/like').Like;
var $ = require('jquery');
var _ = require('underscore');

var newLike = new Like();
console.log(newLike);

$('.like').on('click', function(event){
  event.preventDefault();
  // 11 calls the method we created.
  newLike.setCounter();
  $('.likes-counter').html(newLike.get('like'));
  // console.log(newLike);
  newLike.toJSON();
  console.log(newLike.toJSON());
});
