import React from 'react';

const WithClass2 = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
}


export default WithClass2;