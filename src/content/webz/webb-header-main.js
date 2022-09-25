// web navigation
import NavsHeaderMain from './navs-header-main';
import WebbIcon from '../webx/webb-icon';
import UserAvatar from '../webx/user-avatar';

import { Layout, Menu, Row, Col, Divider } from 'antd';

const {Header } = Layout

export default function WebbHeaderMain(props) {

  const data = props.data;

  return (
    <>
    {/* header-large */}
    <Row align='middle'  style={{backgroundColor:'white', position:'sticky', top:0, height: 60}}>

      
      <NavsHeaderMain />

    </Row>
    </>
    )
}


