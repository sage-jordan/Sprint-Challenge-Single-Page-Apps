import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
        <Card.Meta>
          <span className='species'>Status: {props.character.status}</span>
        </Card.Meta>
        <Card.Description>
          <span className="description">Species: {props.character.species} Gender: {props.character.gender}</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>Origin: {props.character.origin.name}</span>
      </Card.Content>
    </Card>
    );
}
