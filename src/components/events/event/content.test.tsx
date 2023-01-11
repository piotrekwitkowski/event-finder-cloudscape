import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { getTestEvent } from "../../../test/mocks";
import { Content } from "./content";

test('can be rendered', () => {
  const testEvent = getTestEvent();
  render(
    <HashRouter>
      <Content event={testEvent} />
    </HashRouter>
  );
});
