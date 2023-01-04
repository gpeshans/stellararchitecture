import * as React from 'react';
import { graphql } from 'gatsby';

interface ProjectTemplateProps {
  data: any;
}

const ProjectTemplate = (props: ProjectTemplateProps) => {
  console.log('props', props);
  return <>Test</>;
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
