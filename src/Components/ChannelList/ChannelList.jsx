import React from 'react'
import { Link, useParams } from 'react-router'
import useChannels from '../../hooks/useChannels.jsx'
import useForm from '../../hooks/useForm.jsx'
import "./ChannelList.css"
import InviteChannelForm from '../InviteChannelForm/InviteChannelForm.jsx'

const ChannelList = ({ channel_list }) => {
    const { workspace_id } = useParams()

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} className='channel-list-container'>
            {
                !channel_list
                    ? <span>Cargando...</span>
                    : channel_list.map(
                        (channel) => {
                            return (
                                <>
                                <Link key={channel._id} to={`/workspace/${workspace_id}/${channel._id}`}>
                                    <button className='button2'>{channel.name}</button>
                                </Link>
                                </>
                            )
                        }
                    )
            }
            <Link to={'/createChannel'}><button className='create-button'>Crear canal</button></Link>
        </div>
    )
}

export default ChannelList