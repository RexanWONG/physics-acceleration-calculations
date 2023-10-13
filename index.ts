import { times, xVelocitiy, yVelocity } from "./data";

const calculateAcceleration = (time: number[], velocity: number[]) => {
    const slopes: number[] = [];

    for (let i = 0; i < time.length - 1; i++) {
        let x1 = time[i];
        let x2 = time[i + 1];
        let y1 = velocity[i];
        let y2 = velocity[i + 1];

        let slope = (y2 - y1) / (x2 - x1);
        slopes.push(slope);
    }

    return slopes;
}

// x acceleration
console.log(calculateAcceleration(times, xVelocitiy))

// y acceleration
console.log(calculateAcceleration(times, yVelocity))

