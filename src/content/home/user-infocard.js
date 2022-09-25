// userinfo
import { useState } from "react";
import { Row, Col } from 'antd';

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import WebbLoader from "../webx/webb-loader";

import avtx from '../../media/user.png';

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";


export default function UserInfoCardModule () {

  
  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();

  const [loading, setLoading] = useState(false);

  if (loading) return <WebbLoader/>

  return (
  <>
    <div className={`p-1 px-2 back-color-wite`} >
      <Row justify="space-between">
        <Col className="">
          <p className="text-bold text-lead m-0">{asset && asset.name || 'Alice Wonderland'}</p>
          <p className="m-0">{asset && asset.form === 'indx' ? 'Personal' : 'Business' || 'Wize'} Account</p>
        </Col>
        <Col className="text-end " style={{padding:'0.25rem '}}>
          <div className={`text-center back-color-wite`} >
            <Jazzicon diameter={42} seed={jsNumberForAddress(asset.usid)} />
            <img src={avtx} className="d-none" style={{width:'2.4rem', height:'2.4rem', borderRadius:'50%'}}></img>
          </div>
        </Col>
      </Row>
    </div>
  </>

  )
}