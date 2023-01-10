import { render, waitFor } from "@testing-library/react";
import { App } from ".";

test('smoke test for App', () => {
  // waitFor needed to supress warnings coming from Cloudscape rendering things
  waitFor(() => render(
    <App />
  ));
});
