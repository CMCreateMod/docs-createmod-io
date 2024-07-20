import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The documentation is built with Docusaurus to be easily used.
        All programming languages are in one place and code blocks have a copy button ready to be clicked.
      </>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Found a mistake? Didn&apos;t find what you are looking for?
        Feel free to contribute to the docs on <Link href="https://go.createmod.io/github">GitHub</Link>!
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Svg: require('@site/static/img/powered_by_docusaurus.svg').default,
    description: (
      <>
        Proudly built with <Link href="https://docusaurus.io">Docusaurus</Link>, an open source documentation website framework.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
