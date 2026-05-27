// commitlint config for ts-for-gir
// Uses @commitlint/config-conventional as the base ruleset.
// Allowed types mirror the changelog preset in .release-it.json and
// the PR-title check in .github/workflows/pr-lint.yml so that every
// commit type that renders in the changelog is also accepted here.
"use strict";

module.exports = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        // Subject must start with a letter or backtick.
        // Mirrors the subjectPattern in .github/workflows/pr-lint.yml so
        // that local commit-msg validation is consistent with CI PR-title
        // validation.
        "subject-starts-with-letter-or-backtick": ({ subject }) => {
          const valid = subject && /^[A-Za-z`]/.test(subject);
          return [
            valid,
            valid
              ? ""
              : "The subject must start with a letter or backtick.\n" +
                "Examples:\n" +
                "  feat(cli): add --external-deps mode\n" +
                "  fix(lib): handle raw pointers (void*) like GJS",
          ];
        },
      },
    },
  ],
  rules: {
    // Restrict to the same type list used in .release-it.json (changelog
    // preset) and .github/workflows/pr-lint.yml (PR-title check).
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    // Delegate subject-start check to the custom plugin rule above.
    "subject-case": [0],
    "subject-starts-with-letter-or-backtick": [2, "always"],
  },
};
