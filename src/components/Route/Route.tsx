import * as React from 'react'
import { Route as OriginalRoute, RouteProps } from 'react-router-dom'

import ToolbarLayout from 'layouts/ToolbarLayout'

interface Props extends RouteProps {
  layout?: React.ReactType
}

const Route: React.SFC<Props> = ({ layout: Layout = ToolbarLayout, ...props }) => (
  <Layout>
    <OriginalRoute {...props} />
  </Layout>
)

export default Route
