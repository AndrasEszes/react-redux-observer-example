import * as React from 'react'
import { Link } from 'react-router-dom'

const ToolbarLayout: React.SFC = ({ children }) => (
  <>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
    <hr/>
    <div>
      {children}
    </div>
  </>
)

export default ToolbarLayout
