// auth
import ContentFormatXZ from "../content/webz/content-format-xz";

import AuthSessionXModule from "../content/auth/auth-session-x";

export default function AuthSessionX () {



  return (
    <ContentFormatXZ 
      name = {'Account Access'}
      home = {`/`}
      link = {`/`}
      head = {'small'}
      form = {'small'}
      data = {
        <>
          
          <AuthSessionXModule />
          

        </>
        
      }  
    /> 
  )
}
