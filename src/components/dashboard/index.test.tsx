import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { DashboardPage } from ".";

test('can be rendered', () => {
  render(
    <HashRouter>
      <DashboardPage />
    </HashRouter>
  );
});
