import React, { useContext } from 'react';
import { Accordion, Card } from "react-bootstrap";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from "react-bootstrap/AccordionContext";
import Vessel_Form from './Vessel_Form';

function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'grey' : 'lightgrey' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }



export default function Static_Accordion() {
    return (
        <Accordion>
            <Card style={{ marginBottom: 1}}>
                <ContextAwareToggle eventKey="0">Vessels</ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>< Vessel_Form/></Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{ marginBottom: 1}}>
                <ContextAwareToggle eventKey="1">Ports</ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Port input placeholder</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}