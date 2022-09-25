// main
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import { UserForm } from '../services/srvc-utilities';

import ChannelsNewModule from '../content/channels/channels-new';

export default function ChannelsNew() {
  

  const form = UserForm();

  return (
    <ContentFormatXX 
      name = {'Link Channel'}
      home = {`/${form}/home`}
      link = {`/${form}/home`}
      head = {'small'}
      form = {'small'}
      data = {
        <>
          <WebbDividerMedium />
          <ChannelsNewModule />
          
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