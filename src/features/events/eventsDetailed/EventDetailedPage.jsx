import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

export default function EventDetailedPage() {
  
  const params = useParams();
  const event = useSelector(state => state.event.events.find(e => e.id === params.id));

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event ={event}/>
        <EventDetailedInfo event ={event} />
        <EventDetailedChat event ={event} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees}/>
      </Grid.Column>
    </Grid>
  );
}
