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
import { createStyles } from './styles';
import { screenWidth } from '../../utils/dimensions';
import { useAppTheme } from '../../hooks/useAppTheme';

const RadioButton: React.FC<RadioButtonProps> = ({ items }) => {
  const [value, setValue] = useState('');
  const theme = useAppTheme();
  const styles = createStyles(theme, screenWidth);

  return (
    <RNPRadioButton.Group
      onValueChange={newValue => setValue(newValue)}
      value={value}
    >
      {items &&
        items.map((item, index: number) => {
          return (
            <View style={layout.row} key={index}>
              <RNPRadioButton.Android value={item.title} />
              {item.image && <item.image style={styles.icon} />}
              <Text style={styles.text}>{item.title}</Text>
            </View>
          );
        })}
    </RNPRadioButton.Group>
  );
};

export default RadioButton;
