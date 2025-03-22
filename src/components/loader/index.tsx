import React from 'react';
import { Container, Lightsaber, Switch, Plasma } from './styles';
import { LIGHTSABERS } from '@/constants/lightsabers';

export default function LoaderLightsaber() {
  return (
    <Container>
      {LIGHTSABERS.map((saber) => (
        <Lightsaber key={saber.id} data-testid={`lightsaber-${saber.id}`}>
          <Switch data-testid={`switch-${saber.id}`}>
            <span />
          </Switch>
          <Plasma data-testid={`plasma-${saber.color}`} className={saber.color} />
        </Lightsaber>
      ))}
    </Container>
  );
}
