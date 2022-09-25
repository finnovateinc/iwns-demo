//init
import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_MNDB_RELM_TRXN});


export const AuthCodeTrxn = async () => {
  const cred = Realm.Credentials.apiKey(process.env.REACT_APP_MNDB_AUTH_TRXN);
  const user = await app.logIn(cred);
  return user
}

// ------------------------ //

export const GetUserTransfersList = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.trxnGetUserTransfersList(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetUserTransfersCount = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.trxnGetUserTransfersCount(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const GetTransfersInfo = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.trxnGetTransfersInfo(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const TokenCreateClaim = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.trxnTokenCreateClaim(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const TokenMintTransfer = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.trxnTokenMintTransfer(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}


export const SubmitBatchTransfer = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknSendPoap(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

export const SetTokenClaim = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.toknSetTokenClaims(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}

// non-NFT

export const GetAccountTransactions = async (item) => {
  const trxnuser = await AuthCodeTrxn()
  const result = await trxnuser.functions.trxnGetAccountTransactions(JSON.stringify({
    ...item, 
    webb: process.env.REACT_APP_WEBB_SITE_NMBR
  }));
  // console.log(result)
  return JSON.parse(result);
}