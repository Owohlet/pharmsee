Router.configure({
  layoutTemplate: "masterLayout",
  // routeControllerNameConverter: "camelCase",
  // notFoundTemplate: '404'
});
Router.route('/', function () {      // Route is the path after the url
  this.render('index');               // 'home' refers to the home template
}, {
  name: 'index',                       // name is an arbitrary value. Useful for helpers
  layoutTemplate: "index"
});
Router.route('/login', function () {      // Route is the path after the url
  this.render('login');               // 'home' refers to the home template
}, {
  name: 'login',                       // name is an arbitrary value. Useful for helpers
});
Router.route('/home', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template


}, {
  name: 'home',
});

Router.route('/mainhome', function () {      // Route is the path after the url
  this.render('mainhome');               // 'home' refers to the home template
}, {
  name: 'mainhome',                       // name is an arbitrary value. Useful for helpers
  data: function() {
    return Pharmacies.findOne({userId: Meteor.userId()})
    
  }
});
