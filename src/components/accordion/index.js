import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Frame,
  Title,
  Item,
  Inner,
  Header,
  Body,
} from './styles/accordiaon';

const ToggleContext = createContext();
const Accordion = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow(toggleShow => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img
          style={{ width: '15px' }}
          src="https://image.flaticon.com/icons/png/512/271/271203.png"
          alt="Close"
        />
      ) : (
        <img
          style={{ width: '15px' }}
          src="https://image.flaticon.com/icons/png/512/1828/1828921.png"
          alt="Open"
        />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
