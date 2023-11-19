import { setModalAllClose } from "modules/modal";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function withModal(Component) {
  return (props) => {
    const dispatch = useDispatch();
    const handleCancle = useCallback(() => {
      dispatch(setModalAllClose());
    }, []);

    return <Component handleCancle={handleCancle} {...props} />;
  };
}
