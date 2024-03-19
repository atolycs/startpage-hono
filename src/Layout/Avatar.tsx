import type { FC } from "hono/jsx";
import Link from "../components/Link";

const Avatar: FC = () => {
    return (
        <div class="avatar">
          <img src="https://avatars.githubusercontent.com/atolycs" />
          <p> Atolycs </p>
          <p><Link title="Github" url="https://github.com/atolycs" icon="Github" /></p>
          <p><Link title="Cloudflare Pages" url="https://github.com/atolycs" icon="CloudflarePages" /></p>
        </div>
    )
}

export default Avatar