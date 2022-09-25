// site logo
import { Empty, Typography } from 'antd';

const { Text } = Typography;

export default function WebbNoData(props) {

  return (
  <>
    <div className="text-center" >
      <div style={{height:'10vh'}}></div>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      <Text type="secondary">{props.data}</Text>
    </div>

  </>
  )
}