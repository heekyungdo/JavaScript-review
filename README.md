# JavaScript

## async vs defer

### <head>내에 <script>하기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

![script1](https://user-images.githubusercontent.com/85210506/138698985-811d3b00-c398-400b-b0ae-c276c8dfdecd.jpg width=40)

  
##### 과정

1. HTML을 위에서 아래로 쭉 parsing
2. script 태그가 보이면 main.js를 다운
3. parsing을 멈춘다.
4. 필요한 자바스크립트 파일을 서버에서 다운
5. 자바스크립트 파일 실행
6. 다시 parsing 진행

##### 단점

1. js 파일이 크고, 인터넷이 느리다면 사용자가 웹사이트를 보는데까지 많은 시간이 소요된다.

---

### <body>내 끝에 <script>하기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div></div>
    <script src="main.js"></script>
  </body>
</html>
```

![script2](https://user-images.githubusercontent.com/85210506/138699083-49ecca9d-b313-4646-b600-f1193da4fdef.jpg width=40)

  
##### 과정

1. 브라우저가 HTML 다운 후 위에서 아래로 parsing 후 페이지 준비
2. script 태그가 보이면 서버에서 자바스크립트 파일 받아온다. (fetching)

##### 특징

1. 사용자가 js를 받기 전에도 페이지를 볼 수 있다.
2. 사용자가 기본적인 컨텐츠를 빨리 볼 수 있다.

##### 단점

1. 웹사이트가 js에 의존적이라면. 즉, 사용자가 의미있는 컨텐츠를 보기 위해서는 자바스크립트를 이용해서 서버에 있는 데이터를 받아오거나, DOM 요소를 더 예쁘게 꾸미는 방식으로 동작하는 웹사이트라면 사용자가 정상적인 페이지를 보기 전까지는 사용자가 패칭, 사용하는 시간까지 기다려야한다.

---

### HEAD + async

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script async src="main.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
``` 
![script3](https://user-images.githubusercontent.com/85210506/138699160-0a834cab-6aef-4153-b7d7-2462cca63108.jpg width=40)
  
![script 여러개 정의 시](https://user-images.githubusercontent.com/85210506/138699248-1637106f-4ccb-431a-acfc-b8eb1ddcf0b8.jpg width=40)

  
##### 과정

1. 브라우저가 HTML 다운 후 parsing 하다가
2. async를 확인 후 병렬로 main.js 파일을 다운 받으라고 명령한다.
3. 명령 후 HTML parsing하다가
4. main.js 다운 완료되면 그때 parsing 멈춘 후 다운 완료된 main.js 실행
5. main.js 실행 완료 후 나머지 HTML parsing한다.

##### 장점

1. fetching이 parsing하는 동안 병렬적으로 일어나기 때문에 다운로드 받는 시간 절약할 수 있다.

##### 단점

1.  자바스크립트가 HTML이 parsing되기도 전에 실행이 되기 때문에 querySelector를 이용해 DOM요소를 조작하는 코드가 있다면, 조작하려고 하는 시점에 HTML이 원하는 요소가 아직 정의되어 있지 않을 수가 있다.
2.  HTML을 parsing하는 동안에 언제든지 자바스크립트를 실행하기 위해서 멈출 수 있기 때문에 사용자가 페이지를 보는데 시간이 걸릴 수 있다.
3.  자바스크립트를 여러개 script하면 정의된 script 순서와는 상관없이 먼저 다운된 자바스크립트부터 실행이 되기 때문에 순서에 의존적인 자바스크립트라면 문제가 발생한다.

---

### HEAD + defer

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script defer src="main.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

![script4](https://user-images.githubusercontent.com/85210506/138699361-e2b8b60d-784d-4551-9606-da63e04082df.jpg width=40)
![script 여러개 정의 시](https://user-images.githubusercontent.com/85210506/138699368-43be2115-bb0f-4267-936c-767ddcefec2a.jpg width=40)

  
##### 과정

1. 브라우저가 HTML 다운 후 parsing 하다가
2. script defer를 확인 후 main.js 다운 받으라고 명령한다.
3. 명령 후 나머지 HTML을 끝까지 parsing한다.
4. HTML parsing을 끝낸 다음에 다운된 자바스크립트를 실행한다.

##### 장점

1. fetching이 parsing하는 동안 병렬적으로 일어나기 때문에 다운로드 받는 시간 절약할 수 있다.
2. parsing하는 동안 자바스크립트 다운을 다 받아놓은 이후 순서대로 실행하기 때문에 원하는대로 스크립트가 실행된다.

##### 단점

1.  자바스크립트가 HTML이 parsing되기도 전에 실행이 되기 때문에 querySelector를 이용해 DOM요소를 조작하는 코드가 있다면, 조작하려고 하는 시점에 HTML이 원하는 요소가 아직 정의되어 있지 않을 수가 있다.
2.  HTML을 parsing하는 동안에 언제든지 자바스크립트를 실행하기 위해서 멈출 수 있기 때문에 사용자가 페이지를 보는데 시간이 걸릴 수 있다.

---
