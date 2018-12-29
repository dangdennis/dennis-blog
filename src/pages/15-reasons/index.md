---
title: 15 Tips for Learning Reason & ReasonReact
date: '2018-10-21'
---

I recorded some long form notes on the basic nuances to ReasonReact v4. I take you from defining variants all the way to utilizing the built-in ReasonReact router.

[15 Tips to Learning Reason & ReasonReact](https://medium.com/@dangggdennis/15-tips-for-learning-reason-reasonml-bb844ad1be2b)
Everything written below is better read on Medium.

For some time now I’ve wanted to learn something fresh, something statically typed, functional, and most importantly, hype.

Chancing upon a React Podcast episode eventually led to my sneaking aboard the Reason train. It hits all the spots I’ve been wanting to scratch.
So what’s Reason and ReasonReact?

It’s a functional language born at Facebook that looks like Javascript, but bites (bytes, hah) like OCaml. Facebook engineers then wrote Reason bindings to React.js, marrying language to framework 💒 — ReasonReact.
Trying out ReasonReact:

    Official installation — recommended if you have time.
    CodeSandBox — quick start, slightly outdated API
    Repl.it — another online IDE

Trying out Reason:

    Official Reason REPL — outputs Reason, Ocaml, and JS in one!
    Sketch.sh — new, actively-developed Jupyter-inspired Reason notebook

Who are these tips for?

Primarily fellow Javascript developers who are looking for a reason 🤛 to try out Reason. I found myself falling into a lot of small holes — holes that I wish someone could have warned me about sooner. Thus, here are some safety nets compiled just for you: Tidbits about the language itself and the peculiar ReasonReact API. Here’s the repo.

All written code, unless stated, are standalone.
Reason version ❗️

Please make sure we are on the same page regarding versions.
Package.json
Skim the code. Read the explanation. Revisit the code — my recommended reading flow.
Hot tips incoming! 👇
1. Filename determines module name.

    The module below is the minimum body for a React component.

Your first Reason component

You render the component in other files as <FirstComponent /> , not <RandomComponent /> . Here we spread the contents of component into the make expression, similar to how we write React: SomeComponent extends React.Component.

For more information on creating Reason components.

    Here, we are “importing” the <FirstComponent /> , the module from step 1.

No explicit imports required

No importing of files required. Reason automatically reaches for declared modules. However, there is still the concept of managing module scope with Open . If you’re still wondering why I wrote SecondComponent.js , it’s because Reason files are compiled to JS. Then some bundler takes care of everything else and inits React for us. Praise for the bundlers out there!

For more information on how modules work.
3. Converting between different Reason data types.

    Pnemonic for memorization: “datatype_of_datatype()”

Casting between types

To convert between different data types, you must use"datatype_of_datatype" methods from the immediately global Pervasives library.

Note: I’ve annotated the function return types for clarity, however Reason can infer this, eliminating my need to do so. Also, float types require a decimal . . Within the code, see variable integer10Again .

For more information on Reason data types.
4. Don’t forget to convert basic data types to React elements.

    You actually won’t forget because the compiler will be screaming at you. Albeit you may not understand it yet.

React strings, arrays, and null

Notice the use of ReasonReact.string() , ReasonReact.array() , ReasonReact.null within the render method.

To render a string, use ReasonReact.string() .

To render an array, useReasonReact.array() . But just remember. There’s an intermediate step I haven’t mentioned yet: The conversion of Reason lists to arrays. See the differences between Lists and Arrays.

To render null, use ReasonReact.null .

⚠️ Previous versions of Re.React use .stringToElement, .arrayToElement .

Check out the official ReasonReact docs.
5. Passing props, and the use of `~` and `_` with argument names

    Labeled parameters and ignored variables

Passing down props as labeled arguments and ignoring variables

The ParentComponent renders a ChildComponent. The parent passes down a string as prop. No curly braces required here! But what’s required is the ~ in ~randomTextProp . This is Reason’s syntax for labeled parameters, much like Python’s ability to pass named arguments.

You may be wondering why the underscores with _children and _self . That’s just because I’m not using those variables! You can shush the compiler from warnings by prepending an _ to a variable name.
6. Learn to define variants and records.

    The lifeblood data structures of Reason

Variants and records

In Reason, you define variants with different constructors/tags. This is a data type unique to Reason. Here I am defining a variant animal that can be either a Cat or Dog . The constructors act more like boolean primitives (True and False) than variables. Pattern matching takes advantage of this. It’s in the next tip.

To create records (akin-ish to Javascript objects), I must first define a record of type cat with explicit fields. Only then can I define variables someCat and someDog . However, because Horse is not a constructor of animal, I get a compiler error.

Further reading on variants .

Further reading on records.
7. Pattern matching!

    “All this mention of pattern matching! Someone tell me what the hell it is please!” — me not along ago

Pattern matching

Sorry for the bad syntax highlighting. I couldn’t get Carbon to read the code.

Here I define a variable mac and then use a switch statement to return some strings based on the constructor. And that’s it! Try it out for yourself.

Pattern matching becomes one of your primary tool for writing logic and data flows in Reason. Within the React system, you will generally be pattern matching to handle your routing and rendering of UI components. If you’re using Reason to solve coding challenges, you’ll also be pattern matching against arrays, lists, and tuples quite often.

For a more thorough explanation of pattern matching.
8. Handle state in ReasonReact with a reducerComponent.

    A reducerComponent is a familiar but unique addition to the React tool. It’s difficulty to share all the nuances of handling state in a snippet, but let’s try!

A stateful reducer component

This is a heavier example. So if you’re just skimming, slow down a bit here! ✋

Opinions aside, the Redux style of state management is built right into the API. The basic players are state, action, initialState, reducer, ReasonReact.Update, and self.send.

ReasonReact requires declaration of all state types. If I had wanted to control the state of an input, I would definetype state = { textState: string, counter: int} .

Next, the variant action is required as well. Much like in Redux where we have action creators, our action constructors define our possible actions.

When we want to update state, instead of dispatching, we self.send a constructor with a payload, i.e. Count(5).

The reducer method then performs pattern matching on the all possible action tags (aka constructors), and updates state accordingly with ReasonReact.Update().

initialState is self explanatory. 😏

There’s an entire gamut of component life-cycle methods, reducer APIs, and nuances that we haven’t gone through, but this should be enough to whet your appetite!
9. Higher order functions in Reason.

    We’ll only go over a couple basic List methods to see a basic pattern. Assume variant and record types are predefined.

Higher order functions

Reason’s standard methods place their primary input (i.e. the array/list) as their last argument. This function signature works conjointly with the compiler’s default behavior to curry all Reason functions. We’ll get into this at a later tip.

For more information on the stdlib List methods.

For more information on the rest of the stdlib.
10. Style with an imported stylesheet or inline.

    No official library or technique for styling has been standardized yet.

Stylesheets and inline styles

A short tip. 😄

1) Import the CSS file or

2) Inline CSS as your “CSS-in-JS” solution.
11. Bucklescript’s Belt module provides us a more Javascript-like standard library.

    BuckleScript is the compiler for Reason to JS. It also packs in some extra APIs.

Belt methods

Belt was created to mirror standard Javascript signatures. Here the primary input listOfAnimals is placed in the first position. Note that the use of Belt overrides the standard Reason List methods due to open .

For more information on Belt.
12. Functions in Reason are automatically curried.

    Functional composition is fun, but I’ll be honest, I’m still bad at writing them.

Functions are curried automatically in Reason

Currying means to break one function’s arguments into a series of unary functions calls. Because Reason applies this mechanism for all functions during compilation time, partial application of functions i.e. listPlus5 is freely possible. By leaving out the second argument in methods like List.map , we’re letting Reason know that we’ll be feeding the final argument into the function later —flexible and composable functions.

There are two operators that maximize the use of currying.
13. The pipe |> and fast pipe -> operators enables function chaining.

    You either place your primary input as the first argument or the last argument.

Pipe operator |>
Pipe operator inserts the argument into the last position

Instead of writing List.map(add5, someList) , we can do someList |> List.map(add5) . This gets handy really handy when writing complex business logic. Observe the second example someMappedReasonElements involving React elements. We get a nicely printed chain instead of nested function calls. Compare this to tip #4 where we had to assign variables unnecessarily.

Fast pipe operator ->
Fast pipe operator inserts the argument into the first position

If you’ve developed a taste for Belt methods, then the -> will certainly be your best friend. You will commonly find yourself cleaning up nested functions with -> . I choose not to locally open Belt to avoid overriding Array.of_list with Belt’s Array .

/* Without the operators */
FunctionA(functionB(functionC()))

/* With the pipe operators */
functionC() -> functionB -> functionA

For more information on the fast pipe operator.
14. Fetching and handling JSON — ReasonReact meets world

    It takes some work to bring the outside world into Reason’s safe type system

NPM install bs-fetch and @glennsl/bs-json .

Bs-fetch provides a wrapper around the JS fetch.

Bs-json provides utilities to “decode” and bring JSON into Reason’s type system. Neat part is it will raise errors if the type it receives is invalid. 💥
So here’s how you fetch and decode JSON in Reason.
Fetching with bs-json and bs-fetch in ReasonReact

If you’re wracking your brain to understand the Reason syntax, have no fear! In the Decode module, we create two functions post and posts that wraps our JSON and add types to them via bs-json.

The Js.Promise snippet demonstrates how you’d fetch a url fakeRealApi and feed the response JSON into a pipeline to be processed. Eventually, within ReasonReact, you would self.send the payload. Really, check out the full code. Parsing code is good for the brain. Bad for the eyes.

Here’re more examples for fetch GET and POST .
15. Router comes included!

    Many of React’s external libraries or principles are built right into ReasonReact

Snippet of how Routing works — see gist

The code for routing requires much more than a snippet allows for. But let’s break this apart and then you can explore the complete code.

Routing is only a matter of handling state inside our Re.React app. Within a component’s didMount life-cycle, ReasonReact.Router.watchUrl passes a URL record to its callback function. With that URL, we can pattern match off url.path to return one Route constructor. Notice that we then self.send the evaluated expression. Off screen, the reducer receives that new Route and updates our internal state accordingly.

Now it’s just a matter of rendering our UI based off that state like so:

You can see Sketch.sh for a non-trivial routing system.
16. To use popular npm libraries, search for Reason bindings

    16/15. Because I care.

Hopefully the library you’re planning to use already has Reason bindings out there. If not, you’ll have to write them yourself. A quick google search of “bs reason *library name*” should prove enough. You can use Redex — the Reason package index.

https://redex.github.io/
Want more?
A non-exhaustive list of resources for more Reason

* Axel Rauschmayer’s Exploring ReasonML and functional programming
* Discord channel
* ReasonML forums
* ReasonML docs
* ReasonReact docs, changelog
* Twitter
* Reddit

Thank you for reading! I hope this has been helpful. It could be a bit rocky right now, but where’s the fun in a smooth sail? 🚢

Special thanks especially to Dr. Axel Rauschmayer for his amazing book, Exploring ReasonML. It has almost singlehandedly carried me through the deep ends of Reason’s underlying mechanism and principles.

Also, thanks go to the open source engineers working on Reason. Their work serves as a tremendous inspiration for myself to create and share. Particular shout outs to these individuals that I may never nor likely meet for teaching me the ropes through their writing, podcasts, tweets, and code: Cheng Lou, Jared Forsyth, and Nik Graf.

’Til next time, Dennis
