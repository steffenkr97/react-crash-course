type Props = {
  runFunction: any;
};

function Button( {runFunction}: Props ) {
  return (
    <button
      onClick={runFunction}
      className="transition-all duration-300 border border-black w-full mt-4 px-4 py-4 rounded-sm hover:bg-indigo-600 bg-indigo-400 text-white"
    >
      Place Bet
    </button>
  );
}

export default Button;
