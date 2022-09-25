// site logo
import { Spin } from 'antd';

export default function WebbLoader() {

  return (
  <>
    <div className="text-center" >
      <div style={{height:'15vh'}}></div>
      <Spin />
      <p className='mt-1 text-color-tone'>Please Wait</p>
    </div>

  </>
  )
}