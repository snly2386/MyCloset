import React from 'react'
import Header from '../Header'

export default ({children}) => {
  return (
    <div>
      <Header />
      <h3>THIS IS THE APP PORTION BITCHES</h3>
      {children}
    </div>
  )
}
