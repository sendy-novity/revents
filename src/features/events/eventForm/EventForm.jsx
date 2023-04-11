import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Segment, Header, Button } from "semantic-ui-react";
import * as Yup from "yup";
import { categoryData } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MyTextInput from "../../../app/common/form/MyTextInput";
import { createEvent, updateEvent } from "../eventActions";

export default function EventForm() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("You must provide a title"),
    category: Yup.string().required("You must provide a category"),
    description: Yup.string().required("You must provide a description"),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user/png",
                })
              );
          navigate("/events");
        }}
      >
        {({isSubmitting, dirty, isValid}) => (
          <Form className='ui form'>
          <Header sub color='teal' content='Event Details' />
          <MyTextInput name='title' placeholder='Event Title' />
          <MySelectInput name='category' placeholder='Category' options={categoryData}/>
          <MyTextArea name='description' placeholder='Description' rows={3}/>
          <Header sub color='teal' content='Event Location Details' />
          <MyTextInput name='city' placeholder='City' />
          <MyTextInput name='venue' placeholder='Venue' />
          <MyDateInput 
            name='date' 
            placeholderText='Event Date'
            timeFormat='HH:mm'
            showTimeSelect
            timeCaption='time'
            dateFormat='MMMM d, yyyy h:mm a'
          />
          <Button 
            loading={isSubmitting} 
            disabled={!isValid || !dirty || isSubmitting}
            type='submit' float='right' positive content='Submit' />
          <Button
            disabled={isSubmitting}
            as={Link}
            to='/events'
            type='submit'
            float='right'
            content='Cancel'
          />
        </Form>
        )}
        
      </Formik>
    </Segment>
  );
}
