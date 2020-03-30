#!/bin/bash

rm -rf build
yarn build
rsync -avz --delete build/* bkaguilar.com:bkaguilar.com/
