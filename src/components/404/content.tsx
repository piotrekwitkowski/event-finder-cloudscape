import { Button, Container, Header, TextContent } from "@cloudscape-design/components"
import { useNavigate } from "react-router-dom";
import { Link } from "../_navigation"

export const Content404 = () => {
  const navigate = useNavigate();

  return (
    <Container header={<Header variant="h2">The requested resource could not be found.</Header>}>
      <TextContent>
        <p>Please check the URL and try again.</p>
        </TextContent>
      <Link data-testid="go-back" onFollow={() => navigate(-1)}><Button variant="primary" iconName="arrow-left">Go back</Button></Link>
    </Container>
  )
}
