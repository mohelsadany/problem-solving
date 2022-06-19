#i/bin/bash


#download dir 
downloadPath = "./downloads"

# check if download dir not exists
if [ ! -d $downloadPath ]; then
echo "Creating download dir"
    mkdir $downloadPath
fi


# get playlist url
echo "Enter playlist url:"
read playlistUrl


#ask for subtitle
echo "Do you want to download subtitles? (y/n)"
read subtitle

if [ $subtitle == "YES" ] || [ $subtitle == "yes"] ; 
 then
    ./config/loader.exe --write-auto-sub --config-location ./config/setting.conf -url $url 
else
    ./config/loader.exe --config-location ./config/setting.conf -url $url
fi
#let the fun begin