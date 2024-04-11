import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "Aquí está todo lo nuevo de Android 15 Beta 1";

const description =
  "La Beta 1 de Android 15 está disponible hoy como la introducción para la mayoría de las personas a la próxima versión principal del sistema operativo de Google.";

const cover =
  "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/03/Android-15-Developer-Preview-2-logo8.jpg?w=1500&quality=82&strip=all&ssl=1";

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
