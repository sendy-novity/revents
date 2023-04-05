import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailedPage from "../../features/events/eventsDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

function App() {
  const routes =[
    {
      name: 'dashboard',
      path: '/events',
      element: <EventDashboard/>
    },
    {
      name: 'eventDetailed',
      path: '/events/:id',
      element: <EventDetailedPage/>
    },
    {
      name: 'createEvent',
      path: '/createEvent',
      element: <EventForm/>
    },
    {
      name: 'manageEvent',
      path: '/manage/:id',
      element: <EventForm/>
    }
  ]

  const routeComponents = routes.map(({name, path, element}) => (
    <Route
      key={name}
      path={path}
      element={
        <Container className='main'>
          <NavBar/>
         {element}
        </Container>
    }
  />
  ))
  
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {routeComponents}
      </Routes>
    </>
  );
}
export default App;
