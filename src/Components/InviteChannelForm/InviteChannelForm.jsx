import { Link, useParams } from "react-router"
import useChannels from "../../hooks/useChannels"
import useForm from "../../hooks/useForm"
import { createChannelByWorkspaceId } from "../../services/channelService"
import "./InviteChannelForm.css"

const InviteChannelForm = ({ onSubmit }) => {
    const { workspace_id } = useParams()
    const new_channel_form_fields = {
        channel_name: 'channel_name'
    }

    const initial_new_channel_state = {
        [new_channel_form_fields.channel_name]: ''  
    }
    const { form_state, onInputChange, handleSubmit } = useForm(

        initial_new_channel_state,
        onSubmit

    )
    console.log(initial_new_channel_state);



    return (
        <div className="body-container">
            <Link to={`/workspace/${workspace_id}`}><i class="bi bi-arrow-left arrow"></i></Link>
            
            <form className="form" onSubmit={handleSubmit}>
                <span className="input-span">
                    <label htmlFor="channel_name" className="label">Nombre del canal:</label>
                    <input
                        type="text"
                        placeholder='Nuevo canal'
                        id='channel_name'
                        name='channel_name'
                        onChange={onInputChange}
                        value={form_state[new_channel_form_fields.channel_name]}
                    /></span>
                <input className="submit" type="submit" defaultValue="Crear"  onClick={() => alert('canal creado con exito')}/>
            </form>
        </div>
    )
}

export default InviteChannelForm
