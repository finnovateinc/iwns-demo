// auth - firebase mail link
import { useState } from "react";

import { auth } from '../../services/firebase'
import { sendSignInLinkToEmail } from "firebase/auth";

import { Form, Input, Button, Result } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";


export default function AuthMailFirebaseModule () {

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);

  const onFinish = async (values) => {

    console.log('username:', values);
    console.log (form)
    localStorage.clear();

    setSubmit(true)
    setLoading(true)

    const base = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000'
      : process.env.REACT_APP_WEBB_SITE_SITE

    const actionCodeSettings = {
      url:  base + '/auth/mail/check',
      handleCodeInApp: true
    };

    await sendSignInLinkToEmail(auth, values.username, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem('authmail', values.username  );
      setDone(true)
    })
    .catch((error) => {
      setDone(false)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
    
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
        name="auth"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
      <Form.Item
        label="Email Address"
        name="username"
        rules={[{ required: true, message: 'Please enter your email!' }]}
      >
        <Input placeholder="alice@socket.fi" className="height-md border-none"/>
      </Form.Item>

      <WebbDividerMedium />
      
        <Form.Item wrapperCol={{}}>
          <Button type="primary" htmlType="submit" className="height-md " style={{width:'100%'}}>
            Get Access Link
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

      <div className="text-center p-1" 
        onClick={() => {setSubmit(false); setDone(false)}}
        style={{cursor:'pointer'}}
        >
        <p className="text-color-tone">Try Again / Use Different Email</p>
      </div>

    </div>

  </>

  )
}