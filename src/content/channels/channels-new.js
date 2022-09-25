// channels
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbModuleInfo from "../webx/webb-module-info";
import WebbLoader from "../webx/webb-loader";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { Row, Col  } from 'antd';

// list --------------->
const listChannels = require('../../data/data-channels.json').data



// code --------------->



export default function ChannelsNewModule () {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const [data, setData] = useState()

  useEffect(() => { 
    setData(listChannels)
    setLoading(false)
    
  },[])



  if (loading) return <WebbLoader/>

  return (
  <>
    {/* info */}
    <div className={''}>
      <WebbModuleInfo data={{text:'Select Channel'}} />
    </div>
    <WebbDividerSmall />


    {/* data */}
    <div className={``}>
      {data && data.map((item, i) => (item ?
        <div className={`p-1 px-2 back-color-wite hilite mb-1`} key={i}
          style={{cursor:'pointer'}}
          onClick={() => history.push(`/${asset.form.substring(0,2)}/channels/new/${item.actv ? item.code: ''}`)}
          >
            <Row justify="space-between">
              <Col span={21}>
                <Row justify="start" align="middle">
                  <Col span={3}>
                    <i className={`${item.icon} text-color-${item.actv ? 'next' : 'tint'} m-0 text-icon-md py-1`}></i>
                  </Col >
                  <Col span={20} className="ms-1">
                    <p className="text-bold m-0 p-0">{item.name}</p>
                    <p className="text-small text-color-tone m-0">{item.actv ? 'Select': 'Coming Soon'}</p>
                  </Col>
                </Row>
              </Col>

              <Col span={3} className="text-end py-1">
                <i className="bx bx-chevron-right text-color-tone m-0 text-icon-sm" ></i>
              </Col>
            </Row>
          </div>

      : ''))}
    </div>
  </>

  )
}