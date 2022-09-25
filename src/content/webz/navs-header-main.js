// webb header links
import { Link } from "react-router-dom";
import { Space, Typography, Divider } from 'antd';

import { UserForm } from "../../services/srvc-utilities";
// import { GetLocalUser, GetLocalBusiness } from "../../services/srvc-auth-user";

import { ActiveLink } from '../../services/srvc-utilities';

const { Text } = Typography;
const list = (require("../../data/navs-header-main.json")).data;

export default function NavsHeaderMain() {

  const asset = UserForm() === "in" ?  {form: 'indx'} : {form: 'bznx'} // UserForm() === "in" ? GetLocalUser() : GetLocalBusiness();
  const data = list.filter(item => item.user.includes(asset.form) );
  
  return (
  <>
    <Space className="" >
      {data && data.map((item, i) => ( item.actv ?
      
        <Link to={`/${UserForm()}/${item.link}`} key={i}>
          {item.link === ActiveLink() 
            ? <Text className='text-color-main p-1'>{item.name}</Text>
            : <Text className='text-color-tone p-1 hilite rounded-xx'>{item.name}</Text>
          }
        </Link>
        
      
      :''))}
    </Space>

  </>
  )
}