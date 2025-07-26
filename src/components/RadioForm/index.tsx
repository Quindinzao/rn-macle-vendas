import { View } from 'react-native';
import Text from '../Text';
import RadioButton from '../RadioButton';
import { createStyles } from './styles';
import Button from '../Button';
import { useState } from 'react';
import ModalBase from '../ModalBase';
import { useAppTheme } from '../../hooks/useAppTheme';

interface RadioFormProps {
  title: string;
  items: { title: string; image?: any }[];
  buttonText?: string;
}

const RadioForm: React.FC<RadioFormProps> = ({ title, items, buttonText }) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text} type={'titleSmall'}>
        {title}
      </Text>
      <RadioButton items={items} />
      {buttonText && (
        <>
          <ModalBase visible={visible} setVisible={setVisible} />
          <Button mode={'text'} onPress={showModal} style={styles.button}>
            {buttonText}
          </Button>
        </>
      )}
    </View>
  );
};

export default RadioForm;
