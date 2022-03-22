const HomeGuest = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl text-center p-4 italic text-slate-500">
        Manage your spending with <br />
        <span className="not-italic uppercase">My Wallet</span>
      </h2>
      <img
        src="https://cdn.pixabay.com/photo/2021/06/27/12/40/e-wallet-6368676_960_720.png"
        alt="money image"
        className="max-w-md py-4 rounded-full md:scale-75"
      />
    </div>
  );
};

export default HomeGuest;
