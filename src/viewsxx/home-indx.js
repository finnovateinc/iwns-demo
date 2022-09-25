// main
import ContentFormatXC from "../content/webz/content-format-xc";
import WebbDividerSmall from "../content/webx/webb-divider-sm";
import WebbDividerMedium from "../content/webx/webb-divider-md";

import { UserForm } from "../services/srvc-utilities";

import WebbDividerHead from "../content/webx/webb-module-head";

import UserInfoCardModule from "../content/home/user-infocard";
import UserStatsModule from "../content/home/user-stats";
import UserTasksModule from "../content/home/user-tasks";

import AccountsListModule from "../content/accounts/accounts-list";
import ChannelsListModule from "../content/channels/channels-list";


export default function HomeUser() {

  const form = UserForm();
  
  return(
    <ContentFormatXC 
      name = 'IWNS'
      home = {`/${form}/home`}
      link = {`/${form}/home`}
      head = 'small'
      form = 'small'
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