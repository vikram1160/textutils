import React from 'react'
import TextForm from '../components/TextForm';

export default function Home() {
  return (
    <div className='container'>

      <TextForm heading="Enter The Text To analyxe" mode={mode}/>
    </div>
  )
}
