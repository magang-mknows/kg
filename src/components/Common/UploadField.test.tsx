import { render, screen } from "@testing-library/react";
import UploadField from "./UploadField";

describe("UploadField", () => {
  it("renders correctly with label", () => {
    const label = "Upload File";
    const { container } = render(<UploadField hasLabel label={label} name={""} />);
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
    expect(container.querySelector("input[type=file]")).toBeInTheDocument();
  });

  it("renders correctly without label", () => {
    const { container } = render(<UploadField hasLabel={false} name={""} />);
    expect(container.querySelector("input[type=file]")).toBeInTheDocument();
  });

  it("displays error message", () => {
    const errorMessage = "File is too large";
    render(<UploadField error={errorMessage} name={""} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByTestId("warning-icon")).toBeInTheDocument();
  });

  it("displays success message", () => {
    const successMessage = "File uploaded successfully";
    render(<UploadField success={successMessage} name={""} />);
    expect(screen.getByText(successMessage)).toBeInTheDocument();
  });

  it("displays warning message", () => {
    const warningMessage = "File may contain a virus";
    render(<UploadField warning={warningMessage} name={""} />);
    expect(screen.getByText(`/${warningMessage}/`)).toBeInTheDocument();
  });
});
