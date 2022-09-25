// channels
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Result } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";


export default function ChannelsNewWhatsappModule () {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const history = useHistory();
  // console.log (asset)

  const [loading, setLoading] = useState(false);

  const JoinSandbox = async() => {
    // window.location.href('http://wa.me/+14155238886?text=join%20slabs-mile')
    window.open('http://wa.me/+14155238886?text=join%20slabs-mile', '_blank');
  }

  const CreateChannel = async() => {
    window.open(`http://wa.me/+14155238886?text=register%20${asset.usid}`, '_blank');

  }


  if (loading) return <WebbLoader/>


  return (
  <>
    <div className={'back-color-wite p-3'}>
      To Create WhatsApp Channel, <br></br>Please complete following 2 steps
    </div>
    <WebbDividerMedium />

    <div className={'back-color-wite p-3'}>

      <p className="text-bold">Step 1</p>
      <p>Send a WhatsApp message from your device to <strong>+14155238886</strong> with code <strong>join slabs-mile</strong></p>
      <p>If WhatsApp is installed on this device, you can click below</p>
      <Button 
          type="primary" 
          htmlType="button" 
          className={`height-md`} style={{width:'100%'}}
          onClick={()=> JoinSandbox()}
          >Join Sandbox
      </Button>
    
      <WebbDividerMedium />
      <WebbDividerMedium />

      <p className="text-bold">Step 2</p>
      <p>Send a WhatsApp message from your device to <strong>+14155238886</strong> with code <strong>register {asset.usid}</strong></p>
      <p>If WhatsApp is installed on this device, you can click below</p>
      <Button 
        type="primary" 
        htmlType="button" 
        className={`height-md`} style={{width:'100%'}}
        onClick={()=> CreateChannel()}
        >Create Channel
      </Button>

    </div>



  </>

  )
}