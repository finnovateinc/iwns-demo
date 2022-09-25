// site logo

export default function WebbIcon(props) {

  const data = props.data

  return (
  <>
    <div className="py-1" >
      <i className={`bx bx-bolt-circle text-color-main text-icon-${data.size}`}></i>    
    </div>

  </>
  )
}