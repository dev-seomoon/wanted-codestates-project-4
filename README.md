# 디에이그라운드 기업과제 개인
배포 주소 : https://sandbank.surge.sh

## 사용한 기술
- React
- SASS
- Redux, redux-tookkit

## 디렉토리 구조
```
src
--assets
--constants
--redux
--tabs
--components

components
--ContentItem
----ContentItem.jsx
----ContentItem.sass
```

## 구현한 기능
- 슬라이드 탭 메뉴
- 버튼 컴포넌트 클릭 리액션
- 캐러셀 : react-slick 라이브러리 사용
- 공유하기 : 해당 컨텐츠 링크 새창 띄우기로 대체
- 좋아요 : localstorage를 통해 브라우저 좋아요 수 유지
- 새로 올라왔어요 : `like_top` = 1인 컨텐츠만 보여주기
- 구독하기 : https://sandbank.io 새 창 띄우기로 대체
- 로딩 인디케이터 : react-loading 라이브러리 사용

## 어려웠던 점 & 에러 핸들링
### Webpack, Babel 에러
****regeneratorRuntime is not defined 에러****

async, await 문법, recoil 라이브러리 사용 시 발생

1. babel plugin transform runtime, babel runtime 설치
    
    ```bash
    yarn add -D @babel/plugin-transform-runtime @babel/runtime
    ```
    
2. webpack config 파일의 babel-loader 옵션에 transform runtime 플러그인 추가
    
    ```jsx
    module.exports = {
        ...
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/transform-runtime'
                    ]
                }
            ...
    ```
    

참고한 글 : 

[https://andrew-flower.com/blog/Async-Await-with-React](https://andrew-flower.com/blog/Async-Await-with-React)

**exports is not defined**

webpack config 파일 babel-loader 옵션에 preset-env target esmoules: true로 설정

### CORS 에러
**API 호출 과정에서 CORS 에러 발생**

no-cors mode로 시도했더니 Preflight 과정에서 cors 발생은 하지 않지만 401 에러가 뜸.  

no-cors 모드 요청이 제한되어 있는 건가 싶어서 

cors 모드로 요청하되 프록시를 사용해서 해결해보기로 함. 

요청 url 앞에 아래 링크를 붙여서 요청해서 해결했다. 

[https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/) 

프록시 서버를 거쳐 요청이 전달되기 때문에 응답 속도가 조금 느려질 수 있고, 

몇 시간에 한 번씩 ‘Request temporary access to the demo server` 버튼을 눌러서 갱신해줘야 한다. 

외부 API를 호출해야 해서 서버를 직접 제어할 수 없는 경우에는 

cors 이슈를 가장 빠르게 해결할 수 있는 임시방책으로 좋은 것 같다. 

공유 기능이 없으니까 url을 통해서 특정  탭/페이지를 공유할 수 있도록 라우팅을 추가함


## 아쉬운 점 / 개선점 
- 반응형으로 구현하긴 했지만, 
모바일 뷰 기준으로 개발되어서 화면 너비가 커졌을 때 UI가 어색해짐. 
PC 버전 UI 수정이 필요할 듯

- 탭 메뉴를 빠르게 이동하는 경우 메뉴와 컨텐츠 간 싱크가 맞지 않는 문제. 
-> 탭과 컨텐츠 페이지를 별도의 전역 상태로 관리하고 있는데, 
하나의 상태로 묶어서 관리하거나 리액트 라우터로 관리하도록 수정하면 해결되지 않을까?
