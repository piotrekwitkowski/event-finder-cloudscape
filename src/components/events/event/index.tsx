import { AppLayout, Header } from "@cloudscape-design/components"
import { useParams } from "react-router-dom";
import { events } from "../../../db-mock/events";
import { Content404 } from "../../404/content";
import { Navigation } from "../../app/navigation";
import { BreadcrumbGroup } from "../../_navigation";
import { Content } from "./content";

export const EventPage = () => {
  const params = useParams<{ id: string }>();
  const event = events.find(x => x.id.toString() === params.id);

  const breadcrumbGroupItems = [{ text: 'Events', href: '/events' }, ...event ? [{ text: event.name, href: event.id.toString() }] : []];

  return (
    <AppLayout
      breadcrumbs={<BreadcrumbGroup items={breadcrumbGroupItems} />}
      content={event ? <Content event={event} /> : <Content404 />}
      contentHeader={<Header variant="h1">{event?.name || <>Event #{params.id}</>}</Header>}
      navigation={<Navigation activeHref="/events"/>}
      toolsHide
    />
  )
}
