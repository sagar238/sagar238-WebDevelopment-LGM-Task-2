import React, {useState} from 'react';
import './App.css';
import Cards from './MyComponents/cards';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
  
function App() {
  const classes=useStyles();
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const btnClick = async () => {
    try {
      setButtonClick(true);
      
      fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((json) => {
          setCardData(json.data);
        })

        setInterval(() => {
          setLoading(true);
        }, 1500);
        
      }
      catch(e){
        console.log(e)
      }
  };

  return (
    <>
      
      <nav className="navbar_section">
        <div className="top_main_footer">
         <h2 id="main_title">LGMVIP</h2>
            <button className="button" type="button" onClick={btnClick}>GET USERS</button>
        </div>
      </nav>
      

      <div className='container'>
        <div className='row justify-content-center '>
          
          {buttonClick ? 
          (loading ? (<Cards cardData={cardData} />) : <Backdrop className={classes.backdrop}  open>
          <CircularProgress color="inherit" />
        </Backdrop> )
            :  ( <div className='body_section'>
              <h1>LGMVIP TASK 2</h1>
            </div>)
          }
        </div>
      </div>
    </>
  );
}

export default App;