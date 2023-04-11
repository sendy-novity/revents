import { Route, Routes, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDetailedPage from "../../features/events/eventsDetailed/EventDetailedPage";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/form/modals/ModalManager";

function App() {
    const {key} = useLocation();

  const routes =[
    {
      name: 'dashboard',
      path: '/events',
      element: <EventDashboard/>
    },
    {
      name: 'sandbox',
      path: '/sandbox',
      element: <Sandbox/>
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
      <ModalManager/>
      <Routes>
        <Route path='/' key="home" index element={<HomePage/>} />
        {routeComponents}
      </Routes>
    </>
  );
}
export default App;
