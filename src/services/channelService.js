import ENVIRONMENT from "../config/environment.js"
import useFetch from "../hooks/useFetch"


async function getChannelList(workspace_id){
    const lista_canales= await fetch( ENVIRONMENT.URL_API + `/api/workspaces/ ${workspace_id} /channels`, 
    {
        method:'GET',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
    }
    )
    if(!lista_canales.ok){
        throw new Error( 'Error al obtener la lista de canales')
    }
}

async function createChannel(workspace_id, Channel_name){
    const nuevo_canal= await fetch(ENVIRONMENT.URL_API + `/api/workspaces/ ${workspace_id} /channels`, 
    {
        method:'POST',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({
            "channel_name": Channel_name
        })
    }
    )
    if(!nuevo_canal.ok){
        throw new Error( 'Error al crear el canal')
    }
}

export {
    getChannelList,
    createChannel
}