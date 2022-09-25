// auth
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import AuthMailCheckModule from '../content/auth/auth-mail-check';


export default function AuthMailCheck() {
  

  return (
    <ContentFormatXX 
      name = {'Account Access'}
      home = {`/`}
      link = {`/`}
      head = {'small'}
      form = {'small'}
      data = {
        <>
          <WebbDividerMedium />
          <AuthMailCheckModule />
          
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
          <WebbDividerMedium />
        </>
        
      }  
    /> 
  )
}
