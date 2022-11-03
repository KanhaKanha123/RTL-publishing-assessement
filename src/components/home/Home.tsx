import ArticlesListHorizontal from "../articles/ArticlesListHorizontal";
import ArticlesListVerticle from "../articles/ArticlesListVerticle";
import useGetData from '../../hooks/useGetData';
import Banner from "../banner/Banner";
import ErrorBoundary from "../../error-boundries/ErrorBoundry";
import { useRef } from "react";

const Home = () => {
    let callOnce = useRef<Boolean>(false);
    const {state:{articleData, error, loading},setApiUrl} = useGetData();

    const { bundelItems } = articleData;

    if (!callOnce.current) {
        setApiUrl('bundle-api.json');
    }
    
    callOnce.current = true;

    return (<>
        {loading && <span>Loading.......</span>}

        {articleData && (<div data-testid="home-page" className="home">
            <ErrorBoundary>
                <Banner data-testid="banner-component" artcleData={articleData}></Banner>
            </ErrorBoundary>

            {bundelItems?.length > 0 && <ErrorBoundary>
                <ArticlesListHorizontal data-testid="articlesListHorizontal-component" bundles={bundelItems.slice(0, 3)}></ArticlesListHorizontal>
            </ErrorBoundary>}

            {bundelItems?.length > 0 && <ErrorBoundary>
                <ArticlesListVerticle data-testid="articlesListVerticle-component" bundles={bundelItems.slice(3)}></ArticlesListVerticle>
            </ErrorBoundary>}
        </div>)}

        {error !== '' && <span>{error}</span>}
    </>
    )
}

export default Home;