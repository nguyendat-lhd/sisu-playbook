import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Chuẩn Bị',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Xây dựng business case cho AI, thành lập đội ngũ AI CoE với sự tham gia của các chuyên gia,
        và xác định nguồn lực cần thiết cho quá trình triển khai.
      </>
    ),
  },
  {
    title: 'Đánh Giá & Lập Kế Hoạch',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Đánh giá hiện trạng AI trong tổ chức, xây dựng chiến lược và kế hoạch hành động cụ thể,
        thiết lập các quy trình quản trị AI hiệu quả.
      </>
    ),
  },
  {
    title: 'Theo Dõi & Cải Tiến',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Phát triển cơ chế theo dõi và đánh giá hiệu quả triển khai AI, xác định KPIs,
        và liên tục cải tiến chiến lược dựa trên dữ liệu thực tế.
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

export default function HomepageFeatures(): ReactNode {
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
