import { getProducts, getProductSlug } from "@/lib/product";
import { IProduct } from "@/types/product";
import Link from "next/link";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import Images from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BLOCKS } from "@contentful/rich-text-types";

export const generateStaticParams = async () => {
  const products: IProduct[] = await getProducts();

  return products.map((item) => ({
    slug: item.fields.slug,
  }));
};

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product: IProduct = await getProductSlug(params.slug);

  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-2">{children}</p>
      ),
    },
  };
  return (
    <div className="flex flex-col items-center mt-10 px-4 md:px-10 mb-28">
      <Link
        href={"/product"}
        className="flex gap-1 items-center w-full justify-start mb-4 hover:underline"
      >
        <FaArrowLeft />
        Kembali ke Produk
      </Link>
      <div className="flex flex-col md:flex-row p-4 w-full max-w-3xl">
        <div className="flex-1 flex justify-center md:justify-end mb-4 md:mb-0">
          <Images
            src={`https:${product.fields.thumbnail.fields.file.url}`}
            alt="thumbnail"
            width={400}
            height={275}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 ml-0 md:ml-10">
          <h1 className="text-3xl font-bold mb-2">{product.fields.title}</h1>
          <p className="text-xl mb-4 text-[#31511E] font-semibold">
            {product.fields.price}
          </p>
          <div className="mb-4">
            {documentToReactComponents(product.fields.description)}
          </div>
          <button className="flex items-center gap-2 bg-[#88C273] text-white py-2 px-4 rounded-lg hover:saturate-200 transition duration-200">
            <MdOutlineShoppingBag className="text-2xl" />+ Keranjang
          </button>
        </div>
      </div>
      <div className="w-full max-w-3xl mt-6">
        {documentToReactComponents(product.fields.content, options)}
      </div>
    </div>
  );
}
