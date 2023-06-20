# dandy-lab
## 환경 변수 설정
+ npm i dotenv
+ npm i env-cmd
+ package.json
  + env-cmd를 이용해 환경 변수 적용
```
"scripts": {
  ... 생략 ...
  "start:dev": "env-cmd -f .env npm start"
},
```

 

