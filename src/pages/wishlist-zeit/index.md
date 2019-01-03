---
title: CRUD wishlist with Zeit's Now and AWS DynamoDB, A Review
date: '2019-01-02'
---

[Repository](https://github.com/dangdennis/wishlist)<br>
[App](https://wishlist-it80fo1a9.now.sh/)

Zeit's release of [Now 2.0](https://zeit.co/blog/now-2) inspired me to build a simple wishlist with lambdas. Basically a todolist. Given my acquaintance with Next.js and basic back-end knowledge, how hard can it be?

I proceeded to spend 2 weeks on and off, with a few hours here and there, attempting to parse Zeit's rather sparse docs on **Now** to debug and develop my list. The organization of the docs did not lend itself to easy navigation and quick-access. Til the end I forget where to find the page on creating routes and capture groups within `now.json`.

Although being my first time using DynamoDB, I spent considerably more time debugging my lambdas, mulling around for a way to parse Node request bodies from inbound post requests. My fault for being an ignorant Express body-parser user, but I had no prior clue. Who knew it was as simple as using Zeit's [micro](https://github.com/zeit/micro). Fortunately something at Spectrum.chat did. After finally able to deploy my first few lambdas, I soon realize how terribly slow the developer feedback/debug loop was. Deploy -> Log -> Deploy -> Log -> Deploy. I could've created my own http servers but I thought deployments would be much faster, given that Zeit would only deploy code that has changed. That didn't seem like the case. Idk.

Fortunately someone did the work for me by creating a local dev environment with [now lambda runner](https://github.com/krasimir/now-lambda-runner). Since then, everything sailed pretty darn smooth.

Despite shortcomings in Now 2.0's developer experience, I thoroughly enjoy the direction Zeit is heading. I wouldn't have stuck through with this if I hadn't been so excited throughout the process, knowing that the code I write is both cheap, fast, and maintainable. Lambdas are the way to go, and if you don't want to use a framework like Serverless, then Now 2.0 is certainly a viable answer. However, I'd hold off for a few more months until it can be battle-tested and better supported with documentation and examples. I'm glad Zeit moves fast.

Quick list of tips and problem areas:

- Log everything server-side.
  - It'll come in handy for tracing your deployed app via now logs.
- Test lambdas locally
  - Use https://github.com/krasimir/now-lambda-runner (this saved my life)
- Have a flipper to route between dev and prod routes
- Parse request body
  - Use zeit's micro: https://github.com/zeit/micro
- You'll be deploying often...
  - I paid for Now unlimited to increase my deployment rate.
  - \$0.10 only so far
- Adding secrets and environment variables is kind of a pain.
  - You have to remove a key and then re-add the key to update its value.
- The docs really were too sparse for my level
  - I still don't understand how routing capture groups work.
  - It wasn't obvious how to parse requests at first.
- I wish there was an option to continually deploy to the same URL.
- Not sure why getInitialProps wasn't doing its thing.
