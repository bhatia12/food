import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { darkGreen } from '../../constants/Constants';

interface FieldProps extends TextInputProps {}

const Field: React.FC<FieldProps> = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;




