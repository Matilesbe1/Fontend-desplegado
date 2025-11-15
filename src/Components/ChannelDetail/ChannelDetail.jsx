import { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch.jsx";
import { getMessagesByChannelId } from "../../services/messagesService.js";

const ChannelDetail = () => {
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
    console.log("ERROR:", error);
    console.log("LOADING:", loading);

    return (
        <div style={{ padding: "20px" }}>
            {loading && <span>Cargando mensajes...</span>}
            {error && <span>Error: {error}</span>}
            {response && response.data && (
                <ul>
                    {response.data.map((msg) => (
                        <li key={msg._id}>{msg.text}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChannelDetail;