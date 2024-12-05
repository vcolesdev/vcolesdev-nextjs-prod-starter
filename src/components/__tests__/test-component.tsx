import React from "react";
import { describe, expect, test } from "vitest";

import { render, screen } from "@/tests/react-test-utils";

/**
 * Test Component
 */
function TestComponent(): React.ReactNode {
  return <div>Test Component</div>;
}

describe("TestComponent", () => {
  test("given no props: renders some text", () => {
    render(<TestComponent />);

    expect(screen.getByText("Test Component")).toBeInTheDocument();
  });
});
