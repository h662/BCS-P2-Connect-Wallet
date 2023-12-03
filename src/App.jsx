import { useSDK } from "@metamask/sdk-react";

const App = () => {
  const { sdk } = useSDK();

  const onClickMetamask = async () => {
    try {
      const accounts = await sdk?.connect();

      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xl"
        onClick={onClickMetamask}
      >
        Connect Metamask
      </button>
    </div>
  );
};

export default App;
