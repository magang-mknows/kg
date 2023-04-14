import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal component", () => {
  const handleClose = jest.fn();

  it("renders modal correctly with title, children, and image", () => {
    render(
      <Modal title="Test Modal" hasImage={true} onClose={handleClose} lookup={true}>
        <p>Test content</p>
      </Modal>,
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(screen.getByAltText("Logo kg")).toBeInTheDocument();
  });

  it("renders modal without title and with close button", () => {
    render(
      <Modal withClose={true} onClose={handleClose} lookup={true}>
        <p>Test content</p>
      </Modal>,
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", () => {
    render(
      <Modal withClose={true} onClose={handleClose} lookup={true}>
        <p>Test content</p>
      </Modal>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
