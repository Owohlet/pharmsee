Owners = new Mongo.Collection('owners');

Owners.attachSchema(new SimpleSchema({
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		label: " "
	},
	address: {
		type:String,
		label: "Address"
	},
	feedback:{
		type: String,
		max: 2000,
		autoform:{
			rows: 3
		}
	}
}));