#!/bin/bash
#
# Script to make this NPM module compatible to work with WeChat's mini-program
# (optional) 1st parameter is target path to save .wxs file (with prefixed directory namely lts/)
# 	if it's not supplied, then it will base on current directory

DIRNAME='ltsx'
DEST_PATH='./'$DIRNAME

if [ "$1" != "" ] && [ ! -z "$1" ]; then
	DEST_PATH=$1'/'$DIRNAME
fi

# create directories as if necessary
mkdir -p $DEST_PATH

# copy const-lang.js to be const-lang.wxs at destination path
cp -p const-lang.js $DEST_PATH/const-lang.wxs
# copy and parse ltsx.js to include pre-defined definitions then save it as lts.wxs at destination path
cp -p ltsx.js $DEST_PATH/ltsx.wxs
sed -i '' -E "s/var defs = {};/var preDefs = require('.\/defs.wxs');var defs = preDefs;/g" $DEST_PATH/ltsx.wxs

# copy defs-template.js to be defs.wxs at destination path
cp -p mp/defs-template.js $DEST_PATH/defs.wxs
# (we don't need index.js to be copied, it is only used for nodejs code)

echo 'done'