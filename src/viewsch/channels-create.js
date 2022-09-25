// main
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import { UserForm } from '../services/srvc-utilities';

import ChannelsCreateModule from '../content/channels/channels-create';

export default function ChannelsCreate() {
  

  const form = UserForm();

  return (
    <ContentFormatXX 
      name = {'Link Channel'}
      home = {`/${form}/home`}
      link = {`/${form}/channels/new`}
      head = {'small'}
      form = {'small'}
      data = {
        <>
          <WebbDividerMedium />
          <ChannelsCreateModule />
          
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