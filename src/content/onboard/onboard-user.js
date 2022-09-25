// onboard
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Result } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";

import { GetAuthUser, SetNewUser, GetNewUser } from "../../services/srvc-auth-user";
import { NewUserAccount, SetUserName } from "../../services/srvc-user-realm";

const { TextArea } = Input;


export default function OnboardUserModule () {

  const asset = GetAuthUser();
  const usrx = GetNewUser();

  const history = useHistory();
  
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);

  const [data, setData] = useState({
    name: '',
    bios: '',
    mmid: isNaN(asset.user) ? '' : asset.user,
    mmvr: isNaN(asset.user) ? false : true,
    emid: isNaN(asset.user) ? asset.user : '',
    emvr: isNaN(asset.user) ? true : false,
    form: 'indx'
  });

  const onFinish = async (values) => {

    setSubmit(true)
    setLoading(true)

    const datx = {
      data: {
        ...data, 
        name: values.name,
        bios: values.bios,
        mail: values.emid,
        active: true, self: true
      },
      user: (usrx.usid!=='') ? usrx.usid : asset.user
    }
    console.log (datx)
    var res = {} 
    if (usrx.usid==='') res = await NewUserAccount(datx)
    else res = await SetUserName(datx)
    // console.log(res)
    
    if (res.data) {
      SetNewUser({usid:res.data})
      setLoading(false);
      history.push(`/auth/next`);
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (loading) return <WebbLoader/>


  return (
  <>
    <div className={submit ? 'd-none' : ''}>
      <Form
        name="form"
        layout="vertical"
        initialValues={{ emid: isNaN(asset.user) ? asset.user : '' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter name' }]}
      >
        <Input placeholder="Alice Wonderland" className="height-md border-none"/>
      </Form.Item>

      <Form.Item
        label="About Me (Bio)"
        name="bios"
        rules={[{ required: true, message: 'Please enter bio' }]}
      >
       <TextArea rows={3} placeholder="Write About Me" className="border-none" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="emid"
        rules={[{ required: true, message: 'Please enter email' }]}
      >
        <Input 
          placeholder="alice@wize.ws"
          disabled={isNaN(asset.user) ? true : false} 
          className="height-md border-none"
        />
      </Form.Item>

      <WebbDividerMedium />
      
        <Form.Item wrapperCol={{}}>
          <Button type="primary" htmlType="submit" className="height-md" style={{width:'100%'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

    <div className={submit ? 'back-color-wite p-3 text-center mb-3' : 'd-none'}>
      <WebbDividerSmall />
      
      <Result
        status="success"
        title="Access Link Sent!"
        subTitle="Please check your email."
        className={done ? '' : 'd-none'}
      />
      
      <Result
        status="warning"
        title="We Caught a Bug!"
        subTitle="Please try again."
        className={done ? 'd-none' : ''}
      />

    </div>

  </>

  )
}