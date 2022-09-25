// main
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import { UserForm } from '../services/srvc-utilities';


export default function Assist() {
  

  return (
    <ContentFormatXX 
      head = {'Help & Resources'}
      home = {`/`}
      link = {`/${UserForm()}/home`}
      form = {'mini'}
      data = {
        <>
          <WebbDividerSmall />
          <p>Help and Resources </p>
          
        </>
        
      }  
    /> 
  )
}