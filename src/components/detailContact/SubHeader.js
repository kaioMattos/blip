import { HeaderDetailRow, DivSNameImage } from "../style";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import Typography from "@material-ui/core/Typography";
function HeaderDetail({data, handleEvent}) {  
  return (
   
      <HeaderDetailRow>
        <DivSNameImage>
            <Avatar alt="User" src={data.image} style={{ margin: "5%" }}/>
                <h2 style={{ color: "#637d9b" }}>{data.shortName}</h2>         
            </DivSNameImage>
            <Typography variant="body2" color="textSecondary" component="p">
                {data.created}
            </Typography>       
        </HeaderDetailRow>     
    
  );
}
export default HeaderDetail;
