# developer portfolio

포폴 링크 : https://webcogy.github.io/devPortfolio/

---

## 버전체크

- nodejs@15.14.0

### 사용기술

- React
- Sass
- Redux

---

### 폴더구조 및 설명

```
src/
./components => 프레젠테이션 컴포넌트
./containers => 컨테이너 컴포넌트
./json       => 포트폴리오 실제 데이터
./redux      => actions, reducers, states, types
./scss       => variable.scss을 최상위에 등록하고, 하위에서 변수 사용
```

### 배포 실행

```
yarn run deploy
```

### 오류 해결

1. react-scripts 은(는) 내부 또는 외부 명령 실행할 수 있는 프로그램 또는 배치 파일이 아닙니다
   https://thespoiler.tistory.com/21

```
yarn add global react-scripts
```
