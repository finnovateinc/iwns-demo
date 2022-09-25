// contacts
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Input, Table, Tag, Space, Row, Col } from 'antd';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";
import WebbSpinner from "../webx/webb-spinner";
import WebbNoData from "../webx/webb-nodata";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { GetUserChannels, SetChannelStatus } from "../../services/srvc-channels-realm";


// ------ list ------ >
const listChannels = require('../../data/data-channels.json').data


export default function ChannelsListModule () {

  const usxx = UserForm()
  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const history = useHistory();

  const [loading, setLoading] = useState(true);  
  
  const [list, setList] = useState([])
  const [data, setData] = useState([])

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        // setLoading(true);
        const result =  ((await GetUserChannels(({
          data: {usid: asset.usid, item: 100, cntr: 1},
          user: asset.usid
        }))).data)
        console.log (result)
        //const res = Array.from(result, item => {return {...item, link:`/${usxx}/transfers/v/${item.wize}/${item.enid}`}})
        
        const res = (Array.from(result, x => { return {
          name: listChannels.find(item => item.code === x.form).name,
          icon: listChannels.find(item => item.code === x.form).icon,
          form: x.form,
          nmbr: x.nmbr,
          enid: x.enid,
          actv: x.actv
        }}))

        setList(listChannels)
        setData(res)
        setLoading(false);
      }
      fetchData()
    } else {}
  },[asset.usid]);


  const handleChange = async(key, val) => {
    setData({ ...data, [key]: val });
  }

  const handleChannelStatus = async(x, stat) => {
    console.log (x)
    console.log ('stat', stat)
    
    // console.log (datx)
    setData(data => {return [...data.slice(0,x), {...data[x], actv: !stat} , ...data.slice(x+1)]})

    const result = await SetChannelStatus({data: {enid: data[x].enid, actv:!stat}, user: asset.usid})
    console.log (result)
  }


  if (loading) return <WebbSpinner />
  if (!data || data.length===0) 
  return <p className="text-color-tone">No Available Channels. Please Add via Dashboard</p>

  return (
  <>

    {/* data */}
    <div className={``}>
    {data && data.map((item, i) => (
      <div className={`back-color-wite p-2 border-bottom`} key={i}>
      <Row justify="space-between" align="middle" >
        <Col span={21}>
          <Row justify="start" align="middle">
            <Col>
            <i className={`text-color-main m-0 text-icon-sm bx ${item.icon}`}></i>
            </Col >
            <Col flex="auto" className="mx-1">
              <p className="text-bold m-0 text-sm">{item.nmbr}</p>
              <p className="text-small m-0">{item.name}</p>
            </Col>
          </Row>
        </Col>
        <Col span={3} className="text-end">
          <Row justify="center" align="middle"
            className={`text-center hidark ${item.actv ? 'back-color-next' : 'back-color-lite'}`}
            style={{width:'2.4rem', height:'2.4rem', borderRadius:'50%', cursor:'pointer'}}
            onClick={() => handleChannelStatus(i, item.actv)}
            ><i className={`bx ${item.actv ? 'bx-check text-color-wite' : 'bx-x text-color-tint'}`} style={{fontSize:'1.25rem'}}></i>
          </Row>
        </Col>
      </Row>
      </div>
    ))}

    </div>

    {/* search */}
    <div className={`d-none`}>
      {list && list.map((item, i) => (
        <div className={`back-color-wite p-2 border-bottom`} key={i}>
          <Row justify="space-between" align="middle" >
            <Col span={21}>
              <Row justify="start" align="middle">
                <Col>
                  <i className={`text-color-main m-0 text-icon-sm bx ${item.icon}`}></i>
                </Col >
                <Col flex="auto" className="mx-1">
                  <p className="text-bold m-0 text-sm">{item.actv ? '': item.name}</p>
                  <p className="text-small m-0">{item.actv ? '': 'Coming Soon'}</p>
                </Col>
              </Row>
            </Col>
            <Col span={3} className="text-end">
              <Row justify="center" align="middle"
                className={`text-center hidark ${item.actv ? 'back-color-next' : 'back-color-lite'}`}
                style={{width:'2.4rem', height:'2.4rem', borderRadius:'50%', cursor:'pointer'}}
                onClick={() => handleChannelStatus(i, item.actv)}
                ><i className={`bx ${item.actv ? 'bx-check text-color-wite' : 'bx-x text-color-tint'}`} style={{fontSize:'1.25rem'}}></i>
              </Row>
            </Col>
          </Row>
        </div>
      ))}
    </div>
    <WebbDividerMedium />

  </>

  )
}