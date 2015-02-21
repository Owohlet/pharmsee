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