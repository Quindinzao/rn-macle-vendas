// External libraries
import { useState } from 'react';
import { View } from 'react-native';
import { RadioButton as RNPRadioButton } from 'react-native-paper';

// Components
import Text from '../Text';

// Interfaces
import { RadioButtonProps } from '../../interfaces/RadioButtonProps';

// Styles
import { layout } from '../../styles/globalStyle';
import { styles } from './styles';

const RadioButton: React.FC<RadioButtonProps> = ({ items }) => {
  const [value, setValue] = useState('');

  return (
    <RNPRadioButton.Group
      onValueChange={newValue => setValue(newValue)}
      value={value}
    >
      {items &&
        items.map((item: string, index: number) => {
          return (
            <View style={layout.row} key={index}>
              <RNPRadioButton.Android value={item} />
              <Text style={styles.text}>{item}</Text>
            </View>
          );
        })}
    </RNPRadioButton.Group>
  );
};

export default RadioButton;
