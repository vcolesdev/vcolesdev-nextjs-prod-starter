const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    "references-empty": [1, "never"],
    "footer-max-line-length": [0, "always"],
    "body-max-line-length": [0, "always"],
  },
};

export default Configuration;
