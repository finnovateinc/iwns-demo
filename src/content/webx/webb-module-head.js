// module

import { Divider } from 'antd';

export default function WebbDividerHead(props) {

  const data = props.data;

  return (
  <>
    
    <Divider orientation="left" orientationMargin="0">
      <p className="text-color-main text-lead text-bold">{data.text || ''}</p>
    </Divider>
  </>
  )
}