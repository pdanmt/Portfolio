import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";

export function Icons({ lang }) {
    if (lang.toLowerCase() === "javascript") {
        return <span><IoLogoJavascript /></span>
    }
    if (lang.toLowerCase() === "html") {
        return <span><IoLogoHtml5 /></span>
    }
    if (lang.toLowerCase() === "css") {
        return <span><IoLogoCss3 /></span>
    }
    if (lang.toLowerCase() === "react") {
        return <span><IoLogoReact /></span>
    }
}