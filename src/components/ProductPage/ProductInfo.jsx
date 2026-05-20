import { ActionButtons } from "./ActionButtons";
import { Price } from "./Price";
import { ProductHeader } from "./ProductHeader";
import { ProductMeta } from "./ProductMeta";
import { QuantitySelector } from "./QuantitySelector";
import { Rating } from "./Rating";
import { StockBadge } from "./StockBadge";

export function ProductInfo({
  id,
  title,
  description,
  meta,
  rating,
  price,
  stock,
  freeShipping,
  discountCode,
  image,
  author,
}) {
  const product = { id, title, price: price?.current, image, author };

  return (
    <div className="w-full flex flex-col gap-4">
      <ProductHeader title={title} description={description} />
      <ProductMeta meta={meta} />
      <div className="flex justify-between">
        <Rating {...rating} />
        <StockBadge
          stock={stock}
          freeShipping={freeShipping}
          discountCode={discountCode}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <Price {...price} />
        </div>
        <div className="flex gap-3">
          <QuantitySelector />
          <ActionButtons product={product} />
        </div>
      </div>
    </div>
  );
}
