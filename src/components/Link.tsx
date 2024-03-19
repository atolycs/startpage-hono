import type { FC } from "hono/jsx"
import SocialIcon from "./SocialIcon"
import { raw } from "hono/html"

export type props = {
    title: string;
    url: string;
    label?: boolean;
    newtab?: string;
    icon?: string;
    size?: string;
}

const Link: FC<props> = (props) => {
    const {title, url, newtab = "_self", icon, size, label = true} = props
    return (
        <a
            href={url}
            target={newtab}
            style={
                icon && "text-decoration: none"
            }
        > 
        <>
        { icon 
            && <SocialIcon icon={icon} size={size} />
        } {label
            && title } 
        </>
        </a>
    )

}

export default Link