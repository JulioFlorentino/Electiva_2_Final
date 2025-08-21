import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("muestra Hola Mundo 🚀", () => {
  render(<App />);
  expect(screen.getByText(/Hola Mundo 🚀/i)).toBeInTheDocument();
});
