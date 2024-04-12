import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Linux Mint está creando una nueva aplicación de chat de escritorio";

const description =
  "Hexchat al salir del chat deja (tengo tantas ganas de escribir hojas allí) que Linux Mint se encuentra con un dilema y una oportunidad.";

const image =
  "https://149366088.v2.pressablecdn.com/wp-content/uploads/2024/03/jargonaut-linux-mint-1536x806.jpg";

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
      {
        name: "og:image",
        content: image,
      },
      {
        name: "og:image:secure_url",
        content: image,
      },
      {
        name: "og:image:type",
        content: "image/jpeg",
      },
      {
        name: "og:image:width",
        content: "1536",
      },
      {
        name: "og:image:height",
        content: "806",
      },
      {
        name: "og:image:alt",
        content: title,
      },
    ],
  };
};

export default component$(() => {
  return (
    <>
      <article>
        <figure>
          <img src={image} alt={title} width={1200} height={600} />
        </figure>
        <h1>{title}</h1>
      </article>
    </>
  );
});
