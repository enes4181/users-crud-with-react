import UserList from "../components/UserList";
import store from "../store";
import { openModal } from "../store/modal";

export default function Home() {
  const AddModal = e => {
    e.preventDefault()
    store.dispatch(
      openModal({
        name: "AddUser",
      })
    );
  };

  return (
    <div className="max-w-2xl mx-auto py-5">
      <div className="p-4 flex justify-between items-center rounded bg-gray-300 text-sm text-indigo-700">
        <h1 className=" text-black text-xl">Name</h1>
        <h1 className=" text-black text-xl mr-12">LastName</h1>
        <button
          onClick={AddModal}
          className="h-7 rounded px-3 text-xs bg-indigo-700 text-white"
        >
          Insert
        </button>
      </div>
      <UserList />
    </div>
  );
}
