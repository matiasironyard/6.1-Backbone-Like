var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var Like = Backbone.Model.extend({
  defaults: {
    'like': 0,
    'hello': 'hello',
  },

  initialize: function(){
  },

  setCounter: function() {
    var newLike = this.get('like') + 1;
    this.set('like', newLike);
    console.log(newLike);
    return newLike;
  },


  toJSON: function(){
    //toJSON must be called in the index.
    if(this.get('like') === 1){
      $('.pluralize').html(' Like');
    } else {
      $('.pluralize').html(' Likes');
    }
    // this is needed to reset toJSON to do what it is supposed to do if we call it again in the code.
    // we are returning it to its original state.
    return _.clone(this.attributes);
  }
});

module.exports = {
  'Like' : Like,
};
