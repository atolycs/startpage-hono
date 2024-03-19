import type { FC } from "hono/jsx";
import Avatar from "./Avatar"


const BaseLayout: FC = () => {
    return (
        <div class="container">
            <Avatar />
      </div>  
    )
}

export default BaseLayout