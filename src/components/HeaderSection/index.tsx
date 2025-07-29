// External libraries
import { View } from 'react-native';

// Components
import Header from '../Header';
import SearchRow from '../SearchRow';

// Styles
import { layout } from '../../styles/globalStyle';

interface HeaderSectionProps {
  title: string;
  onFilterPress?: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  onFilterPress,
  title,
}) => (
  <View style={layout.headerContainer}>
    <Header title={title} />
    {onFilterPress && <SearchRow onPress={onFilterPress} />}
  </View>
);

export default HeaderSection;
