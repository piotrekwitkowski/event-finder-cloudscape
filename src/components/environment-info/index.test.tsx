import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { EnvironmentInfoPage } from ".";

test('can be rendered', () => {
  render(
    <BrowserRouter>
      <EnvironmentInfoPage />
    </BrowserRouter>
  );
});
