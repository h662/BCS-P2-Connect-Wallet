import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

const App = () => {
  const [account, setAccount] = useState("");

  const { sdk } = useSDK();

  const onClickMetamask = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {account ? (
        <span>
          Hello, {account.substring(0, 7)}...
          {account.substring(account.length - 5)}
        </span>
      ) : (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xl"
          onClick={onClickMetamask}
        >
          Connect Metamask
        </button>
      )}
    </div>
  );
};

export default App;
