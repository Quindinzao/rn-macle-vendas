// Components
import ModalBase from '../ModalBase';
import CardForm from '../CardForm';

// Interfaces
import { ModalProps } from '../../interfaces/ModalProps';

const ModalCardForm: React.FC<ModalProps> = ({ visible, setVisible }) => (
  <ModalBase
    title={'Adicione cartão'}
    visible={visible}
    setVisible={setVisible}
  >
    <CardForm setVisible={setVisible} />
  </ModalBase>
);

export default ModalCardForm;
