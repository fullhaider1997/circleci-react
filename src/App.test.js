import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world from haider ibrahim/i);
  expect(linkElement).toBeInTheDocument("Hello world from haider ibrahim");
});
