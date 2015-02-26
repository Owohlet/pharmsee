Router.configure({
  layoutTemplate: "masterLayout",
  // routeControllerNameConverter: "camelCase",
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {      // Route is the path after the url
  if(Meteor.user())
    Router.go('/mainhome');
  else
    this.render('index');               // 'home' refers to the home template
}, {
  name: 'index',                       // name is an arbitrary value. Useful for helpers
  layoutTemplate: "index"
});

Router.route('/portal', function() {
  this.render("login")
})

Router.route('/login', function () {      // Route is the path after the url
  this.render("login")              // 'home' refers to the home template
}, {
  name: 'login'                      // name is an arbitrary value. Useful for helpers
});


Router.route('/pharmDetails', function() {
  verifyLogin(this, "pharmacyDetails")
}, {
  name: 'pharmacyDetails'
});

Router.route('/mainhome', function () {      // Route is the path after the url
  verifyLogin(this, "mainhome")               // 'home' refers to the home template
}, {
  name: 'mainhome',                       // name is an arbitrary value. Useful for helpers
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
})

var verifyLogin = function(r, template) {
  if(Meteor.user()) {
    r.render(template);
  } else {
    Router.go('/login');
  }
}