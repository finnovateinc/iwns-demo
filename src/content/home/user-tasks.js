// dashboard shortcuts
import { Link } from "react-router-dom";

import { Row, Col, Space } from 'antd';
import WebbDividerSmall from "../webx/webb-divider-sm";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

const list = require("../../data/data-user-tasks.json").data;

export default function UserTasksModule() {

  const asset = UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const data = (list.filter(item => item.user.includes(asset.form)));

  return (
  <>
    <WebbDividerSmall />
  
    <Row className="m-0 p-0" gutter={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
      {data && data.map((item, i) => (item.actv ?
        <Col className="text-center m-0 p-0 mb-1" xs={{span:6}} md={{span:6}} key={i}>
          
          <Link to={`/${UserForm()}/${item.link}`}>
            <div className="py-2 back-color-wite hilite">
        
              <i className={`m-0 text-color-${item.actv ? 'next' : 'lite'} ${item.icon}`}  
                style={{fontSize:"2.4em"}}>
              </i>
              
              <div className="text-small text-color-tone m-0">
                <Col xs={0} md={24} className="text-small">{item.name}</Col>
                <Col xs={24} md={0} className="text-mini">{item.name}</Col>
              </div>

            </div>     
            
          </Link>

        </Col>
      : ''))}
    </Row>

    <WebbDividerSmall />
  </>
  )
}