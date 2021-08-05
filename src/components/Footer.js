import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useLocation  } from 'react-router-dom';
function Footer() {
    const location = useLocation()
    console.log(location.pathname) // /topics/:topicId/:subId    
    return (
        <div className="App">
            {
                location.pathname === '/'?
                    <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '15px', right: '10px' }}>
                        <AddIcon />
                    </Fab>
                :<div></div>
            }
           
        </div>
    );
}
export default Footer;
