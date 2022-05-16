# 👷‍♂️ NFTank

![NFTank](https://user-images.githubusercontent.com/76690419/168440752-a3249cbd-d3b2-4c3b-b635-acd57ff55b9c.png)

<a href="https://www.producthunt.com/posts/nftank?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nftank" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=346389&theme=dark" alt="NFTank - Mint&#0032;NFTs&#0032;to&#0032;an&#0032;address&#0032;within&#0032;a&#0032;snap | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> 

🚀 NFTank (NFT tank for dummies) will allow developers to quickly request NFTs to personal wallets or smart contracts in just a few clicks.

# Usage

```sh-session
$ npm install -g nftank
$ nftank (--version)
nftank/0.0.1 win32-x64 node-v16.13.0
$ nftank --help [COMMAND]
USAGE
  $ nftank COMMAND
...
```

# Commands

- [`nftank docs`](#nftank-docs)
- [`nftank help [COMMAND]`](#nftank-help-command)
- [`nftank mint erc1155`](#nftank-mint-erc1155)
- [`nftank mint erc721`](#nftank-mint-erc721)

✨ Check how to mint an NFT using NFTank

```bash
USAGE
  $ nftank docs

DESCRIPTION
  ✨ Check how to mint an NFT using NFTank

EXAMPLES
  $ nftank mint
```

## `nftank help [COMMAND]`

Display help for nftank.

```
USAGE
  $ nftank help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for nftank.
```

## `nftank mint:erc1155`

✨ Mint an NFT to the given address

```
USAGE
  $ nftank mint:erc1155 -I [-a <value>] [-n <value>] [-i <value>] [-t <value>] [-d <value>] [-q <value>]

FLAGS
  -I, --[no-]interactive     (required)
  -a, --address=<value>
  -d, --description=<value>
  -i, --image=<value>
  -n, --network=<value>
  -q, --amount=<value>
  -t, --title=<value>

DESCRIPTION
  ✨ Mint an NFT to the given address

EXAMPLES
  $ nftank mint:erc1155 --address=0xd24CA0297558f0827e2C467603869D1AC9fF435d --network=mumbai
```

## `nftank mint:erc721`

✨ Mint a ERC721 NFT at a given address

```
USAGE
  $ nftank mint:erc721 -I [-a <value>] [-n <value>] [-i <value>] [-t <value>] [-d <value>]

FLAGS
  -I, --[no-]interactive     (required)
  -a, --address=<value>
  -d, --description=<value>
  -i, --image=<value>
  -n, --network=<value>
  -t, --title=<value>

DESCRIPTION
  ✨ Mint a ERC721 NFT at a given address

EXAMPLES
  $ nftank mint:erc721 --address=0xd24CA0297558f0827e2C467603869D1AC9fF435d --network=mumbai
```
