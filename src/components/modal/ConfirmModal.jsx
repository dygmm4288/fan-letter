import Button from "components/common/Button";
import Modal from "components/modal/Modal";
import withModal from "containers/hoc/withModal";

function ConfirmModal({ handleCancle, handleConfirm, text }) {
  return (
    <Modal text={text}>
      <Button handleClickEvent={handleCancle}>취소</Button>
      <Button handleClickEvent={handleConfirm}>확인</Button>
    </Modal>
  );
}

export default withModal(ConfirmModal);
