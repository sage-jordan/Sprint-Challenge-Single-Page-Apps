import React from "react";
import { Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.location.name}</Card.Header>
        <Card.Meta>
          <span className='type'>Type: {props.location.type}</span>
        </Card.Meta>
        <Card.Description>
          <span className="dimension">Dimension: {props.location.dimension}</span>
        </Card.Description>
      </Card.Content>
  </Card>
  )
}
