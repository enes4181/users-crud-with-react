import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/modal";
import { deleteUser, fetchUsers } from "../store/users";

export default function UserList() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  const handleEdit = (user) => {
    dispatch(
      openModal({
        name: "EditUser",
        data: user,
      })
    );
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    dispatch(fetchUsers());
  };

  return (
    <ul className="mt-4 flex flex-col gap-y-2">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 flex justify-between items-center rounded bg-indigo-200 text-sm text-indigo-700"
        >
          <span className="text-xl">{user.name}</span>
          <span className="text-xl ml-5">{user.lastname}</span>

          <div className="flex gap-x-2">
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="h-7 rounded px-3 text-xs bg-indigo-700 text-white"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(user)}
              className="h-7 rounded px-3 text-xs bg-indigo-700 text-white"
            >
              Update
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
