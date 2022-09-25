// webb header links
import { Link } from "react-router-dom";
import { ActiveSiteLink } from '../../services/srvc-utilities';

import { Space } from 'antd';

const list = require('../../data/navs-footer-xw.json').data

export default function NavsFooterXW() {

  const data = list.filter(item => item.user.includes('ww') );
  
  // console.log(ActiveSiteLink())

  const Active = (link) => {
    return (ActiveSiteLink() === link.toString().toLowerCase())
  }
  
  return (
  <>
    <Space className="" >
      {data && data.map((item, i) => ( item.actv ?
      
        <Link to={`/${item.link}`} key={i}>
          { Active (item.name) 
            ? <p className='text-color-main mx-1'>{item.name}</p>
            : <p className='text-color-tone mx-1 hitext'>{item.name}</p>
          }
        </Link>
      
      :''))}
    </Space>

  </>
  )
}