import { Channel } from './components/Channel';
import { Pagination } from './components/Pagination';
import { useState } from 'react'
import { CHANNEL_LIST } from './database';
import { SearchChannels } from './components/SearchChannels';
import { SearchCountries } from './components/SearchCountries';
import { ChannelsContainer, AppContainer, SearchContainer } from './styles';

const App = () => {
  const [page, setPage] = useState(0)
  const [channels, setChannels] = useState(CHANNEL_LIST)
  const [countryValue, setCountryValue] = useState('')
  const [channelValue, setChannelValue] = useState('')
  const firstIndex = page * 15
  const showedChannels = channels.slice(firstIndex, firstIndex + 15)

  const searchChannels = (value: string) => {
    const filteredChannels = CHANNEL_LIST.filter(channel => {
      return channel.label.toLowerCase().startsWith(value)
    })
    setChannels(filteredChannels)
    setPage(0)
    setCountryValue('')
  }

  const searchCountries = (value: string) => {
    const filteredChannels = CHANNEL_LIST.filter(channel => {
      return channel.country.includes(value)
    })
    setChannels(filteredChannels)
    setPage(0)
    setChannelValue('')
  }

  return (
    <AppContainer>

      <SearchContainer>
        <SearchChannels onChange={searchChannels} value={channelValue} setValue={setChannelValue} /> 
        <SearchCountries onChange={searchCountries} value={countryValue} setValue={setCountryValue} />
      </SearchContainer>

      <ChannelsContainer>
        {showedChannels.map(channel => (
          <Channel label={channel.label} key={channel.key} country={channel.country}/>
        ))}
      </ChannelsContainer>

      <Pagination setPage={setPage} page={page} numberOfPages={Math.ceil(channels.length/15)}/>
    </AppContainer>
  );
}

export default App;
