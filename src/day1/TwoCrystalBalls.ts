/**
  * Given two crystal balls that will break if dropped from high enough distance,
  * determine the exact spot in which it will break in the most optimized way.
  *
  */
export default function two_crystal_balls(breaks: boolean[]): number {

  // jumps as further as you can, it the first crystal was broken, then 
  // fallback with search step by step.

  const jumpSteps = Math.floor(Math.sqrt(breaks.length));
  
  let i = jumpSteps
  for (; i < breaks.length; i += jumpSteps) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpSteps;
  for (let j = i; j < i + jumpSteps && j < breaks.length; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}
