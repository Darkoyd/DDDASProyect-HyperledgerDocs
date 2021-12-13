/**
 * Archivo de generación de archivos de prueba
 * Autor: Nicolás Londoño
 */
const fs = require('fs')

//Arreglos de datos de prueba
const colorArray = ['red', 'blue', 'black', 'white', 'orange', 'green', 'yellow', 'pink', 'brown', 'purple']
const nameArray = ['James', 'Ann', 'Lisa', 'John', 'Fred', 'Bob', 'Jayce', 'Kelly', 'Linda', 'Stan', 'Bill']

//Crear el archivo
fs.openSync('./testfile.sh', 'a')
//Inicializa el legder con 6 assets
fs.appendFileSync('./testfile.sh', 'peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile \"${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem\" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles \"${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt\" --peerAddresses localhost:9051 --tlsRootCertFiles \"${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt\" -c \'{\"function\":\"InitLedger\",\"Args\":[]}\'' + '\n')

const transactionCount = process.argv[2]
console.log('Generando archivo de prueba con ' + transactionCount + ' transacciones.')

for (let i = 0; i < transactionCount; i++) {
  fs.appendFileSync('./testfile.sh', 'peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile \"${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem\" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles \"${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt\" --peerAddresses localhost:9051 --tlsRootCertFiles \"${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt\" -c \'{\"function\":\"CreateAsset\",\"Args\":[' + JSON.stringify(generateNextAsset(i))+']}\'' + '\n')
}

//Genera assets a partir de listas definidas previamente
function generateNextAsset(num) {
  return newAsset = {
    ID: `asset${num+7}`,
    color:  colorArray[Math.floor(Math.random() * colorArray.length)],
    size: Math.trunc(Math.random()*20) + 1,
    owner: nameArray[Math.floor(Math.random() * nameArray.length)],
    appraisedValue: Math.trunc(Math.random()*1000)
  }
}


