import { Card } from 'react-bootstrap';
import { ArticleVerticleLayoutProps, BundlesProps } from "../../../types/types";

const ArticleVerticleLayout = ({ bundle: { afbeelding, urlAlias, labelValue, title, lead, formatted } }: ArticleVerticleLayoutProps) => {
    return (
        <div data-testid="article-verticle-layout-wrapper" className="article-verticle-layout">
            <Card>
                <a className='zoom' data-testid="verticleLayout-a" href={urlAlias} target="_blank">
                    <Card.Img data-testid="verticleLayout-img" variant='top' style={{ height: '250px' }} src={afbeelding} alt={labelValue}></Card.Img>
                </a>
                <Card.Title data-testid="verticleLayout-label-title" className="label">{labelValue}</Card.Title>
                <Card.Title data-testid="verticleLayout-label-date" className="label">{formatted}</Card.Title>
                <span data-testid="verticleLayout-layoutBoldTitle" className='layout-bold-title'>{title}</span>
                <span data-testid="verticleLayout-lead" className="lead">{lead.substring(0, 30)}...</span>
            </Card>
        </div >

    )
}

export default ArticleVerticleLayout;