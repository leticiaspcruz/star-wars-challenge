import React from 'react';
import { Container, Lightsaber, Switch, Plasma } from './styles';
import { LIGHTSABERS } from '@/constants/lightsabers';

export default function LoaderLightsaber() {
  return (
    <Container>
      {LIGHTSABERS.map((saber) => (
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
