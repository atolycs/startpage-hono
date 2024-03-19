import type { FC } from "hono/jsx"
import socialIcons from "./socialIcon";
import { html,raw } from "hono/html";

export type props = {
    icon: string;
    size?: string
}

const Link: FC<props> = (props) => {
    const {icon, size = "20"} = props
    return (
            <svg class={icon.toLowerCase()} width={size} height={size}>
              {
                raw(
                    // @ts-ignore
                    socialIcons[icon.toLowerCase()]
                )
              }
            </svg>
    )

}

export default Link