# Fauna Demo

## Getting started

Clone this repo and cd into directory.

```bash
git clone git@github.com:alexanderalmstrom/fauna-demo.git
cd fauna-demo
```

Install npm dependencies.

```bash
yarn install
```

Create a `.env.local` file in the root and replace XXX with your Fauna secret key. Create your account and key at [https://fauna.com/](https://fauna.com/)

```env
REACT_APP_FAUNA_SECRET=XXX
```

Run development server

```bash
yarn start
```
