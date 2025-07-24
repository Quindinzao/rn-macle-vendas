// External libraries
import { View } from 'react-native';

// Styles
import { layout } from '../../styles/globalStyle';
import Done from '../../assets/icons/Done';

const AllDone: React.FC = () => {
  return (
    <View style={layout.center}>
      <Done />
    </View>
  );
};

export default AllDone;
