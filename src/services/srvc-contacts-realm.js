//init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_USER});


export const AuthCodeUser = async () => {
  const cred = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_USER);
  const user = await app.logIn(cred);
  return user
}


// onboard new user - step 1 (name)
export const NewContactPerson = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.contCreatePerson(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const NewContactBusiness = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.contCreateBusiness(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

// ------------------------ //

export const GetUserContactsList = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.contGetUserContactsList(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetUserContactsCount = async (item) => {
  const authuser = await AuthCodeUser()
  const result = await authuser.functions.contGetUserContactsCount(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}