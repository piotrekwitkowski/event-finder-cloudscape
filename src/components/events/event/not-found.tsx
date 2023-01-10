import { Button, Header } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { Link } from "../../_navigation";

export const NotFoundEvent = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Header variant="h1">404.</Header>
      <Header variant="h2">The requested event could not be found.</Header>
      <Link data-testid="go-back" onFollow={() => navigate(-1)}><Button variant="primary">Go back</Button></Link>
    </>
  )
}
