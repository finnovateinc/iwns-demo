// firebase file upload
import { useState, useRef } from "react";
import firebase from "./firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import FormNeeded from "../content/webb/form-needed";
// import WebbProgressBar from "../content/webb/webb-progressbar";
import { Row, Col, Progress } from 'antd';


const storage = getStorage();

export default function FileSaveFirebase (props) {

  const [stat, setStatus] = useState('Select File...');
  const [done, setDone] = useState(0);
  const [link, setLink] = useState(props.avtr || 'https://firebasestorage.googleapis.com/v0/b/finnovate99.appspot.com/o/webb%2Ffilesave.png?alt=media&token=9acb1627-380a-48a6-b9b6-e174806a79ef' );
  const [file, setFile] = useState()
  let inputFile = useRef(null);

  const handleFile = e => {
    const { files } = e.target;
    setStatus('New File...')

    if (files && files.length) {
      // const filename = files[0].name;
      // console.log("name", filename); //ex: zip, rar, jpg, svg etc.

      setFile(files[0]);

      props.file(files[0]);
      handleUpload(files[0]);
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleFileRemove = async (e) => {
    setFile(null)
    inputFile.current.value=null
    props.link('');
    setDone(0)
    setLink('https://firebasestorage.googleapis.com/v0/b/finnovate99.appspot.com/o/webb%2Ffilesave.png?alt=media&token=9acb1627-380a-48a6-b9b6-e174806a79ef')
    setStatus('Select File...')
  }

  const handleUpload = async (docx) => {

    setStatus('Please Wait... ')

    if (docx) {
      // console.log (docx)

      const filename = props.name + '-' + (new Date()).getTime().toString() 
      + '.' + docx.name.split('.')[(docx.name.split('.')).length-1]

      setLink('https://firebasestorage.googleapis.com/v0/b/finnovate99.appspot.com/o/webb%2Ffilesave.png?alt=media&token=9acb1627-380a-48a6-b9b6-e174806a79ef');

      const storageRef = ref(storage, 'docxuzcxmbuw24s'+'/'+filename);
      const uploadTask = uploadBytesResumable(storageRef, docx);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          setDone (Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
          setStatus('' + Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100) + '% done');

          switch (snapshot.state) {
            case 'paused':
              // console.log('File Save is paused');
              break;
            case 'running':
              // console.log('File Save is running');
              break;
          }
        }, 
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, 
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('link:', downloadURL);
            
            setLink(downloadURL)
            // send url to parent
            props.link(downloadURL);
          });
          document.getElementById("file").value = null
        }
      );

    }
 
  }

  return (
  <>

    <div className="p-2 back-color-wite border-bottom">
   
      <Row justify="start" >
        <Col span={21}>
          <p className="text-bold m-0">{file? file.name : '*** Select File ***'}</p>
          <p className="m-0 text-small text-color-tone d-none">{'Status: '}{stat}</p>
          <Progress percent={done} strokeWidth={3} />
        </Col>

        <Col span={3}  className="text-end text-color-tone">
          <Row align="middle" justify="center" 
            className={`text-center back-color-lite hilite ${done==0 ? 'text-color-main': 'd-none'}`}
            style={{width:'2.7rem', height:'2.7rem', borderRadius:'50%', cursor:'pointer'}}
            onClick={() => onButtonClick()}
            ><i className={`bx bx-plus`} style={{fontSize:'1.25rem'}}></i>
          </Row>

          <Row align="middle" justify="center"
            className={`text-center back-color-lite hilite ${done>0 && done <100 ? '': 'd-none'}`}
            style={{width:'2.7rem', height:'2.7rem', borderRadius:'50%', cursor:'pointer'}}
           
            ><i className={`bx bx-transfer-alt`} style={{fontSize:'1.25rem'}}></i>
          </Row>

          <Row align="middle" justify="center"
            className={`text-center back-color-lite hilite ${done===100 ? '': 'd-none'}`}
            style={{width:'2.7rem', height:'2.7rem', borderRadius:'50%', cursor:'pointer'}}
            onClick={() => handleFileRemove()}
            ><i className={`bx bx-x`} style={{fontSize:'1.25rem'}}></i>
          </Row>

        </Col>
      </Row>
    </div>

    <div className="mb-3">
      <div className="form-group">
        <div className="media-square border-none rounded mb-3">
          <img
            className="ref"
            src={link}
            alt="file"
          />
        </div>
        
      </div>
    </div>

    <div className="mb-3">
      <input 
        type="file" id="file"
        className="border-none"
        ref={inputFile}
        onChange= {handleFile} 
        style={{display: "none"}}
      ></input>
    </div>

    <div className="mb-3 d-none">
      <div className="form-group">
        <label className="form-label small">Link </label>
        <input type="text" className="form-control height-md bg-lite border-none"
          value={link}
          onChange={({ target }) => {
            setStatus('External Link... ');
            setLink(target.value); 
            props.link(target.value)
          }}
          placeholder="Image Link">
        </input>
      </div>
    </div>

  </>
  )
}