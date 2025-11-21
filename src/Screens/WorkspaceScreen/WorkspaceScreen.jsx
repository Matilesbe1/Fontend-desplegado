import React, { useEffect } from 'react'
import ChannelSidebar from '../../Components/ChannelSidebar/ChannelSidebar'
import ChannelDetail from '../../Components/ChannelDetail/ChannelDetail'
import ChannelList from '../../Components/ChannelList/ChannelList.jsx';
import { useParams } from 'react-router';
import './WorkspaceScreen.css'
import useFetch from '../../hooks/useFetch.jsx';
import InviteUserForm from '../../Components/InviteUserForm/InviteUserForm.jsx';
import { getWorkspaceById } from '../../services/workspaceService.js';

const WorkspaceScreen = () => {
    const { workspace_id} = useParams()

    const { sendRequest, response, error, loading } = useFetch()
    useEffect(
        () => {
            sendRequest(
                async () => {
                    return await getWorkspaceById(workspace_id)
                }
            )
        },
        [workspace_id]
    )


console.log(response);
getWorkspaceById(workspace_id)


    return (
        <div className='channel-container'>
            {
                response && (
                    <h1>Selecciona un canal: </h1>
                )
            }
            {
                workspace_id &&
                <div className='channel-list'>
                    <ChannelList channel_list={response && response.data.channels}/>
                </div>
            }
        </div>
    )
}

export default WorkspaceScreen