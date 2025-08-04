// External libraries
import { ScrollView, View } from 'react-native';

// Components
import Header from '../Header';
import RadioForm from '../RadioForm';
import Button from '../Button';

// Interfaces
import { SelectableScreenProps } from '../../interfaces/SelectableScreenProps';

// Styles
import { layout } from '../../styles/globalStyle';

const SelectableScreen: React.FC<SelectableScreenProps> = ({
  title,
  radioTitle,
  items,
  value,
  setValue,
  showAddButton = false,
  onAddPress,
  addButtonLabel = 'Adicionar',
}) => {
  return (
    <ScrollView>
      <Header title={title} isBack />
      <View style={layout.content}>
        <RadioForm
          title={radioTitle}
          items={items}
          value={value}
          setValue={setValue}
        />
        {showAddButton && onAddPress && (
          <Button mode="text" onPress={onAddPress}>
            {addButtonLabel}
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

export default SelectableScreen;
