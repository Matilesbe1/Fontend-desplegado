import React from 'react'
import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import AuthMiddleware from './Middleware/AuthMiddleware.jsx'
import WorkspaceScreen from './Screens/WorkspaceScreen/WorkspaceScreen'
import ChannelDetail from './Components/ChannelDetail/ChannelDetail'
import InviteScreen from './Screens/InviteScreen/InviteScreen.jsx'
import InviteChannelForm from './Components/InviteChannelForm/InviteChannelForm.jsx'
import ChatScreen from './Screens/ChatScreen/ChatScreen.jsx'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route element={<AuthMiddleware />} >
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
          <Route path='/workspace/.workspace_id/invite' element={<InviteScreen/>}/>
          <Route path='/workspaces/:workspace_id/channels/:channel_id/messages' element={<ChatScreen/>}/>
          <Route path='/createChannel' element={<InviteChannelForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
