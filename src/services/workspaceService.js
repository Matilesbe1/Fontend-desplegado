import ENVIRONMENT from "../config/environment.js";
import { getAuthorizationToken } from "../constants/http.js";

async function getWorkspaces() {
    const response_http= await fetch(ENVIRONMENT.URL_API + '/api/workspaces', 
        {
        method:'GET',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
    }
)   
    if(!response_http.ok){
        throw new Error( 'Error al obtener la lista de workspaces')
    }
    const response=await response_http.json()
    return response
    
}
    async function createWorkspace(name, url_img = "") {
    const body = {
        name: name,
        url_img: url_img,
    };
    const response_http = await fetch(ENVIRONMENT.URL_API + "/api/workspaces", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${getAuthorizationToken()}`
        },
        body: JSON.stringify(body),
    });
    const response_data = await response_http.json();
    if (!response_data.ok) {
        throw new Error(response_data.message)
    }
    return response_data;
}

async function getWorkspaceById(workspace_id) {
    console.log('hola');
    
    const response_http = await fetch(
        ENVIRONMENT.URL_API + "/api/workspaces/" + workspace_id + "/channels",
        {
            method: "GET",
            headers: {
                Authorization: "Bearer " + getAuthorizationToken(),
            },
        }
    );
    const response_data = await response_http.json();
    if (!response_data.ok) {
        throw new Error(response_data.message || "Error al obtener el workspace")
    }
    return response_data
}

async function inviteUser (email, workspace_id){
    const response_http = await fetch(
        ENVIRONMENT.URL_API + "/api/workspaces/" + workspace_id + "/invite",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${getAuthorizationToken()}`
            },
            body: JSON.stringify({invited_email: email})
        }
    )
    const response_data = await response_http.json()
    if (!response_data.ok) {
        throw new Error(response_data.message)
    }
    return response_data
}

export { getWorkspaces, createWorkspace, getWorkspaceById, inviteUser}
