// channels
import { useHistory, useParams } from 'react-router-dom';

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import ChannelsNewModule from './channels-new';
import ChannelsNewMailModule from './channels-new-mail';
import ChannelsNewTextModule from './channels-new-text';
import ChannelsNewWhatsappModule from './channels-new-whts';


// list --------------->
const list = [
  {form: "emid", item: <ChannelsNewMailModule />},
  {form: "text", item: <ChannelsNewTextModule />},
  {form: "whts", item: <ChannelsNewWhatsappModule />},
  {form: "dcrd", item: ""},
  {form: "twtr", item: ""},
  {form: "tele", item: ""}
]


// code --------------->


export default function ChannelsCreateModule () {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const history = useHistory();

  const {id} = useParams();

  if (id==="" || list.findIndex(x => x.form === id)<0) return <><ChannelsNewModule /></>

  return (
  <>
    {/* info */}
    
    {/* data */}
    {id==="" ? '' : list.find(item => item.form===id).item}


  </>

  )
}