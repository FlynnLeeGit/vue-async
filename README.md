# vue-async

> simple vue async tasks manager

### install

```js
import Vue from 'vue'
import VueAsync from 'vue-async'

Vue.use(VueAsync)
```

in your component

```html
<template>
    <!-- auto loading state when getData method is called -->
    {{getData$loading}}
</template>

<script>
import { getList } from '@/api/custom-service'
export default {
  data() {
    return {
      list: [],
      info:{
          username:'lee',
      }
    }
  },
  created() {
      this.getData()
  },
  // these are all async tasks
  async: {
    // return a promise
    getData() {
      return getList().then(res => {
        this.list = res.list
      })
    }
  }
}
</script>
```

quick set data

```js
export default {
  data: {
    list: []
  },
  async: {
    getData(done) {
      setTimeout(() => {
        done({ list: [1, 2, 3] }) // this.list will be [1,2,3]
      }, 2000)
    }
  }
}
```

### autoLoadMethod

```js
Vue.use(VueAsync, {
  autoLoadMethod: {
    mounted: 'getData'
  } // this.getData  will auto run in mounted LifeCycle
})
```

demo can see in [demo](./demo)


### Development Setup

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 FlynnLee