npm run build
# navigate into the build output directory
cd dist

cp index.html 404.html

echo 'www.ethanconneely.com' > CNAME

git init
git add -A
git commit -m 'deploy: '
git push -f git@github.com:IrishBruse/IrishBruse.github.io.git master:pages