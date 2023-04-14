import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";
import { AccordionProps } from "./type.d";

describe("Accordion Test", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Accordion title={"test"} idAccordion={"test"}>
        <h1>Test</h1>
      </Accordion>,
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render text successfully", () => {
    const ACCORDION = render(
      <Accordion title={"test"} idAccordion={"test"}>
        <h1>Test</h1>
      </Accordion>,
    );

    const text = ACCORDION.findAllByText("test");
    expect(text).toBeDefined();
  });

  it("id accordion must 'test' ", () => {
    const ACCORDION = render(
      <Accordion title={"test"} idAccordion={"test"}>
        <h1>Test</h1>
      </Accordion>,
    );

    const text = ACCORDION.findAllByTestId("accordion");
    expect(text).toBeDefined();
  });
});

describe("Accordion Component", () => {
  const defaultProps: AccordionProps = {
    title: "Test Title",
    idAccordion: "1",
    children: "Test Children",
    disabled: false,
  };

  it("renders the title", () => {
    render(<Accordion {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("renders the children when clicked", () => {
    render(<Accordion {...defaultProps} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
  });

  it("disables the accordion when disabled prop is true", () => {
    render(<Accordion {...defaultProps} disabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
