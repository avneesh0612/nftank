# 👷‍♂️ NFTank

🚀 A command-line tool to mint NFTs for testing your smart contracts!

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

<!-- commands -->

- [`nftank docs`](#nftank-docs)
- [`nftank help [COMMAND]`](#nftank-help-command)
- [`nftank mint erc1155`](#nftank-mint-erc1155)
- [`nftank mint erc721`](#nftank-mint-erc721)

## `nftank docs`

✨ Check how to mint a NFT using NFTank

```
USAGE
  $ nftank docs

DESCRIPTION
  ✨ Check how to mint a NFT using NFTank

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

## `nftank mint erc1155`

✨ Mint a ERC1155 NFT at a given address

```
USAGE
  $ nftank mint erc1155 -I [-a <value>] [-n <value>] [-i <value>] [-t <value>] [-d <value>] [-q <value>]

FLAGS
  -I, --[no-]interactive     (required)
  -a, --address=<value>
  -d, --description=<value>
  -i, --image=<value>
  -n, --network=<value>
  -q, --amount=<value>
  -t, --title=<value>

DESCRIPTION
  ✨ Mint a ERC1155 NFT at a given address

EXAMPLES
  $ nftank mint --address=0xd24CA0297558f0827e2C467603869D1AC9fF435d --network=mumbai
```

## `nftank mint erc721`

✨ Mint a ERC721 NFT at a given address

```
USAGE
  $ nftank mint erc721 -I [-a <value>] [-n <value>] [-i <value>] [-t <value>] [-d <value>]

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
