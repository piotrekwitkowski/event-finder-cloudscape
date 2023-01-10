import { BaseNavigationDetail } from "@cloudscape-design/components/internal/events";
import { NavigateFunction } from "react-router-dom";

/**
 * Returns a function that can be used as an event handler for an "onFollow" event.
 * When the returned function is called, it will use the provided navigate function
 * to navigate to the specified href, unless the event specifies an external link or
 * no href is provided.
 *
 * @param navigate - a function for navigating to a new location
 * @returns a function that can be used as an event handler for a "onFollow" event
 */
export const onFollow = (navigate: NavigateFunction) => (e: CustomEvent<BaseNavigationDetail>) => {
  // use navigation without page reload for internal links and if href is actually specified
  if (!e.detail.external && e.detail.href) {
    e.preventDefault();
    navigate(e.detail.href);
  }
  // else use the default behaviour
};
