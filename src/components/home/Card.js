import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import favorite from '../../assets/favorite.png';
import star from '../../assets/star.png';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CardBox({ data }) {
    const dispath = useDispatch();
    const history = useHistory();
    const handleClick = (id) => history.push('/ContactDetail/'+id);
    function setFavoriteContact(objContact){        
        dispath({type:'SET_FAVORITE_CONTACT', contact:{...objContact}})
    };
    return (
        <Card  variant="outlined" style={{minWidth:'20%'}}>
            <CardHeader
                avatar={<div onClick={()=>setFavoriteContact({...data, favorite:!data.favorite})}><Avatar alt="Favorite" src={data.favorite ? star : favorite} /></div>}
            />
            <CardContent style={{ textAlign: '-webkit-center' }} onClick={()=>handleClick(data.id)}>
                <div style={{ padding: 10 }}>
                    <Avatar alt="User" src={data.image} />
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.shortName}
                </Typography>
            </CardContent>
        </Card>
    );
}
function CardList({ data }) {
    const dispath = useDispatch();
    function setFavoriteContact(objContact){        
        dispath({type:'SET_FAVORITE_CONTACT', contact:{...objContact}})
    };
    const history = useHistory();
    const handleClick = (id) => history.push('/ContactDetail/'+id);
    return (
        <div style={{display: 'flex'}}>
         <IconButton aria-label="Grid"  color="primary" onClick={()=>setFavoriteContact({...data, favorite:!data.favorite})} >
                        <Avatar alt="User" src={data.favorite ? star : favorite} />
                    </IconButton>
        <Card className={classes.root} variant="outlined" style={{width:'100%'}}  onClick={()=>handleClick(data.id)}>
            {/* <CardHeader
                avatar={<div onClick={() => alert('aa')}><Avatar alt="Favorite" src={data.image} /></div>}
            /> */}
            <CardContent style={{justifyContent: 'space-between',     alignItems: 'center', display:'flex'}}>
                <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'flex-start',alignItems: 'center' }}>
                    <div style={{padding:'10%'}}>
                        
                            <Avatar alt="User" src={data.image} />
                        
                    </div>
                    <div>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.shortName}
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.created}
                    </Typography>
                </div>
            </CardContent>
        </Card>
        </div>
    );
}
const classes = {
    root: {
        minWidth: '16.6667%',
    }
};
export {CardBox, CardList};
