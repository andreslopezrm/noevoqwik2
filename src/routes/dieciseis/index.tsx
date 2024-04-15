import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Este programa te permite tunear tu Windows para que parezca un MacOS";

const description =
  "Puede que, aunque estés la mar de contento con tu ordenador Windows, te parezca atractiva la interfaz de macOS, el sistema operativo de los ordenadores de Apple. Es innegable que la estética de los MacBook es bastante limpia";

const image =
  "https://www.adslzone.net/app/uploads-adslzone.net/2024/04/pcmacos.jpg";

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
