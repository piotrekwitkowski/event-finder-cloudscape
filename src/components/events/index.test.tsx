import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EventsPage } from ".";

test('can be rendered', () => {
  waitFor(() => render(
    <BrowserRouter>
      <EventsPage />
    </BrowserRouter>
  ));
});
