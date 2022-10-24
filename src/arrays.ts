import { workerData } from "worker_threads";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newArray = [...numbers];
    const oneArray = [];
    const firstLast = [];
    let first = 0;
    let last = 0;
    if (newArray.length == 0) {
        return newArray;
    } else if (newArray.length == 2) {
        oneArray.push(0);
        oneArray.push(0);
        return oneArray;
    } else {
        first = newArray[0];
        last = newArray[newArray.length - 1];
        firstLast.push(first);
        firstLast.push(last);
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const prices = [...numbers];
    const newPrices = [];
    for (const price of prices) {
        newPrices.push(3 * price);
    }
    return newPrices;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newArray = [...numbers];
    const stringToIntArray = [];
    for (const integers of newArray) {
        const x = parseInt(integers);
        if (isNaN(x)) {
            stringToIntArray.push(0);
        } else {
            stringToIntArray.push(x);
        }
    }
    return stringToIntArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newArray = [...amounts];
    const prased = [];
    const dollars = newArray.map((word: string): string =>
        word.replace("$", "")
    );
    for (const integers of dollars) {
        const x = parseInt(integers);
        if (isNaN(x)) {
            prased.push(0);
        } else {
            prased.push(x);
        }
    }
    return prased;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newArray = [...messages];
    const q = newArray.filter((word: string): boolean => !word.includes("?"));
    const ex = q.map((word: string): string =>
        word.includes("!") ? word.toUpperCase() : word
    );
    return ex;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newArray = [...words];
    const lessFour = newArray.filter(
        (word: string): boolean => word.length < 4
    );
    return lessFour.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = [...colors];
    const shades = RGB.every(
        (RGB: string): boolean =>
            RGB == "red" || RGB == "green" || RGB == "blue"
    );
    return shades;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const count = 0;
    const out = "";
    for (let integers of addends) {
        integers = integers + count;
    }
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
