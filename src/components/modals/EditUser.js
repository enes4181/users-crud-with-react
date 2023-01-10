import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../store/users";
import { modalClose } from "../../utils";

export default function EditUser({ data }) {


  const dispatch = useDispatch();
  const [userName, setUserName] = useState(data.name);
  const [userLastName, setUserLastName] = useState(data.lastname);

 console.log(data.id)

  const submitHandle = (e) => {
    e.preventDefault();
    
    dispatch(
      updateUser({
      id:data.id,
      name: userName,
      lastname: userLastName
    })).then(() => {
      modalClose();
      
     
    });
    
  };
  

  return (
    <form
      className="max-w-xl mx-auto grid gap-y-4 py-4"
      onSubmit={submitHandle}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <div className="mt-1">
          <input
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Surname
        </label>
        <div className="mt-1">
          <input
            type="text"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button
          className="inline-flex disabled:opacity-20 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        
       >
          Update    
        </button>
      </div>
    </form>
  );
}
