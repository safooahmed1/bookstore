import { useParams } from "react-router-dom";
import Herosection from "../components/HeroSection/Herosection";
import { ProductGallery } from "../components/ProductPage/ProductGallery";
import { ProductInfo } from "../components/ProductPage/ProductInfo";
import { ProductTabs } from "../components/tabDetails/ProductTabs";
import { useProductDetails } from "../hooks/useProducts";

export default function ProductPage() {
  const { productId } = useParams();
  const { data, isLoading, error } = useProductDetails(productId);

  if (isLoading) {
    return (
      <div>
        <Herosection h="h-[120px]" />
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mainColor"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Herosection h="h-[120px]" />
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-500">Failed to load product</p>
        </div>
      </div>
    );
  }

  const product = data?.data || data || {};
  const details = product.details || [];

  return (
    <>
      <div>
        <Herosection h="h-[120px]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container p-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <ProductGallery
              mainImage={product.main_image || product.image}
              thumbnails={product.images || [product.main_image || product.image]}
            />
            <ProductInfo
              id={product.id}
              title={product.title}
              description={product.description}
              meta={product.meta || []}
              rating={{ value: product.rating, count: product.review_count }}
              price={{ current: product.price, old: product.old_price }}
              stock={product.stock || "In Stock"}
              freeShipping={product.free_shipping || "Free Shipping Today"}
              discountCode={product.discount_code}
              image={product.main_image || product.image}
              author={product.author}
            />
          </div>
          <ProductTabs details={details} />
        </div>
      </div>
    </>
  );
}
