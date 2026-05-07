<!--
  PR title must follow Conventional Commits: <type>(<optional-scope>): <subject>

  PRs are squash-merged, so the PR title becomes the commit message that
  release-it parses to build the changelog. Titles that don't match the
  spec are silently dropped from release notes (the PR Lint check enforces
  this on every PR).

  Allowed types: feat, fix, docs, refactor, perf, test, build, ci, chore, revert
  Examples:
    feat(cli): add --external-deps mode
    fix(lib): handle raw pointers (void*) like GJS
-->

## Description
<!-- Describe your changes in detail -->

## Related Issue
<!-- Please link to the issue here -->
Fixes #

## Type of Change
<!-- Please delete options that are not relevant -->
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Type definition update
- [ ] Documentation update

## Validation
<!-- If this PR includes code changes, please describe how they are validated -->

**Test Location:** `examples/[feature-name].ts`

**Test Case:**
```typescript
// Minimal test case demonstrating the changes
import Gio from 'gi://Gio';

// Example code
```

**Expected Behavior:**
1. Code should compile without type errors
2. Runtime behavior should match documentation/GJS implementation

## Checklist
<!-- Please check all that apply -->
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing tests pass locally with my changes
- [ ] I have updated the documentation accordingly 