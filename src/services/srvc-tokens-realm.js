//init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_TRXN});


export const AuthCodeTrxn = async () => {
  const cred = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_TRXN);
  const user = await app.logIn(cred);
  return user
}


// Function Calls
export const CreateTokenFormat = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknCreateFormat(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const SetTokenFormatsData = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknSetFormatsData(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetUserTokenFormats = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknGetUserFormatsList(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetFormatsSortList = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknGetFormatsSortList(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetFormatsDetails = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknGetFormatsDetails(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}


export const GetTokenDistribution = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknGetDistributionList(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}