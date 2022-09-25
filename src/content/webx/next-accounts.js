// next
import { Typography, Row, Col } from 'antd';
import avtx from "../../media/user.png";

import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

const { Text } = Typography;

const form = [
  {name:'Personal', form:'indx'},
  {name:'Business', form:'bznx'}
]

export default function NextAccounts(props) {

  // console.log (props)

  const stat = (data) =>{
    if (data.hold) 
      return {
        text: 'Account on Hold', 
        icon:'bx bxs-exclamation-circle', colr:'danger', 
        actn: false,
        name: 'Select'
      }
    
    if (!data.onbx) 
      return {
        text: 'Incomplete Profile', 
        icon: 'bx bxs-exclamation-circle', colr:'danger', 
        actn: true,
        name: 'Update'
      }

    if (data.actv) 
      return {
        text: 'Active', 
        icon: 'bx bxs-circle', colr:'success',
        actn: true,
        name: 'Select'
      }
    else 
      return {
        text: 'In Review', 
        icon: 'bx bxs-circle', colr:'warning',
        actn: false,
        name: 'Select'
    }
  }

  return (
  <>
    <div className={ props.data.length !== 0 ? '': 'd-none'}>
      <p className="text-color-tone text-bold text-small">{props.form} Account(s)</p>
        
      {props.data && props.data.length > 0 && props.data.map((item, i) => ( 
        item.form === form.find(item=>item.name===props.form).form ?

      <div className="" 
        style={{cursor:'pointer'}}
        onClick={async () => { props.user(item) }}
        disabled={!stat(item).actn}
        key={i}
      >
        <div className={`p-1 px-2 mb-1 back-color-wite hilite`}
          style={{cursor:'pointer'}}   
        >
          <Row justify="start" align="middle">
            <Col span={21}>
              <Row justify="start" align="middle">
                <Col>
                  <Row justify="start" align="middle">
                    <Jazzicon diameter={37} seed={jsNumberForAddress(item.usid)} /> 
                  </Row>
                </Col >
                <Col flex="auto" className="mx-1">
                <Row justify="start" align="middle"><div>
                  <p className='m-0 text-bold'>{ item.name || 'User Name'}</p>
                  <p className="m-0 ">
                    <span><Text type={stat(item).colr}>
                      <i className={`${stat(item).icon} text-small`}></i></Text>
                    </span>
                    <span className=''>{' '}{stat(item).text}</span>
                  </p>
                  </div></Row>
                </Col>
              </Row>
            </Col>

            <Col span={3} className="py-1 text-end">
              <Row justify="end" align="middle">
              <i className="bx bx-chevron-right text-color-tone m-0 text-icon-sm" ></i>
              </Row>
            </Col>
          </Row>
        </div>

      </div>
      
      : ''))}

    </div>
  </>
  )
}