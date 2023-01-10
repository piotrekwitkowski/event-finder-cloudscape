import { AppLayout, Header } from "@cloudscape-design/components"
import { Navigation } from "../../app/navigation"
import { BreadcrumbGroup } from "../../_navigation"
import { Content } from "./content"

export const NewEventPage = () => {
  return (
    <AppLayout
      breadcrumbs={<BreadcrumbGroup items={[{ text: 'Events', href: '/events' }, { text: 'New', href: 'new' }]} />}
      content={<Content />}
      contentHeader={<Header variant="h1">New Event</Header>}
      navigation={<Navigation />}
      toolsHide
    />
  )
}
