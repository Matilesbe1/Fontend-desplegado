import React from 'react'
import ChannelSidebar from '../../Components/ChannelSidebar/ChannelSidebar'
import ChannelDetail from '../../Components/ChannelDetail/ChannelDetail'
import { useParams } from 'react-router';

const WorkspaceScreen = () => {
    const { channel_id } = useParams();
  return (
    <div>
        <ChannelSidebar/>
        {channel_id ? (
            <ChannelDetail/>
        ) : (
            <div>
                <h3>Selecciona un canal</h3>
            </div>
        )}
    </div>
  )
}

export default WorkspaceScreen