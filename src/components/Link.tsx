import type { FC } from "hono/jsx"
import SocialIcon from "./SocialIcon"

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
            && <SocialIcon icon={icon} size={size} />
        } {title} 
        </>
        </a>
    )

}

export default Link