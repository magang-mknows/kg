import { render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

describe("BreadCrumb Component", () => {
  it("renders the breadcrumb items", () => {
    const items = [
      { name: "Home", link: "/" },
      { name: "Category", link: "/category" },
      { name: "Product", link: "/category/product" },
    ];
    render(<BreadCrumb items={items} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(items.length - 1);
    links.forEach((link, index) => {
      expect(link).toHaveTextContent(items[index].name);
      expect(link).toHaveAttribute("href", items[index].link);
    });
    const lastItem = screen.getByText(items[items.length - 1].name);
    expect(lastItem).toBeInTheDocument();
  });

  it("renders the '>' separator between links", () => {
    const items = [
      { name: "Home", link: "/" },
      { name: "Category", link: "/category" },
      { name: "Product", link: "/category/product" },
    ];
    render(<BreadCrumb items={items} />);
    const separators = screen.getAllByText(">");
    expect(separators).toHaveLength(items.length - 1);
  });
});
