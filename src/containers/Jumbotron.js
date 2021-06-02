import React from 'react';
import { Jumbotron } from '../components';
import JumboData from '../fixtures/jumbo';

export function JumbotronContainer() {
  return (
    <div className="Jumbotron">
      <Jumbotron.Container>
        {JumboData.map(item => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image}></Jumbotron.Image>
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
