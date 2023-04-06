import { render, screen } from "@testing-library/react";
import DashedText from "./DashedText";

describe("DashedText component", () => {
  it("renders the correct text", () => {
    const text = "Atau";
    render(<DashedText text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders the dashed line", () => {
    render(<DashedText />);
    expect(screen.getByTestId("dashed-line")).toBeInTheDocument();
  });
});
