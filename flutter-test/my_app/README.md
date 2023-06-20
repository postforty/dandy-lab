## flutter AR 테스트
+ ARCore 설정
  + arcore_flutter_plugin 설치
    ```
    flutter pub add arcore_flutter_plugin
    ```
    + 참고: https://pub.dev/packages/arcore_flutter_plugin/install
  + project 설정
    + 참고: https://pub.dev/packages/arcore_flutter_plugin
+ 이슈1
  + gradle 버전 이슈
    + android/build.gradle 에서 classpath 'com.android.tools.build:gradle:7.3.0' → classpath 'com.android.tools.build:gradle:7.1.2'
    + 참고: https://theplace.tistory.com/64 

