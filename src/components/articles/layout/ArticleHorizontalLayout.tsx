import { Card } from 'react-bootstrap';
import { BundlesProps } from "../../../types/types";

type ArticleHorizontalLayoutProps = {
  bundle: BundlesProps
}

const ArticleHorizontalLayout = ({ bundle: { afbeelding, urlAlias, labelValue, title, lead, formatted } }: ArticleHorizontalLayoutProps) => {
  return (
    <a className='zoom' data-testid="horizontalLayout-a" href={urlAlias} target="_blank">
      <div data-testid="horizontalLayout-wrapper" className='article-horizontal-layout'>
        <Card.Img data-testid="horizontalLayout-img" variant='top' style={{ width: '30%' }} src={afbeelding} alt={labelValue}></Card.Img>
        <div data-testid="horizontalLayout-rightContentDiv" className='right-content-div'>
          <Card.Title data-testid="horizontalLayout-label-title" className="label">{labelValue}</Card.Title>
          <Card.Title data-testid="horizontalLayout-label-date" className="label">{formatted}</Card.Title>
          <span data-testid="horizontalLayout-layoutBoldTitle" className='layout-bold-title'>{title}</span>
          <span data-testid="horizontalLayout-lead" className="lead">{lead}</span>
        </div>
      </div>
    </a>
  )
}

export default ArticleHorizontalLayout;