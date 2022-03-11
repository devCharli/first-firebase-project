import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
    // console.log({ name, amount });
  };
  //  reset the form fields
  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <div className="w-full max-w-xs md:mr-6">
      <h3 className="text-center pb-4 text-lg font-semibold">
        Add a transaction
      </h3>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span>Transaction name</span>
          </label>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span>Transaction name</span>
          </label>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Trnasaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
