import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface BtnProps {
  bgColor: string;
  btnLabel: string;
  textColor: string;
  Press: () => void;
}

const Btn: React.FC<BtnProps> = ({ bgColor, btnLabel, textColor, Press }) => {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 25, fontWeight: 'bold' }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;