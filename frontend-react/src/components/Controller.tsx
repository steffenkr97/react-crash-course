import { useEffect, useState } from "react";
import Button from "./Button";
import BetBox from "./BetBox";
import axios from "axios";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection, setBetDirection] = useState("up");
  const [isLoading, setIsLoading] = useState(false);
  const [valStored, setValStored] = useState(0);

  const url =
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

  const handlePlaceBet = async () => {
    setIsLoading(true);
    let isWinner = false;

    await axios
      .get(url)
      .then((res) => {
        if (res.status == 200) {
          const val = res.data;
          setValStored(val);
          console.log(val);
          if (val >= 50 && betDirection == "up") {
            isWinner = true;
          } else if (val <= 50 && betDirection == "down") {
            isWinner = true;
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
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(hasWon);
  }, [hasWon]);

  return (
    <div className="w-full md:w-[850] lg:w-[1200px] py-12 mx-auto px-5">
      <Button runFunction={handlePlaceBet} />
      <BetBox
        betDirection={betDirection}
        setBetDirection={setBetDirection}
        isLoading={isLoading}
        valStored={valStored}
        hasWon={hasWon}
      />
    </div>
  );
}

export default Controller;
