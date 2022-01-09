import React from 'react'
import { AboutPhotos, AboutText } from '.'

export default function About() {
  return (
    <section className='about-container'>
      <h1 className='about-title'>About</h1>
      <div className='about-content'>
        <AboutText />
        <AboutPhotos />
      </div>
    </section>
  )
}
