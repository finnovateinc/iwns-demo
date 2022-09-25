// main
import ContentFormatXC from "../content/webz/content-format-xc";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import { UserForm } from "../services/srvc-utilities";

import WebbDividerHead from "../content/webx/webb-module-head";

export default function Memo() {

  return (
  <>
    <ContentFormatXC 
      head='Home'
      link={`/${UserForm()}/home`}
      form= 'small'
      data= {
        <>
          <WebbDividerSmall />
          <WebbDividerHead data={{text:'Memo'}}/>

        </>
      } 
    />
  </>
  )
}