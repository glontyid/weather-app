export function tempChanger(temp) {
  return Math.floor(temp - 273.15)
}

export function kmhToMs(speed) {
  return (speed * (1000 / 3600)).toFixed(1)
}

export function setCurrentTime(time) {
  return time.toString().length === 1 ? '0' + time : time
}

export function getCurrentWeekDay(day, min) {
  const daysMax = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  const daysMin = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
  ];

  return min ? daysMin[day] : daysMax[day]
}

export function backgroundChanger() {
  const date = new Date().getHours();

  return date > 5 && date < 18
}