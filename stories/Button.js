import React from 'react';
import { Button as NativeButton, View, ActivityIndicator } from 'react-native';
import './button.css';
import styled from 'styled-components/native';

const TestButton = styled.Button`
  width: 50%;
  color: black;
`;

const Container = styled.View`
  width: 100px;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <View>
      <>
        <Container>
          <NativeButton title={label} style={{ width: '50%' }} />
        </Container>
        <ActivityIndicator />
        <TestButton title="Button Test" />
      </>
    </View>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
