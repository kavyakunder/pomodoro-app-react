import { useLocation } from "react-router-dom";
import PomodoroTimer from "../../components/PomodoroTimer/PomodoroTimer";
import "./pomodoro.css";
export default function Pomodoro() {
  const defaultValues = {
    name: "your Task Name",
    description: "Your Task Description",
    timer: 25,
    breakTimer: 10,
  };
  const location = useLocation();
  return (
    <div>
      <div className="pomodoro-page">
        <div className="pomodoro-timer">
          {location.state !== null ? (
            <PomodoroTimer
              timer={location.state.timer}
              breakTimer={location.state.breakTimer}
            />
          ) : (
            <PomodoroTimer
              timer={defaultValues.timer}
              breakTimer={defaultValues.breakTimer}
            />
          )}
        </div>

        <div className="task-contents">
          <h1>
            Task Name:
            {location.state !== null ? location.state.name : defaultValues.name}
          </h1>
          <h3>
            Task Description:
            {location.state !== null
              ? location.state.description
              : defaultValues.description}
          </h3>
        </div>
      </div>
    </div>
  );
}
