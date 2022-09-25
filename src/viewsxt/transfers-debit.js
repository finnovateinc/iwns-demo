// main
import ContentFormatXX from '../content/webz/content-format-xx';
import WebbDividerSmall from '../content/webx/webb-divider-sm';
import WebbDividerMedium from '../content/webx/webb-divider-md';

import { UserForm } from '../services/srvc-utilities';

import TransfersDebitModule from '../content/transfers/transfers-debit';

export default function TransfersDebit() {
  

  return (
    <ContentFormatXX 
      head = {'Transfers Debit'}
      home = {`/`}
      link = {`/${UserForm()}/home`}
      form = {'mini'}
      data = {
        <>
          <WebbDividerSmall />
          <TransfersDebitModule />
          
        </>
        
      }  
    /> 
  )
}