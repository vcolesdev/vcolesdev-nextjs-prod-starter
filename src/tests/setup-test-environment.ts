import "@testing-library/jest-dom/vitest";

// See <https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment>.

// Enable React 18's new root API in the test environment.
// @ts-expect-error - This is a placeholder error to replace @ts-ignore.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
