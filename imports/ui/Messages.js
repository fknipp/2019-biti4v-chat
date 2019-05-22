import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Messages from '../api/messages';

const MessageList = ({ ready, messages }) => (
  ready ?
  <>
    <h3>Message List</h3>
    <ul>
      { messages.map(({ _id, text }) => <li key={_id}>{text}</li>)}
    </ul>
  </>
  :
  <h3>Wird geladen…</h3>
)

export default withTracker(() => {
  const subscriptionHandle = Meteor.subscribe('messages.all');
  return {
    ready: subscriptionHandle.ready(),
    messages: Messages.find().fetch(),
  }
})(MessageList);