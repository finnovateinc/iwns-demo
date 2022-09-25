// channels
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Result } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { CreatePasscode, CheckPasscode } from "../../services/srvc-code-realm";
import { CreateChannel } from "../../services/srvc-channels-realm";


const { TextArea } = Input;


export default function ChannelsNewMailModule () {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const history = useHistory();
  // console.log (asset)
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);

  const [code, setCode] = useState(false);

  const [data, setData] = useState({
    mode: 'emid',
    emid: asset.emid,
    code: '',
    trxn: ''
  });

  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }

  const GetCode = async() => {
    
    setCode(true)
    alert('Code has been sent to your email')
    
    const datx = {
      user: data.emid,
      form:'emid',
      memo: 'Email Verification'  
    }

    console.log (datx)
    const result = await CreatePasscode({data: datx, user: asset.usid})
    console.log (result)

    await handleChange('trxn', result.data.trxn)

  }

  const onFinish = async (values) => {

    setSubmit(true)
    setLoading(true)

    const datx = {
      user: values.emid,
      code: values.code,
      trxn: data.trxn,
      form:'emid', 
    }
    console.log (datx)
    const result = await CheckPasscode({data: datx, user: asset.usid})
    console.log (result)
    if (result.data) {
      const res = await CreateChannel({data: {usid: asset.usid, form: 'emid', nmbr: data.emid}, user: asset.usid})
      console.log (res)
      setDone(true)      
    }

    setLoading(false)
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
        initialValues={{ emid: isNaN(asset.emid) ? asset.emid : '' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
      <Form.Item
        label="Email"
        name="emid"
        
        rules={[{ required: true, message: 'Please enter email' }]}
      >
        <Input 
          placeholder="alice@socket.fi" 
          className="height-md border-none"
          disabled={code}
          onChange={(e)=> { handleChange ('emid', e.target.value);} }
        />
      </Form.Item>

      <Form.Item
        label="Passcode"
        name="code"
        rules={[{ required: true, message: 'Please enter code' }]}
      >
        <Input 
          placeholder="123456"
          className="height-md border-none"
          disabled={!code}
        />
      </Form.Item>

      <WebbDividerMedium />
      
        <Button 
          type="primary" 
          onClick={() => GetCode()} 
          className={`height-md ${code ? 'd-none': ''}`} style={{width:'100%'}}>
          Get Passcode
        </Button>

        <Button 
          type="primary" 
          htmlType="submit" 
          className={`height-md ${code ? '': 'd-none'}`} style={{width:'100%'}}>
          Submit Passcode
        </Button>

      </Form>
    </div>

    <div className={submit ? 'back-color-wite p-3 text-center mb-3' : 'd-none'}>
      <WebbDividerSmall />
      
      <Result
        status="success"
        title="Congratulations!"
        subTitle="Channel Added"
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