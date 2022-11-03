import ArticleHorizontalLayout from "./layout/ArticleHorizontalLayout";
import { BundlesProps } from "../../types/types";

type ArticlesListVerticleProps = {
    bundles: BundlesProps[];
};

const ArticlesListVerticle = ({ bundles }: ArticlesListVerticleProps) => {
    return  (<div data-testid="verticleArticles-wrapper" className="verticle-articles">
    {(bundles || []).map((article: any) => (<ArticleHorizontalLayout key={article.title} bundle={article}></ArticleHorizontalLayout>))}
    </div>)
};

export default ArticlesListVerticle;