# DDD-Blockchain

1) Para rodar o projeto, instale as depedências:

```shell
npm i
```

2) Configure as envs nessarias do projeto.

Logo após isso, para conseguirmos deployar o contrato, podemos ja passar direto o comando, fazendo assim a compilação e deploy:
(substindo {{network}} pela rede desejada)

```shell
./node_modules/.bin/hardhat run scripts/deploy_token.js --network {{network}}
```

3) Logo após o deploy realizado, precisamos realizar a validação para termos acessos as funções na interface do etherscan/polygonscan/etc, pegue o endereço do contrato salvo e substitua no campo {address}
(detalhe: o contato de governança necessita de um parametro que é o address, {address_governanca} {address_token})


```shell
./node_modules/.bin/hardhat verify 0x9822618429388cFd8d741D9D49a5160dcD522C74 --network mumbai
```

4) Com isso, só acessar o contrato na etherscan/polygonscan/etc, e utilizar delas como a desejar :)
