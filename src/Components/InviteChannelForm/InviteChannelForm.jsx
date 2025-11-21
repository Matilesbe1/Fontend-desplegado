import useChannels from "../../hooks/useChannels"
import useForm from "../../hooks/useForm"
import "./InviteChannelForm.css"


const NEW_CHANNEL_FORM_FIELDS = {
    CHANNEL_NAME: 'channel_name'
}

const InviteChannelForm = () => {
    const { channels, createChannel } = useChannels()
    const initial_new_channel_state = {
        [NEW_CHANNEL_FORM_FIELDS.CHANNEL_NAME]: ''
    }
    const { form_state, onInputChange, handleSubmit } = useForm(

        initial_new_channel_state,
        createChannel

    )
    return (
        <div className="body-container">
            <form className="form" onSubmit={handleSubmit}>
                <span className="input-span">
                    <label htmlFor="channel_name" className="label">Nombre del canal:</label>
                    <input
                        type="text"
                        placeholder='Nuevo canal'
                        id='channel_name'
                        name='channel_name'
                        onChange={onInputChange}
                        value={form_state[NEW_CHANNEL_FORM_FIELDS.CHANNEL_NAME]}
                    /></span>
                <input className="submit" type="submit" defaultValue="Crear" />

            </form>
        </div>
    )
}

export default InviteChannelForm
