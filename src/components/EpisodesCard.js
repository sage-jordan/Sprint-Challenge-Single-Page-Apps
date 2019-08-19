import React from "react";
import { Card,  } from 'semantic-ui-react';

export default function EpisodesCard(props) {
    console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.episode.name}</Card.Header>
        <Card.Meta>
          <span className='species'>ID: {props.episode.id}</span>
        </Card.Meta>
        <Card.Description>
          <span className="description">Air Date: {props.episode.air_date}</span>
        </Card.Description>
      </Card.Content>
    </Card>
    );
}