import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const Home = () => {
  const { user } = useAuthContext();

  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className="p-11 flex flex-col items-center md:flex-row md:justify-center md:items-start">
      <TransactionForm uid={user.uid} />
      {error && <p>{error}</p>}
      {documents && <TransactionList transactions={documents} />}
    </div>
  );
};

export default Home;
