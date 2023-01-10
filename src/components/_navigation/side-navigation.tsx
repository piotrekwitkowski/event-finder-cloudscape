import { SideNavigation as PolarisSideNavigation, SideNavigationProps } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { onFollow } from "./on-follow";

/**
 * A component for displaying a side navigation menu, using the Cloudscape (AWS Polaris) library to prevent full page reloads when links in the menu are clicked.
 *
 * @param props - the component props
 * @param props.onFollow - an optional event handler for the "follow" event, called when a link in the menu is clicked. If not provided, an event handler will be used that prevents full page reloads.
 * @returns a component for displaying a side navigation menu
 */
export const SideNavigation = (props: SideNavigationProps) => {
  const navigate = useNavigate();
  return <PolarisSideNavigation {...props} onFollow={props.onFollow || onFollow(navigate)} />;
}
