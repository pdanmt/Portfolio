import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export function Icons({ lang }) {
    switch (lang.toLowerCase()) {
        case "javascript":
            return <span><IoLogoJavascript /></span>
            break
        case "typescript":
            return <span><SiTypescript /></span>
            break
        case "html":
            return <span><IoLogoHtml5 /></span>
            break
        case "css":
            return <span><IoLogoCss3 /></span>
            break
        case "react":
            return <span><IoLogoReact /></span>
            break
    }
}