
import { useState, useEffect } from 'react';

function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);
 
  useEffect(()=>{

    function handleOnline() {
      setIsOnline(true);
    }
    
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

    }

  },[])

  const styles = {
    main : {
      height : "500px",
      display : "flex",
      flexDirection : "column",
      gap : "1.5rem",
      textAlign : "center",
    },

    heading : {
      fontSize : "2rem",
      fontWeight : "200",
    },
    
    box : {
      display : "flex",
      justifyContent : "center",
      gap : "0.7rem",
      alignItems : "baseLine"
    },

    dot : {
      height : "1rem",
      width : "1rem",
      borderRadius : "50%",
    },

    para : {
      fontSize : "1.5rem",
    }

  }

  return (
    <div style={styles.main}>
      <h1 style={styles.heading}>Online & Offline Tracker</h1>
      
      <div style={styles.box}>
        <span style={{...styles.dot, backgroundColor :    
          isOnline ? "green" : "red",}}/>

        <p style={styles.para}>
          {isOnline ? 'You are Online  ✅ ' : 'You are Offline ❌ '}
        </p>
      </div>
     
    </div>
  );
}

export default App;
