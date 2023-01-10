import { BreadcrumbGroup as PolarisBreadcrumbGroup, BreadcrumbGroupProps } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";
import { onFollow } from "./on-follow";

const HOME_BREADCRUMB = { text: 'Event Finder', href: '/' } as BreadcrumbGroupProps.Item;

/**
 * A component for displaying a group of breadcrumbs, using the Cloudscape (AWS Polaris) library
 * to prevent full page reloads when the breadcrumbs are clicked.
 *
 * @param props - the component props
 * @param props.onFollow - an optional event handler for the "follow" event, called when a breadcrumb is clicked. If not provided, an event handler will be used that prevents full page reloads.
 * @returns a component for displaying a group of breadcrumbs
 */
export const BreadcrumbGroup = (props: BreadcrumbGroupProps) => {
  const navigate = useNavigate();
  return <PolarisBreadcrumbGroup {...props} items={[HOME_BREADCRUMB, ...props.items]} onFollow={props.onFollow || onFollow(navigate)} />;
}

