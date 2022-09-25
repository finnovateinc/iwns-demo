// dashboard shortcuts
import { useEffect, useState } from "react";

import { Row, Col, Space, Statistic, Card } from 'antd';
import WebbDividerSmall from "../webx/webb-divider-sm";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { GetUserAccountStats } from "../../services/srvc-user-realm";

const statisticsList = [
  {name: 'accounts', cntr: 0, live: 0, actv: true},
  {name: 'channels', cntr: 0, live: 0, actv: true},
  {name: 'memo', cntr: 0, live: 0, actv: true}
]


export default function UserStatsModule(props) {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const [loading, setLoading] = useState(true);  
  
  const [data, setData] = useState(statisticsList)

  useEffect( () => {
    if (asset){
      const fetchData = async() => {
        
        const result = (await GetUserAccountStats(({
          data: {usid: asset.usid},
          user: asset.usid
        })))
        
        console.log (result)
        setData(result.data)

        setLoading(false);
      }
      fetchData()
    } else {}
  },[asset.usid]);


  return (
  <>
    <WebbDividerSmall />
  
    <Row className="m-0 p-0" gutter={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
      {data && data.map((item, i) => (item.actv ?
        <Col className="" xs={{span:8}} md={{span:8}} key={i}>

          <div className="back-color-wite p-2">
            <p className="text-color-tone text-small m-0">{item.name.toUpperCase()}</p>
            <p className="text-lead m-0">
               {item.name==='memo' ? `${item.cntr}` : `${item.live}/${item.cntr}` }
            </p>
          </div>

        </Col>
      : ''))}
    </Row>

    <WebbDividerSmall />
  </>
  )
}