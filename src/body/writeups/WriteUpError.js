import React from 'react';

function WriteUpError() {
  return (
    <div>
      <h2>Error</h2>
      <p className="write-up-error">
        Error in fetching the write ups from the github. Feel free to check them out 
        <a href="https://github.com/Pitt-Cyber-Security/Write-Ups"> here</a>.
      </p>
    </div>
  )
}

export default WriteUpError;