# vue-with-svelte-wc

An example about how to integrate Svelte Web Components with Vue.

## Example Svelte Web Component

[https://github.com/DezChuang/svelte-hello-world-wc](https://github.com/DezChuang/svelte-hello-world-wc)

## Usage

In `./src/App.vue`

```vue
<template>
  <div id="app">
    <svelte-hello-world name="Dez" />
  </div>
</template>
```

In `./src/main.js`

```javascript
import SvelteHelloWorld from 'svelte-hello-world-wc'
Vue.component(SvelteHelloWorld)
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
