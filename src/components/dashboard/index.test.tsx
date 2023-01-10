import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { DashboardPage } from ".";

test('can be rendered', () => {
  render(
    <BrowserRouter>
      <DashboardPage />
    </BrowserRouter>
  );
});
