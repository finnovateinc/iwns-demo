// webb header links
import { Link } from "react-router-dom";

import { UserForm } from "../../services/srvc-utilities";
import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { ActiveLink } from '../../services/srvc-utilities';

import { Space, Typography } from 'antd';
const { Text } = Typography;

const list = (require("../../data/navs-header-xc.json")).data;

export default function NavsHeaderXC() {

  const usxx = UserForm();
  const asset = UserForm() === 'in' ? GetLocalUser() : GetLocalBusiness();
  const data = list.filter(item => item.user.includes(asset.form) );
  
  return (
  <>
    <Space className="" >
      {data && data.map((item, i) => ( item.actv ?
      
      <Link to={`/${asset.form.substring(0,2)}/${item.link}`} key={i}>
        {item.link === ActiveLink() 
          ? <Text className='text-color-main p-1'>{item.name}</Text>
          : <Text className='text-color-tone p-1 hirich rounded-md'>{item.name}</Text>
        }
      </Link>
        
      
      :''))}
    </Space>

  </>
  )
}