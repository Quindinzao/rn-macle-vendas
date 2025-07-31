// External libraries
import { View } from 'react-native';

// Components
import Header from '../Header';
import SearchRow from '../SearchRow';

// Interfaces
import { HeaderSectionProps } from '../../interfaces/HeaderProps';

// Styles
import { layout } from '../../styles/globalStyle';

const HeaderSection: React.FC<HeaderSectionProps> = ({
  onFilterPress,
  title,
  setSearchName,
  searchName,
}) => (
  <View style={layout.headerContainer}>
    <Header title={title} />
    {onFilterPress && (
      <SearchRow
        searchName={searchName}
        setSearchName={setSearchName}
        onPress={onFilterPress}
      />
    )}
  </View>
);

export default HeaderSection;
