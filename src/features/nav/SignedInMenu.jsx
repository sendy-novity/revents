import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Menu, Image, Dropdown } from "semantic-ui-react";
import { signOutUser } from "../auth/authActions";

export default function SignedInMenu({ signOut }) {
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.auth);
  const navigate = useNavigate();

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png'} />
      <Dropdown pointing='top left' text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Profile' icon='user' />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              navigate("/");
            }}
            text='Sign out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
