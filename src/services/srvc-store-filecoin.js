// filecoin
const axios = require('axios')

const base = 'https://api.nft.storage'
const scrt = process.env.REACT_APP_NFT_STORE_APIK
const head = {
  Authorization: `Bearer ${scrt}`
}

export const CreateFileLink = async (file) => {

  try {
    const basx = `${base}/upload`
    let result = await axios.post(basx, file, {headers:head})
    return (
      (result.data.ok && {
          cidx: result.data.value.cid,
          urla: `https://ipfs.io/ipfs/${result.data.value.cid}`,
          urlb: `https://${result.data.value.cid}.ipfs.dweb.link`,
        }) ||
      ''
    )
  } catch (error) {
    return null
  }
 
}


export const GetMetadataLink = async (item) => {

  const tokendata = {
    "name": item.name,
    "description": item.memo,
    "file_url": item.urli,
    "external_url": item.urle,
    "animation_url": item.urla,
    "custom_fields" : {},
    "attributes": [
      { "trait_type": "form", "value": item.form },
      { "trait_type": "sort", "value": item.sort },
      { "trait_type": "wize", "value": item.wize },
      { "trait_type": "base", "value": item.base },
      { "trait_type": "dist", "value": item.dist },
      { "trait_type": "next", "value": false },
      { "trait_type": "active", "value": true },
      { "trait_type": "user", "value": item.user },
      { "trait_type": "userid", "value": item.usid },
      { "trait_type": "useraccount", "value": item.usac },
      { "trait_type": "issuer", "value": item.issr },
      { "trait_type": "issuerid", "value": item.isid },
      { "trait_type": "issueraccount", "value": item.isac },
      { "trait_type": "startdate", "value": item.stts },
      { "trait_type": "enddate", "value": item.ents },
      { "trait_type": "issuedate", "value": item.ists },
    ]
  }
  console.log ('meta: ', tokendata)

  var blob = new Blob([JSON.stringify(tokendata)], {type: "application/json;charset=utf-8"});
  // saveAs(blob, `wise-${info.wise}.json`);

  const res = await CreateFileLink(blob)
  return {link: res.cidx}
}


export const GetArtworkLink = async (item) => {

  // file comes in base64 
  const byteCharacters = atob(item.file);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  var blob = new Blob([byteArray], {type: "image/png;"});
  //saveAs(blob, `wise-${data.wise}.png`);  

  const res = await CreateFileLink(blob)
  return {link: res.cidx}
}