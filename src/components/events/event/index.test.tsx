import { render, waitFor } from "@testing-library/react";
import * as router from "react-router-dom";
import { vi } from "vitest";
import { EventPage } from ".";

const mockedUseParams = vi.fn();
vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual<typeof import('react-router-dom')>('react-router-dom')),
  useParams: () => mockedUseParams,
}));

test('can be rendered with correct (known) event id', async () => {
  vi.spyOn(router, 'useParams').mockImplementationOnce(() => ({ id: "1" }));
  waitFor(() => render(
    <router.BrowserRouter>
      <EventPage />
    </router.BrowserRouter>
  ));
});

test('can be rendered with incorrect (unknown) event id', async () => {
  vi.spyOn(router, 'useParams').mockImplementationOnce(() => ({ id: "-1" }));
  waitFor(() => render(
    <router.BrowserRouter>
      <EventPage />
    </router.BrowserRouter>
  ));
});
