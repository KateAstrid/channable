import { FC } from "react"
import { Input } from "../styles"

interface Props {
  value: string
  setValue: (value: string) => void
  onChange: (value: string) => void
}

export const SearchChannels: FC<Props> = ({ value, setValue, onChange }) => {

  const handleChange = (value: string) => {
    setValue(value)
    onChange(value.toLowerCase())
  }

  return (
    <Input type="text" value={value} onChange={event => handleChange(event.target.value)}/>
  )
}