// main
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import OnboardUserModule from '../content/onboard/onboard-user';


export default function OnboardUser() {
  

  return (
    <ContentFormatXX 
      name = {'Account Access'}
      home = {`/`}
      link = {`/auth/next`}
      head = {'small'}
      form = {'small'}
      data = {
        <>
          <WebbDividerMedium />
          <OnboardUserModule />
          
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
