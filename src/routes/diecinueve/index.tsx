import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Ni nuevas apps ni IA la última beta de iPadOS revela algunas funciones de los futuros iPad 2024";

const description =
  "La primera beta de iPadOS 17.5 contiene líneas de código que muestran estas nuevas funcionalidades. Sin embargo, es probable que los interesados esperasen algo más";

const image =
  "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/06/iPadOS-16-iPad-sin-M1-scaled.jpg?fit=2560%2C1440&quality=51&strip=all&ssl=1";

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
