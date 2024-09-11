import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {
    const { user, stats, changeStatsPlus, changeStatsMinus } = useContext(TwitterContext)
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onContextMenu={e => {
                        e.preventDefault()
                        changeStatsMinus('followers')
                    }}
                    onClick={() => changeStatsPlus('followers')}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onContextMenu={e => {
                        e.preventDefault()
                        changeStatsMinus('following')
                    }}
                    onClick={() => changeStatsPlus('following')}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    )
}

export default Stats