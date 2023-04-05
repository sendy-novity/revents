import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ setFormOpen }) {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  function handleSignOut() {
    setAuthenticated(false);
    navigate("/");
  }
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: "15px" }}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        {authenticated && 
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        }

        {authenticated ? <SignedInMenu signOut={handleSignOut}/> : <SignedOutMenu  setAuthenticated={setAuthenticated}/>}
      </Container>
    </Menu>
  );
}
