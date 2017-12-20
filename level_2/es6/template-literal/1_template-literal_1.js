/*
    Literals are syntactic constructs that produce values.
        String literal, Regular Expression literal, object literal..

    Template literals are string literals with support for interpolation and multiple lines.
        Interpolation: the insertion of something of a different nature into something else.

    Template literals always produce strings.

    2 cases for using escape character (\)
        - \${   > escaping ${
        - \`    > escaping `
        - \\    > escaping \
*/

var name="Mustafa", lastName="Ekim"; age=35;
console.log(`Hello, my name is ${name} ${lastName} and I am ${age} years old`);


// template literals can represent multi-line strings, without using \n character

console.log(`Hello,
        My name is ${name} ${lastName}
        and I am ${age} years old.`);

console.log(`Template literals are delimited by a backtick: \`
\${} should also be escaped with \\
`
);

    