import { formatFechaPeru } from "@/helpers/formatFechaPeru";
import { PostTypeEntry } from "@/types";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PortableArticle } from "./PortableArticle ";

type EntradaBlogProps = {
  data: PostTypeEntry[];
};

export const EntradaBlog = async ({ data }: EntradaBlogProps) => {
  const { title, cover, tags, publishedAt, author, body } = data[0];

  return (
    <section className="max-w-7xl container mx-auto px-4 py-12 space-y-8">
      {/* Titulo */}
      <div className="space-y-8">
        <h1 className="font-in-nunito text-4xl font-semibold text-center">
          {title}
        </h1>
        {/* Tags */}
        <div className="flex justify-center">
          {tags &&
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-in-cyan py-1 px-8 text-sm rounded-full text-white mr-2 font-semibold"
              >
                {tag?.title.toUpperCase()}
              </span>
            ))}
        </div>
      </div>
      {/* Imagen */}
      <div>
        <Image
          src={cover.url || ""}
          alt={cover.alt || ""}
          width={300}
          height={150}
          className="w-full  object-cover rounded-3xl"
        />
      </div>

      {/* Fecha y Autor */}
      <div className="space-y-8">
        <p className="text-in-gray-base text-center text-sm font-in-poppins">
          Publicado el {formatFechaPeru(publishedAt)}
        </p>
        <div className="flex justify-center items-center gap-4">
          <Avatar>
            <AvatarImage
              src={author.image.url || ""}
              alt={author.image.alt || ""}
            />
            <AvatarFallback>
              <p className="text-in-blue font-semibold">
                {author.name.charAt(0)}
              </p>
            </AvatarFallback>
          </Avatar>
          <p className="text-in-gray-base text-center text-sm font-in-poppins">
            Autor: {author.name}
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="py-2">
        <PortableArticle value={body} />
      </div>
    </section>
  );
};
