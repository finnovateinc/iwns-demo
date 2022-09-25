// main
import ContentFormatXC from "../content/webz/content-format-xc";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";
import WebbModuleHead from "../content/webx/webb-module-head";
import WebbSectionHead from "../content/webx/webb-section-head";

import { UserForm } from '../services/srvc-utilities';

export default function HomeBusiness () {
  
  const form = UserForm();
  console.log (form)

  return(
    <ContentFormatXC 
      name = 'Home'
      home = {`/${form}/home`}
      link = {`/${form}/home`}
      head = 'medium'
      form = 'medium'
      avtr = { <> </> }
      data = {
        <>
          
          <WebbDividerSmall />
          <UserInfoCardModule />
          
          <UserStatsModule />

          <WebbDividerSmall />
          <UserTasksModule />

          <WebbDividerSmall />
          <WebbDividerHead data={{text:'Accounts'}}/>
          <AccountsListModule />

          <WebbDividerMedium />
          <WebbDividerHead data={{text:'Channels'}}/>
          <ChannelsListModule />
        </>
      } 
    />
  )
}