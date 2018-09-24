# Instructions

## Revision 1

In this experiment, we use Sass to customize the
color palette in Bootstrap.

We installed Sass, Browser-sync, and Bootstrap locally
instead of using the repo's modules.

We created an index.html files with examples of
Bootstrap code that used all the color classes (primary,
success, warning, danger, info).

Then we created a Sass file (main.scss), set Bootstrap's
color variables, and imported Bootstrap.

Then we compiled main.scss into output.css so that we
could see the results of our changes.

## Revision 2

In this experiment, we added the "concurrently" JS library
so that we could improve our tooling.

With the use of concurrently, we are able to run both the
Sass and Browser-sync watchers together in one window.

We used NPM scripts to make this happen.

Now, instead of:

$ ./node_modules/.bin/sass --watch main.scss output.css"

in one window and

$ ./node_modules/.bin/browser-sync start --server --files output.css

in another, we can run:

$ npm run sass

to run the Sass watcher alone, or

$ npm run browser-sync

to run Browser-sync alone, or

$ npm run dev

to run both together at once in the same terminal window.

## NOTE

Sometimes, when you run the dev script, you'll see an error like:

    "Bad state: Future already completed"

This is not a problem with our code; this is an error in sass.dart.js,
which is a dependency of Sass.

Simply running the dev script again seems to work (that is, the same
command runs without error the second time).
