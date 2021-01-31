
import React from 'react';
import { Test } from '../Commons/CenterView';
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

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

// storiesOf('점포거래 게이트', module)
//   .addDecorator((getStory) => <CenterView>{(getStory() as ReactNode)}</CenterView>)
//   .add('default ', () => {
//     const firstName = text('First Title', '전체');
//     const secondName = text('Second Title', '1층 다용도');
//     const thirdName = text('Thrid Title', '편의점');
//     const fourthName = text('Fourth Title', '의류판매');
//     const width = number('Width', 74);
//     const height = number('Height', 94);
//     const borderColor = color("Border Color", "#fe2c54");

//     return (
//       <>
//         <JumpoGateButton imageSrc={imageSrc.all} text={firstName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateRoom} text={secondName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateStore} text={thirdName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateTshrit} text={fourthName} width={width} height={height} borderColor={borderColor} />
//       </>
//     )
//   })
//   .add('large ', () => {
//     const firstName = text('First Title', '전체');
//     const secondName = text('Second Title', '1층 다용도');
//     const thirdName = text('Thrid Title', '편의점');
//     const fourthName = text('Fourth Title', '의류판매');
//     const width = number('Width', 94);
//     const height = number('Height', 114);
//     const borderColor = color("Border Color", "#fe2c54");

//     return (
//       <>
//         <JumpoGateButton imageSrc={imageSrc.all} text={firstName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateRoom} text={secondName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateStore} text={thirdName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateTshrit} text={fourthName} width={width} height={height} borderColor={borderColor} />
//       </>
//     )
//   })
//   .add('black border ', () => {
//     const firstName = text('First Title', '전체');
//     const secondName = text('Second Title', '1층 다용도');
//     const thirdName = text('Thrid Title', '편의점');
//     const fourthName = text('Fourth Title', '의류판매');
//     const width = number('Width', 74);
//     const height = number('Height', 94);
//     const borderColor = color("Border Color", "black");

//     return (
//       <>
//         <JumpoGateButton imageSrc={imageSrc.all} text={firstName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateRoom} text={secondName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateStore} text={thirdName} width={width} height={height} borderColor={borderColor} />
//         <JumpoGateButton imageSrc={imageSrc.gateTshrit} text={fourthName} width={width} height={height} borderColor={borderColor} />
//       </>
//     )
//   });
