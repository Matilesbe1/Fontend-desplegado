import React, { useEffect } from 'react'
import { getWorkspaces } from '../../services/workspaceService.js'
import useFetch from '../../hooks/useFetch.jsx'
import { Link } from 'react-router'
import './HomeScreen.css'

const HomeScreen = () => {

  const {sendRequest, response, loading, error }= useFetch()

  useEffect(
    ()=>{
    sendRequest(
      ()=>getWorkspaces()
    )
  }, [])
  console.log(response, loading, error)
  return (
    <div className='list-workspace-container'>
      <h1 className='list-workspace-title'>Lista de espacios de trabajo</h1>
      {
        loading
        ? <span className='loading-span'>Cargando...</span>
        : <div className='list-workspace-workspaces-container'>
          {
          response 
          && 
          response.data.workspaces.map(
            (workspace) => {
              
              return (
                <div className='list-workspace-workspaces'>
                  <h2><i class="bi bi-suitcase-lg-fill"></i>{workspace.workspace_name}</h2>
                  <Link to={'/workspace/' + workspace.workspace_id} className='button-workspace'><span className='button-content'>Select</span></Link>
                  
                </div>
              )
            }
          )
          }
        </div>
      }
    </div>
  )
}

export default HomeScreen