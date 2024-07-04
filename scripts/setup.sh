#!/usr/bin/env bash

set -euxo pipefail

if [[ "$@" == *"--clean"* || "$@" == *"--full-clean"* ]]
then
    (
        echo "Cleaning up app artifacts"
        set +e
        set -x
        echo "Cleaning app/node_modules..."
        rm -rf ../../node_modules
        echo "Cleaning payy/ios and payy/android directories..."
        rm -rf ios android
        set -e
    )
fi

ANDROID_PREBUILD_DIR=android
IOS_PREBUILD_DIR=ios

# run `prebuild` iff the `android` and `iOS` directories do not exist
if [[ ! -d ${ANDROID_PREBUILD_DIR} ]] || [[ ! -d ${IOS_PREBUILD_DIR} ]]
then
    echo "Missing android and/or iOS directories, running expo prebuild..."
    npx expo prebuild
fi
