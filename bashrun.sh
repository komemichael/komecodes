git add .
git commit -m "update $1"
git push origin main

npm version patch
npm publish

exit 0