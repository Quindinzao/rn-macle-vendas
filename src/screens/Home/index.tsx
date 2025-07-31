// Components
import HomeView from '../../components/HomeView';
import ModalFilter from '../../components/ModalFilter';

// Hooks
import { useHomeController } from '../../hooks/common/useHomeController';

const Home: React.FC = () => {
  const controller = useHomeController();

  return (
    <>
      <HomeView titleHeader={'Produtos'} {...controller} />
      <ModalFilter
        visible={controller.visible}
        setVisible={controller.setVisible}
        value={controller.selectedOrdering}
        setValue={controller.setSelectedOrdering}
      />
    </>
  );
};

export default Home;
