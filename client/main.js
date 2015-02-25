Template.registerHelper('pharmacies',function(){

  return Pharmacies.find().fetch();

})
Template.home.helpers({
  HasPharm: function () {
    if(Pharmacies._connection.userId()){
      return true
    } else{
      return false
    }
    // ...
  }
});
Template.pharmDrugs.helpers({
  drugs: function () {
    return Drugs.find().fetch()
  }
});
var checkedDrugs = [];
Template.pharmDrugs.events({
  'change input.drugsel': function (event){
    var drug = this;
    var pharmacy = Pharmacies.findOne({userId: Meteor.userId()});

    Pharmacies.update({_id: pharmacy._id}, {$addToSet: {drugs: this._id} });
    // console
    // checkedDrugs.push(event.target.checked);
  }
})


// Template.mainhome.events({
// });

AutoForm.hooks({
  atForm: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {

      Router.go('home');
    }

  },
  pharmProfile:{
    onSuccess: function(operation, result, template) {

      Router.go('home');
    }

  },
  pharmDrugs:{
    onSuccess: function(operation, result, template) {


      // Router.go('home');
    }
  }
});

// Template.index.events({
//   'click #loginBtn': function (e, t) {
//     // ...
//     // e.preventDefault();
//     if (Meteor.userId()){
//       Router.go('mainhome');
//     }else{
//       Router.go('login')
//     }  

//   }

// });
// Template.home.events({
//   'click #pharmSubmit': function(e,t){

//     console.log("its in!");
//   }
// })

