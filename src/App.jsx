import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'
import { useState } from 'react'
import { TwitterContext } from './utils/context'

function App() {
  const [user, setUser] = useState({
    name: 'Monster',
    avatar: "https://gravatar.com/avatar/000?d=monsterid"
  })

  const [stats, setStats] = useState({
    followers: 10,
    following: 100
  })

  const changeAvatar = url => {
    setUser(prevState => ({ ...prevState, avatar: url || prevState.avatar }))
  }

  const changeName = name => {
    setUser(prevState => ({ ...prevState, name: name || prevState.name }))
  }

  // const changeStats = (type) => {
  //   if (type === "followers") {
  //     setStats(prevState => ({...prevState, followers: stats.followers + 1 || prevState.followers}));
  //   } else if (type === "following") {
  //     setStats(prevState => ({...prevState, following: stats.following + 1 || prevState.followers + 1}));
  //   }
  // };

  const changeStatsPlus = (type) => {
    if (type === 'followers') {
      setStats(prevState => ({ ...prevState, followers: stats.followers + 1 || prevState.followers }))
    } if (type === 'following') {
      setStats(prevState => ({ ...prevState, following: stats.following + 1 || prevState.following }))
    }
     
  }

  const changeStatsMinus = (type) => {
    if (type === 'followers') {
      setStats(prevState => ({ ...prevState, followers: stats.followers - 1 || prevState.followers }))
    } if (type === 'following') {
      setStats(prevState => ({ ...prevState, following: stats.following - 1 || prevState.following }))
    }
  }




  return (
    <div className='app'>
      <TwitterContext.Provider value={{
        user, stats, changeAvatar, changeName, changeStatsPlus, changeStatsMinus
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
