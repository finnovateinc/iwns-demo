import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "../context/authcontext";

//views - main
import Main from '../viewsxz/main';

import HomeUser from "../viewsxx/home-indx";

// views - channels
import ChannelsNew from "../viewsch/channels-new";
import ChannelsCreate from "../viewsch/channels-create";
import ChannelsCreateMail from "../viewsch/channels-new-mail";

// transfers - accounts
import Transfers from "../viewsxt/transfers";
import TransfersDebit from "../viewsxt/transfers-debit";

// transfers - accounts
import AccountsCreate from "../viewsac/accounts-create";

// views = memo
import Memo from "../viewsrm/memo";

// views - assist
import Assist from "../viewsxw/assist-list";

// views - auth - onbd
import AuthMailFirebase from "../viewsxa/auth-mail-firebase";
import AuthMailCheckFirebase from "../viewsxa/auth-mail-check";
import AuthNext from "../viewsxa/auth-next";
import AuthSessionX from "../viewsxa/auth-session-x";

import OnboardUser from "../viewsxb/onboard-user";

const routes = [

  { path:'/', component: Main, auth:false },
  { path:'/in/home', component: HomeUser, auth:false },

  { path:'/in/channels/new', component: ChannelsNew, auth:false },
  { path:'/in/channels/new/:id', component: ChannelsCreate, auth:false },
  { path:'/in/channels/new/mail', component: ChannelsCreateMail, auth:false },

  { path:'/in/transfers', component: Transfers, auth:false },
  { path:'/in/transfers/debit', component: TransfersDebit, auth:false },

  { path:'/in/accounts/create', component: AccountsCreate, auth:false },

  { path:'/in/memo', component: Memo, auth:false },

  { path:'/in/assist', component: Assist, auth:false },

  { path:'/auth/mail', component: AuthMailFirebase, auth:false },
  { path:'/auth/mail/check', component: AuthMailCheckFirebase, auth:false },
  { path:'/auth/next', component: AuthNext, auth:false },
  { path:'/auth/x', component: AuthSessionX, auth:true },

  { path:'/onboard/user', component: OnboardUser, auth:true },

]

const PrivateRoute = (props) => {
  const location = useLocation();
  
  const { user } = useAuth();
  return user 
  ? ( <Route { ...props } /> ) 
  : ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
};

export default function Routes() {

  return (
    <Switch>
      {routes.map ((item,i)=>(item.auth
      ? <PrivateRoute
          key={i}
          path={item.path}
          component={item.component}
          exact
        />
      : <Route
          key={i}
          path={item.path}
          component={item.component}
          exact
        />
      ))}
    </Switch>
  );
}