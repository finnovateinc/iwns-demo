// next logout
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from 'antd';

export default function NextBusiness() {

  const history = useHistory();

  return (
  <>
    <div className={`p-1 px-2 back-color-wite hilite`}
      style={{cursor:'pointer'}}
     
    >
      <Row justify="space-between">
        <Col span={21}>
          <Row justify="start" align="middle">
            <Col>
              <i className="lead bx bx-briefcase text-color-tone m-0 text-icon-sm"></i>
            </Col >
            <Col flex="auto" className="mx-1">Add DAO/Business Account</Col>
          </Row>
        </Col>

        <Col span={3} className="text-end">
          <i className="bx bx-chevron-right text-color-tone m-0 text-icon-sm" ></i>
        </Col>
      </Row>
    </div>

  </>
  )
}