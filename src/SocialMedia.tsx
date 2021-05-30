import React, { FunctionComponent } from 'react'
import './SocialMedia.css'

export const SocialMedia: FunctionComponent = () => (
  <section className="sm">
    <ul className="sm">
      <li>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-facebook"></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-twitter"></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-instagram"></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="fa fa-linkedin"></span>
        </a>
      </li>
    </ul>
  </section>
)
