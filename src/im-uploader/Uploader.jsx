import React, { useState,Fragment, useEffect } from 'react'
import blank from '../blank/bla.jpg'
function Uploader() {
  const baseUrl="http://localhost:5200/images"
    const [imgFile,setImFile]=useState(null)
const [preview,setPreview]=useState()
    const handleChange=(e)=>{
        setImFile(e.target.files[0])

    }
useEffect(()=>{
    const reader=new FileReader();
    if(imgFile){
        reader.onloadend=()=>{
            setPreview(reader.result)

        }
        reader.readAsDataURL(imgFile)
    }
    else{
        setPreview(null)
    }
},[imgFile])


    return (
    <Fragment>
  <div>Uploader</div>
<form>
    <div style={{
        width:"200px",
        height:"200px",
        display:"flex",
        justifyContent:"center",
        alignItem:"center"
    }}>
   {
   
   imgFile!=null?
   <img src={preview}
   alt="tis is img"
   style={{
       width:"100%",
       height:"100%",
       objectFit:"center",
       objectPosition:"cover"

       
   }} />

: <img 
src={blank}
alt="tis is img"
style={{
    width:"100%",
    height:"100%",
    objectFit:"center",
    objectPosition:"cover"

    
}} />   
}
    </div>
        <input type="file" id='imge'
        accept='image/*'
        onChange={handleChange}
        style={{display:"none",paddingBottom:"20px"}} />

        <label htmlFor="imge">Choose image File</label>
    </form>    
    </Fragment>

  )
}

export default Uploader