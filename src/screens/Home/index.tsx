// Components
import HomeView from '../../components/HomeView';
import FilterModal from '../../components/ModalFilter';

// Hooks
import { useHomeController } from '../../hooks/common/useHomeController';

const Home: React.FC = () => {
  const controller = useHomeController();

  return (
    <>
      <HomeView titleHeader={'Produtos'} {...controller} />
      <FilterModal
        visible={controller.visible}
        setVisible={controller.setVisible}
      />
    </>
  );
};

export default Home;
