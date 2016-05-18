import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    col = new Mongo.Collection('iterthru'); 
});
