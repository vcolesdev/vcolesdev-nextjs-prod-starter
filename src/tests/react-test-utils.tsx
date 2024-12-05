import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import React from "react";

/**
 * Custom render function that wraps the component in a custom wrapper.  You can use this to wrap
 * components in providers, or to add custom context to the component.
 * @param ui
 * @param options
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
) =>
  render(ui, {
    wrapper: ({ children }) => <>{children}</>,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
export { default as userEvent } from "@testing-library/user-event";
