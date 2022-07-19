import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoApiOptions, GEO_API_URL } from '../../API'

interface Props {
  onSearchChange: (searchData: any) => void
}

const Search: React.FC<Props> = ({ onSearchChange }) => {
  const [search, setSearch] = useState<any>(null)

  const loadOptions = (inputValue: any): Promise<any> => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city: any) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  const handleOnChange = (searchData: any): void => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder='Search for city'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
