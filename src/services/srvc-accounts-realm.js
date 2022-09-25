//init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_USER});


export const AuthCodeUser = async () => {
  const cred = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_USER);
  const user = await app.logIn(cred);
  return user
}

export const GetUserAccounts = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.acntGetUserAccounts(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const CreateAccount = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.acntCreateAccount(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const SetAccountStatus = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.acntSetAccountStatus(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}
