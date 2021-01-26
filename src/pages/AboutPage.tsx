import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Information Page</h1>
      <h5>
        Technology stack: Typescript, JavaScript, HTML, MaterializeCSS
      </h5>
      <br />
      <hr />
      <br />
      <button className="btn waves-effect waves-light indigo darken-4" onClick={() => history.push('/')}>
        Back to Todo List
      </button>
    </>
  )
}
