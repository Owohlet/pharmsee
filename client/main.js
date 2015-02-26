// Template.registerHelper('pharmacies',function(){

//   return Pharmacies.find().fetch();

// })
// Template.home.helpers({
//   HasPharm: function () {
//     if(Pharmacies._connection.userId()){
//       return true
//     } else{
//       return false
//     }
//     // ...
//   }
// });





// Template.mainhome.events({
// });

// AutoForm.hooks({
//   atForm: {
//     // Called when any operation succeeds, where operation will be
//     // "insert", "update", "submit", or the method name.
//     onSuccess: function(operation, result, template) {

//       Router.go('home');
//     }

//   },
//   pharmProfile:{
//     onSuccess: function(operation, result, template) {

//       Router.go('home');
//     }

//   },
//   pharmDrugs:{
//     onSuccess: function(operation, result, template) {


//       // Router.go('home');
//     }
//   }
// });

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
