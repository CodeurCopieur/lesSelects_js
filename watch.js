const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const sourcePath = './src';
const distPath = './dist';

// Fonction pour transpiler le fichier en ES5
function transpileFile(filePath) {
  const fileName = path.basename(filePath);
  const outputPath = path.join(distPath, fileName);

  exec(`npx babel ${filePath} --out-file ${outputPath} --presets=@babel/preset-env`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur de transpilation : ${stderr}`);
    } else {
      console.log(`Transpilation réussie. Fichier transpilé : ${outputPath}`);
    }
  });
}

// Fonction pour surveiller les modifications dans le dossier source
function watchSource() {
  fs.watch(sourcePath, (event, fileName) => {
    const filePath = path.join(sourcePath, fileName);
    
    // Vérifier si l'événement est lié à un fichier JavaScript
    if (path.extname(filePath) === '.js') {
      transpileFile(filePath);
    }
  });

  console.log(`En attente de modifications dans ${sourcePath}...`);
}

// Démarrer la surveillance
watchSource();
