# `setup-reliza-cli`

## About
This action, sets up the RelizaHub CLI, [`reliza-cli`](https://github.com/relizaio/reliza-cli), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, `windows-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `reliza-cli` CLI on the runner environment.

## Usage

Setup the `reliza-cli` CLI:

```yaml
steps:
- uses: relizaio/setup-reliza-cli@v1
```

A specific version of the `reliza-cli` CLI can be installed:

```yaml
steps:
- uses: relizaio/setup-reliza-cli@v1
  with:
    version:
      2022.12.5
```

## Inputs
The actions supports the following inputs:

- `version`: The version of `reliza-cli` to install, defaulting to `2022.12.5`
