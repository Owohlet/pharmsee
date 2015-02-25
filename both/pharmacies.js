Pharmacies = new Mongo.Collection('pharmacies');

Pharmacies.attachSchema(new SimpleSchema({

  name: {
    type: String,
    label: "Pharmacy name",
    max: 200

  },

  address: {
    type: String,
    label: "Address",
    max: 1000,
    autoform: {
      rows: 3
    }

  },

  drugs: {
    type: [String],
    optional: true
  },

  location:{
    type: String,
    max:20,
    label: "location",

  },
  userId:{
    type:String,
    autoValue: function(){
      if(this.isInsert){
        return Meteor.userId()
      }
    }
  }

}));