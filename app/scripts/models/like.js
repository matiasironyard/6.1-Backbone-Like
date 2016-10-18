var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Like = Backbone.Model.extend({
  defaults: {
    'like': 0,
    'hello': 'hello',
  },
  // initialize: function(){
  // }, NOT NEEDED
  setCounter: function() {
    this.set('like', this.get('like') + 1);
    // TOP code is better. dry.
    // var newLike = this.get('like') + 1;
    // this.set('like', newLike);
    // console.log(newLike);
    // return this;
  },

  toJSON: function(options){
    //toJSON must be called in the index.
    if(this.get('like') === 1){
      $('.pluralize').html(' Like'); }
    else if (this.get('like') >=10){
      $('.pluralize').html(' Like!!!');
    } else {
      $('.pluralize').html(' Likes');
    }
    return _.clone(this.attributes);
  }
});
//  32 this is needed to reset toJSON to do what it is supposed to do if we call it again in the code.
// we are returning it to its original state.

module.exports = {
  'Like' : Like,
};
