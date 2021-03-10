clear
git checkout master
git fetch -p
git pull
git checkout gh-pages
git merge origin/master

ng build --prod --output-path dist/telescope --base-href="https://contactipraju.github.io/telescope/"
sudo ngh --dir=dist/telescope

#ng deploy --base-href=/telescope/ --no-silent

#ng build --prod --base-href=/telescope/
#npx angular-cli-ghpages

git checkout master
git pull