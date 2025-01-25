import React from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/MDXComponents/A';

export default function MDXA(props: Props): JSX.Element {
  let external = true;
    if(props.href?.toString().startsWith("/") || props.href?.toString().startsWith("#"))
        external = false;

    if(external) {
      props = {
        // @ts-ignore
        "data-umami-event": "outbound-link-click",
        "data-umami-event-url": props.href,
        ...props
      }
    }

  return <Link {...props} />;
}
