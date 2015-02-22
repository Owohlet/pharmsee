Drugstore = new Mongo.Collection('drugstore');
Drugstore.attachSchema(new SimpleSchema({

  drugName: {
    type: String,
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