import type { FC } from "hono/jsx";
import Link from "../components/Link";

const Avatar: FC = () => {
    return (
        <div class="avatar">
          <img src="https://avatars.githubusercontent.com/atolycs" />
          <p> Atolycs </p>
          <Link title="Github" url="https://github.com/atolycs" icon="Github" label={false} size="24" />
          <Link title="Cloudflare Pages" url="https://github.com/atolycs" icon="CloudflarePages" size="24" label={false} />
        </div>
    )
}

export default Avatar