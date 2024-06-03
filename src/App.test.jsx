import { expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import App from "./App.jsx";
import { mockServer, mock } from "./apiMock.js";

const DOG_API_URL = "http://localhost:5001/dogs";

beforeAll(function () { mockServer.listen() });
afterEach(function () { mockServer.resetHandlers() });
afterAll(function () { mockServer.close() });

test('renders the main page with dogs from api', async function () {
  // mock("get", DOG_API_URL, data-you-want);

  const { container, queryByText } = render(<App/>);
  await vi.waitUntil(() => queryByText("Welcome!"));

  const nav = container.querySelector("nav");
  expect(nav).toBeInTheDocument();
});
