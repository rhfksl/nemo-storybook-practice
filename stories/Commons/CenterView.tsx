import React from 'react';
import styled from 'styled-components/native';

import { View } from 'react-native';

export const Test: any = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }} >
      <CenterContainer />
    </View>);
};

const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
  position: relative;
  width: 100%;
  height: 100%;
`;