'use strict';

let FS = require('fs');
let _ = require('lodash');

function main() {
    if(process.argv.length < 3) {
        return printUsage();
    }
    let filePath = process.argv[2];
    let input_string = FS.readFileSync(filePath, {
        encoding: 'utf8'
    });

    let lines = input_string
                    .split('\n')
                    .map(s => _.trimEnd(s, '\r'))
                    .filter(s => _.trim(s).length > 0);
    let max_line_length = lines.map(s => s.length).reduce((prev, curr) => {
        return Math.max(prev, curr);
    }, 0);
    max_line_length += 3;

    lines.forEach(line => {
        let output = `"${line}"`;
        output = _.padEnd(output, max_line_length) + '\\';
        console.log(output);
    });
}

function printUsage(params) {
    console.log(`Usage: node app.js <<path to file>>`);
}

main();
