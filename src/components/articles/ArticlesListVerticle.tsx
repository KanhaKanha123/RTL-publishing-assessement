import ArticleHorizontalLayout from "./layout/ArticleHorizontalLayout";
import { BundlesProps } from "../../types/types";
import ErrorBoundary from "../../error-boundries/ErrorBoundry";

type ArticlesListVerticleProps = {
    bundles: BundlesProps[];
};

const ArticlesListVerticle = ({ bundles }: ArticlesListVerticleProps) => {
    return (<div data-testid="verticleArticles-wrapper" className="verticle-articles">
        {(bundles || []).map((article: BundlesProps) => (<ErrorBoundary key={Math.random()*10}><ArticleHorizontalLayout key={Math.random()*10} bundle={article}></ArticleHorizontalLayout></ErrorBoundary>))}
    </div>)
};

export default ArticlesListVerticle;