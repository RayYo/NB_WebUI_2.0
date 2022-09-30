# iti-webui-2.0

## Project setup
```
npm install

# The problem of slow download speed of npm can be solved by the following operations
npm install --registry=https://registry.npm.taobao.org
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Build
```
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

### Advanced
```
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
