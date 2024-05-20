# Youtube API를 이용한 뷰티 사이트
이 강의는 React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트를 만듭니다. React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며, 
YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해합니다.    


## 작업 순서
1. node.js 설치 / 버전 확인 : node -v  / https://nodejs.org/ko 여기에서 다운
2. React.js 설치 : react npx create-react-app .
3. 폴더가 잘 만들어졌는지 확인하기 : npm start
4. 라이브러리 설치
5. 폴더 셋팅 : 필요없는 파일 제거
6. header 설정
7. Suspense 설정
8. 걱 페이지 메타 태그 설정(HelmetProvider)

## 페이지 잘 만들어졌는지 확인하는 법
- 터미널 실행
- npm start 입력
- http://localhost:3000/ 확인
- 브라우저 열고 localhost:3000/해당 폴더이름 입력
- 브라우저 열고 localhost:3000/Home

## scss 페이지 잘 만들어졌는지 확인하는 법
- scss 폴더 만들기
- 새로운 터미널 만들기
- npm run build //입력


## 인덱스   
1. 셋팅하기       
1_1. Node.js 설치    
1_2. Vscode 설치    
1_3. React.js 설치    
        
2. 라이브러리 설치하기    
2_1. 폴더 정리하기    
2_2. 라이브러리 설치하기    
       
3. Git 연동하기             
3_1. 저장소 만들기    
3_2. 모든 파일 올리기    
3_3. 깃 상태 확인하기 

4. SCSS 셋팅하기         
4_1. SCSS 설정하기    
4_2. style.scss 설정하기    
4_3. fonts.scss 설정하기    
4_4. vars.scss 설정하기    
4_5. reset.scss 설정하기    
4_6. mixin.scss 설정하기    
4_7. common.scss 설정하기    

## 2. 라이브러리 설치하기    

### 2-1. 폴더 설명
- node_modules : 이 폴더는 프로젝트에서 사용하는 외부 라이브러리와 패키지들이 저장되는 곳입니다. 개발에 필요한 도구와 코드를 더 쉽게 관리할 수 있게 도와줍니다.
- ublic : 이 폴더는 프로젝트의 공용 파일들이 저장되는 곳입니다. 주로 HTML 파일과 이미지 같은 정적인 파일들이 이곳에 위치하며, 이 파일들은 웹 브라우저에서 직접 접근할 수 있습니다.
- favicon.svg : 웹 사이트의 아이콘을 나타내는 이미지 파일입니다. 웹 브라우저 탭에 표시되는 작은 아이콘을 설정할 수 있습니다.
- index.html : React 애플리케이션의 진입점인 HTML 파일입니다. 브라우저에서 앱을 로드할 때 사용됩니다.
- robots.txt : 이 파일은 웹 사이트의 검색 엔진 크롤러에게 어떤 페이지를 검색할 수 있고 어떤 페이지를 검색하지 말아야 하는지에 대한 지침을 제공하는 텍스트 파일입니다
- src : 이 폴더는 실제로 프로젝트의 소스 코드가 저장되는 곳입니다. 여기서 작성한 코드가 애플리케이션의 동작을 정의합니다.
- assets : 이미지나 폰트 등의 정적인 자원 파일들을 저장하는 폴더입니다.
- App.js : React 애플리케이션의 주요 컴포넌트인 App 컴포넌트의 코드가 들어있는 파일입니다. 이 파일에서 애플리케이션의 구조와 기능을 정의할 수 있습니다.
- index.js : React 애플리케이션의 진입점인 JavaScript 파일입니다. 이 파일에서 React 앱을 DOM에 렌더링하는 역할을 합니다.
- .gitignore : Git 버전 관리에서 제외할 파일이나 폴더를 설정하는 파일입니다. node_modules와 같이 불필요한 파일들을 Git에 올리지 않도록 할 때 유용합니다.
- package-lock.json : 패키지 의존성을 관리하기 위한 자동 생성된 파일입니다. 이 파일은 패키지들의 버전 및 의존 관계를 정확하게 유지하기 위해 사용됩니다.
- package.json : 프로젝트 설정과 의존성 정보를 담고 있는 파일입니다. 프로젝트의 이름, 버전, 필요한 라이브러리 등을 정의할 수 있습니다.
- README.md : 프로젝트에 대한 설명과 사용 방법을 기술하는 마크다운 파일입니다. 다른 개발자들이 프로젝트를 이해하고 사용하는데 도움이 되는 정보를 작성할 수 있습니다.

- 
### 2-2. App.js 파일 셋팅
- App.js 파일에 내용 삭제 후 refce 단축키 입력

````javascript
import React from 'react'

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
````

### 2-3. index.js 파일 셋팅
- index.js 파일에 필요없는 파일 삭제하고 아래 파일만 남겨두기

````javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
````


### 2-4. 필요한 라이브러리 설치
- react를 설치 `npm create-react-app 폴더이름` : 폴더를 생략하고 싶으면 .으로 표시
- react-router-dom 설치 `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리
- axios 설치 `npm install axios` : API 라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘 
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : CSS 라이브러리
- react-helmet-asyne 설치 `npm install react-helmet-async` : SEO
- swiper 설치 `npm install swiper` : 이미지 슬라이트

- 폴더 한번에 설치        
npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper

## 3. Git 연동하기

## 4. SCSS 셋팅하기

### 4-1.  SCSS 설정하기
- SASS는 Syntactically Awesome Style Sheets의 약자로, CSS의 확장된 문법을 제공하여 스타일 시트 작성을 더욱 효율적으로 만들어주는 CSS 전처리기입니다. 
- SCSS는 일반 CSS와 호환되기 때문에 기존의 CSS 코드를 그대로 사용할 수 있습니다.
- SCSS는 SASS의 다음 버전이며, 약간의 문법 차이가 있지만 SCSS가 좀 더 넓은 범용성과 CSS의 호환성의 장점을 가집니다. 
- 큰 차이점은 SASS는 중첩으로 들여 쓰기를 사용하고 속성 구분은 줄 바꿈을 이용하지만, 
- SCSS의 경우 중괄호로 중첩을 표현하고 세미콜론으로 속성을 구분합니다. 
- 결론적으로 SCSS는 기존의 CSS 문법을 확장하여 보다 강력하고 유용한 기능을 제공하는 동시에, 웹 개발자가 스타일링 작업을 더 효율적으로 수행할 수 있도록 도와줍니다.
- https://sass-lang.com/ 자세한 부분은 여기서 확인할 수 있습니다.
- 변수 (Variables): SCSS에서는 변수를 사용하여 색상, 글꼴, 간격 등을 정의하고 재사용할 수 있습니다. 이를 통해 일관된 디자인을 유지하고 스타일링 작업을 단순화할 수 있습니다.
- 중첩 (Nesting): SCSS에서는 선택자를 중첩하여 코드를 더 구조화하고 가독성을 높일 수 있습니다. 중첩된 구조를 사용하여 부모/자식 요소 관계를 명확하게 표현할 수 있습니다.
- 믹스인 (Mixins): 믹스인은 스타일의 모듈화를 가능하게 해주는 기능입니다. 반복적으로 사용되는 스타일 코드 블록을 함수처럼 정의하고 재사용할 수 있습니다.
- 확장 (Extend): 확장은 하나의 선택자에서 다른 선택자로 스타일을 상속할 수 있는 기능입니다. 이를 통해 스타일 규칙의 중복을 피하고 코드의 양을 줄일 수 있습니다.
- 연산 (Operations): SCSS는 수학 연산을 지원하여 값들을 계산하거나 조작할 수 있습니다. 이를 통해 여러 속성 값을 계산하여 사용하는 등의 작업이 가능합니다.

### 4-1.  스타일 폴더 만들기

<img width="300" alt="스크린샷 2024-05-20 오후 3 49 58" src="https://github.com/parksohyunnn/parksohyunnn.github.io/assets/164127801/75676ff8-6d3b-4e43-85f4-b953e1d0f575">

- src 폴더에 assets폴더를 만들어 줍니다.
- assets 폴더 안에 fonts/img/scss 폴더를 만듭니다.
- scss 폴더안에 style.scss파일을 만듭니다.

- scss 폴더안에 section/setting 폴더도 만들어 줍니다.
<img width="285" alt="스크린샷 2024-05-20 오후 3 54 41" src="https://github.com/parksohyunnn/parksohyunnn.github.io/assets/164127801/2e0a929a-2336-4ed9-8626-dcffa9b258b6">     
     
- setting 폴더안에 scss 파일을 만듭니다. 가독성을 위해 파일명 앞에 _를 붙여줍니다.
<img width="287" alt="스크린샷 2024-05-20 오후 3 58 25" src="https://github.com/parksohyunnn/parksohyunnn.github.io/assets/164127801/fe64c18f-219f-40c6-9de6-6a4673ccb7ee">         

### 4_2. style.scss 설정하기   
- @charset "UTF-8"; 언어를 전세계로 설정     
- style.scss 파일에 scss 파일들을 임포트 시켜줍니다.
<img width="696" alt="스크린샷 2024-05-20 오후 4 09 54" src="https://github.com/parksohyunnn/parksohyunnn.github.io/assets/164127801/9e29458e-3a7f-4473-ae64-78869f0224fc">

````scss
@charset "UTF-8";

// setting
@import "setting/fonts";
@import "setting/vars";
@import "setting/reset";
@import "setting/mixin";
@import "setting/common";
````
- @charset "UTF-8"; : 이 부분은 문서의 문자 인코딩을 설정하는 것으로, 해당 SCSS 파일의 문자 인코딩이 UTF-8임을 나타냅니다.
- @import "setting/fonts"; : 폰트 파일과 관련된 CSS를 설정합니다.
- @import "setting/vars"; : 변수와 관련된 CSS를 설정합니다.
- @import "setting/reset"; : 브라우저 스타일 초기화나 리셋 관련 CSS를 설정합니다.
- @import "setting/mixin"; : 믹스인과 관련된 CSS를 설정합니다.
- @import "setting/common"; : 공통적인 CSS 스타일을 설정합니다.
- UTF-8은 "Unicode Transformation Format - 8-bit"의 약자로, 
- 다양한 문자와 문자열을 컴퓨터에서 표현하기 위한 문자 인코딩 방식 중 하나입니다. 
- Unicode는 전 세계의 모든 문자를 고유한 코드 포인트로 나타내는 국제 표준입니다. 
- 이를 컴퓨터에서 저장하고 전송하기 위해서는 효율적인 방식이 필요한데, 그 역할을 하는 것이 UTF-8입니다.


     
- index.js 파일안에 style.scss파일을 임포트 시켜 줍니다.     
<img width="869" alt="스크린샷 2024-05-20 오후 4 11 52" src="https://github.com/parksohyunnn/parksohyunnn.github.io/assets/164127801/94eeb6ad-4e6a-45c7-8a2c-53232d07dc91">

      
## 사용스택
- node.js를 설치하고 사용합니다. 
- react를 사용하여 사이트를 완성합니다. 
- youTube Api를 이용하여 데이터를 가져옵니다.
- rapidapi를 이용하여 데이터를 가져옵니다.
- netlify를 통해 사이트를 배포합니다.
- firebase를 통해 사이트를 배포합니다.
- vercel를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.


## JSX 파일
JSX 파일은 JavaScript XML의 약자이며, 주로 React 애플리케이션에서 사용되는 확장자입니다. JSX는 JavaScript와 XML을 조합한 문법으로, JavaScript 코드 내에 마크업을 작성할 수 있게 해줍니다. 이는 React 컴포넌트를 선언하고 UI를 정의하는데 사용됩니다.

JSX 파일은 일반적으로 .jsx 확장자를 가지며, 내부적으로는 JavaScript 코드로 변환되어 실행됩니다. JSX를 사용하면 JavaScript 코드를 더욱 가독성 있고 유지보수하기 쉽게 만들어줍니다. 또한 JSX를 사용하면 UI를 선언적으로 정의할 수 있으며, JavaScript의 기능을 활용하여 동적으로 UI를 조작할 수 있습니다.

예를 들어, 다음은 간단한 React 컴포넌트를 정의하는 JSX 파일의 예시입니다:

````jsx
Copy code
// HelloWorld.jsx

import React from 'react';

function HelloWorld(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to my React application.</p>
    </div>
  );
}
````

export default HelloWorld;
위 코드에서 &lt;div&gt;와 &lt;h1&gt; 등의 태그는 HTML과 유사하게 보이지만, 실제로는 JavaScript 코드입니다. JSX 파일은 이러한 형태로 작성되며, Babel과 같은 도구를 사용하여 일반 JavaScript 코드로 변환됩니다.

## Home.jsx 폴더에서
단축키_ rafce   
- "rafc"는 React 함수형 컴포넌트를 자동으로 생성하는 Visual Studio Code의 단축키입니다. 이는 React 개발을 더욱 효율적으로 만들어주는 기능 중 하나입니다. "rafc"를 입력하고 엔터 키를 누르면 다음과 같은 코드가 자동으로 생성됩니다.
- &lt;div&gt;와 &lt;div&gt; 안에 폴더 이름 넣어주기

````jsx
jsx
Copy code
import React from 'react'

export default function ComponentName() {
    return (
        <div>
            
        </div>
    )
}
````

위 코드에서 "ComponentName"은 사용자가 지정한 컴포넌트의 이름을 의미합니다. 이 기능은 React 개발을 빠르고 효율적으로 만들어주며, 컴포넌트를 생성할 때 반복되는 구조를 줄여줍니다.









