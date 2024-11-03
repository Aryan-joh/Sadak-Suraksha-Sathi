import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='24725684081-s1qv0a7q4bbdqk2qq7ql9mpi13gvagej.apps.googleusercontent.com'>
      <StrictMode>
    <App />
  </StrictMode>,
  </GoogleOAuthProvider>

)
