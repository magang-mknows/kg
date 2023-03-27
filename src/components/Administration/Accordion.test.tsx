import { render } from "@testing-library/react";
import Accordion from "./Accordion";

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
