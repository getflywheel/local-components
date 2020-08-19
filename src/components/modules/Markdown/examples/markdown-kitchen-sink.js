const MarkdownKitchenSink = `
<!---
Source of many of the code snippets: https://highlightjs.org/static/demo/
-->
# Kitchen Sink Example

## Headings
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Emphasis

**This is bold text**.
__This is bold text__.

*This is italic text*.
_This is italic text_.

~~Strikethrough~~


## Links
  
[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

Choose whether to use Local in Light, Dark, or Auto Mode (macOS High Sierra and later).

## Lists
  
### Unordered
  
+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
- Marker character change forces new list start:
  * Ac tristique libero volutpat at
  + Facilisis in pretium nisl aliquet
  - Nulla volutpat aliquam velit
+ Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
1. A fourth item 
1. La la la fifth item


## Tables
  
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |  


## Blockquotes
  
> This is a simple blockquote.
>> ...but you can also nest blockquotes by using additional greater-than signs right next to each other
> > > ...or with spaces between arrows


## Horizontal Rules
___
---
***

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Inline Code

\`Entrypoint main = index.js main.41d8f0baf5f18a9ff590.hot-update.js\`

Indented code

  // Some comments
  line 1 of code
  line 2 of code
  line 3 of code


## Block Code "fences"

### Block Code supports:
* plain text
* apache
* bash
* css
* html
* javascript
* json
* nginx
* php
* shell
* sql
* typescript
* xml

### Examples

\`\`\`
Plain text with no specified language will fallback to bash.
\`\`\`

Apache

\`\`\` apache
# rewrite's rules for wordpress pretty url
LoadModule rewrite_module  modules/mod_rewrite.so
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [NC,L]

ExpiresActive On
ExpiresByType application/x-javascript  "access plus 1 days"

Order Deny,Allow
Allow from All

<Location /maps/>
  RewriteMap map txt:map.txt
  RewriteMap lower int:tolower
  RewriteCond %{REQUEST_URI} ^/([^/.]+)\.html$ [NC]
  RewriteCond \${map:\${lower:%1}|NOT_FOUND} !NOT_FOUND
  RewriteRule .? /index.php?q=\${map:\${lower:%1}} [NC,L]
</Location>o $number; // Output: 10
?>
\`\`\`

Bash highlighting

\`\`\` bash
#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}
\`\`\`

CSS highlighting

\`\`\` css
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
\`\`\`

HTML highlighting

\`\`\` html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
  <title>My first styled page</title>
  <link rel=¨stylesheet¨ type=¨text/css¨ href=¨[file_name].css¨>
</head>

<body>
<script src="[file_name].js"></script>
<!-- Site navigation menu -->
<ul class="navbar">
  <li><a href="index.html">Home page</a>
  <li><a href="musings.html">Musings</a>
</ul>

<!-- Main content -->
<div>My first styled page</div>

<p>Welcome to my styled page!

<!-- Sign and date the page, its only polite! -->
<address>Made 5 April 2004<br>
  by myself.</address>

</body>
</html>
\`\`\`

JavaScript highlighting

\`\`\` javascript
var foo = function (bar) { d
  return bar++;
};

console.log(foo(5));
\`\`\`

JSON highlighting

\`\`\` json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
\`\`\`

Nginx highlighting

\`\`\` nginx
user  www www;
worker_processes  2;
pid /var/run/nginx.pid;
error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

events {
    connections   2000;
    use kqueue | rtsig | epoll | /dev/poll | select | poll;
}

http {
    log_format main      '$remote_addr - $remote_user [$time_local] '
                         '"$request" $status $bytes_sent '
                         '"$http_referer" "$http_user_agent" '
                         '"$gzip_ratio"';

    send_timeout 3m;
    client_header_buffer_size 1k;

    server {
        server_name   one.example.com  www.one.example.com;
        access_log   /var/log/nginx.access_log  main;

        location ~* \.(jpg|jpeg|gif)$ {
            root         /spool/www;
        }
    }
}
\`\`\`

PHP highlighting

\`\`\` php
<?php
// Declaring variables
$txt = "Hello World!";
$number = 10;
 
// Displaying variables value
echo $txt;  // Output: Hello World!
echo $number; // Output: 10
?>
\`\`\`

Shell highlighting

\`\`\` shell
$ echo $EDITOR
vim
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
$ git push
Everything up-to-date
$ echo 'All
> done!'
All
done!
\`\`\`

SQL highlighting

\`\`\` sql
CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
\`\`\`

TypeScript highlighting

\`\`\` typescript
class SpecialGreeter extends Greeter {
    constructor() {
        super("Very special greetings");
    }
}
\`\`\`

XML highlighting

\`\`\` xml
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
<!--Your comment-->
<food>
  <name>Belgian Waffles</name>
  <price>$5.95</price>
  <description>
    Our famous Belgian Waffles with plenty of real maple syrup. 5 < 6
  </description>
  <calories>650</calories>
</food>
<food>
  <name>French Toast</name>
  <price>$4.50</price>
  <description>Thick slices made from our homemade sourdough bread</description>
  <calories>600</calories>
</food>
</breakfast_menu>
\`\`\`
`;

export default MarkdownKitchenSink;