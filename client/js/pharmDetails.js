AutoForm.hooks({
  newPharmacy: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      Router.go('/mainhome')
    }

  }
});

Template.pharmacyDetails.rendered = function() {
  $('body').css('background', 'white');
}