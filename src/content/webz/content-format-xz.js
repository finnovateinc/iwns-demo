//format
import { Link } from 'react-router-dom';

import NavsFooterXW from './navs-footer-xw';

import { Layout, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

const wide = {
  full: [{xs: 0, md: 0, lg: 0}, {xs: 24, md: 24, lg: 24}],
  wide: [{xs: 0, md: 0, lg: 0}, {xs: 24, md: 24, lg: 24}],
  medium: [{xs: 0, md: 6, lg: 4}, {xs: 24, md: 12, lg: 16}],
  small: [{xs: 0, md: 6, lg: 7}, {xs: 24, md: 9, lg: 10}],
  mini: [{xs: 0, md: 6, lg: 9}, {xs: 24, md: 12, lg: 6}],
}

export default function ContentFormatXZ (props) {

  return (
    <>
      {/* header */}
      
      {/* content */}
      <Layout>
        <Content className="back-color-lite" style={{ minHeight:'100vh' }}>
          
          <div className={props.form !== "full" ? 'mx-3': ''}>
            <Row className="">

            <Col {...wide[props.form][0]}></Col>
            <Col {...wide[props.form][1]}>
              {props.data}
            </Col>
            <Col {...wide[props.form][0]}></Col>

            </Row>
          </div>

        </Content>
      </Layout>

      {/* footer */}
      <div className='border-bottom'></div>

    </>
    )
  }