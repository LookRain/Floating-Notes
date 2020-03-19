# taken from https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1589
#!/bin/bash

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"/..
RSC="$ROOT/resources"
SRC="${RSC}/icons/1024x1024.png"

echo $SRC

if [ ! -f "$SRC" ]; then
  echo "Please create resources/icons/1024x1024.png before running this script."
  exit
fi

rm -f "$RSC/icon.ico" "$RSC/icon.icns" "$RSC/icon.png"

# Declare an array of string with type
declare -a sizes=("16 24 32 48 64 96 128 256 512" )

# Iterate the string array using for loop
for size in ${sizes[@]}; do
  DST="$RSC/icons/${size}x${size}.png"
  echo $DST
  rm -f $DST
  convert -resize ${size}x${size}! "$SRC" "$DST"
done

cp "$RSC"/icons/256x256.png "$RSC"/icon.png


ICONSET="$ROOT"/.tmp/Icons.iconset
mkdir  -p "$ICONSET"

echo $ICONSET
sips -z 16 16     "$SRC" --out "$ICONSET"/icon_16x16.png
sips -z 32 32     "$SRC" --out "$ICONSET"/icon_16x16@2x.png
sips -z 32 32     "$SRC" --out "$ICONSET"/icon_32x32.png
sips -z 64 64     "$SRC" --out "$ICONSET"/icon_32x32@2x.png
sips -z 128 128   "$SRC" --out "$ICONSET"/icon_128x128.png
sips -z 256 256   "$SRC" --out "$ICONSET"/icon_128x128@2x.png
sips -z 256 256   "$SRC" --out "$ICONSET"/icon_256x256.png
sips -z 512 512   "$SRC" --out "$ICONSET"/icon_256x256@2x.png
sips -z 512 512   "$SRC" --out "$ICONSET"/icon_512x512.png
cp "$SRC" "$ICONSET"/icon_512x512@2x.png
iconutil -c icns -o "$RSC/icon.icns" "$ICONSET"
convert "$RSC/icons"/16x16.png "$RSC/icons"/32x32.png "$RSC/icons"/48x48.png "$RSC/icons"/64x64.png "$RSC/icons"/128x128.png "$RSC/icons"/256x256.png "$RSC"/icon.ico

cp "$RSC"/icon.icns "$ROOT"/app/app.icns

rm -rf "$ICONSET"