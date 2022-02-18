// перевод температуры из кельвин в цельсия
export function tempChanger(temp) {
  return Math.floor(temp - 273.15)
}

// перевод км.ч в метр в секунду
export function kmhToMs(speed) {
  return (speed * (1000 / 3600)).toFixed(1)
}

// форматирование времени
export function setCurrentTime(time) {
  return time.toString().length === 1 ? '0' + time : time
}

// получение дня недели
export function getCurrentWeekDay(day, min) {
  const daysMax = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const daysMin = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  return min ? daysMin[day] : daysMax[day]
}

// изменение background в зависимости от времени
export function backgroundChanger() {
  const date = new Date().getHours();

  return date > 5 && date < 18
}

// возвращает слово в нужном падеже в зависимости от цифры
export function declOfNum(n) {
  const titles = ['дня', 'дней']

  return titles[n <= 4 ? 0 : 1];
}