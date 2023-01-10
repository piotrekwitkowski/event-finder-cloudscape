import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from ".";

test('can be rendered', () => {
  // waitFor needed to supress warnings coming from Cloudscape rendering things
  waitFor(() => render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  ));
});
