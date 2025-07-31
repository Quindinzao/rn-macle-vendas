// Components
import ModalBase from '../../components/ModalBase';
import FilterForm from '../../components/FilterForm';

// Interfaces
import { ModalFilterProps } from '../../interfaces/ModalProps';

const ModalFilter: React.FC<ModalFilterProps> = ({
  visible,
  setVisible,
  value,
  setValue,
}) => (
  <ModalBase
    title={'Filtros e ordenação'}
    visible={visible}
    setVisible={setVisible}
  >
    <FilterForm setValue={setValue} value={value} />
  </ModalBase>
);

export default ModalFilter;
