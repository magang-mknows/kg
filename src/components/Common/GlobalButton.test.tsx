import { render, fireEvent } from "@testing-library/react";
import GlobalButton from "./GlobalButton";

describe("GlobalButton", () => {
  const onClick = jest.fn();
  const text = "Test Button";
  const icon = <div data-testid="button-icon">Icon</div>;
  const to = "/test";

  it("renders text and icon", () => {
    const { getByText, getByTestId } = render(
      <GlobalButton icon={icon} text={text} onClick={onClick} />,
    );

    expect(getByText(text)).toBeInTheDocument();
    expect(getByTestId("button-icon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const { getByText } = render(<GlobalButton text={text} onClick={onClick} />);

    fireEvent.click(getByText(text));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders as link when to prop is provided", () => {
    const { getByText } = render(<GlobalButton to={to} text={text} />);

    expect(getByText(text).closest("a")).toHaveAttribute("href", to);
  });
});
