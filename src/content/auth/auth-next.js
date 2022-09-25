import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; 

import { Typography, Row, Col } from 'antd';

import WebbLoader from "../webx/webb-loader";
import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbModuleInfo from "../webx/webb-module-info";

import NextIntro from "../webx/next-intro";
import NextAccounts from "../webx/next-accounts";
import NextDivider from "../webx/next-divider";
import NextBusiness from "../webx/next-business";
import NextLogout from "../webx/next-logout";

import { AuthGetUserRoles } from '../../services/srvc-auth-realm';
import { GetAuthUser, SetLocalUser, SetLocalBusiness } from '../../services/srvc-auth-user';
import { SetNewUser, SetNewBusiness } from '../../services/srvc-auth-user';


export default function AuthNextModule () {

  // console.log ('123')
  const asset = GetAuthUser();
  console.log (asset)
  const [user,setUser] = useState({});
  const [loading,setLoading] = useState(true);

  const history = useHistory();

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        setLoading(true);
        const datx = {
          data: asset,
          user: ""
        }
        
        const result = (await AuthGetUserRoles(datx))
        if (!result) window.location.reload()
        console.log (result)
        setUser(result.data)
        setLoading(false);
      }
      fetchData()
    } else {}
  },[asset.user]);


  const newUser = () => {
    SetNewUser({usid:''})
    if (user) {
      SetNewUser({usid:user[0].usid})
      console.log(user[0].usid)
    }
    history.push(`/onboard/user`)
  }

  const newBusiness = () => {
    SetLocalUser(user[0]);
    SetNewBusiness({usid:''})
    history.push(`/onboard/daos`)
  }

  const onboardUser = (usxx) => {

    if (usxx.form === 'indx'){
      SetNewUser({usid:usxx.usid});
      console.log(usxx.usid);
    }

    if (usxx.form === 'bznx'){
      SetLocalUser(user[0]);
      SetNewBusiness({usid:usxx.usid});
      console.log(usxx.usid);
    }
    
    const base = usxx.form === 'indx' ? `onboard` : `business`
    
    if (!usxx.onbd.obnm)  history.push(`/${base}/name`)
    else {
      if (!usxx.onbd.obcr) history.push(`/${base}/docs`)
      else {
        if (!usxx.onbd.obdc) history.push(`/${base}/docs`)
        else {
          if (!usxx.onbd.obcm) history.push(`/${base}/contact`)
          else {
            if (!usxx.onbd.oblc) history.push(`/${base}/location`)
            else {
              if (!usxx.onbd.obtr) history.push(`/${base}/terms`)
            }
          }
        }
      }
    }

  }

  const nextuseraction = (usxx) => {
    if (usxx.actv) {
      usxx.form === 'indx' 
        ? SetLocalUser (usxx)
        : SetLocalBusiness (usxx)
        
        history.push (`/${usxx.form.substring(0,2)}/home`);
    }
    else onboardUser (usxx)
  }

  if (loading) 
  return (<> <WebbLoader /> </>)
  
  // user does not exist or user was added contact or refer
  if (!(user && user[0].self)) {
    return (
      <>
        <WebbDividerSmall />
        <NextIntro stat={'new'} />
        <WebbDividerSmall />
        <div className={`p-1 px-2 back-color-main text-color-wite hidark`}
          style={{cursor:'pointer'}}
          onClick={() => newUser()}
            >
              <Row justify="space-between">
                <Col span={21}>
                  <Row justify="start" align="middle">
                    <Col>
                      <i className="lead bx bx-user-circle text-color-wite m-0 text-icon-sm"></i>
                    </Col >
                    <Col flex="auto" className="mx-1">Create Account</Col>
                  </Row>
                </Col>

                <Col span={3} className="text-end">
                  <i className="bx bx-chevron-right text-color-wite m-0 text-icon-sm" ></i>
                </Col>
              </Row>
            </div>

        {/* create a new user here and then onboard */}
        <WebbDividerSmall />
        <NextDivider />
        <NextLogout />

      </>
    )
  }

  // user has incomplete onboarding steps
  if (!(user && user[0].onbx)) {
    return (
      <>
        <WebbDividerSmall />
        <NextIntro stat={'incomplete'} />
        <WebbDividerMedium />
        <div className="text-center">
          <button onClick={async ()=> { onboardUser(user[0]) }} 
            className="btn btn-primary back-color-next border-none rounded-pill px-3">
            <small>Update Account</small>
          </button>
        </div>
        <WebbDividerSmall />
        <NextDivider />
        <NextLogout />
      </>
    )
  }

  if (!(user && user[0].actv)) {
    return (
      <>
        <WebbDividerSmall />
        <NextIntro stat={'review'} />
        <WebbDividerSmall />
        <NextDivider />
        <NextLogout />
      </>
    )
  }


  if ((user && user[0].hold)) {
    return (
      <>
        <NextIntro stat={'hold'} />
        <WebbDividerSmall />
        <NextDivider />
        <NextLogout />
      </>
    )
  }
  
  
  return (
    <>
    {/* info  */}
    <WebbDividerSmall />
    <WebbModuleInfo data={{text:'Please select an account to continue'}} />
    <WebbDividerSmall />

    {/* personal */}
    <NextAccounts 
      data={user.filter(item => item.form==='indx')}
      form={'Personal'}
      user={nextuseraction}
    />
    
    <WebbDividerMedium />
    {/* business */}
    <NextAccounts
      data={user.filter(item => item.form==='bznx')} 
      form={'Business'}
      user={nextuseraction}
    />

    {/* actions */}
    <WebbDividerSmall />
    <NextDivider />
    <div className="d-none" onClick={() => { newBusiness(); }}>
      <NextBusiness/>
    </div>

    <WebbDividerSmall />
    <NextLogout />
    
    
  </>
  )
  
}