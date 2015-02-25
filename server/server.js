Meteor.startup(function(){
  _.each(drugs, function(drug){
    Drugs.upsert({description: drug},{description: drug})
  })
})