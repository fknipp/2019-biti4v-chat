import { Meteor } from 'meteor/meteor';
import Links from '../links';

Meteor.publish('links.all', function() {
  return Links.find();
});