// webb header links
import { Link } from "react-router-dom";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { ActiveLink } from '../../services/srvc-utilities';

import { Row, Col } from 'antd';


const list = (require("../../data/navs-footer-xc.json")).data;

export default function NavsFooterXC() {

  const usxx = UserForm();
  const asset = UserForm() === 'in' ? GetLocalUser() : GetLocalBusiness();
  const data = list.filter(item => item.user.includes(asset.form) );
  
  return (
  <>
      <Row className="m-0 p-0" gutter={{ xs: 6, sm: 6, md: 6, lg: 6 }} style={{margin:'0', padding:'0'}}>
      {data && data.map((item, i) => (item.actv ?
        <Col className="text-center m-0 p-0" xs={{span:6}} key={i}>
          
          <Link to={`/${asset.form.substring(0,2)}/${item.link}`}>
            <div className="">
        
              <i className={`m-0 p-0 text-icon-sm text-color-${item.link === ActiveLink()? 'next' : 'tint'} ${item.icon}`}></i>
              <p className={`m-0 p-0 text-mini text-color-${item.link === ActiveLink()? 'next' : 'tint'}`}>{item.name}</p>

            </div>     
          
          </Link>

        </Col>
      : ''))}
      </Row>

  </>
  )
}