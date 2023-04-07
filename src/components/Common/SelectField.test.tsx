import { render, fireEvent } from "@testing-library/react";
import SelectField from "./SelectField";

describe("SelectField", () => {
  const options = [
    { value: "option1", label: "Option 1", className: "option1" },
    { value: "option2", label: "Option 2", className: "option2" },
    { value: "option3", label: "Option 3", className: "option3" },
  ];

  it("renders with correct props", () => {
    const props = {
      label: "Select an option",
      name: "selectOption",
      value: "option1",
      defaultValue: "option1",
      onChange: jest.fn(),
      options,
    };
    const { getByLabelText, getByText } = render(<SelectField {...props} />);

    const selectElement = getByLabelText(props.label);
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute("name", props.name);
    expect(selectElement).toHaveValue(props.value);

    options.forEach((option) => {
      const optionElement = getByText(option.label);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute("value", option.value);
      expect(optionElement).toHaveClass(option.className);
    });
  });

  it("calls onChange function when option is selected", () => {
    const props = {
      label: "Select an option",
      name: "selectOption",
      value: "option1",
      onChange: jest.fn(),
      options,
    };
    const { getByLabelText, getByText } = render(<SelectField {...props} />);

    const selectElement = getByLabelText(props.label);
    fireEvent.change(selectElement, { target: { value: "option2" } });
    expect(props.onChange).toHaveBeenCalledTimes(1);

    const optionElement = getByText("Option 2");
    fireEvent.click(optionElement);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  it("displays error message when error prop is passed", () => {
    const props = {
      label: "Select an option",
      name: "selectOption",
      value: "",
      onChange: jest.fn(),
      options,
      error: "Please select an option",
    };
    const { getByText } = render(<SelectField {...props} />);

    const errorElement = getByText(props.error);
    expect(errorElement).toBeInTheDocument();
  });
});
