import React from 'react';
import Jumbotron from './components/jumbotron';
import JumboData from './fixtures/jumbo';

function App() {
  return (
    <div className="App">
      <p>Hello Aman</p>
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

export default App;
