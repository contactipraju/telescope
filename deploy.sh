clear
git checkout master
git fetch -p
git pull
git checkout gh-pages
git merge origin/master
ng build --prod --base-href https://contactipraju.github.io/science-for-society/
ngh --dir=dist/science-for-society