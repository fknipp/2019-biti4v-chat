import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Messages from './messages';

Meteor.methods({
  'messages.add'({ text }) {
    check(text, String);
    console.log(text);
    if(Meteor.userId()) Messages.insert({text, user: Meteor.userId(), time: new Date()})
  }
})