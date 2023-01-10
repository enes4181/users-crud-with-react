import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Modal from "./components/Modal";


import { fetchUsers } from "./store/users";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchUsers());

  const { open: isModelOpen, data: modelData } = useSelector((state) => state.modal);

  return (
    <>
      
      {isModelOpen && <Modal name={isModelOpen} data={modelData} />}
      <Home />
    </>
  );
}

export default App;
