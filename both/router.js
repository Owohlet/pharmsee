Router.configure({
  layoutTemplate: "masterLayout",
  // routeControllerNameConverter: "camelCase",
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {      // Route is the path after the url
  if(Meteor.user())
    Router.go('/space');
  else
    this.render('index');               // 'home' refers to the home template
}, {
  name: 'index',                       // name is an arbitrary value. Useful for helpers
  layoutTemplate: "index"
});

Router.route('/portal', function() {
  // this.render("login")
  this.redirect('/sign-up');
})

Router.route('/login', function () {      // Route is the path after the url
  this.render("login")              // 'home' refers to the home template
}, {
  name: 'login'                      // name is an arbitrary value. Useful for helpers
});


  // Routes for pharmacy space starts

Router.route('/mainhome/archive', function () {      // Route is the path after the url
  this.render("archive")              // 'home' refers to the home template
}, {
  name: 'archive',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "mainhome"
});
Router.route('/drugDatabase', function () {      // Route is the path after the url
  this.render("drugDatabase")              // 'home' refers to the home template
}, {
  name: 'drugDatabase',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "mainhome"
});
Router.route('/analytics', function () {      // Route is the path after the url
  this.render("analytics")              // 'home' refers to the home template
}, {
  name: 'analytics',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "mainhome"
});
Router.route('/space', function () {      // Route is the path after the url
  this.render("space")              // 'home' refers to the home template
}, {
  name: 'space',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "mainhome"
});

// Routes for the pharmacy space stops


Router.route('/pharmDetails', function() {
  verifyLogin(this, "pharmacyDetails")
}, {
  name: 'pharmacyDetails'
});

Router.route('/mainhome', function () {      // Route is the path after the url
  verifyLogin(this, "mainhome")               // 'home' refers to the home template
}, {
  name: 'mainhome',                       // name is an arbitrary value. Useful for helpers
  layoutTemplate: "masterLayout",
  data: function() {
    return Pharmacies.findOne({userId: Meteor.userId()})

  }
});

Router.route('/results/:_id', function() {

  this.render('results');
}, {
  name: "results",

  data: function() {
    var _id = this.params._id

    return {
      results: function() {
        console.log(_id);
        listings = [];

        $.each(Pharmacies.find().fetch(), function(i, pharmacy) {
          if(pharmacy.drugs) {
            if($.inArray(_id, pharmacy.drugs))
              listings.push(pharmacy);
          }
        })
        return listings;
      },

      drug: function() {
        return Drugs.findOne({_id: _id});
      }
    }
  }
});

Router.route('/projects/pharmPage/:_id', function(){
  this.render('pharmPage');
}, {
  name:'pharmPage',
  
  data: function(){
    var _id=this.params._id;
    return{
      pharmacies: Pharmacies.findOne(_id),
      
    }
  }
}
);

var verifyLogin = function(r, template) {
  if(!Meteor.user()) {
    Router.go('/login');
    // r.render(template);
  }
}