import { useFirestore } from "../hooks/useFirestore";
const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <div className="w-full max-w-xs mt-2">
      <h3 className="text-center pb-4 text-lg font-semibold">Transactions</h3>
      <ul className="divide-y divide-slate-600">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="grid grid-cols-6 p-2">
            <div className="flex justify-between col-span-5">
              <p className="p-1">{transaction.name}</p>
              <p className="p-1">${transaction.amount}</p>
            </div>
            <button
              onClick={() => deleteDocument(transaction.id)}
              className="col-span-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
