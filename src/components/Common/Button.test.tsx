import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { MdSearch } from "react-icons/md";

describe("Button Component", () => {
  it("renders the button text and icon", () => {
    const text = "Test Button";
    const icon = <MdSearch data-testid="icon" />;
    render(<Button type={"button"} text={text} icon={icon} />);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders the button class", () => {
    const className = "test-class";
    render(<Button className={className} type={"button"} text="test" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(className);
  });

  it("handles click events", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} type="button" text="test" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders a disabled button", () => {
    const disabled = true;
    render(<Button disabled={disabled} type={"submit"} text="test" />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders a link button", () => {
    const page = "/test";
    render(<Button page={page} type="button" text="test" />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toEqual(page);
  });

  it("renders the button type", () => {
    const type = "submit";
    render(<Button type={type} text="test" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", type);
  });
});
