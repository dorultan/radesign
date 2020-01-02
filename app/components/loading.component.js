import React from 'react';
import './loading.less';

const LoadingComponent = (props) => {

  return (
    <main className="loading">
      <div className="lds-ripple"><div></div><div></div></div>
    </main>
  )
}

export default LoadingComponent;
