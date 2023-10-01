function Button(prop){
    const newStyle={
        fontSize:"1.2rem",
        padding: "0.8rem 1rem",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        display: "inline-block",
        cursor:"pointer",
        width:`${prop.width==undefined?"":prop.width}`, 
        border: `${prop.border==undefined?"0.25rem solid #C53720":"0.25rem solid "+prop.border}`,
        backgroundColor:`${prop.backgroundColor==undefined?"":prop.backgroundColor}`,
        color:`${prop.color==undefined?"white":prop.color}`
    }

    return(
        <div style={newStyle} onClick={()=>prop?.onClick()}>
            {prop.value}
        </div>
    )
}
export default Button