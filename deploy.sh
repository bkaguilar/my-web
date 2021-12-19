#!/bin/bash

rm -rf build
yarn build
rsync -avz --delete build/* bessy@bkaguilar.com:/srv/bkaguilar.com/
