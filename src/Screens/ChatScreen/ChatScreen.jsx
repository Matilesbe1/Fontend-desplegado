import React from 'react'
import ChannelDetail from '../../Components/ChannelDetail/ChannelDetail'
import useFetch from '../../hooks/useFetch'

const ChatScreen = () => {

    const { sendRequest, response, error, loading } = useFetch()
    return (
        <div>
            <ChannelDetail channel_list={response && response.data.channels}/>
        </div>
    )
}

export default ChatScreen
