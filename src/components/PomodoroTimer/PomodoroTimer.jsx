import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";
import "./pomodoroTimer.css";

export default function PomodoroTimer({ timer, breakTimer }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [key, setKey] = useState(1);
  const [workTime, setWorkTime] = useState(true);
  const [isBreakTime, setBreakTime] = useState(false);

  const renderTaskTimer = ({ remainingTime }) => {
    const mins = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div className="time-pomodoro">
        <h1 className="time">
          {mins} mins : {seconds} secs
        </h1>
        <h2 className="work-time">Work Time</h2>
      </div>
    );
  };

  const renderBreakTimer = ({ remainingTime }) => {
    const mins = Math.floor((remainingTime % 3600) / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div>
        <h1>
          {mins} mins : {seconds} secs
        </h1>
      </div>
    );
  };

  const workTimer = () => {
    setBreakTime(true);
    setWorkTime(false);
  };

  const breakTime = () => {
    setBreakTime(false);
  };

  return (
    <div>
      <div>
        {workTime && (
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={timer * 60}
            colors={"#DC5273"}
            size={400}
            key={key}
            onComplete={workTimer}
          >
            {({ remainingTime }) => renderTaskTimer({ remainingTime })}
          </CountdownCircleTimer>
        )}

        {isBreakTime && (
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={breakTimer * 60}
            colors={"#E98199"}
            size={400}
            key={key + 1}
            onComplete={breakTime}
          >
            {({ remainingTime }) => renderBreakTimer({ remainingTime })}
          </CountdownCircleTimer>
        )}
      </div>

      {!workTime && !isBreakTime && (
        <div>
          <h2>Continue the same task?</h2>
          <button onClick={() => setWorkTime(true)}>Restart Timer</button>
          <h2>Move on to a new task?</h2>
          <Link to="/tasks">
            <button>Go to Tasks Page</button>
          </Link>
        </div>
      )}

      {workTime && (
        <div className="control-pomodoro">
          <button onClick={() => setIsPlaying(true)} disabled={isPlaying}>
            Play
          </button>
          <button onClick={() => setIsPlaying(false)} disabled={!isPlaying}>
            Pause
          </button>
          <button
            onClick={() => {
              setKey(key + 1);
              setIsPlaying(false);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
