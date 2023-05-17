import { useEffect, useState } from "react";
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");

  const url =
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

  const handlePlaceBet = async () => {
    let isWinner = false;

    await axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data;
          console.log(val)
          if (val >= 50 && betDirection == "up") {
            isWinner = true;
          } else if (val <= 50 && betDirection == "down") {
            isWinner = false;
          }
        } else {
          console.error("Error getting the Data!");
        }
      })
      .catch((err) => {
        console.log(err.data, err.message);
      });
    // return winner  
    setHasWon(isWinner);
  };

  useEffect(() => {
    console.log(hasWon);
  }, [hasWon]);

  return (
    <div className="w-full md:w-[850] lg:w-[1200px] py-12 mx-auto px-5">
      <Button runFunction={handlePlaceBet} />
      <BetBox betDirection={betDirection} setBetDirection={setBetDirection} />
    </div>
  );
}

export default Controller;
