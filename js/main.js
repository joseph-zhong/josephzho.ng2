

var monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
function datetimeToString(dt) {
    var d = new Date(dt);
    var day = d.getDay();
    var month = monthNames[d.getMonth()];
    var year = d.getFullYear();
    var hour = d.getHours();
    var min = d.getMinutes();

    return month + ' ' + year;
}

(function() {
    /** Quote Selector. */
    var quotes = [
        {
            "quote": "We do not lose our souls in a single day, we lose it little by little.",
            "author": "Thelonius Poon",
            "source": "Quora",
            "link": "https://www.quora.com/What-are-some-of-the-lessons-one-should-definitely-learn-at-their-20s/answer/Thelonius-Poon?share=f26d0b98&srid=wi1p",
        },
        {
            "quote": "Everything can be taken from a man but one thing: the last of the human freedoms -- to choose" +
                " one’s attitude in any given set of circumstances, to choose one’s own way.",
            "author": "Viktor Frankl",
            "source": "Man's Search for Meaning",
            "link": "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
        },
        {
            "quote": "I sometimes want to fail more people in my classes. This is not because I am evil [...], but" +
                " because I want the people [...] to be truly the best in the world.",
            "author": "Luis von Ahn",
            "source": "blog",
            "link": "https://vonahn.blogspot.com/2009/03/failing-students.html",
        },
        {
            "quote": "As I look back at my life, I'd propose that my successes were the product of preparation and" +
                " hard work.",
            "author": "Paul G. Allen",
            "source": "Idea Man",
            "link": "https://www.goodreads.com/book/show/10139649-idea-man",
        },
        {
            "quote": "The brick walls give us a chance to show how badly we want something. They stop people who don’t want it badly enough.",
            "author": "Randy Pausch",
            "source": "The Last Lecture",
            "link": "https://www.goodreads.com/book/show/40611510-the-last-lecture"
        },
        {
            "quote": "Life isn't always so complicated, think what happens when we actually do as we say.",
            "author": "Unknown",
        },
        {
            "quote": "It is the time you have lost for your rose that gives [it] such importance.",
            "author": "Antoine de Saint-Exupéry",
            "source": "Le Petit Prince",
            "link": "https://www.goodreads.com/book/show/157993.The_Little_Prince",
        },
        {
            "quote": "Adding manpower to a late software project, makes it later.",
            "author": "Frederick P. Brooks Jr.",
            "source": "The Mythical Man Month",
            "link": "https://www.goodreads.com/book/show/13629.The_Mythical_Man_Month",
        }
    ];
    var blockquote = document.getElementById('quote');

    function setQuote(item, time=1500) {
        if ('quote' in item && 'author' in item) {
            blockquote.classList.toggle('invisible');
            setTimeout(function() {
                blockquote.innerHTML = '';

                var quote = document.createElement('p');
                quote.innerText = item.quote;

                var author = document.createElement('author');
                var authorText = item.author;
                if ('source' in item && 'link' in item) {
                    var link = document.createElement('a');
                    link.setAttribute('href', item.link);
                    link.innerText = item.source;
                    authorText += ', ';
                    author.innerText = authorText;
                    author.appendChild(link);
                }
                else {
                    author.innerText = authorText;
                }

                blockquote.appendChild(quote);
                blockquote.appendChild(author);
                blockquote.classList.toggle('invisible');
            }, time);
        }
    }
    var curIdx = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[curIdx], 0);
    setInterval(function() {
        var newIdx = Math.floor(Math.random() * quotes.length);
        while (curIdx === newIdx) {
            newIdx = Math.floor(Math.random() * quotes.length);
        }
        curIdx = newIdx;
        setQuote(quotes[curIdx]);
    }, 15 * 1000);
}());
