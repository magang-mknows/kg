import { render } from "@testing-library/react";
import Assigment from "./AssigmentCard";

describe("Accordion Test", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Assigment titleAssigment={""} category={""} titleCourse={""} />,
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render text successfully", () => {
    const COMPONENT = render(
      <Assigment titleAssigment={"test"} category={"test-category"} titleCourse={"test-title"} />,
    );

    const text = COMPONENT.findAllByText("test");
    expect(text).toBeDefined();
  });

  it("id assigment card must 'test' ", () => {
    const COMPONENT = render(
      <Assigment titleAssigment={"test"} category={"test-category"} titleCourse={"test-title"} />,
    );

    const text = COMPONENT.findAllByTestId("accordion");
    expect(text).toBeDefined();
  });
});
