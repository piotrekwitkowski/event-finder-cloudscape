import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NewEventPage } from ".";

test('can be rendered', () => {
  waitFor(() => render(
    <BrowserRouter>
      <NewEventPage />
    </BrowserRouter>
  ));
});
