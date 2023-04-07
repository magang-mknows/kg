import { render, screen } from "@testing-library/react";
import { StaticImageData } from "next/image";
import PopupModal from "./PopupModal";

describe("PopupModal component", () => {
  const mockOnClose = jest.fn();
  const mockChildren = <div>Mock children</div>;
  const mockPopupTitle = "Mock popup title";
  const mockDescription = "Mock description";
  const mockIcon = "/mock-icon.png";
  const mockImage = "/mock-image.png";
  const mockClassName = "Mock class name";
  const mockStylePopup = "Mock style popup";
  const mockWidthModal = "Mock width modal";
  const mockHasImg = true;
  const mockHasButton = true;

  it("renders popup title and description correctly", () => {
    render(
      <PopupModal
        popupTitle={mockPopupTitle}
        description={mockDescription}
        lookup={true}
        onClose={mockOnClose}
        hasButton={mockHasButton}
        icon={mockIcon as unknown as StaticImageData}
        image={mockImage as unknown as StaticImageData}
        className={mockClassName}
        stylePopup={mockStylePopup}
        widthModal={mockWidthModal}
        hasImg={mockHasImg}
      >
        {mockChildren}
      </PopupModal>,
    );

    expect(screen.getByText(mockPopupTitle)).toBeInTheDocument();
    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <PopupModal
        popupTitle={mockPopupTitle}
        description={mockDescription}
        lookup={true}
        onClose={mockOnClose}
        hasButton={mockHasButton}
        icon={mockIcon as unknown as StaticImageData}
        image={mockImage as unknown as StaticImageData}
        className={mockClassName}
        stylePopup={mockStylePopup}
        widthModal={mockWidthModal}
        hasImg={mockHasImg}
      >
        {mockChildren}
      </PopupModal>,
    );

    expect(screen.getByText("Mock children")).toBeInTheDocument();
  });
});
