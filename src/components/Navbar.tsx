import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper indigo darken-1 p-5">
      <a href="/todo-ts" className="brand-logo">
        Todo with TS
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/todo-ts">Todo List</NavLink>
        </li>
        <li>
          <NavLink to="/todo-ts/about">Information</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
