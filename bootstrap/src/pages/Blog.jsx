import { Head } from "../components/tool/Head";
import { Jane } from "../components/tool/Jane";
export const Blog = () => {
  return (
    <div>
      <Head color={"blue"} />
      <div className="d-flex flex-column">
        <div>Blog posts</div>
        <div>Our latest updates and blogs about managing your team</div>
        <div>
          <Jane />
        </div>
      </div>
    </div>
  );
};
