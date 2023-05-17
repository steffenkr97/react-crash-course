import { useEffect, useState } from "react";
import Button from "./Button";
import BetBox from "./BetBox";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");

  const handlePlaceBet = () => {
    setHasWon(!hasWon);
  };
  
  useEffect(() => {
    console.log(betDirection);
  }, [betDirection]);

  return (
    <div className="w-full md:w-[850] lg:w-[1200px] py-12 mx-auto px-5">
      <Button runFunction={handlePlaceBet} />
      <BetBox betDirection={betDirection} setBetDirection={setBetDirection} />
    </div>
  );
}

export default Controller;
