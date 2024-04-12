import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "¿Vas a probar Android 15 antes del lanzamiento?";

const description =
  "Dado que la versión beta pública se lanzó un poco antes de lo que habíamos anticipado y con pocas novedades, ¿vale la pena probar Android 15 antes del lanzamiento?";

const cover =
  "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/03/Android-15-Developer-Preview-2-logo7.jpg?w=1500&quality=80&strip=all&ssl=1";

export const head: DocumentHead = ({ url: { href } }) => {
  return {
    title: title,
    meta: [
      {
        name: "og:url",
        content: href,
      },
      {
        name: "og:type",
        content: "article",
      },
      {
        name: "og:image",
        content: cover,
      },
      {
        name: "og:image:secure_url",
        content: cover,
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: "og:site_name",
        content: "BitHouse",
      },
      {
        name: "og:title",
        content: title,
      },
      {
        name: "fb:app_id",
        content: "7572011069531273",
      },
    ],
  };
};

export default component$(() => {
  return (
    <>
      <article>
        <figure>
          <img src={cover} alt={title} width={1200} height={600} />
        </figure>
        <h1>{title}</h1>
      </article>
    </>
  );
});
