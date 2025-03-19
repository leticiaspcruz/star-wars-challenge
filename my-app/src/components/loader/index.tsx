import React from 'react';
import { Container, Lightsaber, Switch, Plasma } from './styles';

const sabers = [
  { id: 'yoda', label: 'Yoda', color: 'yoda' },
];

export default function LoaderLightsaber() {
  return (
    <Container>
      {sabers.map((saber) => (
        <Lightsaber key={saber.id}>
          <Switch>
            <span />
          </Switch>
          <Plasma className={saber.color} />
        </Lightsaber>
      ))}
    </Container>
  );
}
