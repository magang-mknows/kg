import { render, screen } from "@testing-library/react";
import OptionField from "./OptionField";

describe("OptionField component", () => {
  it("should render the label and value properly", () => {
    const value = "option-value";
    const label = "Option Label";
    render(<OptionField value={value} label={label} />);
    const option = screen.getByText(label);
    expect(option).toBeInTheDocument();
    expect(option).toHaveValue(value);
  });
});
