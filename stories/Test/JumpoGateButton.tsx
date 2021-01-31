import React, { ReactNode, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

interface IJumpoGateButtonProps {
  imageSrc: string;
  text: string;
  width: number;
  height: number;
  borderColor: string;
}

export const JumpoGateButton = ({ imageSrc, text, width, height, borderColor }: IJumpoGateButtonProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <TouchableWithoutFeedback onPress={() => { setIsSelected(!isSelected) }} style={{ position: 'relative' }}>
      <GateContainer>
        <CheckIcon source={require('~/Assets/Images/btn-check-2-16-red.png')} isSelected={isSelected} />
        <GateIconContainer isSelected={isSelected} elevation={8} width={width} height={height} borderColor={borderColor}>
          <GateIcon source={imageSrc} />
          <GateText>{text}</GateText>
        </GateIconContainer>
      </GateContainer>
    </TouchableWithoutFeedback>
  );
};

const GateContainer = styled.View`
  position: relative;
`;

const GateIconContainer = styled.View<{ width: number, height: number, isSelected: boolean, borderColor: string, elevation: number }>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  align-items: center;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.isSelected ? props.borderColor : 'white'};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.07);
`;

const GateIcon = styled.Image<{ source: string }>`
  width: 48px;
  height: 48px;
  margin-top: 10px;
`;

const CheckIcon = styled.Image<{ isSelected: boolean }>`
  width: ${props => props.isSelected ? "16px" : "0px"};
  height: ${props => props.isSelected ? "16px" : "0px"};
  z-index: 2;
  right: 0px;
  top: 3px;
  position: absolute;
`;

const GateText = styled.Text`
  margin-top: 10px;
  font-size: 13px;
`;