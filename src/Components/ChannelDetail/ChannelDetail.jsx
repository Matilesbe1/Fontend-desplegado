import { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch.jsx";
import { getMessagesByChannelId, createMessagesByChannelId } from "../../services/messagesService.js";
import CreateNewMessage from "../CreateNewMessage/CreateNewMessage.jsx";
import { jwtDecode } from "jwt-decode";
import "./ChannelDetail.css"

const ChannelDetail = ({ channel_list }) => {
    const { channel_id, workspace_id } = useParams();
    
    if (!channel_id) {
        return (
            <div>
                <span>Canal no seleccionado</span>
            </div>
        );
    }

    const { response, error, loading, sendRequest } = useFetch();

    useEffect(() => {
        async function loadMessages() {
            await sendRequest(() =>
                getMessagesByChannelId(workspace_id, channel_id)
            );
        }

        loadMessages();
    }, [channel_id, workspace_id]);

    console.log("RESPONSE:", response);

    const onSubmitNewMessage = (form_state) => {
        console.log(form_state.content);

        sendRequest(() =>
            createMessagesByChannelId(workspace_id, channel_id, form_state.content, user_id)
        );
    }

    const token = localStorage.getItem('auth_token')
    const user_id = jwtDecode(token).id
    console.log(user_id);


    /*  if (user_id !== sender_member_id) {
         return (
             <div className="otro">
                 <span>{message}</span>
             </div>
         )
     } else {
         return (
             <div className="yo">
                 <span>{message}</span>
             </div>
         )
     } */

    console.log(user_id);
    console.log(response);

    return (
        <div className="chat-body">
            <h2>{ }</h2>
            <div className="chat-container">
                <div style={{ padding: "20px" }}>
                    {loading && <span>Cargando mensajes...</span>}
                    {error && <span>Error: {error}</span>}
                    {response && response.data && (
                        <ul className="messages-list">
                            {response.data.messages.map((msg) => (
                                user_id === msg.user._id
                                    ? <li key={msg._id} className="mio"><h5>{msg.user.name}:</h5> {msg.content} </li>
                                    : <li key={msg._id} className="otro"><h5>{msg.user.name}:</h5> {msg.content} </li>
                            ))}
                        </ul>
                    )}
                </div>
                <CreateNewMessage onSubmit={onSubmitNewMessage} />
            </div>
        </div>
    );
};

export default ChannelDetail;