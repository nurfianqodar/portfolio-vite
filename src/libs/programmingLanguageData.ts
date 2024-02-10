import React from "react";
import SVGCss from "../svg/SVGCss";
import SVGDjango from "../svg/SVGDjango";
import SVGExpress from "../svg/SVGExpress";
import SVGHtml from "../svg/SVGHtml";
import SVGJavaScript from "../svg/SVGJavaScript";
import SVGMongoDb from "../svg/SVGMongoDb";
import SVGMysql from "../svg/SVGMysql";
import SVGNextJs from "../svg/SVGNextJs";
import SVGPrisma from "../svg/SVGPrisma";
import SVGPython from "../svg/SVGPython";
import SVGReact from "../svg/SVGReact";
import SVGSass from "../svg/SVGSass";
import SVGTailwindCss from "../svg/SVGTailwindCss";
import SVGTypeScript from "../svg/SVGTypeScript";
import SVGVite from "../svg/SVGVite";
import SVGPandas from "../svg/SVGPandas";
import SVGSciPy from "../svg/SVGSciPy";

interface SVGProgrammingLanguage {
  icons: React.FC;
  className: string;
  title: string;
  link: string;
  description: string;
}

export const programmingLanguageData: SVGProgrammingLanguage[] = [
  {
    icons: SVGHtml,
    className: "fill-html",
    title: "HTML 5",
    link: "https://www.w3schools.com/html/default.asp",
    description:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).",
  },
  {
    icons: SVGCss,
    className: "fill-css",
    title: "CSS 3",
    link: "https://www.w3schools.com/css/",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.",
  },
  {
    icons: SVGJavaScript,
    className: "fill-javaScript",
    title: "JavaScript",
    link: "",
    description:
      "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2024, 98.9% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O. JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js. Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.",
  },
  {
    icons: SVGTypeScript,
    className: "fill-typescript",
    title: "TypeScript",
    link: "https://www.w3schools.com/typescript/index.php",
    description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons. TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js, Deno or Bun). Multiple options are available for transpilation. The default TypeScript Compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript. TypeScript supports definition files that can contain type information of existing JavaScript libraries, much like C++ header files can describe the structure of existing object files. This enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. There are third-party header files for popular libraries such as jQuery, MongoDB, and D3.js. TypeScript headers for the Node.js library modules are also available, allowing development of Node.js programs within TypeScript. The TypeScript compiler is itself written in TypeScript and compiled to JavaScript. It is licensed under the Apache License 2.0. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.",
  },
  {
    icons: SVGPython,
    className: "fill-python",
    title: "Python",
    link: "https://docs.python.org",
    description:
      "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a 'batteries included' language due to its comprehensive standard library. Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0.[34] Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2. Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community.",
  },
  {
    icons: SVGDjango,
    className: "fill-django",
    title: "Django",
    link: "https://docs.djangoproject.com/",
    description:
      "Django (/ˈdʒæŋɡoʊ/ JANG-goh; sometimes stylized as django)[6] is a free and open-source, Python-based web framework that runs on a web server. It follows the model–template–views (MTV) architectural pattern.[7][8] It is maintained by the Django Software Foundation (DSF), an independent organization established in the US as a 501(c)(3) non-profit. Django's primary goal is to ease the creation of complex, database-driven websites. The framework emphasizes reusability and 'pluggability' of components, less code, low coupling, rapid development, and the principle of don't repeat yourself.[9] Python is used throughout, even for settings, files, and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.",
  },
  {
    icons: SVGExpress,
    className: "fill-express",
    title: "Express.js",
    link: "https://expressjs.com/",
    description:
      "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js. The original author, TJ Holowaychuk, described it as a Sinatra-inspired server,[5] meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library.",
  },

  {
    icons: SVGNextJs,
    className: "fill-nextJs",
    title: "Next.js",
    link: "https://nextjs.org/",
    description:
      "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation. React documentation mentions Next.js among 'Recommended Toolchains' advising it to developers when 'building a server-rendered website with Node.js'. Where traditional React apps can only render their content in the client-side browser, Next.js extends this functionality to include applications rendered on the server-side. The copyright and trademarks for Next.js are owned by Vercel, which also maintains and leads its open-source development.",
  },
  {
    icons: SVGPrisma,
    className: "fill-prisma",
    title: "Prisma ORM",
    link: "https://www.prisma.io/",
    description:
      "Prisma provides the best experience for your team to work and interact with databases. Even complex things like connection pooling, caching, real-time database subscriptions are a breeze with our products. Build your application, optimize to make everything run smoothly, and grow with your users and requirements.",
  },

  {
    icons: SVGReact,
    className: "fill-react",
    title: "React.js",
    link: "https://react.dev/",
    description:
      "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.",
  },
  {
    icons: SVGSass,
    className: "fill-sass",
    title: "Sass",
    link: "https://sass-lang.com/documentation/",
    description:
      "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.[2] It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively. CSS3 consists of a series of selectors and pseudo-selectors that group rules that apply to them. Sass (in the larger context of both syntaxes) extends CSS by providing several mechanisms available in more traditional programming languages, particularly object-oriented languages, but that are not available to CSS3 itself. When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file. The Sass interpreter translates SassScript into CSS. Alternatively, Sass can monitor the .sass or .scss file and translate it to an output .css file whenever the .sass or .scss file is saved.",
  },
  {
    icons: SVGTailwindCss,
    className: "fill-tailwind",
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/docs/",
    description:
      "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of 'utility' CSS classes that can be used to style each element by mixing and matching. For example, in other traditional systems, there would be a class message-warning that would apply a yellow background color and bold text. To achieve this result in Tailwind, one would have to apply a set of classes created by the library: bg-yellow-300 and font-bold.",
  },

  {
    icons: SVGVite,
    className: "fill-vite",
    title: "Vite.js",
    link: "https://vitejs.dev/",
    description:
      "Vite (French: [vit], like 'veet') is a local development server written by Evan You, the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup and esbuild internally for bundling. It monitors files as they're being edited and upon file save the web browser reloads the code being edited through a process called Hot Module Replacement (HMR) which works by just reloading the specific file being changed using ES6 modules (ESM) instead of recompiling the entire application. Vite provides built-in support for server-side rendering (SSR). By default, it listens on TCP port 5173. It is possible to configure Vite to serve content over HTTPS and proxy requests (including WebSocket) to a back-end web server (such as Apache HTTP Server or lighttpd).",
  },
  {
    icons: SVGPandas,
    className: "fill-pandas",
    title: "Pandas",
    link: "https://pandas.pydata.org/docs/",
    description:
      "Pandas (stylized as pandas) is a software library written for the Python programming language for data manipulation and analysis. In particular, it offers data structures and operations for manipulating numerical tables and time series. It is free software released under the three-clause BSD license.[2] The name is derived from the term 'panel data', an econometrics term for data sets that include observations over multiple time periods for the same individuals, as well as a play on the phrase 'Python data analysis'. Wes McKinney started building what would become Pandas at AQR Capital while he was a researcher there from 2007 to 2010. The development of Pandas introduced into Python many comparable features of working with DataFrames that were established in the R programming language. The library is built upon another library, NumPy.",
  },
  {
    icons: SVGSciPy,
    className: "fill-scipy",
    title: "SciPy",
    link: "https://docs.scipy.org/doc/scipy/",
    description:
      "SciPy (pronounced /ˈsaɪpaɪ/ 'sigh pie') is a free and open-source Python library used for scientific computing and technical computing. SciPy contains modules for optimization, linear algebra, integration, interpolation, special functions, FFT, signal and image processing, ODE solvers and other tasks common in science and engineering. SciPy is also a family of conferences for users and developers of these tools: SciPy (in the United States), EuroSciPy (in Europe) and SciPy.in (in India).[4] Enthought originated the SciPy conference in the United States and continues to sponsor many of the international conferences as well as host the SciPy website. The SciPy library is currently distributed under the BSD license, and its development is sponsored and supported by an open community of developers. It is also supported by NumFOCUS, a community foundation for supporting reproducible and accessible science.",
  },
  {
    icons: SVGMongoDb,
    className: "fill-mongoDb",
    title: "MongoDB",
    link: "https://www.mongodb.com/docs/",
    description:
      "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License (SSPL). MongoDB is a member of the MACH Alliance.",
  },
  {
    icons: SVGMysql,
    className: "fill-mySql",
    title: "MySQL",
    link: "https://dev.mysql.com/doc/",
    description:
      "MySQL (/ˌmaɪˌɛsˌkjuːˈɛl/)[5] is an open-source relational database management system (RDBMS).[5][6] Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter My,[7] and 'SQL', the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language that programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.",
  },
];
