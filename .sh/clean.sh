#!/usr/bin/env sh

# Run pnpm clean in the root directory
git clean -fXd

# Change into the apps/ui directory
cd ./apps/+ui

# Run pnpm clean in the apps/ui directory
git clean -fXd

# Change back into the root directory
cd ../..