# Webpack

[Official documentation](https://webpack.js.org)

## Loader

Одно из самых важных полей в webpack.
Они предназначены для того, чтобы обрабатывать файлы, которые выходят за рамки javascript.
Такие как _png, svg, jpeg, css, scss, typescript ..._

Для реакта используется JSX.
Поэтому необходимо подключить специальные _loader_

Если используем typescript - достаточно _ts-loader_
Если нативный js - необходим _babel-loader_

```
const  typescriptLoader = {
	test: /\.tsx?$/,
	use:  "ts-loader",
	exclude: /node_modules/,
}
```

Порядок, при котором _loaders_ возвращаюся в массиве имеет значение

```
return [typescriptLoader, cssLoader];
```

## Resolvers

### Extensions

Указываем расширение тех файлов, для которых при импорте не будем указывать расширение

```
extensions: [".tsx", ".ts", ".js"],
```

### Alias

Если оставить пустым и указать modules и preferAbsolute, можно обращаться к папкам напрямую

# tsconfig

## "noImplicitAny": true

Подсвечивает все места где не указан тип.
Однако это не означает, что теперь вовсе нельзя использовать _any_.
Это означает лишь, что в подобных ситуация разработчик должен явно писать _any_.

## "target": "es5"

В какую спецификацию компилируем: для поддержки большинства браузеров

## "allowJs": true

Компилятор будет обрабатывать не только TS файлы, но и JS файлы

## "moduleResolution": "node"

Определяет какие импорты будут node / classic

## "esModuleInterop": true

Позволяет работать с пакетами, которые используют common js как с обычными пакета с помощью _import_
(require() module.export) = common js

import Moment from 'moment';

- без флага esModuleInterop результат undefined - console.log(Moment);
- c флагом результат [object Object] - console.log(Moment);

## "allowSyntheticDefaultImports": true

Если какая-либо библиотека не имеет default import, лоадеры вроде ts-loader или babel-loader автоматически создают их
Вместо такого импорта import \* as React from 'react' - можно писать такой import React from 'react'

```
{
	"compilerOptions": {
		"outDir": "./dist/",
		"noImplicitAny": true,
		"module": "ESNext",
		"target": "es5",
		"jsx": "react-jsx",
		"allowJs": true,
		"moduleResolution": "node",
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true
	},
	"ts-node": {
		"compilerOptions": {
			"module": "CommonJS"
		}
	}
}
```

# Feature-Sliced Design

[Official documentation](https://feature-sliced.design)

В FSD проект состоит из слоев (Layers), каждый слой состоит из слайсов (модуль) (Slices), а каждый слайс состоит из сегментов (segments).

![enter image description here](https://lh3.googleusercontent.com/pw/AMWts8BjfHzcJfydIZxpqxDQZA5QGQ8vZAgN6ImqUT1u91Zh2ekNk9749jxtOgNFPyxpQAmXmWSXCqSFHwVRHyCkcLKmCHr6F7ZF4CgwVsHMQtAIl9TVJeblRMtjJMNp8XJKsejeq_idP_WtbELOq7zdCxI0=w1306-h710-s-no?authuser=0)

## Layers

1.  `shared` — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.(например, UIKit, libs, API)
2.  `entities` (сущности) — бизнес-сущности.(например, User, Product, Order)
3.  `features` (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.(например, SendComment, AddToCart, UsersSearch, форма отправки фидбека, регистрация пользователя по телефону)
4.  `widgets` (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки. Самостоятельные насколько это возможно компоненты (например, IssuesList, UserProfile, Header, Navbar, Sidebar, Footer).
5.  `pages` (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
6.  `processes` — сложные сценарии, покрывающие несколько страниц.(например, авторизация)
7.  `app` — настройки, стили и провайдеры для всего приложения.

**Выше лежащий слой может использовать внутри себя только ниже лежащий.
Но не наоборот.
Это обеспечивает линейный однонаправленный поток данных.**

## Slices

Разделяющие код по предметной области. Они группируют логически связанные модули, что облегчает навигацию по кодовой базе.
Слайсы не могут использовать другие слайсы на том же слое, что обеспечивает высокий уровень [_связности_](<https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D0%BE%D1%81%D1%82%D1%8C_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)>) (cohesion) при низком уровне [_зацепления_](<https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%86%D0%B5%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)>) (coupling).

## Segments

- UI - компоненты
- model - бизнес-логика (взаимодействие со стейтом, селекторы, экшены)
- api
- config
- lib - хелперы
- const

# React

[Official documentation](https://reactjs.org/)

## Ререндер компонента

- изменилось состояние (state)
- изменился хотя бы 1 пропс
- перерисовался родитель (можно предотвратить мемоизацией)

## React.lazy

Lazy loading надо делать

- либо для больших чанков (Страницы)
- либо для компонентов, которые при открытии страницы не попадают в пределы вьюпорта
- либо для отложенных компонентов, которые пользователь может никогда не открыть (Модалки \ тултипы)

Для компонентов, которые должны быть _lazy_ указываем дефолтный экспорт.

```
export  const  MainPageLazy = lazy(() =>  import("./MainPage"));
```

## useMemo

Позволяет мемоизировать значение объекта, массива и возвращать существующий, а не создавать новый, если из массива зависимостей ничего не изменилось

Например, если в пропсы передаем объект - на каждый рендер компонента этот объект будет инициалзироваться заново, т.е. объект будет каждый раз новый, ссылка на него будет каждый раз новой и компонент будет перерисовываться

```
const  themeProps = useMemo(() => ({ theme, setTheme }), [theme]);
```

## useCallback

Все методы, которые передаются как пропсы, оборачивать в useCallback
TBD

## useLayoutEffect

TBD

## memo

Практически все компоненты необходимо оборачивать в memo.
_За исключением_ компонентов, у которых есть children
_Но_ если в children передается примитив (например, строка передеается в компонент Button как children),
допустимо оборачивать такой компонент в _memo_

# Other

### enum

```
enum  Theme {
	DARK = 'dark',
	LUGHT = 'light'
}
const c: Theme = Theme.DARK
```

Компилируется в

```
var Theme;
(function (Theme) {
	Theme["DARK"] = "dark";
	Theme["LUGHT"] = "light";
})(Theme || (Theme = {}));

const c = Theme.DARK;
```

### Const object

```
export type ValueOf<T> = T[keyof T]
export type SomeConstType = ValueOf<typeof SomeConst>

const SomeConst = {
	NAME1: 'text1',
	NAME2: 'text2',
} as const;

const a: SomeConstType = SomeConst.NAME1;
const b: SomeConstType = 'text1';
```

Компилируется в

```
const SomeConst = {
	NAME1: 'Text1',
	NAME2: 'text2',
};

const b = SomeConst.NAME1;
```

### Const enum

```
const  enum  Light {
	Red = "red",
	Green = 'green',
	Blue = 'Blue'
}

const a: Light = Light.Blue;
```

Компилируется в

```
const a = "Blue" /* Light.Blue */;
```

typeof const enum - в объект не компилируется
