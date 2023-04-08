import { render, fireEvent } from "@testing-library/react";
import CheckboxField from "./CheckboxField";
import { CheckboxFieldProps } from "./types";

describe("CheckboxField", () => {
  const defaultProps: CheckboxFieldProps = {
    label: "Checkbox Label",
    name: "checkbox-name",
    value: "checkbox-value",
    onChange: jest.fn(),
    error: "Error Message",
    disabled: true,
  };

  it("should render checkbox with label", () => {
    const { getByLabelText } = render(
      <form>
        <CheckboxField {...defaultProps} />
      </form>,
    );
    const checkbox = getByLabelText(defaultProps.label as string);
    expect(checkbox).toBeInTheDocument();
  });

  it("should call onChange function when checkbox is clicked", () => {
    const { getByLabelText } = render(
      <form>
        <CheckboxField {...defaultProps} />
      </form>,
    );
    const checkbox = getByLabelText(defaultProps.label as string);
    fireEvent.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("should be disabled when disabled prop is passed", () => {
    const { getByLabelText } = render(
      <form>
        <CheckboxField {...defaultProps} />
      </form>,
    );
    const checkbox = getByLabelText(defaultProps.label as string);
    expect(checkbox).toBeDisabled();
  });

  it("should show error message when error prop is passed", () => {
    const { getByText } = render(
      <form>
        <CheckboxField {...defaultProps} />
      </form>,
    );
    const errorElement = getByText("Error Message");
    expect(errorElement).toBeInTheDocument();
  });
});
