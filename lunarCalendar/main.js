const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

const next_lunar_day = (day, month, year) => {
  const days_in_month = year % 50 === 0 && month === 9 ? 31 : month % 2 === 0 ? 29 : 30;

  if (day === days_in_month) {
    if (month === 17)
      return [1, 1, year+1]
    else
      return [1, month+1, year]
  } else {
    return [day+1, month, year]
  }
}

const gregorian_to_lunar = (date) => {
  const startDate = new Date('2023-10-07T00:00:00Z');
  const elapsed_days = Math.floor((date - startDate.getTime()) / MS_IN_A_DAY);
  let lunar_date = [9, 5, 2514];

  for (let i = 0; i < elapsed_days; i++) {
    lunar_date = next_lunar_day(...lunar_date);
  }

  return lunar_date;
}

const moon_brightness = (date) => {
  const fullMoon = new Date('2023-09-29T00:00:00Z');
  const t = (date - fullMoon) / MS_IN_A_DAY;
  const brightness = (1 + Math.cos(2 * Math.PI / 29.5305889 * t)) / 2;
  const derivative = -Math.sin(2 * Math.PI / 29.5305889 * t);

  return [brightness, derivative]
}

const moon_emoji = (date) => {
  const [brightness, derivative] = moon_brightness(date);

  if (brightness >= 0 && brightness < 0.125)
    return '🌑'
  if (brightness >= 0.125 && brightness < 0.375)
    return derivative > 0 ? '🌘' : '🌒'
  if (brightness >= 0.375 && brightness < 0.625)
    return derivative > 0 ? '🌗' : '🌓'
  if (brightness >= 0.625 && brightness < 0.875)
    return derivative > 0 ? '🌖' : '🌔'
  if (brightness >= 0.875 && brightness <= 1)
    return '🌕'
}

export { gregorian_to_lunar, moon_emoji }