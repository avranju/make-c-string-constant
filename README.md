# Create C string constants

A small Node JS app to generate C/C++ string constants that you can
copy/paste into a C/C++ source files. You supply a source file that needs
to be formatted as a string constant as a command line argument and it
prints the output to the console. For example if you have a file called
`intput.txt` with the following contents:

```
'use strict';

module.exports = {
    create: function () {
        console.log('create');

        setTimeout(() => {
            console.log('boo');
        }, 500);

        return true;
    },

    receive: function(message) {
        console.log('receive');
    },

    destroy: function() {
        console.log('destroy');
    }
};

```

Then the app would produce the following:

```c
"'use strict';"                     \
"module.exports = {"                \
"    create: function () {"         \
"        console.log('create');"    \
"        setTimeout(() => {"        \
"            console.log('boo');"   \
"        }, 500);"                  \
"        return true;"              \
"    },"                            \
"    receive: function (message) {" \
"        console.log('receive');"   \
"    },"                            \
"    destroy: function () {"        \
"        console.log('destroy');"   \
"    }"                             \
"};"                                \
```

To run it do the following after you clone the repo:

```
npm install
node app.js <<path to input file>>
```