import { Link, useNavigate, useParams } from "react-router"
import useForm from "../../hooks/useForm"
import "./CreateWorkspaceForm.css"


const CreateWorkspace = ({ onSubmit }) => {
    const navigate = useNavigate()
    const new_workspace_form_fields = {
        name: 'name'
    }

    const initial_new_workspace_state = {
        [new_workspace_form_fields.name]: ''  
    }
    const { form_state, onInputChange, handleSubmit } = useForm(

        initial_new_workspace_state,
        onSubmit

    )
    console.log(initial_new_workspace_state);



    return (
        <div className="body-container">
            <Link to={'/home'}><i class="bi bi-arrow-left arrow"></i></Link>
            <form className="form" onSubmit={handleSubmit}>
                <span className="input-span">
                    <label htmlFor="name" className="label">Nombre del workspace:</label>
                    <input
                        type="text"
                        placeholder='Nuevo workspace'
                        id='name'
                        name='name'
                        onChange={onInputChange}
                        value={form_state[new_workspace_form_fields.name]}
                    /></span>
                <input className="submit" type="submit" defaultValue="Crear"  onClick={() => alert('workspace creado con exito')}/>
            </form>
        </div>
    )
}

export default CreateWorkspace