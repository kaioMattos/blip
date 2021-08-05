import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { cyan, green, indigo } from '@material-ui/core/colors';
import iUser from '../../assets/user.png';
import iSent from '../../assets/sent.png';
import iPlan from '../../assets/plano.png';
import {ImagePlan,
   ContentDetail,
  ContentCards,
  CardStyled,
  TypographyTitle,
  TypographyP,
  CardLong,
  CardContentLong,
  DivInfoCardLong,
  CardLateral,
  AvatarCustom
} from '../style';

function ContactDetaill({data, handleEvent}) {
  const classes = useStyles();
  return (
      <ContentDetail>
        <ContentCards>
          <CardStyled  variant="outlined" style={{width:'20%'}}>
            <CardContent>                
              <TypographyP                
                color="textSecondary"
                gutterBottom
              >
               Idioma e Região
              </TypographyP>
              <TypographyP color="textSecondary" gutterBottom>
                {data.culture}
              </TypographyP>                            
              <TypographyP style={{paddingTop:'10%'}} color="textSecondary" gutterBottom>               
                TimeZone
              </TypographyP>
              <TypographyP  color="textSecondary" gutterBottom>  
                {data.culture}               
              </TypographyP>              
            </CardContent>            
          </CardStyled>

          <CardLong variant="outlined" style={{width:'60%'}}>
            <CardContentLong>                             
              <AvatarCustom alt="User" src={iUser} className={classes.cyan}/>                
              <DivInfoCardLong>
                <TypographyTitle variant="h5" component="h2" >
                     {data.analytics.user.actived}
                </TypographyTitle>
                <Typography variant="body2" color="textSecondary" component="p">
                  Usuários Ativos
                </Typography>
              </DivInfoCardLong>                                    
            </CardContentLong>
          </CardLong>      
          <CardLong variant="outlined" style={{ width:'30%'}}>
            <CardContentLong>                              
              <AvatarCustom alt="User" src={iSent} className={classes.green}/>                
              <DivInfoCardLong>
                <TypographyTitle variant="h5" component="h2" >
                    {data.analytics.message.received}
                </TypographyTitle>
                <Typography variant="body2" color="textSecondary" component="p">
                  Mensagens Recebidas
                </Typography>
              </DivInfoCardLong>                                   
            </CardContentLong>
          </CardLong>      
          <CardLong variant="outlined" style={{width:'40%'}}>
            <CardContentLong>                             
              <AvatarCustom alt="User" src={iSent} className={classes.indigo} />                
              <DivInfoCardLong>  
                <TypographyTitle variant="h5" component="h2">
                  {data.analytics.message.sent}
                </TypographyTitle>
                <Typography variant="body2" color="textSecondary" component="p">
                  Mensagens Enviadas
              </Typography>
              </DivInfoCardLong>                                      
            </CardContentLong>
          </CardLong>      
          </ContentCards>         
          <CardLateral>
            <ImagePlan alt="User" src={iPlan}/>
            <Typography variant="body2" color="textSecondary" component="p">
                  Status Conta
            </Typography>
            <Typography variant="h5" component="h2">
             {data.plan}
            </Typography>
            <Button variant="contained" color="primary" style={{marginTop:'10%'}}>
              Atualizar Contato
            </Button>                
          </CardLateral>        
            
      </ContentDetail>  
  );
}

const useStyles = makeStyles((theme)=>({
  cyan: {
    color: theme.palette.getContrastText(cyan[700]),
    backgroundColor: cyan[700],
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
  },
  indigo: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
  },
}));

export default ContactDetaill;
