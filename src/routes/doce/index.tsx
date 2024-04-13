import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title = "Tener un Android barato no es sinónimo de lentitud.";

const description =
  "No es necesario adquirir un móvil caro para disfrutar de un buen rendimiento. Te cuento mis trucos para conseguirlo";

const image = "https://i.blogs.es/7a25bd/android-lento-acelerar/840_560.jpeg";

export const head: DocumentHead = ({ url: { href } }) => {
  return {
    title: title,
    meta: [
      {
        name: "og:url",
        property: href,
      },
      {
        name: "og:type",
        property: "article",
      },
      {
        name: "og:description",
        property: description,
      },
      {
        name: "og:site_name",
        property: "BitHouse",
      },
      {
        name: "og:title",
        property: title,
      },
      {
        name: "fb:app_id",
        property: "7572011069531273",
      },
      {
        name: "og:image",
        property: image,
      },
      {
        name: "og:image:secure_url",
        property: image,
      },
      {
        name: "og:image:alt",
        property: title,
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
