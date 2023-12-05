import { ApiPromise, WsProvider } from "@polkadot/api"

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

(async () => {
  const api = await ApiPromise.create({
    provider: new WsProvider('ws://localhost:9944')
  });

  const extrinsic = api.tx.balances.transfer(ALICE, 1000);
  console.log(extrinsic)
})()