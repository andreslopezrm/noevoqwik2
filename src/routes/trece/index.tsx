import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const title =
  "Snap Store revisará manualmente las aplicaciones de nuevos editores";

const description =
  "Snap Store Flatpak y Snap, los dos formatos de paquetes independientes más populares del panorama se han ganado su hueco a base de insistencia y conveniencia, y lo mismo se podría decir de las tiendas";

const image =
  "https://www.muylinux.com/wp-content/uploads/2024/03/SnapStore.png";

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
