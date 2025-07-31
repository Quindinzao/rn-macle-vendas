// External libraries
import { View } from 'react-native';
import { RadioButton as RNPRadioButton } from 'react-native-paper';

// Components
import Text from '../Text';

// Hooks
import { useAppTheme } from '../../hooks/common/useAppTheme';

// Utils
import { screenWidth } from '../../utils/helpers/dimensions';

// Interfaces
import { RadioButtonProps } from '../../interfaces/RadioProps';

// Styles
import { layout } from '../../styles/globalStyle';
import { createStyles } from './styles';

const RadioButton: React.FC<RadioButtonProps> = ({
  items,
  value,
  setValue,
}) => {
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
