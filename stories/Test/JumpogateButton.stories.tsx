
import React from 'react';
// import { Test } from '../Commons/CenterView';
import { JumpoGateButton } from './JumpoGateButton';
import { View } from 'react-native';
import styled from 'styled-components/native';


export default {
  title: 'Example/JumpoGateButton',
  component: JumpoGateButton,
  argTypes: {
    text: { control: 'text' },
  },
  // decorators: [(Story) => <CenterView><Story /></CenterView>]

};

const imageSrc = {
  all: require('~/Assets/Images/ic-gate-all-48-color.png'),
  gateRoom: require('~/Assets/Images/ic-gate-room-48-color.png'),
  gateTshrit: require('~/Assets/Images/ic-gate-tshirt-48-color.png'),
  gateStore: require('~/Assets/Images/ic-gate-store-48-color.png'),
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

const Template = (args) => {
  return <View
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
    <JumpoGateButton {...args} />
  </View>
};

export const All = Template.bind({});
All.args = {
  imageSrc: imageSrc.all,
  text: '전체',
  width: 74,
  height: 94,
  borderColor: '#fe2c54',
};

export const Store = Template.bind({});
Store.args = {
  imageSrc: imageSrc.gateStore,
  text: '편의점',
  width: 74,
  height: 94,
  borderColor: '#fe2c54',
};

