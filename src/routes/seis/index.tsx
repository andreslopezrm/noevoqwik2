import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "La primera beta pública de Android 15 ya está aquí";

const description =
  "Android posee diversas maneras de ahorrar espacio de almacenamiento, también diferentes formas";

const cover =
  "https://i.blogs.es/8106b7/android-15-portada/1200_800.webp?v=1";

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
