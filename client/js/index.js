Template.index.events({
  'submit .search-form': function(e) {
    e.preventDefault();
    var data = Drugs.findOne({description: $('#search').val()})._id;

    Router.go('/results/' + data);
    return false;
  },
  'click #search-btn': function(e) {
    e.preventDefault();
    var data = Drugs.findOne({description: $('#search').val()})._id;

    Router.go('/results/' + data);
    return false;
  },
  'keyup input#search': function () {
    AutoCompletion.autocomplete({
      element: 'input#search',       // DOM identifier for the element
      collection: Drugs,              // MeteorJS collection object
      field: 'description',                    // Document field name to search for
      limit: 5});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
}
})

Template.index.rendered = function () {
  $('body').addClass('indexPicture');
  AutoCompletion.init("input#searchBox");
}
