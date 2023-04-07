import { render, screen } from "@testing-library/react";
import FeatureDropdown from "./FeatureDropdown";
import { NavbarProps } from "./types";

describe("FeatureDropdown", () => {
  const navbarProps: NavbarProps = {
    list: [
      { name: "Item 1", link: "#" },
      { name: "Item 2", link: "#" },
      { name: "Item 3", link: "#" },
    ],
  };

  it("renders the dropdown button", () => {
    render(<FeatureDropdown {...navbarProps} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the dropdown menu when the button is clicked", () => {
    render(<FeatureDropdown {...navbarProps} />);
    const menu = screen.getByRole("menu");
    expect(menu).toBeInTheDocument();
  });
});
