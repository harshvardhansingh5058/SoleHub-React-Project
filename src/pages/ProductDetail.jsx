import { useParams } from "react-router-dom";
import { products } from "../Components/Common/ProductData";
import ProductHero from "../Components/ProductDetail/ProductHero";
import ProductFeatures from "../Components/ProductDetail/ProductFeatures";
import ProductTabs from "../Components/ProductDetail/ProductTabs";
import RelatedProducts from "../Components/ProductDetail/RelatedProducts";

export default function ProductDetail() {
    const { id } = useParams();

    const product = products.find(
        item => item.id === Number(id)
    );

    const relatedProducts = products
        .filter(
            item =>
                item.category === product?.category &&
                item.id !== product?.id
        )
        .slice(0, 4);

    return (
        <div className="">
            {/* <h1 className="text-4xl font-bold">
                Product ID: {id}
            </h1> */}
            <ProductHero product={product} />
            <ProductFeatures />
            <ProductTabs product={product} />
            <RelatedProducts products={relatedProducts} />
        </div>
    );
}