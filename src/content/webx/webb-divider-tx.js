//
import { Divider } from 'antd';

export default function WebbDividerText(props) {

  const data = props.data;

  return (
  <>
    <div className="py-3"></div>
    <Divider orientation="left" orientationMargin="0">
      <p className="text-color-tone text-lead text-bold">{data.text || ''}</p>
    </Divider>
  </>
  )
}