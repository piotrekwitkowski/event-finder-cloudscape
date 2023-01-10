import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { getTestEvent } from "../../../test/mocks";
import { Content } from "./content";

test('can be rendered', () => {
  const testEvent = getTestEvent();
  render(
    <BrowserRouter>
      <Content event={testEvent} />
    </BrowserRouter>
  );
});
