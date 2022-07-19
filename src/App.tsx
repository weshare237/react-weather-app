import React from 'react'
import Search from './components/search/Search'
import './App.css'
import CurrentWeather from './components/current-weather/CurrentWeather'

const App: React.FC = () => {
  const handleOnSearchChange = (searchData: any): void => {
    console.log(searchData)
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}

export default App
