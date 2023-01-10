import { AppLayout, Header } from "@cloudscape-design/components";
import { BreadcrumbGroup } from "../_navigation";
import { Navigation } from "../app/navigation";
import { Content404 } from "./content";

export const Page404 = () => {
  return (
    <AppLayout
      breadcrumbs={<BreadcrumbGroup items={[{ text: '404', href: '' }]} />}
      content={<Content404 />}
      contentHeader={<Header variant="h1">404.</Header>}
      navigation={<Navigation />}
      toolsHide
    />
  )
}
