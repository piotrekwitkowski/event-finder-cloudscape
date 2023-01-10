import { AppLayout, Header } from "@cloudscape-design/components"
import { Navigation } from "../app/navigation"
import { BreadcrumbGroup } from "../_navigation"
import { Content } from "./content"

export const DashboardPage = () => {
  return (
    <AppLayout
      breadcrumbs={<BreadcrumbGroup items={[{ text: 'Dashboard', href: '/dashboard' }]} />}
      content={<Content />}
      contentHeader={<Header variant="h1">Dashboard</Header>}
      navigation={<Navigation />}
      toolsHide
    />
  )
}
