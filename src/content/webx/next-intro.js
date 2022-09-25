// next intro
import { Card } from 'antd';

import WebbDividerSmall from "./webb-divider-sm"

const { Meta } = Card;

const stat =[
  {
    stat:'new', 
    name:'Welcome Onboard', shrt:'New Account', 
    desc:'Please use the Create Account Link below to setup your account.', 
    icon:'bi-gift', colr:'text-success',
    avtr:'https://img.freepik.com/free-vector/colorful-pattern-young-people_23-2148218147.jpg?w=330'
  },
  {
    stat:'incomplete', 
    name:'Profile Incomplete', shrt:'Incomplete Account Information', 
    desc:'Please use the Update Account Information Link below to complete your account setup.', 
    icon:'bi-exclamation-circle', colr:'text-danger',
    avtr:'https://img.freepik.com/free-vector/colorful-pattern-young-people_23-2148218147.jpg?w=330'
  },
  {
    stat:'review', 
    name:'Account In Review', shrt:'We are reviewing your account information', 
    desc:'Once your account review is completed, we will notify you of the same.', 
    icon:'bi-shield-fill-check', colr:'text-color-main',
    avtr:'https://img.freepik.com/free-vector/colorful-pattern-young-people_23-2148218147.jpg?w=330'
  },
  {
    stat:'hold', 
    name:'Account On Hold', shrt:'We are reviewing your account information', 
    desc:'Once your account review is completed, we will notify you of the same.', 
    icon:'bi-shield-fill-exclamation', colr:'text-warning',
    avtr:'https://img.freepik.com/free-vector/colorful-pattern-young-people_23-2148218147.jpg?w=330'
  },  
]


export default function NextIntro(props) {
 
  const next = stat.find (item=> item.stat === props.stat)

  return (
  <>
    <div className="text-center">
      <Card
        className=""
        cover={<img alt="wize nft" src={next.avtr} />}
      >
        <Meta title={next.name} description={next.shrt} />
      </Card>

    </div>

  </>
  )
}