# Runtime 2230 Missing Transfer Reprodce
### runtime 2230 bug
- run a 2230 mandala node
```
docker run -it --rm -p 9944:9944 ghcr.io/acalanetwork/mandala-node:sha-1c37252 --dev --rpc-external --rpc-cors=all --rpc-methods=unsafe -levm=debug --pruning=archive --instant-sealing
```

- run the script
```
yarn ts-node index.ts

=> TypeError: api.tx.balances.transfer is not a function
```

### runtime 2220 works ok
- run a 2220 mandala node
```
docker run -it --rm -p 9944:9944 ghcr.io/acalanetwork/mandala-node:sha-37d9e36 --dev --rpc-external --rpc-cors=all --rpc-methods=unsafe -levm=debug --pruning=archive --instant-sealing
```

- run the script
```
yarn ts-node index.ts

=> Prints Extrinsic Info
```