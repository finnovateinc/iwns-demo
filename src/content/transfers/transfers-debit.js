// channels
import { useState } from "react";
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Result } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { ethers } from "ethers";

const { TextArea } = Input;


export default function TransfersDebitModule () {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const history = useHistory();
  // console.log (asset)
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);


  var provider = new ethers.providers.Web3Provider(window.ethereum)
  

  const [data, setData] = useState({
    mode: 'emid',
    emid: asset.emid,
    code: '',
    trxn: ''
  });

  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }

  const onFinish = async (values) => {

    console.log (values)
    // setSubmit(true)
    // setLoading(true)
    const acnt = await provider.send("eth_requestAccounts", []);
    // console.log (acnt)

    // provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/');

    var signer = provider.getSigner(acnt[0])
    // console.log (provider)
    // console.log (signer)

    const tx = await signer.sendTransaction({
      to: values.cred,
      value: ethers.utils.parseEther(values.amnt.toString())
    });
    console.log (tx)

    // setLoading(false)
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
        initialValues={{ }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
        <Form.Item
          label="Account"
          name="cred"
          rules={[{ required: false, message: 'Please enter account' }]}
        >
          <Input 
            placeholder="0x123456" 
            className="height-md border-none"
          />
        </Form.Item>

        <Form.Item
          label="Amount"
          name="amnt"
          rules={[{ required: false, message: 'Please enter amount' }]}
        >
          <Input 
            placeholder="123.45"
            className="height-md border-none"
          />
        </Form.Item>

        <WebbDividerMedium />
        
        <Button 
          type="primary" 
          htmlType="submit" 
          className={`height-md`} style={{width:'100%'}}>
          Transfer Now
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