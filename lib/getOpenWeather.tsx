export async function getOpenWeather() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${41.6716}&lon=${-70.0622}&units=imperial&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API}`, 
    { next: { revalidate: 10 } }
  );
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.info('weather data', data);
  return data;
};