function NewBefore(props){
    return(<>
                    < div className="info">
                        <h1>{props.title1}</h1>
                        <i>{props.title2}</i>
                        <h2>{props.title3}</h2>
                        <h3>{props.title4}</h3>
                        <span style={{color:'#ff334e', fontSize:'19px',fontWeight:'400',marginRight:'10px'}}>{props.title5}</span>
                        <span style={{color:'#787878',fontSize:'18px',fontWeight:'400', textDecoration:'line-through'}}>{props.title6}</span>
                    </div>
                    <div style={{padding:'6px'}} className="info2">
                        <h6>{props.title7}</h6>
                        <span>{props.title8}</span>
                        <span>{props.title9}</span>
                        <span>{props.title10}</span>
                        <span>{props.title11}</span>
                    </div>
                    <div style={{padding:'7px'}} className="inf2">
                        <span>{props.title12}</span>
                        <span>{props.title13}</span>
                        <span>{props.title14}</span>
                        <span>Sec</span>
                    </div>
            </>
    )
}
export default NewBefore;