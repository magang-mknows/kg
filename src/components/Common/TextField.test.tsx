import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "./TextField";

describe("TextField", () => {
  const onChangeMock = jest.fn();
  const props = {
    type: "text",
    placeholder: "Enter text here",
    error: "This field is required",
    label: "Text field label",
    name: "textField",
    value: "",
    onChange: onChangeMock,
    disabled: false,
    success: "anjay mabar",
    warning: "mabar bosqu",
    required: true,
    className: "custom-class",
  };

  it("renders with correct props", () => {
    render(<TextField {...props} />);
    const inputElement = screen.getByRole("textbox");
    const labelElement = screen.getByText(props.label);
    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", props.type);
    expect(inputElement).toHaveAttribute("placeholder", props.placeholder);
    expect(inputElement).toHaveAttribute("name", props.name);
    expect(inputElement).toHaveAttribute("value", props.value);
    expect(inputElement).toBeEnabled();
    expect(inputElement).toHaveClass(props.className);
    expect(labelElement).toHaveTextContent(props.label);
    // eslint-disable-next-line quotes
    expect(labelElement).toContainHTML('<span class="font-bold text-red-700">*</span>');
  });

  it("calls onChange function when input value is changed", () => {
    render(<TextField {...props} />);
    const inputElement = screen.getByRole("textbox");
    const inputValue = "test value";
    userEvent.type(inputElement, inputValue);
    expect(onChangeMock).toHaveBeenCalledTimes(inputValue.length);
  });

  it("displays error message when error prop is provided", () => {
    render(<TextField {...props} />);
    const errorElement = screen.getByText(props.error);
    expect(errorElement).toBeInTheDocument();
  });

  it("displays warning message when warning prop is provided", () => {
    const warningProps = { ...props, error: "", warning: " anjay gak tuh" };
    render(<TextField {...warningProps} />);
    const warningElement = screen.getByText(props.error);
    expect(warningElement).toBeInTheDocument();
  });

  it("displays success message when success prop is provided", () => {
    const successProps = { ...props, error: "", success: "success dulu gak sih" };
    render(<TextField {...successProps} />);
    const successElement = screen.getByText(props.error);
    expect(successElement).toBeInTheDocument();
  });
});
