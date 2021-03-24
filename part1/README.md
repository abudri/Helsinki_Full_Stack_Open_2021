# Part 1

<img src="https://user-images.githubusercontent.com/17362519/112214307-6dc7ef80-8bf5-11eb-97b5-13c757229094.png" width="950;" />

<img src="https://user-images.githubusercontent.com/17362519/112216100-820cec00-8bf7-11eb-87eb-fb1c56446661.png" width="450;" />

## Table of Contents

- Notes / Troubleshooting


## Notes / Troubleshooting

Environment setup can be found in the [lesson page](https://fullstackopen.com/en/part1/introduction_to_react#some-notes).

I did run into some environment issues so I followed some instructions found in this Stack Overflow [answer](https://stackoverflow.com/questions/29323982/error-cannot-find-module-lib-cli):

```bash
brew uninstall node
sudo chown -R $(whoami) /usr/local/*
brew cleanup
brew install node
```
The above finally got my environment working properly.

### Creating a React App

Command to create a react app:

```bash
$ npx create-react-app <name_of_directory_you_want_files_placed_in>
```
Output after `mkdir homework`:

```bash
z@Mac-Users-Apple-Computer part1 % mkdir homework
z@Mac-Users-Apple-Computer part1 % npx create-react-app homework 

Creating a new React app in /Users/z/Helsinki/full_stack_open_2021/part1/homework.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

yarn add v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 7 new dependencies.
info Direct dependencies
├─ cra-template@1.1.2
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
└─ react@17.0.2
info All dependencies
├─ cra-template@1.1.2
├─ immer@8.0.1
├─ react-dev-utils@11.0.4
├─ react-dom@17.0.2
├─ react-scripts@4.0.3
├─ react@17.0.2
└─ scheduler@0.20.2
✨  Done in 19.07s.

Initialized a git repository.

Installing template dependencies using yarnpkg...
yarn add v1.22.4
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 17 new dependencies.
info Direct dependencies
├─ @testing-library/jest-dom@5.11.9
├─ @testing-library/react@11.2.5
├─ @testing-library/user-event@12.8.3
├─ react-dom@17.0.2
├─ react@17.0.2
└─ web-vitals@1.1.1
info All dependencies
├─ @testing-library/dom@7.30.0
├─ @testing-library/jest-dom@5.11.9
├─ @testing-library/react@11.2.5
├─ @testing-library/user-event@12.8.3
├─ @types/aria-query@4.2.1
├─ @types/jest@26.0.21
├─ @types/testing-library__jest-dom@5.9.5
├─ css.escape@1.5.1
├─ css@3.0.0
├─ dom-accessibility-api@0.5.4
├─ lz-string@1.4.4
├─ min-indent@1.0.1
├─ react-dom@17.0.2
├─ react@17.0.2
├─ redent@3.0.0
├─ strip-indent@3.0.0
└─ web-vitals@1.1.1
✨  Done in 6.47s.
Removing template package using yarnpkg...

yarn remove v1.22.4
[1/2] 🗑  Removing module cra-template...
[2/2] 🔨  Regenerating lockfile and installing missing dependencies...
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.20.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
success Uninstalled packages.
✨  Done in 9.57s.

Created git commit.

Success! Created homework at /Users/z/Helsinki/full_stack_open_2021/part1/homework
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd homework
  yarn start

Happy hacking!

z@Mac-Users-Apple-Computer part1 % ls
homework	lesson_app

z@Mac-Users-Apple-Computer part1 % ls -a homework 
.		.git		README.md	package.json	src
..		.gitignore	node_modules	public		yarn.lock
```

