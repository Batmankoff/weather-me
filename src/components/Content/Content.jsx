import { useState } from 'react';
import Search from '@components/Search/Search';
import Weather from '@components/WeatherComponent/Weather';
const Content = () => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('Москва');

  function handleFormSubmit(event) {
    event.preventDefault();
    setCity(search);
    console.log(city);
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    const formattedValue = value
      ? value[0].toUpperCase() + value.substring(1).toLowerCase()
      : '';

    setSearch(formattedValue);
  };
  return (
    <>
      <Search
        onSubmit={handleFormSubmit}
        search={search}
        onChange={handleInputChange}
      />
      <Weather city={city} />
    </>
  );
};

export default Content;
