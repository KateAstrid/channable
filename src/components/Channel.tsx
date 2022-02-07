import { FC } from "react"
import { ChannelContainer, ChannelName } from "../styles"

interface Props {
  label: string
  country: string
}

export const Channel: FC<Props> = ({ label, country }) => {
  return (
    <ChannelContainer>
      <div>{country}</div>
      <ChannelName>
        <input type="checkbox"/>
        <div>{label}</div>
      </ChannelName>
    </ChannelContainer>
  )
}