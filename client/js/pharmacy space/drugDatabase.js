Template.drugDatabase.helpers({
	'drugs': function() {
		drugs = [];
		var ids = Pharmacies.findOne({userId: Meteor.userId()}).drugs;

		for(i = 0; i < ids.length; i++) {
			drugs.push(Drugs.findOne({_id: ids[i]}));
		}

		return drugs;
	}
})