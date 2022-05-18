import image from "../../../public/assets/images/1.jpg";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState<number>();
  const [timerHours, setTimerHours] = useState<number>();
  const [timerMinutes, setTimerMinutes] = useState<number>();
  const [timerSecond, setTimerSecond] = useState<number>();

  let interval: number = 0;

  const startTimer = () => {
    const countdownDate = new Date("May 30, 2022 00:00:00").getTime();
    interval = window.setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecond(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      <img
        src="assets/images/3.jpg"
        alt="countdown"
        className="h-72 xs:h-60 w-full object-cover"
      />
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        className="absolute top-0 flex justify-around w-full ss:flex-col ss:items-start xs:flex-col xs:items-start h-full items-center flex-row"
      >
        <div className="font-beau ml-2 text-white">
          <span className="text-3xl">Were waiting for...</span>
          <p className="text-7xl ss:text-6xl xs:text-5xl">For the adventure</p>
        </div>
        <div className="grid grid-flow-col xs:mx-auto ss:mx-auto text-white  gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2  font-quick">
            <span className="text-5xl xs:text-4xl ">{timerDays}</span>
            days
          </div>
          <div className="flex flex-col p-2  font-quick">
            <span className="text-5xl xs:text-4xl">{timerHours}</span>
            hours
          </div>
          <div className="flex flex-col p-2  font-quick">
            <span className="text-5xl xs:text-4xl">{timerMinutes}</span>
            min
          </div>
          <div className="flex flex-col p-2  font-quick">
            <span className="text-5xl xs:text-4xl">{timerSecond}</span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
