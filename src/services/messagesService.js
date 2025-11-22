
import ENVIRONMENT from "../config/environment"
import { getAuthorizationToken } from "../constants/http"



// GET /api/workspace/:workspace_id/channels/:channel_id/messages


// Obtener la lista de mensajes del backend
async function getMessagesByChannelId(workspace_id, channel_id) {
    const response_http = await fetch(ENVIRONMENT.URL_API + `/api/workspaces/${workspace_id}/channels/${channel_id}/messages`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${getAuthorizationToken()}`,
            }
        }
    );

    const response_data = await response_http.json();
    console.log(response_data);
    

    console.log("STATUS:", response_http.status);
    console.log("OK:", response_http.ok);

    if (!response_http.ok) {
        const text = await response_http.text(); 
        console.error("RESPUESTA REAL:", text);
        throw new Error("La API no devolvió JSON válido");
    }


    return response_data;


}
    async function createMessagesByChannelId(workspace_id, channel_id, message, user_id) {
        console.log(message);

        const response_http = await fetch(ENVIRONMENT.URL_API + `/api/workspaces/${workspace_id}/channels/${channel_id}/messages`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${getAuthorizationToken()}`
                },
                body: JSON.stringify({ content: message, id: user_id })
            }
        )
        console.log(response_http);

        const response_data = await response_http.json()
        if (!response_data.ok) {
            throw new Error(response_data.message)
        }
        return response_data
    }

    export {
        getMessagesByChannelId,
        createMessagesByChannelId
    }







/* 
async function getChannelList(workspace_id) {
    const lista_canales = await fetch(ENVIRONMENT.URL_API + `/api/workspace/ ${workspace_id} /channels`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
            }
        }
    )
    if (!lista_canales.ok) {
        throw new Error('Error al obtener la lista de canales')
    }
}

async function createChannel(workspace_id, channel_name) {
    const body = {
        channel_name: channel_name,
    };
    const response_http = await fetch(
        ENVIRONMENT.URL_API + "/api/workspace/" + workspace_id + "/channels",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${getAuthorizationToken()}`,
            },
            body: JSON.stringify(body),
        }
    );
    const response_data = await response_http.json();
    if (!response_data.ok) {
        throw new Error(response_data.message);
    }
    return response_data;
}
 */