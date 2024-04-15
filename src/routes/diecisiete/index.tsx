import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Apple entra en la IA por la puerta grande y presenta ReaAML, un lenguaje que presume de ser más rápido y eficaz que GPT-4";

const description =
  "Apple sigue progresando en su carrera por liderar la inteligencia artificial. Ahora conocemos su nuevo lenguaje, que según los ingenieros superan sustancialmente a GPT-4.";

const image = "https://i.blogs.es/70be17/apple-gpt/1200_800.webp?v=1";

export const head: DocumentHead = ({ url: { href } }) => {
  return {
    title: title,
    meta: [
      {
        property: "og:url",
        content: href,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:site_name",
        content: "BitHouse",
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "fb:app_id",
        content: "7572011069531273",
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:image:secure_url",
        content: image,
      },
      {
        property: "og:image:type",
        content: "image/jpeg",
      },
      {
        property: "og:image:width",
        content: "1536",
      },
      {
        property: "og:image:height",
        content: "806",
      },
      {
        property: "og:image:alt",
        content: title,
      },
    ],
  };
};

export default component$(() => {
  return (
    <>
      <article>
        <h1>{title}</h1>
        <img src={image} alt={title} width={1200} height={600} />
      </article>
    </>
  );
});
