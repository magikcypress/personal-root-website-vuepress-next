#!/usr/bin/env bash

release_url=https://github.com/magikcypress/personal-root-website-vuepress-next.git

if [ -d "/home/ipfs/personal-root-website-vuepress-next" ]
then
    cd /home/ipfs/personal-root-website-vuepress-next/
    git pull
else
    echo -e "\e[32m>> Downloading git repo ...\e[0m"
    git clone ${release_url}
    cd /home/ipfs/personal-root-website-vuepress-next/docs
    npm install
    yarn build
fi

cd /home/ipfs/personal-root-website-vuepress/docs/src/.vuepress/

echo -e "\e[32m>> Publishing directory to IPFS...\e[0m"
hash=$(ipfs add -r -Q dist)
publish=$(ipfs name publish $hash --allow-offline)
publishCID=$(echo $publish | awk '{print $3}' | sed 's/.$//')
ipfs name resolve $publishCID

#echo "https://gateway.ipfs.io/ipfs/$hash"
echo -e "\e[32m>> IPFS all files...\e[0m"
echo "https://ipfs.io/ipfs/$hash/"

echo -e "\e[32m>> IPFS publish files...\e[0m"
echo "https://ipfs.io/ipns/$publishCID/"