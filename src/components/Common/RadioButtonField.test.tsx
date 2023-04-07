import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButtonField";

describe("RadioButton component", () => {
  const props = {
    id: "radio-button-1",
    value: "option-1",
    name: "radio-group",
    classNameInput: "radio-button",
    htmlFor: "radio-button-1",
    classNameLabel: "radio-label",
    onChange: jest.fn(),
    label: "Option 1",
  };

  it("renders with correct props", () => {
    render(<RadioButton {...props} />);
    const inputElement = screen.getByRole("radio");
    const labelElement = screen.getByText(props.label);
    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", props.id);
    expect(inputElement).toHaveAttribute("value", props.value);
    expect(inputElement).toHaveAttribute("name", props.name);
    expect(inputElement).toHaveClass(props.classNameInput);
    expect(labelElement).toHaveAttribute("for", props.htmlFor);
    expect(labelElement).toHaveClass(props.classNameLabel);
  });
});
