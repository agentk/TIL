---
title: Chmod notes
layout: post
tags:
  - cli
---

> Change the access permissions of a file or directory.

## Usage:

```
chmod [OPTION]... MODE[,MODE]... FILE...
chmod [OPTION]... OCTAL-MODE FILE...
chmod [OPTION]... --reference=RFILE FILE...
```

Change the mode of each FILE to MODE.
With --reference, change the mode of each FILE to that of RFILE.

## Options

| Short | Long | Description |
| --- | --- | --- |
| -c | --changes          | like verbose but report only when a change is made |
| -f | --silent, --quiet  |  suppress most error messages |
| -v | --verbose          |  output a diagnostic for every file processed |
|    | --no-preserve-root |   do not treat `/` specially (the default) |
|    | --preserve-root    |  fail to operate recursively on `/` |
|    | --reference=RFILE  |  use RFILE's mode instead of MODE values |
| -R | --recursive        |  change files and directories recursively |
|    | --help             | display this help and exit |
|    | --version          | output version information and exit |

## Notes

Each MODE is of the form `[ugoa]*([-+=]([rwxXst]*|[ugo]))+|[-+=][0-7]+`.

## Decoding `ugoa`

```
[ugoa]
 u: User
 g: Group
 o: Other
 a: All
```

## Links

GNU coreutils online help: <http://www.gnu.org/software/coreutils/>

Full documentation at: <http://www.gnu.org/software/coreutils/chmod>

or available locally via: info '(coreutils) chmod invocation'

## TL;DR Examples

Give the (u)ser who owns a file the right to e(x)ecute it:

    chmod u+x file

Give the user rights to (r)ead and (w)rite to a file/directory:

    chmod u+rw file

Remove executable rights from the (g)roup:

    chmod g-x file

Give (a)ll users rights to read and execute:

    chmod a+rx file

Give (o)thers (not in the file owner's group) the same rights as the group:

    chmod o=g file

## References

- chmod man page
- tldr chmod
