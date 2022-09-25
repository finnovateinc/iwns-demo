// user avatar
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Drawer, Card } from 'antd';

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

export default function UserAvatar(props) {
  
  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();

  const history = useHistory();
  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <div className='py-1' onClick={()=>setDrawer(!drawer)}  style={{cursor:'pointer'}} >
        {
          asset
          ? <Jazzicon diameter={30} seed={jsNumberForAddress(asset.usid)} /> 
          : <i className='bx bxs-user-circle text-icon-md text-color-lite'></i>
        }
      </div>

      <Drawer 
        title="My Account" 
        placement="right" 
        width={330}
        footer= {`${process.env.REACT_APP_WEBB_SITE_NAME} - ${process.env.REACT_APP_WEBB_SITE_LINE}`}
        bodyStyle={{margin:'0', padding:'0', backgroundColor:'#F5F8FA'}}
        headerStyle={{backgroundColor:'#ECF1F4', color:'white', margin:'0', padding:'0', height:'3.7rem'}}
        closeIcon= {''}
        onClose={()=>setDrawer(false)} 
        extra={
          <div className='me-3' onClick={()=>setDrawer(false)} style={{cursor:'pointer'}} >
            <i className='bx bx-x text-icon-md text-color-tint'></i>
          </div>
        }
        visible={drawer} >
        
        {/* user actions */}
        <div className='p-3'>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card title="" size="small">
              <h3 className='text-color-main'>{asset && asset.name || 'Alice Wonderland'}</h3>
              <p className='m-0 d-none'>{asset && asset.emid || 'alice@wize.ws'}</p>
              <p className='m-0'>{asset && asset.form === 'indx' ? 'Personal' : 'Business' || 'Wize'} Account</p>
            </Card>
            <Card title="" size="small"
              onClick={()=>history.push(`/${asset.form.substring(0,2)}/settings`)} 
              style={{cursor:'pointer'}}>
              <span className=''>Settings</span>
            </Card>
            <Card title="" size="small" 
              onClick={()=>history.push(`/auth/next`)} 
              style={{cursor:'pointer'}}>
              <span className=''>Switch Accounts</span>
            </Card>
            <Card title="" size="small" 
              onClick={()=>history.push(`/auth/x`)} 
              style={{cursor:'pointer'}}>
              <span className=''>Logout</span>
            </Card>
          </Space>
          
        </div>
       </Drawer>

    </>
  )
}