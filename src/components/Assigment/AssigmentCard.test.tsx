import { render, screen } from "@testing-library/react";
import { StaticImageData } from "next/image";
import Assigment from "./AssigmentCard";

describe("Assigment Component", () => {
  it("renders the title and titleCourse", () => {
    const titleAssigment = "Test Title Assigment";
    const titleCourse = "Test Title Course";
    const imgAssigment = "/test-image.png" as unknown as StaticImageData;
    render(
      <Assigment
        imgAssigment={imgAssigment}
        titleAssigment={titleAssigment}
        titleCourse={titleCourse}
      />,
    );
    expect(screen.getByText(titleAssigment)).toBeInTheDocument();
    expect(screen.getByText(titleCourse)).toBeInTheDocument();
  });

  it("renders the category, date, and time", () => {
    const category = "Test Category";
    const date = "Test Date";
    const time = "Test Time";
    const imgAssigment = "/test-image.png" as unknown as StaticImageData;
    render(<Assigment imgAssigment={imgAssigment} category={category} date={date} time={time} />);
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(time)).toBeInTheDocument();
  });

  it("renders the correct image", () => {
    const imgAssigment = "/test-image.png" as unknown as StaticImageData;
    render(<Assigment imgAssigment={imgAssigment} />);
    const image = screen.getByAltText("Image");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toEqual(
      `/_next/image?url=%2F${(imgAssigment as unknown as string).replace("/", "")}&w=48&q=75`,
    );
  });

  it("renders the correct background line class", () => {
    const imgAssigment = "/test-image.png" as unknown as StaticImageData;
    const bgLine = "test-bgLine";
    render(<Assigment imgAssigment={imgAssigment} bgLine={bgLine} />);
    expect(screen.getByTestId(bgLine)).toHaveClass(bgLine);
  });
});
