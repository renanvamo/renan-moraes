import React from 'react'
import { AboutPhotos, AboutText } from '.'

export default function About() {
  return (
    <section className='about-container'>
      <h2 className='about-title'>about.</h2>
      <div className='about-content'>
        <AboutText />
        <AboutPhotos />
      </div>
    </section>
  )
}
