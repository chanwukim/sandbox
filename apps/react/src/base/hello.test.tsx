import { render, screen } from "@testing-library/react";

import { Hello } from "./hello";

describe("Hello", () => {
  it("should render", () => {
    render(<Hello />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello World",
    );
  });
});
