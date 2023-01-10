import { Container, Header, TextContent } from "@cloudscape-design/components";
import { Event } from "../../../types";
import { Link } from "../../_navigation";

interface Props {
  event: Event
}

export const Content = (props: Props) => {
  const { event } = props;

  return (
    <Container header={<Header variant="h2">Event details</Header>}>
      <TextContent>
        <h2>Location</h2>
        <p>{event.location}</p>

        <h2>Date</h2>
        <p>{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>

        <h2>Website</h2>
        <p><Link external href={event.url}>{event.url}</Link></p>
      </TextContent>
    </Container>
  );
}
