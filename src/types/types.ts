export type BundlesProps = {
    id: number,
    afbeelding: string,
    urlAlias: string,
    labelValue: string,
    title: string,
    lead: string,
    formatted: string
}

export type ArticleProps = {
    artcleData: {
        title: string,
        label: string,
        description: string,
        image: string
    }
};

export type ArticlesListVerticleProps = {
    bundles: BundlesProps[];
};

export type ArticlesListHorizontalProps = {
    bundles: BundlesProps[];
};

export type ArticleHorizontalLayoutProps = {
    bundle: BundlesProps
}

export type ArticleVerticleLayoutProps = {
    bundle: BundlesProps
}
