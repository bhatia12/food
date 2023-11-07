import React from 'react';
import { View, ImageBackground, ImageBackgroundProps } from 'react-native';

interface BackgroundProps extends ImageBackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children, ...props }) => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/burger-restaurant-2.jpg')}
        style={{ height: '100%' }}
        {...props}
      />
      <View style={{ position: 'absolute' }}>{children}</View>
    </View>
  );
};

export default Background;