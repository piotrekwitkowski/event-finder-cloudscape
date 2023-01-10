import { Link as PolarisLink, LinkProps } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { onFollow } from "./on-follow";

/**
 * A component for displaying a link, using the Cloudscape (AWS Polaris) library to prevent full page reloads when the link is clicked.
 *
 * @param props - the component props
 * @param props.children - the content to be displayed inside the link
 * @param props.onFollow - an optional event handler for the "follow" event, called when the link is clicked. If not provided, an event handler will be used that prevents full page reloads.
 * @returns a component for displaying a link
 */
export const Link = (props: LinkProps) => {
  const navigate = useNavigate();
  return <PolarisLink {...props} onFollow={props.onFollow || onFollow(navigate)} >{props.children}</PolarisLink>;
}
