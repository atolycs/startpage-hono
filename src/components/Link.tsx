import type { FC } from "hono/jsx"
import Icon from "./Icon"

export type props = {
    title: string;
    url: string;
    newtab?: string;
    icon?: string;
    size?: string;
}

const Link: FC<props> = (props) => {
    const {title, url, newtab = "_self", icon, size} = props
    return (
        <a
            href={url}
            target={newtab}
        > 
        <>
        { icon 
            && <Icon icon={icon} size={size} />
        } {title} 
        </>
        </a>
    )

}

export default Link