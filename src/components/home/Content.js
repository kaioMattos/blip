
import Grid from './Grid';
import { Main } from '../style';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import ImageBlock from '../../assets/organize-blocks.png';
import ImageList from '../../assets/organize-list.png';

function getmdsFavorites(mockContacts) {
    const mFavorites = mockContacts.filter(contact => (
        contact.favorite
    ));
    const mNoFavorites =  mockContacts.filter(contact => (
        !contact.favorite
    ))
    return {mFavorites, mNoFavorites}
}

function Content() {
    
    const mockContacts = useSelector(state => state.data)

    const dispath = useDispatch();
    const {mFavorites, mNoFavorites} = getmdsFavorites(mockContacts);    
    const [lInfo, setLInfo] = useState('graph');
    const [mOrderBy, setMorderBy] = useState({shortName:true,created:true});
    function filterContact(oEvent){
        // console.log(oEvent.target.value.length)
        // if(oEvent.target.value.length > 0)
            dispath({type:'FILTER_CONTACT', valueFilter:oEvent.target.value})
    };
    function orderBy(prop){
        const objChangedState = Object.defineProperty({...mOrderBy}, prop, {
            value: !mOrderBy[prop]           
          });        
        
        dispath({type:'ORDERBY_CONTACT', objOrder:{prop, order:mOrderBy[prop]}});
        setMorderBy({...objChangedState })
    };
   
    return (
        <Main>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ color: '#56616e' }}>Meus ChatBots</h1>
                </div>
                <div style={{ padding: 10 }}>
                    <TextField id="filled-basic"  onChange={(oEvent)=>filterContact(oEvent)} style={{ backgroundColor: '#fff' }} color="primary" variant="outlined" placeholder="Pesquisar" />
                    <Button variant="contained" color="primary" style={{ margin: 10 }} onClick={()=>orderBy('shortName')}>
                        Ordem por Nome
                    </Button>
                    <Button variant="contained" color="primary" onClick={()=>orderBy('created')}>
                        Ordem por data Criação
                    </Button>
                    <IconButton aria-label="Grid" onClick={() => { setLInfo('graph')}} color="primary" style={{ opacity: lInfo === 'graph'? '1.0':'0.3' }} >
                        <Avatar alt="User" src={ImageBlock} />
                    </IconButton>
                    <IconButton aria-label="List" onClick={() => { setLInfo('line')}}  color="primary" style={{ opacity: lInfo === 'graph'? '0.3':'1.0' }}>
                        <Avatar alt="User" src={ImageList} />
                    </IconButton>
                </div>
            </div>
            <h2 style={{ color: '#637d9b' }}>Favoritos</h2>
            {
                lInfo === 'graph'?
                    <Grid data={mFavorites} type="Grid" props={{marginMop: '3%'}} />:
                    <Grid data={mFavorites} type="List" props={{}}/>
            }
           
            <hr
                style={{
                    color: '#dde7ec',
                    backgroundColor: '#dde7ec',
                    height: 2,
                    border: 'none',
                    margin: '2% 0 2% 0'
                }}
            />
            {
                lInfo === 'graph'?
                    <Grid data={mNoFavorites} type="Grid" />:
                    <Grid data={mNoFavorites} type="List"/>
            }            
        </Main>

    );
}
export default Content;
