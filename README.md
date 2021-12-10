# eslint-config-mile6-vue

### Install package and dependencies
```
npx install-peerdeps --dev eslint-config-mile6-vue
```

### Create and configure your .eslintrc.js
```
touch .eslintrc.js
```
Add the following to your `.eslintrc.js`
```json
{
	"extends": "mile6-vue"
}
```

### Add scripts to package.json
Add the following two script to your package.json file. 

You'll need to replace `<src>` with the location of the files you'd like ESLint to target. This may be different for each project. 
```json
"scripts": {
	"lint": "eslint --ext .js,.vue <src>",
	"lint:fix": "eslint --ext .js,.vue <src> --fix"
},
```

### Run lint

Will display any errors or warnings ESLint finds in the codebase

```
npm run lint
```

### Run fix

Will attempt to fix any errors or warnings that ESLint finds 

```
npm run lint:fix
```