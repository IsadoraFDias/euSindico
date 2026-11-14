import { useState } from 'react';
import { Pressable, Text, View, type ViewStyle } from 'react-native';
import {StyleSheet} from 'react-native';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  textColor?: string;
  backgroundColor?: string;
};

export function Button({
  title,
  onPress,
  width = '100%',
  height = 48,
  textColor = '#FFFFFF',
  backgroundColor,
}: ButtonProps) {

  const [text, setText] = useState('');
  
  const handlePress = () => {
    setText('Já temos um botão!');
  }

  return (
    <View style={stylesButton.viewTeste}>
    <Pressable
      onPress={handlePress}
      style={[stylesButton.button, { width, height, backgroundColor }]}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </Pressable>
    <Text>{text}</Text>
    </View>
  );
}

const stylesButton= StyleSheet.create({
    button: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTeste: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    }
})