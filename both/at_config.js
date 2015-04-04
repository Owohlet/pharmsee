AccountsTemplates.configureRoute('signUp', {
	redirect: function() {
		if(Meteor.user()) {
			Router.go('/pharmDetails');
		}
	}
});

AccountsTemplates.configureRoute('signIn', {
	redirect: function() {
		if(Meteor.user())
			Router.go('/space')
	}
});

// AccountsTemplates.configureRoute('signOut', {
// 	redirect: function() {
	
// 		Router.go('/')
// 	}
// })