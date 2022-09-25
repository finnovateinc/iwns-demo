// main landing screen
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Typography, Row, Col } from 'antd';

import ContentFormatXZ from "../content/webz/content-format-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";
import WebbIcon from "../content/webx/webb-icon";

const data = [
  {name: 'Email', icon:'bi-envelope', link: 'account/mail', actv: true},
  {name: 'Mobile', icon:'bi-phone', link: 'account/mobile', actv: true},
  {name: 'Web3', icon:'bi-globe2', link: 'account/web3', actv: false}
]

const { Title } = Typography;

export default function Main () {
  
  const history = useHistory();

  const [meta, setMetamask] = useState(window.ethereum)

  return(
    <>
      <ContentFormatXZ 
        head = 'Main'
        home = {`/`}
        link = {`/`}
        form = 'mini'
        data = {
          <>
            <WebbDividerMedium />
            <div className="back-color-wite text-center">
              <WebbDividerSmall />
              <WebbDividerMedium />
              <WebbIcon data={{size:'wd'}}/>
              <WebbDividerMedium />
              <Title><span className="text-color-main">{process.env.REACT_APP_WEBB_SITE_NAME}</span></Title>
              <p className="text-lead m-0">{process.env.REACT_APP_WEBB_SITE_LINE}</p>
              <div className="" style={{height:'15vh'}}></div>
              
            </div>

            <WebbDividerSmall />
            <WebbDividerSmall />
            <p className="text-color-tone text-center m-0">Connect Your Account</p>
            
            <WebbDividerSmall />
            <WebbDividerSmall />
            <div className={`p-1 px-2 back-color-wite hilite`}
              style={{cursor:'pointer'}}
              onClick={() => history.push('/auth/mail')}
            >
              <Row justify="space-between">
                <Col span={21}>
                  <Row justify="start" align="middle">
                    <Col>
                      <i className="lead bx bx-envelope text-color-main m-0 text-icon-sm"></i>
                    </Col >
                    <Col flex="auto" className="mx-1">Login via Email</Col>
                  </Row>
                </Col>

                <Col span={3} className="text-end">
                  <i className="bx bx-chevron-right text-color-tone m-0 text-icon-sm" ></i>
                </Col>
              </Row>
            </div>

            <WebbDividerSmall />
            <div className={`p-1 px-2 back-color-wite hilite d-none`}
              style={{cursor:'pointer'}}
              onClick={() => history.push('/auth/mail')}
            >
              <Row justify="space-between">
                <Col span={21}>
                  <Row justify="start" align="middle">
                    <Col>
                      <i className="lead bx bx-globe text-color-main m-0 text-icon-sm"></i>
                    </Col >
                    <Col flex="auto" className="mx-1">Login via Metamask</Col>
                  </Row>
                </Col>

                <Col span={3} className="text-end">
                  <i className="bx bx-chevron-right text-color-tone m-0 text-icon-sm" ></i>
                </Col>
              </Row>
            </div>

          </>
        } 
      />
    </>
  )
}