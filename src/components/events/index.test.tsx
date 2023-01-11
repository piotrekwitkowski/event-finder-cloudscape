import { render, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { EventsPage } from ".";

test('can be rendered', () => {
  waitFor(() => render(
    <HashRouter>
      <EventsPage />
    </HashRouter>
  ));
});
