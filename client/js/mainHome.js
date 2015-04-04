// Template.masterLayout.helpers({
//   'currentUser': function() {
//     return Meteor.user().emails[0].address;
//   }
// })
Template.registerHelper('currentUser',function(){

  return Meteor.user().emails[0].address;

})


Template.masterLayout.events({
  'click .signout': function() {
    Meteor.logout();
    Router.go("/");
  }
})
Template.mainhome.events({
  'click .signout': function() {
    Meteor.logout();
    Router.go("/");
  }
})




Template.mainhome.rendered = function() {
  $('body').css('background', 'white');
}
