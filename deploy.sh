#!/usr/bin/env sh

set -ex

yarn run build

echo 'note.wiki' > docs/CNAME

git add -A
git commit -m 'Auto deploy'
git push
