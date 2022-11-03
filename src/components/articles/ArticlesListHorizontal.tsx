import ArticleVerticleLayout from "./layout/ArticleVerticleLayout";
import { BundlesProps } from "../../types/types";

type ArticlesListHorizontalProps = {
    bundles: BundlesProps[];
};

const ArticlesListHorizontal = ({ bundles }: ArticlesListHorizontalProps) => {
    return (<div data-testid="horizontalArticles-wrapper" className="horizontal-articles">
        {(bundles || []).map((article: any) => (<ArticleVerticleLayout data-testid="articleVerticleLayout-component" key={article.title} bundle={article}></ArticleVerticleLayout>))}
    </div>)
};

export default ArticlesListHorizontal;