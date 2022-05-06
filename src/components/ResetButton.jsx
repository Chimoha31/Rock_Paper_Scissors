import React from 'react'

const ResetButton = ({gameReset}) => {

  const handleReset = () => {
    window.location.reload();
  }

  return (
    <div>{gameReset && <button onClick={handleReset}>Restart Game?</button>}</div>
  )
}

export default ResetButton
