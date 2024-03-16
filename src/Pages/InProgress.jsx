import React, { useState, useEffect } from 'react';

const InProgress = () => {
    const [countdown, setCountdown] = useState("Loading...");

    useEffect(() => {
        const countdownDate = new Date(new Date().getTime() + 40 * 24 * 60 * 60 * 1000);

        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(intervalId);
                setCountdown("FINISH");
            } else {
                setCountdown(`${days}j ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center p-[20px] rounded-[5px] shadow-white">
            <h1>Coming soon...</h1>
            <div className="text-[2em] mx-[20px]" id="countdown">
                {countdown}
            </div>
        </div>
    );
}

export default InProgress;