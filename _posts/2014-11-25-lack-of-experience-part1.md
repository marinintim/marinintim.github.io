---
title: Lack of experience (part 1)
next: 2014-11-28-lack-of-experience-part2
name: 'wat'
---
I don’t know how to node. That’s why I am trying to build things.

Week ago I needed to change 134 files. Open file, find corresponding image, look up it’s dimensions, insert them back to file. This is kind of tasks which I hate doing manually. So I wanted to automate. Perl is known for its *write-once→run-once→throw-away* philosophy, but I can’t wield Perl as a magician and time was little.

So I’ve chosen node. I thought that all things that task required already were in node registry. And I was right. Basically, I used `fs.readFileSync` to read files (sync is ok in this case, because it’d be used once only for 134 files on developer’s machine), `cheerio` for taking img src from text and putting sizes back and `image-size` module, which returns dimensions by given filename.

I needed to wire it up, which looks like easy job. But then charset hit me. All project files are in win1251, but JS works with utf8. I added `iconv-lite`, but nothing changes. Turns out that `cheerio` was by default encode all non-latin characters to html entities. After setting this setting to false I rerun my script…  
{% gist marinintim/ab3da2280d46d832fcca %}

And it worked. Perfectly. I saved few hours and my motivation.
