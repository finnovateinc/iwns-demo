//init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_USER});


export const AuthCodeUser = async () => {
  const cred = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_USER);
  const user = await app.logIn(cred);
  return user
}


// business user team
export const GetUserTeamList = async (item) => {
  const trxnuser = await AuthCodeUser()
  const result = await trxnuser.functions.contGetUserTeamList(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  
  return JSON.parse(result);
}

export const NewContactTeam = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.contCreateTeam(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetTeamDetails = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.contGetTeamDetails(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}