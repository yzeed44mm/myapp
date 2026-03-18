document.addEventListener('deviceready', function () {

    function copyAPK(packageName) {
        let source = "/data/app/" + packageName + "-1/base.apk";
        let destination = cordova.file.externalDataDirectory + packageName + ".apk";

        window.resolveLocalFileSystemURL(source, function(fileEntry) {
            window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir) {
                fileEntry.copyTo(dir, packageName + ".apk", function() {
                    alert("تم نسخ APK 😈");
                }, function(err) {
                    alert("فشل النسخ ❌");
                });
            });
        }, function(err) {
            alert("التطبيق غير موجود ❌");
        });
    }

    // مثال
    document.getElementById("btn").addEventListener("click", function(){
        copyAPK("com.whatsapp");
    });

});
