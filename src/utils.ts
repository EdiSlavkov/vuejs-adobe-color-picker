import { COLOR_COUNT } from './constants';

const generateRandomAlpha = function (): number {
    return Number((0.9 + Math.random() * 0.1).toFixed(2));
};
const generateRandomColorValue = function (): number {
    return Math.floor(Math.random() * 256);
};
export const setInitialColors = function (): { r: number; g: number; b: number; a: number }[] {
    const COLORS = [];
    for (let i = 0; i < COLOR_COUNT; i++) {
        COLORS.push({
            r: generateRandomColorValue(),
            g: generateRandomColorValue(),
            b: generateRandomColorValue(),
            a: generateRandomAlpha()
        });
    }
    return COLORS;
};
