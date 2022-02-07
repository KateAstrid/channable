import { FC } from "react";
import { CountryLabel, FilterContainer, Select } from "../styles";
import { CHANNEL_LIST } from "../database";

const COUNTRIES = Array.from(new Set(CHANNEL_LIST.map(channel => channel.country))).sort()

interface Props {
  value: string
  setValue: (value: string) => void
  onChange: (value: string, key: boolean) => void
}

export const SearchCountries: FC<Props> = ({ value, setValue, onChange }) => {

  const handleChange = (value: string) => {
    setValue(value)
    onChange(value, true)
  }

  return (
    <FilterContainer>
      <CountryLabel>Country</CountryLabel>
        <Select id="country" onChange={event => handleChange(event.target.value)} value={value}>
          <option value=''></option>
          {COUNTRIES.map(country => (
            <option value={country} key={country}>{country}</option>
          ))}
        </Select>
    </FilterContainer>

  )
}