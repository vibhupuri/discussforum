import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
col = new Mongo.Collection('iterthru');
Template.body.helpers({
    iterthru:function(){return col.find();}

});
Template.body.events({
    'submit .email':function(event){
        var x =event.target.emailid.value;
        y=Meteor.user().emails[0].address;
        col.insert({a1:x,a2:y});
        event.target.emailid.value="";
        return false;
    }
})
 

/*Template.hello.events({
    'click .del':function(){
        col.remove(this._id);
    }
})*/