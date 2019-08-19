import React from "react";
import { Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='type'>Type: {props.type}</span>
        </Card.Meta>
        <Card.Description>
          <span className="dimension">Dimension: {props.dimension}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>Residents: {props.residents}</span>
      </Card.Content>
  </Card>
  )
}
