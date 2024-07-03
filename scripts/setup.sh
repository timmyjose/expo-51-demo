#!/usr/bin/env bash

set -euxo pipefail

echo "Performing prebuild..."
rm -rf android ios
npx expo prebuild