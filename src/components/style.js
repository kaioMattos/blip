
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

// Styled component named StyledButton
const LogoDiv = styled.div`     
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

const ImageLogo = styled.img`     
    margin: auto;    
`;
const ImagePlan = styled.img`     
margin: auto;    
`;
const Main = styled.div`
    background:#f5f8f9;
    padding:10% 5%;
`;

const HeaderDetailRow = styled.div`
    justify-content:space-between;
    align-items:center;
    display:flex
`;

const DivSNameImage = styled.div`
    flex-direction:'row';
    align-items:center;
    display:flex
`;

const LineHr = styled.hr`
    color: #dde7ec;
    background-color: #dde7ec;
    height: 2px;
    border: none;
    margin: 2% 0 2% 0;
`;

const ContentDetail= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;
`;

const ContentCards= styled.div`
    display: flex;
    flex-direction: row;  
    width:75%;
    flex-wrap: wrap;
`;
const CardStyled = styled(Card)`
    min-width: 275px;
    padding: 1%;
    margin:1%;
    height: 170px;
`;
const CardLong = styled(Card)`
    min-width: 275px;
    padding: 1%;
    margin:1%;
    height: 170px;
    display: flex;
    align-items: center
`;
const CardContentLong = styled(CardContent)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width:100%
`;

const TypographyTitle = styled(Typography)`
    font-weight: bold;
    font-size: 25;
    color: darkslategray;
`;

const TypographyP = styled(Typography)`
    font-size:14;
`;
const DivInfoCardLong = styled.div`
    width:70%;
    margin-left:10px
`;

const CardLateral = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column
`;
const AvatarCustom = styled(Avatar)`
    padding:2%;
    width:auto;
    height:auto
`;

export { 
    LogoDiv,
    ImageLogo,
    Main,
    ImagePlan,
    HeaderDetailRow,
    DivSNameImage,
    LineHr,
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
}