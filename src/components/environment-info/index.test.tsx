import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { EnvironmentInfoPage } from ".";

test('can be rendered', () => {
  render(
    <HashRouter>
      <EnvironmentInfoPage />
    </HashRouter>
  );
});
