import { Badge, SideNavigationProps } from "@cloudscape-design/components";
import { WIKI_LABEL, WIKI_LINK } from "../../consts";
import { SideNavigation } from "../_navigation";

export const Navigation = (props: SideNavigationProps) => {
  const isDev = import.meta.env;

  return (
    <SideNavigation
      activeHref={props.activeHref || location.pathname}
      header={{ href: "/home", text: "Event Finder" }}
      items={[
        { type: "link", text: "Dashboard", href: "/dashboard" },
        { type: "link", text: "All events", href: "/events" },
        { type: "link", text: "Add new event", href: "/events/new" },
        // { type: "link", text: "Settings", href: "/settings" },
        { type: "divider" },
        { type: "link", text: WIKI_LABEL, href: WIKI_LINK, external: true },
        isDev && { type: "divider" },
        isDev && { type: "link", text: "Environment info", href: "/env", info: <Badge color="blue">DEV</Badge> },
      ].filter(Boolean) as SideNavigationProps.Item[]}
    />
  )
}
