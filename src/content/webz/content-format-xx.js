//format
import { Link } from 'react-router-dom';
import NavsFooterXW from './navs-footer-xw';

import WebbIcon from '../webx/webb-icon';
import WebbIconX from '../webx/webb-x';

import { Layout, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

const wide = {
  full: [{xs: 0, md: 0, lg: 0}, {xs: 24, md: 24, lg: 24}],
  wide: [{xs: 0, md: 0, lg: 0}, {xs: 24, md: 24, lg: 24}],
  medium: [{xs: 0, md: 6, lg: 4}, {xs: 24, md: 12, lg: 16}],
  small: [{xs: 0, md: 6, lg: 8}, {xs: 24, md: 12, lg: 8}],
  mini: [{xs: 0, md: 6, lg: 9}, {xs: 24, md: 12, lg: 6}],
}

export default function ContentFormatXX (props) {

  return (
    <>
      {/* header */}
      <Header 
        className='back-color-wite border-bottom px-0 ' 
        style={{position:'sticky', top:0, zIndex:99}}
      >
        <div className={props.head !== "full" ? 'mx-3': ''}>
          <Row className="">

            <Col {...wide[props.head][0]}></Col>
            <Col {...wide[props.head][1]}>
              <Row justify="space-between">
                <Col span={3} ><Link to={props.home}><WebbIcon data={{size:'md'}}/></Link></Col>

                <Col xs={18} md={18} className="text-center">
                  <Row align='middle' justify='center'>
                    <p className='text-lead text-color-main m-0'>{props.name}</p>
                  </Row>
                </Col>

                <Col span={3} className="text-end" >
                <Link to={props.link}> <WebbIconX /> </Link>
                  
                </Col>
              </Row>
            </Col>
            <Col {...wide[props.head][0]}></Col>

          </Row>
        </div>
      </Header>
      
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
      <Footer className="back-color-lite m-0 px-0">
        <div className={props.head !== "full" ? 'mx-3': ''}>
            <Row className="">

            <Col {...wide[props.head][0]}></Col>
            <Col {...wide[props.head][1]}>
              <Row align='middle' justify='space-between'>
                <p className='me-1'>2022 - {process.env.REACT_APP_WEBB_SITE_NAME}</p>
                <NavsFooterXW />
              </Row>
            </Col>
            <Col {...wide[props.form][0]}></Col>

            </Row>
          </div>

      </Footer>
    </>
    )
  }