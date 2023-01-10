import { AppLayout, Header } from "@cloudscape-design/components"
import { Navigation } from "../app/navigation"
import { BreadcrumbGroup } from "../_navigation"
import { Content } from "./content"

export const EnvironmentInfoPage = () => {
  return (
    <AppLayout
      breadcrumbs={<BreadcrumbGroup items={[{ text: 'Environment Info', href: '' }]} />}
      content={<Content />}
      contentHeader={<Header variant="h1">Environment Info</Header>}
      navigation={<Navigation />}
      toolsHide
    />
  )
}
