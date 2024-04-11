import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Gemini se implementa en Gmail, Docs y más con Google One AI Premium";

const description =
  "El nuevo plan Google One AI Premium ahora brinda acceso a las funciones de Gemini en Gmail, Docs y otras aplicaciones de Workspace para cuentas personales.";

const cover =
  "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/02/gemini-gmail-google-one.jpg?w=1500&quality=80&strip=all&ssl=1";

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
