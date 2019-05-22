import { Meteor } from 'meteor/meteor';
import Links from '../links';
import Messages from '../messages';

Meteor.publish('links.all', function() {
  return Links.find();
});

Meteor.publish('messages.all', function () {
  if(this.userId) return Messages.find();

  this.ready();
});