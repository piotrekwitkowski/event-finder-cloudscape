import { render, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { NewEventPage } from ".";

test('can be rendered', () => {
  waitFor(() => render(
    <HashRouter>
      <NewEventPage />
    </HashRouter>
  ));
});
