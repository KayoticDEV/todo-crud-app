#!/bin/bash
# Variable Declaration
TARGET=changedFilesCopyDir
FILE_EXT='.html'
HTML_FILES_AVAILABLE='false'
# HTML Files Check
for i in $(git --no-pager diff origin/main --name-only)
    do
        mkdir -p "$TARGET/$(dirname $i)"

        if [ ${i:~4} = $FILE_EXT ] ; then   
            cp "$i" "$TARGET/$i"
            HTML_FILES_AVAILABLE=true
        fi
    done

# Lighthouse Execution     
if [[ ${HTML_FILES_AVAILABLE} = true ]] ; then
    npm install
    npm run build
    npm install -g @lhci/cli@0.7.x
    lhci autorun
fi
rm -rf changedFilesCopyDir