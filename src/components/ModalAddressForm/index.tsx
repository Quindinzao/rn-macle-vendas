// Components
import ModalBase from '../ModalBase';
import AddressForm from '../AddressForm';

// Interfaces
import { ModalProps } from '../../interfaces/ModalProps';

const ModalAddressForm: React.FC<ModalProps> = ({ visible, setVisible }) => (
  <ModalBase
    title={'Adicione o endereço de entrega'}
    visible={visible}
    setVisible={setVisible}
  >
    <AddressForm setVisible={setVisible} />
  </ModalBase>
);

export default ModalAddressForm;
