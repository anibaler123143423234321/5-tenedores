const fs = require('fs');
const path = require('path');

// Ruta al archivo problemático
const serverFilePath = path.resolve(__dirname, 'node_modules/metro/src/Server.js');

// Reemplaza el contenido
if (fs.existsSync(serverFilePath)) {
  let content = fs.readFileSync(serverFilePath, 'utf8');
  content = content.replace(/this\._config\.serializer\.isThirdPartyModule\(module\)/, 'false');
  fs.writeFileSync(serverFilePath, content, 'utf8');
  console.log('Fixed Metro configuration issue in Server.js');
}
