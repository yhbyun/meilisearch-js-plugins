#!/bin/sh

yarn build
cp -a ./packages/autocomplete-client/dist/autocomplete-client.umd.min.js ~/work/_working/sites/ecplaza-korean-suppliers/public/js/autocomplete-client.js
# diff ./packages/autocomplete-client/dist/autocomplete-client.umd.min.js ~/work/_working/sites/ecplaza-korean-suppliers/public/js/autocomplete-client.js
