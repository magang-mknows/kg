import { render, screen } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";
import { DropdownProps } from "./types";

describe("DropdownMenu", () => {
  const mockList = [
    { icon: <span>Icon 1</span>, text: "Option 1" },
    { icon: <span>Icon 2</span>, text: "Option 2" },
    { icon: <span>Icon 3</span>, text: "Option 3" },
  ];

  const MockDropdown: React.FC<DropdownProps> = ({ children }) => {
    return <DropdownMenu list={mockList}>{children}</DropdownMenu>;
  };

  it("should render dropdown button with children", () => {
    render(
      <MockDropdown list={mockList}>
        <button>Toggle Dropdown</button>
      </MockDropdown>,
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Toggle Dropdown");
  });

  it("should render dropdown items with icon and text", () => {
    render(
      <MockDropdown list={mockList}>
        <button>Toggle Dropdown</button>
      </MockDropdown>,
    );

    const dropdownMenu = screen.getByRole("menu");
    expect(dropdownMenu).toBeInTheDocument();
  });
});
