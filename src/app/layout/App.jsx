import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailedPage from "../../features/events/eventsDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route
          path='/events'
          element={
            <Container className='main'>
              <NavBar/>
              <EventDashboard />
            </Container>
          }
        />
        <Route
          path='/events/:id'
          element={
            <Container className='main'>
              <NavBar/>
              <EventDetailedPage />
            </Container>
          }
        />
        <Route
          path={'/createEvent'}
          element={
            <Container className='main'>
              <NavBar/>
              <EventForm />
            </Container>
          }
        />
        <Route
          path={'/manage/:id'}
          element={
            <Container className='main'>
              <NavBar/>
              <EventForm />
            </Container>
          }
        />
      </Routes>
    </>
  );
}
export default App;
