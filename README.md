# Les selects | js

CodePen : https://codepen.io/CodeurCopieur/pen/qBgQEGM

Pour transpiler des fichiers JS en ES5:

* Installation de Babel

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```


* touch .babelrc > contenu : 
```bash
{
"presets": ["@babel/preset-env"]
}
```
* Transpilation des Scripts
```
  npx babel src --out-dir dist 
  ou 
  npx babel src/**/*.js --out-dir dist
```

