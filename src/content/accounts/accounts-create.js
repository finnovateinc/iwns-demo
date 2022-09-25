// channels
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Result, Select } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { CreateAccount } from "../../services/srvc-accounts-realm";

const { Option } = Select;
const networklist = require('../../data/data-network-list.json').data.filter(item => item.actv)


export default function AccountsCreateModule () {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const history = useHistory();
  // console.log (asset)
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState(false);

  const [code, setCode] = useState(false);

  const [list, setList] = useState();
  const [data, setData] = useState();

  useEffect(() => { 
    setList(networklist)
    setLoading(false)
  },[])

  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }


  const onFinish = async (values) => {

    setSubmit(true)
    setLoading(true)

    const datx = {
      usid: asset.usid,
      acnt: values.acnt,
      ntwk: values.ntwk
    }
    console.log (datx)
    const result = await CreateAccount({data: datx, user: asset.usid})
    console.log (result)

    if (result.data) setDone(true)

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
          label="Account"
          name="acnt"
          rules={[{ required: true, message: 'Please enter account' }]}
        >
          <Input 
            placeholder="0x123456" 
            className="height-md border-none"
          />
        </Form.Item>

        <Form.Item
          label="Network"
          name="ntwk"
          rules={[{ required: true, message: 'Please enter code' }]}
        >
        <Select className="back-color-wite text-small" 
          size="large"
          bordered={false}>
          {list && list.map((item, i) => (
            <Option value={item.code} key={i} >{item.name} - {item.mode}</Option>
          ))}
        </Select>
        </Form.Item>

        <WebbDividerMedium />

        <Button 
          type="primary" 
          htmlType="submit" 
          className={`height-md`} style={{width:'100%'}}>
          Link Account
        </Button>

      </Form>
    </div>

    <div className={submit ? 'back-color-wite p-3 text-center mb-3' : 'd-none'}>
      <WebbDividerSmall />
      
      <Result
        status="success"
        title="Congratulations!"
        subTitle="Account Added"
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