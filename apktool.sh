#!/bin/bash

clear
echo "🔥 APK Copier Tool 🔥"

echo "اكتب اسم التطبيق (package):"
read pkg

path=$(cmd package path $pkg | sed 's/package://')

if [ -z "$path" ]; then
    echo "❌ التطبيق غير موجود"
else
    cp "$path" /sdcard/Download/$pkg.apk
    echo "✅ تم النسخ إلى Download"
fi
