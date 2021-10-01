import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let a = [];
  for(let i in arr) {
    if (arr[i] !== -1) a.push(arr[i]);
  }
  a.sort((a, b) => a - b);
  let shift = 0;
  for (let j = 0; j < arr.length; j++) {
    (arr[j] === -1) ? shift++ : arr[j] = a[j - shift];
  }
  return arr;
}