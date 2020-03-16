#!/usr/bin/env sh

set -e

yarn run docs:build

echo 'note.wiki' > docs/CNAME

git add -A
git commit -m 'deploy'
git push
