import React, {useState, useRef} from "react";
import "./Timer.css";
import {timeType} from "./../../Types/Types";
import Button from "./../Button/Button.component";

const Timer = () => {
    let [time, setTime] = useState<timeType>({
        minute : 15,
        seconds : 0
    })
    const [active, setActive] = useState(false);
    let interval = useRef<any>(null);


    const updateTime = (time: timeType, interval: NodeJS.Timeout) => {
        let data: timeType = {
            minute : 0,
            seconds : 0
        };
        if(time.seconds > 0){
            data = {
                ...time,
                seconds : time.seconds - 1
            };
        }
        else {
            if(time.seconds === 0){
                if(time.minute === 0) {
                    clearInterval(interval);
                    data = {
                        minute : 0,
                        seconds : 0
                    }
                }
                else{
                    data = {
                        minute : time.minute - 1,
                        seconds : 59
                    }
                }
            }
        }

        return data;
    }

    const startTimer = () => {
        if(active)
            return;
        setActive(true);
        interval.current = setInterval(() => {
            setTime(newtime => updateTime(newtime, interval.current));
        }, 1000)
    }

    const stopTimer = () => {
        if(!active)
            return;
        setActive(false);
        clearInterval(interval.current);
    }

    const resetTimer = () => {
        stopTimer();
        setTime({
            minute : 15,
            seconds : 0
        });
    }

    return (
        <div className="Timer">
            <div className="time">
                {time.minute < 10 ? `0${time.minute}` : time.minute}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
            </div>

            <div className="button_area">
                <Button 
                    className={"start-timer"}
                    action={startTimer}
                    value={"Start"}
                />
                <Button 
                    className={"stop-timer"}
                    action={stopTimer} 
                    value={"Stop"}
                />
                <Button 
                    className={"reset-timer"}
                    action={resetTimer} 
                    value={"Reset"}
                />
            </div>
        </div>
    )
}

export default Timer;