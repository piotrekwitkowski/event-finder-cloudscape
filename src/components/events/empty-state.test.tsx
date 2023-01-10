import { render } from "@testing-library/react";
import { EmptyState } from "./empty-state";

test('can be rendered', () => {
  render(
    <EmptyState title="Title" subtitle="Subtitle" />
  );
});
