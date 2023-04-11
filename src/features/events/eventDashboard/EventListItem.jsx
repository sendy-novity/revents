import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Item, List, Button, Icon } from "semantic-ui-react";
import { deleteEvent } from "../eventActions";
import EventListAttendee from "./EventListAttendee";
import {format, parseISO} from 'date-fns';

export default function EventListItem({ event }) {
  const dispatch = useDispatch();

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>{event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {
            format(parseISO(event.date), 'MMMM d, yyyy h:mm a')}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          onClick={() => dispatch(deleteEvent(event.id))}
          color='red'
          floated='right'
          content='Delete'
        />
         <Button
          as={Link} to={`/events/${event.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  );
}
