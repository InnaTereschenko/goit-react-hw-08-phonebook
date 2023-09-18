import React from 'react';

const styles = {
alineItems: 'center',
paddingTop: '15px',
}

const NotFound = () => {
  return (
   
      <img width="500"
          src="https://http.cat/404"
          // src='src/images/file.webp'
          alt="Error 404. Not Found"
      style={styles}/>
    
  );
};

export default NotFound;