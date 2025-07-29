// Components
import ModalBase from '../../components/ModalBase';
import FilterForm from '../../components/FilterForm';

interface NodalFilterProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalFilter: React.FC<NodalFilterProps> = ({ visible, setVisible }) => (
  <ModalBase
    title={'Filtros e ordenação'}
    visible={visible}
    setVisible={setVisible}
  >
    <FilterForm />
  </ModalBase>
);

export default ModalFilter;
