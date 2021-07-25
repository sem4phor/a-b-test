# a-b-test

The goal is to allow article creators to create multiple variations of an article
which are randomly displayed to visitors.

The experiments are to be seen as A/B/N tests and contain variations of a test.

A random combination is assigned to a visitor and stored in a cookie, so the same
content is displayed on page refreshs. (see plugins/experiments.client.js)

Tracked pageviews and signUp events contain information about the experiment and
it's which variation assigned to the visitor.

My assumption was that the content is provided headless which in this scenario
means by a content api returning articles as JSON data.

In this example app the editors can provide different variations for the media
part of an article as well as the intro copy.

## Build Setup
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# deploy to gh pages
$ npm run deploy
```
