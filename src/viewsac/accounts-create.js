// main
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import { UserForm } from '../services/srvc-utilities';

import AccountsCreateModule from '../content/accounts/accounts-create';

export default function AccountsCreate() {
  

  const form = UserForm();

  return (
    <ContentFormatXX 
      name = {'Link Account'}
      home = {`/${form}/home`}
      link = {`/${form}/home`}
      head = {'small'}
      form = {'small'}
      data = {
        <>
          <WebbDividerMedium />
          <AccountsCreateModule />
          
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