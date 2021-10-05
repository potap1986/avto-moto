import { Time, TimeWords } from "./const";

export const formatDate = date => {
  let diff = new Date() - date; 

  if (diff < 1000) { 
    return TimeWords.NOW;
  }

  let sec = Math.floor(diff / Time.MS_IN_SECOND);

  if (sec < 60) {
    return sec + TimeWords.SEC;
  }

  let min = Math.floor(diff / Time.MS_IN_MINUTE); 
  if (min < 60) {
    return min + TimeWords.MIN;
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); 

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}