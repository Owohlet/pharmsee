Template.drugCategory.events({
  'click .category': function(e) {
    Session.set('dc',"");
  },
  'keyup input.filterDrug': function(e) {
    Session.set('dc', e.currentTarget.value);
  },

  'change input.drugCheck': function() {
    drug = this;
    var pharmacy = Pharmacies.findOne({userId: Meteor.userId()});

    Pharmacies.update({_id: pharmacy._id}, {$addToSet: {drugs: this._id} });
  },

  'click #pharmSubmit': function() {
    Session.set('dc', "");
  }
})

Template.drugCategory.helpers({
  'drugs': function() {
    return Drugs.find({description: {$regex: Session.get('dc'), $options: 'i' }})
    .fetch()
    .filter(function(obj) { 
      return ($.inArray(obj._id, 
        Pharmacies.findOne({userId: Meteor.userId()}).drugs) == -1); 
    });
  },
  'queryString': function() {
    return Session.get('dc');
  }
})