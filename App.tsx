// export { default } from './src';

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   TouchableWithoutFeedback,
//   Image,
//   Platform,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import styled from 'styled-components/native';

// const GateContainer = styled.View`
//   position: relative;
// `;

// const GateIconContainer = styled.View<{ width: number, height: number, isSelected: boolean, borderColor: string, elevation: number }>`
//   width: ${props => `${props.width}px`};
//   height: ${props => `${props.height}px`};
//   align-items: center;
//   background-color: white;
//   margin-top: 10px;
//   border-radius: 10px;
//   border-width: 1px;
//   border-color: ${props => props.isSelected ? props.borderColor : 'white'};
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.07);
// `;

// const GateIcon = styled.Image<{ source: string }>`
//   width: 48px;
//   height: 48px;
//   margin-top: 10px;
// `;

// const CheckIcon = styled.Image<{ isSelected: boolean }>`
//   width: ${props => props.isSelected ? "16px" : "0px"};
//   height: ${props => props.isSelected ? "16px" : "0px"};
//   z-index: 2;
//   right: 0px;
//   top: 3px;
//   position: absolute;
// `;

// const GateText = styled.Text`
//   margin-top: 10px;
//   font-size: 13px;
// `;

// interface IJumpoGateButtonProps {
//   imageSrc: string;
//   text: string;
//   width: number;
//   height: number;
//   borderColor: string;
// }

// const styles = StyleSheet.create({
//   test: {
//     position: 'absolute',
//     // zIndex: 2,
//     // backgroundColor: 'blue',
//   }
// })

// const JumpoGateButton = ({ imageSrc, text, width, height, borderColor }: IJumpoGateButtonProps) => {
//   const [isSelected, setIsSelected] = useState<boolean>(false);

//   return (
//     <TouchableWithoutFeedback onPress={() => { setIsSelected(!isSelected) }} style={{ position: 'relative' }}>
//       <GateContainer>

//         {isSelected && <View style={{
//           ...Platform.select({
//             android: {
//               elevation: 9,
//             }
//           }),
//           backgroundColor: 'yellow',
//           // position: 'absolute',
//           zIndex: 2,
//         }}><Image source={require('./stories/assets/btn-check-2-16-red.png')}
//           style={styles.test}
//           />
//         </View>}
//         {/* <CheckIcon source={require('./stories/assets/btn-check-2-16-red.png')} isSelected={isSelected}
//           elevation={8} /> */}
//         <GateIconContainer isSelected={isSelected} elevation={8} width={width} height={height} borderColor={borderColor}>
//           <GateIcon source={imageSrc} />
//           <GateText>{text}</GateText>
//         </GateIconContainer>
//       </GateContainer>
//     </TouchableWithoutFeedback>
//   );
// };

// const imageSrc = {
//   all: require('./stories/assets/ic-gate-all-48-color.png'),
//   gateRoom: require('./stories/assets/ic-gate-room-48-color.png'),
//   gateTshrit: require('./stories/assets/ic-gate-tshirt-48-color.png'),
//   gateStore: require('./stories/assets/ic-gate-store-48-color.png'),
// };
// const App = () => {
//   const firstName = '전체';
//   const secondName = '1층 다용도';
//   const thirdName = '편의점';
//   const fourthName = '의류판매';
//   const width = 74;
//   const height = 94;
//   const borderColor = "#fe2c54";
//   return (
//     <>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <>
//           <JumpoGateButton imageSrc={imageSrc.all} text={firstName} width={width} height={height} borderColor={borderColor} />
//           <JumpoGateButton imageSrc={imageSrc.gateRoom} text={secondName} width={width} height={height} borderColor={borderColor} />
//           <JumpoGateButton imageSrc={imageSrc.gateStore} text={thirdName} width={width} height={height} borderColor={borderColor} />
//           <JumpoGateButton imageSrc={imageSrc.gateTshrit} text={fourthName} width={width} height={height} borderColor={borderColor} />
//         </>

//       </View>
//     </>
//   );
// };

// export default App;
