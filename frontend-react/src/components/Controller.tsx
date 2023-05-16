import { useEffect, useState } from "react";
import Button from "./Button";

function Controller() {
  const [hasWon, setHasWon] = useState(false);

  const handlePlaceBet = () => {
    setHasWon(!hasWon);
  };
  
  useEffect(() => {
    console.log(hasWon);
  }, [hasWon]);

  return (
    <div className=" container bg-green-300 mx-auto">
      <Button runFunction={handlePlaceBet} />
    </div>
  );
}

export default Controller;
