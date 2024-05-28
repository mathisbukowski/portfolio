import { useEffect, useState, useRef } from "react";

const StarField = ({ speed = 0.05, backgroundColor = "black", starColor = [255, 255, 255], starCount = 5000 }) => {
    const canvasRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const createStars = (count) => {
            const stars = [];

            for (let i = 0; i < count; i++) {
                const star = {
                    x: Math.random() * 1600 - 800,
                    y: Math.random() * 900 - 450,
                    z: Math.random() * 1000,
                };
                stars.push(star);
            }
            return stars;
        };

        const clearWindow = () => {
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, canvasSize.width, canvasSize.height);
        };

        const putPixel = (x, y, bright) => {
            const [r, g, b] = starColor;
            context.fillStyle = `rgba(${r}, ${g}, ${b}, ${bright})`;
            context.fillRect(x, y, 1, 1);
        };

        const makeAnim = (distance, stars) => {
            stars.forEach((star) => {
                star.z -= distance;
                while (star.z <= 1) {
                    star.z += 1000;
                }
            });
        };

        const tick = (time, prevTime) => {
            const elapsed = time - prevTime;
            prevTime = time;

            makeAnim(elapsed * speed, stars);
            clearWindow();

            const cx = canvasSize.width / 2;
            const cy = canvasSize.height / 2;

            stars.forEach((star) => {
                const width = cx + star.x / (star.z * 0.001);
                const height = cy + star.y / (star.z * 0.001);

                if (width >= 0 && width < canvasSize.width && height >= 0 && height < canvasSize.height) {
                    const d = star.z / 1000.0;
                    const b = 1 - d * d;

                    putPixel(width, height, b);
                }
            });

            requestAnimationFrame((time) => tick(time, prevTime));
        };

        let prevTime = performance.now();
        const stars = createStars(starCount);
        requestAnimationFrame((time) => tick(time, prevTime));

        const handleResize = () => {
            setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [starColor, backgroundColor, speed, starCount, canvasSize]);

    return <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} style={canvasStyle} />;
};

const canvasStyle = {
    padding: 0,
    margin: 0,
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    opacity: 1,
    pointerEvents: "none",
    mixBlendMode: "screen",
};


// Thanks Noa for the tips! :)
export default StarField;
