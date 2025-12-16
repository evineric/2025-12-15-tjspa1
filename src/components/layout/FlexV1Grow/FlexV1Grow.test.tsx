import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FlexV1Grow from "../src/components/FlexV1Grow/FlexV1Grow";

describe("<FlexV1Grow />", () => {
  test("it should mount", () => {
    render(<FlexV1Grow />);

    const flexV1Grow = screen.getByTestId("FlexV1Grow");

    expect(flexV1Grow).toBeInTheDocument();
  });
});
