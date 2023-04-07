import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render the copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText("2023 - www.kampusgratis.id - Hak Cipta Dilindungi.");
    expect(copyrightText).toBeInTheDocument();
  });

  it("should render the terms of use link", () => {
    render(<Footer />);
    const termsLink = screen.getByText("Terms of use");
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute("href", "/terms");
  });

  it("should render the privacy policy link", () => {
    render(<Footer />);
    const privacyLink = screen.getByText("Privacy Policy");
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });
});
