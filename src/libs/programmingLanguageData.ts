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

interface SVGProgrammingLanguage {
  icons: React.FC;
  className: string;
}

export const programmingLanguageData: SVGProgrammingLanguage[] = [
  {
    icons: SVGCss,
    className: "fill-css",
  },
  {
    icons: SVGDjango,
    className: "fill-django",
  },
  {
    icons: SVGExpress,
    className: "fill-express",
  },
  {
    icons: SVGHtml,
    className: "fill-html",
  },
  {
    icons: SVGJavaScript,
    className: "fill-javaScript",
  },
  {
    icons: SVGMongoDb,
    className: "fill-mongoDb",
  },
  {
    icons: SVGMysql,
    className: "fill-mySql",
  },
  {
    icons: SVGNextJs,
    className: "fill-nextJs",
  },
  {
    icons: SVGPrisma,
    className: "fill-prisma",
  },
  {
    icons: SVGPython,
    className: "fill-python",
  },
  {
    icons: SVGReact,
    className: "fill-react",
  },
  {
    icons: SVGSass,
    className: "fill-sass",
  },
  {
    icons: SVGTailwindCss,
    className: "fill-tailwind",
  },
  {
    icons: SVGTypeScript,
    className: "fill-typescript",
  },
  {
    icons: SVGVite,
    className: "fill-vite",
  },
];
