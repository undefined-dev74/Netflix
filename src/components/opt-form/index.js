import React from 'react';
import { Container, Button, Input, Text, Break } from './styles/opt-form';

export const OptForm = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Input = function optFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function optFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img
        style={{ width: '16px' }}
        src="https://image.flaticon.com/icons/png/512/271/271228.png"
        alt="Try Now"
      />
    </Button>
  );
};

OptForm.Text = function optFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
