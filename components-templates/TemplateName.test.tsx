import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TemplateName from "../src/components/TemplateName/TemplateName";

describe("<TemplateName />", () => {
  test("it should mount", () => {
    render(<TemplateName />);

    const templateName = screen.getByTestId("TemplateName");

    expect(templateName).toBeInTheDocument();
  });
});
