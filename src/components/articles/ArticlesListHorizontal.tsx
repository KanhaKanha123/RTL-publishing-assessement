import ArticleVerticleLayout from "./layout/ArticleVerticleLayout";
import { BundlesProps, ArticlesListHorizontalProps } from "../../types/types";
import ErrorBoundary from "../../error-boundries/ErrorBoundry";

const ArticlesListHorizontal = ({ bundles }: ArticlesListHorizontalProps) => {
    return (<div data-testid="horizontalArticles-wrapper" className="horizontal-articles">
        {(bundles || []).map((article: BundlesProps) => (<ErrorBoundary key={Math.random() * 10}><ArticleVerticleLayout data-testid="articleVerticleLayout-component" key={Math.random() * 10} bundle={article}></ArticleVerticleLayout></ErrorBoundary>))}
    </div>)
};

export default ArticlesListHorizontal;