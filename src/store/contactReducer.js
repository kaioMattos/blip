import dataMock from '../model/dataMock';
import {compare} from '../utilities'

const INITIAL_STATE = {
    data:dataMock,
    dataFiltered:[],
    contact:{}
};

function contacts(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_CONTACT':
            return {...state, data:[...state.data, action.contact]};
        case 'SET_FAVORITE_CONTACT':          
            return {...state, data:[...state.data.map(contact=>{                
                if(contact.name === action.contact.name){                    
                    return {...contact, favorite:action.contact.favorite }
                }
                return contact
            })]};
        case 'FILTER_CONTACT':                       
            return {...state, data:[...dataMock.filter(contact=>(contact.shortName.startsWith(action.valueFilter)))]};
        case 'ORDERBY_CONTACT':                        
            return {...state, data:[...state.data.sort( compare(action.objOrder) )]};
        case 'FIND_CONTACT':       
        console.log(dataMock.find((contact)=>(contact.id === parseInt(action.id))))                        
            return {...state, contact:{...dataMock.find((contact)=>(contact.id === parseInt(action.id)))}};
        default:
            return state;
    }
}

export default contacts