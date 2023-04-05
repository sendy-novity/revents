import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Image, Segment, Button, Icon } from "semantic-ui-react";

export default function HomePage() {
    const history = useNavigate();
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container>
                <Header as="h1" inverted>
                    <Image size="massive" src="/assets/logo.png" style={{marginBottom:12}} />
                    Re-vents
                </Header>
                <Button onClick={() => history("/events")} size="huge" inverted>
                    Get started
                    <Icon name="right arrow" inverted/>
                </Button>
            </Container>
        </Segment>
    )
}