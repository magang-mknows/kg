import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotificationDropdown from "./NotificationDropdown";

describe("NotificationDropdown", () => {
  const mockList = [
    { link: "/link1", name: "Notification 1", time: "10m" },
    { link: "/link2", name: "Notification 2", time: "20m" },
    { link: "/link3", name: "Notification 3", time: "30m" },
  ];

  it("should render the button with the correct number of notifications", () => {
    render(<NotificationDropdown list={mockList} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(mockList.length.toString());
  });

  it("should render the dropdown menu when the button is clicked", () => {
    render(<NotificationDropdown list={mockList} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const dropdownMenu = screen.getByRole("menu");
    expect(dropdownMenu).toBeInTheDocument();
  });
});
