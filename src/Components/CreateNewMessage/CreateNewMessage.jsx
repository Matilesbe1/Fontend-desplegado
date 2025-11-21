
import React from 'react'
import useForm from '../../hooks/useForm'
import './CreateNewMessage.css'

const CreateNewMessage = ({ onSubmit }) => {

    const new_message_form_field = {
        content: 'content',
    }
    const initial_new_message_state = {
        [new_message_form_field.content]: ''
    }

    const { form_state, onInputChange, handleSubmit } = useForm(
        initial_new_message_state,
        onSubmit

    )
    console.log(onInputChange);

    return (
        <div className='input-container'>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <div className="inputbox">
                        <label htmlFor="content"></label>
                        <input className='input'
                            type="text"
                            placeholder='Nuevo mensaje'
                            id='content'
                            name='content'
                            onChange={onInputChange}
                            value={form_state[new_message_form_field.content]} />
                        <i />
                    </div>
                    <button type='submit' className='send-button'>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </button>

                </div>
            </form>
        </div>
    )
}

export default CreateNewMessage


/* 
const InviteChannelForm = () => {
    const { channels, createChannel } = useChannels()
        const initial_new_channel_state = {
        [NEW_CHANNEL_FORM_FIELDS.CHANNEL_NAME]: ''
    }
    const { form_state, handleInputChange, handleSubmit } = useForm(
        {
            initial_form_state: initial_new_channel_state,
            onSubmit: createChannel
        }
    )
    return (
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="channel_name">Nombre del canal:</label>
                    <input
                        type="text"
                        placeholder='Nuevo canal'
                        id='channel_name'
                        name='channel_name'
                        onChange={handleInputChange}
                        value={form_state[NEW_CHANNEL_FORM_FIELDS.CHANNEL_NAME]}
                    />
                </div>
                <button type='submit'>Crear</button>
            </form>
    )
} */