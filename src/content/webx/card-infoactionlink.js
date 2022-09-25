// next
import { Divider } from 'antd';

export default function CardInfoActionLink(props) {

  const data = props.data;

  return (
  <>
    <div className={`p-1 px-2 back-color-wite hilite`}
      style={{cursor:'pointer'}}
      onClick={() => history.push(data.link)}
    >
      <Row justify="start" align="middle">
        <Col span={21} className="ms-1">
          <Row justify="start" align="middle">
            <Col>
              <i className="lead bx bx-globe text-color-main m-0 text-icon-sm"></i>
            </Col >
            <Col flex="auto" className="mx-1">data.name</Col>
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