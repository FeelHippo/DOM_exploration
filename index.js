let isRunning = false;
let isOpen = false;

function init() {

    // generate document
    const root = document.getElementsByTagName('html')[0];

    // generate head
    const head = document.createElement('head');

    const title = document.createElement('title');
    title.appendChild(document.createTextNode('What is the DOM?'));
    head.appendChild(title);

    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    head.appendChild(metaViewport);

    const metaHttp = document.createElement('meta');
    metaHttp.httpEquiv = 'X-UA-Compatible';
    metaHttp.content = 'ie=edge';
    head.appendChild(metaHttp);

    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    // Thanks to https://www.getpapercss.com/
    styleLink.href = './paper.css';
    head.appendChild(styleLink);

    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = './favicon.ico';
    iconLink.type = 'image/x-icon';
    head.appendChild(iconLink);

    // generate body
    // generate header
    const header = document.createElement('h3');
    header.id = 'title';
    header.appendChild(document.createTextNode('Document Object Model (DOM)'));
    header.style.flexGrow = '1';

    // generate buttons
    const button = document.createElement('button');
    button.id = 'modify-style';
    button.type = 'button';
    button.innerHTML = 'Modify Style';
    button.style.width = '16em';

    const inspector = document.createElement('button');
    inspector.id = 'inspect-dom';
    inspector.type = 'button';
    inspector.innerHTML = 'Inspect this DOM';
    inspector.style.width = '16em';

    // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    const main = document.createElement('main');
    main.style.display = 'flex';
    main.style.flexDirection = 'column';
    main.style.justifyContent = 'space-between';
    main.style.alignItems = 'center';

    // render head
    main.appendChild(header);

    // generate paragraphs
    [
        {
            id: 'paragraph-first',
            text: 'The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document -- such as the HTML representing a web page -- in memory.',
        },
        {
            id: 'paragraph-second',
            text: 'The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document\'s structure, style, or content.',
        },
    ].forEach((p, index) => {
        const paragraph = document.createElement('p');
        paragraph.id = p.id;
        paragraph.innerHTML = p.text;
        paragraph.style.flexGrow = `${index + 1}`;
        // render paragraphs
        main.appendChild(paragraph);
    });

    const li = 'li';
    const ul = 'ul';

    const unorderedList = document.createElement(ul);
    [
        {
            type: li,
            text: '... is the data representation of the objects that comprise the structure and content of a document on the web',
        },
        {
            type: li,
            text: '... is a programming interface for web documents',
        },
        {
            type: li,
            text: '... represents the page so that programs can change the document\'s',
        },
        {
            type: ul,
            items: [
                {
                    type: li,
                    text: 'structure',
                },
                {
                    type: li,
                    text: 'style',
                },
                {
                    type: li,
                    text: 'content',
                },
            ],
        },
    ].forEach((item) => {
        !li.localeCompare(item.type)
            ? (
                () => {
                    const li = document.createElement(item.type);
                    li.innerHTML = item.text;
                    unorderedList.appendChild(li);
                }
            )()
            : (
                () => {
                    const unorderedChildList = document.createElement(item.type);
                    item.items.forEach(
                        (child) =>
                            {
                                const li = document.createElement(child.type);
                                li.innerHTML = child.text;
                                unorderedChildList.appendChild(li);
                            },
                    );
                    unorderedList.appendChild(unorderedChildList);
                }
            )();
    });
    // render ul
    main.appendChild(unorderedList);

    // render buttons
    const buttonSection = document.createElement('section');
    buttonSection.style.display = 'flex';
    buttonSection.style.flexFlow = 'column wrap';
    buttonSection.style.gap = '12px';

    buttonSection.appendChild(button);
    buttonSection.appendChild(inspector);

    main.appendChild(buttonSection);

    // Virtual DOM

    const virtualDOMSection = document.createElement('section');
    buttonSection.style.display = 'flex';
    buttonSection.style.flexFlow = 'column wrap';
    [
        {
            title: 'What is the Virtual DOM?',
            articles: [
                'The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.',
                'This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.',
                'Since "virtual DOM" is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term "virtual DOM" is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called "fibers" to hold additional information about the component tree. They may also be considered a part of "virtual DOM" implementation in React.',
            ],
        },
        {
            title: 'Is the Shadow DOM the same as the Virtual DOM?',
            articles: [
                'No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.',
            ],
        },
    ].forEach((p) => {
        const paragraph = document.createElement('p');
        paragraph.style.display = 'flex';
        paragraph.style.flexFlow = 'column wrap';
        paragraph.style.gap = '12px';

        const title = document.createElement('h4');
        title.innerHTML = p.title,
        paragraph.appendChild(title);

        p.articles.forEach((a) => {
            const article = document.createElement('article');
            article.innerHTML = a;
            paragraph.appendChild(article);
        });
        // render paragraphs
        virtualDOMSection.appendChild(paragraph);
    });

    main.appendChild(virtualDOMSection);

    const body = document.createElement('body');
    body.appendChild(main);

    // add global style
    body.style.padding = '10vh 5vw';

    root.appendChild(head);
    root.appendChild(body);

    button.addEventListener('click', () => {
        isRunning = !isRunning;
        // button
        button.innerHTML = isRunning ? 'STOP!' : 'Modify Style';
        // title
        const title = document.getElementById('title')
        
        isRunning
            ? title.animate(
                [
                    { transform: `translateY(${getRandomInt(0, 300)}px)` },
                    { transform: `translateY(-${getRandomInt(0, 300)}px)` },
                ],
                {
                    duration: getRandomInt(0, 3000),
                    iterations: Infinity,
                },
            )
            : title.getAnimations()[0].cancel();
    
        // paragraphs
        const first = document.getElementById('paragraph-first');
        const second = document.getElementById('paragraph-second');
        first.style.color = isRunning ? getRandomColor() : null;
        second.style.color = isRunning ? getRandomColor() : null;
    });

    inspector.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            const table = document.createElement('table');
            table.classList.add('paper-btn');
            [
                {
                    label: 'Document: ',
                    object: document,
                    description: 'When a member returns an object of type document, this object is the root document object itself.',
                },
                {
                    label: 'Node: ',
                    object: Node,
                    description: 'Node is an abstract interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.',
                },
                {
                    label: 'Element: ',
                    object: [...document.body.getElementsByTagName('*')].map(elementDetails),
                    description: 'The element type is based on node. It refers to an element or a node of type element returned by a member of the DOM API. Rather than saying, for example, that the document.createElement() method returns an object reference to a node, we just say that this method returns the element that has just been created in the DOM. element objects implement the DOM Element interface and also the more basic Node interface, both of which are included together in this reference.',
                },
                {
                    label: 'NodeList: ',
                    object: [...document.childNodes].map(elementDetails),
                    description: 'A nodeList is an array of elements, like the kind that is returned by the method document.querySelectorAll().',
                },
                {
                    label: 'Attr: ',
                    object: document.createAttribute('test'),
                    description: 'When an attribute is returned by a member (e.g., by the createAttribute() method), it is an object reference that exposes a special (albeit small) interface for attributes. Attributes are nodes in the DOM just like elements are, though you may rarely use them as such.',
                },
            ].forEach((row) => {
                const tr = document.createElement('tr');

                const label = document.createElement('th');
                label.scope = 'row';
                label.innerHTML = row.label;

                const description = document.createElement('td');
                description.innerHTML = row.description;

                const action = document.createElement('td');

                const link = document.createElement('a');
                link.appendChild(
                    document.createTextNode('>'),
                );
                link.setAttribute('title', row.label);
                link.setAttribute('target', '_blank');

                const blob = new Blob([JSON.stringify(row.object, null, 2)], { type: 'application/json' });
                const url = window.URL.createObjectURL(blob);

                link.addEventListener('click', () => window.open(url, '_blank'));
                action.appendChild(link);

                tr.appendChild(label);
                tr.appendChild(description);
                tr.appendChild(action);

                table.appendChild(tr);

            });
            main.appendChild(table);
        } else {
            const table = document.getElementsByTagName('table')[0];
            table.remove();
        }
    });
}

function elementDetails(node) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
    return {
        ...(node.id && { id: node.id }),
        ...(node.attributes && { assignedSlot: node.attributes }),
        ...(node.childElementCount && { childElementCount: node.childElementCount }),
        ...(node.children && { children: node.children }),
        ...(node.classList && { classList: node.classList }),
        ...(node.className && { className: node.className }),
        ...(node.clientHeight && { clientHeight: node.clientHeight }),
        ...(node.clientWidth && { clientWidth: node.clientWidth }),
        ...(node.firstElementChild && { firstElementChild: node.firstElementChild }),
        ...(node.innerHTML && { innerHTML: node.innerHTML }),
        ...(node.localName && { localName: node.localName }),
    }
}

function getRandomInt(lower, upper) {
    return Math.floor(lower + (Math.random() * (upper - lower + 1)));
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}