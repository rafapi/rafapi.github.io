var tipuesearch = {"pages":[{"title":"About","text":"This is my personal space to keep notes and information about Machine Learning, Coding practices and some other personal stuff.","tags":"pages","url":"https://rafapi.github.io/pages/about.html","loc":"https://rafapi.github.io/pages/about.html"},{"title":"Highlighting text","text":"This is how you highlight text Highlighting code, with or without line numbers, couldn't be any easier! There are two ways to specify the identifier: print ( \"The triple-colon syntax will *not* show line numbers.\" ) To display line numbers, use a path-less shebang instead of colons: 1 print ( \"The path-less shebang syntax *will* show line numbers.\" )","tags":"Personal","url":"https://rafapi.github.io/blog/highlighting-text.html","loc":"https://rafapi.github.io/blog/highlighting-text.html"},{"title":"Interesting Stuff","text":"Projects https://github.com/altilunium/md https://github.com/karpathy/makemore https://github.com/huggingface/deep-rl-class https://github.com/moyix/fauxpilot https://github.com/google-research/google-research/tree/master/saycan Tools AI Deadlines NeoVim plugins and tools https://tailscale.com/ https://tuple.app/ https://raycast.com/ https://cht.sh/ Blogs PyTorch Internals Transformers from Scratch Annotated PyTorch Paper Implementations Books Probabilistic Programming and Bayesian Methods for Hackers Introduction to Probability for Data Science","tags":"Random","url":"https://rafapi.github.io/blog/interesting-stuff.html","loc":"https://rafapi.github.io/blog/interesting-stuff.html"},{"title":"Programming and Time","text":"Originally, when I decided to focus my career towards programming and eventually into Machine Learning research, I was led to believe that the path laid out for me was mostly predefined: Get started with coding, learn enough, gather some experience and then move on to review, manage or direct others. This was not just shockingly false, but also thankfully a growing trend in the opposite direction. It turns out that individuals that actually have some degree of passion for programming or research in the computer world can grow to much higher levels of proficiency, efficiency and satisfaction than it is commonly thought. In commemoration of this fact let me share some reflections as a seasoned programmer/researcher looking back on his tracks: Compared to my younger self, I feel like I am steadily walking towards my best. Clearly, the acquired technical knowledge helps, but experience and knowing how to approach work and challenges makes a much more significant difference. I see myself as a much more rounded professional than 10 years ago, with a growing list of things to learn and better suited to connect things, see trends and enjoy the process. The feeling of being always on \"learning mode\" is a joy rather than a frustration. Working with people you can learn from is an incredible source of motivation. Both, at a professional and a personal level. I am more aware of the issues, challenges and potential side effects of the choices I need to make, so I give myself the opportunity to prepare for them. My desire to manage people tends towards null. Stronger with time. My desire to discuss technical stuff with people, both to help and be helped, and to define ideas, is at all-time highs. I have a more clear idea about what things I should double down and which ones had enough attention. I fight my battles now with more motivation but with less obfuscation. I used to be very sensitive to tone and manners in the work place… That hasn't changed. Initially I used to get stuck on anything falling in my way without much hesitation. Now I listen, evaluate, discuss, prototype and make a decision using a high degree of passion. My tolerance for context switching and shallow projects is becoming very narrow. I learned to be quicker at analysing and prototyping in order to see depth and give myself a change to dive into more fruitful and meaty projects. Communication is a fundamental skill. It takes a long time to develop and it's quite scarce in the research world. Developing it, teaching it and using it is a defining factor. I have grown very sceptical of some pervasive tools like pair-programming. The obstacles to overcome to make it a useful practice are typically too costly to consider it often. Recurring meetings are evil. Make an agenda and share it early. If the work items listed cannot be solved through text communications, then talking could be useful. I love new projects and new challenges. I love sitting down and talking about how to create new ideas. I am a researcher at heart. I love finding out why and how something works and find ways to generate something new out of some other initially seemingly unrelated proposals. After almost 4 years of remote work it is starting to feel like going back to the office is going backwards. I need to work with people that care about what they do and about others. Making a cohesive and friendly environment makes all interactions a joyful daily prospect. I am skeptical by default about any new hot thing in the programming space. I am however always thrilled about new and hot things in the research space. \" No programmer who continues to grow need fear the future.\" —Daniel Read (This also applies to Computational Research)","tags":"personal","url":"https://rafapi.github.io/blog/programming-and-time.html","loc":"https://rafapi.github.io/blog/programming-and-time.html"},{"title":"Simplify Article","text":"Following content is for testing Markdown-to- HTML generator with various Markdown settings including standard syntax and extended Markdown Extensions . To setup Markdown settings in Pelican, please check this article: Setup blog with Pelican . You should know about HTML , CSS and probably Markdown Markdown Settings Here are the list of Markdown extensions will be used to generate this article. MARKDOWN = { 'extensions' : [ # official extensions 'markdown.extensions.extra' , # include extensions: abbr, attr_list, def_list, fenced_code, footnotes, tables 'markdown.extensions.codehilite' , # to generate code color scheme using pygments 'markdown.extensions.meta' , # to parse key:value pairs at the begining of file 'markdown.extensions.sane_lists' , # for better list 'markdown.extensions.toc' , # add Table of Content 'markdown.extensions.nl2br' , # easily to add new line, but make attr_list and legacy_attrs hard to control #'markdown.extensions.admonition', # to make alert box #'markdown.extensions.legacy_attrs', # insert attribs into element, but markdown already has a built-in function that do the same thing #'markdown.extensions.legacy_em', # to use legacy emphasis #'markdown.extensions.smarty', # converts ASCII dashes, quotes and ellipses to their HTML entity equivalents #'markdown.extensions.wikilinks', # 3rd party extensions #'markdown_captions', # convert <img> to <figure> and <figcaption> #'markdown_checklist.extension', # show checkbox in list ], 'extension_configs' : { 'markdown.extensions.codehilite' : { 'css_class' : 'highlight' }, }, 'output_format' : 'html5' , } Paragraphs Emphasis a word or a phrase: *italic* or **bold** or ***bold and italic*** or `in-line code` . Show input keys: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Del</kbd>. Emphasis a word or a phrase: italic or bold or bold and italic or in-line code . Show input keys: Ctrl Alt Del . As mentioned in how to comments in markdown you can (ab)use the link labels syntax to write your comments. Those lines will not be processed, so they are not included in rendered page nor page's source code. [ // ]: # (This may be the most platform independent comment) Markdown in HTML tags By default, text in HTML tags is not rendered. To support Markdown syntax in HTML tags, add markdown=\"1\" into the tag. <div markdown=\"0\"> This text is not **rendered** . </div> <div markdown=\"1\"> This text is **rendered** well. </div> This text is not **rendered**. This text is rendered well. Attribute Lists Official extension Element can have some attributes by using markdown.extensions.attr_list extension. This provides syntax: {: #someid .someclass somekey='some value' } to add attributes to a block or a span element. To use with a block element, the attribute list should be defined on the last line of the block . To use with a span element, the attribute list should be placd right after the generated span without space . A paragraph with dark background and light text, using `attr_list` extension. *Attribute list can be applied to a span element* {: .text-warning} if the attribute list is added right after the span without any space.{: .bg-dark .text-light .p-1} A paragraph with dark background and light text, using attr_list extension. Attribute list can be applied to a span element if the attribute list is added right after the span without any space.{: .bg-dark .text-light .p-1} Build-in parser Some Markdown version already has a built-in parser to process attribute lists. For example in Markdown 3.1.1 , below code generate the same HTML block. Use built-in parser ![ icon ]( {static}icon.png \"icon\" ){id=\"icon\" class=\"icon mx-auto\" style=\"display:block\"} Use attr_list extension ![ icon ]( {static}icon.png \"icon\" ){: #icon .icon .mx-auto style=display:block} This is a sample sentence in green. {class=\"text-success text-center\"} This is a sample sentence in green. Deprecated extenstion Another extension that also adds attribute into block or element is markdown.extensions.legacy_attrs . This extension has been deprecated in favor of Attribute Lists . Attributes are defined by including the syntax {@key=value} within the element. {@class=bg-dark text-warning p-1}A paragraph with dark background and yellow text, using `legacy_attrs` extension. _This text won't be formatter_ , but __this text will be formatted__ by the latter directive at the end of this block{@class=text-success} if nl2br extenstion is disabled, it will be more readable as below {@class=bg-dark text-warning p-1} A paragraph with dark background and yellow text, using `legacy_attrs` extension. _This text won't be formatter_ , but __this text will be formatted__ by the latter directive at the end of this block{@class=text-success} Blockquote Using default directive > with legacy_attrs or attr_list to get better result. > I do love you so much! > _Henry_ I do love you so much! Henry > I do love you so much! > _Henry_{class=blockquote-footer} or > I do love you so much! > _Henry_{: .blockquote-footer} I do love you so much! Henry I do love you so much! Henry Images Using <img> tag is enough to show image. Some people use markdown_captions extension to convert <img> to <figure> and <figcaption> which are new in HTML5 . Adding <figure> and <figcaption> manually can be done by using Markdown in HTML tags , but it doesn't look good in markdown file. <figure markdown=\"1\"> ![ my code doesn't work ]( {static}my-code-doesn_t-work.jpg \"my code doesn't work\" )<figcaption class=\"img-caption\">_my code doesn't work &copy; [ nerd4life.studio ]( https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work )_</figcaption> </figure> There is another way to add caption and credit to image: ![ my code doesn't work ]( {static}my-code-doesn_t-work.jpg \"my code doesn't work\" ) _my code doesn't work &copy; [nerd4life.studio](https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work)_ {: .img-caption} . img-caption { display : block ; color : #6c757d !important ; text-align : center !important ; font-size : 80 % ; font-weight : 400 ; } my code doesn't work © nerd4life.studio Standard Codeblock Using Standard Codeblock with correct indent, code can be shown as below type of paragraph Show line number use Shebang #! instead of ::: to render line number. #!python hl_lines=\"1 3\" # This line is emphasized # This line isn't # This line is emphasized too will be: 1 2 3 # This line is emphasized # This line isn't # This line is emphasized too In paragraph :::python hl_lines=\"1 3\" # This line is emphasized # This line isn't # This line is emphasized too will be: # This line is emphasized # This line isn't # This line is emphasized too In nested list item - First item :::python hl_lines=\"1 3\" # This line is emphasized # This line isn't # This line is emphasized too - Second item - Third item will be: First item # This line is emphasized # This line isn't # This line is emphasized too Second item Third item In blockquote > This snippet of code > #!python from __future__ import me me.teleportTo(now) will be: This snippet of code 1 2 from __future__ import me me . teleportTo ( now ) Fenced Codeblock Using Fenced Codeblock allow the color highlight scheme to show in Markdown editor, but this won't support to show codeblock in list item or blockquote, and won't show line number. ````python hl_lines=\"2\" # You can highlight a line by adding hl_lines=\"2\" # so this line will be highlighted ```` will be: # You can highlight a line by adding hl_lines=\"2\" # so this line will be highlighted This is how codeblok looks line in SublimeText 3 using MarkdownExtended and MonokaiExtended packages Standard Codeblock Fenced Codenlock To add line number, a small jQuery code will be used to generate texts and few CCS styles will be used to format them ( function () { var pre = document . getElementsByTagName ( 'pre' ), pl = pre . length ; for ( var i = 0 ; i < pl ; i ++ ) { pre [ i ]. innerHTML = '<span class=\"line-number\"></span>' + pre [ i ]. innerHTML + '<span class=\"cl\"></span>' ; var num = pre [ i ]. innerHTML . split ( /\\n/ ). length ; for ( var j = 0 ; j < ( num - 1 ); j ++ ) { var line_num = pre [ i ]. getElementsByTagName ( 'span' )[ 0 ]; line_num . innerHTML += '<span>' + ( j + 1 ) + '</span>' ; } } })(); pre . line-number { display : block ; float : left ; margin : 0 1 em 0 -1 em ; border-right : 1 px solid #ddd ; text-align : right ; } pre . line-number span { display : block ; padding : 0 .5 em 0 1 em ; color : #ccc ; } pre . cl { display : block ; clear : both ; } Table Table with alignment and format text inside. There's still no effective method to add class into <table> tag in Markdown. We can use jQuery addClass() function to do this trick: $ ( \"table\" ). addClass ( \"table table-hover table-sm table-bordered\" ); $ ( \"thead\" ). addClass ( \"thead-light\" ); Define a table | Level | Description | Default | | :--- | :--- | ---: | | Debug | All information | _Off_ {: .badge .badge-danger} | | Info {: .text-info} | Useful infomation | _Off_ {: .badge .badge-danger} | | Warning {: .text-warning} | **Error, but system still runs** | _On_ {: .badge .badge-success} | | Error {: .text-danger} | ***Critical error, system halted*** | _On_ {: .badge .badge-success} | will get it rendered as: Level Description Default Debug All information Off Info Useful infomation Off Warning Error, but system still runs On Error Critical error, system halted On Admonition If you use admonition extension, the below text will change to a box with title and text !!! note \"How to use Admonition\" Add markdown.extensions.admonition into your Markdown extension settings Add CCS file for Admonition styles. Sane List Lists will not mixed thanks to markdown.extensions.sane_lists extension. Use legacy_attrs or attr_list to format list items. 1. First item {: .text-primary} 2. Second item {class=text-success} - a new list {: .text-primary} - not mixed {style=color:red} First item Second item a new list not mixed Dictionary A definition list can be render using markdown.extensions.def_list extension. Apple : Pomaceous fruit of plants of the genus Malus in the family Rosaceae. Orange : The fruit of an evergreen tree of the genus Citrus. Apple Pomaceous fruit of plants of the genus Malus in the family Rosaceae. Orange The fruit of an evergreen tree of the genus Citrus. Footnotes Footnotes 1 have a label 2 and the footnote's content. New-Line-to-Break Add markdown.extensions.nl2br into your Markdown extension settings . This causes newlines to be treated as hard breaks, like StackOverflow and GitHub flavored Markdown do. If this extension is not used, these 3 lines will become one line in HTML . Checklist To show a list with checkbox, install markdown_checklist extension and enable it in Markdown extensions list. The list item indicators still show, so add some CSS style to hide them. ul . checklist { list-style-type : none ; padding-left : inherit ; } Finally, a task list looks like below: - [ ] foo - [x] bar - [ ] baz foo bar baz This is a footnote content. ↩ A footnote on the label xyz . ↩","tags":"tutorial","url":"https://rafapi.github.io/blog/simplify-article.html","loc":"https://rafapi.github.io/blog/simplify-article.html"}]};