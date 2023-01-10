import { AppLayout } from "@cloudscape-design/components";
import { Navigation } from "../app/navigation";
import { BreadcrumbGroup } from "../_navigation";
import { Content } from "./content";

export const EventsPage = () => {
  return (
    <AppLayout
      breadcrumbs={<BreadcrumbGroup items={[{ text: 'Events', href: '/events' }]} />}
      content={<Content />}
      contentType="table"
      navigation={<Navigation />}
      toolsHide
    />
  )
}
