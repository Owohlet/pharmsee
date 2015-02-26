Template.masterLayout.helpers({
  'currentUser': function() {
    return Meteor.user().emails[0].address;
  }
})

Template.masterLayout.events({
  'click .signout': function() {
    Meteor.logout();
    Router.go("/");
  }
})


Template.mainhome.helpers({
  'drugs': function() {
    drugs = [];
    var ids = Pharmacies.findOne({userId: Meteor.userId()}).drugs;

    for(i = 0; i < ids.length; i++) {
      drugs.push(Drugs.findOne({_id: ids[i]}));
    }

    return drugs;
  }
})

Template.mainhome.rendered = function() {
  $('body').css('background', 'white');
}
