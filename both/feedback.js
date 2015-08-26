Feedbacks = new Mongo.Collection('feedbacks');

Feedbacks.attachSchema(new SimpleSchema({
	email:{
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: " "
	},
	feedback:{
		type: String,
		max: 2000,
		autoform:{
			rows: 3
		}
	}
}));