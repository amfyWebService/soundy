/*
 * return seconds to minutes
 */
export function convertTime (value : number) {
    let minutes = ("0" + Math.floor(value / 60)).slice(-2);
    let seconds = ("0" + Math.floor(value % 3600 % 60)).slice(-2);
    return `${minutes}:${seconds}`
  }
  
  