# vue-async

> simple vue async tasks manager,now can support rxjs Observable method!

### install

```js
import Vue from 'vue'
import VueAsync from 'vue-async'

Vue.use(VueAsync)
```

demo can see in [demo](./demo)

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
        info: {
          username: 'lee'
        }
      }
    },
    created() {
      this.getData()
    },
    // these are all async tasks
    async: {
      // return a promise and it will auto update getData$loading status
      getData() {
        return getList().then(res => {
          this.list = res.list
        })
      }
    }
  }
</script>
```

with args

```js
export default {
  data: {
    list: []
  },
  created() {
    this.getList({
      name: 'lee'
    })
  },
  async: {
    getList(user) {
      console.log(user)
    }
  }
}
```

with Rxjs

```js
import Vue from 'vue'
import VueAsync from 'vue-async'

import { tap, finalize } from 'rxjs/operators'

Vue.use(VueAsync, {
  rx: {
    tap,
    finalize
  }
})
```

in component

```html
<template>
  <!-- auto loading state when getData method is called -->
  {{initData$loading}}
</template>

<script>
  import { ajax } from 'rxjs/ajax'
  import { tap } from 'rxjs/operators'
  const getListStream = () =>
    ajax.getJSON('https://jsonplaceholder.typicode.com/todos')

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.initData().subscribe()
    },
    // these are all async tasks
    async: {
      // return a promise and it will auto update getData$loading status
      initData() {
        return getListStream().pipe(
          tap(list => {
            this.list = list
          })
        )
      }
    }
  }
</script>
```

with PageLoadAsync use Vue.mixin()

```js
Vue.mixin({
  mounted() {
    this.getData && this.getData() // every page use this.getData when mounted,useful with page component
  }
})
```

### Development Setup

```bash
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
